const btnOpenModal = document.getElementById('btn-navbar')
const btnCloseModal = document.getElementById('modal-close')



function openModal() {
    let modal = document.getElementById('modal')
    
    modal.style.display = 'Block'
}

function closeModal() {
    let modal = document.getElementById('modal')

    modal.style.display = 'none'
}

btnOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)

/*--------------------------------------------*/

const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const phoneValue = phone.value;
  const messageValue = message.value;

  if (fullNameValue === "") {
    setErrorFor(fullName, "A name is required.");
  } else {
    setSuccessFor(fullName);
  }

  if (emailValue === "") {
    setErrorFor(email, "An email is required");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "A phone number is required");
  } else {
    setSuccessFor(phone);
  }

  
  const formControls = form.querySelectorAll(".form");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}