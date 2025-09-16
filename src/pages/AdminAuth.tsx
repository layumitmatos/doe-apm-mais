import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAdmin } from "@/contexts/AdminContext";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import logoImage from "@/assets/logo.png";
import img1Image from "@/assets/img1.png";

export default function AdminAuth() {
  const { loginAdmin } = useAdmin();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await loginAdmin(loginData.email, loginData.password);
    if (success) {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao painel administrativo"
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: "Erro no login",
        description: "Email ou senha incorretos",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-apm-light-blue via-white to-apm-primary/10">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left side - Login Form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Área Administrativa
              </h2>
              <p className="text-muted-foreground">
                Acesse o painel de controle da APM
              </p>
            </div>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="h-12 px-4 rounded-lg border-gray-200 focus:border-apm-primary focus:ring-apm-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Digite sua senha"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="h-12 px-4 rounded-lg border-gray-200 focus:border-apm-primary focus:ring-apm-primary"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-[#729DF2] hover:bg-[#729DF2]/90 text-white rounded-lg font-medium"
                  >
                    Entrar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-apm-light-blue to-apm-primary/20 relative overflow-hidden">
          <div className="absolute top-8 left-8">
            <img src={logoImage} alt="DOE APM Logo" className="h-16 w-auto" />
          </div>
          
          <div className="text-center space-y-8 z-10">
            <div className="relative mx-auto w-96 h-96">
              <img 
                src={img1Image} 
                alt="Admin Panel Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="space-y-4 text-white">
              <h3 className="text-2xl font-bold">
                Painel Administrativo
              </h3>
              <p className="text-lg opacity-90 max-w-md mx-auto">
                Gerencie doações e cadastros com facilidade
              </p>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-apm-accent/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
