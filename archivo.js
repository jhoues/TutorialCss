let listaElementos = document.querySelectorAll('.list__button--click');

listaElementos.forEach(listaElemento =>{
    listaElemento.addEventListener('click',()=>{
        listaElemento.classList.toggle('flecha')
        let height=0;
        let menu =listaElemento.nextElementSibling
        if (menu.clientHeight=="0") {
            height=menu.scrollHeight;
            
        }
        menu.style.height= height+"px"
    })
})