import React from 'react'

import * as Scroll from 'react-scroll';
let scrollSpy = Scroll.scrollSpy;

function Blog() {
	React.useEffect(() => {
		scrollSpy.update();
	}, [])
	return (
		<div name = "blog">
				Blog
		</div>
	)
}

export default Blog
