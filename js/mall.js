let test = [
	{
		id: 1,
		url: "../static/book-2391006_1920.jpg",
		name: "Test Book1",
		author: "Pope",
		labels: ["标签1", "标签2", "标签3"],
		discount: 0.9,
		price: 20,
		number: 0,
	},
	{
		id: 2,
		url: "../static/book-2391006_1920.jpg",
		name: "Test Book2",
		author: "Pope",
		labels: ["标签1", "标签2", "标签3"],
		discount: 0.7,
		price: 30,
		number: 0,
	},
	{
		id: 3,
		url: "../static/book-2391006_1920.jpg",
		name: "Test Book3",
		author: "Pope",
		labels: ["标签1", "标签2", "标签3"],
		discount: 0.5,
		price: 40,
		number: 0,
	}
]

let books = new Vue({
	el: '#books',
	data: {
        books: test,
    },
	methods: {
		bookDetail(bookID){
			window.location.href = "../html/bookDetail.html?bookID="+bookID;
		},
	}
})