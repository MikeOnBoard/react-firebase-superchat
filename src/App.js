import React from 'react';
import './App.css';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

initializeApp({  
 // Here your credentials from firebase
});

const auth = getAuth();
const firestore = getFirestore();
const provider = new GoogleAuthProvider();

function signInWithGoogle() {
  signInWithPopup(auth,provider)
    .then((result) => {
      // Handle successful sign-in
      console.log('Sign-in successful:', result);
    })
    .catch((error) => {
      // Handle sign-in error
      console.error('Sign-in error:', error);
    });
}

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section>
        { user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}
function ChatRoom() {
  const dummy = React.useRef();
  const messagesRef = collection(firestore, 'messages');
  const messagesQuery = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });
  const [formValue, setFormValue] = React.useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SignOut />
      <main>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
        />
        <button type="submit" disabled={!formValue}>🕊️</button>
      </form>
    </>
  );
}


function ChatMessage(props) {  
  const { text, uid } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (<>
    <div className={`message ${messageClass}`}>
    <img src={auth.currentUser.photoURL} alt="" />
      <p>{text}</p>
    </div>
  </>)
}

export default App;
