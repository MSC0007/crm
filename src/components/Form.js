// Les Imports
import React, { Component } from 'react';
import firebase from '../firebase';

// Notre composant de type classNamee "Form.js"
class Form extends Component {

    // Methode render de notre composant classNamee "Form.js"
    render() {
        return (
            // Insertion d'un formulaire MaterializeCss(Forms --> Text Inputs)
            <div className="row">
                <form className="col s12" id="addContact">
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
                                <input id="e-mail" type="text" className="validate" />
                                <label htmlFor="e-mail">E-mail</label>
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