import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { School, Plus, ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface Transaction {
  id: string;
  type: 'entrada' | 'saida';
  date: string;
  value: number;
  observation: string;
  responsible: string;
}

export default function AdminHistory() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<'entrada' | 'saida' | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'entrada',
      date: '2024-01-15',
      value: 500.00,
      observation: 'Doação mensal família Silva',
      responsible: 'Maria Silva'
    },
    {
      id: '2',
      type: 'saida',
      date: '2024-01-10',
      value: 300.00,
      observation: 'Compra de material escolar',
      responsible: 'João Santos'
    }
  ]);

  const [formData, setFormData] = useState({
    date: '',
    value: '',
    observation: '',
    responsible: ''
  });

  const currentBalance = transactions.reduce((acc, transaction) => {
    return transaction.type === 'entrada' 
      ? acc + transaction.value 
      : acc - transaction.value;
  }, 0);

  const handleTypeSelection = (type: 'entrada' | 'saida') => {
    setSelectedType(type);
    setFormData({ date: '', value: '', observation: '', responsible: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: selectedType!,
      date: formData.date,
      value: parseFloat(formData.value),
      observation: formData.observation,
      responsible: formData.responsible
    };

    setTransactions(prev => [newTransaction, ...prev]);
    setIsDialogOpen(false);
    setSelectedType(null);
    setFormData({ date: '', value: '', observation: '', responsible: '' });
    
    toast({
      title: "Transação adicionada!",
      description: `${selectedType === 'entrada' ? 'Doação' : 'Depósito'} de R$ ${formData.value} registrado com sucesso.`
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/admin/dashboard')}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <div className="flex items-center">
            <School className="w-6 h-6 mr-2" />
            <h1 className="text-xl font-bold">Histórico de Doações</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Veja nossas arrecadações e como elas serão usadas
          </h2>
        </div>

        {/* Balance Card */}
        <Card className="max-w-sm mx-auto">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary">
              R$ {currentBalance.toFixed(2)}
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Saldo atual
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Atualizado em {new Date().toLocaleDateString('pt-BR')}
            </div>
          </CardContent>
        </Card>

        {/* Add Transaction Button */}
        <div className="flex justify-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setSelectedType(null)}>
                <Plus className="w-4 h-4 mr-2" />
                Nova Operação
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {selectedType ? 
                    `Adicionar ${selectedType === 'entrada' ? 'Doação' : 'Depósito'}` : 
                    'Selecionar Tipo de Operação'
                  }
                </DialogTitle>
              </DialogHeader>
              
              {!selectedType ? (
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => handleTypeSelection('entrada')}
                    className="h-20 flex-col"
                  >
                    <TrendingUp className="w-6 h-6 mb-2 text-apm-donation-green" />
                    Entrada
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleTypeSelection('saida')}
                    className="h-20 flex-col"
                  >
                    <TrendingDown className="w-6 h-6 mb-2 text-primary" />
                    Saída
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Data</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="value">Valor</Label>
                    <Input
                      id="value"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={formData.value}
                      onChange={(e) => setFormData(prev => ({ ...prev, value: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="observation">Observação</Label>
                    <Textarea
                      id="observation"
                      placeholder="Descreva a transação..."
                      value={formData.observation}
                      onChange={(e) => setFormData(prev => ({ ...prev, observation: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="responsible">
                      {selectedType === 'entrada' ? 'Doador' : 'Responsável pelo Depósito'}
                    </Label>
                    <Input
                      id="responsible"
                      type="text"
                      placeholder={selectedType === 'entrada' ? 'Nome do doador' : 'Nome do responsável'}
                      value={formData.responsible}
                      onChange={(e) => setFormData(prev => ({ ...prev, responsible: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" onClick={() => setSelectedType(null)}>
                      Voltar
                    </Button>
                    <Button type="submit" className="flex-1">
                      Adicionar
                    </Button>
                  </div>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Transactions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Transações</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Responsável</TableHead>
                  <TableHead>Observação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <Badge 
                        variant={transaction.type === 'entrada' ? 'default' : 'secondary'}
                        className={transaction.type === 'entrada' 
                          ? 'bg-apm-donation-green text-white' 
                          : 'bg-primary text-primary-foreground'
                        }
                      >
                        {transaction.type === 'entrada' ? 'Doação' : 'Depósito'}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(transaction.date).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell className={transaction.type === 'entrada' ? 'text-apm-donation-green font-semibold' : 'text-primary font-semibold'}>
                      {transaction.type === 'entrada' ? '+' : '-'}R$ {transaction.value.toFixed(2)}
                    </TableCell>
                    <TableCell>{transaction.responsible}</TableCell>
                    <TableCell className="max-w-xs truncate">{transaction.observation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}