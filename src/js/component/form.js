import React from "react";
import { Link } from "react-router-dom";

export const Formulario = () => {
	return (
        
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
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
		
	);
};

export default Formulario;
