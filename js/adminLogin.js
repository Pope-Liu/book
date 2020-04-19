// 初始化提示框
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

$.ajax({
	url:"http://localhost:8080/manage/managerLogin",
	type:"POST",
	data:{
		logName:document.getElementById("username"),
		password:document.getElementById("password")
	},
	success:function (res) {
		if(res === 1){
			window.location.href = "bookManage-add.html"
		}else {
			alert("登录失败！")
		}
	},
	error:function (res) {
		alert("网络请求失败！")
	}
})