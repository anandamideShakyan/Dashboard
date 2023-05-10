import React from "react"
import "../../App.css"
import Sidebar from "../Sidebar"
import Navbar from "../Navbar"
import Plot from "../Plot"
const History = () => {
	return (
		<div>
			<Navbar />
			<div className="Side-plot">
				<Sidebar />

				{/* <Plot /> */}
			</div>
		</div>
	)
}

export default History
