import React, { useState } from "react";
import CloseIcon from "./assets/close.svg";

export interface ReferenceModalProps {
  children: React.ReactNode;
  reference: React.ReactNode;
}

export const ReferenceModal: React.FC<ReferenceModalProps> = ({ children, reference }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#00000065] flex items-center justify-center !m-0">
          <div className="bg-[#EEEEEE] border-[3px] border-[#664388] rounded-md flex gap-4 p-7 w-fit max-w-[50%]">
            <div className="!text-black !text-left [&>*:first-child]:!text-left">
              {reference}
            </div>
            <div
              className="py-2 px-2 border-[2px] border-black h-[35px] min-w-[35px] rounded-md hover:bg-[#cfc8d68b] cursor-pointer flex items-center justify-center"
              onClick={() => setShowModal(false)}
            >
              <CloseIcon aria-hidden="true" className="w-full h-full" />
            </div>
          </div>
        </div>
      )}
      <span
        className="referenceModal-hover !text-[#664388] border-b-[2px] border-[#664388] hover:border-transparent w-fit cursor-pointer"
        style={{ lineHeight: "1.5" }}
        onClick={() => setShowModal(true)}
      >
        {children}
      </span>
    </>
  );
};
