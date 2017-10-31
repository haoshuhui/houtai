import React, { Component } from 'react';
import './content.css'

class Content extends Component {
	constructor(props){
		super(props)
		this.state={
	        datalist:[
	            {
	                id:1,
	                title:"维斯特洛大陆开高铁了！",
	                con:"夜王勤勤恳恳走了七季终于换了高级坐骑",
	                name:"by豆瓣电影",
	                img:"img/img1.png",
	                text:"来自栏目一周热门影视"
	            },
	            {
	                id:2,
	                title:"广播精选|祝霍格沃茨新入学的巫师和女巫师开学快乐！",
	                con:"今天在柏林机场,我从美帝带过来的魔杖被安检扣下了,几个工作人员认真地...",
	                name:"by豆瓣",
	                img:"img/img2.png",
	                text:"来自栏目广播精选"
	            },
	            {
	                id:3,
	                title:"幸福的想象,独立的文学！",
	                con:"夜王勤勤恳恳走了七季终于换了高级坐骑",
	                name:"by豆瓣电影",
	                img:"img/img1.png",
	                text:"来自栏目一周热门影视"
	            },
	            {
	                id:1,
	                title:"维斯特洛大陆开高铁了！",
	                con:"夜王勤勤恳恳走了七季终于换了高级坐骑",
	                name:"by豆瓣电影",
	                img:"img/img1.png",
	                text:"来自栏目一周热门影视"
	            },
	            {
	                id:2,
	                title:"广播精选|祝霍格沃茨新入学的巫师和女巫师开学快乐！",
	                con:"今天在柏林机场,我从美帝带过来的魔杖被安检扣下了,几个工作人员认真地...",
	                name:"by豆瓣",
	                img:"img/img2.png",
	                text:"来自栏目广播精选"
	            },
	            {
	                id:3,
	                title:"幸福的想象,独立的文学！",
	                con:"夜王勤勤恳恳走了七季终于换了高级坐骑",
	                name:"by豆瓣电影",
	                img:"img/img1.png",
	                text:"来自栏目一周热门影视"
	            },
	            {
	                id:1,
	                title:"维斯特洛大陆开高铁了！",
	                con:"夜王勤勤恳恳走了七季终于换了高级坐骑",
	                name:"by豆瓣电影",
	                img:"img/img1.png",
	                text:"来自栏目一周热门影视"
	            },
	            {
	                id:2,
	                title:"广播精选|祝霍格沃茨新入学的巫师和女巫师开学快乐！",
	                con:"今天在柏林机场,我从美帝带过来的魔杖被安检扣下了,几个工作人员认真地...",
	                name:"by豆瓣",
	                img:"img/img2.png",
	                text:"来自栏目广播精选"
	            },
	            {
	                id:3,
	                title:"幸福的想象,独立的文学！",
	                con:"夜王勤勤恳恳走了七季终于换了高级坐骑",
	                name:"by豆瓣电影",
	                img:"img/img1.png",
	                text:"来自栏目一周热门影视"
	            }
	        ]
		}
	}
	render(){
		const datalist =this.state.datalist
		return (
			<div>
		        <section>
		        {
		        	datalist.map((item)=>(
		        		<div className="content">
			                <div className="left">
			                    <h2>{item.title}</h2>
			                    <p>{item.con}</p>
			                    <span>{item.name}</span>
			                </div>
			                <div className="right">
			                    <dl>
			                        <dt>
			                        <img src={item.img} />
			                        </dt>
			                        <dd>{item.text}</dd>
			                    </dl>
			                </div>
		            	</div>
		        	))
		        }
		        	
		         </section>
	        </div>
		)
	}
}
export default Content