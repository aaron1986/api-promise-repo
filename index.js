//JavaScript Promises
function getData(url) {
/*Create function called getData that takes one parameter, url, 
the paramter called 'url' represents the API URL we want to fetch data from.
*/
    return new Promise ((resolve, reject) => {
    /*Return a new Promise. Inside the Promise, we pass two arguments, resolve and reject, 
    which are functions. resolve will be called if the operation is successful, and reject will 
    be called if there’s an error.
    */
        fetch(url)
        /* Calls the fetch function with the url. fetch is a built-in function in JavaScript that 
        starts a network request to the given URL. fetch returns a promise, which will resolve to a 
        response object if the request is successful.
        */
        .then((response) => {
            /* If the fetch request is successful .then returns a response object, which is passed 
            into this function as response. 
            */
            if(!response.ok) {
                /* If the response is not OK, it throws an error with a custom message, 
                which will automatically move to the .catch block later.
                */
                throw new Error("Failed")
            }
            return response.json()
            /* If the response is OK, this line converts the response to a JavaScript object and 
            passes it to the next .then in the chain 
            */
        })
        .then((data) => resolve(data))
        /* Resolves the promise with the parsed JSON data. If everything goes well, 
        resolve(data) is called, which fulfills the promise and makes the data available to 
        anything that uses getData.
        */
        .catch((error) => reject(error))
        /* Catches errors from any part of the request. If an error occurs, such as a network 
        failure or a problem parsing JSON.
        */
    })
}

getData("https://animechan.io/api/v1/quotes/random")
  .then((data) => {
    console.log("Content:", data.data.content);
    console.log("Anime Name:", data.data.anime.name);
  })
  .catch((error) => {
    console.error(error);
  });
