import {ArrowUpRight} from 'lucide-react';
import {BRAND_CONTACT, VEHICLE_CATEGORIES, buildWhatsAppInquiryUrl} from '../data/inventory';
import {LogoPlaque} from './LogoPlaque';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070709] py-16">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Official Brand Logo Showcase */}
          <div className="md:col-span-5">
            <LogoPlaque size="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#8E939D]">
              {BRAND_CONTACT.brandName} — Premium car importer and luxury automotive showroom
              serving clients across {BRAND_CONTACT.country}.
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A45C]">
              Showroom
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#C8CCD2]">
              <li>
                <a href="#about" className="transition-colors hover:text-[#F5F5F2]">
                  About {BRAND_CONTACT.brandName}
                </a>
              </li>
              <li>
                <a href="#featured" className="transition-colors hover:text-[#F5F5F2]">
                  Featured Vehicles
                </a>
              </li>
              <li>
                <a href="#collection" className="transition-colors hover:text-[#F5F5F2]">
                  Full Collection
                </a>
              </li>
              <li>
                <a href="#process" className="transition-colors hover:text-[#F5F5F2]">
                  Importing Process
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-[#F5F5F2]">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Categories & Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A45C]">
              Vehicle Categories
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-[#C8CCD2]">
              {VEHICLE_CATEGORIES.map((category) => (
                <li key={category}>
                  <a href="#collection" className="transition-colors hover:text-[#F5F5F2]">
                    {category}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-5">
              <span className="block text-xs uppercase tracking-[0.16em] text-[#8E939D]">
                WhatsApp &amp; Telephone
              </span>
              <a
                href={buildWhatsAppInquiryUrl(
                  `Hello ${BRAND_CONTACT.brandName} Team, I would like to connect with your showroom.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-2 font-mono-tabular text-base font-semibold text-[#DFC07F] transition-colors hover:text-[#F5F5F2]"
              >
                <span>{BRAND_CONTACT.displayPhone}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#8E939D] sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} {BRAND_CONTACT.brandName}. {BRAND_CONTACT.country}.
          </p>
          <p>Official Concierge: {BRAND_CONTACT.displayPhone}</p>
        </div>
      </div>
    </footer>
  );
}
