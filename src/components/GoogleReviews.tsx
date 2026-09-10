import React, { useState } from 'react';
import { REVIEWS } from '../data/reviewsData';
import { BUSINESS_INFO } from '../data/servicesData';
import { Star, CheckCircle, ExternalLink, MessageSquareQuote, MapPin } from 'lucide-react';

export const GoogleReviews: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');

  const filteredReviews = REVIEWS.filter((r) => {
    if (filter === 'todos') return true;
    if (filter === 'micro') return r.serviceTaken.includes('Micropigmentação');
    if (filter === 'lamination') return r.serviceTaken.includes('Brow Lamination') || r.serviceTaken.includes('Lash');
    if (filter === 'design') return r.serviceTaken.includes('Design');
    return true;
  });

  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EADFD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Google Score */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#EEDFD3] text-[#7E543B] text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>Avaliações Reais no Google Maps</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tracking-tight">
              A Confiança de Quem Vive em Sinop
            </h2>
            <p className="text-[#695F59] mt-2 text-base max-w-xl">
              Mais de centenas de olhares transformados. Veja o que nossas clientes dizem sobre o atendimento, naturalidade e técnica no Cantinho das Sobrancelhas.
            </p>
          </div>

          {/* Big Google Score Card */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-[#EADFD4] flex items-center gap-5 shrink-0">
            <div className="text-center">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#242120]">5.0</div>
              <div className="flex items-center justify-center gap-1 text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                ))}
              </div>
              <div className="text-[11px] text-[#8A796F] font-semibold">Classificação Máxima</div>
            </div>

            <div className="h-14 w-px bg-[#EADFD4]" />

            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#242120]">
                <span className="text-blue-600 font-extrabold">G</span>
                <span className="text-red-500 font-extrabold">o</span>
                <span className="text-amber-500 font-extrabold">o</span>
                <span className="text-blue-600 font-extrabold">g</span>
                <span className="text-emerald-500 font-extrabold">l</span>
                <span className="text-red-500 font-extrabold">e</span>
                <span>Maps Reviews</span>
              </div>
              <p className="text-[11px] text-[#7A6E67]">
                Local: Av. das Figueiras, 72 (ao lado da Unemat)
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-view-google-maps-reviews"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#935D38] hover:text-[#5E3B24] underline"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setFilter('todos')}
            id="filter-reviews-all"
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              filter === 'todos'
                ? 'bg-[#242120] text-white'
                : 'bg-white text-[#5E544F] border border-[#E5D8CC] hover:bg-[#F2E8DF]'
            }`}
          >
            Todas as Opiniões
          </button>
          <button
            onClick={() => setFilter('micro')}
            id="filter-reviews-micro"
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              filter === 'micro'
                ? 'bg-[#242120] text-white'
                : 'bg-white text-[#5E544F] border border-[#E5D8CC] hover:bg-[#F2E8DF]'
            }`}
          >
            Micropigmentação Fio a Fio
          </button>
          <button
            onClick={() => setFilter('lamination')}
            id="filter-reviews-lamination"
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              filter === 'lamination'
                ? 'bg-[#242120] text-white'
                : 'bg-white text-[#5E544F] border border-[#E5D8CC] hover:bg-[#F2E8DF]'
            }`}
          >
            Brow Lamination & Lash
          </button>
          <button
            onClick={() => setFilter('design')}
            id="filter-reviews-design"
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              filter === 'design'
                ? 'bg-[#242120] text-white'
                : 'bg-white text-[#5E544F] border border-[#E5D8CC] hover:bg-[#F2E8DF]'
            }`}
          >
            Design & Henna
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-[#EADFD4] flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* User header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EEDFD3] text-[#7E543B] font-bold flex items-center justify-center text-sm border border-[#DEC4AF]">
                      {rev.avatarText}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#242120] flex items-center gap-1.5">
                        <span>{rev.author}</span>
                      </div>
                      <div className="text-[11px] text-[#8A796F]">
                        {rev.localGuide ? 'Local Guide Google' : 'Cliente Verificada'} • {rev.timeAgo}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block bg-[#F8F3EE] text-[#7E543B] text-[11px] font-semibold px-2.5 py-0.5 rounded-md mb-3">
                  Procedimento: {rev.serviceTaken}
                </div>

                {/* Text */}
                <p className="text-xs sm:text-sm text-[#544A44] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 pt-3 border-t border-[#F2EAE2] flex items-center justify-between text-[11px] text-[#8A796F]">
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Avaliação Verificada</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-400" />
                  <span>Sinop - MT</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action for reviews */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-leave-google-review"
            className="inline-flex items-center gap-2 bg-[#242120] hover:bg-[#3D3734] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow"
          >
            <MessageSquareQuote className="w-4 h-4 text-[#D1A47B]" />
            <span>Avaliar Cantinho das Sobrancelhas no Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};
