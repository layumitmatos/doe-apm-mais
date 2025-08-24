import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

// Mock data - em produção viria de uma API baseada no usuário logado
const userDonations = [
  {
    id: 1,
    amount: 150.00,
    date: "2024-01-15",
    status: "confirmada",
  },
  {
    id: 2,
    amount: 85.50,
    date: "2024-01-02",
    status: "confirmada",
  },
  {
    id: 3,
    amount: 200.00,
    date: "2023-12-20",
    status: "confirmada",
  },
  {
    id: 4,
    amount: 120.00,
    date: "2023-12-05",
    status: "confirmada",
  },
  {
    id: 5,
    amount: 95.75,
    date: "2023-11-18",
    status: "confirmada",
  },
];

export default function Donations() {
  const [user, setUser] = useState<any>(null);
  const [isAnonymous, setIsAnonymous] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("apm-user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setIsAnonymous(parsedUser.anonymous);
    }
  }, []);

  const totalDonated = userDonations.reduce((sum, donation) => sum + donation.amount, 0);

  if (isAnonymous) {
    return (
      <div className="min-h-screen bg-background pb-20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">Acesso Restrito</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Esta seção está restrita para usuários identificados. Faça login para visualizar suas doações pessoais.
              Se você não tem um cadastro no nosso app, entre em contato conosco para solicitar um.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-4 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Minhas Doações
          </h1>
          <p className="text-muted-foreground text-sm">
            Veja as doações que você já fez para nossa instituição
          </p>
        </div>

        {/* Resumo */}
        <Card className="bg-apm-donation-green text-white">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 mr-2" />
                <span className="text-sm opacity-90">Total doado</span>
              </div>
              <p className="text-3xl font-bold mb-1">
                R$ {totalDonated.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-xs opacity-75">
                {userDonations.length} doação{userDonations.length !== 1 ? 'ões' : ''} realizada{userDonations.length !== 1 ? 's' : ''}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Doações */}
        <div className="space-y-3">
          {userDonations.map((donation) => (
            <Card key={donation.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-apm-donation-green/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-apm-donation-green" />
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-foreground">Doação realizada</h3>
                        <Badge 
                          variant="secondary"
                          className="bg-apm-donation-green/10 text-apm-donation-green border-apm-donation-green/20"
                        >
                          Confirmada
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(donation.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-apm-donation-green text-lg">
                      R$ {donation.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {userDonations.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-2">Nenhuma doação encontrada</h3>
              <p className="text-sm text-muted-foreground">
                Você ainda não realizou nenhuma doação para nossa instituição.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}