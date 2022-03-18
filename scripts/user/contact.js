class ContactForm{
    constructor(data) {

        if(ContactForm.exists) {
            return ContactForm.instance
        } else if (data && data.firstName && data.lastName && data.email && data.message){

            this._firstName = data.firstName
            this._lastName = data.lastName
            this._email = data.email
            this._message = data.message
            
            
            ContactForm.instance = this
            ContactForm.exists = true

            this.saveToLocalStorage()

            return this
        }
       
    } 

    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._lastName
    }

    get email() {
        var regexEmail = /^([A-Za-z]|[0-9])+$/;
        if(this._email.matches(regexEmail)) {
            return this._email
        }else {
            return console.log('error');
        }
    }

    get message(){
        return this._message
    }

    get contact(){
        const firstName = localStorage.getItem('firstName')
        const lastName = localStorage.getItem('lastName')
        const email = localStorage.getItem('email')
        const message = localStorage.getItem('message')
    }
    
    //fonction de sauvegarde
    saveToLocalStorage() {
        localStorage.setItem('firstName', this._firstName)
        localStorage.setItem('lastName', this._lastName)
        localStorage.setItem('email', this._email)
        localStorage.setItem('message', this._message)
    }

}