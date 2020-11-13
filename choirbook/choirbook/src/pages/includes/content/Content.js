import React from "react";

export default function Content() {
  return(
    <>
        <div className="modal-wrap">
        <div className="modal-bodies">
        <div className="modal-body modal-body-step-1 is-showing">
        <div className="title">Sign Up</div>
        <div className="description">Hello there, Register Form</div>
            <form>
              <input type="text" placeholder="Username*"/>
              <input type="email" placeholder="E-Mail*"/>
              <input type="password" placeholder="Password*"/>
              <input type="con-password" placeholder="Confirm Password*"/>
        <div className="col-md-4">
        <div className="row text-center sign-with">
        <div className="col-md-12">
                  <h3>Sign in with</h3>
          </div>
        <div className="col-md-12 sign-in28912">
        <div className="btn-group btn-group-justified">
              <a href="#" className="btn btn-primary btn-primary3838">Facebook</a> <a href="#" className="btn btn-danger btn-danger37883">Google</a>
          </div>
          </div>
          </div>
          </div>
        <div className="text-center">
        <div className="button">Sign Up</div>
          </div>
            </form>
          </div>
          </div>
          </div>
              <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
    </>)
}