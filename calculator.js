/**
 * Created by YANG on 15/9/21.
 */

var num1 = '';//第一位数值
var num2 = '';//第二位数值
var mark = '';//符号
var result = 0;//结果
var state = 0;//计算状态标志
var defeat = 0;//正负判断状态标志
//reset清空函数
function getreset(){
    num1 = '';
    num2 = '';
    mark = '';
    result = 0;
    state = 0;
    document.getElementById("result").value = 0;
}

//获取当前按钮数值的函数getnum(obj)
function getnum(obj){
    var num = obj.value;

    if(state==0){
        num1 += num;
        //判断正负取值
        if(defeat==1){
            document.getElementById("result").value = 0-num1.replace(/\b(0+)/gi,"");
            defeat = 0;
        }else{
            document.getElementById("result").value = num1.replace(/\b(0+)/gi,"");
        }
        if(num1==0) {
            document.getElementById("result").value = 0;
        }
    }else if(state==1){
        num2 += num;
        if(defeat==1){
            document.getElementById("result").value = 0-num2.replace(/\b(0+)/gi,"");
            defeat = 0;
        }else{
            document.getElementById("result").value = num2.replace(/\b(0+)/gi,"");
        }
        if(num2==0) {
            document.getElementById("result").value = 0;
        }
    }
}
//获取当前按钮符号的函数getmark(obj)
function getmark(obj){
    mark = obj.value;
    num1 = document.getElementById("result").value;
    state = 1;
}
//获取负数值
function getdefeat(obj){
    defeat = 1;
}
//计算结果并显示在div的函数
function getresult(obj){

    num2 = document.getElementById("result").value;
    switch (mark){
        case '+': result = parseFloat(num1) + parseFloat(num2);break;
        case "-": result = parseFloat(num1) - parseFloat(num2);break;
        case "*": result = parseFloat(num1) * parseFloat(num2);break;
        case "/": if(num2==0){
                      result = NaN;
                  }else {
                      result = parseFloat(num1) / parseFloat(num2);
                  }break;
        case "√": result = Math.sqrt(parseFloat(num2));break;
        case "sin": result = Math.sin(parseFloat(num2));break;
        case "cos": result = Math.cos(parseFloat(num2));break;
        case "tan": result = Math.tan(parseFloat(num2));break;
        case " ": result = 0;break
    }
    //若是小数取三位有效数字
    if(parseInt(result)!=result){
        result = result.toFixed(3);
    }
    //若数位大于9，转为科学计数，保留三位有效数字
    if(result.toString().length>9){
        document.getElementById("result").value =result.toExponential(3);
        console.info(result.toString().length);
    }else{
        document.getElementById("result").value =result;
    }
    num1 = '';
    num2 = '';
    mark = '';
    state = 0;
}