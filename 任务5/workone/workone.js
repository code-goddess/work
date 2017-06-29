    function sub() {
        var score = parseInt(document.getElementById("score").value);
        if (score || score == 0) {
            if (score >= 90 && score <= 100) {
                alert("一等生");
            } else if (score >= 80 && score < 90) {
                alert("二等生");
            } else if (score >= 70 && score < 80) {
                alert("三等生");
            } else if (score >= 60 && score < 70) {
                alert("四等生");
            } else if (score >= 50 && score < 60) {
                alert("五等生");
            } else if (score >= 40 && score < 50) {
                alert("六等生");
            } else if (score >= 30 && score < 40) {
                alert("七等生");
            } else if (score >= 20 && score < 30) {
                alert("八等生");
            } else if (score >= 10 && score < 20) {
                alert("九等生");
            } else if (score >= 0 && score < 10) {
                alert("十等生");
            }else if (score>100) {
            	alert("请输入正确的分数（百分制）");
            }else if (score<0) {
                alert("0是最低分");
            }
        } else {
            alert("请输入数字");
        }
    }