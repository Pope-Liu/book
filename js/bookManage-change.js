let bookID = document.URL.split("?")[1].split("=")[1];

let bookInfo = new Vue({
	el: '#book',
	data: {
		image_Path:"",
		name_book:"",
		author:"",
		category:[],
		price:0,
		good_Price:0,
		comments: [],
		content:"",
		bookNum:0,
		saleNum:0,
		onSaleName:null,
		publishName:"",
		publishAddress:"",
		language:"",
		wholeMoney:0
	},
	created(){
		$.ajax({
			url: "http://localhost:8080/book/selectBookById",
			type: "POST",
			data: {
				bookId: bookID
			},
			success: function (res) {
				console.log(res.data)
				let that = bookInfo;
				that.image_Path = res.data[0].image_Path;
				that.name_book = res.data[0].name_book;
				that.author = res.data[0].author;
				that.price = res.data[0].price;
				that.good_Price = res.data[0].good_Price;
				that.category = res.data[1];
				that.content = res.data[0].content;
				that.bookNum = res.data[0].bookNum;
				that.saleNum = res.data[0].saleNum;
				that.onSaleTime = res.data[0].onSaleTime;
				that.publishName = res.data[0].publish_Name;
				that.publishAddress = res.data[0].publish_address;
				that.comments = res.data[2];
			},
			error: function (res) {
				alert("网络请求出错！")
			}
		})
	},
	methods: {
		sub(){
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
				url:"http://localhost:8080/manager/changeBookInfo",
				type:"POST",
				processData: false,
				contentType:false,
				data: formData,
				success:function (res) {
					if(res === 1){
						alert("修改成功！")
					}else {
						alert("修改失败")
					}
				},
				error:function (res) {
					alert("网络请求失败！")
				}
			})
		},
		del(){
			let that = this;
			$.ajax({
				url:"http://localhost:8080/manager/deleteBook",
				type:"POST",
				data:{
					bookId:that.bookID
				},
				success:function (res) {
					if(res === 1){
						alert("删除成功！")
					}else {
						alert("删除失败")
					}
				},
				error:function (res) {
					alert("网络请求失败！")
				}
			})
		}
	}
})

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