class Home {
    constructor() {
    console.log(window.location.origin);
        //récupération de l'api
        this.photographersApi = new PhotographerApi('/data/photographers.json')

        //target élément DOM 
        this.$wrapper = document.getElementById('main')

        this.$photographerCard = document.createElement('div')
        this.$photographerCard.setAttribute('id', 'photographer_section')
       
    }

    
    async main() {

        const photographersData = await this.photographersApi.get()
       console.log("apirécup", photographersData);
       const Photographers = photographersData.map(photographer => new Photographer(photographer))
        //console.log('photographersTab',Photographers );

        Photographers.forEach(photographer => {
            const Template = cardPhotographer(new PhotographerCard(photographer))
        //creation card pour chaque photographer
            this.$photographerCard.appendChild(
                Template.getUserCardDOM()   
                 
            )  
        });

        this.$wrapper.appendChild(this.$photographerCard)

        
    }
}

const home = new Home()
home.main()
