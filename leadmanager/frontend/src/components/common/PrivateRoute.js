import React from 'react'
import  { Route, Redirect, Outlet, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';


// const PrivateRoute = ({ component: Component, auth, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//       if (auth.isLoading) {
//         return <h2>Loading...</h2>;
//       } else if (!auth.isAuthenticated) {
//         return <Redirect to="/login" />;
//       } else {
//         return <Component {...props} />;
//       }
//     }}
//   />
// );

export const PrivateRoute = () => {
    const isAuth = null; // your logic here

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}


// const PrivateRoute = ({ isAuth, isLoading }) => {
//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   return isAuth ? <Outlet /> : <Navigate to="/login" />;
// };

// const mapStateToProps = state => ({
//   isAuth: state.auth.isAuthenticated,
//   isLoading: state.auth.isLoading,
// });

// export default connect(mapStateToProps)(PrivateRoute);