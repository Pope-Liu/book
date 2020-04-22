let userBooks = [
	{
		id: 1,
		url: "../static/book-2391006_1920.jpg",
		name: "Test Book1",
		author: "Pope",
		labels: ["标签1", "标签2", "标签3"],
		discount: 0.9,
		price: 20,
	},
	{
		id: 2,
		url: "../static/book-2391006_1920.jpg",
		name: "Test Book2",
		author: "Pope",
		labels: ["标签1", "标签2", "标签3"],
		discount: 0.7,
		price: 20,
	},
];
let userComments = [
	{
		id: 1,
		url: "../static/book-2391006_1920.jpg",
		name: "Test Book1",
		author: "Pope",
		labels: ["标签1", "标签2", "标签3"],
		discount: 0.9,
		price: 20,
		Comment: "评价1",
	},
	{
		id: 2,
		url: "../static/book-2391006_1920.jpg",
		name: "Test Book2",
		author: "Pope",
		labels: ["标签1", "标签2", "标签3"],
		discount: 0.7,
		price: 20,
		Comment: "评价2",
	},
];

$.ajax({
	type:"GET",
	url:"http://localhost:8080/book/getCommentByBookId",
	success:function (res) {
		if(res.resultCode === 200){
			userComments.$data.commendItems = res.data;
			console.log(res.data)
		}else {
			alert("请求出错！")
		}
	},
	error:function (res) {
		console.log(res)
	}
})

let userBook = new Vue({
	el:'#userBook',
	data:{
		UserBookItems:userBooks
	},
	methods: {
		bookDetail(bookID){
			window.location.href = "../html/bookDetail.html?bookID="+bookID;
		},
	}
});
let userComment = new Vue({
	el:'#userComment',
	data:{
		UserCommentItems:userComments
	},
	methods: {
		bookDetail(bookID){
			window.location.href = "../html/bookDetail.html?bookID="+bookID;
		},
	}
});