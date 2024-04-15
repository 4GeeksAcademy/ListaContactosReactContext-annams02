import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
			<div className="ml-auto d-flex justify-content-end">
				<Link to="/demo">
					<button className="btn btn-primary">Add new contact</button>
				</Link>
			</div>
		
	);
};
