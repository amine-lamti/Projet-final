import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addcar,editcar,clearsave,getagencycar} from '../actions/CarActions'


class CarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modele: '',
            couleur: '',
            energie: '',
            téléphone: '',
            image: '',
            prix:"",
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount() {
        if(this.props.save){this.setState(
            this.props.cars.filter(el => String(el._id) === this.props.match.params.id)[0]
        )}
        
    }
    
//componentWillReceiveProps(nextProps){
  //  this.setState(nextProps.save)
//}

    render() {
        return (
            <div className="div">
                <div>
                    <form>
                        <div>
                            <label>modele: </label>
                            <input name="modele" type="text" onChange={this.handleChange} value={this.state.modele} />
                        </div>

                        <div>
                            <label>couleur: </label>
                            <input name="couleur" type="text" onChange={this.handleChange} value={this.state.couleur} />
                        </div>

                        <div>
                            <label>energie: </label>
                            <input name="energie" type="text" onChange={this.handleChange} value={this.state.energie} />

                        </div>

                        <div>
                            <label>téléphone: </label>
                            <input name="téléphone" type="text" onChange={this.handleChange} value={this.state.téléphone} />
                        </div>

                        <div>
                            <label>image: </label>
                            <input name="image" type="text" onChange={this.handleChange} value={this.state.image} />
                        </div>

                        <div>
                            <label>prix: </label>
                            <input name="prix" type="text" onChange={this.handleChange} value={this.state.prix} />
                        </div>
                    </form>
                    <button onClick={e => {
                        e.preventDefault()
                        if (this.props.save) {
                            this.props.editcar(this.state)
                            this.props.getagencycar()
                            this.props.clearsave()
                            this.props.history.push('/vehicule')

                            this.setState({
                                modele: '',
                                couleur: '',
                                energie: '',
                                téléphone: '',
                                image: '',
                                prix: ''

                            })}
                        else {
                            this.props.addcar(this.state)
                            this.props.history.push('/vehicule')


                            this.setState({
                                modele: '',
                                couleur: '',
                                energie: '',
                                téléphone: '',
                                image: '',
                                prix: ''


                            })
                        }
                    }}>{this.props.save ? 'Edit Car' : 'Add Car'}</button>
                </div>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        cars: state.Agencyreducer.cars,
        save: state.Agencyreducer.saved
    }
}

export default connect(mapStateToProps,{addcar,editcar,clearsave,getagencycar})(CarForm) 