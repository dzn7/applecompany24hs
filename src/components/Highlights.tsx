"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Camera, Cpu, Sparkles, ArrowRight } from "lucide-react"

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-24 bg-gradient-to-b from-white to-apple-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Novidades que você sente no dia a dia
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Recursos poderosos com design refinado e fluido — inspirados na experiência iOS.
          </p>
        </div>

        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="mx-auto">
            <TabsTrigger value="privacy">Privacidade</TabsTrigger>
            <TabsTrigger value="photo">Fotografia</TabsTrigger>
            <TabsTrigger value="intelligence">Inteligência</TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="mt-10">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card bg-white/60 border-0 shadow-apple-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-apple-blue-100 text-apple-blue-700 flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Privacidade de Ponta</CardTitle>
                  <CardDescription>
                    Controles claros e transparentes. Seus dados sempre sob seu controle.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Permissões granulares e notificações claras</li>
                    <li>• Processamento local sempre que possível</li>
                    <li>• Transparência sobre coleta e uso de dados</li>
                  </ul>
                  <Button variant="outline" className="border-apple-blue-200 text-apple-blue-700 hover:bg-apple-blue-50">
                    Saiba mais
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card bg-white/60 border-0 shadow-apple-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Relatórios de Privacidade</CardTitle>
                  <CardDescription>
                    Visualize de forma simples como os apps acessam seus dados.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50">
                    <div className="text-sm text-gray-500">Acessos a Localização</div>
                    <div className="text-2xl font-bold text-gray-900">Baixos</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50">
                    <div className="text-sm text-gray-500">Coleta de Dados</div>
                    <div className="text-2xl font-bold text-gray-900">Mínima</div>
                  </div>
                  <div className="col-span-2">
                    <Button className="apple-gradient text-white w-full group">
                      Ver detalhes
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="photo" className="mt-10">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card bg-white/60 border-0 shadow-apple-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-apple-blue-100 text-apple-blue-700 flex items-center justify-center">
                    <Camera className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Fotos Incríveis</CardTitle>
                  <CardDescription>
                    Ajustes inteligentes e processamento de imagem com fidelidade.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Modo Retrato com recorte suave</li>
                    <li>• Inteligência de cena para cores naturais</li>
                    <li>• Redução de ruído com mais detalhes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card bg-white/60 border-0 shadow-apple-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Memórias</CardTitle>
                  <CardDescription>
                    Reviva seus melhores momentos de um jeito elegante e fluido.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div className="text-gray-700">Crie coleções e compartilhe com facilidade.</div>
                  <Button variant="outline" className="border-apple-blue-200 text-apple-blue-700 hover:bg-apple-blue-50">
                    Explorar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="intelligence" className="mt-10">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card bg-white/60 border-0 shadow-apple-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-apple-blue-100 text-apple-blue-700 flex items-center justify-center">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Mais Inteligente</CardTitle>
                  <CardDescription>
                    Sugestões úteis, no momento certo, sem atrapalhar.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Sparkles className="w-5 h-5 text-apple-blue-600" />
                    <span>Resumos e ações rápidas no seu fluxo.</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Sparkles className="w-5 h-5 text-apple-blue-600" />
                    <span>Resultados contextuais com privacidade.</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card bg-white/60 border-0 shadow-apple-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Produtividade</CardTitle>
                  <CardDescription>
                    Ferramentas que economizam tempo sem abrir mão de controle.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div className="text-gray-700">Gerencie tarefas e comunicações com fluidez.</div>
                  <Button className="apple-gradient text-white">
                    Começar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
