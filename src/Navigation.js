import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import TripsList from "./pages/TripsList"
import Register from "./pages/Register"
import Login from "./pages/Login"
import TripDetails from "./pages/TripDetails"
import TripCreate from "./pages/TripCreate"
import TripUpdate from "./pages/TripUpdate"
import ReviewCreate from "./pages/ReviewCreate"
import IsPrivate from "./components/IsPrivate"

export default function Navigation () {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<TripsList />} />
        <Route path="/trips/:tripId" element={<IsPrivate> <TripDetails /> </IsPrivate>} />
        <Route path="/trips/new" element={ <IsPrivate> <TripCreate /> </IsPrivate>} />
        <Route path="/trips/:tripId/edit" element={ <IsPrivate> <TripUpdate /> </IsPrivate>} />
        <Route path="/reviews/new" element={<IsPrivate><ReviewCreate /></IsPrivate>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
}