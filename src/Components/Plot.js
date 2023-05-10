import React, { useEffect } from "react"

function GoogleMap() {
	useEffect(() => {
		const ifameData = document.getElementById("iframeId")
		const lat = 23.17767950761736
		const lon = 80.0253094869121
		ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
	})
	return (
		<div
			className="Tables"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<iframe
				id="iframeId"
				height="600px"
				width="850px"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",

					marginRight: "55px"
				}}
			></iframe>
		</div>
	)
}
export default GoogleMap
