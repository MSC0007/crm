// Les imports
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// Variable "config" qui contiendra les parametres d'identification de firebase
const config = {
    apiKey: "AIzaSyBg25HMnjgrfDdSj2mVtZIx5vpgkIMYoG4",

    authDomain: "crm-linkedin-b8225.firebaseapp.com",

    projectId: "crm-linkedin-b8225",

    storageBucket: "crm-linkedin-b8225.appspot.com",

    messagingSenderId: "178940971072",

    appId: "1:178940971072:web:0937afcaedbc36654577a5",

    measurementId: "G-1MCMEXD69H"
};

// Initialisation de firebase avec la variable "config"
firebase.initializeApp(config);

// Exportation du fichier de configuration
export default firebase;
