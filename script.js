function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar img
  const img = document.querySelector('#profile img')

  // substituir img
  if (html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './Assets/avatar-light.png')
  } else {
    //se tiver sem light toggleMode, mantem imagem normal
    img.setAttribute('src', './Assets/avatar.png')
  }
}
