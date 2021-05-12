import telMask from "./mask";

export default class Form {
    constructor(form) {
        this.forms = document.querySelector(form);
        this.form = form;
        this.nameInputs = document.querySelectorAll('input[name="name"]');
        this.telInputs = document.querySelectorAll('input[name="tel"]');
        this.messageInputs = document.querySelectorAll('input[name="message"]');
        this.agreement = document.querySelector(".form__checkbox");
        this.incorrectName = document.createElement('div');
        this.incorrectTel = document.createElement('div');
        this.incorrectMessage = document.createElement('div');
        this.incorrectAgreement = document.createElement('div');
        this.errorMessages = {
            errFill: "<span>Заполните поле</span> <img src='./icons/err.svg' alt='img'>",
            errMessage: "<span>Не верно</span> <img src='./icons/err.svg' alt='img'>"
        } 
    }

    checkTel () {
        this.telInputs.forEach(telInput => {
            if (telInput.closest(this.form)) {
                this.incorrectTel.classList.add("errorInput");
                this.incorrectTel.remove();
                telInput.style.borderColor = "";

                if (telInput.value.match(/[0-9]+$/)) { 
                    return true;
                }

                if (telInput.value == "+7 ( _ _ _ ) _ _ _ - _ _ - _ _") {
                    telInput.after(this.incorrectTel);
                    this.incorrectTel.innerHTML = this.errorMessages.errFill;
                    telInput.style.borderColor = "red";
                    return false;  
                } else {
                    telInput.after(this.incorrectTel);
                    this.incorrectTel.innerHTML = this.errorMessages.errMessage;
                    telInput.style.borderColor = "red";
                    return false;   
                }
            }
        });
    };

    checkName () {
        this.nameInputs.forEach(nameInput => {
            if (nameInput.closest(this.form)) {
                this.incorrectName.classList.add("errorInput");
                this.incorrectName.remove();
                nameInput.style.borderColor = "";

                if (nameInput.value.match(/[а-я]+$/)) { 
                    return true;
                }
                if (!nameInput.value) {
                    nameInput.after(this.incorrectName);
                    this.incorrectName.innerHTML = this.errorMessages.errFill;
                    nameInput.style.borderColor = "red";
                    return false; 
                } else {
                    nameInput.after(this.incorrectName);
                    this.incorrectName.innerHTML = this.errorMessages.errMessage;;
                    nameInput.style.borderColor = "red";
                    return false;   
                }
            }
        });
    };

    checkMessage () {
        this.messageInputs.forEach(messageInput => {
            if (messageInput.closest(this.form)) {
                this.incorrectMessage.classList.add("errorInput");
                this.incorrectMessage.remove();
                messageInput.style.borderColor = "";
                if (!messageInput.value) {
                    messageInput.after(this.incorrectMessage);
                    this.incorrectMessage.innerHTML = this.errorMessages.errFill;
                    messageInput.style.borderColor = "red";
                    return false;
                }
            }
        });
    }

    checkAgreement () {
        this.incorrectAgreement.classList.add("errorInput");
        this.incorrectAgreement.remove();
        if (!this.agreement.checked) {
            this.agreement.nextSibling.nextSibling.after(this.incorrectAgreement);
            this.incorrectAgreement.innerHTML = this.errorMessages.errFill;
        }
    }

    initForm () {
        telMask();
        this.forms.addEventListener('submit', (e) => {
            e.preventDefault();
            this.checkName();
            this.checkTel();
            this.checkMessage ();
            this.checkAgreement ();
        });
    };
}