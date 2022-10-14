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

const allPostData = [
    {id: '1', title: 'Post 1', description: 'This is post 1'},
    {id: '2', title: 'Post 2', description: 'This is post 2'}
]

export function getAllPostIds() {

    return allPostData.map((postData) => {
        console.log(postData)
        return {
            params: {
                id: postData.id
            }
        }
    })
}

export function getPostData(id) {
    return allPostData.find(post => post.id == id)
}