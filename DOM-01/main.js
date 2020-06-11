var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');
form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
function addItem(e){
    e.preventDefault();
    // List
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem));
    // Button from list
    var delbtn = document.createElement('button');
    delbtn.className='btn btn-danger btn-sm float-right delete';
    delbtn.appendChild(document.createTextNode('X'));
    // Add them
    li.appendChild(delbtn);
    itemlist.appendChild(li);
    document.getElementById('item').value = "";
}
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        var li = e.target.parentElement;
        itemlist.removeChild(li);
    }
}
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function (item){
        //console.log(item.firstChild.textContent);
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    });
}