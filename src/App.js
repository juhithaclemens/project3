import RediscoverPage from "./pages/RediscoverPage/RediscoverPage";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


<Route path="/" element={<Navigate to="/rediscover" replace />} />


function App() {
  return <RediscoverPage />;
}

export default App;
