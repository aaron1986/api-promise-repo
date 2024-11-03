//JavaScript Promises
function getData(url) {
    return new Promise ((resolve, reject) => {
        fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error("Failed")
            }
            return response.json()
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error))
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
