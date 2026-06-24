import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PrivacyPolicy from "./components/MainSection/PrivacyPolicy";
import TermsConditions from "./components/MainSection/TermsConditions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route
        path="/terms-and-conditions"
        element={<TermsConditions />}
      />
    </Routes>
  );
}