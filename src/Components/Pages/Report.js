import React from "react"
import "../../App.css"
import Sidebar from "../Sidebar"
import Navbar from "../Navbar"

const Report = () => {
	return (
		<div>
			<Navbar />
			<div className="Side-table">
				<Sidebar />
			</div>
		</div>
	)
}

export default Report
