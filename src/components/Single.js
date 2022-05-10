// Les Imports
import React from 'react';

// Notre composant fonctionnel(de type fonction: Stateless) "Single.js"
const Single = (props) => {
    return (

        // Ci-dessous, nous avons le Snippet(bout de code) Materializecss de notre composant Card. 
        <li className="col s12 l6">
            <div className="card">

                {/* Image et Nom, Prenom - Entreprise */}
                <div className="card-image">
                    <img src="./portrait.jpg" alt={props.item.title} />
                    <span className="card-title">{props.item.prenom} {props.item.nom} - {props.item.compagnie} </span>
                </div>

                {/* Description du contenu de la carte (blockquote et Notes) */}
                <div className="card-content">
                    <span className="card-title" >{props.item.email} </span>
                    <div className="row">
                        <div className="col l6 center"></div>
                        <blockquote > <h5> {props.item.notes}</h5> </blockquote>
                    </div>
                </div>

                {/* Section Bouton "Supprimer" */}
                <div className='card-action'>
                    <button className="waves-effect waves-light btn red darken-4">Supprimer</button>
                </div>

            </div>
        </li>

    );
}

// Exportation de notre composant "Single.js" en module
export default Single;