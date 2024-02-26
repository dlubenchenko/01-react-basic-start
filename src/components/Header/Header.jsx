import { useState } from 'react'
import logo from '/logo-name.svg'
import { styled } from 'styled-components'
import { useEffect } from 'react'
// import './Header.css'

const HeaderContainer = styled.header`
	height: 50px;
	display: flex;
	padding: 0 2rem;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	background: #fafafa;
`

function Header() {
	const [now, setNow] = useState(new Date().toLocaleTimeString())

	useEffect(() => {
		const interval = setTimeout(
			() => setNow(new Date().toLocaleTimeString()),
			1000
		)

		return () => {
			clearInterval(interval)
			console.log('cleared');
		}
	}, [])

	return (
		<HeaderContainer>
			<img src={logo} alt='Logo' />
			{/* <h3>Result university</h3> */}
			<span>Time now: {now}</span>
		</HeaderContainer>
	)
}

export default Header
