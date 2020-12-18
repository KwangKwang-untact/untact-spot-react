import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './component/layout/Header'
import Main from './pages/Main'
import View from './pages/View'
import Filter from './pages/Filter'

export default class App extends React.Component {
  render() {
		return (<>
			<Header/>
			<Switch>
				<Route exact path='/' component={Main}/>
				<Route exact path='/map' component={Main}/>
				<Route exact path='/filter' component={Filter}/>
				<Route exact path='/search' component={Main}/>
				<Route exact path='/view/:id' component={View}/>
			</Switch>
		</>)
  }
}