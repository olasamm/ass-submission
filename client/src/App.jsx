import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import LecturerDashboard from './pages/LecturerDashboard';
import AdminPanel from './pages/AdminPanel';
import StudentSignUp from './pages/StudentSignUp';
import LecturerSignUp from './pages/LecturerSignUp';
import StudentSignIn from './pages/StudentSignIn';
import LecturerSignIn from './pages/LecturerSignIn';
import PendingSubmissions from './pages/Instructor/PendingSubmissions';
import GradedAssignments from './pages/Instructor/GradedAssignments';
import CreateAssignment from './pages/Instructor/CreateAssignment';
import UserManagement from './pages/Admin/UserManagement';
import SystemSettings from './pages/Admin/SystemSettings';
import AdminSignIn from './pages/AdminSignIn';

const App = () => {
    return (
        <Routes>
            {/* Landing Page */}
            <Route path="/" element={<LandingPage />} />

            {/* Student Routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/signup" element={<StudentSignUp />} />
            <Route path="/student/signin" element={<StudentSignIn />} />

            {/* Lecturer Routes */}
            <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />
            <Route path="/lecturer/signup" element={<LecturerSignUp />} />
            <Route path="/lecturer/signin" element={<LecturerSignIn />} />
            <Route path="/lecturer/pending-submissions" element={<PendingSubmissions />} />
            <Route path="/lecturer/graded-assignments" element={<GradedAssignments />} />
            <Route path="/lecturer/create-assignment" element={<CreateAssignment />} />

            {/* Admin Routes */}
            <Route path="/admin/signin" element={<AdminSignIn />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/user-management" element={<UserManagement />} />
            <Route path="/admin/system-settings" element={<SystemSettings />} />

            {/* Default Route */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    );
};

export default App;
