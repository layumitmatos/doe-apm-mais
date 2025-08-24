import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import logoImage from "@/assets/logo.png";
import img1Image from "@/assets/img1.png";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    document: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.document) {
      localStorage.setItem("apm-user", JSON.stringify(formData));
      toast({
        title: "Login realizado com sucesso!",
        description: `Bem-vindo(a), ${formData.fullName}`,
      });
      navigate("/");
    } else {
      toast({
        title: "Erro no login",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
    }
  };

  const handleAnonymousLogin = () => {
    localStorage.setItem("apm-user", JSON.stringify({ anonymous: true }));
    toast({
      title: "Acesso anônimo",
      description: "Você está navegando de forma anônima",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-apm-light-blue via-white to-apm-primary/10">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left side - Login Form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Holla, Welcome Back
              </h2>
              <p className="text-muted-foreground">
                Hey, welcome back to your special place
              </p>
            </div>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium">Nome Completo</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="h-12 px-4 rounded-lg border-gray-200 focus:border-apm-primary focus:ring-apm-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 px-4 rounded-lg border-gray-200 focus:border-apm-primary focus:ring-apm-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="document" className="text-sm font-medium">Documento (CPF)</Label>
                    <Input
                      id="document"
                      type="text"
                      placeholder="Digite seu CPF"
                      value={formData.document}
                      onChange={(e) => setFormData({ ...formData, document: e.target.value })}
                      className="h-12 px-4 rounded-lg border-gray-200 focus:border-apm-primary focus:ring-apm-primary"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-apm-primary hover:bg-apm-primary/90 text-white rounded-lg font-medium"
                  >
                    Sign In
                  </Button>
                </form>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">Ou</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full h-12 border-gray-200 hover:bg-gray-50 rounded-lg"
                  onClick={handleAnonymousLogin}
                >
                  Entrar sem me identificar
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Don't have an account? <span className="text-apm-primary cursor-pointer hover:underline">Sign Up</span>
                </p>
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
                alt="Education Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="space-y-4 text-white">
              <h3 className="text-2xl font-bold">
                Bem-vindo ao DOE APM!
              </h3>
              <p className="text-lg opacity-90 max-w-md mx-auto">
                Gerencie suas doações de forma fácil e rápida
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