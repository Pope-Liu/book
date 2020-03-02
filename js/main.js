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

function next_selected(){
	let next = document.getElementById("next");
	next.src = "../static/next_selected.png";
}

function next_unselected(){
	let next = document.getElementById("next");
	next.src = "../static/next.png";
}

//当轮播图切换时调用该事件
$('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {

	//输出当前图片索引
	console.log(event.from)
});