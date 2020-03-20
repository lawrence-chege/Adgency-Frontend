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
      console.log(data)
    })
}