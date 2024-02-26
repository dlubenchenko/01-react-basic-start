import Button from './Button/Button'

function TabsSection({ active, onChange }) {
	return (
		<section style={{ marginBottom: '1rem' }}>
			<Button isActive={active === 'main'} onClick={() => onChange('main')}>
				Home
			</Button>
			<Button
				isActive={active === 'feedback'}
				onClick={() => onChange('feedback')}
			>
				Feedback
			</Button>
			<Button
				isActive={active === 'effect'}
				onClick={() => onChange('effect')}
			>
				Effect
			</Button>
		</section>
	)
}

export default TabsSection
