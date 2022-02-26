const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=d3b878751add473e83ab5b8e0570e7f3";

const resultsContainer = document.querySelector(".results");


async function makeApiCall() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const facts = data.results;
        resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);
            console.log(facts[i].rating);
            console.log(facts[i].tags.length);

            if(i === 8) {
                break;
            }

            resultsContainer.innerHTML +=
            `<div class="result">
                <h3>${facts[i].name}</h3>
                <ul>
                    <li>Rating: ${facts[i].rating}</li>
                <li>Tags: ${facts[i].tags.length}</li>
            </div>`;
        }
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("Fuck you!")
    }
}

makeApiCall();