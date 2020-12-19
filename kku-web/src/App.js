import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './component/layout/Header'
import Map from './pages/Map'
import Main from './pages/Main'
import View from './pages/View'
import Filter from './pages/Filter'
import Search from './pages/Search'

export default class App extends React.Component {
  render() {
		return (<>
			<Header/>
			<Switch>
				<Route exact path='/' component={Main}/>
				<Route exact path='/map' component={Map}/>
				<Route exact path='/filter' component={Filter}/>
				<Route exact path='/search' component={Search}/>
				<Route exact path='/view/:id' component={View}/>
			</Switch>
		</>)
  }
}