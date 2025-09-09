function GetRandomJoke(){
    //next
    document.getElementById("jokeById").style.visibility = "hidden";
    document.getElementById("jokeByType").style.visibility = "hidden";
    document.getElementById("randomJoke").style.visibility = "visible";

    document.getElementById("jokeSetup").innerHTML = "";
    document.getElementById("jokePunchline").innerHTML = "";
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(data => document.getElementById("jokeSetup").innerHTML = data.setup)
    .then(data => document.getElementById("jokePunchline").innerHTML = data.punchline);
}

function ShowIdInput(){
    document.getElementById("jokeById").style.visibility = "visible";
    document.getElementById("jokeByType").style.visibility = "hidden";
    document.getElementById("randomJoke").style.visibility = "hidden";
}

function ShowOptions(){
    document.getElementById("jokeById").style.visibility = "hidden";
    document.getElementById("jokeByType").style.visibility = "visible";
    document.getElementById("randomJoke").style.visibility = "hidden";
    //next
}

function GetJokeById(){
    let id = document.getElementById("jokeId").value;

    fetch(`https://official-joke-api.appspot.com/jokes/${id}`)
    .then(response => response.json())
    .then(data => document.getElementById("jokeSetupId").innerHTML = data.setup);
}

function GetJokeByType(){
    let type = document.getElementById("typeOfJoke").value;
    console.log(type);
    fetch(`https://official-joke-api.appspot.com/jokes/${type}/random`)
    .then(response => response.json())
    .then(data => document.getElementById("jokeSetupType").innerHTML = data.setup);
}