import { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  isAdminAuthenticated: boolean;
  adminUser: { name: string; email: string } | null;
  loginAdmin: (email: string, password: string, name?: string) => Promise<boolean>;
  logoutAdmin: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState<{ name: string; email: string } | null>(null);

  const loginAdmin = async (email: string, password: string, name?: string) => {
    // Simulação de login - aceita qualquer email/senha
    if (email && password) {
      setIsAdminAuthenticated(true);
      setAdminUser({ 
        name: name || email.split('@')[0], 
        email 
      });
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    setAdminUser(null);
  };

  return (
    <AdminContext.Provider value={{
      isAdminAuthenticated,
      adminUser,
      loginAdmin,
      logoutAdmin
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}