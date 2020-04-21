import React from 'react'

function Conseil() {
    return (
        <div className="conseil">
        <div>
            <h1 className="txt1">Lisez quelques conseils simples pour éviter les accidents de la route avant louer une véhicule</h1>
            <br/>
          <ul>
              <li>Respectez les limitations de vitesse.</li>
              <li>Respectez le code de la route.</li>
              <li>Respectez les distances minimales de sécurité.</li>
              <li>Faites bien attention quand vous circulez la nuit.</li>
              <li>Ne buvez pas d'alcool avant de conduire.</li>
              <li>Ne conduisez pas si vous êtes fatigué.</li>
              <li>Mettez toujours votre ceinture de sécurité.</li>
              <li>Respectez les stops et les feux rouges.</li>
          </ul>  
          <a className="savoir nav-link border border-warning text-warning" href="https://fr.wikihow.com/%C3%A9viter-les-accidents-de-voiture">savoir plus</a>
        </div>
        <div>
            <img className="img" src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/accident1.jpg"/>
        </div>
        </div>
    )
}

export default Conseil
