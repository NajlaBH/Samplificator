import React, { Component } from 'react';
import PropTypes from 'prop-types';


import AppNavBar from '../common/AppNavBar';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    //________________APP Styles PARAMETERS _________________[BEGIN]
    const appStyles={
      textAlign: "center",
    }
    //________________APP Styles PARAMETERS _________________[End]



    //________________APP HEADER PARAMETERS _________________[BEGIN]
    // App Name
    let nameApp = "Samplificator"
    //________________APP HEADER PARAMETERS _________________[END]



    //________________APP FOOTER PARAMETERS _________________[BEGIN]
    // Developper Name
    let developer = <a  href="https://najlabh.github.io/" style={{ color: '#E9CABA' }}>NajlaBH</a>
    // Last update of the site  
    let lastUpdate = "September - 2019" 
    // App Version
    let appVers = "1.0.0"
    // App Tag
    let appTag = "Dev" // Prod, Demo
    //________________APP FOOTER PARAMETERS _________________[END]
    return (
      <div className="App" style={appStyles}>
        <AppHeader 
            appName = {nameApp} 
        />
        <div className="home-app">
          <AppNavBar />
          <div className="page-container">
            {this.props.children} 
          </div>
        </div>
        <AppFooter 
          developerName = {developer}
          appVersion = {appVers}
          appTags = {appTag}
          updatedAt = {lastUpdate}
        />
      </div>
    );
  }
}