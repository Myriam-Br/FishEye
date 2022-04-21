//Mettre le code JavaScript lié à la page photographer.html
class PhotographerPage{

    constructor() {
        this.photographersApi = new PhotographerApi(window.location.href +'/data/photographers.json')
        this.$photographersWrapper = document.querySelector('.photograph-header')
        this.$wrapper = document.getElementById('main')

        this.$modalWrapper= document.querySelector('.modal')
        this.$modalWrapperFormDisplay= document.getElementById('contact_modal') 
        
        this.mediaApi = new MediaApi('/data/photographers.json')
        
        this.mediaCardDiv = document.querySelector('.media_card')

        
        
    //console.log(this.LikesSubjet.like(this.LikesCounter));

            
    }
   async main(){
        

        backToHome()
        
        const photograph = JSON.parse(localStorage.getItem('id'))

        //API photographer
        const photographerData = await this.photographersApi.getById(photograph)

        //API  media
        const mediaData = await this.mediaApi.getMediaById()
        //console.log('MEDIA',mediaData);

     

        //console.log(window.location.pathname);

        if(window.location.pathname =='/photographer.html') {

            if(photograph) {
                //modal form contact
                const ModalForm = new ContactFormModal()
                ModalForm.render()
                }

            //TEMPLATE PHOTOGRAPHER CARD
            const Template = new PhotographerCard(photographerData)   
            this.$photographersWrapper.appendChild(
                Template.getUserCardDOM(photographerData)
            )

            this.$wrapper.appendChild(this.$photographersWrapper)


            //TEMPLATE MEDIA
            const Medias = mediaData.map(media => new Media(media))

            //TEMPLATE TOTAL LIKES PER PHOTOGRAPHER
            const TemplateTotalLikes = new TotalLikesCard(Medias, photographerData)
            this.$wrapper.appendChild(
                TemplateTotalLikes.totalLikesDom()
            )

            const TemplateMedia = new DisplayMedia()
            //console.log(mediaCardPlayer(new DisplayMedia(Medias)));
            this.$wrapper.appendChild(
                mediaCardPlayer(TemplateMedia.getMediaCardDOM(Medias))   
            )

            // TEMPLATE FILTERS
            const TemplateFilters = new FilterSource(Medias)
            this.$wrapper.appendChild(    
            TemplateFilters.getFilterDOM()         
            )
            TemplateFilters.onChangeSorter()

        }
       
    }
}

const photographerPage = new PhotographerPage()
photographerPage.main()
