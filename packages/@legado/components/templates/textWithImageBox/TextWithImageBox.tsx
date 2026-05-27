

interface TextWithImageBoxProps {
  title?: string;
  hasTitle?: boolean;
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  boxShadowColor?: string;
  imgSrc: string;
  imgSrc2?: string;
  imgMaxWidth?: number | string;
  isReverse: boolean;
  justifyText?: boolean;
  titleColor?: string;
}




const TextWithImageBox: React.FC<TextWithImageBoxProps> = ({
  title,
  titleColor = '#fff',
  hasTitle = false,
  children,
  backgroundColor = '#F3E0E9',
  borderColor = '#F592C0',
  boxShadowColor = 'rgba(0,0,0,0.15)',
  imgSrc,
  imgSrc2,
  imgMaxWidth,
  isReverse,
  justifyText = false,
}) => {
  const isNoBackground = !backgroundColor || /none/i.test(String(backgroundColor)) || /transparent/i.test(String(backgroundColor));
  const isNoBorder = !borderColor || /none/i.test(String(borderColor)) || /transparent/i.test(String(borderColor));

  return (
    <div className="mb-10">
      <div
        className={`
          flex flex-col md:flex-row items-start md:items-center justify-center
          w-full max-w-[1200px] mx-auto p-5 gap-5
          rounded-[7px] md:h-[311px] h-auto

          ${
            imgSrc2
              ? 'md:flex-row md:justify-between'
              : isReverse
              ? 'md:flex-row-reverse md:justify-around'
              : 'md:flex-row md:justify-around'
          }
        `}
        style={{
          ...(isNoBackground ? {} : { backgroundColor }),
          ...(isNoBorder ? { border: 'none' } : { border: `3px solid ${borderColor}` }),
          // boxShadow: `8px 10px 0px 0px ${boxShadowColor}`,
        }}
      >
        {imgSrc2 && (
          <img
            src={imgSrc2}
            alt=""
            style={{ maxWidth: imgMaxWidth || '100%', width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        )}

        {!imgSrc2 && (
          <img
            src={imgSrc}
            alt=""
            className="w-full md:w-auto"
            style={{ maxWidth: imgMaxWidth || '100%', width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        )}

        <div className={imgSrc2 ? "w-full px-5" : "w-full md:w-[70%]"}>
          {hasTitle ? (
            <header>
              <h4 className={`text-[#111] font-semibold`}>{title}</h4>
            </header>
          ) : (
            ''
          )}
          {justifyText ? (
            <p className="sm:mt-2.5 text-justify">{children}</p>
          ) : (
            <p className="sm:mt-2.5 text-left">{children}</p>
          )}
        </div>

        {imgSrc2 ? (
          <img
            src={imgSrc}
            alt=""
            className="w-full md:w-auto"
            style={{ maxWidth: imgMaxWidth || '100%', width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TextWithImageBox;
