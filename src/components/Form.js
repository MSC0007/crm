// Les Imports
import React, { Component } from 'react';

// Notre composant de type classe "Form.js"
class Form extends Component {

    // Methode render de notre composant classe "Form.js"
    render() {
        return (
            // Insertion d'un formulaire MaterializeCss(Forms --> Text Inputs)
            <div class="row">
                <form class="col s12" id="addContact">
                    {/* Premiere section de notre formulaire(Prenom, Nom) */}
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="prenom" type="text" class="validate" />
                            <label htmlFor="prenom">Prenom</label>
                        </div>

                        <div class="input-field col s6">
                            <input id="nom" type="text" class="validate" />
                            <label htmlFor="nom">Nom de famille</label>
                        </div>
                    </div>
                    {/* Deuxieme section de notre formulaire(E-mail, Compagnie) */}
                    <div class="row">
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="e-mail" type="text" class="validate" />
                                <label htmlFor="e-mail">E-mail</label>
                            </div>

                            <div class="input-field col s6">
                                <input id="compagnie" type="text" class="validate" />
                                <label htmlFor="compagnie">Compagnie</label>
                            </div>
                        </div>
                    </div>
                    {/* Troisieme section de notre formulaire(Notes, Bouton "Ajouter") */}
                    <div class="row">
                        <div class="row">
                            <div class="input-field col s8">
                                <input id="notes" type="text" class="validate" />
                                <label htmlFor="notes">Notes</label>
                            </div>

                            <div class="input-field col s4">
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