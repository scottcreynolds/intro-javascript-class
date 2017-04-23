function promptMe() {
  let name = prompt("what is your name?")
  let color = prompt("What is your favorite color?")
  let num = prompt("what is your favorite number?")

  let p = document.createElement('p')
  p.innerText = name
  if(num%2 !== 0) {
    p.style.color = color;
  } else {
    p.style.backgroundColor = color;
  }
  document.body.appendChild(p)
}
