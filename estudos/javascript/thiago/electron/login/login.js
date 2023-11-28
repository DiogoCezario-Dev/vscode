function logar(){
    var user = document.getElementById("user")
    var senha = document.getElementById("senha")
    
    var user01 = {
        usuario: "Thiago",
        senha: "1234"
    }

    if (user == user01.usuario && senha == user01.senha){
        alert('Login feito com sucesso')
        window.location.href = '../index/index.html'
    }else{
        alert('Usuario ou senha incorretos')
    }
}