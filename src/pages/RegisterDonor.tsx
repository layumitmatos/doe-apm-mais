import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, UserPlus } from "lucide-react";
import logoImage from "@/assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

export default function RegisterDonor() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    document: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de cadastro
    setTimeout(() => {
      toast({
        title: "Doador cadastrado com sucesso!",
        description: `${formData.name} foi adicionado ao sistema.`
      });
      
      setFormData({ name: '', email: '', document: '' });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-[#4741A6] text-white p-4">
        <div className="flex items-center justify-center">
          <img src={logoImage} alt="DOE APM Logo" className="h-8 w-auto mr-2" />
          <h1 className="text-xl font-bold">Cadastrar Doador</h1>
        </div>
        <div className="flex justify-start mt-2">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/admin/dashboard')}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl text-primary">Novo Doador</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite o nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite o email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="document">Documento (CPF/CNPJ)</Label>
                <Input
                  id="document"
                  type="text"
                  placeholder="Digite o CPF ou CNPJ"
                  value={formData.document}
                  onChange={(e) => setFormData(prev => ({ ...prev, document: e.target.value }))}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Cadastrando..." : "Cadastrar Doador"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}