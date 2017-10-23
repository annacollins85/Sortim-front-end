export function login (data) {
  const config = new Request ('http://localhost:3001/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  return fetch(config);
}

export function saveEvents (data) {
  const config = new Request ('http://localhost:3001/events', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  return fetch(config);
}

export function getOtherUsers (data) {
  const config = new Request (`http://localhost:3001/events/${data}`, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  })
  return fetch(config);
}

export function sendInvite (data) {
  const config = new Request (`http://localhost:3001/events/${data.eventId}`, {
    method: 'POST',
    body: JSON.stringify(data.emails),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  return fetch(config);
}
