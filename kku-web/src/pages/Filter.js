import React from 'react'
import { Link } from 'react-router-dom'
import InputRange from 'react-input-range'

import 'react-input-range/lib/css/index.css'

export default class Filter extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			car: null,
			time: 0,
			member: 1,
			theme: [],
		}
	}

	toggleTheme(name) {
		let { theme } = this.state
		const index = theme.findIndex(val => name == val)

		index != -1 ? theme.splice(index, 1) : theme.push(name)
		this.setState({ theme })
	}
	
	render() {
		const { car, time, member, theme } = this.state
		
		let theme_list = ['글램핑', '일반 야영장', '카라반', '자동차 여양장', '관광지', '차박']

		return (<>
			<div className='filter-top'>
				<span>검색필터</span>
			</div>

			<div className='filter-container px-5'>
				<section className='filter-section'>
					<span className='title'>차량 여부</span>
					<div className='d-flex justify-content-between'>
						<button className={`app-btn mr-2 fill ${car == true ? 'active' : false}`}
							onClick={() => this.setState({ car: car != true ? true : null })}>
							차를 타고 이동
						</button>
						<button className={`app-btn ml-2 fill ${car == false ? 'active' : false}`}
							onClick={() => this.setState({ car: car != false ? false : null })}>
							차를 타지 않음
						</button>
					</div>
				</section>

				<section className='filter-section'>
					<span className='title'>이동 시간</span>
					<p className='sub mb-2'>편도 이동 시간임을 참고해주세요!</p>
					<p className='filter-time'>{time}시간</p>
					<InputRange minValue={0} maxValue={8}
						value={time} onChange={time => this.setState({ time })}
						formatLabel={value => ''}/>
				</section>

				<section className='filter-section'>
					<span className='title'>여행 테마</span>
					<p className='sub mb-2'>복수 선택 가능</p>
					<div className='d-flex flex-wrap justify-content-around'>
						{theme_list.map(name => <button key={'theme-' + name} className={`app-btn mb-2 ${theme.includes(name) ? 'active' : ''}`}
							style={{ width: '49%', fontSize: 18, paddingTop: 14, paddingBottom: 14 }} onClick={() => this.toggleTheme(name)}>
							{name}
						</button>)}
					</div>
				</section>

				<Link to='/search'>
					<butotn className='btn-block btn-filter-search'>
						검색하기
					</butotn>
				</Link>
			</div>
		</>)
	}
}