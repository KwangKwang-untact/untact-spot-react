import React from 'react'
import PinIcon from '../../assets/icons/pin.svg'

export default class SplashScreen extends React.Component {
	render() {
		return <div className='splash-screen'>
			<div className='container text-center'>
				<img src={PinIcon}/>
				<h3 className='title'>UNTACT SPOT</h3>
				<span className='text'>안전한 장소를 소개하다</span>
			</div>
		</div>
	}
}