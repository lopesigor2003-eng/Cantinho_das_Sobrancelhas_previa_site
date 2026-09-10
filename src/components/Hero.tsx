import React from 'react';
import { Star, MapPin, Calendar, Sparkles, Award, ArrowRight, ShieldCheck, Camera } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeroProps {
  onBookClick: () => void;
  onQuizClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onQuizClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EADFD4]">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EEDFD3]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#F5E6DA]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-[#F3EBE3] border border-[#DFCFC3] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#73503B]">
              <span className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400" />
              </span>
              <span className="font-semibold text-[#242120]">5.0 de Avaliação no Google Maps</span>
              <span className="text-[#A59487]">•</span>
              <span>Sinop / MT</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#242120] leading-[1.15]">
              Realce a beleza do seu olhar com{' '}
              <span className="italic font-normal text-[#935D38] underline decoration-[#DFCFC3] decoration-wavy decoration-1 underline-offset-8">
                naturalidade
              </span>{' '}
              e visagismo exclusivo.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#5E544F] max-w-2xl leading-relaxed">
              O <strong className="font-semibold text-[#242120]">Cantinho das Sobrancelhas</strong> é referência em Sinop em design anatômico, micropigmentação fio a fio hiper-realista, brow lamination e estética facial. Diga adeus às falhas e acorde pronta todos os dias.
            </p>

            {/* Key highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#3E3835]">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#EBD9CA] text-[#7E543B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Mapeamento facial sem afinamentos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#EBD9CA] text-[#7E543B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Materiais 100% descartáveis e ANVISA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#EBD9CA] text-[#7E543B] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Ao lado da Unemat com fácil estacionamento</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#EBD9CA] text-[#7E543B] flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Ambiente climatizado, café e mimos</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onBookClick}
                id="hero-primary-book-btn"
                className="flex items-center justify-center gap-2.5 bg-[#242120] hover:bg-[#3D3734] text-white px-7 py-3.5 rounded-xl font-medium text-base shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5 text-[#D1A47B]" />
                <span>Agendar Meu Horário</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
              </button>

              <button
                onClick={onQuizClick}
                id="hero-quiz-btn"
                className="flex items-center justify-center gap-2 bg-[#F3E8DE] hover:bg-[#EBD9CA] text-[#7E543B] border border-[#DFCFC3] px-6 py-3.5 rounded-xl font-medium text-base transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#B88563]" />
                <span>Descobrir Procedimento Ideal</span>
              </button>
            </div>

            {/* Google Maps quick indicator */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#7A6E67]">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-maps-badge-link"
                className="inline-flex items-center gap-1.5 hover:text-[#242120] transition-colors underline"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Ver localização exata no Google Maps</span>
              </a>
              <span>•</span>
              <span>Av. das Figueiras, 72 - Jardim Imperial</span>
            </div>
          </div>

          {/* Right Column: Visual Composite with Real Google Maps Assets */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with Official Cover Photo from Google Maps */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#EEDFD3]">
                <img
                  src="/assets/real/foto_principal.jpg"
                  alt="Resultado Oficial no Cantinho das Sobrancelhas Sinop - Google Maps"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B19]/85 via-[#1F1B19]/20 to-transparent" />
                
                {/* Official Photo Badge */}
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/20">
                    <Camera className="w-3.5 h-3.5 text-[#D1A47B]" />
                    <span>Foto Oficial no Google Maps</span>
                  </div>
                </div>

                {/* Overlay details */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D1A47B] tracking-wider uppercase mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Micropigmentação Híbrida</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Fio a Fio com Efeito Shadow Line</h3>
                  <p className="text-xs text-stone-200 mt-1">
                    Início em Nano Fios naturais com corpo e cauda aveludados sob ring light.
                  </p>
                </div>
              </div>

              {/* Floating studio facade card with Real Photo */}
              <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md p-2.5 pr-4 rounded-2xl shadow-xl border border-[#EADFD4] max-w-[260px]">
                <img
                  src="/assets/real/foto_fachada_externa.jpg"
                  alt="Fachada oficial do Cantinho das Sobrancelhas Sinop"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <div className="text-xs font-bold text-[#242120] leading-tight">Nosso Prédio em Sinop</div>
                  <div className="text-[10px] text-[#876F5E] mt-0.5">Av. das Figueiras, 72 (ao lado da Unemat)</div>
                </div>
              </div>

              {/* Floating Google Rating Pill */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-[#EADFD4] flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-bold text-base border border-amber-200 shadow-sm">
                  ★ 5.0
                </div>
                <div>
                  <div className="text-xs font-bold text-[#242120] flex items-center gap-1">
                    Nota Máxima no Maps
                  </div>
                  <div className="text-[11px] text-[#7A6E67]">
                    100% avaliações positivas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

