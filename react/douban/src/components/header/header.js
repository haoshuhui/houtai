import React, { Component } from 'react';
import './header.css'

class Header extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<header>
	            <h2>豆瓣</h2>
		            <ul>
		            <li><a href="#">电影</a></li>
		            <li><a href="#">图书</a></li>
		            <li><a href="#">广播</a></li>
		            <li><a href="#">小组</a></li>
		            </ul>
	            <span className="iconfont">&#xe6f9;</span>
        	</header>
		)
	}
}
export default Header