import React from 'react';
import {Menu} from './Menu';

export const Coupons = () => {
    return (
        <div>
            <div id='wrapper'>
          <Menu/>
  {/* Content Wrapper */}
  <div id="content-wrapper" className="d-flex flex-column">
    {/* Main Content */}
    <div id="content">
      
      {/* Begin Page Content */}
      <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-4 text-gray-800">Add Coupons</h1>
        <div className="row">
          <div className="col-lg-8">
            {/* Circle Buttons */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Coupon Details</h6>
              </div>
              <div className="card-body">
                <p>Fill your coupon details to generate coupon</p>
                {/* Circle Buttons (Default) */}
                <select name id className="form-control form-control">
                  <option> Select coupon type </option>
                  <option>Cash coupon</option>
                  <option>Point coupon</option>
                </select><br /> 
                <input type="text" name className="form-control" placeholder="Serial No" /><br />
                <input type="text" name className="form-control" placeholder="Product name" /><br />
                <input type="Number" name className="form-control" placeholder="Denomination of Coupons" /><br />
                <input type="Number" name className="form-control" placeholder="Quantity of Coupon" /><br />                   
                <input type="calender" name className="form-control" placeholder="Enable Expiry date(toggle button)" /><br />
                <input type="number" name="dealer benefit" className="form-control" placeholder="Dealer Benefit" />
                <br />
                <br />
                <button type="button" className="btn btn-danger btn-lg btn-block" placeholder>Add another coupon</button>
                <button type="button" className="btn btn-primary btn-lg btn-block" placeholder>Add coupons</button>
              </div>
            </div>
            {/* Brand Buttons */}
            {/*<div class="card shadow mb-4">
                  <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                  </div>
                  <div class="card-body">
                      <p>Google and Facebook buttons are available featuring each company's respective
                          brand color. They are used on the user login and registration pages.</p>
                      <p>You can create more custom buttons by adding a new color variable in the
                          <code>_variables.scss</code> file and then using the Bootstrap button variant
                          mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                          file.</p>
                      <a href="#" class="btn btn-google btn-block"><i class="fab fa-google fa-fw"></i>
                          .btn-google</a>
                      <a href="#" class="btn btn-facebook btn-block"><i
                              class="fab fa-facebook-f fa-fw"></i> .btn-facebook</a>

                  </div>
              </div>*/}
          </div>
          <div className="col-lg-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Cost Breakdown</h6>
              </div>
              <div className="card-body">
                <p>Sr. No</p> <br />
                <p>Qty</p><br />
                <p>Dnm</p><br />
                <button type="button" className="btn btn-primary btn-lg btn-block" placeholder>Add coupons</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </div>
    {/* End of Main Content */}
   
  </div>
  {/* End of Content Wrapper */}
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}
  <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a className="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
