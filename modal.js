function AbrirModal(){
     const modalcinema = document.getElementById('janela-modal-ProjCinema')
     modalcinema.classList.add('abrir')

     modalcinema.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal-ProjCinema'){
            modalcinema.classList.remove('abrir')
        }
     })
}

function AbrirModal2(){
     const modalflutter = document.getElementById('janela-modal-ProjFlutter')
     modalflutter.classList.add('abrir')

     modalflutter.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal-ProjFlutter'){
            modalflutter.classList.remove('abrir')
        }
     })
}