import { useState, useRef } from 'react'
import Button from './Button/Button'

function StateVsRef() {
	const input = useRef()
	const [show, setShow] = useState(false);

	function handleKeyDown(event) { 
		if (event.key === 'Enter') {
			setShow(true)
		}
	 }

	return (
		<div>
			<h3>Input: {show && input.current.value}</h3>
			<input ref={input} type='text' className='control' onKeyDown={handleKeyDown}/>
		</div>
	)
}

function FeedbackSection() {
	const [form, setForm] = useState({
		name: '',
		hasError: false,
		reason: 'help',
		inputValue: '',
	})

	function handleNameChange(event) {
		setForm((prev) => ({
			...prev,
			name: event.target.value,
			hasError: event.target.value.trim().length === 0,
		}))
		// setName(event.target.value)
		// setHasError(event.target.value.trim().length === 0)
	}

	// function toggleError() {
	// setHasError((prev) => !prev)
	// }

	return (
		<section>
			<h3>Feedback</h3>

			{/* <Button onClick={toggleError}>Toggle Error</Button> */}

			<form style={{ marginBottom: '2rem' }}>
				<label htmlFor='name'>Your Request</label>
				<input
					type='text'
					id='name'
					className='control'
					style={{
						border: form.hasError ? '1px solid red' : null,
					}}
					value={form.name}
					onChange={handleNameChange}
				/>
				<label htmlFor='reason'>Request reason</label>
				<select
					name=''
					id='reason'
					className='control'
					value={form.reason}
					onChange={(event) =>
						setForm((prev) => ({ ...prev, reason: event.target.value }))
					}
				>
					<option value='error'>Error</option>
					<option value='help'>Need help</option>
					<option value='suggest'>Suggest</option>
				</select>

				<pre>
					Name: {form.name} <br />
					Reason: {form.reason}
				</pre>

				<Button disabled={form.hasError} isActive={!form.hasError}>
					Send
				</Button>
			</form>
			<hr />

			<StateVsRef />
		</section>
	)
}

export default FeedbackSection
