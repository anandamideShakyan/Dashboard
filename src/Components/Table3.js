import React, { useMemo } from "react"
import MaterialReactTable from "material-react-table"

const Table3 = ({ data }) => {
	//should be memoized or stable
	const columns = useMemo(
		() => [
			{
				accessorKey: "device_id", //access nested data with dot notation
				header: "DeviceId",
				size: 50
			},
			{
				accessorKey: "pdrx",
				header: "PDR-x",
				size: 50
			},
			{
				accessorKey: "pdry",
				header: "PDR-y",
				size: 50
			},
			{
				accessorKey: "wplx",
				header: "WPL-x",
				size: 50
			},
			{
				accessorKey: "wply",
				header: "WPL-y",
				size: 50
			},
			{
				accessorKey: "finalx",
				header: "Final-x",
				size: 50
			},
			{
				accessorKey: "finaly",
				header: "Final-y",
				size: 50
			}
		],
		[]
	)

	return <MaterialReactTable columns={columns} data={data} />
}

export default Table3
