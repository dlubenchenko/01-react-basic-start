import Header from './components/Header/Header'
import LoremSection from './components/LoremSection'
import LoremNewSection from './components/LoremNewSection'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'
import EffectSection from './components/EffectSection'

function App() {
	const [tab, setTab] = useState('effect')

	return (
		<>
			<Header />
			<main>
				<IntroSection />

				<TabsSection active={tab} onChange={(current) => setTab(current)} />

				{tab === 'main' && (
					<>
						<LoremSection />
						<LoremNewSection />
					</>
				)}

				{tab === 'feedback' && (
					<>
						<FeedbackSection />
					</>
				)}

				{tab === 'effect' && (
					<>
						<EffectSection />
					</>
				)}
			</main>
		</>
	)
}

export default App
