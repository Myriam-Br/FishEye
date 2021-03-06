class Home {
  constructor () {
    // récupération de l'api
    this.photographersApi = new PhotographerApi('/data/photographers.json')

    // target élément DOM
    this.$wrapper = document.getElementById('main')
    this.$photographerCard = document.createElement('div')
    this.$photographerCard.setAttribute('id', 'photographer_section')
  }

  async main () {
    // récupérer photographer list -> api data
    const photographersData = await this.photographersApi.get()
    // console.log("apirécup", photographersData);
    const Photographers = photographersData.map(photographer => new Photographer(photographer))

    // creation card pour chaque photographer
    Photographers.forEach(photographer => {
      const Template = cardPhotographer(new PhotographerCard(photographer))
      this.$photographerCard.appendChild(
        Template.getUserCardDOM()
      )
    })
    this.$wrapper.appendChild(this.$photographerCard)
  }
}

const home = new Home()
home.main()
