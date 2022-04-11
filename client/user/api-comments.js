
const create = async (credentials,comments) => {
    try {
      let response = await fetch('/api/comments/', {
        method: 'POST',
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

  const remove = async (commentID,credentials,user) => {
    try {
      console.log(user)
      console.log(commentID)
      

      let response = await fetch('/api/commentsID/' + user + "/" + commentID, {
        method: 'DELETE',
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
    read,
    remove
  }
  