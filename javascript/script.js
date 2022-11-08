function checkEmail(){
    var email = document.getElementById("email").value
    if (email !='' && email !=null){
        confirm("Email: "+email +" đã đăng ký nhận thông báo thành công")
    }else{
        alert("Email không hợp lệ vui lòng thử lại.")
    }
}
