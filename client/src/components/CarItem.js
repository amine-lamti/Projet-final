import React from 'react'
import { connect } from 'react-redux'
import { deleteCar, saveCar } from '../actions/CarActions'

const CarItem = props => {
    return (
        <div className="card fav-item">
            <div className="infos">
<h1>{props.car.modele}</h1>
<h1>{props.car.energie}</h1>
<h1>{props.car.couleur}</h1>
<h1>{props.car.téléphone}</h1>
<h1>{props.car.prix}</h1>
           </div>
<img src={props.car.image}/>
<button onClick={() => props.setcar(props.car)}>Edit</button>
<button onClick={() => props.deletecar(props.car.id)}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        deletecar: id => dispatch(deleteCar(id)),
        setcar: car => dispatch(saveCar(car))
    }
}

export default connect(null, mapDispatchToProps)(CarItem)
