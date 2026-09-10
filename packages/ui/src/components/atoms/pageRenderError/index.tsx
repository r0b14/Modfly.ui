import React from 'react';
export interface PageRenderErrorProps { title?: string; children?: React.ReactNode; onRetry?: () => void }
export function PageRenderError({ title = 'Não foi possível abrir este conteúdo', children = 'Confira o endereço e tente novamente.', onRetry }: PageRenderErrorProps) {
  return <section role="alert" className="p-6 border rounded-xl bg-white text-[#333]"><h2 className="font-bold text-xl mb-3">{title}</h2><div>{children}</div>{onRetry && <button type="button" className="mt-4 px-4 py-2 bg-[#285C93] text-white rounded" onClick={onRetry}>Tentar novamente</button>}</section>;
}
