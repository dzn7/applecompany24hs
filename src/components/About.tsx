'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Award, 
  Users, 
  Clock, 
  ShieldCheck, 
  Star, 
  CheckCircle2,
  MapPin,
  Calendar
} from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Clientes Atendidos',
      description: 'Dispositivos reparados com sucesso'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Avaliação Média',
      description: 'Baseado em avaliações reais'
    },
    {
      icon: Clock,
      number: '2h',
      label: 'Tempo Médio',
      description: 'Para reparos simples'
    },
    {
      icon: Award,
      number: '5+',
      label: 'Anos de Experiência',
      description: 'Especialização em produtos Apple'
    }
  ]

  const certifications = [
    {
      title: 'Certificação Apple',
      description: 'Técnicos certificados pela Apple para reparo de dispositivos',
      icon: ShieldCheck,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Peças Originais',
      description: 'Utilizamos apenas peças originais Apple com garantia',
      icon: CheckCircle2,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Atendimento 24h',
      description: 'Suporte técnico disponível 24 horas via WhatsApp',
      icon: Clock,
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-apple-blue-100 text-apple-blue-700 border-apple-blue-200">
            <Award className="w-4 h-4 mr-2" />
            Sobre Nós
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Especialistas
            <span className="text-gradient"> Certificados Apple</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma assistência técnica especializada em produtos Apple, oferecendo serviços de alta qualidade com garantia e peças originais.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Por que escolher a Apple Company 24hs?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-apple-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-apple-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Técnicos Especializados</h4>
                    <p className="text-gray-600">Nossa equipe possui certificação oficial Apple e anos de experiência em reparos de dispositivos iOS e macOS.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-apple-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-apple-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Qualidade Garantida</h4>
                    <p className="text-gray-600">Utilizamos apenas peças originais Apple e oferecemos garantia em todos os nossos serviços realizados.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-apple-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-apple-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Atendimento Diferenciado</h4>
                    <p className="text-gray-600">Disponibilidade 24 horas via WhatsApp e atendimento personalizado para cada cliente e dispositivo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-apple-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-apple-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Nossa Localização</h4>
                  <p className="text-sm text-gray-600">Fácil acesso no centro de Teresina</p>
                </div>
              </div>
              
              <div className="text-gray-700">
                <p className="font-medium">Avenida Dom Severino, 1430</p>
                <p>Teresina - PI, CEP: 64049-375</p>
              </div>
              
              <div className="flex items-center space-x-2 mt-3 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Segunda a Sábado: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-apple-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-apple-blue-600" />
                    </div>
                    
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    
                    <div className="font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Certificações e Diferenciais
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossos diferenciais que garantem a qualidade e confiança dos nossos serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${cert.color} flex items-center justify-center mx-auto mb-6`}>
                    <cert.icon className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {cert.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
