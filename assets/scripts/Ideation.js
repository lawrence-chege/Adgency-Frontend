const _ = (x) =>{
  return document.getElementById(x);
}

const genIdeas= () => {
  fetch('http://072d3a26.ngrok.io/', {
    method: 'POST',
    body: JSON.stringify({
      product: document.getElementById('product').value,
      product_description: document.getElementById('product_description').value
    }),
    headers: {
      'Content-type': 'application/json;'
    }
  })
    .then(response => response.json())
    .then(data => {
      let slogans = data["Slogans"]
      localStorage.setItem("slogans", JSON.stringify(slogans));
      slogans = JSON.parse(localStorage.getItem("slogans"));
      
      slogans.forEach(slogan=>{
        let comp = _("Ideas")
        let table_row = document.createElement('tr');
        comp.appendChild(table_row);

        let table_data = document.createElement('td');
        table_data.innerHTML+= slogan
        table_row.appendChild(table_data);

        let table_data2 = document.createElement('td');
        table_row.appendChild(table_data2);

        let table_data3 = document.createElement('td');
        table_row.appendChild(table_data3);
        
        let i2 = document.createElement('button')
        i2.classList.add("btn-wide")
        i2.classList.add("btn")
        i2.classList.add("btn-success")
        i2.innerHTML += "upvote"
        table_data2.appendChild(i2)

        let i3 = document.createElement('button')
        i3.classList.add("btn-wide")
        i3.classList.add("btn")
        i3.classList.add("btn-danger")
        i3.innerHTML += "downvote"
        table_data3.appendChild(i3)

      })
    })
}
