import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}



async function* gettingData (urlApi) {

  const products = await fetchData(`${urlApi}/products`);
  const product = await fetchData(`${urlApi}/products/${products[0].id}`); 
  const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
  

  yield console.log(products.length);
  yield console.log(product.title);
  yield console.log(category.name);

}


const gen = gettingData(API);

console.log(gen.next());
gen.next();
gen.next();
gen.next();
