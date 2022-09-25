import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import TripsList from "./pages/TripsList"
import Register from "./pages/Register"

export default function Navigation () {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<TripsList />} />
        <Route path="/signup" element={<Register />} />
    </Routes>
}