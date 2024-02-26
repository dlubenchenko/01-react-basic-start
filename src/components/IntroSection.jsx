import React from 'react'

function IntroSection() {
	return (
		<section>
			<h1 className='centered'>Lorem, ipsum.</h1>
			<h3 className='centered' style={{ color: 'teal' }}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, iste.
			</h3>
		</section>
	)
}

// function IntroSection() {
// 	return React.createElement('section', null, [
// 		React.createElement('h1', { className: 'centered' }, 'Lorem, ipsum.'),
// 		React.createElement(
// 			'h3',
// 			{ className:'centered', style:{ color: 'teal' } },
// 			'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
// 		),
// 	])
// }

export default IntroSection
