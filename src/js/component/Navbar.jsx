import React from "react";
import PropTypes from "prop-types";


const Navbar = (props) => {
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.firstItem}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.secondItem}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {props.thirdItem}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{props.scroll1}</a></li>
            <li><a className="dropdown-item" href="#">{props.scroll2}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">{props.scroll3}</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
);
};

Navbar.propTypes = {
    title: PropTypes.string,
    firstItem: PropTypes.string,
    secondItem: PropTypes.string,
    thirdItem: PropTypes.string,
    scroll1: PropTypes.string,
    scroll2: PropTypes.string,
    scroll3: PropTypes.string,

};

export default Navbar;