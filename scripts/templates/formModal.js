class ContactFormModal{
    constructor(data){

        this._data = data
        console.log(this._data);

        this.$wrapperForm = document.querySelector('.modal')
        console.log(this.$wrapperForm); 
        this.formContact = document.getElementById('contact_form')

        
    }
  createContactForm() {

    const firstName = document.createElement('input')
    const firstNameLabel = document.createElement('label')

    const lastName = document.createElement('input')
    const lastNameLabel = document.createElement('label')

    const email = document.createElement('input')
    const emailLabel = document.createElement('label')

    const message = document.createElement('input')
    const messageLabel = document.createElement('label')

    
    this.formContact.appendChild(firstName)
    this.formContact.appendChild(firstNameLabel)

    this.formContact.appendChild(lastName)
    this.formContact.appendChild(lastNameLabel)

    this.formContact.appendChild(email)
    this.formContact.appendChild(emailLabel)

    this.formContact.appendChild(message)
    this.formContact.appendChild(messageLabel)
    
    console.log('INPUT',this.formContact);


    this.$wrapperForm.innerHTML = this.formContact
    
    
    return this.$wrapperForm


  }

  render(){
      this.createContactForm()
  }
    
}