var content="";

function writeCard(item){
    console.log(item);
    content += `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${item.id}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${item.name}</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>
  `
}

//Conexion a servidor graphql
fetch('http://localhost:5000', {
  method: 'POST',

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({
    query: `{
      tasks {
        id
        name
      }
    }`
  })
})
.then(res => res.json())
.then(res => {
    content+=`<div class="row align-items-start">`;
    res.data.tasks.map(item => writeCard(item))
    content+=`</div>`;
    document.getElementById('tasks').innerHTML=content;
    }
)