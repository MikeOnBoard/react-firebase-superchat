# React Firebase SuperChat
A real-time chat application built with React and Firebase. Users can create accounts, join chat rooms, and exchange messages instantly.

![Review](https://github.com/MikeOnBoard/react-firebase-superchat/blob/master/readme-source/readme-superchat-source.PNG)

## Project Structure

````bash
react-firebase-superchat/
├── src/
│   ├── components/         # Reusable components (e.g., Chat, Message)
│   ├── firebase.js         # Firebase configuration
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
├── .env                    # Environment variables for Firebase config
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
└── ...
````

## Prerequisites
- Node.js and npm (or yarn).
- Firebase Account with Firestore and Authentication enabled.
## Getting Started
1.Clone the repository:

````bash
git clone https://github.com/MikeOnBoard/react-firebase-superchat.git
cd react-firebase-superchat
````

2.Install dependencies:

````bash
npm install
````
3.Firebase Setup:

- Create a project in the Firebase Console.
- Enable Firestore Database and Authentication (with Google as a provider).
- Copy Firebase configuration settings from your Firebase project.

4.Environment Variables:

- In the project root, create a ``.env`` file with the following:

````makefile
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
````
5.Start the app:

````bash
npm start
````
Visit http://localhost:3000 to see the application in action.

## **Available Scripts**
- ``npm start`` - Runs the app in development mode.
- ``npm test`` - Runs tests (if applicable).
- ``npm run build`` - Builds the app for production.
- ``npm run eject`` - Allows access to advanced configuration files.
## **Firebase Integration**
### **Authentication**
- Firebase Authentication allows users to sign in using Google.
- Users' information (e.g., name, photo) is stored upon sign-in for display in chat messages.
### **Firestore Database**
- Messages are stored in Firestore in real-time, allowing instant updates for all users.
- Database structure:

````javascript
messages/
  ├── messageId (auto-generated)
    ├── text: string
    ├── createdAt: timestamp
    ├── uid: user ID
    ├── displayName: user's name
    └── photoURL: user's profile image
````
## **Key Features**
- Real-Time Chat: Powered by Firebase's Firestore, ensuring instant message delivery and updates.
- Authentication: Google Sign-In allows secure and easy access.
- Responsive UI: Optimized for both mobile and desktop.

## **Dependencies**
- React - JavaScript library for building user interfaces.
- Firebase - Provides backend services like Authentication and Firestore.
- React Firebase Hooks - Simplifies Firebase integration in React.
## **Contributing**
1. Fork the repository.
2. Create a branch for your feature: ``git checkout -b feature-name``.
3. Commit your changes: ``git commit -m "Add feature"``.
4. Push to the branch: ``git push origin feature-name``.
5. Submit a pull request.
## **Conclusion**
This project demonstrates a responsive and real-time chat application built with React and Firebase. It showcases Firebase’s real-time database and authentication capabilities, making it an ideal foundation for learning or extending real-time applications.

This documentation provides a complete overview for both users and developers, including configuration and setup details specific to Firebase integration.