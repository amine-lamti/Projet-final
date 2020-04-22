import React, { Component } from "react";
import { connect } from "react-redux";
import { getclientcar } from "../actions/CarActions";
import { loadUser } from "../actions/AuthActions";
import CarItem from "./CarItem";

class Clientcar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 0,
      max: 1000000,
      type:""
    }


  }
  componentDidMount() {
    this.props.getclientcar();

    if (this.props.auth.isAuthenticated) {
      this.props.loadUser();
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })

  }
  filter=()=>{
    this.setState({type:""})
  }



  render() {
    return (<div className="accueil2">
      <div className="row">         
<div className="col">
<div className="card card-block car-item-card">
<div className="search">

        <h4 className="h4">prix entre</h4>
=======
      <div className="search">
        <h4 className="h4">Prix entre</h4>
        <div className="form-group">
          <label>Max:</label>
          <input type="text" className="form-control" name="max" value={this.state.max === 1000000 ? "" : this.state.max} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Min:</label>
          <input type="text" className="form-control" name="min" value={!this.state.min ? '' : this.state.min} onChange={this.handleChange} />
        </div>
        <br/>
        <h4  className="h4" >Fabricants</h4>
        <div className="carstype">
        <button onClick={() => this.setState({type: '', min:0, max: 1000000})}>Clear Filter</button>

        <div>
          <input value="fiat" id="fiat" checked={this.state.type === 'fiat' ? true : false} type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="fiat">fiat</label>
        </div><div>
          <input value="bmw" id="bmw" type="radio" checked={this.state.type === 'bmw' ? true : false} class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="bmw">bmw</label>
        </div><div>
          <input value="mercedes" id="mercedes" type="radio" checked={this.state.type === 'mercedes' ? true : false} class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="mercedes">mercedes</label>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Fiat</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">BMW</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Mercedes</label>
        </div><div>
          <input value="Audi" id="Audi" type="radio" checked={this.state.type === 'Audi' ? true : false} class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Audi">Audi</label>
        </div><div>
          <input value="Dacia" id="Dacia" type="radio" class="form-check-input" checked={this.state.type === 'Dacia' ? true : false} name="type" onClick={this.handleChange} />
          <label htmlFor="Dacia"> Dacia
</label>  
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Dacia</label> 
        </div>
        <div>
          <input value="Honda" id="Honda" type="radio" class="form-check-input" checked={this.state.type === 'Honda' ? true : false} name="type" onClick={this.handleChange} />
          <label htmlFor="Honda">Honda</label>
        </div>
        <div>
          <input value="Hyundai" id="Hyundai" type="radio" class="form-check-input" checked={this.state.type === 'Hyandai' ? true : false} name="type" onClick={this.handleChange} />
          <label htmlFor="Hyundai">Hyundai</label>
        </div>
        <div>
          <input value="Kia" id="Kia" type="radio" class="form-check-input" name="type" checked={this.state.type === 'Kia' ? true : false} onClick={this.handleChange} />
          <label htmlFor="Kia">Kia</label>
        </div>
        <div>
          <input value="Toyota" id="Toyota" type="radio" class="form-check-input" name="type" checked={this.state.type === 'Toyota' ? true : false} onClick={this.handleChange} />
          <label htmlFor="Toyota">Toyota</label>
        </div>
        <div>
          <input value="Peugeot" id="Peugeot" type="radio" class="form-check-input" name="type" checked={this.state.type === 'Peugeot' ? true : false} onClick={this.handleChange} />
          <label htmlFor="Peugeot">Peugeot</label>
        </div>
        <div>
          <input value="Chevrolet" id="Chevrolet" type="radio" class="form-check-input" name="type" checked={this.state.type === 'Chevrolet' ? true : false} onClick={this.handleChange} />
          <label htmlFor="Chevrolet"> Chevrolet
</label>
        </div><div>
          <input value="Ford" id="Ford" type="radio" class="form-check-input" checked={this.state.type === 'Ford' ? true : false} name="type" onClick={this.handleChange} />
          <label htmlFor="Ford"> Ford
</label>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Chevrolet</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Ford</label>

        </div><div>
          <input value="Nissan" id="Nissan" type="radio" class="form-check-input" checked={this.state.type === 'Nissan' ? true : false} name="type" onClick={this.handleChange} />
          <label htmlFor="Nissan">Nissan</label>
        </div>
        <div>
          <input value="Suzuki" id="Suzuki" type="radio" class="form-check-input" checked={this.state.type === 'Suzuki' ? true : false} name="type" onClick={this.handleChange} />
          <label htmlFor="Suzuki"> Suzuki
</label>
        </div><div>
          <input value="Volkswagen" id="Volkswagen" type="radio" class="form-check-input" checked={this.state.type === 'Volkswagen' ? true : false} name="type" onClick={this.handleChange} />
          <label htmlFor="Volkswagen">Volkswagen</label>
        </div>
        
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Suzuki</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Volkswagen</label>
        </div>      
        </div>
        </div>
        </div>
        </div>



      </div>
      <div className="container cars">
        {
          (this.state.min || this.state.max) ? this.props.car.filter(el => el.modele.toUpperCase().includes(this.state.type.toUpperCase()) && el.prix >= Number(this.state.min) && el.prix <= Number(this.state.max) ).map((el, i) => <CarItem key={i} info={el}/>)
          : this.props.car.filter(el => el.modele.toUpperCase().includes(this.state.type.toUpperCase())).map((el, i) => <CarItem info={el} key={i} />)
        }
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    car: state.Clientcar.cars,
  };
};

export default connect(mapStateToProps, { getclientcar, loadUser })(Clientcar);
