// Les imports
import React, { Component } from 'react';
import './App.css';
import firebase from '../firebase';
import Grid from './Grid';
import Form from './Form';



// Notre composant de base "App.js" de type classe(Statefull)
class App extends Component {

  // Creation d'un constructeur en lui passant les proprietes de notre composant.
  constructor(props) {
    // Passage des proprietés à l'element parent
    super(props);
    // Utilisation du state pour charger les données depuis la collection "data.json"
    // Initilisation de 'contacts' avec un array vide.
    this.state = {
      contacts: []
    };
  }

  // Fonction "updateData()" pour recuperer les données depuis "firebase.firestore"
  updateData() {
    // Constante "db" pour stocker les identifiants de connexion à la base firestore.
    const db = firebase.firestore();
    // Constante "settings" pour avoir les bonnes dates avec "firestore".
    // const settings = { timestampsInSnapshots: true };
    // On passe les parametres/settings à firestore en executant la methode "settings()".
    //db.settings(settings);
    // Recuperation des documents de notre collection "contacts"
    db.collection('contacts').get()
      // Utilisation d'un "snapshot" en entrée pour du traitement en sortie avec le "then".
      .then((snapshot) => {
        // Tableau vide crée pour recuperer plus-bas les objets/doc avec "push()".
        let contacts = [];
        // Pour chaque "snapshot", avec forEach() on recupere un objet pour chaque document(doc). 
        snapshot.forEach((doc) => {
          let contact = Object.assign({ id: doc.id }, doc.data());
          // On passe l'objet "contact" à notre tableau "contacts" crée precedement.
          contacts.push(contact);
        });
        // Mise à jour de notre state avec setState().
        this.setState({
          // On pourrait simplement mettre "contacts" uniquement car c'est une variable globale 
          // et c'est la derniere valeur qui sera prise en compte.
          contacts: contacts
        });
      })
      // En cas d'erreur, on l'affiche sur la console dans le "catch".
      .catch((err) => {
        console.log('Erreur FireStore :', err);
      });

  }


  // Fonction "deletData()" pour supprimer un document grace à son ID "docID".
  deleteData(docID) {
    // Les trois ci-dessous sont pour la connexion à firestore
    const db = firebase.firestore();
    //const settings = { timestampsInSnapshots: true };
    //db.settings(settings);

    // Pour supprimer un document de la collection "contacts"
    db.collection('contacts').doc(docID).delete();
    // Mise à jour de l'interface Utilisateur
    this.updateData();
  }

  // On va mettre à jour les contacts depuis firebase avec "componentWillMount()" :
  componentWillMount() {
    // Execution de "updateData()" aussitot que le composant "App.js" est monté.
    this.updateData();
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
          {/* Envoi de la fonction "updateData" en propriété au composant "Form.js"  */}
          <Form updateData={this.updateData.bind(this)} />
          <Grid items={this.state.contacts} deleteData={this.deleteData.bind(this)} />
        </div>

      </div>
    );
  }
}

// Exportation de notre composant principal "App.js" en module
export default App;
