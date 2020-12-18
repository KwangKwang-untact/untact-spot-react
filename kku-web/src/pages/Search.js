import React from 'react'
import FilterIcon from '../assets/icons/filter.svg'

export default class Search extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (<div className='container'>
			<div className='search-top d-flex justify-content-between'>
				<span className='text'>검색 결과</span>
				<span className='filter'>
					필터 설정
					<img src={FilterIcon}/>
				</span>
			</div>

			<p className='search-help'>
				나의 상황에 적합한<br/>
				언택트 장소들을 보여드려요!
			</p>

			<div className='search-list'>

			</div>
		</div>)
	}
}