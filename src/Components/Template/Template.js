import React, {useEffect} from 'react';
import '../../material-dash/css/vertical-layout-light/style.css';
import '../../material-dash/vendors/typicons.font/font/typicons.css';

import { useNavigate, NavLink } from 'react-router-dom';
import { logOutUser } from '../../Common/Utility';

// @Author Victor Tigere tigerevice@gmailcom

// Layout to the entire app UI

const Template = (props) => {

  return(
    <div className="container-scroller" id="app">
      {/* partial:../../partials/_navbar.html  */}
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="../../index.html"><img src="../../images/logo.svg" alt="logo"/></a>
          <a className="navbar-brand brand-logo-mini" href="../../index.html"><img src="../../images/logo-mini.svg" alt="logo"/></a>
          <button className="navbar-toggler navbar-toggler align-self-center d-none d-lg-flex" type="button" data-toggle="minimize">
            <span className="typcn typcn-th-menu"></span>
          </button>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
              <a className="nav-link dropdown-toggle  pl-0 pr-0"  data-toggle="dropdown" id="profileDropdown">
                <i className="typcn typcn-power mr-0"></i>
                {/* <span className="nav-profile-name">Log Out</span> */}
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <a className="dropdown-item">
                <i className="typcn typcn-cog text-primary"></i>
                Settings
                </a>
                <a className="dropdown-item" 
                >
                <i className="typcn typcn-power text-primary"></i>
                {/* Logout */}
                </a>
              </div>
            </li>
          </ul>
          {/* <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="typcn typcn-th-menu"></span>
          </button> */}
        </div>
      </nav>
    {/* <!-- partial --> */}
    <div className="container-fluid page-body-wrapper">
      {/* <!-- partial:../../partials/_settings-panel.html --> */}
    
      {/* <!-- partial -->
      <!-- partial:../../partials/_sidebar.html --> */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <div className="d-flex sidebar-profile">
              <div className="sidebar-profile-image">
                <img src="../../images/faces/face29.png" alt="image" />
                <span className="sidebar-status-indicator"></span>
              </div>
              <div className="sidebar-profile-name">
                <p className="sidebar-name">
                  Victor Tigere
                </p>
                <p className="sidebar-designation">
                  Welcome
                </p>
              </div>
            </div>
            <p className="sidebar-menu-title">Dash menu</p>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard"
              className="nav-link">
              <i className="typcn typcn-briefcase menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/patients"
              className="nav-link">
              <i className="typcn typcn-briefcase menu-icon"></i>
              <span className="menu-title">Patients</span>
            </NavLink>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="typcn typcn-clipboard menu-icon"></i>
              <span className="menu-title">Reports</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- partial --> */}
      <div className="main-panel">
        <div className="content-wrapper">
          {/* Components to reuse Template by passing props here! */}
           {props.children}
        </div>
        {/* <!-- content-wrapper ends --> */}
      </div>
      {/* <!-- main-panel ends --> */}
    </div>
    {/* <!-- page-body-wrapper ends --> */}
    </div>
  )
}

export default Template;