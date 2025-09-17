import { Slideshow } from "@/components/Slideshow";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Mail, Phone } from "lucide-react";
import appImage from "@/assets/app.png";
import logoImage from "@/assets/logo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-apm-light-blue to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-apm-light-blue to-apm-primary shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <img src={logoImage} alt="DOE APM Logo" className=" h-13 w-auto" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-foreground leading-tight">
              Bem-vindo à nossa APM
            </h1>
            <p className="text-xl text-muted-foreground">
              Associação de Pais e Mestres - Transformando a educação juntos
            </p>

          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Slideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Conheça nossa APM
            </h2>
            <p className="text-xl text-muted-foreground">
              Entenda como trabalhamos para melhorar a educação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-apm-light-blue/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-apm-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-apm-primary" />
                </div>
                <CardTitle className="text-2xl text-apm-primary">O que é a APM?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-center">
                  A Associação de Pais e Mestres é uma organização que une famílias e educadores
                  para melhorar a qualidade da educação em nossa escola. Trabalhamos juntos para
                  proporcionar um ambiente de aprendizado ainda melhor para nossos alunos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-apm-light-blue/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-apm-donation-green/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-apm-donation-green" />
                </div>
                <CardTitle className="text-2xl text-apm-primary">Como suas doações ajudam</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-center">
                  Suas contribuições são fundamentais para melhorias na infraestrutura,
                  aquisição de materiais didáticos, equipamentos tecnológicos e realização
                  de atividades extracurriculares que enriquecem a experiência educacional.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-apm-light-blue/50">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 rounded-full bg-apm-accent/10 flex items-center justify-center mx-auto mb-4">
                  <img src={appImage} alt="App DOE APM" className="w-16 h-16 object-contain" />
                </div>
                <CardTitle className="text-2xl text-apm-primary">O que você encontra no app</CardTitle>
              </CardHeader>
              <CardContent>
<CardDescription className="text-base leading-relaxed px-8">
  <ul className="list-disc list-inside text-left mx-auto w-fit">
    <li>Acompanhe suas doações pessoais</li>
    <li>Visualize o histórico completo de arrecadações</li>
    <li>Veja como os recursos são utilizados</li>
    <li>Mantenha-se informado sobre nossas atividades</li>
  </ul>
</CardDescription>

                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-gray-200 text-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Entre em contato conosco</h3>
            <p className="text-xl">
              Estamos sempre disponíveis para esclarecer suas dúvidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Mail className="w-8 h-8 text-[#4741A6]" />
              <div className="text-left">
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-700">contato@doeapm.edu.br</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-[#4741A6]" />
              <div className="text-left">
                <h4 className="text-lg font-semibold">Telefone</h4>
                <p className="text-gray-700">(11) 9999-9999</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600">
            © 2024 DOE APM. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}