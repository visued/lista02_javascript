function ex01() {
    var n1 = Number(document.getElementById("ex01_n1").value);
    var n2 = Number(document.getElementById("ex01_n2").value);
    var n3 = Number(document.getElementById("ex01_n3").value);
    var n4 = Number(document.getElementById("ex01_n4").value);

    if ((n1 + n2 + n3 + n4) / 4 >= 7) {
        document.getElementById("ex01_result").innerHTML = "Aprovado";
        document.getElementById("ex01_result").style.color = "green";
    } else {
        document.getElementById("ex01_result").innerHTML = "Reprovado";
        document.getElementById("ex01_result").style.color = "red";
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