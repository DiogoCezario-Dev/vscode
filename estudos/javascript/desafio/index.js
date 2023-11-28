function logar(){
    var usuarios = []
    usuarios [userthiago] = "thiago"
    usuarios [userdiogo] = "diogo"

    var senhas = []
    senhas [senhathiago] = "02043110"
    senhas [senhadiogo] = "1234"

    var entradauser = document.getElementById("user").value
    var entradasenha = document.getElementById("senha").value

    if(entradauser == usuarios[userthiago] && entradasenha == senhas[senhathiago]){
        document.write("Bem vindo Thiago")
    }else{
        document.write("Usuario ou senha não encontradas")
    }
}