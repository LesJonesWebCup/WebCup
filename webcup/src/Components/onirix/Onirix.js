import React from "react"
import "./Onirix.css"

export default function Onirix() {
    return (
        <div className="onirix">
            <div className="onirix-part part-one">
                <span className="phase">Phase 1</span>
                <h2>Polyvalent</h2>
                <p>Les développeurs du système Onirix voulaient créer une solution tout-en-un qui pourrait être utilisée dans une variété de contextes et d'industries différents.
                    Plutôt que de développer des systèmes d'Onirix distincts pour chaque industrie ou application, ils ont décidé de créer Onirix unique et hautement adaptable qui pourrait être formée pour effectuer une large gamme de tâches.</p>
                <img src="/part_one.png" alt=""/>
            </div>            
            <div className="onirix-part part-two">
                <span className="phase">Phase 2</span>
                <h2>Précis</h2>
                <p>Les concepteurs de Onirix ont mis l'accent sur la précision en développant un système capable de traiter des données complexes avec une grande fiabilité.
                    Pour y parvenir, ils ont utilisé des algorithmes sophistiqués et des modèles de machine learning qui ont été entraînés sur des ensembles de données de grande envergure.</p>
                <img src="/part_two.png" alt=""/>
            </div>
            <div className="onirix-part part-three">
                <span className="phase">Phase 3</span>
                <h2>Efficace</h2>
                <p>Les créateurs d'Onirix ont cherché à maximiser son efficacité en utilisant des techniques innovantes pour améliorer sa vitesse de traitement et sa capacité à traiter des données de manière rapide et précise.
                    Ils ont optimisé les algorithmes d'Onirix pour minimiser le temps de réponse et ont utilisé des outils avancés pour accélérer la vitesse de traitement.</p>
                <div className="bg-shape"></div>
                <img src="/part_three.png" alt=""/>
            </div>            
        </div>
    )
}