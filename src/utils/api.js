import { Axios } from 'axios';

const client = new Axios ({
    baseURL: "http://localhost:5005/api"
})

export function getTrips() {
    return client.get("/trips")
}

export function register(data) {
    return client.post("/auth/signup", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }