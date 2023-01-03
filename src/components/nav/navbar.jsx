/* navbar components */

import React from 'react'
import errandLogo from "../../assets/errandLogo.svg"

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-black vw-100 navbar-fixed" aria-label="Seventh navbar example">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={errandLogo} alt="Logo" width="134px" height="44.6" class="d-inline-block align-text-top" />
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarsExampleXxl">
          <ul class="navbar-nav ms-auto mb-2 mb-xl-0">
            <li class="nav-item ms-4">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link active"  href="#">About</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link active">FAQs</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link active">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
