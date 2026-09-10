import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data/beforeAfterData';
import { Sparkles, Calendar, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onSelectServiceForBooking }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = BEFORE_AFTER_ITEMS[activeTab];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="antes-depois" className="py-16 sm:py-24 bg-[#F5EFE8] border-b border-[#EADFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#EBD9CA] text-[#7E543B] text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resultados Reais & Fios Naturais</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tracking-tight">
            Antes e Depois Interativo
          </h2>
          <p className="text-[#695F59] mt-3 text-base sm:text-lg">
            Arraste a linha divisória para comparar a transformação de cada técnica e veja a perfeição dos traços feitos no Cantinho das Sobrancelhas Sinop.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPos(50);
              }}
              id={`tab-before-after-${item.id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === idx
                  ? 'bg-[#242120] text-white shadow-sm scale-105'
                  : 'bg-white/80 text-[#544A44] hover:bg-white hover:text-[#242120] border border-[#E0D3C7]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-[#EADFD4] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Viewport */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner cursor-ew-resize select-none bg-[#E0D3C7]"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER image (Underneath / full width) */}
                <img
                  src={currentItem.afterImg}
                  alt={`Depois: ${currentItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* BEFORE image (Clipped with width percentage) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={currentItem.beforeImg}
                    alt={`Antes: ${currentItem.title}`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none filter contrast-90 brightness-95"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      height: '100%'
                    }}
                  />
                </div>

                {/* Divider Line & Circular Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#242120] shadow-xl flex items-center justify-center border-2 border-[#D1A47B]">
                    <div className="flex items-center gap-0.5 text-xs font-bold">
                      <span>‹</span>
                      <span>›</span>
                    </div>
                  </div>
                </div>

                {/* Badges on the image */}
                <div className="absolute top-4 left-4 bg-[#242120]/75 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Antes
                </div>
                <div className="absolute top-4 right-4 bg-[#935D38]/85 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Depois (Resultado)
                </div>

                {/* Touch hint overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md text-white/90 text-[11px] px-3 py-1 rounded-full pointer-events-none">
                  ↔ Arraste para os lados para comparar
                </div>
              </div>

              {/* Range Slider Controller */}
              <div className="mt-4 px-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  id="before-after-range-input"
                  className="w-full accent-[#935D38] cursor-pointer"
                  aria-label="Controle deslizante de Antes e Depois"
                />
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#935D38]">
                  {currentItem.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242120] mt-1">
                  {currentItem.title}
                </h3>
                <p className="text-sm font-medium text-[#7E543B] mt-0.5">
                  {currentItem.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#5E544F] leading-relaxed">
                {currentItem.description}
              </p>

              {/* Highlights specifications */}
              <div className="space-y-2.5 pt-2 border-t border-[#F0E6DD]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3E3835]">
                  <Clock className="w-4 h-4 text-[#935D38]" />
                  <span><strong>Duração da sessão:</strong> {currentItem.duration}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3E3835]">
                  <CheckCircle2 className="w-4 h-4 text-[#935D38]" />
                  <span><strong>Durabilidade do efeito:</strong> {currentItem.durability}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3E3835]">
                  <Sparkles className="w-4 h-4 text-[#935D38]" />
                  <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    {currentItem.highlightNote}
                  </span>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-3">
                <button
                  onClick={() => onSelectServiceForBooking(currentItem.title)}
                  id={`cta-want-result-${currentItem.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#242120] hover:bg-[#3E3835] text-white py-3.5 rounded-xl font-medium text-sm transition-all shadow hover:shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#D1A47B]" />
                  <span>Quero Esse Resultado</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
