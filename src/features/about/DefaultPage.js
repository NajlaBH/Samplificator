import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    about: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div className="about-default-page">
        <section>
          <h1>Welcome to Samplificator !</h1>
          <p>
          This project aims to demonstrate the ability to work with Spring-boot / Reactjs / PostgreSQL,<br/>
as a part of an interview task[...]. That's why the project was completed but not uploded <br/> 
on server since that. (Many thanks to the interviewer who was a source of inspiration). <br/> 
All project's data are "a bit fake", and just used for demo purpse only.<br/> 
Thanks for your support and enjoy it :) - BHN -
          </p>
        </section>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    about: state.about,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
