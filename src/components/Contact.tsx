'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram,
  ExternalLink,
  Send
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    device: '',
    problem: '',
    phone: ''
  })

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Atendimento 24 horas',
      value: '(86) 98146-4559',
      action: 'Chamar no WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
      href: 'https://wa.me/5586981464559'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Siga nosso perfil',
      value: '@applecompany24hs',
      action: 'Seguir no Instagram',
      color: 'bg-pink-500 hover:bg-pink-600',
      href: 'https://instagram.com/applecompany24hs'
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Ligue diretamente',
      value: '(86) 98146-4559',
      action: 'Ligar Agora',
      color: 'bg-blue-500 hover:bg-blue-600',
      href: 'tel:+5586981464559'
    }
  ]

  const businessHours = [
    { day: 'Segunda - Sexta', hours: '8:00 - 18:00' },
    { day: 'Sábado', hours: '8:00 - 16:00' },
    { day: 'Domingo', hours: 'WhatsApp 24h' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento:\n\n` +
      `Nome: ${formData.name}\n` +
      `Dispositivo: ${formData.device}\n` +
      `Problema: ${formData.problem}\n` +
      `Telefone: ${formData.phone}`
    )
    
    window.open(`https://wa.me/5586981464559?text=${message}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-apple-blue-100 text-apple-blue-700 border-apple-blue-200">
            <MessageCircle className="w-4 h-4 mr-2" />
            Entre em Contato
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Pronto para
            <span className="text-gradient"> Ajudar Você</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco através do WhatsApp, Instagram ou venha nos visitar pessoalmente. Estamos aqui para resolver qualquer problema do seu dispositivo Apple.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${method.color.split(' ')[0]} rounded-lg flex items-center justify-center`}>
                            <method.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{method.title}</div>
                            <div className="text-sm text-gray-600">{method.description}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="font-mono text-apple-blue-600 mb-4">
                        {method.value}
                      </div>
                      
                      <Button 
                        className={`w-full ${method.color} text-white transition-all duration-300`}
                        onClick={() => window.open(method.href, '_blank')}
                      >
                        {method.action}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-apple-blue-600" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-semibold text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-800">WhatsApp disponível 24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Solicite seu Orçamento
                </CardTitle>
                <p className="text-gray-600">
                  Preencha o formulário e receba uma resposta rápida via WhatsApp
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Digite seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="device" className="block text-sm font-semibold text-gray-900 mb-2">
                      Dispositivo *
                    </label>
                    <select
                      id="device"
                      name="device"
                      required
                      value={formData.device}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecione seu dispositivo</option>
                      <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                      <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                      <option value="iPhone 15">iPhone 15</option>
                      <option value="iPhone 14 Pro Max">iPhone 14 Pro Max</option>
                      <option value="iPhone 14 Pro">iPhone 14 Pro</option>
                      <option value="iPhone 14">iPhone 14</option>
                      <option value="iPhone 13 Pro Max">iPhone 13 Pro Max</option>
                      <option value="iPhone 13 Pro">iPhone 13 Pro</option>
                      <option value="iPhone 13">iPhone 13</option>
                      <option value="MacBook Air M2">MacBook Air M2</option>
                      <option value="MacBook Pro M2">MacBook Pro M2</option>
                      <option value="MacBook Air M1">MacBook Air M1</option>
                      <option value="MacBook Pro M1">MacBook Pro M1</option>
                      <option value="iPad Pro">iPad Pro</option>
                      <option value="iPad Air">iPad Air</option>
                      <option value="iPad">iPad</option>
                      <option value="Outro iPhone">Outro iPhone</option>
                      <option value="Outro Mac">Outro Mac</option>
                      <option value="Outro iPad">Outro iPad</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="problem" className="block text-sm font-semibold text-gray-900 mb-2">
                      Descreva o Problema *
                    </label>
                    <textarea
                      id="problem"
                      name="problem"
                      required
                      rows={4}
                      value={formData.problem}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Descreva detalhadamente qual o problema do seu dispositivo..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full apple-gradient text-white hover:shadow-xl hover:shadow-apple-blue-500/25 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border-gray-200 shadow-lg mt-8">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-apple-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-apple-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visite Nossa Loja</h4>
                    <p className="text-sm text-gray-600">Atendimento presencial de segunda a sábado</p>
                  </div>
                </div>
                
                <div className="text-gray-700">
                  <p className="font-medium">Avenida Dom Severino, 1430</p>
                  <p>Teresina - PI, CEP: 64049-375</p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="mt-4 border-apple-blue-200 text-apple-blue-700 hover:bg-apple-blue-50"
                  onClick={() => window.open('https://maps.google.com/?q=Avenida+Dom+Severino+1430+Teresina', '_blank')}
                >
                  Ver no Google Maps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
