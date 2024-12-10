import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ApplyForLoan from "../pages/loan/components/LoanApplication";
import UserDashboard from "../pages/dashboard/customer/UserDashboard";

const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/login" element={<Login />} />
			<Route path="/apply-for-loan" element={<ApplyForLoan />} />
			<Route path="/user-dashboard" element={<UserDashboard />} />

			{/* Add additional routes here */}
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;
