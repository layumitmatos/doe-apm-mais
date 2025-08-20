import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BottomNavigation } from "@/components/BottomNavigation";
import { AuthGuard } from "@/components/AuthGuard";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminProvider } from "@/contexts/AdminContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Home from "./pages/Home";
import History from "./pages/History";
import Donations from "./pages/Donations";
import Profile from "./pages/Profile";
import AdminAuth from "./pages/AdminAuth";
import AdminDashboard from "./pages/AdminDashboard";
import AdminHistory from "./pages/AdminHistory";
import RegisterDonor from "./pages/RegisterDonor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            {/* Admin routes */}
            <Route path="/admin/auth" element={<AdminAuth />} />
            <Route path="/admin/dashboard" element={
              <AdminGuard>
                <AdminDashboard />
              </AdminGuard>
            } />
            <Route path="/admin/history" element={
              <AdminGuard>
                <AdminHistory />
              </AdminGuard>
            } />
            <Route path="/admin/register-donor" element={
              <AdminGuard>
                <RegisterDonor />
              </AdminGuard>
            } />
            
            {/* Public routes with AuthGuard */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <AuthGuard>
                <div className="relative">
                  <Home />
                  <BottomNavigation />
                </div>
              </AuthGuard>
            } />
            <Route path="/history" element={
              <AuthGuard>
                <div className="relative">
                  <History />
                  <BottomNavigation />
                </div>
              </AuthGuard>
            } />
            <Route path="/donations" element={
              <AuthGuard>
                <div className="relative">
                  <Donations />
                  <BottomNavigation />
                </div>
              </AuthGuard>
            } />
            <Route path="/profile" element={
              <AuthGuard>
                <div className="relative">
                  <Profile />
                  <BottomNavigation />
                </div>
              </AuthGuard>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
