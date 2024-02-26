import { useState, useEffect, useCallback } from 'react'
import Modal from './Modal/Modal'
import Button from './Button/Button'
import useInput from './Hooks/UseInput'

function EffectSection() {
	const input = useInput()
	const [modal, setModal] = useState(false)
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])

	const fetchUsers = useCallback(async () => {
		setLoading(true)
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const users = await response.json()
		setUsers(users)
		setLoading(false)
	}, [])

	useEffect(() => {
		fetchUsers()
	}, [fetchUsers])

	return (
		<section>
			<h3>Effects</h3>

			<Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
				Open information
			</Button>

			<Modal open={modal}>
				<h3>Hello from modal</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos
					minus, ipsam vel enim numquam dolore quia officia dolorem aliquam.
					Quia modi pariatur fugiat sapiente quasi illum unde et excepturi?
				</p>
				<Button onClick={() => setModal(false)}>Close</Button>
			</Modal>

			{loading && <p>Loading...</p>}
			{!loading && (
				<>
					<input type='text' className='control' {...input} />
					<h6>{input.value}</h6>
					<ul>
						{users
							.filter((user) =>
								user.name.toLowerCase().includes(input.value.toLowerCase())
							)
							.map((user) => (
								<li key={user.id}>{user.name}</li>
							))}
					</ul>
				</>
			)}
		</section>
	)
}

export default EffectSection
