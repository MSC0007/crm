// Les Imports
import React, { Component } from 'react';
import Single from './Single';

// Notre composant "Grid.js" de type classe(Statefull)
class Grid extends Component {

    // Fonction "deleteData" pour recuperer la fonction "deleteData" passée en parametre 
    // depuis "App.js"
    deleteData(docID) {
        this.props.deleteData(docID);
    }

    // Creation d'une fonction "renderList()" qui retourne le composant "Single.js" autant
    // de fois qu'il y'a de valeurs dans "data.js" (dans le props "items").
    // La fonction map(x,y) prend en parametre un document/item/objet "{}" d'une collection d'objets(data.js) et 
    // un second parametre qui sera l'index de l'objet/document courant.
    // Cahque document de la collection doit avoir obligatoirement une proprieté "key".
    renderList() {
        return this.props.items.map((item, i) => (
            // On passe la fonction "deleteData" à notre composant "Single.js" pour le mettre à jour
            <Single key={i + 1} item={item} deleteData={this.deleteData.bind(this)} />
        ));

    }

    // Methode "render()"" de notre composant "Grid.js" dans laquelle on execute 
    // la fonction (renderList()) dans un bloc "<ul>...</ul>"
    render() {
        return (
            <div>
                <div className="row">
                    <ul>
                        {this.renderList()};
                    </ul>
                </div>
            </div>
        );
    }
}

// Exportation de notre composant "Grid.js" en module
export default Grid;


