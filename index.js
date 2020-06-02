let el = document.createElement('li');
let div = document.getElementById('container');
let input1 = document.createElement('input');
let button1 = document.createElement('button');
let a = 0;
let del = [];
let list;

button1.addEventListener('click',OnClick);
button1.addEventListener('',OnClick);
document.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
    OnClick();
    }
})

button1.innerHTML = "Добавить"
div.appendChild(input1);
div.appendChild(button1);
function OnClick(){
    
if(input1.value != ''){
    if(a != 0){
        div.removeChild(list);
    }
   list = document.createElement('ul');
   del.push(input1.value);
   del.sort();
   div.appendChild(list)
   for(let i = 0;i<del.length;i++){
    el =  document.createElement('li');
    el.innerHTML = del[i]
    list.appendChild(el);
    a++;
   }
   input1.value = null;
  localStorage.setitem("tasks",list);
}
}