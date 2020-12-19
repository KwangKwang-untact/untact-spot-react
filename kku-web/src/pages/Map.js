/* global kakao */
import React from 'react'

export default class Map extends React.Component {
	constructor(props) {
		super(props)

		this.map = null
		this.markers = []
	}
	
	async componentDidMount() {
		const container = document.getElementById('kakaomap')
		const options = { center: new kakao.maps.LatLng(37.55, 126.98), level: 13 }
		// const markerImage = new kakao.maps.MarkerImage('https://www.flaticon.com/svg/static/icons/svg/3737/3737279.svg',
		// 	new kakao.maps.Size(36, 50))

		this.map = new kakao.maps.Map(container, options)
	}

	render() {
		return (<div className='position-relative' width='100%' style={{ height: 'calc(100vh - 60px)' }}>
			<div id='kakaomap' style={{ width: '100%', height: '100%' }}></div>
			<div className='.map-overlay d-flex flex-column justify-content-between'>
				<div className='map-search'>
					
				</div>
				<div className='map-footer'>
					
				</div>
			</div>
		</div>)
	}
}