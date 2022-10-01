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
import TripsPublic from "./pages/TripsPublic"
import TripsCompleted from "./pages/TripsCompleted"
import TripsPlanned from "./pages/TripsPlanned"
import Profile from "./pages/Profile"
import IsAnon from "./components/IsAnon"

export default function Navigation () {
    return <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/trips" element={<TripsList show=""/>} /> */}
        <Route path="/trips" element={<TripsList/>} />
        <Route path="/trips/public" element={<TripsPublic />} />
        <Route path="/trips/completed" element={<TripsCompleted />} />
        <Route path="/trips/planned" element={<TripsPlanned />} />
        <Route path="/trips/:tripId" element={<IsPrivate> <TripDetails /> </IsPrivate>} />
        <Route path="/trips/new" element={ <IsPrivate> <TripCreate /> </IsPrivate>} />
        <Route path="/trips/:tripId/edit" element={ <IsPrivate> <TripUpdate /> </IsPrivate>} />
        <Route path="/reviews/new" element={<IsPrivate><ReviewCreate /></IsPrivate>} />
        <Route path="/signup" element={<IsAnon><Register /></IsAnon>} />
        <Route path="/login" element={<IsAnon><Login /></IsAnon>} />
        <Route path="/profile/:userId" element={<Profile />} />
    </Routes>
}