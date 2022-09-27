import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import TripsList from "./pages/TripsList"
import Register from "./pages/Register"
import Login from "./pages/Login"
import TripDetails from "./pages/TripDetails"
import TripCreate from "./pages/TripCreate"
import TripUpdate from "./pages/TripUpdate"
import ReviewCreate from "./pages/ReviewCreate"

export default function Navigation () {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<TripsList />} />
        <Route path="/trips/:tripId" element={<TripDetails />} />
        <Route path="/trips/new" element={<TripCreate />} />
        <Route path="/trips/:tripId/edit" element={<TripUpdate />} />
        <Route path="/reviews/new" element={<ReviewCreate />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
}