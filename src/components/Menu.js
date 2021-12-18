import React from 'react';

export const Menu = () => {
    return (
      <>
            <div className='nav-menu'>
  {/* Sidebar */}
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* Sidebar - Brand */}
    
    {/* Nav Item - Dashboard */}
    <li className="nav-item active">
      <a className="nav-link" href="/dashboard">
        <i className="fas fa-fw fa-tachometer-alt" />
        <span>Dashboard</span></a>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider" />
    {/* Heading */}
    {/*<div class="sidebar-heading">
  Coupons
    </div>*/}
    {/* Nav Item - Pages Collapse Menu */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog" />
        <span>Coupons</span>
      </a>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">My coupons:</h6>
          <a className="collapse-item" href="/coupons">Generate coupon</a>
          <a className="collapse-item" href="/coupons">Manage coupons</a>
          <a className="collapse-item" href="cards.html">Print coupons</a>
        </div>
      </div>
    </li>
    {/* Nav Item - Utilities Collapse Menu */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench" />
        <span>Utilities</span>
      </a>
      <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Custom Utilities:</h6>
          <a className="collapse-item" href="add-dealer.php">My Dealers</a>
          <a className="collapse-item" href="utilities-border.html">My products</a>
          <a className="collapse-item" href="utilities-animation.html">Video Gallery</a>
          <a className="collapse-item" href="utilities-animation.html">Coupon Templates</a>
        </div>
      </div>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider" />
    {/* Heading */}
    {/*  <div class="sidebar-heading">
  Data & Reports
    </div>  */}
    {/* Nav Item - Pages Collapse Menu */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
        <i className="fas fa-fw fa-folder" />
        <span>Accounts</span>
      </a>
      <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Money</h6>
          <a className="collapse-item" href="login.html">wallet Money</a>
          <a className="collapse-item" href="\ledger">Ledger</a>
          <a className="collapse-item" href="forgot-password.html">Transactions</a>
          <div className="collapse-divider" />
        </div>
      </div>
    </li>
    {/* Nav Item - Tables */}
    <li className="nav-item">
      <a className="nav-link" href="\about">
        <i className="fas fa-fw fa-table" />
        <span>Mechanic Log</span></a>
    </li> 
    {/* Nav Item - Charts */}
    <li className="nav-item">
      <a className="nav-link" href="charts.html">
        <i className="fas fa-fw fa-chart-area" />
        <span>Charts</span></a>
    </li>
    {/* Nav Item - Charts */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSettings" aria-expanded="true" aria-controls="collapseSettings">
        <i className="fas fa-fw fa-wrench" />
        <span>Settings</span>
      </a>
      <div id="collapseSettings" className="collapse" aria-labelledby="headingSettings" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">For Now nothing</h6>
          <a className="collapse-item" href="\login.html">Login</a>
          <a className="collapse-item" href="\sign-up">Sign-Up</a>
          <a className="collapse-item" href="\forgotpass">Forgot Password</a>
          <div className="collapse-divider" />
        </div>
      </div>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider d-none d-md-block" />
    {/* Sidebar Toggler (Sidebar) */}
    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle" />
    </div>
    {/* Sidebar Message */}
    <div className="sidebar-card d-none d-lg-flex">
      <img className="sidebar-card-illustration mb-2" src="undraw_rocket.svg" alt="..." />
      <p className="text-center mb-2"><strong>CoopEarn Ads</strong> help you get better reach in the available users</p>
      <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Post Ad now!</a>
    </div>
  </ul>
  {/* End of Sidebar */}
</div>
</>
    )
}
