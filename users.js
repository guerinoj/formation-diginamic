fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log(users)
    displayUsers(users)
  })


function displayUsers(users) {
  const div = document.querySelector("#users")

  let html = `<table class="table table-striped">
                <thead>
                  <tr>`
                html += displayHeaders(users[0])         
                html +=`
                    </tr>
                </thead>`


  users.forEach(user => {
    html += displayUser(user)
  })

  html += `</table>`

  div.innerHTML = html

}

/**
 * Display user
 * @param {*} user 
 * @returns string to put in HTML
 */
function displayUser(user) {
  let html = '<tr>'

  for(const key in user){
    html += `<td>${user[key]}</td>`
  }

  html +="</tr>"

  return html
  
}

function displayHeaders(user){
  let html=''
  for(const prop in user)
  {
    html+= `<th>${prop}</th>`
  } 
  return html
}