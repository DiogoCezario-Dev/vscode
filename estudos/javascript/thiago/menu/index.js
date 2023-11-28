function abrirMenu(){
    var localNav = document.getElementById("container_nav")
    localNav.innerHTML = `
    <div id="container_imgBar">
    <img onclick="fechaMenu();" style="cursor: pointer;" width="40px" src="https://cdn-icons-png.flaticon.com/512/2311/2311552.png" alt="">
</div>

<div>
     <nav id="nav">
        <a href="#">Item Menu</a> 
        <a href="#">Item Menu</a>
        <a href="#">Item Menu</a> 
        <a href="#">Item Menu</a> 
        <a href="#">Item Menu</a> 
        <a href="#">Item Menu</a> 
     </nav>
</div>
    `
}

function fechaMenu(){
    var localNav = document.getElementById("container_nav")
    localNav.innerHTML = `
    <div id="container_imgBar">
    <img onclick="abrirMenu();" style="cursor: pointer;" width="40px" src="https://cdn-icons-png.flaticon.com/512/2311/2311552.png" alt="">
</div>

<div>
     <nav id="nav">
 
     </nav>
</div>
    `
}