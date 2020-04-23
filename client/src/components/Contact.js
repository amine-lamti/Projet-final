import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">              
<div class="container">
  <form action="https://formspree.io/lamtiamine@yahoo.com" method="POST">
  <div class="row">
    <div class="col-25">
      <label for="fname">Nom:</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Prénom:</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="country">Email:</label>
    </div>
    <div class="col-75">
    <input type="text" id="lname" name="lastname" placeholder="Your Email.." required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Message:</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
    </div>
  </div>
  <div class="row">
    <button>Soumettre</button>
  </div>
  </form>
</div>
            </div>
        );
    }
}

export default Contact;