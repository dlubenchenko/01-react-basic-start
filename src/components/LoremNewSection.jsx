import { useState } from 'react'
import { differences } from '../data'
import Button from './Button/Button'

function LoremNewSection() {
	const [contentType, setContentType] = useState(null)

	function handleClick(type) {
		setContentType(type)
	}
	return (
		<section>
			<h3>Lorem, ipsum dolor.</h3>
			<Button
				isActive={contentType === 'way'}
				onClick={() => handleClick('way')}
			>
				Lorem 1
			</Button>
			<Button
				isActive={contentType === 'easy'}
				onClick={() => handleClick('easy')}
			>
				Lorem 2
			</Button>
			<Button
				isActive={contentType === 'program'}
				onClick={() => handleClick('program')}
			>
				Lorem 3
			</Button>

			{!contentType && <p>Click a button</p>}
			{contentType && <p>{differences[contentType]}</p>}
		</section>
	)
}

export default LoremNewSection
