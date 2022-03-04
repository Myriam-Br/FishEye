function cardPhotographer(photographer){

        photographer.$wrapper.addEventListener('click', saveIdPhotographer = () =>{
            const photographerName = localStorage.setItem('name', photographer._photographer._name)
            console.log('NameSaved',photographerName);

            const photographerID = localStorage.setItem('id', photographer._photographer.id)
            console.log('IDsaved',photographerID);

            
          

        } )   
    
        return photographer
}