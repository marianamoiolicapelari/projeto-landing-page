const btnOpenModal = document.getElementById('btn-navbar')



const openModal = () => {
    document.getElementById('modal')
    .classList.add('.active')


    console.log('retornou')
}




btnOpenModal.addEventListener('click', openModal)

