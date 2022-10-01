import { Axios } from 'axios';

// const getCircularReplacer = () => {
//   const seen = new WeakSet();
//   return (key, value) => {
//     if (typeof value === 'object' && value !== null) {
//       if (seen.has(value)) {
//         return;
//       }
//       seen.add(value);
//     }
//     return value;
//   };
// };

const client = new Axios ({
    baseURL: "http://localhost:5005/api"
})

export function getTrips() {
    return client.get("/trips")
}

export function getTrip(tripId) {
    return client.get(`/trips/${tripId}`)
}

export function deleteTrip(tripId, ownerId) {
  return client.delete(`/trips/${ownerId}/${tripId}`)
}

// export function createTrip(data) {
//   return client.post("/trips", data, {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
// }

export function updateTrip(tripId, data) {
  return client.put(`/trips/${tripId}`, data, {
    headers: {
      "Content-Type": 'application/json'
    }
  })
}

export function createReview(data) {
  return client.post('/reviews', JSON.stringify(data), {
    headers: {
      "Content-Type" : "application/json"
    }
  })
}

export function register(data) {
    return client.post("/auth/signup", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json"
      },
    });
}

  export function login(data) {
    return client.post("/auth/login", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json"
      },
    });
  }

  export function verifyToken(token) {
    return client.get('/auth/verify', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  export function getUserById(userId) {
    return client.get(`/profile/${userId}`)
  }

  export function deleteUser(userId) {
    return client.delete(`/profile/${userId}`)
  }