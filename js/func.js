    function ex01() {
        var n1 = Number(document.getElementById("ex01_n1").value);
        var n2 = Number(document.getElementById("ex01_n2").value);
        var n3 = Number(document.getElementById("ex01_n3").value);
        var n4 = Number(document.getElementById("ex01_n4").value);

        if ((n1 || n2 || n3 || n3) < 0) {
            document.getElementById("ex01_result").innerHTML = "Nota negativa!";
            document.getElementById("ex01_result").style.color = "blue";
        }
        else if ((((n1 + n2 + n3 + n4) / 4 >= 7) && (n1 + n2 + n3 + n4) / 4 <= 10)) {
            document.getElementById("ex01_result").innerHTML = "Aprovado";
            document.getElementById("ex01_result").style.color = "green";
        } else if ((((n1 + n2 + n3 + n4) / 4 >= 0) && (n1 + n2 + n3 + n4) / 4 <= 7)) {
            document.getElementById("ex01_result").innerHTML = "Reprovado";
            document.getElementById("ex01_result").style.color = "red";
        } else {
            document.getElementById("ex01_result").innerHTML = "Dados inválidos";
            document.getElementById("ex01_result").style.color = "orange";
        }
    }

    function ex02() {
        var n1 = Number(document.getElementById("ex01_n1").value);
        var n2 = Number(document.getElementById("ex02_n2").value);

        if ((n1 + n2) / 2 >= 7) {
            document.getElementById("n3").innerHTML = "Aprovado";
        } else if (((n1 + n2) / 2 >= 3) && ((n1 + n2) / 2 <= 7)) {
            document.getElementById("ex02_result").innerHTML = "Exame";
        } else {
            document.getElementById("ex02_result").innerHTML = "Reprovado";
        }
    }