// Les Imports
import React, { Component } from 'react';
import firebase from '../firebase';

// Notre composant de type classNamee "Form.js"
class Form extends Component {

    // Fonction "updateData" pour recuperer la fonction "updateData" passé en proprieté depuis "App.js"
    updateData() {
        //Execution de la fonction updateData()
        this.props.updateData();
    }

    // Fonction "addContact" pour ajouter de nouveaux objets (contacts) et mettre à jour l'interface.
    addContact = (e) => {
        // Rafraichir la page lorsque l'evenement "e"(clique sur le bouton "submit") se produit. 
        e.preventDefault();

        // Variable pour stocker les objets
        let newContact = {
            // e.target.fieldId.value
            prenom: e.target.prenom.value,
            nom: e.target.nom.value,
            email: e.target.email.value,
            compagnie: e.target.compagnie.value,
            notes: e.target.notes.value,
        }

        // Constante "db" pour stocker les identifiants de connexion à la base firestore.
        const db = firebase.firestore();
        // Constante "settings" pour avoir les bonnes dates avec "firestore".
        //const settings = { timestampsInSnapshots: true };
        // On passe les parametres/settings à firestore en executant la methode "settings()".
        //db.settings(settings);

        // Ajout de l'objet "newContact"
        db.collection('contacts').add(newContact);

        // Recuperation du formulaire  pour effacer les champs aprés soumission avec "reset()"
        document.getElementById("addContact").reset();

        // Mise à jour de l'interface avec "updateData()"
        this.updateData();

    }

    // Methode render de notre composant classNamee "Form.js"
    render() {
        return (
            // Insertion d'un formulaire MaterializeCss(Forms --> Text Inputs)
            <div className="row">
                <form className="col s12" id="addContact" onSubmit={this.addContact.bind(this)}>
                    {/* Premiere section de notre formulaire(Prenom, Nom) */}
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="prenom" type="text" className="validate" />
                            <label htmlFor="prenom">Prenom</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="nom" type="text" className="validate" />
                            <label htmlFor="nom">Nom de famille</label>
                        </div>
                    </div>
                    {/* Deuxieme section de notre formulaire(E-mail, Compagnie) */}
                    <div className="row">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="text" className="validate" />
                                <label htmlFor="email">E-mail</label>
                            </div>

                            <div className="input-field col s6">
                                <input id="compagnie" type="text" className="validate" />
                                <label htmlFor="compagnie">Compagnie</label>
                            </div>
                        </div>
                    </div>
                    {/* Troisieme section de notre formulaire(Notes, Bouton "Ajouter") */}
                    <div className="row">
                        <div className="row">
                            <div className="input-field col s8">
                                <input id="notes" type="text" className="validate" />
                                <label htmlFor="notes">Notes</label>
                            </div>

                            <div className="input-field col s4">
                                <button className="btn waves-effect waves-light" type="submit" name="action"> Ajouter</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

// Exportation de notre composant "Form.js" en module
export default Form;