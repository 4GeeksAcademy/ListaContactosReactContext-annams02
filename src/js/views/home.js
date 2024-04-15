import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<form className="container">
        <div className="form-group">
            <label for="inputNombre" >Name</label>
            <input type="text" className="form-control" id="inputNombre" placeholder="Nombre completo" />
        </div>
        <div className="form-group">
            <label for="inputEmail" >Email</label>
            <input type="text" className="form-control" id="inputEmail" placeholder="Email" />
        </div>
        <div className="form-group">
            <label for="inputPhone" >Telefono</label>
            <input type="text" className="form-control" id="inputPhone" placeholder="Telefono" />
        </div>
        <div className="form-group">
            <label for="inputAdress" >Dirección</label>
            <input type="text" className="form-control" id="inputAdress" placeholder="Dirección" />
        </div>
        <button type="submit" className="btn btn-primary">GUARDAR</button>
		<a href="#" className="link-primary">or get back to the contacs </a>
        </form>
		

	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a>
	// </div>
);
