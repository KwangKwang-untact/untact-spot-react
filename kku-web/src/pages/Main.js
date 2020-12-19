import React from 'react'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import { CSSTransition } from 'react-transition-group'
import { Search } from 'react-feather'

import SplashScreen from '../component/screen/splash'

import LocationIcon from '../assets/icons/location.svg'
import MainBackground from '../assets/images/main.svg'
import Img1 from '../assets/images/img1.jpg'
import Img2 from '../assets/images/img2.jpg'
import Img3 from '../assets/images/img3.jpg'

import { connect } from 'react-redux'
import { getRecommend } from '../redux/actions/data'
import { SetLoading, getGeometry } from '../redux/actions/user'

class Main extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			lat: null,
			long: null,
		}
	}

	componentDidMount() {
		if(!this.props.loading) setTimeout(() => this.props.SetLoading(), 300)
		
		navigator.geolocation.getCurrentPosition(
			position => this.props.getGeometry({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude }),
			err => confirmAlert({
				title: '위치',
				message: '위치 권한이 없을 경우 서비스 이용에 어려움이 있을 수 있습니다',
				buttons: [
					{ label: '예' },
				]
			})
		)
	}

	static getDerivedStateFromProps(props, state) {
		if(props.lat != state.lat || props.long != state.long) {
			console.log('Diffrent')
		}

		return {...props}
	}

	render() {
		const { address, loading } = this.props

		return (<>
			<CSSTransition in={!loading} timeout={1200} unmountOnExit classNames='splash-screen'>
				<SplashScreen/>
			</CSSTransition>
			
			<div className='my-location'>
				<div className='icon-location'>
					<img src={LocationIcon}/>
					<span>나의 위치</span>
				</div>
				<p className='current-locaiton'>{address}</p>
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
		lat: state.user.lat,
		long: state.user.long,
		address: state.user.address,
		loading: state.user.loading,
  }
}

export default connect(mapStateToProps, {
	SetLoading, getGeometry, getRecommend
})(Main)