// $(window).on('load', function () {
// 	$('#type').selectpicker({
// 		'selectedText': 'cat'
// 	});
// });
// {
// 	bookName:document.getElementById("name").value,
// 		author:document.getElementById("author").value,
// 	language:1,
// 	category:document.getElementById("type").value,
// 	commend:0,
// 	content:"",
// 	price:20,
// 	onSaleTime: new Date(),
// 	goodPrice:"",
// 	publishName:"",
// 	publishAddress:"",
// 	bookNum:100,
// 	imagePath:document.getElementById("image").files[0],
// 	saleNum:0
// }


function submit() {
	let formData = new FormData();
	if($.trim(document.getElementById("name").value) === ""){
		alert("书名不能为空！")
		return false;
	}else {
		formData.append("bookName", document.getElementById("name").value);
	}
	if($.trim(document.getElementById("author").value) === ""){
		alert("作者不能为空！")
		return false;
	}else {
		formData.append("author", document.getElementById("author").value);
	}
	if(!document.getElementById("Chinese").checked&&!document.getElementById("English").checked){
		alert("请选择语言！")
		return false;
	}else {
		if(document.getElementById("Chinese").checked){
			formData.append("language", 0);
		}else {
			formData.append("language", 1);
		}
	}

	let val = "", staffs = [];
	for (var i = 0; i < $("li.selected").length; i++) {

		val = $("li.selected").eq(i).find(".text").text();
		if (val != '') {
			staffs.push(val);
		}
	}
	if(staffs.length === 0){
		alert("请选择种类！")
		return false;
	}else {
		formData.append("category", translate(staffs));
	}

	formData.append("commend", 0);
	formData.append("content", document.getElementById("description").value);

	if($.trim(document.getElementById("price").value) === ""){
		alert("请填写价格！")
		return false;
	}else {
		formData.append("price", document.getElementById("price").value);
	}

	if($.trim(document.getElementById("goodPrice").value) === ""){
		alert("请填写折扣价！")
		return false;
	}else {
		formData.append("goodPrice", document.getElementById("goodPrice").value);
	}

	if($.trim(document.getElementById("publishName").value) === ""){
		alert("请填写出版社！")
		return false;
	}else {
		formData.append("publishName", document.getElementById("publishName").value);
	}

	if($.trim(document.getElementById("publishAddress").value) === ""){
		alert("请填写出版社地址！")
		return false;
	}else {
		formData.append("publishAddress",  document.getElementById("publishName").value);
	}

	if($.trim(document.getElementById("bookNum").value) === ""){
		alert("请填写数量！")
		return false;
	}else {
		formData.append("bookNum", document.getElementById("bookNum").value);
	}

	if($.trim(document.getElementById("saleNum").value) === ""){
		alert("请填写折扣数量！")
		return false;
	}else {
		formData.append("saleNum", document.getElementById("saleNum").value);
	}

	if(document.getElementById("image").files.length === 0){
		alert("请选择封面！")
		return false;
	}else {
		formData.append("imagePath", document.getElementById("image").files[0]);
	}


	if(document.getElementById("onSaleTime").value === ""){
		alert("请填写折扣日期！")
		return false;
	}else {
		formData.append("onSaleTime",translateToDate(document.getElementById("onSaleTime").value));
	}

	console.log(new Date(1111,22,33))


	$.ajax({
		url:"http://localhost:8080/manager/addBook",
		type:"POST",
		processData: false,
		contentType:false,
		data: formData,
		success:function (res) {
			if(res === 1){
				alert("上传成功！")
			}else {
				alert("上传失败")
			}
		},
		error:function (res) {
			alert("网络请求失败！")
		}
	})
}


function translate(arr) {
	let str = ""
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case "计算机类":
				str += "1";
				break;
			case "人文类":
				str += "2";
				break;
			case "工程类":
				str += "3";
				break;
			case "哲学类":
				str += "4";
				break;
		}
		if (i !== arr.length - 1) {
			str += "#";
		}
	}
	return str;
}

function translateToDate(str) {
	let s = str.match(/\d+/g);
	return new Date(s[0],parseInt(s[1]) - 1,s[2])
}