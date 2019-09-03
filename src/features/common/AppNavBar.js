import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import '../../css/bootstrap.min.css';
import { BrowserRouter, Link } from 'react-router-dom';


export default class AppNavBar extends Component {
  static propTypes = {

  };
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="common-app-nav-bar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <FontAwesomeIcon icon={faFlask} /> Samplificator
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => (window.location.href = '/')}>Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  OpenData
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/api/collaborator">
                    Collaborators
                  </DropdownItem>
                  <DropdownItem onClick={() => (window.location.href = '/api/v1/projects')}>
                    Projects
                  </DropdownItem>
                  <DropdownItem onClick={() => (window.location.href = '/api/v1/samples')}>
                    Samples
                  </DropdownItem>
                  <DropdownItem onClick={() => (window.location.href = '/api/v1/species')}>
                    Species
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink disabled>JSON:DB-1.0</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  REST
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => (window.location.href = '/swagger-ui.html')}>
                    SwaggerUI
                  </DropdownItem>
                  <DropdownItem onClick={() => (window.location.href = '/api/v2/api-docs')}>
                    API-DOCS
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink disabled>Swagger-1.0</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  CRUD
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/api/collabolist">
                   Collaborator
                  </DropdownItem>
                  <DropdownItem onClick={() => (window.location.href = '/samplificator/project')}>
                   Project
                  </DropdownItem>
                  <DropdownItem onClick={() => (window.location.href = '/samplificator/sample')}>
                    Sample
                  </DropdownItem>
                  <DropdownItem onClick={() => (window.location.href = '/samplificator/specie')}>
                    Specie
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink disabled>Upload</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>              
              <NavItem>
                <NavLink disabled>GraphQL</NavLink>
              </NavItem>
              <NavItem>
                <BrowserRouter basename="/" />
                <NavLink>
                  <Link className="link-style" to="/about">About</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/NajlaBH/springsampling.git">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}