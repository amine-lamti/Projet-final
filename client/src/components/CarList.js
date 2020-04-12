import React from 'react'
import { connect } from 'react-redux'
import CarItem from './CarItem'

const CarList = props => {
    return (
        <div>
            {
                props.mycar.car.map(car => <CarItem car={car}/>)
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        mycar: state.Clientcar
    }
}

export default connect(mapStateToProps)(CarList)