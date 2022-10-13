export async function getCatFacts() {

    const facts = [];

    for (let i = 0; i <= 5; i++ ) {
        await fetch("https://catfact.ninja/fact")
            .then(response => {
                return response.json()
            })
            .then(text => {
                facts.push(text['fact'])
            })
            .catch(error => {
                console.log(error);
            })
    }

    return facts;
}