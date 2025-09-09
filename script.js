async function GetRandomJoke(){
    let jokeCard = document.getElementById("jokeCard");

    jokeCard.style.visibility = 'visible';
    jokeCard.innerHTML = `<h2>Random Joke</h2>`;
    //next

    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const data = await response.json();

        jokeCard.innerHTML += `<p>${data.setup}</p>`;
        jokeCard.innerHTML += `<p>${data.punchline}</p>`;
    } catch (error) {
        console.error("Hiba történt:", error);
    }

    jokeCard.innerHTML += `<button type="button" onclick="GetRandomJoke()">Another One!</button>`;
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

    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById("jokeSetup").innerHTML = data.setup;
        document.getElementById("jokePunchline").innerHTML = data.punchline;
    })
    .catch(error => console.error("Hiba történt:", error));
}

function GetJokeByType(){
    let type = document.getElementById("typeOfJoke").value;
    console.log(type);
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById("jokeSetup").innerHTML = data.setup;
        document.getElementById("jokePunchline").innerHTML = data.punchline;
    })
    .catch(error => console.error("Hiba történt:", error));
}