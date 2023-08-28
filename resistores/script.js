function calcular(){

    var primeiroanel = document.querySelectorAll("input[name='1anel']")
    var res = document.getElementById('res')
    var anel1 = ''
    switch (primeiroanel[].value){
        case "1anel-marrom":
            anel1 = "1";
        break;
        case "1anel-vermelho":
            anel1 = "2";
        break;
        case "1anel-laranja":
            anel1 = "3";
        break;
        case "1anel-amarelo":
            anel1 = "4";
        break;
        case "1anel-verde":
            anel1 = "5";
        break;
        case "1anel-azul":
            anel1 = "6";
        break;
        case "1anel-violeta":
            anel1 = "7";
        break;
        case "1anel-cinza":
            anel1 = "8";
        break;
        case "1anel-branco":
            anel1 = "9";
        break;
    }
    res.innerHTML = anel1;
}