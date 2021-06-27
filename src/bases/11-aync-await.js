const getImagen = async () => {
    try {
        const apiKey = "GZ6h2UWaDFyK1KrdpSXAfXohs9f8ZiJ7";
        const resp = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    } catch (error) { 
        console.log(error);
    }
};
getImagen();

// peticion
//     .then(resp=> resp.json())
//     .then( ({data}) =>{
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src=url;

//         document.body.append(img);
//     })
//     .catch(console.warn);
