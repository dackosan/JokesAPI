async function GetRandomJoke(){
    let jokeCard = document.getElementById("jokeCard");

    jokeCard.style.visibility = 'visible';
    jokeCard.innerHTML = `<h2>Poén Véletlenszerűen</h2>`;

    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const data = await response.json();

        jokeCard.innerHTML += `<p>${data.setup}</p>`;
        jokeCard.innerHTML += `<p>${data.punchline}</p>`;
    } catch (error) {
        console.error("Hiba történt:", error);
    }

    jokeCard.innerHTML += `<button type="button" onclick="GetRandomJoke()">Generál</button>`;
}

function ShowJokeByIdCard(){
    let jokeCard = document.getElementById("jokeCard");

    jokeCard.style.visibility = 'visible';
    jokeCard.innerHTML = `<h2>Poén Sorszám Alapján</h2>`;
    jokeCard.innerHTML += `
        <label>Írja be a sorszámot: </label>
        <input type="number" id="jokeId" min="1" max="451">
        <button type="button" onclick="GetJokeById()">Generál</button>`

    
    async function GetJokeById(){
        let id = document.getElementById("jokeId").value;

        try{
            const response = await fetch(`https://official-joke-api.appspot.com/jokes/${id}`);
            const data = await response.json();

            jokeCard.innerHTML += `<p>${data.setup}</p>`;
            jokeCard.innerHTML += `<p>${data.punchline}</p>`;
        } catch (error){
            console.error("Hiba történt:", error);
        }
    }
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