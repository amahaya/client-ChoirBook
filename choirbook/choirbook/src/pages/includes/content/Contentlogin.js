import React from "react";

export default function Contentlogin() {
  return(
    <>
    <div className="modal-wrap">
    <div className="modal-bodies">
    <div className="modal-body modal-body-step-1 is-showing">
    <div className="title">Log In</div>
    <div className="description">Hello there, Log In</div>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
    <div className="text-center">
    <div className="button">LOG IN</div>
                <a href="signup.html" target="_blank"><div className="button">Create an account</div></a>
    </div>
        </form>
    </div>
    </div>
    </div>
        <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
    </>)
}