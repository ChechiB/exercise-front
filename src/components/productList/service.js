export async function search(query) {
    return await fetch(`${process.env.REACT_APP_API_URL}/items?q=${query}`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then( res => { return res.json() })
        .catch(error => console.log(error) )
}