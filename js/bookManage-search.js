let result = new Vue({
	el:"#result",
	data:{
		result:[]
	},
	created(){

	},
	methods:{
		search(event){
			$.ajax({
				url:"http://localhost:8080/book/selectBookByName",
				type:"POST",
				data:{
					bookName:document.getElementById("bookName").value
				},
				success:function (res) {
					let that = this;
					that.result = res.data;
				}
			})
		}
	}
})