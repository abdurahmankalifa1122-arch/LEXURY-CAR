import {Menu, X} from 'lucide-react';
import {useState} from 'react';
import {BRAND_CONTACT, buildWhatsAppInquiryUrl} from '../data/inventory';
import {LogoPlaque} from './LogoPlaque';

const NAV_LINKS = [
  {label: 'About', href: '#about'},
  {label: 'Collection', href: '#collection'},
  {label: 'Process', href: '#process'},
  {label: 'FAQ', href: '#faq'},
  {label: 'Contact', href: '#contact'},
] as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappHref = buildWhatsAppInquiryUrl(
    `Hello ${BRAND_CONTACT.brandName} Team, I would like to speak with your showroom specialists.`
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090B]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-8 px-4 py-2.5 sm:px-8">
        {/* Zone 1: Brand Mark (official logo preserved in high-contrast ivory plaque) */}
        <a
          href="#top"
          aria-label={`${BRAND_CONTACT.brandName} Home`}
          className="flex items-center gap-3.5 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A45C]"
        >
          <LogoPlaque size="header" />
          <span className="hidden sm:inline-block font-display text-lg font-semibold tracking-[0.14em] text-[#F5F5F2] whitespace-nowrap shrink-0">
            {BRAND_CONTACT.brandName}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#C8CCD2]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#F5F5F2] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#C9A45C] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A45C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-[#C9A45C] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase text-[#09090B] transition-colors duration-200 hover:bg-[#DFC07F] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
          >
            WhatsApp Inquiry
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden items-center justify-center rounded-sm border border-white/15 bg-[#121316] p-2.5 text-[#F5F5F2] transition-colors hover:border-[#C9A45C]/60 min-h-[44px] min-w-[44px]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#09090B] px-4 py-5 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-sm px-3 py-3 text-sm font-medium text-[#C8CCD2] transition-colors hover:bg-[#121316] hover:text-[#F5F5F2]"
              >
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-[#C9A45C] px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase text-[#09090B] transition-colors hover:bg-[#DFC07F]"
            >
              WhatsApp Inquiry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
