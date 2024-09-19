import { Route, Routes } from "react-router";
import Pages from "./components";
import AppBar from "./components/appbar/AppBar";
import "./App.css";

function App() {
  return (
    <>
    <AppBar />
    <Routes>
      <Route index element={<Pages.Home />} />
      <Route path="/pricing" element={<Pages.Pricing />} />
      <Route path="/services" element={<Pages.Services />} />
      <Route path="/contact" element={<Pages.Contact />} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/signup" element={<Pages.Signup />} />
      <Route path="/forgot-password" element={<Pages.ForgotPassword />} />
    </Routes>
    </>
  );
}

export default App;
