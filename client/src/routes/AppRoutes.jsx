import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Books from "../pages/Books/Books";
import AddBook from "../pages/Books/AddBook";
import Members from "../pages/Members/Members";
import AddMember from "../pages/Members/AddMember";
import IssueReturn from "../pages/IssueReturn/IssueReturn";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/add" element={<AddMember />} />
        <Route path="/issue-return" element={<IssueReturn />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;