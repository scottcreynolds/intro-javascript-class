var navs = document.getElementsByClassName('nav');
for(var i=0; i<navs.length;i++) {
  console.log(navs[i])
  navs[i].addEventListener('click', function() {
    alert(this.innerText);
  })
}
