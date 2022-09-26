import { Axios } from 'axios';

const client = new Axios ({
    baseURL: "http://localhost:5005/api"
})

export function getTrips() {
    return client.get("/trips")
}

export function getTrip(tripId) {
    return client.get(`/trips/${tripId}`)
}

export function deleteTrip(tripId) {
  return client.delete(`/trips/${tripId}`)
}

export function createTrip(data) {
  return client.post("/trips", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export function register(data) {
    return client.post("/auth/signup", JSON.stringify(data), 
    {
      headers: {
        "Content-Type": "application/json"
      },
    }
    );
  }