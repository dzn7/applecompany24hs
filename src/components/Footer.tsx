import Image from 'next/image'
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Clock, 
  Mail,
  Smartphone,
  Laptop,
  Tablet,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const services = [
    { name: 'Reparo de iPhone', icon: Smartphone },
    { name: 'Reparo de MacBook', icon: Laptop },
    { name: 'Reparo de iPad', icon: Tablet }
  ]

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5586981464559',
      icon: MessageCircle,
      color: 'hover:text-green-500'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/applecompany24hs',
      icon: Instagram,
      color: 'hover:text-pink-500'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-apple-blue-500/30">
                <Image
                  src="/logo.png"
                  alt="Apple Company 24hs"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Apple Company <span className="text-apple-blue-400">24hs</span>
                </h3>
                <p className="text-gray-400 text-sm">Assistência Técnica Apple</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Especialistas certificados em reparo de dispositivos Apple. 
              Oferecemos serviços de alta qualidade com peças originais e garantia, 
              sempre com o melhor atendimento 24 horas.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-apple-blue-400 flex-shrink-0" />
                <span className="text-sm">
                  Avenida Dom Severino, 1430 - Teresina, PI
                </span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <MessageCircle className="w-5 h-5 text-apple-blue-400 flex-shrink-0" />
                <span className="text-sm">(86) 98146-4559</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-apple-blue-400 flex-shrink-0" />
                <span className="text-sm">Segunda - Sábado: 8h às 18h | WhatsApp 24h</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 ${social.color} hover:bg-gray-700 group`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Nossos Serviços
            </h4>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.name} className="flex items-center space-x-3 text-gray-300 hover:text-apple-blue-400 transition-colors">
                  <service.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{service.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-3">Também atendemos:</p>
              <p className="text-sm text-gray-500">Dispositivos Android selecionados</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Links Rápidos
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-apple-blue-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
              <p className="text-xs text-gray-400">
                Atendimento via WhatsApp disponível 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Apple Company 24hs. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Assistência Técnica Especializada Apple</span>
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>Peças Originais</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>Garantia Completa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5586981464559"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow group"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
