let test = [
	{
		id: 1,
		url: "../static/book-2391006_1920.jpg",
		name: "金银岛",
		author: "Pope",
		labels: ["标签一", "标签二", "标签三"],
		discount: 1,
		price: 100,
		number: 0,
	},
	{
		id: 2,
		url: "../static/book-2391006_1920.jpg",
		name: "金银岛",
		author: "Pope",
		labels: ["标签一", "标签二", "标签三"],
		discount: 0.8,
		price: 100,
		number: 0,
	}
]

// let URL = document.URL;
// let orders = URL.split("?")[1].split("=")[1];
// console.log(JSON.parse(unescape(orders)))

let books = new Vue({
	el: '#books',
	data: {
		books: test,
		wholeMoney: 0
	},
	created(){
		let that = this;
		that.calculateMoney();
	},
	methods: {
		calculateMoney() {
			let that = this;
			that.wholeMoney = 0;
			for (let i = 0; i < that.books.length; i++) {
				that.wholeMoney += that.books[i].price * that.books[i].discount * that.books[i].number;
			}
		},
		changeNumber(event, index) {
			let that = this;
			that.books[index].number = event.target.value;
			that.calculateMoney()
		},
		bookDetail(bookID){
			window.location.href = "../html/bookDetail.html?bookID="+bookID;
		},
		deleteBook(index) {
			let that = this;
			that.books.splice(index, 1);
			that.calculateMoney()
		}
	}
})