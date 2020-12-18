import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Search } from 'react-feather'

import LocationIcon from '../assets/icons/location.svg'
import MainBackground from '../assets/images/main.svg'

import SplashScreen from '../component/screen/splash'

export default class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
		}
	}

	componentDidMount() {
		setTimeout(() => this.setState({ loading: true }), 300)
		
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log("Latitude is :", position.coords.latitude)
			console.log("Longitude is :", position.coords.longitude)
		})
	}

	render() {
		const { loading } = this.state

		return (<>
			<CSSTransition in={!loading} timeout={1200} unmountOnExit classNames='splash-screen'>
				<SplashScreen/>
			</CSSTransition>
			
			<div className='my-location'>
				<div className='icon-location'>
					<img src={LocationIcon}/>
					<span>나의 위치</span>
				</div>
				<p className='current-locaiton'>서울 노원구 광운로 21</p>
			</div>

			<div className='main-banner'>
				<div style={{ backgroundImage: `url(${MainBackground})` }} className='bg-main'/>
				<div className='content'>
					<p className='text'>
						답답하고 우울하다면?<br/>
						마주치지 말고 색다른 장소로 떠나봐요!
					</p>
					<div className='search-box'>
						<input type='text' className='search-input' placeholder='언택트 스팟 검색하기'/>
						<button class='search-btn'>
							<Search size={18} color='#ffffff'/>
						</button>
					</div>
				</div>
			</div>

			<div className='container mt-3'>
				<p className='section-title'>
					<span className='main-color'>1시간 </span>
					안에 갈 수 있는 SPOT
				</p>
				<div className='scroll-box'>
					<div className='item'>
						
					</div>
				</div>

				<p className='section-title'>
					<span className='main-color'>2시간 </span>
					안에 갈 수 있는 SPOT
				</p>
			</div>
		</>)
	}
}