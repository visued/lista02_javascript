function change(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    
    if ( ((Number(n1)+Number(n2))/2) >= 7){
        document.getElementById("n3").innerHTML = "Aprovado";
        console.log(((Number(n1)+Number(n2))/2));
    }else if ((((Number(n1)+Number(n2))/2) >= 3) && ( ((Number(n1)+Number(n2))/2) <= 7)){
        document.getElementById("n3").innerHTML = "Exame";
        console.log(((Number(n1)+Number(n2))/2));
    }else{
        document.getElementById("n3").innerHTML = "Reprovado";
    }

}