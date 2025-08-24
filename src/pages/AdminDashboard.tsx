import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { School, History, UserPlus, LogOut } from "lucide-react";
import logoImage from "@/assets/logo.png";
import { useAdmin } from "@/contexts/AdminContext";
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { adminUser, logoutAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-[#4741A6] text-white p-4">
        <div className="flex items-center justify-center">
          <img src={logoImage} alt="DOE APM Logo" className="h-8 w-auto mr-2" />
          <h1 className="text-xl font-bold">Painel Administrativo</h1>
        </div>
        <div className="flex justify-end mt-2">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-white hover:bg-white/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Welcome */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Bem-vindo, {adminUser?.name}!
          </h2>
          <p className="text-muted-foreground">
            Gerencie as doações e cadastros da APM
          </p>
        </div>

        {/* Admin Options */}
        <div className="grid gap-4 max-w-2xl mx-auto">
          <Card className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate('/admin/history')}>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <History className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Modificar Histórico de Doações</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Visualize, adicione e gerencie todas as transações de entrada e saída da APM. 
                Controle completo sobre o histórico financeiro.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate('/admin/register-donor')}>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Cadastrar um Doador</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adicione novos doadores ao sistema com informações completas. 
                Mantenha um registro organizado de todos os contribuintes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}