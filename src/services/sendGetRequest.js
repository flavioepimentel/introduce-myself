import axios from "axios";

//-----Instanciando Conexão-------//

function sendGetRequest(url, domain) {
  const instance = axios.create({
    baseURL: url,
    timeout: 60000000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  return makeRequest(domain, instance);
  
};

async function makeRequest(domain, instance) {
  try {
    const result = await instance.get(domain).then((response) => response)
    return result.data;
  } catch (error) {
    console.log(error)
  }
}

export default sendGetRequest;