'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Smartphone, 
  Laptop, 
  Tablet, 
  Battery, 
  Monitor, 
  Wrench, 
  Shield, 
  Clock, 
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      category: 'iPhone',
      icon: Smartphone,
      color: 'bg-gradient-to-br from-gray-900 to-gray-700',
      services: [
        'Troca de tela e touch',
        'Substituição de bateria',
        'Reparo de placa lógica',
        'Câmera e flash',
        'Alto-falante e microfone',
        'Botões e conectores'
      ],
      popular: true
    },
    {
      category: 'MacBook',
      icon: Laptop,
      color: 'bg-gradient-to-br from-gray-200 to-gray-400',
      services: [
        'Tela Retina e LCD',
        'Teclado e trackpad',
        'Bateria e carregador',
        'SSD e memória RAM',
        'Placa lógica',
        'Sistema operacional'
      ],
      popular: false
    },
    {
      category: 'iPad',
      icon: Tablet,
      color: 'bg-gradient-to-br from-gray-100 to-gray-300',
      services: [
        'Display e digitalizador',
        'Botão home e Touch ID',
        'Bateria interna',
        'Câmeras frontal/traseira',
        'Auto-falantes',
        'Conectores de carga'
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      icon: Battery,
      title: 'Diagnóstico Completo',
      description: 'Análise detalhada do seu dispositivo Apple para identificar problemas.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Monitor,
      title: 'Limpeza e Manutenção',
      description: 'Limpeza interna, troca de pasta térmica e otimização de performance.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Shield,
      title: 'Proteção e Acessórios',
      description: 'Capas, películas e acessórios originais Apple para proteger seu device.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Clock,
      title: 'Atendimento 24h',
      description: 'Suporte técnico disponível 24 horas por dia via WhatsApp.',
      color: 'text-orange-600 bg-orange-100'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-apple-blue-100 text-apple-blue-700 border-apple-blue-200">
            <Wrench className="w-4 h-4 mr-2" />
            Nossos Serviços
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Especialistas em
            <span className="text-gradient"> Produtos Apple</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos reparo completo para todos os dispositivos Apple com garantia e peças originais.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.category} 
              className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-apple-blue-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-apple-blue-500 text-white">
                    Mais Procurado
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {service.category}
                </CardTitle>
                
                <CardDescription className="text-gray-600">
                  Reparo especializado para {service.category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'apple-gradient text-white hover:shadow-lg hover:shadow-apple-blue-500/25' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-all duration-300`}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Serviços Adicionais
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Além dos reparos, oferecemos uma gama completa de serviços para manter seus dispositivos sempre funcionando perfeitamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Android Services - Less Prominent */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Também atendemos Android
              </h4>
              
              <p className="text-gray-600 mb-4 max-w-md mx-auto">
                Oferecemos serviços básicos de reparo para dispositivos Android selecionados.
              </p>
              
              <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
                Consultar Disponibilidade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Services
