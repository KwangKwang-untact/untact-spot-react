import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './component/layout/Header'
import Main from './pages/Main'

export default class App extends React.Component {
  render() {
		return (<>
			<Header/>
			<Switch>
				<Route exact path='/' component={Main}/>
			</Switch>
		</>)
  }
}