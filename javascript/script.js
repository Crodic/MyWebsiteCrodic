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
    var listCheck1 = document.getElementById("list-check-1").ariaChecked
    var listCheck2 = document.getElementById("list-check-2").ariaChecked
    var listCheck3 = document.getElementById("list-check-3").ariaChecked
    var order= document.getElementById("wish").value
    var priceNumber=document.getElementById("number").value

    if(name != '' && name != null){
        if(!isNaN(phone) && phone !='' && phone !=null){
            if(emailOrder !='' && emailOrder!=null){
                confirm("Tên Khách Hàng: "+name
                +" - Số điện thoại: "+phone
                +" - Email: "+emailOrder
                +" - Số lượng: "+priceNumber
                +" - Yêu cầu: "+order+" - Nhấn OK để xác nhận thông tin")
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