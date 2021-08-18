const BASE_URL = "http://localhost:8000/shops/"

const fetchShops = () => {
    return fetch(`${BASE_URL}`)
      .then((response) => response.json())
  }
  
  export default {
    //fetchWineByID,
    fetchShops
  }