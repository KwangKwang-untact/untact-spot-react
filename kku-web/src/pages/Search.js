import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../history'

import FilterIcon from '../assets/icons/filter.svg'

import Img1 from '../assets/images/img1.jpg'
import Img2 from '../assets/images/img2.jpg'
import Img3 from '../assets/images/img3.jpg'

export default class Search extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (<div className='container'>
			<div className='search-top d-flex justify-content-between'>
				<span className='text'>검색 결과</span>
				<span className='filter' onClick={() => history.goBack()}>
					필터 설정
					<img src={FilterIcon}/>
				</span>
			</div>

			<p className='search-help'>
				나의 상황에 적합한<br/>
				언택트 장소들을 보여드려요!
			</p>

			<div className='search-list'>
				<div to='/view/1' className='item'>
					<img src={Img1}/>
					<div className='content d-flex flex-column justify-content-between w-100'>
						<div>
							<p className='name'>서울 강서 한강공원</p>
							<p className='sub'>
								<span className='dis'>5km</span>
								<span className='time'>2시간</span>
							</p>
						</div>
						<div className='item-bottom'>
							<p className='untact-text'>Untact 지수 <span className='main-color'>70</span></p>
							<div className='d-flex justify-content-between'>
								<Link to='/' className='mr-1'>
									<button className='app-btn outline'>길찾기</button>
								</Link>
								<Link to='/view/1' className='ml-1 flex-grow-1 '>
									<button className='app-btn active fill'>상세보기</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div to='/view/1' className='item'>
					<img src={Img2}/>
					<div className='content d-flex flex-column justify-content-between w-100'>
						<div>
							<p className='name'>서울 강서 한강공원</p>
							<p className='sub'>
								<span className='dis'>5km</span>
								<span className='time'>2시간</span>
							</p>
						</div>
						<div className='item-bottom'>
							<p className='untact-text'>Untact 지수 <span className='main-color'>70</span></p>
							<div className='d-flex justify-content-between'>
								<Link to='/' className='mr-1'>
									<button className='app-btn outline'>길찾기</button>
								</Link>
								<Link to='/view/1' className='ml-1 flex-grow-1 '>
									<button className='app-btn active fill'>상세보기</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div to='/view/1' className='item'>
					<img src={Img3}/>
					<div className='content d-flex flex-column justify-content-between w-100'>
						<div>
							<p className='name'>서울 강서 한강공원</p>
							<p className='sub'>
								<span className='dis'>5km</span>
								<span className='time'>2시간</span>
							</p>
						</div>
						<div className='item-bottom'>
							<p className='untact-text'>Untact 지수 <span className='main-color'>70</span></p>
							<div className='d-flex justify-content-between'>
								<Link to='/' className='mr-1'>
									<button className='app-btn outline'>길찾기</button>
								</Link>
								<Link to='/view/1' className='ml-1 flex-grow-1 '>
									<button className='app-btn active fill'>상세보기</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>)
	}
}