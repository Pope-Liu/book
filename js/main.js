// header("Access-Control-Allow-Origin:*");
// /*星号表示所有的域都可以接受，*/
// header("Access-Control-Allow-Methods:GET,POST");


let carouselBooks = [];
let recommendBooks = [];
let weekSellWellBooks = [];//本周热销榜书籍信息
let monthSellWellBooks = [];//本月热销榜单
let discountBooks = [];

$.ajax({
	type:"GET",
	url:"http://localhost:8080/book/getThisWeekHotBook",
	success:function (res) {
		if(res.resultCode === 200){
			weekSellWellBooks.$data.weekSellWellItems = res.data;
			console.log(res.data)
		}else {
			alert("请求出错！")
		}
	},
	error:function (res) {
		console.log(res)
	}
})

$.ajax({
	type:"GET",
	url:"http://localhost:8080/book/getThisMonthHotBook",
	success:function (res) {
		if(res.resultCode === 200){
			monthSellWellBooks.$data.monthSellWellItems = res.data;
			console.log(res.data)
			for(let  i = 0; i < res.data; i++){
				if(i <= 4){
					carousel.$data.carouselItems.push(res.data[i])
				}else {
					monthSellWell.$data.monthSellWellItems.push(res.data[i])
				}
			}
		carousel.$data.book = carousel.$data.carouselItems[0];
		}else {
			alert("请求出错！")
		}
	},
	error:function (res) {
		console.log(res)
	}
})

$.ajax({
	type:"GET",
	url:"http://localhost:8080/book/DiscountBook",
	success:function (res) {
		if(res.resultCode === 200){
			recommend.$data.recommendItems = res.data;
			console.log(res.data)
		}else {
			alert("请求出错！")
		}
	},
	error:function (res) {
		alert("网络请求失败！")
	}
})


let carousel = new Vue({
	el: '#carousel',
	data: {
		carouselItems:carouselBooks,
		book:{}
	},
	created(){
		let that = this;
		that.book = that.carouselItems[0]
	}
});

let recommend = new Vue({
	el:'#recommend',
	data:{
		recommendItems:recommendBooks
	}
});

let weekSellWell = new Vue({
	el:'#weekSellWell',
	data:{
		weekSellWellItems:weekSellWellBooks
	}
})

let monthSellWell = new Vue({
	el:'#monthSellWell',
	data:{
		monthSellWellItems:monthSellWellBooks
	}
})

let discount = new Vue({
	el:'#discount',
	data:{
		discountItems:discountBooks
	}
})



//-----------------bootstrap内置函数---------------------------
//当轮播图切换时调用该事件
$('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
	carousel.$data.book = carousel.$data.carouselItems[event.to]
});