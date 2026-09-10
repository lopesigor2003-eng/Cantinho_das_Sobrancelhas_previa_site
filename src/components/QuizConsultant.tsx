import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QUIZ_RESULTS_MAP, QuizResultData } from '../data/quizData';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface QuizConsultantProps {
  isOpen?: boolean;
  onClose?: () => void;
  onBookWithService?: (serviceName: string, quizDetails: string) => void;
}

export const QuizConsultant: React.FC<QuizConsultantProps> = ({ isOpen = false, onClose, onBookWithService }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<QuizResultData | null>(null);

  const handleSelectOption = (questionId: number, matchedProcedure: string) => {
    const updated = { ...selectedAnswers, [questionId]: matchedProcedure };
    setSelectedAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate best result
      // Let's inspect answers; if despigmentação selected, prioritize despigmentação;
      // otherwise check the most frequent or question 1 & 2 combination
      const values: string[] = Object.values(updated);
      let calculatedProcedure: string = values[0] || 'design-visagismo';

      if (values.includes('despigmentacao')) {
        calculatedProcedure = 'despigmentacao';
      } else if (values.includes('brow-lamination')) {
        calculatedProcedure = 'brow-lamination';
      } else if (values.includes('micro-fio-a-fio')) {
        calculatedProcedure = 'micro-fio-a-fio';
      } else if (values.includes('micro-shadow')) {
        calculatedProcedure = 'micro-shadow';
      } else if (values.includes('lash-lifting')) {
        calculatedProcedure = 'lash-lifting';
      } else if (values.includes('design-henna')) {
        calculatedProcedure = 'design-henna';
      } else {
        calculatedProcedure = 'design-visagismo';
      }

      setResult(QUIZ_RESULTS_MAP[calculatedProcedure] || QUIZ_RESULTS_MAP['design-visagismo']);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setResult(null);
  };

  const handleWhatsAppResult = () => {
    if (!result) return;
    const msg = `Olá! Fiz o Quiz Visagista no site do Cantinho das Sobrancelhas em Sinop e meu resultado foi *${result.title}* (${result.matchScore}). Gostaria de agendar ou tirar dúvidas sobre meu horário!`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#E0D3C7] overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#242120] text-white p-6 sm:px-8 flex items-center justify-between relative">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#8A5636] flex items-center justify-center text-[#F5EFE8]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Descubra Seu Procedimento Ideal
              </h3>
              <p className="text-xs text-[#DEC4AF]">
                Consultoria Visagista Express • Cantinho das Sobrancelhas Sinop
              </p>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              id="close-quiz-btn"
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Fechar quiz"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Progress bar */}
        {!result && (
          <div className="w-full bg-[#EADFD4] h-1.5">
            <div
              className="bg-[#935D38] h-1.5 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {!result ? (
            <div>
              {/* Question indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-[#8A5636] uppercase tracking-wider mb-2">
                <span>Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                <span>Visagismo Personalizado</span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#242120]">
                {QUIZ_QUESTIONS[currentStep].question}
              </h4>
              <p className="text-sm text-[#73665F] mt-1 mb-6">
                {QUIZ_QUESTIONS[currentStep].hint}
              </p>

              {/* Options */}
              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(QUIZ_QUESTIONS[currentStep].id, opt.matchedProcedure)}
                    id={`quiz-opt-${opt.id}`}
                    className="w-full text-left p-4 rounded-2xl border-2 border-[#E8DCD1] bg-white hover:border-[#935D38] hover:bg-[#FBF6F1] transition-all group flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="font-semibold text-base text-[#242120] group-hover:text-[#8A5636] transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-[#7A6E67] mt-0.5">
                        {opt.detail}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F3E8DE] group-hover:bg-[#8A5636] text-[#8A5636] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{result.matchScore}</span>
                </div>
                <h4 className="text-xs uppercase tracking-widest text-[#8A5636] font-bold">
                  Procedimento Mais Recomendado para Você:
                </h4>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242120] mt-1">
                  {result.title}
                </h3>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E0D3C7] shadow-sm">
                <p className="text-sm text-[#544A44] leading-relaxed">
                  {result.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-[#F0E6DD] space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#242120]">
                    Por que é perfeito para o seu olhar:
                  </h5>
                  {result.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#423A36]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-[#F0E6DD] text-center">
                  <div className="bg-[#FAF6F2] p-2.5 rounded-xl">
                    <div className="text-[11px] text-[#8A796F] font-medium">Estimativa de Investimento</div>
                    <div className="font-bold text-sm text-[#242120] mt-0.5">{result.estimatedPrice}</div>
                  </div>
                  <div className="bg-[#FAF6F2] p-2.5 rounded-xl">
                    <div className="text-[11px] text-[#8A796F] font-medium">Tempo Médio da Sessão</div>
                    <div className="font-bold text-sm text-[#242120] mt-0.5">{result.estimatedDuration}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <button
                  onClick={handleWhatsAppResult}
                  id="quiz-result-whatsapp-btn"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-5 rounded-xl font-medium text-sm shadow transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar no WhatsApp com Este Resultado</span>
                </button>

                <button
                  onClick={() => {
                    if (onBookWithService) {
                      onBookWithService(result.title, `Resultado do Quiz: ${result.title} (${result.matchScore})`);
                    }
                    if (onClose) onClose();
                  }}
                  id="quiz-result-book-local-btn"
                  className="flex items-center justify-center gap-2 bg-[#242120] hover:bg-[#3D3734] text-white py-3.5 px-5 rounded-xl font-medium text-sm transition-colors"
                >
                  <span>Agendar Online</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  onClick={handleRestart}
                  id="quiz-restart-btn"
                  className="inline-flex items-center gap-1.5 text-xs text-[#7A6E67] hover:text-[#242120] font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer o teste</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
