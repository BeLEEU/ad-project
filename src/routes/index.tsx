import React, {Component} from "react";
import { HashRouter as Router, Route, Routes, Link} from 'react-router-dom'

import IndexPage from "pages/index";
import LoginPage from "pages/login";

// const allRoutes = [
//   {
//     path: '/index',
//     exact: false,
//     element: IndexPage,
//     title: '',
//   },
//   {
//     path: '/login',
//     exact: false,
//     element: LoginPage,
//     title: '',
//   },
// ];

class AppRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
          <Route path="/" element={<IndexPage/>}/>
            <Route path="/index" element={<IndexPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>          
        </Router>
      </div>
        
    );
  }
}

export default AppRoute;
