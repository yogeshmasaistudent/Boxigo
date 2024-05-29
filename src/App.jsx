import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MyMoves from "./pages/MyMoves";
import MyProfile from "./pages/MyProfile";
import GetRequest from "./pages/GetRequest";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          {/* <Navbar /> */}
          <div className="p-4">
            <Routes>
              <Route path="/my-moves" element={<MyMoves />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/get-request" element={<GetRequest />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/" element={<MyMoves />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
