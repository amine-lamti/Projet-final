import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addcar,editcar,clearsave} from '../actions/CarActions'
import { v4 as uuidv4 } from 'uuid';


class CarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modele: '',
            couleur: '',
            energie: '',
            téléphone: '',
            image: '',
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.save)
    }

    render() {
        return (
            <div>
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
                            <select name="energie" onChange={this.handleChange} value={this.state.energie}>
                                <option>ffff</option>
                                <option>gggg</option>
                            </select>
                        </div>

                        <div>
                            <label>phone: </label>
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
                            this.props.clearsave()
                            }
                        else {
                            this.props.addcar(this.state)

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
        save: state.car.saved
    }
}

export default connect(mapStateToProps, {addcar,editcar,clearsave})(CarForm) 