const BASE_URL = "http://localhost:8000/"

const getInit = () => {
    return {
        headers: {
          'Content-Type': 'application/json'
          //"authorization": `JWT ${token}`
        }
    }
  }

  const tryCatchFetch = async (url, init) => {
    try {
      let response = await fetch(url, init)
      if (response.ok) {
        console.log("status", response.status)
        if (response.status !== 204) { // 204 doesn't have a message body
          let data = await response.json()
          return data
        }
        else {
          return { "success": true }
        }
      }
    }
    catch (error) {
      console.error(":ERR:",error)
      return null
    }
  }

  const getMarkedShops = async () => {
    let url = `${BASE_URL}api/marked/`
    return await tryCatchFetch(url, getInit())
  }

  const getMarkedShopById = async (markId) => {
    let url = `${BASE_URL}api/marked/${markId}/`
    return await tryCatchFetch(url, getInit())
  }

  const createMarkedShop = async(newMarkedShopParams) => {
    let url = `${BASE_URL}api/marked/`
    let init = getInit()
    init["method"] = "POST"
    init["body"] = JSON.stringify(newMarkedShopParams)
    return await tryCatchFetch(url, init)
  }

  const updateMarkedShop = async(markId, updatedMarkedShopParams) => {
    let url = `${BASE_URL}api/marked/${markId}/`
    let init = getInit()
    init["method"] = "PUT"
    init["body"] = JSON.stringify(updatedMarkedShopParams)
    return await tryCatchFetch(url, init)
  }

  const deleteMarkedShop = async (markId) => {
    let url = `${BASE_URL}api/marked/${markId}/`
    let init = getInit()
    init["method"] = "DELETE"
    return await tryCatchFetch(url, init)
  }

  const myExport = {
    getMarkedShops,
    getMarkedShopById,
    createMarkedShop,
    updateMarkedShop,
    deleteMarkedShop
  }
  
  export default myExport