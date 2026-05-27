import { useModfy } from '@modfy';
import { useQuestionsContext } from 'contexts/QuestionsContext';
import React, { useCallback, useEffect, useState } from 'react';
import { Logos } from '../logos/Logos';

import backButton from '../../../assets/pagination/back.svg';
import nextButton from '../../../assets/pagination/next.svg';

import './Index.css';

interface PaginationProps {
  numberOfSlides: number;
  slideNow: number;
  minicourseNow: number;
  numberOfMinicourses: number;
  lastModuleNumberOfPages?: number;
  numberOfQuestions?: number;
  activityPage?: boolean;
  sendToAPI?: boolean;
  numberOfErrors?: number;
  goToSummary?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  numberOfSlides,
  slideNow,
  minicourseNow,
  numberOfMinicourses,
  lastModuleNumberOfPages = 1,
  numberOfQuestions = 0,
  activityPage = false,
  sendToAPI = false,
  numberOfErrors = 5,
  goToSummary = false,
}) => {
  const { nextPage, previousPage, navigateToPage } = useModfy();
  const { showResult, updateQuestionAnsweredArray } = useQuestionsContext();

  const [progressData, setProgressData] = useState<{ [key: number]: number }>({});

  // Funções utilitárias para interagir com a API
  const fetchData = useCallback(async (key: string) => {
    let API = new window.BridgeRestApi();
    try {
      const result = await API.obterDadosGenericos(key);
      return result.data.length > 0 ? JSON.parse(result.data[0].valor) : null;
    } catch (error) {
      console.error(`Erro ao obter dados para a chave ${key}:`, error);
      return null;
    }
  }, []);

  const saveData = useCallback(async (key: string, value: any) => {
    let API = new window.BridgeRestApi();
    try {
      await API.registrarDadosGenericos(key, JSON.stringify(value));
      console.log(`Dados salvos com sucesso para a chave ${key}:`, value);
    } catch (error) {
      console.error(`Erro ao salvar dados para a chave ${key}:`, error);
    }
  }, []);

  // Arrow functions para cada useEffect
  const reloadPageEffect = useCallback(() => {
    const currentPageIdentifier = `module-${minicourseNow}-page-${slideNow}`;
    if (activityPage) {
      const reloadedPage = sessionStorage.getItem('reloadedPage');

      // Não recarregar a página aqui — apenas registrar que já foi exibida
      // Isto evita perda de estado em páginas de atividade ao evitar reloads.
    }
    sessionStorage.setItem('reloadedPage', currentPageIdentifier);
  }, [activityPage, minicourseNow, slideNow]);

  const initializeProgressEffect = useCallback(async () => {
    let API = new window.BridgeRestApi();
    let thisPageProgress = (100 / numberOfSlides) * slideNow;
    thisPageProgress = Math.min(thisPageProgress, 100);

    console.log('Progress updated:' + thisPageProgress);
    await API.registrarPorcentagemConclusaoUnidade(`modulo-${minicourseNow}`, thisPageProgress);

    if (numberOfQuestions > 0) {
      updateQuestionAnsweredArray(new Array(numberOfQuestions).fill(false));
    }
  }, [numberOfSlides, slideNow, minicourseNow, updateQuestionAnsweredArray, numberOfQuestions]);

  const fetchSavedProgressEffect = useCallback(async () => {
    const progress = (await fetchData(`progressM${minicourseNow}`)) || {};
    setProgressData(progress);
  }, [minicourseNow, fetchData]);

  const updateProgressEffect = useCallback(async () => {
    let progress = (await fetchData(`progressM${minicourseNow}`)) || {};
    progress[slideNow] = slideNow;

    if (slideNow + 1 <= numberOfSlides && !activityPage) {
      progress[slideNow + 1] = slideNow + 1;
    }

    await saveData(`progressM${minicourseNow}`, progress);
    setProgressData(progress);
  }, [slideNow, minicourseNow, numberOfSlides, activityPage, saveData, fetchData]);

  useEffect(() => {
    reloadPageEffect();
  }, [reloadPageEffect]);
  useEffect(() => {
    initializeProgressEffect();
  }, [initializeProgressEffect]);
  useEffect(() => {
    fetchSavedProgressEffect();
  }, [fetchSavedProgressEffect]);
  useEffect(() => {
    updateProgressEffect();
  }, [updateProgressEffect]);

  const isPageUnlocked = useCallback((page: number) => {
    return true; // Simplificado, já que sempre retorna true
  }, []);

  const handleNextPage = useCallback(() => {
    nextPage();
  }, [nextPage]);

  return (
    <div key={slideNow}>
      <div className="min-h-[309px] flex justify-center items-center flex-col py-5 mt-[40px] bg-amarelo">
        <div
          style={{
            marginBottom: '25px',
            color: '#000000',
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            letterSpacing: '1.3px',
          }}
        >
          Progresso do Módulo
        </div>
        <div className="paginationResponsive flex-col-reverse sm:flex-row flex items-center gap-12">
          {/* Botão Voltar */}
          {(slideNow > 1 || (slideNow === 1 && minicourseNow > 1)) && (
            <button
              className="flex justify-start items-center gap-[10px] h-[70px] w-[195px] bg-[#fefefe] py-0 px-[10px] rounded-[27px] font-medium text-xl leading-6 text-primary cursor-pointer"
              style={{
                boxShadow: '0px 2px 10px 0px marromEscuro',
              }}
              onClick={() =>
                slideNow > 1
                  ? previousPage()
                  : navigateToPage({
                      module: minicourseNow - 1,
                      page: lastModuleNumberOfPages,
                    })
              }
            >
              <div className="bg-primary hover:bg-primary-hover h-[50px] w-[50px] flex items-center justify-center rounded-[50%] !pr-1">
                <img src={backButton} alt="" />
              </div>
              <span>VOLTAR</span>
            </button>
          )}

          {/* Números de Página */}
          <div className="flex justify-center flex-wrap gap-[10px] px-5 max-w-[700px]">
            {Array.from({ length: numberOfSlides }, (_, i) => i + 1).map((page) => (
              <span
                key={page}
                className={`cursor-pointer h-[50px] w-[50px] rounded-[50%] flex justify-center items-center text-center text-lg font-bold ${
                  page === slideNow
                    ? 'bg-amarelo text-primary border-[3px] border-primary hover:bg-[#FFDDB4]'
                    : 'bg-marromEscuro text-white hover:text-primary hover:bg-[#FFDDB4]'
                }`}
                style={{
                  boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.15)',
                }}
                onClick={() =>
                  isPageUnlocked(page) && navigateToPage({ module: minicourseNow, page: page })
                }
              >
                {page}
              </span>
            ))}
          </div>

          {/* Botão Próximo */}
          {(slideNow < numberOfSlides ||
            (slideNow === numberOfSlides && minicourseNow < numberOfMinicourses)) && (
            <button
              className="flex justify-end items-center gap-[10px] h-[70px] w-[195px] bg-[#fefefe] py-0 px-[10px] rounded-[27px] font-medium text-xl leading-6 text-primary cursor-pointer"
              style={{
                boxShadow: '0px 2px 10px 0px marromEscuro',
              }}
              onClick={
                slideNow < numberOfSlides
                  ? () => handleNextPage() // Envolve em uma arrow function
                  : () =>
                      goToSummary
                        ? (window.parent.location.href =
                            'https://avamec.mec.gov.br/#/instituicao/seb/curso/20523/informacoes')
                        : navigateToPage({ module: minicourseNow + 1, page: 1 })
              }
              id="goNext"
            >
              <span>PRÓXIMO</span>
              <div className="bg-primary hover:bg-primary-hover h-[50px] w-[50px] flex items-center justify-center rounded-[50%] !pl-1">
                <img src={nextButton} alt="" />
              </div>
            </button>
          )}
        </div>
      </div>
      <Logos />
    </div>
  );
};

export default Pagination;
