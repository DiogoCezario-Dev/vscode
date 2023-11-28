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
            <a href="../index/index.html"><img src="../assents/images/icon_menu.png" alt=""></a> <br>
            <a href="../perfil/perfil.html"><img class="inverso" src="../assents/images/icon_conta.png" alt=""></a> <br>
            <a href="config.html"><img class="inverso" src="../assents/images/icon_config.png" alt=""></a> <br>
            <a href="../suporte/suporte.html"><img class="inverso" src="../assents/images/icon_suport.png" alt=""></a> <br>
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