import { Routes, Route } from "react-router-dom";

// Admin
import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import Projects from "@/pages/admin/Projects";
import Skills from "@/pages/admin/Skills";
import Experience from "@/pages/admin/Experience";
import Resume from "@/pages/admin/Resume";
import Messages from "./pages/admin/Message";

import AdminLayout from "@/pages/admin/AdminLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

// Client
import Home from "@/pages/client/Home";
import ProfileSection from "@/pages/admin/components/profile/ProfileSection";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      {/* Admin */}
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="profile" element={<ProfileSection />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />

        <Route path="experience" element={<Experience />} />

        <Route path="resume" element={<Resume />} />

        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
}

export default App;
