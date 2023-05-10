import "./App.css"
import { Routes, Route } from "react-router-dom"
import LiveTracking from "./Components/Pages/LiveTracking"
import Report from "./Components/Pages/Report"
import History from "./Components/Pages/History"
import Analytics from "./Components/Pages/Analytics"

function App() {
	return (
		<Routes className="App">
			<Route path="/" element={<LiveTracking />} />
			{/* <Route index element={ <LiveTracking />} /> */}
			<Route path="report" element={<Report />} />
			<Route path="history" element={<History />} />
			<Route path="analytics" element={<Analytics />} />
		</Routes>
	)
}

export default App
