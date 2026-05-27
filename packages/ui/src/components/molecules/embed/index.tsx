import React, { useEffect, useState } from 'react';

export interface EmbedProps {
  text?: React.ReactNode;
  link?: string;
  isVimeo?: boolean;
  isOnlyText?: boolean;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  isReels?: boolean;
  /** optional width to use for tablet viewports (e.g. '700px') */
  widthTablet?: string;
  /** optional class override for the outer container */
  containerClassName?: string;
}

export const Embed: React.FC<EmbedProps> = ({
  text,
  link,
  isVimeo = false,
  children,
  isOnlyText = false,
  width = '100%',
  height = '500px',
  isReels = false,
  widthTablet,
  containerClassName,
}) => {

  useEffect(() => {
    if (isReels && link) {
      if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isReels, link]);

  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const chosenWidth = (() => {
    if (windowWidth >= 640 && windowWidth <= 1024) {
      return widthTablet || width;
    }
    return width;
  })();

  return (
    <div className={containerClassName ?? 'flex flex-col items-center gap-2 w-full my-6'}>
      {text && (
        <div className="w-full max-w-[1066px] flex items-center justify-start mb-4">
          <div className="text-[#333333]">{text}</div>
        </div>
      )}
      
      {!isOnlyText && isReels && link && (
        <div className="mb-10" style={{ width: chosenWidth, height }}>
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink={link} 
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px auto',
              maxWidth: chosenWidth || '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%',
              height: height || 'auto',
            }}
          >
          </blockquote>
        </div>
      )}

      {!isOnlyText && !isReels && link && (
        (() => {
          const youtubeWatch = /(?:https?:)?\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i;
          const youtuShort = /(?:https?:)?\/\/(?:www\.)?youtu\.be\/([^?&]+)/i;
          const playlistParam = /[?&]list=([^&]+)/i;
          const driveFile = /(?:https?:)?\/\/drive\.google\.com\/file\/d\/([^/]+)\/?.*/i;
          const driveOpen = /(?:https?:)?\/\/drive\.google\.com\/open\?id=([^&]+)/i;
          const spotifyOpen = /(?:https?:)?\/\/(?:open\.)?spotify\.com\/(episode|track|playlist|show)\/([^?&]+)/i;

          let src = link;

          const watchMatch = link.match(youtubeWatch);
          const shortMatch = link.match(youtuShort);

          if (watchMatch || shortMatch) {
            const videoId = watchMatch ? watchMatch[1] : shortMatch ? shortMatch[1] : null;
            const listMatch = link.match(playlistParam);
            const list = listMatch ? listMatch[1] : null;
            src = `https://www.youtube-nocookie.com/embed/${videoId}` + (list ? `?list=${list}` : "");
          } else {
            const spotifyMatch = link.match(spotifyOpen);
            if (spotifyMatch) {
              const kind = spotifyMatch[1];
              const id = spotifyMatch[2];
              src = `https://open.spotify.com/embed/${kind}/${id}`;
            }
            const driveMatch = link.match(driveFile) || link.match(driveOpen);
            if (driveMatch && driveMatch[1]) {
              const id = driveMatch[1];
              src = `https://drive.google.com/file/d/${id}/preview`;
            }
          }

          if (isVimeo && !src.includes('player.vimeo.com')) {
             const vimeoId = link.split('/').pop();
             src = `https://player.vimeo.com/video/${vimeoId}`;
          }

          return (
            <iframe
              className="mb-10 border-none rounded-lg shadow-md"
              src={src}
              title="Embedded media"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: chosenWidth, height }}
            />
          );
        })()
      )}

      {!isOnlyText && !link && children}
    </div>
  );
};
