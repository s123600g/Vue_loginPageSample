var data_list = {
  email: "test@login.com",
  pwd: "123",
};

// 監聽確認DOM都載入完成所有物件，在進行Vue元件配置
document.addEventListener("DOMContentLoaded", function (event) {
  var login_form = new Vue({
    el: "#MainArea",
    data: data_list,
    methods: {
      sendLogin: function (event) {
        alert(`email: ${this.email} , pwd: ${this.pwd}`);
      },
    },
  });
});
