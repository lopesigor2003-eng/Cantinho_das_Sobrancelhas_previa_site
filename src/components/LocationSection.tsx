import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Navigation, Clock, Phone, Copy, Check, ExternalLink, Car, Shield } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `${BUSINESS_INFO.address} (Referência: ${BUSINESS_INFO.reference}), CEP: ${BUSINESS_INFO.cep}, ${BUSINESS_INFO.city}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EADFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EEDFD3] text-[#7E543B] text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Privilegiada em Sinop</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tracking-tight">
            Venha Nos Visitar
          </h2>
          <p className="text-[#695F59] mt-3 text-base">
            Estamos situados na Av. das Figueiras, bem ao ladinho da Unemat, com fácil acesso e tranquilidade para estacionar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Location details card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#EADFD4] flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#935D38]">
                  Endereço Físico
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#242120] mt-1">
                  Cantinho das Sobrancelhas
                </h3>
                <p className="text-sm text-[#4E443F] mt-2 font-medium">
                  {BUSINESS_INFO.address}
                </p>
                <div className="inline-block bg-[#F5ECE3] text-[#7E543B] text-xs font-semibold px-2.5 py-1 rounded-md mt-2">
                  📍 Ponto de referência: {BUSINESS_INFO.reference}
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-2 pt-4 border-t border-[#F0E6DD]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#242120]">
                  <Clock className="w-4 h-4 text-[#935D38]" />
                  <span>Horários de Atendimento</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#5E544F]">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-[#FAF6F2]">
                      <span className="font-medium text-[#242120]">{h.days}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-2 pt-2 text-xs text-[#5E544F]">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#935D38] shrink-0" />
                  <span>Estacionamento facilitado na avenida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#935D38] shrink-0" />
                  <span>Ambiente seguro, climatizado e discreto</span>
                </div>
              </div>
            </div>

            {/* Actions: Copy and Maps link */}
            <div className="space-y-2.5 pt-4 border-t border-[#F0E6DD]">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-open-in-google-maps"
                className="w-full flex items-center justify-center gap-2 bg-[#242120] hover:bg-[#3D3734] text-white py-3.5 rounded-xl font-medium text-sm shadow transition-all"
              >
                <Navigation className="w-4 h-4 text-[#D1A47B]" />
                <span>Traçar Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                onClick={handleCopyAddress}
                id="btn-copy-address"
                className="w-full flex items-center justify-center gap-2 bg-[#F3E8DE] hover:bg-[#EBD9CA] text-[#7E543B] py-2.5 rounded-xl text-xs font-semibold transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Endereço Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Endereço Completo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Map Visual Presentation & Real Facade */}
          <div className="lg:col-span-7 bg-[#EFEAE2] rounded-3xl p-4 sm:p-6 border border-[#E0D3C7] shadow-inner flex flex-col justify-between min-h-[420px]">
            {/* Facade Real Photo Frame */}
            <div className="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden border border-[#D8C9BB] bg-[#242120] shadow-md group">
              <img
                src="/assets/real/foto_fachada_externa.jpg"
                alt="Fachada real do Cantinho das Sobrancelhas na Av. das Figueiras em Sinop"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1716] via-[#1A1716]/30 to-transparent" />

              {/* Badges on photo */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium border border-white/20">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>Fachada Oficial em Sinop - MT</span>
                </div>
                <div className="inline-flex items-center gap-1 bg-[#242120]/80 backdrop-blur-md text-[#D1A47B] text-xs px-3 py-1.5 rounded-full font-bold border border-[#D1A47B]/30">
                  <span>★ 5.0 Google Maps</span>
                </div>
              </div>

              {/* Bottom recognition card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 space-y-2 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#935D38] tracking-wider uppercase">
                    Como identificar nosso estúdio na rua:
                  </span>
                  <span className="text-[11px] text-[#7A6E67] font-medium">
                    Av. das Figueiras, 72
                  </span>
                </div>
                <p className="text-xs text-[#242120] font-medium leading-relaxed">
                  Prédio de 2 pavimentos com sacada de vidro espelhado e painel oficial preto na frente: <strong className="font-semibold text-[#935D38]">Cantinho das Sobrancelhas - Estética & Bem Estar</strong>, bem ao lado do campus da Unemat.
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7E543B] hover:text-[#242120] underline transition-colors"
                  >
                    <span>Abrir rota direta no GPS / Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Estacionamento Fácil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
