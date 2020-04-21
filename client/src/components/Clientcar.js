import React, { Component } from "react";
import { connect } from "react-redux";
import { getclientcar } from "../actions/CarActions";
import { loadUser } from "../actions/AuthActions";
import CarItem from "./CarItem";

class Clientcar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: "",
      max: ""
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



  render() {
    return (<div className="accueil2">
      <div className="search">
        <h4 className="h4">prix entre</h4>
        <div className="form-group">
          <label>Min:</label>
          <input type="text" className="form-control" name="max" value={this.state.max} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Max:</label>
          <input type="text" className="form-control" name="min" value={this.state.min} onChange={this.handleChange} />
        </div>
        <h4  className="h4" >Fabricants</h4>

        <div className="carstype">
        <div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">fiat</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">bmw</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">mercedes</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Audi</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client"> Dacia
</label>  
        </div>
        <div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Honda</label>
        </div>
        <div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Hyundai</label>
        </div>
        <div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Kia</label>
        </div>
        <div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Toyota</label>
        </div>
        <div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Peugeot</label>
        </div>
        <div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client"> Chevrolet
</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client"> Ford
</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Nissan</label>
        </div>
        <div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client"> Suzuki
</label>
        </div><div>
          <input value="client" id="Client" type="radio" class="form-check-input" name="type" onClick={this.handleChange} />
          <label htmlFor="Client">Volkswagen</label>
        </div>
        
        </div>


      </div>
      <div className="container cars">
        {this.state.min && this.state.max ? this.props.car.filter(el => el.prix <= Number(this.state.min) && el.prix >= Number(this.state.max)).map((el) => (
          <CarItem id={el._id} />
        )) : this.props.car.map((el) => (
          <CarItem id={el._id} />
        ))}
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
