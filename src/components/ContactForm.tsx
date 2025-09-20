"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function ContactForm() {
  const [device, setDevice] = useState("")
  const [model, setModel] = useState("")
  const [issue, setIssue] = useState("")
  const [notes, setNotes] = useState("")

  const whatsappNumber = "5586981464559"

  const iphoneModels = [
    "iPhone 11", "iPhone 11 Pro", "iPhone 12", "iPhone 12 Pro", "iPhone 13", "iPhone 13 Pro",
    "iPhone 14", "iPhone 14 Pro", "iPhone 15", "iPhone 15 Pro", "iPhone SE (3ª geração)", "Outro"
  ]
  const macbookModels = [
    "MacBook Air (M1)", "MacBook Air (M2)", "MacBook Air (M3)",
    "MacBook Pro 13" , "MacBook Pro 14", "MacBook Pro 16", "Outro"
  ]
  const ipadModels = [
    "iPad 9ª geração", "iPad 10ª geração", "iPad Air", "iPad mini", "iPad Pro 11", "iPad Pro 12.9", "Outro"
  ]
  const watchModels = ["Series 6", "Series 7", "Series 8", "Series 9", "Ultra", "Outro"]

  const modelOptions = device === "iPhone"
    ? iphoneModels
    : device === "MacBook"
    ? macbookModels
    : device === "iPad"
    ? ipadModels
    : device === "Apple Watch"
    ? watchModels
    : []

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const parts = [
      device && `Dispositivo: ${device}`,
      model && `Modelo: ${model}`,
      issue && `Problema: ${issue}`,
      notes && `Observações: ${notes}`,
    ].filter(Boolean)

    const text = encodeURIComponent(parts.join("\n"))
    const url = `https://wa.me/${whatsappNumber}?text=${text || encodeURIComponent("Olá! Gostaria de um orçamento.")}`
    window.open(url, "_blank")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card bg-white/60 rounded-3xl shadow-apple-lg border-0 p-6 sm:p-8 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 bg-white/30 rounded-full blur-3xl" />
        <h4 className="text-2xl font-bold text-gray-900 mb-6">Descreva seu atendimento</h4>
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Dispositivo */}
          <div className="space-y-2">
            <label htmlFor="device" className="block text-sm font-medium text-gray-700">Dispositivo</label>
            <select
              id="device"
              value={device}
              onChange={(e) => { setDevice(e.target.value); setModel("") }}
              className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-apple-blue-300 focus:border-apple-blue-300 transition shadow-sm"
              required
            >
              <option value="" disabled>Selecione</option>
              <option>iPhone</option>
              <option>MacBook</option>
              <option>iPad</option>
              <option>Apple Watch</option>
              <option>AirPods</option>
              <option>Outro</option>
            </select>
          </div>

          {/* Modelo (dinâmico) */}
          {modelOptions.length > 0 && (
            <div className="space-y-2">
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">Modelo</label>
              <select
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-apple-blue-300 focus:border-apple-blue-300 transition shadow-sm"
                required
              >
                <option value="" disabled>Selecione</option>
                {modelOptions.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>
          )}

          {/* Problema */}
          <div className="space-y-2">
            <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Problema</label>
            <select
              id="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-apple-blue-300 focus:border-apple-blue-300 transition shadow-sm"
              required
            >
              <option value="" disabled>Selecione</option>
              <option>Tela quebrada</option>
              <option>Bateria descarregando</option>
              <option>Não liga</option>
              <option>Dano por líquido</option>
              <option>Lento / travamentos</option>
              <option>Outro</option>
            </select>
          </div>

          {/* Observações */}
          <div className="space-y-2">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Observações</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Ex.: quando o problema começou, outros detalhes."
              className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-apple-blue-300 focus:border-apple-blue-300 transition shadow-sm resize-y"
            />
          </div>

          <Button type="submit" variant="ios" size="pill" className="w-full text-base flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Enviar no WhatsApp
          </Button>
        </form>
      </div>
    </div>
  )
}
