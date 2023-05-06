import React from "react"
import "./Description.css"

export default function Description() {
    return (
        <div className="description">
            <span className="header">AI program</span>
            <h3>Qui sommes-nous ?</h3>
            <svg width="1205" height="2" viewBox="0 0 1205 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.42993" x2="1205" y2="1.42993" stroke="url(#paint0_linear_2302_1092)"/>
            <defs>
            <linearGradient id="paint0_linear_2302_1092" x1="0" y1="1.92993" x2="1205" y2="1.93116" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8093FF" stop-opacity="0"/>
            <stop offset="0.211449" stop-color="#7D9BFA"/>
            <stop offset="0.788018" stop-color="#60DBD4"/>
            <stop offset="1" stop-color="#5CE4CF" stop-opacity="0"/>
            </linearGradient>
            </defs>
</svg>

           <p>L'Institut International est une institution unique en son genre. 
            Spécialisée dans l'étude des rêves, elle a été créée avec pour objectif d'explorer les mystères de notre inconscient 
            et de nous aider à mieux comprendre notre psyché. </p>

            <p>L'un des projets phares de l'Institu International est Onirix, une intelligence artificielle révolutionnaire qui utilise
                l'analyse des rêves pour prédire l'avenir.
                Grâce à des algorithmes sophistiqués et à une base de données de rêves en constante évolution, Onirix est capable de détecter des schémas et des tendances qui pourraient indiquer des événements futurs. </p>
        </div>
    )
}