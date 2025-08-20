import { Home, History, User, Heart } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { 
    icon: Home, 
    label: "Início", 
    path: "/" 
  },
  { 
    icon: History, 
    label: "Histórico", 
    path: "/history" 
  },
  { 
    icon: Heart, 
    label: "Doações", 
    path: "/donations" 
  },
  { 
    icon: User, 
    label: "Perfil", 
    path: "/profile" 
  },
];

export const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/login") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navigationItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={cn(
                "flex flex-col items-center py-2 px-3 rounded-lg transition-colors min-w-0",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-xs font-medium truncate">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};