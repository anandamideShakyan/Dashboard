import React from "react"
import axios from "axios"
import Table from "./Table"
import Table2 from "./Table2"
import Table3 from "./Table3"
// import { data } from "./DummyData"
import { useState } from "react"
import useInterval from "use-interval"
import "../App.css"

const Tables = () => {
	const [data, setData] = useState([])
	const [data2, setData2] = useState([])
	const [data3, setData3] = useState([])
	// const [loading, setLoading] = useState(true)
	useInterval(() => {
		// setLoading(true)
		getTables()
	}, 2000)
	async function getTables() {
		try {
			const response = await axios.get(
				"https://edp-backend-production.up.railway.app/get-sensor-data"
			)
			// console.log(response)
			const {
				data: { location, sensordata, wifidata }
			} = response
			// console.log(location)
			setData(sensordata.slice(0, 10))
			setData2(wifidata.slice(0, 10))
			setData3(location.slice(0, 10))
		} catch (error) {
			console.error(error)
		}

		// setLoading(false)

		console.log(data)
	}
	return (
		<div className="Tables">
			<h3>PDR Data</h3>
			<Table className="Table" data={data} />

			<h3>WPL Data</h3>
			<Table2 className="Table" data={data2} />
			<h3>Final Location</h3>
			<Table3 className="Table" data={data3} />
		</div>
	)
}

export default Tables
