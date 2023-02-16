let produtos = [];

function adicionarItem(){
    produtos.push(item.value);
    lista.innerHTML = "";
}
   

localStorage.setItem("produtos", JSON.stringify(produtos))


function listarItems(){
    let items = JSON.parse(localStorage.getItem("produtos"));

    if (items && items.length > 0) {
    for(let i = 0; i < items.length; i++){
        lista.innerHTML += `<li class="list-group-item">${items[i]}</li>`;
        }
    }
}
listarItems();