import Image from 'next/image'
import { Instagram } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden pt-16 md:pt-20">
      <Header />

      {/* Hero Section */}
      <section id="home" className="py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Assistência <span className="text-blue-600">Apple</span>
            <br />
            <span className="text-4xl text-gray-600">de confiança</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Especialistas certificados em Mac, iPhone e iPad. 
            Atendimento 24 horas com qualidade Apple original.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Button asChild variant="ios" size="pill">
              <a href="https://wa.me/5586981464559">Solicitar Orçamento</a>
            </Button>
            <Button asChild variant="outline" size="pill" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              <a href="#services">Ver Serviços</a>
            </Button>
          </div>

          {/* Services Grid */}
          <div id="services" className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card card-sheen bg-white/60 p-8 rounded-3xl shadow-apple-lg hover-lift animate-fade-in-up relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl" />
              <div className="mb-6">
                <div className="relative h-40 rounded-2xl border border-white/50 bg-gradient-to-br from-white/70 to-white/40 overflow-hidden shadow-inner">
                  <Image src="/iphone.png" alt="iPhone" fill className="object-contain p-4" priority />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">iPhone</h3>
              <p className="text-gray-600 mb-6">Reparo completo para todos os modelos de iPhone</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Troca de tela e touch</li>
                <li>• Substituição de bateria</li>
                <li>• Reparo de placa lógica</li>
                <li>• Câmera e componentes</li>
              </ul>
            </div>

            <div className="glass-card card-sheen bg-white/60 p-8 rounded-3xl shadow-apple-lg hover-lift animate-fade-in-up relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl" />
              <div className="mb-6">
                <div className="relative h-40 rounded-2xl border border-white/50 bg-gradient-to-br from-white/70 to-white/40 overflow-hidden shadow-inner">
                  <Image src="/mac.png" alt="MacBook" fill className="object-contain p-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">MacBook</h3>
              <p className="text-gray-600 mb-6">Assistência especializada para MacBook</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Tela Retina e LCD</li>
                <li>• Teclado e trackpad</li>
                <li>• Bateria e carregador</li>
                <li>• SSD e memória RAM</li>
              </ul>
            </div>

            <div className="glass-card card-sheen bg-white/60 p-8 rounded-3xl shadow-apple-lg hover-lift animate-fade-in-up relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl" />
              <div className="mb-6">
                <div className="relative h-40 rounded-2xl border border-white/50 bg-gradient-to-br from-white/70 to-white/40 overflow-hidden shadow-inner">
                  <Image src="/ipad.png" alt="iPad" fill className="object-contain p-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">iPad</h3>
              <p className="text-gray-600 mb-6">Reparo especializado para iPad</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Display e digitalizador</li>
                <li>• Botão home e Touch ID</li>
                <li>• Bateria interna</li>
                <li>• Câmeras e componentes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white/80 glass-effect">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Entre em Contato</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-green-50 rounded-xl hover-lift animate-fade-in-up">
              <h4 className="font-bold text-green-900 mb-2">WhatsApp</h4>
              <p className="text-green-700 mb-4">(86) 98146-4559</p>
              <Button asChild variant="ios" size="pill" className="bg-green-500 hover:bg-green-600">
                <a href="https://wa.me/5586981464559" className="flex items-center gap-2">
                  <FaWhatsapp className="w-4 h-4" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl hover-lift animate-fade-in-up">
              <h4 className="font-bold text-gray-900 mb-2">Instagram</h4>
              <p className="text-gray-700 mb-4">@applecompany24hs</p>
              <Button asChild variant="outline" size="pill" className="border-gray-300 text-gray-800 hover:bg-gray-100">
                <a href="https://instagram.com/applecompany24hs" className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  Seguir no Instagram
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-bold text-gray-900 mb-2">Localização</h4>
            <p className="text-gray-700">Avenida Dom Severino, 1430 - Teresina, PI</p>
            <p className="text-sm text-gray-600 mt-2">Segunda a Sábado: 8h às 18h | WhatsApp 24h</p>
          </div>

          {/* Formulário de contato */}
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-effect bg-white/70 text-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-apple-blue-500/20">
              <Image
                src="/logo.png"
                alt="Apple Company 24hs"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Apple Company <span className="text-apple-blue-600">24hs</span>
            </span>
          </div>
          <p className="text-gray-600 mb-2">
            Assistência Técnica Especializada Apple • Peças originais • Garantia
          </p>
          <p className="text-sm text-gray-500 mb-6">© 2024 Apple Company 24hs</p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild variant="outline" size="pill" className="border-gray-300 text-gray-800 hover:bg-gray-100">
              <a href="https://wa.me/5586981464559" className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="pill" className="border-gray-300 text-gray-800 hover:bg-gray-100">
              <a href="https://instagram.com/applecompany24hs" className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5586981464559"
          title="Entre em contato via WhatsApp"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all drop-shadow-xl animate-bounce-gentle"
        >
          <FaWhatsapp className="w-7 h-7" />
        </a>
      </div>
    </main>
  );
}
