import React, { useMemo } from "react"
import MaterialReactTable from "material-react-table"

const Table = ({ data }) => {
	//should be memoized or stable
	console.log(data)
	const columns = useMemo(
		() => [
			{
				accessorKey: "device_id", //access nested data with dot notation
				header: "DeviceId",
				size: 50
			},
			{
				accessorKey: "ax", //access nested data with dot notation
				header: "ax",
				size: 50
			},
			{
				accessorKey: "ay",
				header: "ay",
				size: 50
			},
			{
				accessorKey: "az", //normal accessorKey
				header: "az",
				size: 50
			},
			{
				accessorKey: "gx",
				header: "gx",
				size: 50
			},
			{
				accessorKey: "gy",
				header: "gy",
				size: 50
			},
			{
				accessorKey: "gz",
				header: "gz",
				size: 50
			},
			{
				accessorKey: "mx",
				header: "mx",
				size: 50
			},
			{
				accessorKey: "my",
				header: "my",
				size: 50
			},
			{
				accessorKey: "mz",
				header: "mz",
				size: 50
			}
		],
		[]
	)

	return <MaterialReactTable columns={columns} data={data} />
}

export default Table
