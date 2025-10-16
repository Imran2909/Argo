import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/Admin";
import TripDetails from "./pages/TripDetails";
import Payment from "./pages/Payment";
import ConfirmBooking from "./pages/ConfirmBooking";
import Ticket from "./pages/Ticket";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  palette: {
    primary: { main: "#1976d2" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      
      <Router>
        <div
          className="App"
          style={{
            width: "100vw",
            minHeight: "100vh",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/trip-details" element={<TripDetails />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/confirm-booking" element={<ConfirmBooking />} />
              <Route path="/ticket" element={<Ticket/>} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
