import React, { useEffect, useState } from 'react';

interface EmbedProps {
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

const Embed: React.FC<EmbedProps> = ({
  text,
  link,
  isVimeo = false,
  children,
  isOnlyText = false,
  width = '',
  height = '',
  isReels = false,
  widthTablet,
  containerClassName,
}) => {
  // Remova o import de 'icon' se ele não for usado.

  useEffect(() => {
    if (isReels && link) {
      // Carregar o script do Instagram se ainda não estiver carregado
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

  // choose width depending on viewport: tablet range ~640-1024px
  const chosenWidth = (() => {
    if (windowWidth >= 640 && windowWidth <= 1024) {
      return widthTablet || width;
    }
    return width;
  })();

  return (
    <div className={containerClassName ?? 'flex flex-col items-center gap-[0.5rem] w-full'}>
      <div className="w-full max-w-[1066px] flex items-center justify-start gap-5">
        {text && <p>{text}</p>}
      </div>
      
      {!isOnlyText && isReels && link && (
        <div className="mb-10" style={{ width, height }}>
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink={link} 
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: chosenWidth || '540px',
              minWidth: '326px',
              padding: '0',
              width: chosenWidth || '99.375%',
              height: height || 'auto',
            }}
          >
            {/* Conteúdo mínimo para o Instagram processar */}
          </blockquote>
        </div>
      )}

      {!isOnlyText && !isReels && link && (
        (() => {
          // Normalize common embed links to proper embed URLs
          // YouTube (watch and short links) -> youtube-nocookie embed
          const youtubeWatch = /(?:https?:)?\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i;
          const youtuShort = /(?:https?:)?\/\/(?:www\.)?youtu\.be\/([^?&]+)/i;
          const playlistParam = /[?&]list=([^&]+)/i;

          // Google Drive file links: /file/d/:id/view or open?id=:id
          const driveFile = /(?:https?:)?\/\/drive\.google\.com\/file\/d\/([^/]+)\/?.*/i;
          const driveOpen = /(?:https?:)?\/\/drive\.google\.com\/open\?id=([^&]+)/i;

          // Spotify open links -> spotify embed
          // Example: https://open.spotify.com/episode/7F6mWkn6tPqr0HMHA86Deu?si=... -> https://open.spotify.com/embed/episode/7F6mWkn6tPqr0HMHA86Deu
          const spotifyOpen = /(?:https?:)?\/\/(?:open\.)?spotify\.com\/(episode|track|playlist|show)\/([^?&]+)/i;

          let src = link;

          const watchMatch = link.match(youtubeWatch);
          const shortMatch = link.match(youtuShort);

          if (watchMatch || shortMatch) {
            const videoId = watchMatch ? watchMatch[1] : shortMatch ? shortMatch[1] : null;
            const listMatch = link.match(playlistParam);
            const list = listMatch ? listMatch[1] : null;
            // Use the privacy-enhanced nocookie domain to avoid some embed restrictions
            src = `https://www.youtube-nocookie.com/embed/${videoId}` + (list ? `?list=${list}` : "");
          } else {
            const spotifyMatch = link.match(spotifyOpen);
            if (spotifyMatch) {
              const kind = spotifyMatch[1];
              const id = spotifyMatch[2];
              src = `https://open.spotify.com/embed/${kind}/${id}`;
            }
            // Google Drive handling (convert to preview/embed URL)
            const driveMatch = link.match(driveFile) || link.match(driveOpen);
            if (driveMatch && driveMatch[1]) {
              const id = driveMatch[1];
              // Use /preview which works for most Drive-hosted videos/documents
              src = `https://drive.google.com/file/d/${id}/preview`;
            }
          }

          return (
            <iframe
              className="iframe-style mb-10"
              src={src}
              title="Embedded media"
              // Allow media playback and encrypted media for Spotify/YouTube embeds
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: chosenWidth || width, height }}
            />
          );
        })()
      )}

      {!isOnlyText && !link && children}
    </div>
  );
};

export default Embed;