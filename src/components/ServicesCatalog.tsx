import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/servicesData';
import { Service } from '../types';
import { Sparkles, Clock, Check, Plus, MessageCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface ServicesCatalogProps {
  selectedServiceIds: string[];
  onToggleService: (service: Service) => void;
  onOpenBooking: () => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  selectedServiceIds,
  onToggleService,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Procedimentos' },
    { id: 'sobrancelhas', label: 'Sobrancelhas' },
    { id: 'cilios', label: 'Cílios & Olhar' },
    { id: 'facial', label: 'Tratamentos & Fios' },
  ];

  const filteredServices = SERVICES.filter((s) => {
    const matchesCategory = activeCategory === 'todos' || s.category === activeCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.recommendedFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedServicesList = SERVICES.filter((s) => selectedServiceIds.includes(s.id));
  const totalEstimated = selectedServicesList.reduce((acc, curr) => acc + curr.priceNum, 0);

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  const handleQuickWhatsAppService = (service: Service) => {
    const msg = `Olá! Gostaria de agendar o procedimento *${service.name}* no Cantinho das Sobrancelhas em Sinop. Quais são os próximos horários disponíveis?`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="procedimentos" className="py-16 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EEDFD3] text-[#7E543B] text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tabela & Cardápio de Serviços</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tracking-tight">
            Procedimentos Personalizados
          </h2>
          <p className="text-[#695F59] mt-3 text-base sm:text-lg">
            Técnicas modernas desenvolvidas para valorizar os traços do seu rosto, respeitando sua saúde cutânea e a densidade dos seus fios.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                id={`cat-btn-${cat.id}`}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#242120] text-white shadow-sm'
                    : 'bg-white text-[#5E544F] hover:bg-[#F2E8DF] border border-[#E5D8CC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8A796F] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar procedimento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search-services-input"
              className="w-full bg-white border border-[#E5D8CC] rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-[#935D38] text-[#242120]"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isSelected = selectedServiceIds.includes(service.id);
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#935D38] ring-2 ring-[#935D38]/20 shadow-md bg-[#FFFDFB]'
                    : 'border-[#EADFD4] hover:border-[#D1BAA7] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top tags & Price */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-[#F5ECE3] text-[#7E543B] px-2.5 py-1 rounded-full">
                      {service.tag || service.category}
                    </span>
                    <div className="text-right">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#242120]">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Title & Duration */}
                  <h3 className="font-serif text-xl font-bold text-[#242120] leading-snug">
                    {service.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#7A6E67] mt-1.5 mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#935D38]" />
                    <span>Duração: {service.duration}</span>
                  </div>

                  <p className="text-sm text-[#5E544F] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Details Accordion */}
                  <button
                    onClick={() => toggleExpand(service.id)}
                    id={`toggle-expand-${service.id}`}
                    className="text-xs font-semibold text-[#8A5636] hover:text-[#5E3B24] flex items-center gap-1 mb-4"
                  >
                    <span>{isExpanded ? 'Ocultar detalhes' : 'Ver o que inclui e indicação'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="p-3.5 bg-[#FAF6F2] rounded-2xl mb-4 text-xs space-y-3 border border-[#EEDFD3] animate-in fade-in duration-200">
                      <div>
                        <strong className="block text-[#242120] font-semibold mb-1">Indicado para:</strong>
                        <p className="text-[#5E544F]">{service.recommendedFor}</p>
                      </div>
                      <div>
                        <strong className="block text-[#242120] font-semibold mb-1">O que inclui o atendimento:</strong>
                        <ul className="space-y-1 text-[#4A423D]">
                          {service.includes.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#F0E6DD] flex items-center gap-2">
                  <button
                    onClick={() => onToggleService(service)}
                    id={`btn-select-service-${service.id}`}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all ${
                      isSelected
                        ? 'bg-[#935D38] text-white shadow-sm'
                        : 'bg-[#F5ECE3] text-[#7E543B] hover:bg-[#EBD9CA]'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Selecionado</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Selecionar no Agendamento</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleQuickWhatsAppService(service)}
                    id={`btn-whatsapp-direct-${service.id}`}
                    title="Agendar diretamente no WhatsApp"
                    className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors shrink-0"
                    aria-label="WhatsApp direto"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Floating/Sticky Combo Bar if 1+ services selected */}
        {selectedServiceIds.length > 0 && (
          <div className="fixed bottom-4 left-4 right-4 max-w-3xl mx-auto z-40 bg-[#242120] text-white rounded-2xl p-4 shadow-2xl border border-[#3E3835] flex flex-col sm:flex-row items-center justify-between gap-3 animate-in slide-in-from-bottom-4 duration-300">
            <div>
              <div className="text-xs text-[#D1A47B] font-medium">
                {selectedServicesList.length} procedimento(s) selecionado(s):
              </div>
              <div className="text-sm font-bold truncate max-w-md">
                {selectedServicesList.map((s) => s.name).join(' + ')}
              </div>
              {totalEstimated > 0 && (
                <div className="text-xs text-[#E5D8CC] mt-0.5">
                  Investimento total estimado: <strong className="text-white">R$ {totalEstimated}</strong>
                </div>
              )}
            </div>

            <button
              onClick={onOpenBooking}
              id="sticky-combo-book-btn"
              className="w-full sm:w-auto bg-[#D1A47B] hover:bg-[#C29267] text-[#242120] px-5 py-2.5 rounded-xl font-bold text-sm shrink-0 transition-colors shadow"
            >
              Continuar Agendamento →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
