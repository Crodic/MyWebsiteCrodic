// function kiemTra(a,b){
//     if(a>b && a>5){
//         return true
//     }else{
//         return false
//     }
// }
// function cong(){
//     var a=10
//     var b=5
//     if(kiemTra(a,b)){ //true
//         return a+b
//     }else{ //false
//         return false
//     }
// }
// function kiemTraLan2(){
//     if(cong()){
//         var kq=cong()
//         console.log(kq)
//     }else{
//         console.log("Lỗi")
//     }
// }

// // kiemTraLan2()


// function test(){
//     var my= '';
//     for(var i of arguments){
//         my = my + `${i}-`
//     }
//     var my1 = my.split('-')
//     console.log(my1)
// }

// test("1","2",3,"okay","Crodic",8)

function onLoad(){
    var loading= document.getElementById("loading") //Lấy ID của div chứa hiệu ứng load
    setTimeout(() =>{ //sử dụng hàm setTimeOut(lệnh thực hiện, timer)
        loading.style.display="none" // thực hiện thêm class display none trước khi load 5000 mls
    },5000)
    loading.style.display='flex' // trong thời gian 5000mls thì display flex
}
function searchProduct(){
    var searchItems= document.getElementById("search").value
    if(searchItems != 0){
        window.location.href="./loading.html"
    }
}