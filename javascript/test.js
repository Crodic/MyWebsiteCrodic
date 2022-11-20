function kiemTra(a,b){
    if(a>b && a>5){
        return true
    }else{
        return false
    }
}
function cong(){
    var a=10
    var b=5
    if(kiemTra(a,b)){ //true
        return a+b
    }else{ //false
        return false
    }
}
function kiemTraLan2(){
    if(cong()){
        var kq=cong()
        console.log(kq)
    }else{
        console.log("Lỗi")
    }
}

// kiemTraLan2()


function test(){
    var my= '';
    for(var i of arguments){
        my = my + `${i}-`
    }
    var my1 = my.split('-')
    console.log(my1)
}

test("1","2",3,"okay","Crodic",8)