let age = 0

document.getElementById('button').addEventListener('click', find)

function find () {
  age = document.getElementById('input').value
  age = parseInt(age)
  if (age >= 18) {
    document.getElementById('p1').innerHTML = 'With your age you can watch a R rated move'
  } else if (age >= 10) {
    document.getElementById('p1').innerHTML = 'With your age you can watch a PG rated move'
  } else {
    document.getElementById('p1').innerHTML = 'With your age you can watch a G rated move'
  }
}
