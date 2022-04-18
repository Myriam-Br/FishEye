function cardPhotographer(photographer){

        photographer.$cardPhotographer.addEventListener('click', saveIdPhotographer = () =>{
            const photographerName = localStorage.setItem('name', photographer.photographer.name)
            //console.log('NameSaved',photographerName);

            const photographerID = localStorage.setItem('id', photographer.photographer.id)
            //console.log('IDsaved',photographerID);
  
            window.location.assign("photographer.html")

        } )  

      photographer.$cardPhotographer.addEventListener('keydown', e => {
          console.log(e);
          if(e.keyCode === 13) {
            photographer.$cardPhotographer.click()
          }
      })
        
        
    
        return photographer
}