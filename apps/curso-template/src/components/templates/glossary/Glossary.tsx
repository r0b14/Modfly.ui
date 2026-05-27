import { useState } from 'react';

interface GlossaryProps {
  word: React.ReactNode;
  definition: React.ReactNode;
  hasBoldTitle?: boolean;
}

const Glossary: React.FC<GlossaryProps> = ({
  word,
  definition,
  hasBoldTitle = false,
}) => {
  const [showPopupTop, setShowPopupTop] = useState(false);
  const [showPopupBottom, setShowPopupBottom] = useState(false);
  const [tooltipWidth, setTooltipWidth] = useState('300px');
  const [tooltipTopPx, setTooltipTopPx] = useState('');
  const [arrowBottomLeft, setArrowBottomLeft] = useState('50%');
  const [arrowSide, setArrowSide] = useState('bottom');

  window.addEventListener('click', disableTooltip);
  function disableTooltip(this: any, event: any) {
    setShowPopupTop(false);
    setShowPopupBottom(false);
  }
  

  function disableTooltipByTime() {
    setTimeout(() => {
      setShowPopupTop(false);
      setShowPopupBottom(false);
    }, 10000);
  }

  function checkMouseY(e: any) {
    setTimeout(() => {
      const coordY = e.clientY;
      console.log(e.target.offsetHeight);

      setTooltipWidth(`${e.target.parentNode.parentNode.offsetWidth}px`);

      if (coordY > window.innerHeight / 2) {
        setShowPopupTop(true);
        setShowPopupBottom(false);
        setArrowSide('top');

        setTimeout(() => {
          const tooltip = document.querySelector('#tooltipID') as any;
          setTooltipTopPx(`-${tooltip.offsetHeight + 15}px`);
        }, 10);
      } else {
        setShowPopupTop(false);
        setShowPopupBottom(true);
        setArrowSide('bottom');

        if (e.target.offsetHeight > 30) {
          setArrowBottomLeft('');
        } else {
          setArrowBottomLeft('50%');
        }
      }
    }, 10);
  }

  return (
    <span className="relative cursor-pointer inline">
      <span
        className="break-words font-medium relative border-b-[4px] border-dotted border-[#0000ff]"
        onMouseOver={(event) => checkMouseY(event)}
        onClick={(event) => checkMouseY(event)}
        onMouseLeave={() => disableTooltipByTime()}
      >
        {word}
        {(showPopupBottom || showPopupTop) && (
          <div
            className="bg-[#f2f2f2] absolute transform -translate-x-1.5 rotate-45"
            style={
              arrowSide === 'bottom'
                ? {
                    width: '20px',
                    height: '20px',
                    transform: 'rotate(45deg)',
                    bottom: '-25px',
                    left: arrowBottomLeft,
                    boxShadow: '0px 1px 5px 0 #000009',
                  }
                : {
                    width: '20px',
                    height: '20px',
                    transform: 'rotate(45deg)',
                    top: '-25px',
                    left: '50%',
                    boxShadow: '0px 1px 5px 0 #000009',
                  }
            }
          />
        )}
      </span>
      {showPopupBottom && (
        <div
          id="tooltipID"
          className="absolute z-40 bg-[#f2f2f2] text-black p-7 rounded-md mt-3 xl:ml-[-5px]"
          style={{
            minWidth: tooltipWidth,
            boxShadow: '0px 1px 5px 0 #000009',
          }}
        >
          <div className="relative" style={{ zIndex: 2 }}>
            {hasBoldTitle ? <strong className="uppercase">{word}</strong> : ''}
            {definition}
          </div>
        </div>
      )}
      {showPopupTop && (
        <div
          id="tooltipID"
          className="absolute z-40 bg-[#f2f2f2] text-black p-7 rounded-md mb-3"
          style={{
            top: tooltipTopPx,
            minWidth: tooltipWidth,
            boxShadow: '0px 1px 5px 0 #0000009e',
          }}
        >
          <div className="relative" style={{ zIndex: 2 }}>
            {hasBoldTitle ? <strong>{word}</strong> : ''}
            {definition}
          </div>
        </div>
      )}
    </span>
  );
};

export default Glossary;
