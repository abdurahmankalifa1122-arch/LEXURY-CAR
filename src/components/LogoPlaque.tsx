import {useState} from 'react';
import {BRAND_CONTACT} from '../data/inventory';

interface LogoPlaqueProps {
  size?: 'header' | 'footer';
}

export function LogoPlaque({size = 'header'}: LogoPlaqueProps) {
  const primarySrc = `${import.meta.env.BASE_URL}lexury-logo.png`;
  const fallbackSrc = 'https://i.ibb.co/Ng1BwVDD/image.png';
  const [imgSrc, setImgSrc] = useState(primarySrc);
  const [imgFailed, setImgFailed] = useState(false);

  const isHeader = size === 'header';

  return (
    <div
      className={`inline-flex items-center justify-center rounded-sm bg-[#FAF9F6] border border-[#C9A45C]/45 shadow-sm transition-colors duration-200 ${
        isHeader ? 'px-3 py-1.5' : 'px-6 py-5'
      }`}
    >
      {!imgFailed ? (
        <img
          src={imgSrc}
          alt={`${BRAND_CONTACT.brandName} Official Logo`}
          referrerPolicy="no-referrer"
          onError={() => {
            if (imgSrc !== fallbackSrc) {
              setImgSrc(fallbackSrc);
            } else {
              setImgFailed(true);
            }
          }}
          className={`w-auto object-contain select-none ${
            isHeader ? 'h-10 sm:h-11' : 'h-28 sm:h-32'
          }`}
        />
      ) : (
        <span
          className={`font-display font-semibold tracking-wider text-[#09090B] ${
            isHeader ? 'text-base' : 'text-2xl'
          }`}
        >
          {BRAND_CONTACT.brandName}
        </span>
      )}
    </div>
  );
}
