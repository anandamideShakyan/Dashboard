import React, { useMemo } from "react"
import MaterialReactTable from "material-react-table"

const Table2 = ({ data }) => {
	//should be memoized or stable
	const columns = useMemo(
		() => [
			{
				accessorKey: "device_id", //access nested data with dot notation
				header: "DeviceId",
				size: 50
			},
			{
				accessorKey: "mac1",
				header: "AP1",
				size: 50
			},
			{
				accessorKey: "mac2",
				header: "AP2",
				size: 50
			},
			{
				accessorKey: "mac3",
				header: "AP3",
				size: 50
			},
			{
				accessorKey: "calcx", //normal accessorKey
				header: "X-coordinate",
				size: 50
			},
			{
				accessorKey: "calcy",
				header: "Y-coordinate",
				size: 50
			}
		],
		[]
	)

	return <MaterialReactTable columns={columns} data={data} />
}

export default Table2
