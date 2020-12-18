import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
	render() {
		return (
			<nav className='navbar'>
				<Link to='/' className='navbar-brand'>
					UNTACT SPOT
				</Link>
			</nav>
		)
	}
}