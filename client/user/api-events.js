
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

  const update = async (eventId,credentials, userId, newEvent) => {
    try {
      let response = await fetch('/api/eventId/' + userId + "/" + eventId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(newEvent)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  const remove = async (eventId,credentials,user) => {
    try {
      let response = await fetch('/api/eventId/' + user + "/" + eventId, {
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

  const read = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/events/' + params.eventId, {
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
    update,
    remove,
    read
  }
  