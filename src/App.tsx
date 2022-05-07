import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
//   const [authenticated, setAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
};

export default App;
