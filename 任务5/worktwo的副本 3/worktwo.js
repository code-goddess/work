    function calc() {
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        if (!num1.trim() || !num2.trim()) {
            alert("输入框不能为空");
            return;
        } else if (isNaN(num1) || isNaN(num2)) {
            alert("请输入正确数字，只能为数字");
            return;
        }
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var operator = document.getElementById("ope").value;
        var sum = calculate(num1, num2, operator);
        var result = document.getElementById("result");
        result.innerText = "=" + sum;
    }
    //加、减、乘、除运算的函数
    function calculate(n1, n2, oper) {
        switch (oper) {
            case "plus":
                return parseFloat((n1 + n2).toFixed(8));
            case "minus":
                return parseFloat((n1 - n2).toFixed(8));
            case "multiply":
                return parseFloat((n1 * n2).toFixed(8));
            case "divide":
                if (n2 == 0) {
                    alert("除数不能为0");
                    return "NaN";
                }
                return parseFloat((n1 / n2).toFixed(8));
            default:
                return "未知操作符";
        }
    }