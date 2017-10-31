import React, { Component } from 'react';
import './list.css'

class List extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="list">
	            <ul>
	            <li>影院热映</li>
	            <li>华语新碟榜</li>
	            <li>豆瓣时间</li>
	            <li>使用豆瓣App</li>
	            </ul>
        	</div>
		)
	}
}
export default List