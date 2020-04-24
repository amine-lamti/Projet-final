import React from 'react'

function Conseil() {
    return (
        <div className="conseil">
        <div>
            <h3 className="txt1">Lisez quelques conseils simples pour éviter les accidents de la route avant louer une véhicule</h3>
            <br/>
          <ul>
              <h6 className="lamti"><span>1-</span> Respectez les limitations de vitesse.</h6>
              <h6 className="lamti"><span>2-</span> Respectez le code de la route.</h6>
              <h6 className="lamti"><span>4-</span> Faites bien attention quand vous circulez la nuit.</h6>
              <h6 className="lamti"><span>5-</span> Ne buvez pas d'alcool avant de conduire.</h6>
              <h6 className="lamti"><span>6-</span> Ne conduisez pas si vous êtes fatigué.</h6>
              <h6 className="lamti"><span>7-</span> Mettez toujours votre ceinture de sécurité.</h6>
          </ul>  
         <a href="https://fr.wikihow.com/%C3%A9viter-les-accidents-de-voiture" className="btn btn-outline-warning btn-sm lam">Savoir plus</a>
        </div>
        <div className="img">
            <img src="https://www.argusautomobile.tn/wp-content/uploads/2018/11/accident1.jpg"/>
        </div>
        </div>
    )
}

export default Conseil
