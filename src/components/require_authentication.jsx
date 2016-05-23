import React, { Component } from 'react';
import { connect } from 'react-redux';


class RequireAuthentication extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillMount() {
    if(!this.props.authenticated) {
      this.context.router.push('/login');
    }
  }

  componentWillUpdate(nextProps) {
    if(!nextProps.authenticated) {
      this.context.router.push('/login');
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    authenticated: state.authentication.authenticated
  };
}

export default connect(mapStateToProps)(RequireAuthentication);
