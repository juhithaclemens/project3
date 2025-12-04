import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RediscoverPage from "./pages/RediscoverPage/RediscoverPage";
import ConnectedPage from "./pages/ConnectedPage/ConnectedPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/rediscover" replace />} />
        <Route path="/rediscover" element={<RediscoverPage />} />
        <Route path="/connected" element={<ConnectedPage />} />
      </Routes>
    </Router>
  );
}

export default App;


