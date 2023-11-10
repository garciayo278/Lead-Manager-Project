// import React, { Component } from 'react'
// import { Link, Redirect, Navigate } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { login } from '../../actions/auth';

// export class Login extends Component {
//     state = {
//         username: '',
//         password: '',
//     }  
    
//     static propTypes = {
//         login: PropTypes.func.isRequired,
//         isAuthenticated: PropTypes.bool,
//     }

//     onSubmit = e => {
//         e.preventDefault();
//         this.props.login(this.state.username, this.state.password);
//     }

//     onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//     render() {
//         if(this.props.isAuthenticated) {
//             return <Navigate to = '/' />;
//         }

//         const { username, password} = this.state;
//         return (
//             <div className="col-md-6 m-auto">
//                 <div className="card card-body mt-5">
//                     <h2 className="text-center">Login</h2>
//                     <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Username</label>
//                         <input
//                         type="text"
//                         className="form-control"
//                         name="username"
//                         onChange={this.onChange}
//                         value={username}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Password</label>
//                         <input
//                         type="password"
//                         className="form-control"
//                         name="password"
//                         onChange={this.onChange}
//                         value={password}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <button type="submit" className="btn btn-primary">
//                         Login
//                         </button>
//                     </div>
//                     <p>
//                         Don't have an account? <Link to="/register">Register</Link>
//                     </p>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// })

// export default connect(mapStateToProps, { login })(Login);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

export class Login extends Component {
  state = {
    username: '',
    password: '',
    redirectToHome: false, // Add a state variable to handle redirection
  }  
    
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  componentDidUpdate(prevProps) {
    // Check if the isAuthenticated prop changed
    if (prevProps.isAuthenticated !== this.props.isAuthenticated && this.props.isAuthenticated) {
      // Set the redirectToHome state to trigger redirection
      this.setState({ redirectToHome: true });
    }
  }

  render() {
    const { username, password, redirectToHome } = this.state;
    
    if (redirectToHome) {
      // If redirectToHome is true, redirect to the home page
      return <Navigate to="/" />;
    }

    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
