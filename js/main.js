//轮播图图片
var carouselImages = [
	{
		url: "../static/book-2391006_1920.jpg",
		labels: ["图片一", "测试", "图片"],
		description: "This is the first book."
	},
	{
		url: "../static/book-3692762_1920.jpg",
		labels: ["图片二", "测试", "图片"],
		description: "This is the second book."
	},
	{
		url: "../static/book-2435578_1920.jpg",
		labels: ["图片三", "测试", "图片"],
		description: "This is the third book."
	}
];
//获取轮播图图片

//设置html轮播图
{
	let carouselInner = document.getElementById("carouselInner");
	let carouselInnerSrc = "";
	for (let i = 0; i < carouselImages.length; i++) {
		if (i === 0) {
			carouselInnerSrc +=
				"<div class = 'carousel-item active'>" +
				"<img src='" + carouselImages[i].url + "' class = 'img-fluid mw-100 h-auto' alt='book image'>" +
				"</div>"
		} else {
			carouselInnerSrc +=
				"<div class = 'carousel-item'>" +
				"<img src='" + carouselImages[i].url + "' class = 'img-fluid mw-100 h-auto' alt='book image'>" +
				"</div>"
		}
	}
	carouselInner.innerHTML = carouselInnerSrc;
}

//设置轮播图中的书籍信息部分
{
	//设置书籍图片
	let bookImage = document.getElementById("bookImage");
	bookImage.src = carouselImages[0].url;
	//设置书籍标签
	let bookLabels = document.getElementById("bookLabels");
	let labels = "";
	for (let i = 0; i < carouselImages[0].labels.length; i++) {
		labels += "<p class='badge badge-secondary mx-2 my-1'>" + carouselImages[0].labels[i] + "</p>";
	}
	bookLabels.innerHTML = labels;
	//设置描述
	let bookDescription = document.getElementById("bookDescription");
	bookDescription.innerText = carouselImages[0].description;
}

//当轮播图切换时调用该事件
$('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
	//设置书籍图片
	let bookImage = document.getElementById("bookImage");
	bookImage.src = carouselImages[event.to].url;
	//设置书籍标签
	let bookLabels = document.getElementById("bookLabels");
	let labels = "";
	for (let i = 0; i < carouselImages[event.to].labels.length; i++) {
		labels += "<p class='badge badge-secondary mx-2 my-1'>" + carouselImages[event.to].labels[i] + "</p>";
	}
	bookLabels.innerHTML = labels;
	//设置描述
	let bookDescription = document.getElementById("bookDescription");
	bookDescription.innerText = carouselImages[event.to].description;
});


function previous() {

}

function previous_selected() {
	let previous = document.getElementById("previous");
	previous.src = "../static/previous_selected.png";
}

function previous_unselected() {
	let previous = document.getElementById("previous");
	previous.src = "../static/previous.png";
}

function next() {

}

function next_selected() {
	let next = document.getElementById("next");
	next.src = "../static/next_selected.png";
}

function next_unselected() {
	let next = document.getElementById("next");
	next.src = "../static/next.png";
}

