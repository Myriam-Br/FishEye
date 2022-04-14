class ContactFormModal{
    constructor(){
      
      this.$wrapper = document.createElement('div')
      this.$contactModal = document.getElementById('contact_modal')
      this.$modalWrapper= document.querySelector('.modal') 
      this.$h2 = document.getElementById('contact_title')          
    }

    clearForm(){
      console.log(this.$wrapper.querySelector('form').querySelectorAll('input').length);
      for (let i = 0 ; i < this.$wrapper.querySelector('form').querySelectorAll('input').length; i++) {
        console.log(this.$wrapper.querySelector('form').querySelectorAll('input')[i].value);
        this.$wrapper.querySelector('form').querySelectorAll('input')[i].value = ''  
      }
      console.log(this.$modalWrapper);
      this.$contactModal.style.display='none'

    }

    onSubmitForm() {
 

      console.log(this.$wrapper.querySelector('form').querySelector('#message'));
      console.log(this.$wrapper.querySelector('form').querySelector('#firstName').value);
      this.$wrapper
      .querySelector('form')
      .addEventListener('submit',e => {
        e.preventDefault()


        console.log(this.$wrapper.querySelector('form').querySelector('#firstName'));

        //regex 
        const emailFilter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const lettersFilter = /^[a-zA-Z]+$/;


     
        let firstNameInput = this.$wrapper.querySelector('form').querySelector('#firstName');
        let error_firstName_input = this.$wrapper.querySelector('form').querySelector('.error_firstName_input');
        let valideFirstName = true

        let lastNameInput = this.$wrapper.querySelector('form').querySelector('#lastName');
        let error_lastName_input = this.$wrapper.querySelector('form').querySelector('.error_lastName_input');
        let valideLastName = true

        let emailInput =this.$wrapper.querySelector('form').querySelector('#email');
        let error_email_input = this.$wrapper.querySelector('form').querySelector('.error_email_input');
        let valideEmail = true

        let messageInput = this.$wrapper.querySelector('form').querySelector('#message');
        let error_message_input = this.$wrapper.querySelector('form').querySelector('.error_message_input');
        let valideMessage = true

   
        //verification input firstName
        if(firstNameInput.value == ''){
          error_firstName_input.innerHTML = 'veuillez entrer votre prénom'
          valideFirstName = false
         // return true
        }else if(!firstNameInput.value.match(lettersFilter)){
          error_firstName_input.innerHTML = 'votre prénom doit contenir uniquement des lettres'
          valideFirstName = false 
        } else {
          error_firstName_input.innerHTML = ''
          valideFirstName = true
        }


        //verification input lastName
        if(lastNameInput.value == ''){
          error_lastName_input.innerHTML = 'veuillez entrer votre nom '
          valideLastName = false
        
         // return true
        }else if(!lastNameInput.value.match(lettersFilter)){
          error_lastName_input.innerHTML = 'votre nom doit contenir uniquement des lettres'
          valideLastName = false
        } else {
          error_lastName_input.innerHTML = ''
          valideLastName  = true
        }

        
        //verification input lastName
        if(emailInput.value == ''){
          error_email_input.innerHTML = 'veuillez entrer votre email '
          valideEmail = false
         // return true
        }else if(!emailInput.value.match(emailFilter)){
          error_email_input.innerHTML = 'veuillez entrer un email valide'
          valideEmail = false        
        } else {
          error_email_input.innerHTML = ''
          valideEmail = true
        }

        if(messageInput.value == ''){
          error_message_input.innerHTML = 'veuillez entrer votre message '
          valideMessage = false
         // return true
        }else if(messageInput.value !== ''){
          error_message_input.innerHTML = ''
          valideMessage = true        
        } 

        if(valideFirstName || valideLastName || valideEmail || valideMessage) {
          let contact = new ContactForm({
            firstName : firstNameInput.value,
            lastName : lastNameInput.value,
            email : emailInput.value,
            message : messageInput.value,
          })

          console.log(contact);

          //fermer modal contact
          this.clearForm()

          return true
        } else{

        }

      })

    }




    createContactForm() {

      
      

      if(localStorage.getItem('name') !== null) {
        this.$h2.innerHTML = "Contactez-moi" +" "+ localStorage.getItem('name')
    
        
       this.$modalWrapper.setAttribute('aria-label',  "Contact me" +" "+ localStorage.getItem('name'))
    
        const formContact = document.createElement('form')
        ////////////////firstName
        const firstNameDiv = document.createElement('div')
        firstNameDiv.classList.add('firstName_section')

        const firstNameLabel = document.createElement('label')
        firstNameLabel.setAttribute('for', 'firstName')
        const firstName = document.createElement('input')
        firstName.setAttribute('id', 'firstName')

        firstNameLabel.innerHTML = "First name"   

        let errorFirstName = document.createElement('p')
        errorFirstName.setAttribute('class', 'error_firstName_input')

        firstNameDiv.appendChild(firstNameLabel)
        firstNameDiv.appendChild(firstName)
        firstNameDiv.appendChild(errorFirstName)
    

      /////////////////lastName
        const lastNameDiv = document.createElement('div')
        lastNameDiv.classList.add('lastName_section')

        const lastName = document.createElement('input')
        lastName.setAttribute('id', 'lastName')
        const lastNameLabel = document.createElement('label')
        lastNameLabel.setAttribute('for', 'lastName')

        lastNameLabel.innerHTML = "Last name"   

        let errorLastName = document.createElement('p')
        errorLastName.setAttribute('class', 'error_lastName_input')


        lastNameDiv.appendChild(lastNameLabel)
        lastNameDiv.appendChild(lastName)
        lastNameDiv.appendChild(errorLastName)

        /////////////////email

        
        const emailDiv = document.createElement('div')
        emailDiv.classList.add('email_section')


        
        const email = document.createElement('input')
        email.setAttribute('id', 'email')
        const emailLabel = document.createElement('label')
        emailLabel.setAttribute('for', 'email')

        emailLabel.innerHTML = "Email"

        let errorEmail = document.createElement('p')
        errorEmail.setAttribute('class', 'error_email_input')


        emailDiv.appendChild(emailLabel)
        emailDiv.appendChild(email)
        emailDiv.appendChild(errorEmail)
        

        //console.log(emailDiv);

        /////////////message
        const messageDiv = document.createElement('div')
        messageDiv.classList.add('message_section')

        const message = document.createElement('textarea')
        message.setAttribute('id', 'message')
        const messageLabel = document.createElement('label')
        messageLabel.setAttribute('for', 'message')

        messageLabel.innerHTML="Your message"

        let errorMessageSection = document.createElement('p')
        errorMessageSection.setAttribute('class', 'error_message_input')


        messageDiv.appendChild(messageLabel)
        messageDiv.appendChild(message)
        messageDiv.appendChild(errorMessageSection)
        

        ///////button submit
        const btnSubmit = document.createElement('button')
        btnSubmit.classList.add('btn_submit')
        btnSubmit.setAttribute('aria-label', 'Send')
        btnSubmit.innerHTML = "Envoyer"

        formContact.appendChild(firstNameDiv)
        formContact.appendChild(lastNameDiv)
        formContact.appendChild(emailDiv)
        formContact.appendChild(messageDiv)
        formContact.appendChild(btnSubmit)
        
  
        this.$wrapper.appendChild(formContact)
        this.$modalWrapper.appendChild(this.$wrapper)

        this.onSubmitForm()

        


      }else {

      }
    }


    render(){
        
  
        this.createContactForm()

        
    }
    
}