import React, { Component } from 'react'

export default class BaiTapThucHanhLayoutLayout extends Component {
  render() {
	return (
		<div className="header">
	  <nav className="navbar navbar-expand-sm navbar-dark">
  <a className="navbar-brand" href="#">Start Bootstrap</a>
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
	  <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</div>
	)
  }
}
