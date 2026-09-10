import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/servicesData';
import { Calendar as CalendarIcon, Clock, User, Phone, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

interface BookingSectionProps {
  selectedServiceIds: string[];
  onToggleServiceId: (id: string) => void;
  presetNotes?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceIds,
  onToggleServiceId,
  presetNotes = '',
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  
  // Calculate default date (tomorrow or next business day)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState(defaultDateStr);
  const [timeSlot, setTimeSlot] = useState('14:30');
  const [notes, setNotes] = useState(presetNotes);
  const [isCopied, setIsCopied] = useState(false);

  const morningSlots = ['08:30', '09:30', '10:30', '11:15'];
  const afternoonSlots = ['13:30', '14:30', '15:30', '16:30', '17:15'];

  const selectedServices = SERVICES.filter((s) => selectedServiceIds.includes(s.id));
  const serviceNames = selectedServices.length > 0 
    ? selectedServices.map((s) => s.name).join(' + ')
    : 'Design Personalizado com Visagismo';

  const totalPrice = selectedServices.reduce((acc, curr) => acc + curr.priceNum, 0);

  // Format date display (ex: Sexta-feira, 12 de Setembro)
  const formattedDate = (() => {
    try {
      const [year, month, day] = date.split('-').map(Number);
      const d = new Date(year, month - 1, day);
      return d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    } catch {
      return date;
    }
  })();

  const generateWhatsAppMessage = () => {
    const lines = [
      `*Olá, Cantinho das Sobrancelhas Sinop!* 🌸`,
      `Gostaria de agendar um horário com vocês:`,
      ``,
      `✨ *Procedimento(s):* ${serviceNames}`,
      `📅 *Data desejada:* ${formattedDate}`,
      `⏰ *Horário sugerido:* ${timeSlot}`,
      `👤 *Nome:* ${clientName.trim() || 'A informar'}`,
      `📱 *WhatsApp:* ${clientPhone.trim() || 'A informar'}`,
    ];

    if (notes.trim()) {
      lines.push(`📝 *Observação:* ${notes.trim()}`);
    }

    lines.push(``);
    lines.push(`Podem me confirmar a disponibilidade para esse dia? Obrigada!`);

    return lines.join('\n');
  };

  const handleSendBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="agendamento" className="py-16 sm:py-24 bg-[#FAF6F2] border-b border-[#EADFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EBD9CA] text-[#7E543B] text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium mb-3">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Agendamento Rápido & Sem Espera</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tracking-tight">
            Agende Seu Horário Online
          </h2>
          <p className="text-[#695F59] mt-3 text-base">
            Personalize seu atendimento em Sinop. Escolha os procedimentos, seu melhor dia e envie a confirmação direta para nossa equipe no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#EADFD4]">
            <form onSubmit={handleSendBooking} className="space-y-6">
              {/* 1. Procedimento Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#242120] mb-2">
                  1. Procedimentos Selecionados
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {SERVICES.slice(0, 6).map((service) => {
                    const active = selectedServiceIds.includes(service.id);
                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => onToggleServiceId(service.id)}
                        id={`book-toggle-${service.id}`}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          active
                            ? 'bg-[#935D38] text-white border-[#935D38] font-medium'
                            : 'bg-[#FAF8F5] text-[#544A44] border-[#E2D4C8] hover:border-[#935D38]'
                        }`}
                      >
                        {service.name}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-[#7A6E67]">
                  💡 Clique nos nomes acima para adicionar ou remover do seu agendamento.
                </p>
              </div>

              {/* 2. Client details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#242120] mb-1.5">
                    Seu Nome Completo
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8A796F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Gabriela Santos"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      id="input-client-name"
                      className="w-full bg-[#FAF8F5] border border-[#DFCFC3] rounded-xl pl-10 pr-3.5 py-2.5 text-sm focus:outline-none focus:border-[#935D38] text-[#242120]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#242120] mb-1.5">
                    Seu WhatsApp com DDD
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8A796F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="Ex: (66) 99999-9999"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      id="input-client-phone"
                      className="w-full bg-[#FAF8F5] border border-[#DFCFC3] rounded-xl pl-10 pr-3.5 py-2.5 text-sm focus:outline-none focus:border-[#935D38] text-[#242120]"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Date and Time Slot */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#242120] mb-1.5">
                    Data Desejada
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    id="input-booking-date"
                    className="w-full bg-[#FAF8F5] border border-[#DFCFC3] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#935D38] text-[#242120]"
                  />
                  <span className="text-[11px] text-[#7A6E67] mt-1 block capitalize">
                    {formattedDate}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#242120] mb-1.5">
                    Horário Preferencial
                  </label>
                  <div className="space-y-2">
                    <div className="text-[11px] text-[#8A796F] font-semibold">Período da Manhã:</div>
                    <div className="grid grid-cols-4 gap-2">
                      {morningSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setTimeSlot(slot)}
                          id={`timeslot-${slot}`}
                          className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                            timeSlot === slot
                              ? 'bg-[#242120] text-white border-[#242120]'
                              : 'bg-[#FAF8F5] text-[#3E3835] border-[#E2D4C8] hover:border-[#935D38]'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    <div className="text-[11px] text-[#8A796F] font-semibold mt-2">Período da Tarde:</div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {afternoonSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setTimeSlot(slot)}
                          id={`timeslot-${slot}`}
                          className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                            timeSlot === slot
                              ? 'bg-[#242120] text-white border-[#242120]'
                              : 'bg-[#FAF8F5] text-[#3E3835] border-[#E2D4C8] hover:border-[#935D38]'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#242120] mb-1.5">
                  Observação / Informação Extra (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Tenho micropigmentação antiga; é para formatura; etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  id="input-booking-notes"
                  className="w-full bg-[#FAF8F5] border border-[#DFCFC3] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#935D38] text-[#242120]"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                id="btn-submit-booking-whatsapp"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 rounded-xl font-bold text-base shadow-md transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirmar e Enviar no WhatsApp Oficial</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-[#7A6E67]">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Atendimento rápido e confirmação com a equipe em Sinop.</span>
              </div>
            </form>
          </div>

          {/* Right Column: Live WhatsApp Message Preview */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#EFEAE2] rounded-3xl p-6 border border-[#E0D3C7] shadow-inner">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#695F59]">
                  <Sparkles className="w-4 h-4 text-[#935D38]" />
                  <span>Prévia da sua Mensagem</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  id="btn-copy-msg"
                  className="text-xs text-[#7E543B] hover:text-[#242120] font-semibold underline"
                >
                  {isCopied ? 'Copiado!' : 'Copiar texto'}
                </button>
              </div>

              {/* Chat Bubble Simulation */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5D8CC] text-xs font-mono text-[#242120] whitespace-pre-wrap leading-relaxed">
                {generateWhatsAppMessage()}
              </div>

              {/* Studio Contact Information Card */}
              <div className="mt-5 pt-4 border-t border-[#DEC4AF] space-y-2 text-xs text-[#5E544F]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Endereço:</strong> Av. das Figueiras, 72 - Jardim Imperial (ao lado da Unemat)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Formas de Pagamento:</strong> PIX, Débito e Cartão de Crédito em até 12x</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ambiente:</strong> Sala com ar-condicionado, Wi-Fi e café especial</span>
                </div>
              </div>
            </div>

            {/* Direct Call Pill */}
            <div className="bg-white p-4 rounded-2xl border border-[#EADFD4] flex items-center justify-between gap-3 shadow-sm">
              <div>
                <div className="text-xs font-bold text-[#242120]">Prefere ligar diretamente?</div>
                <div className="text-xs text-[#7A6E67]">Atendimento comercial de Seg a Sáb</div>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.whatsappRaw}`}
                className="bg-[#242120] text-white px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-[#3D3734] transition-colors shrink-0"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
