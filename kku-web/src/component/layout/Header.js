import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

function HeaderName({ children, to, map, exact }) {
  const match = useRouteMatch({
		exact: true,
		path: map,
  })

  return (
    <Link to={to} className='navbar-brand'>
			{!match ? 'UNTACT SPOT' : 'UNTACT MAP'}
		</Link>
  )
}

export default class Header extends React.Component {
	render() {
		return (
			<nav className='navbar'>
				<HeaderName to='/' map='/map'/>
			</nav>
		)
	}
}