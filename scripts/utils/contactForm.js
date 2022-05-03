function displayModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  modal.setAttribute('class', 'active')
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
  modal.removeAttribute('class', 'active')
}
