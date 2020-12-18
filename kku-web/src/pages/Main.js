import React from 'react'
import { Link } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'
import { Search } from 'react-feather'

import SplashScreen from '../component/screen/splash'

import LocationIcon from '../assets/icons/location.svg'
import MainBackground from '../assets/images/main.svg'
import Img1 from '../assets/images/img1.jpg'
import Img2 from '../assets/images/img2.jpg'
import Img3 from '../assets/images/img3.jpg'

import { connect } from 'react-redux'
import { SetLoading } from '../redux/actions/user'

class Main extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		if(!this.props.loading) setTimeout(() => this.props.SetLoading(), 300)
		
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log("Latitude is :", position.coords.latitude)
			console.log("Longitude is :", position.coords.longitude)
		})
	}

	render() {
		const { loading } = this.props

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
					<Link to='/filter' className='search-box'>
						<button className='search-input'>
							언택트 스팟 검색하기
						</button>
						<button class='search-btn'>
							<Search size={18} color='#ffffff'/>
						</button>
					</Link>
					<Link to='/map' className='map-box text-right mt-2'>
						<button className='btn-point'>
							지도 보기
						</button>
					</Link>
				</div>
			</div>

			<div className='container mt-3'>
				<p className='section-title'>
					<span className='main-color'>1시간 </span>
					안에 갈 수 있는 SPOT
				</p>
				<div className='x-slider-box'>
					<Link to='/view/1' className='item'>
						<img src={Img1}/>
						<span>서울 강서 한강공원</span>
					</Link>
					<Link to='/view/1' className='item'>
						<img src={Img2}/>
						<span>서울 강서 한강공원</span>
					</Link>
					<Link to='/view/1' className='item'>
						<img src={Img3}/>
						<span>서울 강서 한강공원</span>
					</Link>
				</div>

				<p className='section-title'>
					<span className='main-color'>2시간 </span>
					안에 갈 수 있는 SPOT
				</p>
				<div className='x-slider-box'>
					<Link to='/view/1' className='item'>
						<img src={Img1}/>
						<span>서울 강서 한강공원</span>
					</Link>
					<Link to='/view/1' className='item'>
						<img src={Img2}/>
						<span>서울 강서 한강공원</span>
					</Link>
					<Link to='/view/1' className='item'>
						<img src={Img3}/>
						<span>서울 강서 한강공원</span>
					</Link>
				</div>
			</div>
		</>)
	}
}

const mapStateToProps = state => {
	return {
		info: state.user.info,
		loading: state.user.loading,
  }
}

export default connect(mapStateToProps, {
	SetLoading
})(Main)