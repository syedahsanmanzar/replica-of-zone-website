import React from "react";
import "./Custom.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <span className="logo">
              ZONE
              <span className="dot">
                <i class="fa-solid fa-circle"></i>
              </span>
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-2">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Components
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Docs
                </a>
              </li>
            </ul>
            <div className="spaceBetween">
              <span>
                <a href="#" className="link">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </span>
              <span className="space">
                <a href="#" className="link">
                  <i class="fa-solid fa-gear"></i>
                </a>
              </span>
            </div>
            <button type="button" class="btn btn-dark">
              Buy Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
