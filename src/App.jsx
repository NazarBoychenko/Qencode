import { Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage.jsx";
import CreateNewPasswordPage from "./pages/CreateNewPasswordPage/CreateNewPasswordPage.jsx";
import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
        />
        <Route
            path="/create-password"
            element={<CreateNewPasswordPage />}
        />
      </Routes>
  );
}

export default App
