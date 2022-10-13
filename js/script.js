const btnOpenModal = document.getElementById('btn-navbar')


const openModal = () => { document.getElementById('modal')
    .classList.add('active')


    console.log(modal)
}




    const closeModal = () => {
    //clearFields()
    document.getElementById('modal').classList.remove('active')
}



btnOpenModal.addEventListener('click', openModal)

document.addEventListener('click', closeModal)