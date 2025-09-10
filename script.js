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
}

async function GetJokeById(){
    let id = document.getElementById("jokeId").value;

    jokeCard.innerHTML = `<h2>Poén Sorszám Alapján</h2>`;
    jokeCard.innerHTML += `
        <label>Írja be a sorszámot: </label>
        <input type="number" id="jokeId" min="1" max="451">
        <button type="button" onclick="GetJokeById()">Generál</button>`

    try{
        const response = await fetch(`https://official-joke-api.appspot.com/jokes/${id}`);
        const data = await response.json();
        jokeCard.innerHTML += `<p>${data.setup}</p>`;
        jokeCard.innerHTML += `<p>${data.punchline}</p>`;
   
    } catch (error){
        console.error("Hiba történt:", error);
    }
}

function ShowJokeByType(){
    let jokeCard = document.getElementById("jokeCard");

    jokeCard.style.visibility = 'visible';
    jokeCard.innerHTML = `<h2>Poén Típus Alapján</h2>`;
    jokeCard.innerHTML += `
        <label>Válassza ki a poén típusát: </label>
        <select id="jokeType">
            <option value="general">General</option>
            <option value="programming">Programming</option>
            <option value="knock-knock">Knock-Knock</option>
            <option value="dad">Dad</option>
        </select>
        <button type="button" onclick="GetJokeByType()">Generál</button>`
}

async function GetJokeByType(){
    let type = document.getElementById("jokeType").value;

    jokeCard.innerHTML = `<h2>Poén Típus Alapján</h2>`;
    jokeCard.innerHTML += `
        <label>Válassza ki a poén típusát: </label>
        <select id="jokeType">
            <option value="general">General</option>
            <option value="programming">Programming</option>
            <option value="knock-knock">Knock-Knock</option>
            <option value="dad">Dad</option>
        </select>
        <button type="button" onclick="GetJokeByType()">Generál</button>`

    try{
        const response = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/random`);
        const data = await response.json();
        
        jokeCard.innerHTML += `<p>${data[0].setup}</p>`;
        jokeCard.innerHTML += `<p>${data[0].punchline}</p>`;
   
    } catch (error){
        console.error("Hiba történt:", error);
    }
}