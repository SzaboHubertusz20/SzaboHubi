import React from "react";
export default function Bar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
  <div>
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/regiok">Regiok</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/torolni">Torolni</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link" href="/regisztracio">Regisztracio</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link" href="/ujregisztracio">Ujregisztracio</a>
        </li>
      </ul>
    </div>

  </div>
    
</nav>
        </div>
    )
}
export { Bar };