// Les Imports
import React, { Component } from 'react';
import Single from './Single';

// Notre composant "Grid.js" de type classe(Statefull)
class Grid extends Component {

    // Creation d'une fonction "renderList()" qui retourne le composant "Single.js" autant
    // de fois qu'il y'a de valeurs dans "data.js" (dans le props "items").
    // La fonction map(x,y) prend en parametre un document/item/objet "{}" d'une collection d'objets(data.js) et 
    // un second parametre qui sera l'index de l'objet/document courant.
    // Cahque document de la collection doit avoir obligatoirement une proprieté "key".
    renderList() {
        return this.props.items.map((item, i) => (
            // Retoure le composant "Single.js" avec les données du document courant.
            <Single key={i + 1} item={item} />
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


