import {ArrowUpRight, CarFront, ChevronLeft, ChevronRight, Images} from 'lucide-react';
import {useState} from 'react';
import {buildVehicleWhatsAppUrl, type VehicleListing} from '../data/inventory';

interface VehicleCardProps {
  vehicle: VehicleListing;
  onSelect: (vehicle: VehicleListing, initialPhotoIndex?: number) => void;
}

export function VehicleCard({vehicle, onSelect}: VehicleCardProps) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [imageErrorMap, setImageErrorMap] = useState<Record<number, boolean>>({});

  const totalPhotos = vehicle.photos.length;
  const currentPhoto = vehicle.photos[activePhoto] ?? vehicle.photos[0];
  const hasError = imageErrorMap[activePhoto] ?? false;

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhoto((prev) => (prev === 0 ? totalPhotos - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhoto((prev) => (prev === totalPhotos - 1 ? 0 : prev + 1));
  };

  const whatsappHref = buildVehicleWhatsAppUrl(vehicle);

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#121316] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#C9A45C]/40">
      {/* Multi-photo 4:3 visual viewport */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D0E11]">
        <button
          type="button"
          onClick={() => onSelect(vehicle, activePhoto)}
          aria-label={`Open full gallery for ${vehicle.makeAndModel}`}
          className="block h-full w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#C9A45C]"
        >
          {!hasError && currentPhoto ? (
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              referrerPolicy="no-referrer"
              onError={() => setImageErrorMap((prev) => ({...prev, [activePhoto]: true}))}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#16181D] to-[#09090B] px-6 text-center">
              <CarFront className="h-10 w-10 text-[#C9A45C]/70" strokeWidth={1.25} />
              <span className="font-display text-lg text-[#F5F5F2]">{vehicle.makeAndModel}</span>
            </div>
          )}

          {/* Subtle gradient scrim for bottom controls legibility */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#09090B]/85 via-[#09090B]/30 to-transparent"
          />
        </button>

        {/* Bottom photo indicator & cycling controls */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onSelect(vehicle, activePhoto)}
            className="inline-flex items-center gap-1.5 bg-[#09090B]/80 px-2.5 py-1 text-[11px] font-medium tracking-wider text-[#F5F5F2] backdrop-blur-sm transition-colors hover:text-[#C9A45C]"
          >
            <Images className="h-3.5 w-3.5 text-[#C9A45C]" />
            <span className="font-mono-tabular">
              {activePhoto + 1} / {totalPhotos}
            </span>
          </button>

          {totalPhotos > 1 && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevPhoto}
                aria-label="Previous vehicle photograph"
                className="flex h-8 w-8 items-center justify-center border border-white/15 bg-[#09090B]/80 text-[#F5F5F2] backdrop-blur-sm transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                aria-label="Next vehicle photograph"
                className="flex h-8 w-8 items-center justify-center border border-white/15 bg-[#09090B]/80 text-[#F5F5F2] backdrop-blur-sm transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      {totalPhotos > 1 && (
        <div className="grid grid-cols-3 gap-px border-y border-white/10 bg-white/10">
          {vehicle.photos.map((photo, idx) => (
            <button
              key={photo.caption}
              type="button"
              onClick={() => setActivePhoto(idx)}
              aria-label={`Preview ${photo.caption}`}
              className={`relative h-14 overflow-hidden bg-[#0D0E11] transition-opacity ${
                idx === activePhoto ? 'opacity-100 ring-1 ring-inset ring-[#C9A45C]' : 'opacity-55 hover:opacity-85'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Vehicle Specification & Pricing Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Quiet unboxed metadata line */}
        <div className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-[#8E939D]">
          <span className="text-[#C9A45C] font-medium">{vehicle.category}</span>
          <span aria-hidden="true">·</span>
          <span>{vehicle.availability}</span>
        </div>

        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#F5F5F2]">
          {vehicle.makeAndModel}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#C8CCD2]">{vehicle.specifications}</p>

        {/* Clean 2x2 Specification Grid */}
        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-white/10 py-4 text-xs">
          <div>
            <dt className="text-[#8E939D]">Year</dt>
            <dd className="mt-0.5 font-medium text-[#F5F5F2] font-mono-tabular">{vehicle.year}</dd>
          </div>
          <div>
            <dt className="text-[#8E939D]">Transmission</dt>
            <dd className="mt-0.5 font-medium text-[#F5F5F2]">{vehicle.transmission}</dd>
          </div>
          <div>
            <dt className="text-[#8E939D]">Fuel Type</dt>
            <dd className="mt-0.5 font-medium text-[#F5F5F2]">{vehicle.fuelType}</dd>
          </div>
          <div>
            <dt className="text-[#8E939D]">Mileage</dt>
            <dd className="mt-0.5 font-medium text-[#F5F5F2] font-mono-tabular">{vehicle.mileage}</dd>
          </div>
        </dl>

        {/* Price Row */}
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.14em] text-[#8E939D]">Price</span>
          <span className="font-mono-tabular text-base font-semibold text-[#DFC07F]">
            {vehicle.priceEtb}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onSelect(vehicle, activePhoto)}
            className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-white/15 bg-transparent px-4 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase text-[#F5F5F2] transition-colors duration-200 hover:border-[#C9A45C] hover:text-[#DFC07F] whitespace-nowrap"
          >
            Gallery &amp; Specs
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-sm bg-[#C9A45C] px-4 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase text-[#09090B] transition-colors duration-200 hover:bg-[#DFC07F] whitespace-nowrap"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
