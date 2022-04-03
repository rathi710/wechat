import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({

    apiKey: "AIzaSyDdkRs8hwbD_o3D_hVy1nP0kq1KkdENB4k",
    authDomain: "wechat-b4a7b.firebaseapp.com",
    projectId: "wechat-b4a7b",
    storageBucket: "wechat-b4a7b.appspot.com",
    messagingSenderId: "788089980326",
    appId: "1:788089980326:web:5a2341419c598dfef57b67",
    
  })
  .auth();
