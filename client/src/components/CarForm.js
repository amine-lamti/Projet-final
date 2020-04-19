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
        if(this.props.save) {
            this.setState(this.props.cars.filter(el => String(el._id) === this.props.match.params.id)[0])}      
    }
    
//componentWillReceiveProps(nextProps){
  //  this.setState(nextProps.save)
//}

    render() {
        return (
           
                <div className="register">
                <form>
                <h3 className="sign">{this.props.save ? 'Edit Car' : 'Add Car'}</h3>
               
                <div className="form-group">
                    <label>Modéle</label>
                    <input type="text" className="form-control" placeholder="Enter modéle" name="modele" value={this.state.modele} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Couleur</label>
                    <input type="text" className="form-control" placeholder="Enter couleur" name="couleur" value={this.state.couleur} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Carburant<span className="gris">  (Essence/Diesel)</span></label>
                    <input type="text" className="form-control" placeholder="Enter carburant" name="energie" value={this.state.energie} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Téléphone</label>
                    <input type="text" className="form-control" placeholder="Enter téléphone" name="téléphone" value={this.state.téléphone} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="text" className="form-control" placeholder="Enter image" name="image" value={this.state.image} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Prix<span className="gris">  (DT/JOUR)</span></label>
                    <input type="text" className="form-control" placeholder="Enter prix" name="prix" value={this.state.prix} onChange={this.handleChange}/>
                </div>

                

                <button className="btn btn-primary btn-block" onClick={e => {
                        e.preventDefault()
                        if (this.props.save) {
                            this.props.editcar(this.state)
                            this.props.getagencycar()
                            this.props.clearsave()
                            this.props.history.push('/monagence')

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
                            this.props.history.push('/monagence')


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
                
            </form>
            
                   
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