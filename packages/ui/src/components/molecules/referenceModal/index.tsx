import React, { useEffect, useId, useRef, useState } from 'react';
import CloseIcon from './assets/close.svg';
export interface ReferenceModalProps { children: React.ReactNode; reference: React.ReactNode }
export const ReferenceModal: React.FC<ReferenceModalProps> = ({ children, reference }) => {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const title = useId();
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else if (dialog.current?.open) dialog.current.close();
  }, [open]);
  return <>
    <button type="button" ref={trigger} aria-haspopup="dialog" onClick={() => setOpen(true)} className="!text-[#664388] border-b-2 border-[#664388] hover:border-transparent bg-transparent cursor-pointer">{children}</button>
    <dialog ref={dialog} aria-labelledby={title} onCancel={() => setOpen(false)} onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={e => { if (e.target === e.currentTarget) setOpen(false); }} className="bg-[#EEEEEE] border-[3px] border-[#664388] rounded-md p-7 w-[min(90vw,720px)] max-h-[85vh] overflow-auto backdrop:bg-black/50">
      <div className="flex gap-4 items-start"><div className="min-w-0 flex-1"><h2 id={title} className="font-bold mb-4">Referência</h2>{reference}</div>
        <button type="button" aria-label="Fechar referência" onClick={() => setOpen(false)} className="p-2 border-2 border-black rounded-md w-9 h-9 shrink-0"><CloseIcon aria-hidden="true" className="w-full h-full" /></button>
      </div>
    </dialog>
  </>;
};
