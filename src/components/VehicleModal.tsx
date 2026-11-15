import {ArrowUpRight, CarFront, ChevronLeft, ChevronRight, Phone, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import {
  BRAND_CONTACT,
  buildVehicleWhatsAppUrl,
  type VehicleListing,
} from '../data/inventory';

interface VehicleModalProps {
  vehicle: VehicleListing | null;
  initialPhotoIndex?: number;
  onClose: () => void;
}

export function VehicleModal({vehicle, initialPhotoIndex = 0, onClose}: VehicleModalProps) {
  const [photoIndex, setPhotoIndex] = useState(initialPhotoIndex);
  const [failedIndices, setFailedIndices] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setPhotoIndex(initialPhotoIndex);
    setFailedIndices({});
  }, [vehicle, initialPhotoIndex]);

  useEffect(() => {
    if (!vehicle) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setPhotoIndex((prev) =>
          prev === 0 ? vehicle.photos.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setPhotoIndex((prev) =>
          prev === vehicle.photos.length - 1 ? 0 : prev + 1
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  const currentPhoto = vehicle.photos[photoIndex] ?? vehicle.photos[0];
  const whatsappHref = buildVehicleWhatsAppUrl(vehicle);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="vehicle-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-y-auto rounded-sm border border-white/15 bg-[#121316] shadow-2xl lg:grid lg:grid-cols-12 lg:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close vehicle details"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-[#09090B]/90 text-[#F5F5F2] transition-colors hover:border-[#C9A45C] hover:text-[#DFC07F]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Column: High-Resolution Interactive Gallery */}
        <div className="flex flex-col bg-[#09090B] lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {!failedIndices[photoIndex] && currentPhoto ? (
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                referrerPolicy="no-referrer"
                onError={() =>
                  setFailedIndices((prev) => ({...prev, [photoIndex]: true}))
                }
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#0D0E11] px-6 text-center">
                <CarFront className="h-12 w-12 text-[#C9A45C]/70" strokeWidth={1.2} />
                <p className="font-display text-xl text-[#F5F5F2]">{vehicle.makeAndModel}</p>
              </div>
            )}

            {vehicle.photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setPhotoIndex((prev) =>
                      prev === 0 ? vehicle.photos.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous photograph"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-sm border border-white/20 bg-[#09090B]/80 text-[#F5F5F2] transition-colors hover:border-[#C9A45C] hover:text-[#DFC07F]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setPhotoIndex((prev) =>
                      prev === vehicle.photos.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next photograph"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-sm border border-white/20 bg-[#09090B]/80 text-[#F5F5F2] transition-colors hover:border-[#C9A45C] hover:text-[#DFC07F]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {currentPhoto && (
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#09090B]/90 via-[#09090B]/50 to-transparent px-4 py-3 text-xs text-[#C8CCD2]">
                <span>{currentPhoto.caption}</span>
                <span className="font-mono-tabular text-[#F5F5F2]">
                  {photoIndex + 1} / {vehicle.photos.length}
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-white/10 p-3">
            {vehicle.photos.map((photo, idx) => (
              <button
                key={photo.caption}
                type="button"
                onClick={() => setPhotoIndex(idx)}
                className={`relative aspect-[4/3] overflow-hidden rounded-sm border transition-all ${
                  idx === photoIndex
                    ? 'border-[#C9A45C] opacity-100'
                    : 'border-white/10 opacity-55 hover:opacity-90'
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
        </div>

        {/* Right Column: Complete Specifications & Concierge Actions */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:overflow-y-auto">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#8E939D]">
              <span className="font-medium text-[#C9A45C]">{vehicle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{vehicle.availability}</span>
            </div>

            <h2
              id="vehicle-modal-title"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#F5F5F2]"
            >
              {vehicle.makeAndModel}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#C8CCD2]">
              {vehicle.overview}
            </p>

            <div className="mt-5 flex items-baseline justify-between border-y border-white/10 py-3.5">
              <span className="text-xs uppercase tracking-[0.14em] text-[#8E939D]">
                Price (ETB)
              </span>
              <span className="font-mono-tabular text-lg font-semibold text-[#DFC07F]">
                {vehicle.priceEtb}
              </span>
            </div>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-white/6 pb-2">
                <dt className="text-[#8E939D]">Year</dt>
                <dd className="text-right font-medium text-[#F5F5F2] font-mono-tabular">
                  {vehicle.year}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/6 pb-2">
                <dt className="text-[#8E939D]">Specifications</dt>
                <dd className="text-right font-medium text-[#F5F5F2]">
                  {vehicle.specifications}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/6 pb-2">
                <dt className="text-[#8E939D]">Transmission</dt>
                <dd className="text-right font-medium text-[#F5F5F2]">
                  {vehicle.transmission}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/6 pb-2">
                <dt className="text-[#8E939D]">Fuel Type</dt>
                <dd className="text-right font-medium text-[#F5F5F2]">
                  {vehicle.fuelType}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/6 pb-2">
                <dt className="text-[#8E939D]">Mileage</dt>
                <dd className="text-right font-medium text-[#F5F5F2] font-mono-tabular">
                  {vehicle.mileage}
                </dd>
              </div>
              <div className="flex justify-between gap-4 pb-1">
                <dt className="text-[#8E939D]">Availability</dt>
                <dd className="text-right font-medium text-[#C9A45C]">
                  {vehicle.availability}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8E939D]">
                Allocation Standards
              </h3>
              <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-[#C8CCD2]">
                {vehicle.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#C9A45C]" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2.5 border-t border-white/10 pt-5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-sm bg-[#C9A45C] px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase text-[#09090B] transition-colors hover:bg-[#DFC07F]"
            >
              <span>Inquire on WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={BRAND_CONTACT.telHref}
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-sm border border-white/15 px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase text-[#F5F5F2] transition-colors hover:border-[#C9A45C] hover:text-[#DFC07F]"
            >
              <Phone className="h-3.5 w-3.5 text-[#C9A45C]" />
              <span>Call {BRAND_CONTACT.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
