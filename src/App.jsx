import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestLayout from "./pages/test-layout";
import TestSelect from "./pages/test-select";
import TestLayoutForm from "./pages/text-layout-form";
import Navbar from "./components/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/test-layout" element={<TestLayout />} />
          <Route path="/test-select" element={<TestSelect />} />
          <Route path="/test-layout-form" element={<TestLayoutForm />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
