const create = async (comments) => {
    try {
        let response = await fetch('/api/comments/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(comments)
        })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  const read = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/comments/' + params.userId, {
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
  
  const list = async (signal) => {
    try {
      let response = await fetch('/api/comments/', {
        method: 'GET',
        signal: signal,
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
 
  export {
    create,
    list,
    read
  }
  