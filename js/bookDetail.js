let bookID = document.URL.split("?")[1].split("=")[1];

//通过bookID获取数据



let bookInfo = new Vue({
	el: '#bookInfo',
	data: {
		image_Path:"../static/book-2391006_1920.jpg",
		name_book:"测试书籍",
		author:"测试作者",
		category:["计算机类","人文类"],
		price:100,
		good_Price:20,
		comments: [],
		content:"测试书籍简介",
		publishName:"测试出版社",
		publishAddress:"测试出版社地址",
		language:"中文",
		wholeMoney:0
	},
	created(){
		// $.ajax({
		// 	url: "http://localhost:8080/book/selectBookById",
		// 	type: "POST",
		// 	data: {
		// 		bookId: bookID
		// 	},
		// 	success: function (res) {
		// 		console.log(res.data)
		// 		let that = bookInfo;
		// 		that.image_Path = res.data[0].image_Path;
		// 		that.name_book = res.data[0].name_book;
		// 		that.author = res.data[0].author;
		// 		that.price = res.data[0].price;
		// 		that.good_Price = res.data[0].good_Price;
		// 		that.category = res.data[1];
		// 		that.publishName = res.data[0].publish_Name;
		// 		that.publishAddress = res.data[0].publish_address;
		// 		that.comments = res.data[2];
		// 	},
		// 	error: function (res) {
		// 		alert("网络请求出错！")
		// 	}
		// })
	},
	methods: {
		changeNumber(event) {
			let that = this;
			let number = event.currentTarget.value;
			if (number === null || number === '') {
				number = 0;
			}
			that.wholeMoney = number* that.good_Price;
		},
		buyBooks() {
			let orders = [];
			let order = {
				bookID: bookID,
				number: document.getElementById("bookNumber").value
			};
			orders.push(order);
			console.log(orders)
			window.location.href = "../html/pay.html?orders=" + escape(JSON.stringify(order));
		}
	}
})