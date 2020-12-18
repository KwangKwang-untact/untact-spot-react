import React from 'react'

export default class Filter extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			car: false,
			time: 0,
			member: 0,
			theme: null,
		}
	}
	
	render() {
		return (<>
			<div className='filter-top'>
				<span>검색필터</span>
			</div>

			<div className='filter-container'>
				<section className='filter-section'>
					<span className='title'>차량 여부</span>
					<div>
					</div>
				</section>
			</div>
		</>)
	}
}