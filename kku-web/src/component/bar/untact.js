import React from 'react'

export default class UntactBar extends React.Component {
	render() {
		const { score } = this.props

		return <div className='untact-bar-box'>
			<div className='untact-bar'>
				<span className='bad'>BAD</span>
				<span className='normal'>NORMAL</span>
				<span className='safe'>SAFE</span>
				<div className='none' style={{ width: `${100 - (score ? score : 0)}%` }}/>
			</div>
			<span className='score'>{score}점</span>
		</div>
	}
}