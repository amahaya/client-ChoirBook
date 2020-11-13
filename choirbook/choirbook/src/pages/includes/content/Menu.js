import React from "react";

export default function Menu() {
  return (
    <>
    <div class="top-menu-bottom932">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span> <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"
              ><img src="image/logo.png" alt="Logo"
            /></a>
          </div>
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav"></ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="index.html">Home</a></li>
              <li>
                <a href="ask_question.html" target="_blank">Ask Question</a>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Question <span class="caret"></span
                ></a>
                <ul class="dropdown-menu animated zoomIn">
                  <li>
                    <a href="category.html" target="_blank"
                      >Question Categori</a
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >User <span class="caret"></span
                ></a>
                <ul class="dropdown-menu animated zoomIn">
                  <li><a href="user.html">All User </a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Blog <span class="caret"></span
                ></a>
                <ul class="dropdown-menu animated zoomIn">
                  <li><a href="blog.html" target="_blank">Blog </a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Page <span class="caret"></span
                ></a>
                <ul class="dropdown-menu animated zoomIn">
                  <li><a href="logIn.html" target="_blank">Login</a></li>
                  <li>
                    <a href="contact_us.html" target="_blank"> Contact Us</a>
                  </li>
                  <li>
                    <a href="ask_question.html" target="_blank">
                      Ask Question
                    </a>
                  </li>
                  <li>
                    <a href="post-deatils.html" target="_blank">
                      post-Details
                    </a>
                  </li>
                  <li>
                    <a href="user_question.html" target="_blank">
                      User Question
                    </a>
                  </li>
                  <li>
                    <a href="category.html" target="_blank"> Category </a>
                  </li>
                  <li><a href="#" target="_blank"> 404 </a></li>
                </ul>
              </li>
              <li><a href="contact_us.html" target="_blank">Contact us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}