import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import SplashScreen from '../component/screen/splash'

export default class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
		}
	}

	componentDidMount() {
		setTimeout(() => this.setState({ loading: true }), 500)
	}

	render() {
		const { loading } = this.state

		return (<>
			<CSSTransition in={!loading} timeout={1000} unmountOnExit classNames='splash-screen'>
				<SplashScreen/>
			</CSSTransition>
			
			
		</>)
	}
}