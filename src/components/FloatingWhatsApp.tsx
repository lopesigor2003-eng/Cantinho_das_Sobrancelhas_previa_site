import React, { useState } from 'react';
import { MessageCircle, X, Calendar, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface FloatingWhatsAppProps {
  onBookClick: () => void;
  onQuizClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onBookClick, onQuizClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Quick Action Menu */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-[#E0D3C7] p-4 text-[#242120] animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0E6DD]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-[#242120]">Cantinho das Sobrancelhas</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8A796F] hover:text-[#242120]"
              aria-label="Fechar menu rápido"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#5E544F] my-2.5">
            Olá! Como podemos te ajudar hoje em Sinop?
          </p>

          <div className="space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="w-full text-left p-2.5 rounded-xl bg-[#FAF6F2] hover:bg-[#F2E8DF] text-xs font-semibold text-[#242120] flex items-center gap-2 border border-[#E8DCD1] transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#935D38]" />
              <span>Agendar horário no estúdio</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onQuizClick();
              }}
              className="w-full text-left p-2.5 rounded-xl bg-[#FAF6F2] hover:bg-[#F2E8DF] text-xs font-semibold text-[#242120] flex items-center gap-2 border border-[#E8DCD1] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#935D38]" />
              <span>Descobrir procedimento ideal</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de conversar com a equipe do Cantinho das Sobrancelhas Sinop!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold text-emerald-800 flex items-center gap-2 border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Conversar agora no WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left p-2.5 rounded-xl bg-[#FAF6F2] hover:bg-[#F2E8DF] text-xs font-semibold text-[#695F59] flex items-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Ver localização no Maps</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-trigger"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
        aria-label="Atendimento no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[10px] font-bold text-white items-center justify-center">
            1
          </span>
        </span>
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
};
