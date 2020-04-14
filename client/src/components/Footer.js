import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
              <div>
<footer className="footer">
<p class="footer-copyright text-center py-3">© 2020 Copyright Tout les droits sont reservés.</p>
<div class="container">

<ul class="list-unstyled list-inline text-center">
  <li class="list-inline-item">
  <a class="btn-floating btn-lg btn-fb col1" type="button" role="button" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
  </li>

  <li class="list-inline-item">
  <a class="btn-floating btn-lg btn-tw col2" type="button" role="button" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
  </li>

  <li class="list-inline-item">
  <a class="btn-floating btn-lg btn-li col4" type="button" role="button" href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a> 
  </li>

  <li class="list-inline-item">
  <a class="btn-floating btn-lg btn-ins col5" type="button" role="button" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
  </li>

  <li class="list-inline-item">
  <a class="btn-floating btn-lg btn-yt col3" type="button" role="button" href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
  </li>
</ul>
</div>
</footer>
            </div>
            
        );
    }
}

export default Footer;