class Home {
    constructor() {
        //récupération de l'api
        this.photographersApi = new PhotographerApi('/data/photographers.json')

        //target élément DOM 
        this.$photographersWrapper = document.getElementById('photographer_section')
    }

    
    async main() {
        const photographersData = await this.photographersApi.get()
       console.log("apirécup", photographersData);
       const Photographers = photographersData.map(photographer => new Photographer(photographer))
        console.log('photographersTab',Photographers );

        Photographers.forEach(photographer => {
            const Template = new PhotographerCard(photographer)
            

            //creation card pour chaque photographer
            this.$photographersWrapper.appendChild(
                Template.getUserCardDOM()   


            )   
            
          
        })  
        
        console.log("CARD CONTAINER",this.$photographersWrapper);
    }
}

const home = new Home()
home.main()
