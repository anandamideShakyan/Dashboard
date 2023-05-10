import React from "react"
import SpatialTrackingIcon from "@mui/icons-material/SpatialTracking"
import HistoryIcon from "@mui/icons-material/History"
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined"
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined"
export const SidebarData = [
	{
		title: "Live Tracking",
		icon: <SpatialTrackingIcon />,
		link: "/"
	},
	{
		title: "History",
		icon: <HistoryIcon />,
		link: "/history"
	},
	{
		title: "Analytics",
		icon: <AnalyticsOutlinedIcon />,
		link: "/analytics"
	},
	{
		title: "Report",
		icon: <ReportOutlinedIcon />,
		link: "/report"
	}
]
