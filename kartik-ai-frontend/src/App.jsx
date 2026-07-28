import { Routes, Route } from "react-router-dom";

import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import Projects from "@/pages/admin/Projects";
import Skills from "@/pages/admin/Skills";

import AdminLayout from "@/pages/admin/AdminLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/admin/login" element={<Login />} />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        {/* 

        <Route path="experience" element={<Experience />} />

        <Route path="resume" element={<Resume />} />

        <Route path="messages" element={<Messages />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
