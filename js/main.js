// alert("meu primeiro js")
/*var lista = ["maça","pera","laranja"];
lista.push("uva")

//console.log(lista[0]);
console.log(lista)
*/
function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>"
    //alert("Obrigado por clicar")
}

function redirecionamento (){
    window.open("https://www.bbc.com/portuguese") //Abre em nova aba
   // window.location.href = "https://www.bbc.com/portuguese" // Abre na mesma pagina
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
elemento.innerHTML = "Passe o mouse aqui"
}