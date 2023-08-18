import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Ваше название приложения. Все права защищены.</p>
          </div>
          <div className="col-md-6">
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              {}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
