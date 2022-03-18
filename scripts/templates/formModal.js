class ContactFormModal{
    constructor(){
      
      this.$wrapper = document.createElement('div')
      this.$modalWrapper= document.querySelector('.modal') 
      this.$h2 = document.getElementById('contact_title')          
    }

    onSubmitForm() {
      this.$wrapper
      .querySelector('form')
      .addEventListener('submit', e => {
        e.preventDefault()

        const firstNameInput = this
        .$wrapper
        .querySelector('#firstName')
        .value;

        const lastNameInput = this
        .$wrapper
        .querySelector('#lastName')
        .value;

        const emailInput = this
        .$wrapper
        .querySelector('#email')
        .value;

        const messageInput = this
        .$wrapper
        .querySelector('#message')
        .value;

        const contact = new ContactForm({
          firstName : firstNameInput,
          lastName : lastNameInput,
          email : emailInput,
          message : messageInput,
        })

        console.log(contact);
      })
    }


    createContactForm() {

      if(localStorage.getItem('name') !== null) {
        this.$h2.innerHTML = "Contactez-moi" +" "+ localStorage.getItem('name')
    
        const formContact = document.createElement('form')

        ////////////////firstName
        const firstNameDiv = document.createElement('div')
        firstNameDiv.classList.add('firstName_section')

        const firstNameLabel = document.createElement('label')
        firstNameLabel.setAttribute('for', 'firstName')
        const firstName = document.createElement('input')
        firstName.setAttribute('id', 'firstName')

        firstNameLabel.innerHTML = "Prénom"   

        firstNameDiv.appendChild(firstNameLabel)
        firstNameDiv.appendChild(firstName)
    

      /////////////////lastName
        const lastNameDiv = document.createElement('div')
        lastNameDiv.classList.add('lastName_section')

        const lastName = document.createElement('input')
        lastName.setAttribute('id', 'lastName')
        const lastNameLabel = document.createElement('label')
        lastNameLabel.setAttribute('for', 'lastName')

        lastNameLabel.innerHTML = "Nom"   

        lastNameDiv.appendChild(lastNameLabel)
        lastNameDiv.appendChild(lastName)

        /////////////////email
        const emailDiv = document.createElement('div')
        emailDiv.classList.add('email_section')

        const email = document.createElement('input')
        email.setAttribute('id', 'email')
        const emailLabel = document.createElement('label')
        emailLabel.setAttribute('for', 'email')

        emailLabel.innerHTML = "Email"

        emailDiv.appendChild(emailLabel)
        emailDiv.appendChild(email)
        

        //console.log(emailDiv);

        /////////////message
        const messageDiv = document.createElement('div')
        messageDiv.classList.add('message_section')

        const message = document.createElement('input')
        message.setAttribute('id', 'message')
        const messageLabel = document.createElement('label')
        messageLabel.setAttribute('for', 'message')

        messageLabel.innerHTML="Message"

        messageDiv.appendChild(messageLabel)
        messageDiv.appendChild(message)
        

        ///////button submit
        const btnSubmit = document.createElement('button')
        btnSubmit.classList.add('btn_submit')
        btnSubmit.innerHTML = "Envoyer"

        formContact.appendChild(firstNameDiv)
        formContact.appendChild(lastNameDiv)
        formContact.appendChild(emailDiv)
        formContact.appendChild(messageDiv)
        formContact.appendChild(btnSubmit)
        

        //console.log(formContact);
        //console.log(this.$wrapper);
        this.$wrapper.appendChild(formContact)

        this.$modalWrapper.appendChild(this.$wrapper)


        //console.log('MODAL WRAPPER',this.$modalWrapper); 
        //console.log('CONTACT WRAPPER',this.$wrapper);    
      }
    }

    render(){
        this.createContactForm()
        this.onSubmitForm()
    }
    
}