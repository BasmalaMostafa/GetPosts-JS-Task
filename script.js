


async function getUsers(){
    let response= await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    //console.log(users);
    renderusers(response);
}

//console.log(getUsers());

function renderusers(arr){
arr.forEach(element => {
    var button = document.createElement("button");
    button.classList.add("bttn");
    button.innerHTML = `${element.name}`;
    //document.body.append(button);
    var nav = document.getElementById("nav");
    nav.appendChild(button);
    button.addEventListener("click", function(){
        let divs=document.querySelector("div");
        if(divs){
            divs.remove();
        }
        getPosts(element.id);
    });
});

}

getUsers();

async function getPosts(id){
    let response= await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).json();

    response.forEach(element =>{
    var div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `<h3>${element.title} </h3>`;
    document.body.append(div);
    });
}

