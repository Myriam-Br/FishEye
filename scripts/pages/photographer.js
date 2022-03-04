//Mettre le code JavaScript lié à la page photographer.html

class PhotographerPage{

    main(){
        const contact = new ContactForm()
        console.log("CONTACT FORM",contact);
     

        const form = new ContactFormModal()
        console.log("MODAL",form);


    }


}

const page = new PhotographerPage()
page.main()
