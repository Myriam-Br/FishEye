//Mettre le code JavaScript lié à la page photographer.html
class PhotographerPage{

    constructor() {
        this.photographersApi = new PhotographerApi('/data/photographers.json')
        this.$photographersWrapper = document.getElementById('photographer_section')
    }
   async main(){
        const photographerId = localStorage.getItem('id')
        console.log(photographerId);

        const photographerData = await this.photographersApi.getId()
        console.log("API",photographerData);


        const Template = new PhotographerCard(photographerId)
        console.log(Template.$wrapper);
        Template.getUserCardDOM(photographerId)
    }


}

const photographerPage = new PhotographerPage()
photographerPage.main()
