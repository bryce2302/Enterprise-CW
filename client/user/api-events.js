
const create = async (credentials,events) => {
    try {
      let response = await fetch('/api/events/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(events)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
}
  
  const list = async (credentials,signal) => {
    try {
      let response = await fetch('/api/events/', {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  const update = async (params,credentials, event) => {
    try {
      let response = await fetch('/api/events/' , {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(event)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }


 
  export {
    create,
    list,
    update
  }
  