class To_do_list {
    constructor(name, status) 
    {
        this.name = name;
        this.status = status;
    }
}
var List = [];
if (JSON.parse(localStorage.getItem("ToDoList"))!=null) 
{
    List = JSON.parse(localStorage.getItem("ToDoList"));
}

function submit(Todo) 
{
    List.push(Todo);
    var to_do = JSON.stringify(List);
    localStorage.setItem("ToDoList", to_do);
}

function show() 
{
    var getshowtodo = JSON.parse(localStorage.getItem("ToDoList"));
    document.getElementById("show").innerHTML = "";
    if(getshowtodo != null) {
    for(i = 0; i < getshowtodo.length; i++) 
    {
        if (getshowtodo[i].status == true) {
            document.getElementById("show").innerHTML += "<li class='done'>" + getshowtodo[i].name + " " + "<button class = 'delete' id ='btndelete' onclick = 'delete_to_do(" + i + ")'>X</button>" + "<button class = 'btndone' id='btndone' onclick = 'done_to_do(" + i + ")'>V</button>" + "</li>" + "<br/>";
        }
        else {
            document.getElementById("show").innerHTML += "<li>" + getshowtodo[i].name + " " + "<button class = 'delete' id ='btndelete' onclick = 'delete_to_do(" + i + ")'>X</button>" + "<button class = 'btndone' id='btndone' onclick = 'done_to_do(" + i + ")'>V</button>" + "</li>" + "<br/>";
        }
    }
}
}


function delete_to_do(Vi_tri) 
{
    List.splice(Vi_tri,1);
    var to_do = JSON.stringify(List);
    localStorage.setItem("ToDoList", to_do);
    show();
}

function done_to_do(Vi_tri)
{
    List[Vi_tri].status = true;
    var to_do = JSON.stringify(List);
    localStorage.setItem("ToDoList", to_do);
    show();
}

window.onload = function() 
{
    var add = document.getElementById("bt_add");
    add.onclick = function(e) 
    {
        name = document.getElementById("Title").value;
        status = false;
        var TD = new To_do_list(name, status);
        submit(TD);
        show();
        e.preventDefault();
    }
    
    show();
    console.log(List);
}