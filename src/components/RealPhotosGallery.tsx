import React, { useState } from 'react';
import { REAL_PHOTOS_GALLERY } from '../data/realPhotosData';
import { RealPhotoItem } from '../types';
import { BUSINESS_INFO } from '../data/servicesData';
import { 
  Camera, 
  Sparkles, 
  ExternalLink, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Calendar,
  MessageCircle,
  MapPin,
  ShieldCheck
} from 'lucide-react';

interface RealPhotosGalleryProps {
  onSelectProcedureForBooking: (procedureName: string) => void;
}

export const RealPhotosGallery: React.FC<RealPhotosGalleryProps> = ({ onSelectProcedureForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<RealPhotoItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Fotos', count: REAL_PHOTOS_GALLERY.length },
    { id: 'Micropigmentação', label: 'Micropigmentação', count: REAL_PHOTOS_GALLERY.filter(p => p.category === 'Micropigmentação').length },
    { id: 'Brow Lamination', label: 'Brow Lamination', count: REAL_PHOTOS_GALLERY.filter(p => p.category === 'Brow Lamination').length },
    { id: 'Tratamento & Fios', label: 'Tratamento & Fios', count: REAL_PHOTOS_GALLERY.filter(p => p.category === 'Tratamento & Fios').length },
    { id: 'Cílios', label: 'Cílios & Olhar', count: REAL_PHOTOS_GALLERY.filter(p => p.category === 'Cílios').length },
    { id: 'Estúdio & Fachada', label: 'Fachada & Estúdio', count: REAL_PHOTOS_GALLERY.filter(p => p.category === 'Estúdio & Fachada').length },
  ];

  const filteredItems = selectedCategory === 'all'
    ? REAL_PHOTOS_GALLERY
    : REAL_PHOTOS_GALLERY.filter(item => item.category === selectedCategory);

  const handleNextModal = () => {
    if (!activeModalItem) return;
    const currentIndex = REAL_PHOTOS_GALLERY.findIndex(item => item.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % REAL_PHOTOS_GALLERY.length;
    setActiveModalItem(REAL_PHOTOS_GALLERY[nextIndex]);
  };

  const handlePrevModal = () => {
    if (!activeModalItem) return;
    const currentIndex = REAL_PHOTOS_GALLERY.findIndex(item => item.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + REAL_PHOTOS_GALLERY.length) % REAL_PHOTOS_GALLERY.length;
    setActiveModalItem(REAL_PHOTOS_GALLERY[prevIndex]);
  };

  const openWhatsAppForPhoto = (photo: RealPhotoItem) => {
    const text = encodeURIComponent(
      `Olá! Estava navegando no site do Cantinho das Sobrancelhas e adorei o resultado de "${photo.title}" (${photo.procedureName}) que vi na galeria de fotos reais do Google Maps. Gostaria de saber mais informações e valores para agendar!`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="galeria-real" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EADFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EBD9CA] text-[#7E543B] text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full font-semibold mb-3">
            <Camera className="w-4 h-4 text-[#935D38]" />
            <span>Acervo Fotográfico Google Maps • Sinop MT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tracking-tight">
            Nossos Resultados & Estrutura Real
          </h2>
          <p className="text-[#695F59] mt-3 text-base sm:text-lg leading-relaxed">
            Aqui você confere as fotos autênticas do nosso perfil oficial no Google Maps: desde procedimentos de micropigmentação e alinhamento até nossa fachada na Avenida das Figueiras.
          </p>
        </div>

        {/* Verification banner */}
        <div className="mb-10 max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-5 border border-[#DFCFC3] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg border border-amber-200 shrink-0">
              5.0
            </div>
            <div>
              <div className="text-sm font-bold text-[#242120] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Fotos Verificadas do Perfil Oficial no Google Maps</span>
              </div>
              <p className="text-xs text-[#7A6E67] mt-0.5">
                Sem maquiagens enganosas ou filtros que distorcem o formato anatômico.
              </p>
            </div>
          </div>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#935D38] hover:text-[#242120] underline transition-colors shrink-0"
          >
            <span>Ver perfil no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              id={`filter-photo-${cat.id}`}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#242120] text-white shadow-sm scale-105'
                  : 'bg-white text-[#544A44] hover:bg-[#F3E8DE] border border-[#E0D3C7]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-[#EFE8DF] text-[#7E543B]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`card-photo-${item.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-[#EADFD4] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div 
                className="relative aspect-[4/3] bg-stone-900 overflow-hidden cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-[#242120]/80 backdrop-blur-md text-[#D1A47B] border border-[#D1A47B]/30 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Zoom Icon Hover Button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/90 text-[#242120] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Category & Title Over Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-medium text-[#D1A47B] uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-lg font-bold leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-3">
                  <div className="inline-block bg-[#F8F4EE] border border-[#E8DEC8] text-[#845638] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {item.procedureName}
                  </div>

                  <p className="text-xs text-[#5E544F] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-1.5 pt-1">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-[#3E3835]">
                        <Check className="w-3.5 h-3.5 text-[#935D38] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-[#F2EAE1] flex items-center gap-2">
                  <button
                    onClick={() => onSelectProcedureForBooking(item.procedureName)}
                    id={`btn-book-photo-${item.id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#242120] hover:bg-[#3D3734] text-white py-2.5 px-3 rounded-xl text-xs font-semibold shadow-sm transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D1A47B]" />
                    <span>Agendar Procedimento</span>
                  </button>

                  <button
                    onClick={() => openWhatsAppForPhoto(item)}
                    id={`btn-wa-photo-${item.id}`}
                    title="Perguntar no WhatsApp sobre este resultado"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-[#EAF7EE] hover:bg-[#DCF3E3] text-[#1E7E34] border border-[#BDE5C7] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for High-Def Inspection */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 flex flex-col lg:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              id="close-photo-modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center shadow-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Main: Large Image Viewport */}
            <div className="lg:w-3/5 bg-stone-950 relative flex items-center justify-center min-h-[300px] sm:min-h-[420px]">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="max-h-[520px] w-full object-contain"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrevModal}
                id="prev-photo-modal-btn"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
                title="Foto Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNextModal}
                id="next-photo-modal-btn"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
                title="Próxima Foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Source Tag on Photo */}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-stone-200 text-[11px] px-3 py-1 rounded-full">
                {activeModalItem.sourceLabel}
              </div>
            </div>

            {/* Right: Technical Explanation & Actions */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#FAF7F2]">
              <div className="space-y-3">
                <div className="inline-block bg-[#EBD9CA] text-[#7E543B] text-[11px] uppercase font-bold px-2.5 py-1 rounded-full">
                  {activeModalItem.category}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#242120] leading-tight">
                  {activeModalItem.title}
                </h3>

                <p className="text-xs font-semibold text-[#935D38]">
                  {activeModalItem.procedureName}
                </p>

                <p className="text-xs text-[#5E544F] leading-relaxed pt-1">
                  {activeModalItem.description}
                </p>

                {/* Details List */}
                <div className="space-y-2 pt-3 border-t border-[#E8DFD5]">
                  <div className="text-xs font-bold text-[#242120]">
                    Detalhes e Diferenciais em Sinop:
                  </div>
                  {activeModalItem.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#3E3835]">
                      <Check className="w-3.5 h-3.5 text-[#935D38] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="space-y-2.5 pt-4 border-t border-[#E8DFD5]">
                <button
                  onClick={() => {
                    setActiveModalItem(null);
                    onSelectProcedureForBooking(activeModalItem.procedureName);
                  }}
                  id="modal-book-procedure-btn"
                  className="w-full flex items-center justify-center gap-2 bg-[#242120] hover:bg-[#3D3734] text-white py-3 rounded-xl font-medium text-sm shadow transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#D1A47B]" />
                  <span>Agendar Este Procedimento</span>
                </button>

                <button
                  onClick={() => openWhatsAppForPhoto(activeModalItem)}
                  id="modal-whatsapp-procedure-btn"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 rounded-xl font-semibold text-xs shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tirar Dúvidas no WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
