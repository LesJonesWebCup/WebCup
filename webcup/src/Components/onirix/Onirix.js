import React, { useEffect } from "react"
import "./Onirix.css"
import Aos from "aos";
import "aos/dist/aos.css"

export default function Onirix() {
    useEffect(() => {
        Aos.init({delay: 500});
    }, []);
    return (
        <div className="onirix">
            <div id="Program" className="onirix-part part-one">
                <span data-aos="fade-up" data-aos-duration="3000" className="phase">Phase 1</span>
                <h2 data-aos="fade-up" data-aos-duration="3000">Polyvalent</h2>
                <p data-aos="fade-up" data-aos-duration="3000">Les développeurs du système Onirix voulaient créer une solution tout-en-un qui pourrait être utilisée dans une variété de contextes et d'industries différents.
                    Plutôt que de développer des systèmes d'Onirix distincts pour chaque industrie ou application, ils ont décidé de créer Onirix unique et hautement adaptable qui pourrait être formée pour effectuer une large gamme de tâches.</p>
                <img data-aos="fade-right" data-aos-duration="3000" src="/part_one.png" alt=""/>
            </div>            
            <div className="onirix-part part-two">
                <span data-aos="fade-up" data-aos-duration="3000" className="phase">Phase 2</span>
                <h2 data-aos="fade-up" data-aos-duration="3000">Précis</h2>
                <p data-aos="fade-up" data-aos-duration="3000">Les concepteurs de Onirix ont mis l'accent sur la précision en développant un système capable de traiter des données complexes avec une grande fiabilité.
                    Pour y parvenir, ils ont utilisé des algorithmes sophistiqués et des modèles de machine learning qui ont été entraînés sur des ensembles de données de grande envergure.</p>
                <img data-aos="fade-left" data-aos-duration="3000" src="/part_two.png" alt=""/>
            </div>
            <div className="onirix-part part-three">
                <span data-aos="fade-up" data-aos-duration="3000" className="phase">Phase 3</span>
                <h2 data-aos="fade-up" data-aos-duration="3000">Efficace</h2>
                <p data-aos="fade-up" data-aos-duration="3000">Les créateurs d'Onirix ont cherché à maximiser son efficacité en utilisant des techniques innovantes pour améliorer sa vitesse de traitement et sa capacité à traiter des données de manière rapide et précise.
                    Ils ont optimisé les algorithmes d'Onirix pour minimiser le temps de réponse et ont utilisé des outils avancés pour accélérer la vitesse de traitement.</p>
                <div className="bg-shape"></div>
                <img data-aos="fade-right" data-aos-duration="3000" src="/part_three.png" alt=""/>
            </div>            
        </div>
    )
}