export async function getProduct(id) {
    return await fetch(`${process.env.REACT_APP_API_URL}/items/${id}`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then( res => { 
            if ( res.status >= 400 && res.status <= 500 ){
                throw res.json();
            }
            return res.json()
        })
        .catch(error => console.log(error) )
}