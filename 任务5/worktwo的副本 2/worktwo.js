    function calc() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var operator = document.getElementById("ope").value;
        var sum = calculate(num1, num2, operator);
        //两位及两位数以上时，不能以0开头
        var reg1 = /^(0|[1-9][0-9]d*)$/;
        var b = reg1.test(num1, num2);
        if (!b) {
            document.getElementById("result").innerText = "=" + sum;
        } else {
            alert("请输入正确数字，只能为整数，数字不能以0开头");
        }
    }
    //加、减、乘、除运算的函数
    function calculate(n1, n2, oper) {
        switch (oper) {
            case "plus":
                return (n1 + n2).toFixed(8);
            case "minus":
                return (n1 - n2).toFixed(8);
            case "multiply":
                return (n1 * n2).toFixed(8);
            case "divide":
                if (n2 == 0) {
                    alert("被除数不能为0");
                    return "'=' + 'NaN'"
                }
                return (n1 / n2).toFixed(8);
            default:
                return "未知操作符";
        }
    }