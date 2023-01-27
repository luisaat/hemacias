var mostra = false;
var clique = document.getElementById(curiosidadesclick);

function mostrarOuNao(){
  if(mostra = false){
    mostra = true;
  } else{
    mostra = false;
  }
}

function curiosidade(){
  if(mostra){
    document.getElementById(mostrarCuriosidade).style.width = "20vw";
    document.getElementById(mostrarCuriosidade).style.opacity = "1";
    document.getElementById(mostrarCuriosidade).style.height = "5vh"
  }
}

clique.onclick(mostrarOuNao(evento));