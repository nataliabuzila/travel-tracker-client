import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import TripsList from "./pages/TripsList"
import Register from "./pages/Register"
import TripDetails from "./pages/TripDetails"
import TripCreate from "./components/TripCreate"

export default function Navigation () {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<TripsList />} />
        <Route path="/trips/:tripId" element={<TripDetails />} />
        <Route path="/trips/new" element={<TripCreate />} />
        <Route path="/signup" element={<Register />} />
    </Routes>
}