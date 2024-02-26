import WayToTeach from './WayToTeach'
import { ways } from '../data'

function LoremSection() {
	return (
		<section>
			<h3>Lorem ipsum dolor sit amet.</h3>

			<ul>
				{ways.map((way) => (
					<WayToTeach key={way.title} {...way} />
				))}
			</ul>
		</section>
	)
}

export default LoremSection
