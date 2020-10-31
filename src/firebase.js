import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCIvlp8ft5TzaMKxbCRyGGoY52x20NykFk",
    authDomain: "react-discord-tutor.firebaseapp.com",
    databaseURL: "https://react-discord-tutor.firebaseio.com",
    projectId: "react-discord-tutor",
    storageBucket: "react-discord-tutor.appspot.com",
    messagingSenderId: "310042203846",
    appId: "1:310042203846:web:07c5020699b847c17269c7"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
