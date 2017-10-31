var app=new Vue({
	el:"#app",
	data:{
		list:[
		{
			id:1,
			isSelected:true,
			submit:false,
			infor:{
				name:"Xiaomi Mi Bluetooth Speaker - my kasdw to",
				img:"images/img.png",
				price:"70.00",
				num:1,
				count:10
			},
			spec: [{
                        name: "color",
                        data: ["red", "yellow", "pink"],
                        value: "red",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "size",
                        data: ["s", "m", "l", "xl"],
                        value: "s",
                        type: "radio",
                        key: "size"
                    },
                    {
                        name: "remark",
                        data: "",
                        value: "备注",
                        type: "text",
                        key: "msg"
                    }
                ]
		},
		{
			id:2,
			isSelected:true,
			submit:false,
			infor:{
				name:"Xiaomi Mi Bluetooth Speaker - my kasdw to",
				img:"images/img.png",
				price:"70.00",
				num:1,
				count:10
			},
			spec: [{
                        name: "color",
                        data: ["red", "yellow", "pink"],
                        value: "pink",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "size",
                        data: ["s", "m", "l", "xl"],
                        value: "xl",
                        type: "radio",
                        key: "size"
                    }
                  
                ]
		},
		{
			id:3,
			isSelected:true,
			submit:false,
			infor:{
				name:"Xiaomi Mi Bluetooth Speaker - my kasdw to",
				img:"images/img.png",
				price:"70.00",
				num:1,
				count:10
			},
			spec: [{
                        name: "color",
                        data: ["red", "yellow", "pink"],
                        value: "yellow",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "size",
                        data: ["s", "m", "l", "xl"],
                        value: "l",
                        type: "radio",
                        key: "size"
                    },
                    {
                        name: "remark",
                        data: "",
                        value: "备注",
                        type: "text",
                        key: "msg"
                    }
                ]
			}
		
		],
		flag:false,

		renderArr:[
			{
			id:3,
			isSelected:true,
			infor:{
				name:"Xiaomi Mi Bluetooth Speaker",
				img:"images/img_1.png",
				price:"234.00",
				num:1,
				count:10
			},
			spec: [{
                        name: "color",
                        data: ["red", "yellow", "pink"],
                        value: "pink",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "size",
                        data: ["s", "m", "l", "xl"],
                        value: "xl",
                        type: "radio",
                        key: "size"
                    }
                  
                ]
		},
		{
			id:4,
			isSelected:true,
			infor:{
				name:"Xiaomi Mi Bluetooth Speaker ",
				img:"images/img_2.png",
				price:"652.00",
				num:1,
				count:10
			},
			spec: [{
                        name: "color",
                        data: ["red", "yellow", "pink"],
                        value: "pink",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "size",
                        data: ["s", "m", "l", "xl"],
                        value: "xl",
                        type: "radio",
                        key: "size"
                    }
                  
                ]
		},
		{
			id:5,
			isSelected:true,
			infor:{
				name:"Xiaomi Mi Bluetooth Speaker",
				img:"images/img_3.png",
				price:"934.00",
				num:1,
				count:10
			},
			spec: [{
                        name: "color",
                        data: ["red", "yellow", "pink"],
                        value: "pink",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "size",
                        data: ["s", "m", "l", "xl"],
                        value: "xl",
                        type: "radio",
                        key: "size"
                    }
                  
                ]
		},
		{
			id:6,
			isSelected:true,
			infor:{
				name:"Xiaomi Mi Bluetooth Speaker ",
				img:"images/img_4.png",
				price:"673.00",
				num:1,
				count:10
			},
			spec: [{
                        name: "color",
                        data: ["red", "yellow", "pink"],
                        value: "pink",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "size",
                        data: ["s", "m", "l", "xl"],
                        value: "xl",
                        type: "radio",
                        key: "size"
                    }
                  
                ]
		},
		{
			id:7,
			isSelected:true,
			infor:{
				name:"Xiaomi Mi Bluetooth Speaker ",
				img:"images/img_5.png",
				price:"1234.00",
				num:1,
				count:10
			},
			spec: [{
                        name: "color",
                        data: ["red", "yellow", "pink"],
                        value: "pink",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "size",
                        data: ["s", "m", "l", "xl"],
                        value: "xl",
                        type: "radio",
                        key: "size"
                    }
                  
                ]
		}
		]
	},
	computed:{
		chooseAll:{
			get:function(){
				var flag=true;
					this.list.forEach(function(item){
						if(!item.isSelected){
							flag=false;
						}
					})
					return flag;
			},
			set:function(v){
				this.flag=v;
				this.list.forEach(function(item){
					item.isSelected=v;
				})
			}
			
		},
		count:function(){
			var count=0;
			this.list.forEach(function(item){
				count+=item.infor.num;
			})
			return count;
		},
		countPrice:function(){
			var countPrice=0;
			this.list.forEach(function(item){
				countPrice+=item.infor.num*item.infor.price;
			})
			return countPrice;
		}
	},
	methods:{
		setNum:function(item,type){
			if (type == "add") {
                item.num ++;
                if (item.num > item.count) {
                    item.num = item.count
                }
            } else {
                item.num --;	
                if (item.num <= 0) {
                    item.num = 1
                }
		}
	},
	remove:function(item,index){
		this.list.splice(index,1);
		this.renderArr.push(item)
	},
	addInfor:function(index3,renderItem){
		this.renderArr.splice(index3,1);
		this.list.push(renderItem);
	},
	submitInformation:function(){
		this.list.forEach(function(item,index){
			if(item.isSelected==true){
				item.submit=true;
				return item.submit;
			}
				
		})
		
	},
	subSuccess:function(){
		confirm('已提交')
	},
	subCancel:function(){
		confirm('已取消')
	}
}
})


