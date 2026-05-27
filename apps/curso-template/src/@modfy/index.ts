import { useSearchParams, useNavigate } from "react-router-dom";

export const useModfy = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const module = searchParams.get("module");
  const page = searchParams.get("page");

  function nextPage() {
    const nextIndex = Number(page!) + 1;
    window.scrollTo(0, 0)
    navigate(`?module=${module!}&page=${nextIndex.toString()}`);
  }

  function previousPage() {
    const previousIndex = Number(page!) - 1;
    window.scrollTo(0, 0)
    navigate(`?module=${module!}&page=${previousIndex.toString()}`);
  }

  function navigateToPage(params: {module: number, page: number}) {
    window.scrollTo(0, 0)
    navigate(`?module=${params.module.toString()}&page=${params.page.toString()}`);
  }

  return { nextPage, previousPage, navigateToPage };
};
