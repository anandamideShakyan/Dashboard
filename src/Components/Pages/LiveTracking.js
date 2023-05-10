import React from "react"
import "../../App.css"
import Sidebar from "../Sidebar"
import Navbar from "../Navbar"
import Tables from "../Tables"
const LiveTracking = () => {
	return (
		<div>
			<Navbar />
			<div className="Side-table">
				<Sidebar />
				<Tables />
			</div>
		</div>
	)
}

export default LiveTracking
