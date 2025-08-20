import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDownLeft, ArrowUpRight, Clock } from "lucide-react";

// Mock data - em produção viria de uma API
const transactions = [
  {
    id: 1,
    type: "entrada",
    title: "Doação",
    amount: 150.00,
    date: "2024-01-15",
    donor: "Maria Silva Santos",
    observation: "Doação para reforma da biblioteca",
  },
  {
    id: 2,
    type: "saida",
    title: "Depósito",
    amount: 500.00,
    date: "2024-01-14",
    responsible: "João Carlos - Diretor",
    observation: "Compra de materiais didáticos",
  },
  {
    id: 3,
    type: "entrada",
    title: "Doação",
    amount: 85.50,
    date: "2024-01-12",
    donor: "Ana Paula Costa",
    observation: "Contribuição mensal",
  },
  {
    id: 4,
    type: "saida",
    title: "Depósito",
    amount: 750.00,
    date: "2024-01-10",
    responsible: "Pedro Oliveira - Tesoureiro",
    observation: "Manutenção dos equipamentos de informática",
  },
  {
    id: 5,
    type: "entrada",
    title: "Doação",
    amount: 200.00,
    date: "2024-01-08",
    donor: "Carlos Roberto Lima",
    observation: "Doação para festa junina",
  },
];

const currentBalance = 2847.50;
const lastUpdate = "15/01/2024 às 14:30";

export default function History() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-4 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Histórico de Arrecadações
          </h1>
          <p className="text-muted-foreground text-sm">
            Veja nossas arrecadações e como elas serão usadas
          </p>
        </div>

        {/* Saldo */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm opacity-90 mb-1">Saldo atual</p>
              <p className="text-3xl font-bold mb-2">
                R$ {currentBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <div className="flex items-center justify-center text-xs opacity-75">
                <Clock className="w-3 h-3 mr-1" />
                Atualizado em {lastUpdate}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transações */}
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <Card key={transaction.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === "entrada" 
                        ? "bg-apm-donation-green/10" 
                        : "bg-apm-deposit-blue/10"
                    }`}>
                      {transaction.type === "entrada" ? (
                        <ArrowDownLeft className={`w-5 h-5 ${
                          transaction.type === "entrada" 
                            ? "text-apm-donation-green" 
                            : "text-apm-deposit-blue"
                        }`} />
                      ) : (
                        <ArrowUpRight className={`w-5 h-5 ${
                          transaction.type === "entrada" 
                            ? "text-apm-donation-green" 
                            : "text-apm-deposit-blue"
                        }`} />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-foreground">{transaction.title}</h3>
                        <Badge 
                          variant="secondary"
                          className={
                            transaction.type === "entrada" 
                              ? "bg-apm-donation-green/10 text-apm-donation-green border-apm-donation-green/20" 
                              : "bg-apm-deposit-blue/10 text-apm-deposit-blue border-apm-deposit-blue/20"
                          }
                        >
                          {transaction.type === "entrada" ? "Doação" : "Depósito"}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">
                        {transaction.observation}
                      </p>
                      
                      <div className="text-xs text-muted-foreground">
                        <p>{new Date(transaction.date).toLocaleDateString('pt-BR')}</p>
                        {transaction.donor && <p>Doador: {transaction.donor}</p>}
                        {transaction.responsible && <p>Responsável: {transaction.responsible}</p>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`font-bold ${
                      transaction.type === "entrada" 
                        ? "text-apm-donation-green" 
                        : "text-apm-deposit-blue"
                    }`}>
                      {transaction.type === "entrada" ? "+" : "-"}R$ {transaction.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}