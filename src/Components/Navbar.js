import React from "react"
import "../App.css"
import DateTime from "./DateTime"
import RouteIcon from "@mui/icons-material/Route"
const Navbar = () => {
	return (
		<div className="Navbar">
			<div style={{ display: "flex", alignItems: "center" }}>
				<div>
					<RouteIcon />
				</div>
				Mine Tracking
			</div>

			<DateTime />
		</div>
	)
}

export default Navbar
