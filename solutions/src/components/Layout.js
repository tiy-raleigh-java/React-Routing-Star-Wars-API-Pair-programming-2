import React, {Component} from 'react';
// IMPORT NavLink
import { NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    // INLINE STYLING
    let headerStyle = {
      "textAlign": "center",
      "height": "30vw",
      "color": "#fff",
      "backgroundImage": "url(../images/header2.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink activeStyle={{color: "yellow"}} to="/">
                    SWAPI Explorer
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/characters">Characters</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="selected" to="/starships">
                    <span>Starships </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="selected" to="/films">
                    <span>Films </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 header" style={headerStyle}>
          </div>
        </nav>
        {/*
          PASS IN CHILDREN
          */}
        {this.props.children}
        <footer className="col-lg-11">
          <span>
            SWAPI EXPLORER
          </span>
        </footer>
      </div>
    );
  }
}
