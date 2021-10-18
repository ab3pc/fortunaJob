import React from 'react'
import ContentLoader from "react-content-loader"


function VacLoadingBlock() {
	return (
		<ContentLoader className = "service__item"
		speed={21}
		width={340}
		height={459}
		viewBox="0 0 340 459"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	  >
		<rect x="21" y="2" rx="0" ry="0" width="310" height="41" /> 
		<rect x="21" y="69" rx="0" ry="0" width="310" height="169" /> 
		<rect x="91" y="312" rx="0" ry="0" width="1" height="1" /> 
		<rect x="21" y="251" rx="0" ry="0" width="203" height="24" /> 
		<rect x="21" y="293" rx="0" ry="0" width="113" height="49" /> 
		<rect x="153" y="294" rx="0" ry="0" width="113" height="49" /> 
		<rect x="21" y="354" rx="0" ry="0" width="203" height="24" /> 
		<rect x="21" y="391" rx="0" ry="0" width="203" height="24" /> 
		<rect x="21" y="431" rx="0" ry="0" width="203" height="24" /> 
		<rect x="21" y="463" rx="0" ry="0" width="203" height="36" />
	  </ContentLoader>
	)
}

export default VacLoadingBlock
