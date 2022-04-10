
const create = async (credentials, signal) => {
    try {
      let response = await fetch('/api/comments/', {
        method: 'POST',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
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
      let response = await fetch('/api/comments/' + params.commentsId, {
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
  
  const list = async (credentials,signal) => {
    try {
      let response = await fetch('/api/comments/', {
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
  
 
  export {
    create,
    list,
    read
  }
  