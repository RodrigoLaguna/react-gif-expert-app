/**==============================================
 * *          OBTENER DATA DE GIPHY 
 *=============================================**/

export const getGifs = async ( category )=> {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=YOVjiiRCL9sQfTYrKoPkTAqj29Zgls7a`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    // Informacion necesaria
    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    });

    return gifs;

  };