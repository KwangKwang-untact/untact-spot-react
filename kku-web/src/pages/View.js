import React from 'react'
import ImageSlider from 'react-simple-image-slider'
import { Search } from 'react-feather'

import PinIcon from '../assets/icons/pin.svg'

import Img1 from '../assets/images/img1.jpg'
import Img2 from '../assets/images/img2.jpg'
import Img3 from '../assets/images/img3.jpg'

export default class View extends React.Component {
	constructor(props) {
		super(props)


		this.state = {
			id: props.match.params.id,
			images: [
				{ url: Img1 },
				{ url: Img2 },
				{ url: Img3 },
			]
		}
	}
	
	render() {
		const { images } = this.state

		return (<>
			<div className='image-slider'>
				<ImageSlider width='100%' height={276} images={images}
					showNavs={true} navStyle={2}/>
			</div>

			<div className='container' style={{ paddingBottom: 72 }}>
				<div className='common-info'>
					<p className='summary'>
						<img src={PinIcon} width={16}/>
						<span className='name'>북서울 꿈의 숲</span>
						<span className='dis'>10km</span>
						<span className='time'>2시간</span>
					</p>

					<div className='score'>
						<p className='title'>
							<span className='main-color'>UNTACT </span>
							점수
						</p>
						<p className='sub'>
							1시간 동안 <span className='point'>15명</span>이 조회했어요!
						</p>
					</div>
				</div>

				<div className='detail-info'>
					<p className='title'>상세 정보</p>
					<div className='px-2'>
						<p className='text'>2020년 7월 1일 개장한 휴양림으로, 소나무를 바라보며 프라이빗한 휴식을 취할 수 있는 독채펜션 ‘숲속의 집’과 4인~20인까지 숙박이 가능한 콘도 형태의 산림휴양관, 숲 속 감성캠핑을 즐길 수 있는 야외 캠핑장, 숲에 대한 다양한 체험을 해보는 유아숲체험원과 플리마켓, 숲 영화관이 운영될 넓은 잔디광장이 조성되어 있습니다.</p>
						<div className='d-flex justify-content-between'>
							<ul className='info-list'>
								<li>
									<span>문의 및 안내</span>
									<span>031-860-3259</span>
								</li>
								<li>
									<span>주소</span>
									<span>서울 강북구 번동 산 28-6</span>
								</li>
								<li>
									<span>입장료</span>
									<span>무료</span>
								</li>
							</ul>
							<ul className='info-list'>
								<li>
									<span>이용시간</span>
									<span>평일 9:00~18:00<br/>주말 9:00~20:00</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<button className='btn-block btn-path'>
				길 찾기 
				<Search width={20} color={'#ffffff'}/>
			</button>
		</>)
	}
}