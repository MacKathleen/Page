function toggleHamburguerMenu() {
  const hamburguerMenu = document.getElementById('hamburguerMenu');
  console.log('DEU CERTO ')
  
  if (hamburguerMenu.style.display == 'flex') {
    hamburguerMenu.style.display = 'none'; 
    console.log('1 ')

  } else {
    hamburguerMenu.style.display = 'flex'; 
    console.log('2 ')

  }
}