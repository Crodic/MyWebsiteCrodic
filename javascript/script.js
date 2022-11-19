function checkEmail(){
    var email = document.getElementById("email").value
    if (email !='' && email !=null){
        confirm("Email: "+email +" đã đăng ký nhận thông báo thành công")
    }else{
        alert("Email không hợp lệ vui lòng thử lại.")
    }
}
function submitOrder(){
    var name = document.getElementById("name").value
    var phone = document.getElementById("phone").value
    var emailOrder = document.getElementById("email-order").value
    var listCheck1 = document.getElementById("list-check-1").value
    var listCheck2 = document.getElementById("list-check-2").value
    var listCheck3 = document.getElementById("list-check-3").value
    var order= document.getElementById("wish").value
    var priceNumber=document.getElementById("number").value

    if(name != '' && name != null){
        if(!isNaN(phone) && phone !='' && phone !=null){
            if(emailOrder !='' && emailOrder!=null){
                confirm("Tên Khách Hàng: "+name
                +" \n Số điện thoại: "+phone
                +" \n Email: "+emailOrder
                +" \n Số lượng: "+priceNumber
                +" \n Yêu cầu: "+order
                +" \n Nhấn OK để xác nhận thông tin")
            }else{
                alert("Email không hợp lệ vui lòng thử lại.")
            }
        }else{
            alert("Số điện thoại không hợp lệ")
        }
    }else{
        alert("Thông tin mua hàng không hợp lệ.")
    }
}
function sign() {
    var user = document.getElementById('user').value
    var accountName = document.getElementById('account-name').value
    var pass = document.getElementById('password').value
    var checkPass = document.getElementById('check-password').value
    var region = document.getElementById('region').value
    var sucess= document.getElementById('yes')
    var isSucess=sucess.checked;
    if(user.length == 0 || isNaN(user)==false){
        document.getElementById('form-info_user').innerHTML="Vui Lòng Nhập Họ Tên hợp lệ"
        document.getElementById('user').classList.add('error')
    }else if(user.length != '' && isNaN(user)==true){
        document.getElementById('user').classList.remove('error')
        document.getElementById('form-info_user').innerHTML=" "
    }

    if(accountName.length == 0 || accountName.length < 4){
        document.getElementById('form-info_account').innerHTML="Tên đăng nhập không hợp lệ"
        document.getElementById('account-name').classList.add('error')
    }else if(accountName.length !='' && accountName.length>4){
        document.getElementById('form-info_account').innerHTML=" "
        document.getElementById('account-name').classList.remove('error')
    }

    if(pass.length==0 || pass.length < 6 || pass !=checkPass){
        document.getElementById('form-info_pass').innerHTML="Mật khẩu phải trên 6 ký tự"
        document.getElementById('password').classList.add('error')
    }else if(pass.length!=null && pass.length>6){
        document.getElementById('form-info_pass').innerHTML=" "
        document.getElementById('password').classList.remove('error')
    }
    
    if(checkPass.length==0||checkPass!=pass){
        document.getElementById('form-info_checkpass').innerHTML="Mật khẩu không khớp với mật khẩu vừa nhập"
        document.getElementById('check-password').classList.add('error')
    }else if(checkPass.length!='' && checkPass==pass){
        document.getElementById('form-info_checkpass').innerHTML= " "
        document.getElementById('check-password').classList.remove('error')
    }
    if(region.length==0){
        document.getElementById('form-info_region').innerHTML="Bạn phải chọn khu vực sinh sống"
    }else if(region.length!=''){
        document.getElementById('form-info_region').innerHTML=" "
    }
    if(isSucess==false){
        document.getElementById('form-info_sucess').innerHTML="Bạn chưa đồng ý với <a href='#'>điều khoản</a> "
    }else if(isSucess){
        document.getElementById('form-info_sucess').innerHTML=" "
    }
}
function remove() {
    var user = document.getElementById('user').value
    var accountName = document.getElementById('account-name').value
    var pass = document.getElementById('password').value
    var checkPass = document.getElementById('check-password').value
    var region=document.getElementById('region').value
    var sucess= document.getElementById('yes')
    var isSucess=sucess.checked;
    if(user.length != '' && isNaN(user)){
        document.getElementById('user').classList.remove('error')
        document.getElementById('form-info_user').innerHTML=" "
    }
    if(accountName.length !='' && accountName.length > 4){
        document.getElementById('form-info_account').innerHTML=" "
        document.getElementById('account-name').classList.remove('error')
    }
    if(pass.length!=null && pass.length>6){
        document.getElementById('form-info_pass').innerHTML=" "
        document.getElementById('password').classList.remove('error')
    }
    if(checkPass.length!='' && checkPass==pass){
        document.getElementById('form-info_checkpass').innerHTML= " "
        document.getElementById('check-password').classList.remove('error')
    }
    if(region.length!=''){
        document.getElementById('form-info_region').innerHTML=" "
    }
    if(isSucess==true){
        document.getElementById('form-info_sucess').innerHTML=" "
    }
}