import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../history'

import FilterIcon from '../assets/icons/filter.svg'

import { connect } from 'react-redux'
import { getRecommend } from '../redux/actions/data'

class Search extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			page: 1, perPage: 10,
		}
	}

	componentDidMount() {
		const { user, filter } = this.props
		const query = {
			latitude: user.lat,
			longitude: user.long,
			car: filter.car,
			duration: filter.time * 60,
		}

		this.props.getRecommend(query)
	}

	render() {
		const { page, perPage } = this.state
		const { data, count, status } = this.props
		// const list = data.slice(0, page*perPage)

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
				{status == 'request' && <p className='main-color text-center'>검색중입니다...</p>}
				{!count && status=='finish' && <p className='text-center'>검색 결과가 없습니다</p>}
				{data.map(obj => <div className='item'>
					<img src={obj.image[0]}/>
					<div className='content d-flex flex-column justify-content-between w-100'>
						<div>
							<p className='name'>{obj.title}</p>
							<p className='sub'>
								<span className='dis'>-km</span>
								<span className='time'>-시간</span>
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
				</div>)}
			</div>
		</div>)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		filter: state.data.filter,
		data: state.data.data,
		count: state.data.count,
		status: state.data.status,
  }
}

export default connect(mapStateToProps, {
	getRecommend
})(Search)