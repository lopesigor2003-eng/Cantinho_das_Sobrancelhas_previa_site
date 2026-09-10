import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Calendar, Menu, X, Sparkles, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeaderProps {
  onBookClick: () => void;
  onQuizClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, onQuizClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute live open status for Sinop (America/Cuiaba UTC-4)
  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        // Sinop is UTC-4 (same as Cuiabá)
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const sinopTime = new Date(utc + 3600000 * -4);
        const day = sinopTime.getDay(); // 0 = Sun, 6 = Sat
        const hour = sinopTime.getHours();
        const minute = sinopTime.getMinutes();
        const currentTimeInMinutes = hour * 60 + minute;

        if (day === 0) {
          // Sunday closed
          setIsOpenNow(false);
        } else if (day === 6) {
          // Saturday 08:00 to 17:00
          setIsOpenNow(currentTimeInMinutes >= 8 * 60 && currentTimeInMinutes <= 17 * 60);
        } else {
          // Monday to Friday 08:00 to 18:30
          setIsOpenNow(currentTimeInMinutes >= 8 * 60 && currentTimeInMinutes <= 18 * 60 + 30);
        }
      } catch {
        setIsOpenNow(true);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#242120] text-[#EDE7E1] text-xs py-2 px-4 border-b border-[#3B3634]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[13px]">
            <span className="flex items-center gap-1.5 text-[#D1A47B]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Av. das Figueiras, 72 - Ao lado da Unemat • Sinop - MT</span>
            </span>
            <span className="hidden sm:inline-block text-[#665E5A]">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-[#C4B7AC]">
              <Clock className="w-3.5 h-3.5 text-[#D1A47B]" />
              <span>Seg a Sex: 08h às 18h30 | Sáb: 08h às 17h</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[13px]">
            {/* Live Open / Closed indicator */}
            <div className="flex items-center gap-1.5 bg-[#171413] px-2.5 py-0.5 rounded-full border border-[#3E3835]">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="font-medium text-xs">
                {isOpenNow ? 'Aberto agora em Sinop' : 'Fechado no momento'}
              </span>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.whatsappRaw}`}
              id="topbar-phone-link"
              className="flex items-center gap-1 text-[#EDE7E1] hover:text-[#D1A47B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D1A47B]" />
              <span className="font-medium">{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#EADFD4] py-3' 
          : 'bg-[#FAF8F5] py-4 border-b border-[#EADFD4]/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="w-10 h-10 rounded-full bg-[#242120] text-[#D1A47B] flex items-center justify-center font-serif text-xl shadow-inner border border-[#D1A47B]/30 group-hover:scale-105 transition-transform">
              CS
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#242120] leading-none">
                Cantinho das Sobrancelhas
              </div>
              <div className="text-[11px] tracking-widest uppercase text-[#876F5E] font-medium mt-0.5 flex items-center gap-1.5">
                <span>Sinop - MT</span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#D1A47B]"></span>
                <span className="flex items-center text-amber-600 font-semibold gap-0.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                  5.0 no Maps
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-[#4A423D]">
            <a href="#procedimentos" id="nav-procedimentos" className="hover:text-[#A06F4F] transition-colors py-1">
              Procedimentos
            </a>
            <a href="#galeria-real" id="nav-galeria-real" className="hover:text-[#A06F4F] transition-colors py-1 text-[#845638] font-semibold flex items-center gap-1">
              <span>Fotos Reais</span>
              <span className="text-[10px] bg-[#EBD9CA] text-[#7E543B] px-1.5 py-0.5 rounded-full">Maps</span>
            </a>
            <a href="#antes-depois" id="nav-antes-depois" className="hover:text-[#A06F4F] transition-colors py-1">
              Antes & Depois
            </a>
            <button
              onClick={onQuizClick}
              id="nav-simulador-btn"
              className="flex items-center gap-1.5 text-[#8A5636] bg-[#F3E8DE] hover:bg-[#EBD9CA] px-3 py-1 rounded-full transition-colors font-medium text-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B88563]" />
              Simulador Visagista
            </button>
            <a href="#avaliacoes" id="nav-avaliacoes" className="hover:text-[#A06F4F] transition-colors py-1">
              Avaliações
            </a>
            <a href="#ambiente" id="nav-ambiente" className="hover:text-[#A06F4F] transition-colors py-1">
              Nosso Espaço
            </a>
            <a href="#localizacao" id="nav-localizacao" className="hover:text-[#A06F4F] transition-colors py-1">
              Localização
            </a>
          </div>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onBookClick}
              id="header-book-btn"
              className="flex items-center gap-2 bg-[#242120] hover:bg-[#383330] text-[#F7F1EB] px-5 py-2.5 rounded-full font-medium text-sm shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-[#D1A47B]" />
              <span>Agendar Horário</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 rounded-lg text-[#242120] hover:bg-[#EEDFD3] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-t border-[#EADFD4] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#procedimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#242120] hover:text-[#A06F4F] border-b border-[#F0E6DD]"
            >
              Procedimentos & Tabela
            </a>
            <a
              href="#galeria-real"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#845638] hover:text-[#A06F4F] border-b border-[#F0E6DD] flex items-center justify-between"
            >
              <span>Fotos Reais do Google Maps</span>
              <span className="text-[10px] bg-[#EBD9CA] text-[#7E543B] font-bold px-2 py-0.5 rounded-full">9 Fotos</span>
            </a>
            <a
              href="#antes-depois"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#242120] hover:text-[#A06F4F] border-b border-[#F0E6DD]"
            >
              Antes & Depois Interativo
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuizClick();
              }}
              className="w-full text-left py-2 text-base font-medium text-[#8A5636] flex items-center justify-between border-b border-[#F0E6DD]"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B88563]" />
                Descubra Seu Procedimento Ideal
              </span>
              <span className="text-xs bg-[#EEDFD3] text-[#7E543B] px-2 py-0.5 rounded-full">Quiz</span>
            </button>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#242120] hover:text-[#A06F4F] border-b border-[#F0E6DD]"
            >
              Avaliações do Google (5.0 Estrelas)
            </a>
            <a
              href="#ambiente"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#242120] hover:text-[#A06F4F] border-b border-[#F0E6DD]"
            >
              Nosso Espaço & Ambiente
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#242120] hover:text-[#A06F4F] border-b border-[#F0E6DD]"
            >
              Como Chegar (Ao lado da Unemat)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#242120] hover:text-[#A06F4F]"
            >
              Perguntas Frequentes
            </a>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#242120] text-white py-3 rounded-xl font-medium text-sm shadow"
              >
                <Calendar className="w-4 h-4 text-[#D1A47B]" />
                <span>Agendar Horário Online</span>
              </button>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Olá, gostaria de tirar dúvidas sobre os atendimentos no Cantinho das Sobrancelhas em Sinop!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-medium text-sm shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Falar no WhatsApp (66) 99652-3535</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
