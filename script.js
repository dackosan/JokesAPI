function GetRandomJoke(){
    let jokee = fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json());

    document.getElementById("joke").innerHTML = jokee;
}