import { Slideshow } from "@/components/Slideshow";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { School, Users, Heart, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center justify-center mb-4">
          <School className="w-8 h-8 mr-3" />
          <h1 className="text-3xl font-bold">DOE APM</h1>
        </div>
        <Slideshow />
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Bem-vindo à nossa APM
          </h2>
          <p className="text-muted-foreground">
            Associação de Pais e Mestres - Transformando a educação juntos
          </p>
        </div>

        {/* Admin Access Button */}
        <div className="mb-6">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10">
            <CardContent className="p-4">
              <Button 
                onClick={() => window.location.href = '/admin/auth'}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Sou membro da APM
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">O que é a APM?</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                A Associação de Pais e Mestres é uma organização que une famílias e educadores 
                para melhorar a qualidade da educação em nossa escola. Trabalhamos juntos para 
                proporcionar um ambiente de aprendizado ainda melhor para nossos alunos.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-apm-donation-green/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-apm-donation-green" />
                </div>
                <div>
                  <CardTitle className="text-lg">Como suas doações ajudam</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Suas contribuições são fundamentais para melhorias na infraestrutura, 
                aquisição de materiais didáticos, equipamentos tecnológicos e realização 
                de atividades extracurriculares que enriquecem a experiência educacional.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">O que você encontra no app</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                • Acompanhe suas doações pessoais{"\n"}
                • Visualize o histórico completo de arrecadações{"\n"}
                • Veja como os recursos são utilizados{"\n"}
                • Mantenha-se informado sobre nossas atividades
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}