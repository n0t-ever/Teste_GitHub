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

function imprimirAzul4(){
    for (var i=1; i<=4; i++){
        console.log('Azul');
    }
}
//imprimirAzul4();

function imprimirAzul (x){
    for (let i = 1; i<= x; i++){
        console.log("Azul");
    }
}
// imprimirAzul(3)/
var pares = 0;
function somaDosPares(x){
     for (let i = 1; i<=x; i++){
         if (i%2 == 0){
             pares = pares + i;
         }
     }
     return pares;
 }
// console.log(somaDosPares(10));
 
function mover (n1,n2){
    i = n1.pop();
    n2.push(i);
}
var umArray = [1, 2, 3];
var outroArray = [4, 5];
var i = 0;

//console.log(umArray);
//console.log(outroArray);
mover(umArray,outroArray);
var i = [1, 6, 7, 6];
function contem(array,numero){
    let teste = array.indexOf(numero)
    if (teste > 0){
        return true;
    }else{
        return false
    }
}
//console.log(contem(i,9));
var postoChegada = ["nada","ouro","prata","bronze","nada","nada"]
function medalhaDeAcordoComPosto(numero){
    if (numero < 1 || numero > 5 ){
        console.log('nada');
    }else{
        console.log(postoChegada[numero]);
    }
}
//medalhaDeAcordoComPosto(1)

function lucroTotal(umPeriodo) {
    var soma= 0;
    var mes = 0;
    for (var i=0; i<umPeriodo.length; i++) {
      mes = umPeriodo[i];
      soma= soma+ mes;
    }
    return soma;
  }
//console.log(lucroTotal([]));
//console.log(lucroTotal([100]));
//console.log(lucroTotal([100, 2]));
//console.log(lucroTotal([2, 10, -20]))
//console.log(lucroTotal([2, 10, -20, 0, 0, 10, 10]));

function quantidadeDeMesesComLucro(umPeriodo) {
    let quantidade = 0;
    for (let mes=0; mes< umPeriodo.length; mes++) {
        console.log(umPeriodo[mes]);
          
        //if (umPeriodo[mes] > 0){
          //  quantidade += 1;                  
        //}
return quantidade;
  }
}
//quantidadeDeMesesComLucro([0, 3, -1, 5]);
//uantidadeDeMesesComLucro([]) ;
//quantidadeDeMesesComLucro([10, -10, 2, 100]) ;*/
//var cartaBaralho = ['1','2','3','4','5','6','7','10','11','12'];
var quantidade = 1
function produto (n1){
    quantidade = 1
    for(let i = 0; i<n1.length;i++){
        quantidade = n1[i]* quantidade;
        
    }
return quantidade
}
//console.log(produto([1, 4, 7]));

function fatorial (f1){
    let numeroFatorial = 1;
    if (f1 > 0){
        for (let i = 1; i <= f1; i++){
            numeroFatorial *= i;
            }
    }
return numeroFatorial;
}
//console.log(fatorial(8));

function maisMenos (n1){
    let aux = 0;
    let nZero = 0;
    let nNegative = 0;
    let nPositive = 0;
    let contador = 0 ;
    var nFran = [];
    for (let i = 0; i < n1.length;i++){
         aux = n1[i];
         contador++
        if (aux > 0){
            nPositive++
        }else if (aux == 0){
            nZero++
        }else{
            nNegative++
        }
    }
    nFran.push(nPositive/contador);
    nFran.push(nZero/contador);
    nFran.push(nNegative/contador);
return nFran;
}

//console.log(maisMenos([1, 2, 0, -1]));
function escada (n1){
    let theMission = [];
    let repEscada = "#"
    let espacoDevido = " "
    for (let i = 1; i<=n1; i++){        
        let degrau = repEscada.repeat(i);
        let espacoReservado = espacoDevido.repeat(n1 -i)
        theMission.push(espacoReservado + degrau);
        }
    return theMission;
}
//console.log(escada(5))

function alturaArvoreUtopica (n1){
    let cicloArvorePlantada = 1;
    let cicloN = 0;
    for (i = 1; i <= n1; i++){
        if (i%2 == 0){
            cicloArvorePlantada = cicloArvorePlantada + 1            
        }else{
            cicloArvorePlantada = cicloArvorePlantada * 2;
        }
    }
    return cicloArvorePlantada;
}
//console.log(alturaArvoreUtopica(0));
var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerça = [0, 10, 15, -4]
var alunosDaQuarta = [2, 0, -3, -20]

function acontece (diaSemana,minimoEstudades){
    let contador = 0;
    let aulaMarcada = true;
    for (let i = 0; i< diaSemana.length;i++){
        if (diaSemana[i]<=0) {
            contador ++ //= contador + 1
        }
    }
    if (contador >= minimoEstudades){
        return aulaMarcada = true;
    }else{
        return aulaMarcada = false
    }
}
console.log(acontece(alunosDaSegunda, 2));

function aberturas(diaSemana,minimoEstudades){
    let aerturaArray = [];
    let aux = false
    for (let i = 0; i<diaSemana.length;i++){
        aux = acontece(diaSemana[i],minimoEstudades);
        aerturaArray.push(aux);
    }
    return aerturaArray;
}

console.log(aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 3));
