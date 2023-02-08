var hemacios = document.querySelector('.hemacios');/*Definindo a variável do personagem*/
var inimigo = document.querySelector('.inimigo');/*Definindo a variável da falciforme*/
var frase = document.querySelector('h2');
var distancia = 0;
var distanciafinal = document.querySelector('#scorefinal')
var distanciatual = document.querySelector('.textinfo')
var restante = document.querySelector(".textinfo2")


function pulo(){
    hemacios.classList.add('pulo');/*adiciona a classe 'pulo' que possui a animação*/
    setTimeout( () => {
        hemacios.classList.remove('pulo');/*remove a classe 'pulo' após o tempo definido para que possa ser adicionada novamente*/
    } , 500)
        if(distancia <= 62){
            distancia++;
            distanciatual.innerHTML = 'Distancia atual: ' + '' + distancia;
            let restanteN = parseInt(62 - distancia);
            restante.innerHTML = 'Restam:' + '' + restanteN;
        } else {
            distanciatual.style.display = 'none';
            restante.style.display = 'none';
        }
}



var loop = setInterval( () => {
    var inimigoPosition = inimigo.offsetLeft; /*aqui utilizamos o offsetleft da var 'inimigo' para definir como a posição em que a falciforme está no eixo X*/
    var hemaciosPosition = +window.getComputedStyle(hemacios).bottom.replace('px', '');
    /*Neste trecho foi utilizado o método getComputedStyle, chamando o bottom da variável hemacios, para definir a altura do pulo e determinar se está acima ou não da falciforme, o replace foi utilizado para tirar a definição em pixels para que o if pudesse ler. enquanto isso, foi inserido o + na frente da declaração para converter de string para number*/

    if(inimigoPosition <= 145 && inimigoPosition > 0 && hemaciosPosition < 140){
    /*    inimigo.style.animation = 'none';
        inimigo.style.left = `${inimigoPosition}px`;
        */
        /*Aqui definimos que as animações devem parar quando o hemacios encostar na falciforme coagulada */

        hemacios.style.animation = 'none';
        hemacios.style.bottom = `${hemaciosPosition}px`;
        hemacios.src = "./spritehemacios/hemaciosdeath.png";
        
        inimigo.style.display = 'none';
        frase.innerHTML = 'voce perdeu!';
        frase.style.display = 'flex';
        distanciafinal.style.display = 'flex';

        distanciafinal.innerHTML = 'Distancia  percorrida:' + '' +  '' + distancia;

        distanciatual.style.display = 'none'
        restante.style.display = 'none';
        distancia = -1000000;
        
    } else if(distancia >= 62){
        hemacios.style.animation = 'none';
        hemacios.style.bottom = '35px';
        hemacios.style.width = '88px';
        hemacios.src = "./spritehemacios/win.png";

        inimigo.style.display = 'none';
        frase.innerHTML = 'Parabens, voce chegou ao destino de hemacios!!!'
        frase.style.display = 'flex';
        frase.style.fontSize = '3rem';

    }
    /*Este if confere se o Hemacios não está encostando no cano. a condição é o cano chegar na posição horizontal do hemacios e ele estar em uma altura que possa ser tocado, caso esteja tocando as animações irão parar e a tela de fim de jogo aparecerá*/

    /*Enquanto isso, o else if serve para a tela de vitória, que aparece caso o usuário alcance os 100 centimetros*/

    }, 10)
    


document.addEventListener('keydown', pulo);/*Chamando evento toda vez que a tecla for pressionada*/