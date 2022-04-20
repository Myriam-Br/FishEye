class FilterSource{

    constructor(Medias){
        this.Medias = Medias
        this.$filterwrapper = document.createElement('div')
        this.$filterwrapper.setAttribute('id', 'filter_section')
        this.$wrapper = document.getElementById('media_card_section')
        this.ProxyRatingMedia = new ProxyRatingMedia()

        //console.log('MEDIAS',Medias);
        //console.log(this.$wrapper);
    }


    async sorterMedias(sorter) {
        //clear media wrapper
        this.clearMoviesWrapper()

        if(sorter) {

            //console.log(sorter);
            const sortedData = await this.ProxyRatingMedia.sorter(this.Medias, sorter)
           
            //console.log('sortedData',sortedData);
            

            const SortedMedias = sortedData.data

            //console.log('SortedMedias', SortedMedias);

                const Template = new DisplayMedia()
                this.$wrapper.appendChild(mediaCardPlayer(Template.getMediaCardDOM(SortedMedias)))
        

        } else {

                const Template = new DisplayMedia()
                this.$wrapper.appendChild(mediaCardPlayer(Template.getMediaCardDOM(Medias)))
          
        }
    }

    //select option filter
    onChangeSorter() {
        this.$filterwrapper 
            .querySelector('#filters')
            .addEventListener('change', e => {
                const sorter = e.target.value
                this.sorterMedias(sorter)
                //console.log(sorter);
            })
    }


    //clear media wrapper => to display sorted media
    clearMoviesWrapper() {
        this.$wrapper.innerHTML = " "
        
    }
    


    //create filter sorter
    getFilterDOM() {
 
        const filterSectionLabel = document.createElement('label')
        filterSectionLabel.setAttribute('for', 'filters')
        filterSectionLabel.innerHTML= "Trier par "
        
        const filterSection = document.createElement('select')
        filterSection.setAttribute('id', 'filters')
        filterSection.setAttribute('aria-label', 'Order by')
        filterSection.setAttribute('tabindex', '8')

        const filter1 = document.createElement('option')
        filter1.setAttribute('value', ' ')
        filter1.setAttribute('class', 'filter')
        filter1.innerHTML = " select "

        const filterPerDate = document.createElement('option')
        filterPerDate.setAttribute('value', 'popular')
        filterPerDate.setAttribute('class', 'filter')
        filterPerDate.innerHTML = "popular"

        const filterPerTitle = document.createElement('option')
        filterPerTitle.setAttribute('value', 'title')
        filterPerTitle.setAttribute('class', 'filter')
        filterPerTitle.innerHTML = "title"

        filterSection.appendChild(filter1)
        filterSection.appendChild(filterPerDate)
        filterSection.appendChild(filterPerTitle)
        
        this.$filterwrapper.appendChild(filterSectionLabel)
        this.$filterwrapper.appendChild(filterSection)


        return this.$filterwrapper     
    }


    

}

