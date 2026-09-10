import React from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Phone, Star, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D1A19] text-[#EDE7E1] pt-16 pb-12 border-t border-[#332E2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2E2927]">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#8A5636] text-white flex items-center justify-center font-serif text-lg font-bold">
                CS
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Cantinho das Sobrancelhas
              </span>
            </div>
            <p className="text-xs text-[#A89C94] leading-relaxed">
              Estúdio de beleza e visagismo facial em Sinop - MT. Especialista em micropigmentação fio a fio, brow lamination, design personalizado e estética facial.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>5.0 Estrelas no Google Maps</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D1A47B]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#A89C94]">
              <li>
                <a href="#procedimentos" className="hover:text-white transition-colors">
                  Procedimentos & Preços
                </a>
              </li>
              <li>
                <a href="#antes-depois" className="hover:text-white transition-colors">
                  Antes e Depois Interativo
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações das Clientes
                </a>
              </li>
              <li>
                <a href="#galeria-real" className="hover:text-white transition-colors">
                  Galeria de Fotos Reais
                </a>
              </li>
              <li>
                <a href="#ambiente" className="hover:text-white transition-colors">
                  Nosso Espaço & Ambiente
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização & Como Chegar
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Location details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D1A47B]">
              Endereço em Sinop
            </h4>
            <p className="text-xs text-[#A89C94] leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D1A47B] shrink-0 mt-0.5" />
              <span>
                {BUSINESS_INFO.address}
                <br />
                <span className="text-[#877970]">Referência: {BUSINESS_INFO.reference}</span>
                <br />
                CEP: {BUSINESS_INFO.cep} • Sinop - MT
              </span>
            </p>
            <div className="pt-1">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D1A47B] hover:text-white transition-colors underline"
              >
                <span>Ver rota no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D1A47B]">
              Contato & Agendamento
            </h4>
            <p className="text-xs text-[#A89C94] flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D1A47B] shrink-0" />
              <a
                href={`tel:${BUSINESS_INFO.whatsappRaw}`}
                className="hover:text-white transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </p>
            <div className="pt-2 text-xs text-[#A89C94] space-y-1">
              <div className="font-semibold text-white">Horário de Atendimento:</div>
              <div>Segunda a Sexta: 08:00 às 18:30</div>
              <div>Sábado: 08:00 às 17:00</div>
              <div>Domingo: Fechado</div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D7068]">
          <p>
            © {new Date().getFullYear()} Cantinho das Sobrancelhas Sinop - MT. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com carinho para valorizar a beleza feminina</span>
            <Heart className="w-3.5 h-3.5 text-[#D1A47B] fill-[#D1A47B]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
