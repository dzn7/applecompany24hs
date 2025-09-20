'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Smartphone, Laptop, Tablet, CheckCircle, ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const devices = [
    { icon: Smartphone, name: 'iPhone', position: 'top-20 left-16' },
    { icon: Laptop, name: 'MacBook', position: 'top-32 right-20' },
    { icon: Tablet, name: 'iPad', position: 'bottom-32 left-32' },
  ]

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-apple-blue-50 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {devices.map((device, index) => (
          <div
            key={device.name}
            className={`absolute ${device.position} animate-float`}
            style={{
              animationDelay: `${index * 2}s`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <device.icon className="w-8 h-8 text-apple-blue-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-apple-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-apple-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Badge */}
              <Badge className="bg-apple-blue-100 text-apple-blue-700 border-apple-blue-200 hover:bg-apple-blue-200 transition-colors">
                <Star className="w-4 h-4 mr-2" />
                Assistência Técnica Autorizada Apple
              </Badge>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Assistência{' '}
                  <span className="text-gradient">
                    Apple
                  </span>
                  <br />
                  <span className="text-4xl lg:text-5xl text-gray-600">
                    de confiança
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Especialistas certificados em{' '}
                  <span className="font-semibold text-apple-blue-600">Mac, iPhone e iPad</span>.
                  Atendimento 24 horas com qualidade Apple original.
                </p>
              </div>

              {/* Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Técnicos Certificados Apple',
                  'Peças Originais Garantidas',
                  'Atendimento 24 Horas',
                  'Diagnóstico Gratuito'
                ].map((feature, index) => (
                  <div 
                    key={feature}
                    className="flex items-center space-x-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="apple-gradient text-white hover:shadow-xl hover:shadow-apple-blue-500/25 transition-all duration-300 group"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-apple-blue-200 text-apple-blue-700 hover:bg-apple-blue-50 hover:border-apple-blue-300 transition-all duration-300"
                >
                  Ver Serviços
                </Button>
              </div>

              {/* Social proof */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-apple-blue-600">500+</div>
                    <div className="text-sm text-gray-500">Clientes Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-apple-blue-600">98%</div>
                    <div className="text-sm text-gray-500">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-apple-blue-600">24h</div>
                    <div className="text-sm text-gray-500">Atendimento</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual content */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-white/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Entre em Contato
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-apple-blue-50 rounded-xl border border-apple-blue-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-apple-blue-900">WhatsApp</div>
                          <div className="text-apple-blue-700">(86) 98146-4559</div>
                        </div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="font-semibold text-gray-900">Instagram</div>
                      <div className="text-gray-700">@applecompany24hs</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="font-semibold text-gray-900">Endereço</div>
                      <div className="text-gray-700 text-sm">Avenida Dom Severino, 1430<br />Teresina 64049375</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-apple-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-apple-blue-600/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
