import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'A micropigmentação fio a fio ou shadow dói?',
    answer: 'Fique totalmente tranquila! Utilizamos um anestésico tópico dermatológico de ação rápida e altamente potente antes e durante o procedimento. A grande maioria das nossas clientes relata sensação de formigamento suave ou até mesmo adormece durante a sessão.'
  },
  {
    question: 'Quanto tempo dura o resultado da Henna e da Brow Lamination?',
    answer: 'A Henna de alta fixação dura em média de 7 a 15 dias (na pele e nos pelos), variando conforme a oleosidade e rotina de banhos. Já a Brow Lamination dura entre 6 e 8 semanas, acompanhando o ciclo natural de renovação dos pelos da sobrancelha.'
  },
  {
    question: 'Qual a localização exata em Sinop e tem estacionamento?',
    answer: 'Estamos localizados na Avenida das Figueiras, nº 72, no bairro Jardim Imperial, logo ao lado do campus da Unemat. É uma região nobre, calma e com amplo espaço para estacionar na própria avenida com total comodidade.'
  },
  {
    question: 'Preciso deixar a sobrancelha crescer antes de ir ao estúdio?',
    answer: 'Recomendamos que você evite pinçar ou aparar os pelos por pelo menos 15 a 20 dias antes da sua consulta. Quanto mais pelos disponíveis, mais fiel e simétrico será o mapeamento facial feito com visagismo para valorizar seu formato ideal.'
  },
  {
    question: 'Quais formas de pagamento são aceitas no Cantinho?',
    answer: 'Aceitamos PIX, cartões de débito e cartões de crédito em até 12 vezes (com condições facilitadas para procedimentos como micropigmentação e combos).'
  },
  {
    question: 'Como é o ambiente e o atendimento no estúdio?',
    answer: 'Nosso espaço é 100% climatizado, silencioso e acolhedor, projetado para ser o seu momento de relaxamento e autocuidado. Trabalhamos exclusivamente com hora marcada e atendimento individual, garantindo pontualidade, biossegurança rigorosa com materiais descartáveis e um delicioso café ou chá de boas-vindas.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF6F2] border-b border-[#EADFD4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EBD9CA] text-[#7E543B] text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242120] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-[#695F59] mt-3 text-base">
            Esclareça as principais dúvidas sobre procedimentos, durabilidade e cuidados pré e pós-atendimento.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-[#935D38] shadow-sm' : 'border-[#EADFD4] hover:border-[#D8C6B6]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  id={`faq-btn-${idx}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#242120]">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#FAF6F2] text-[#8A5636] flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-0 text-sm text-[#5E544F] leading-relaxed border-t border-[#F5EFE8] pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question callout */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#EADFD4] text-center space-y-3">
          <h4 className="font-serif text-lg font-bold text-[#242120]">
            Ainda tem alguma dúvida específica sobre o seu caso?
          </h4>
          <p className="text-xs sm:text-sm text-[#7A6E67] max-w-md mx-auto">
            Mande uma mensagem agora no WhatsApp. Respondemos você com carinho e tiramos todas as dúvidas antes de qualquer agendamento!
          </p>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre os procedimentos do Cantinho das Sobrancelhas em Sinop.')}`}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-faq-whatsapp"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar Conosco no WhatsApp (66) 99652-3535</span>
          </a>
        </div>
      </div>
    </section>
  );
};
