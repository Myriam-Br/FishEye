class PhotographerCard{
    constructor(photographer){
        this.photographer = photographer
        this.$cardPhotographer= document.createElement('article')
        this.$cardPhotographer.classList.add('photographer_card')
       //console.log(this.photographer.name);

    }

    getUserCardDOM() {      

      
        //portrait pic
        const img = document.createElement( 'img' );
        img.classList.add('pfp')
        img.setAttribute("src", `/media/Photographers ID Photos/${this.photographer.portrait}`)
    
      

        //photographer name
        const h2 = document.createElement( 'h2' );
        h2.classList.add('name')
        h2.innerHTML = this.photographer.name;
      

        //photographer tagline
        const tagline = document.createElement('p')
        tagline.classList.add('tagline')
        tagline.innerHTML = this.photographer.tagline
      

        //photographer location
        const location = document.createElement('h3')
        location.classList.add('location')
        location.innerHTML = this.photographer.city + ',' + this.photographer.country

        //photographer price
        const price = document.createElement('p')
        price.classList.add('price')
        price.innerHTML = this.photographer.price + "/jour"

        localStorage.setItem('price', this.photographer.price)

        this.$cardPhotographer.appendChild(img);
        this.$cardPhotographer.appendChild(h2); 
        this.$cardPhotographer.appendChild(location)
        this.$cardPhotographer.appendChild(tagline)
        this.$cardPhotographer.appendChild(price)

      
    
        return this.$cardPhotographer;
    }


}

