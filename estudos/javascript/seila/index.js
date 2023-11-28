function analisarResposta(){
    var resposta = document.getElementById("inResposta").value
    var localMensage = document.getElementById("localMsg")

    if(resposta != "sim"){
        localMensage.innerHTML = `<p>Houve um erro, tente novamente</P>`
    }else{
        localMensage.innerHTML = `<p>&lt3</p>`
    }
}