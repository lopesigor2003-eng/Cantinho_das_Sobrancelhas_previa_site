import React from 'react';
import { 
  Building2, 
  MapPin, 
  Wind, 
  ShieldCheck, 
  Coffee, 
  Sparkles, 
  Clock, 
  Car, 
  ExternalLink, 
  Calendar,
  MessageCircle,
  Eye
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface StudioAmbienceSectionProps {
  onBookClick?: () => void;
}

export const StudioAmbienceSection: React.FC<StudioAmbienceSectionProps> = ({ onBookClick }) => {
  const mapsExteriorUrl = "https://www.google.com.br/maps/place/Cantinho+das+Sobrancelhas+Sinop/@-11.8506733,-55.5146282,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDK_uzEwwE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWnlD3UN43TCOKS4sybsB687u64wi5FKG0-IrdVS3yEyIO4fjiz7tjTf-HRwOAxCbx3kfrfUYC6Qhh371d2T9cINsS1WdfXUdaKJcL6xSa7i0tW35jms8wLGMvScivR3_unTy783Ow%3Dw203-h151-k-no!7i1280!8i958!4m7!3m6!1s0x93a77feb96f926c9:0xb3a83d6e299b1e7!8m2!3d-11.8505865!4d-55.5146024!10e5!16s%2Fg%2F11h0mdkk4k?entry=ttu";

  const handleWhatsAppAmbience = () => {
    const msg = `Olá! Gostaria de agendar um horário no estúdio Cantinho das Sobrancelhas (Av. das Figueiras, Sinop). Quais são os próximos dias disponíveis?`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const ambienceHighlights = [
    {
      icon: Wind,
      title: 'Ambiente 100% Climatizado',
      description: 'Temperatura agradável e constante o ano inteiro, um verdadeiro refúgio fresco e relaxante contra o calor de Sinop.'
    },
    {
      icon: ShieldCheck,
      title: 'Biossegurança & Descartáveis',
      description: 'Materiais 100% descartáveis e esterilizados a cada atendimento: lâminas anatômicas lacradas, lençóis, luvas e máscaras cirúrgicas.'
    },
    {
      icon: Clock,
      title: 'Atendimento Exclusivo & Pontual',
      description: 'Sem salas lotadas ou esperas cansativas. Atendimento individualizado com hora marcada, garantindo privacidade e total atenção.'
    },
    {
      icon: Eye,
      title: 'Maca Ergonômica & Ring Light',
      description: 'Conforto para cabeça e coluna durante todo o procedimento, com iluminação profissional de alta precisão cromática para visagismo perfeito.'
    },
    {
      icon: Coffee,
      title: 'Cantinho do Café & Boas-Vindas',
      description: 'Recepção acolhedora com café quentinho, água gelada, chás e biscoitinhos para você relaxar e aproveitar seu momento de autocuidado.'
    },
    {
      icon: Car,
      title: 'Estacionamento Fácil na Avenida',
      description: 'Localização privilegiada e segura na Av. das Figueiras, 72 (ao lado da Unemat), com ampla facilidade para estacionar seu veículo.'
    }
  ];

  return (
    <section id="ambiente" className="py-16 sm:py-24 bg-[#FAF6F2] border-b border-[#EADFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EBD9CA] text-[#7E543B] text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#935D38]" />
            <span>Nosso Estúdio • Sinop - MT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tracking-tight">
            Conheça Nosso Espaço & Ambiente
          </h2>
          <p className="text-[#695F59] mt-3 text-base sm:text-lg leading-relaxed">
            Localizado no Jardim Imperial, ao lado da Unemat, nosso estúdio foi planejado nos mínimos detalhes para proporcionar conforto térmico, biossegurança e uma experiência relaxante de bem-estar.
          </p>
        </div>

        {/* Main Grid: External Photo Showcase + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Prominent External Facade Photo from Google Maps */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-[#E8DCD1] relative group overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#242120]">
                <img
                  src="/assets/real/foto_fachada_externa.jpg"
                  alt="Fachada oficial externa do Cantinho das Sobrancelhas Sinop na Av. das Figueiras"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium border border-white/20">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>Fachada Oficial no Google Maps</span>
                  </span>
                  <span className="bg-[#D1A47B] text-[#242120] text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    Sinop - MT
                  </span>
                </div>

                {/* Bottom photo overlay caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight drop-shadow-md">
                    Cantinho das Sobrancelhas - Estética & Bem Estar
                  </h3>
                  <p className="text-xs text-stone-200">
                    Av. das Figueiras, 72 - Jardim Imperial • Bem ao lado da Unemat
                  </p>
                </div>
              </div>

              {/* Photo Footer Bar with Maps Link */}
              <div className="p-3 sm:p-4 bg-[#FAF7F2] rounded-xl mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-[#EFE5DC]">
                <div className="text-xs text-[#544B45]">
                  <span className="font-bold text-[#242120]">Prédio de 2 andares com sacada</span> e painel oficial na calçada para fácil identificação.
                </div>
                <a
                  href={mapsExteriorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="link-foto-externa-maps"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#845638] hover:text-[#242120] underline transition-colors whitespace-nowrap"
                >
                  <span>Ver no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Location Alert */}
            <div className="bg-[#EFE8DF] p-4 rounded-2xl border border-[#DFD1C4] flex items-center gap-3 text-xs text-[#524741]">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#935D38] shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-[#242120] block">Ponto de Referência Fácil:</strong>
                Fica na mesma avenida do campus da Unemat em Sinop, com calçadão amplo e vagas tranquilas para estacionar.
              </div>
            </div>
          </div>

          {/* Right: Environment & Care Features ("ambiente e tals") */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#845638] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Uma experiência pensada para você relaxar</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242120]">
                O seu momento de pausa, beleza e autocuidado
              </h3>
              <p className="text-sm text-[#5E544F] leading-relaxed">
                Mais do que fazer sobrancelhas e cílios, oferecemos um refúgio acolhedor onde você pode desacelerar da correria diária, deitar-se confortavelmente e sair renovada com a autoestima lá no alto.
              </p>
            </div>

            {/* Grid of Ambience Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ambienceHighlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-4 rounded-2xl border border-[#E8DCD1] shadow-sm hover:border-[#D1A47B] transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-[#935D38] font-bold text-xs sm:text-sm">
                      <div className="w-7 h-7 rounded-lg bg-[#FAF4ED] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="leading-snug">{item.title}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#6E635C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {onBookClick ? (
                <button
                  onClick={onBookClick}
                  id="btn-ambience-book"
                  className="flex items-center justify-center gap-2 bg-[#242120] hover:bg-[#3D3734] text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4 text-[#D1A47B]" />
                  <span>Agendar Horário no Estúdio</span>
                </button>
              ) : (
                <a
                  href="#agendamento"
                  id="link-ambience-book"
                  className="flex items-center justify-center gap-2 bg-[#242120] hover:bg-[#3D3734] text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4 text-[#D1A47B]" />
                  <span>Agendar Horário no Estúdio</span>
                </a>
              )}

              <button
                onClick={handleWhatsAppAmbience}
                id="btn-ambience-whatsapp"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar pelo WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
