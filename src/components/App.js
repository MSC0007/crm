// Les imports
import React, { Component } from 'react';
import './App.css';
import data from '../data.json';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Grid from './Grid';


// Notre composant de base "App.js" de type classe(Statefull)
class App extends Component {

  // Creation d'un constructeur en lui passant les proprietes de notre composant.
  constructor(props) {
    // Passage des proprietés à l'element parent
    super(props)
    // Utilisation du state pour charger les données depuis la collection "data.json"
    this.state = { data }
  }


  // On initialise Firebase avant le montage(componentWillMount()) de notre composant "App.js".
  componentWillMount() {

    // Utilisation de la clé d'accés(API Key) pour initialiser notre backend en ligne(firebase).
    firebase.initializeApp({
      apiKey: "AIzaSyBg25HMnjgrfDdSj2mVtZIx5vpgkIMYoG4",

      authDomain: "crm-linkedin-b8225.firebaseapp.com",

      projectId: "crm-linkedin-b8225",

      storageBucket: "crm-linkedin-b8225.appspot.com",

      messagingSenderId: "178940971072",

      appId: "1:178940971072:web:0937afcaedbc36654577a5",

      measurementId: "G-1MCMEXD69H"

    })
  }

  // Methode "render()" de notre composant principal "App.js"
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Contacts</a>
            </div>
          </nav>
        </div>

        <div>
          <Grid items={this.state.data} />
        </div>

      </div>
    );
  }
}

// Exportation de notre composant principal "App.js" en module
export default App;
