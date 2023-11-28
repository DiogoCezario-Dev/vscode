function abrirMenu(){
    var localNav = document.getElementById("localNav")

    localNav.innerHTML = `
    <div id="container_geral" style="height: 100vh; background-color: #034159; box-shadow: 
    0px 0px 15px rgba(0, 0, 0, 0.459);">
    <div id="container_imgMenu">
        <img onclick="fecharMenu()" style="cursor: pointer;" width="50px" src="../assents/images/menu_br.png" alt="">
    </div>
    <div id="container_nav" >
        <nav><br>
        <abbr title="Inicio"><a href="index.html"><img src="../assents/images/icon_menu.png" alt=""></a></abbr> <br>

        <abbr title="Perfil"><a href="../perfil/perfil.html"><img class="inverso" src="../assents/images/icon_conta.png" alt=""></a></abbr> <br>

        <abbr title="Configurações"><a href="../config/config.html"><img class="inverso" src="../assents/images/icon_config.png" alt=""></a></abbr> <br>

        <abbr title="Suporte"><a href="../suporte/suporte.html"><img class="inverso" src="../assents/images/icon_suport.png" alt=""></a></abbr> <br>

        </nav>

    </div>
</div>
    `
}

function fecharMenu(){
    var localNav = document.getElementById("localNav")

    localNav.innerHTML = `
    <div id="container_geral" style="height: 15px; background-color: #0000;">
    <div id="container_imgMenu">
        <img onclick="abrirMenu()" style="cursor: pointer;" width="50px" src="../assents/images/menu_br.png" alt="">
    </div>
</div>
    `
}