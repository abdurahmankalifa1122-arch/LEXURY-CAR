import {ArrowUpRight, CarFront, Check, ChevronDown, MessageCircle, Phone} from 'lucide-react';
import {motion} from 'motion/react';
import {useState, type FormEvent} from 'react';
import {
  ABOUT_MEDIA,
  BRAND_CONTACT,
  FAQ_ITEMS,
  PROCESS_STEPS,
  VEHICLE_CATEGORIES,
  buildWhatsAppInquiryUrl,
} from '../data/inventory';

const WHY_CHOOSE_PILLARS = [
  {
    number: '01',
    title: 'Curated International Sourcing',
    description:
      'Every vehicle presented through LEXURY CAR is selected for clean provenance, desirable specifications, and lasting engineering quality.',
  },
  {
    number: '02',
    title: 'Transparent Inspection & Documentation',
    description:
      'Condition reports, verified mileage, trim details, and import paperwork are reviewed thoroughly before vehicle commitment.',
  },
  {
    number: '03',
    title: 'Seamless Import Coordination',
    description:
      'From international sourcing and marine logistics to Ethiopian customs clearance, our specialists manage every stage cleanly.',
  },
  {
    number: '04',
    title: 'Direct Concierge Communication',
    description:
      'Speak directly with our team on WhatsApp or telephone for live ETB quotations, showroom viewings, and bespoke import requests.',
  },
] as const;

export function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#09090B] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C9A45C]">
              About {BRAND_CONTACT.brandName}
            </p>
            <h2
              className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[#F5F5F2] sm:text-5xl"
              style={{textWrap: 'balance'}}
            >
              Bringing International Automotive Prestige to Ethiopia
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#C8CCD2]">
              {BRAND_CONTACT.brandName} is a premier car importer and luxury automotive showroom
              dedicated to connecting clients in Ethiopia with exceptional vehicles sourced from
              leading international markets.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#8E939D]">
              Whether you are seeking a flagship luxury SUV, an executive chauffeur sedan, a
              refined family vehicle, or a freshly cleared arrival, every consultation is guided
              with clarity, discretion, and respect for your standards.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-sm text-[#C8CCD2]">
              <div>
                <span className="block text-xs uppercase tracking-[0.16em] text-[#8E939D]">
                  Showroom Market
                </span>
                <span className="mt-1 block font-medium text-[#F5F5F2]">
                  {BRAND_CONTACT.country}
                </span>
              </div>
              <div className="h-8 w-px bg-white/10" aria-hidden="true" />
              <div>
                <span className="block text-xs uppercase tracking-[0.16em] text-[#8E939D]">
                  Direct Concierge
                </span>
                <a
                  href={BRAND_CONTACT.telHref}
                  className="mt-1 block font-mono-tabular font-medium text-[#DFC07F] transition-colors hover:text-[#F5F5F2]"
                >
                  {BRAND_CONTACT.displayPhone}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-sm border border-white/10 bg-[#121316]">
              {!imgError ? (
                <img
                  src={ABOUT_MEDIA.image}
                  alt={ABOUT_MEDIA.alt}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover lg:h-full"
                />
              ) : (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 bg-[#121316]">
                  <CarFront className="h-12 w-12 text-[#C9A45C]/60" strokeWidth={1.2} />
                  <span className="font-display text-xl text-[#F5F5F2]">
                    {BRAND_CONTACT.brandName}
                  </span>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/70 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#F5F5F2]">
                  Bespoke Cabin Craftsmanship &amp; Verified Standards
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="border-t border-white/10 bg-[#121316] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C9A45C]">
            The LEXURY CAR Standard
          </p>
          <h2
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F5F2] sm:text-5xl"
            style={{textWrap: 'balance'}}
          >
            Why Choose {BRAND_CONTACT.brandName}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col justify-between bg-[#09090B] p-7 sm:p-8"
            >
              <div>
                <span className="font-mono-tabular text-xs font-medium tracking-[0.2em] text-[#C9A45C]">
                  {pillar.number}.
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#F5F5F2]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8E939D]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-t border-white/10 bg-[#09090B] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C9A45C]">
              Seamless Import Experience
            </p>
            <h2
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F5F2] sm:text-5xl"
              style={{textWrap: 'balance'}}
            >
              Our Importing Process
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#8E939D]">
            A structured four-stage workflow designed for clarity, verified condition, and
            dependable delivery across Ethiopia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col rounded-sm border border-white/10 bg-[#121316] p-7"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono-tabular text-sm font-semibold tracking-[0.18em] text-[#C9A45C]">
                  {step.number}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#8E939D]">
                  Stage
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-[#F5F5F2]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#C8CCD2]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-white/10 bg-[#121316] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C9A45C]">
              Buyer Guidance
            </p>
            <h2
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F5F2] sm:text-5xl"
              style={{textWrap: 'balance'}}
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#8E939D]">
              Direct answers regarding ETB pricing, bespoke vehicle sourcing, inspection standards,
              and contacting our showroom team.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10 lg:col-span-8">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[#DFC07F] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#C9A45C]"
                  >
                    <span className="font-display text-xl font-semibold text-[#F5F5F2] sm:text-2xl">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#C9A45C] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm leading-relaxed text-[#C8CCD2] sm:text-base">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [clientName, setClientName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(VEHICLE_CATEGORIES[0]);
  const [desiredModel, setDesiredModel] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setErrorMsg('Please enter your name so our concierge can address you properly.');
      return;
    }
    setErrorMsg('');

    const message = [
      `Hello ${BRAND_CONTACT.brandName} Team,`,
      `Name: ${clientName.trim()}`,
      `Category of Interest: ${selectedCategory}`,
      desiredModel.trim() ? `Preferred Make / Model: ${desiredModel.trim()}` : null,
      notes.trim() ? `Notes: ${notes.trim()}` : null,
      `Please share current availability and ETB pricing details.`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = buildWhatsAppInquiryUrl(message);
    setSubmittedUrl(url);
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#09090B] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Authentic Contact Info */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C9A45C]">
              Private Concierge
            </p>
            <h2
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F5F2] sm:text-5xl"
              style={{textWrap: 'balance'}}
            >
              Speak With Our Team
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#C8CCD2]">
              Reach {BRAND_CONTACT.brandName} directly for current availability, ETB quotations,
              custom vehicle import requests, and viewing arrangements in Ethiopia.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={buildWhatsAppInquiryUrl(
                  `Hello ${BRAND_CONTACT.brandName} Team, I would like to inquire about your luxury vehicles in Ethiopia.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-sm border border-[#C9A45C]/50 bg-[#121316] p-5 transition-colors hover:border-[#DFC07F]"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-5 w-5 text-[#C9A45C]" />
                  <div>
                    <span className="block text-xs uppercase tracking-[0.16em] text-[#8E939D]">
                      WhatsApp Direct
                    </span>
                    <span className="mt-0.5 block font-mono-tabular text-lg font-semibold text-[#F5F5F2]">
                      {BRAND_CONTACT.displayPhone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#C9A45C]" />
              </a>

              <a
                href={BRAND_CONTACT.telHref}
                className="flex items-center justify-between rounded-sm border border-white/10 bg-[#121316] p-5 transition-colors hover:border-[#C9A45C]/50"
              >
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#C9A45C]" />
                  <div>
                    <span className="block text-xs uppercase tracking-[0.16em] text-[#8E939D]">
                      Telephone Line
                    </span>
                    <span className="mt-0.5 block font-mono-tabular text-lg font-semibold text-[#F5F5F2]">
                      {BRAND_CONTACT.displayPhone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#8E939D]" />
              </a>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.16em] text-[#8E939D]">
              Serving Clients Across {BRAND_CONTACT.country}
            </div>
          </div>

          {/* Right Column: Validated WhatsApp Inquiry Composer */}
          <div className="rounded-sm border border-white/10 bg-[#121316] p-6 sm:p-10 lg:col-span-7">
            <h3 className="font-display text-2xl font-semibold text-[#F5F5F2] sm:text-3xl">
              Prepare a Direct WhatsApp Inquiry
            </h3>
            <p className="mt-2 text-sm text-[#8E939D]">
              Specify your preferences below to generate a direct concierge message to{' '}
              <span className="font-mono-tabular text-[#C8CCD2]">
                {BRAND_CONTACT.displayPhone}
              </span>
              .
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="block text-xs font-medium uppercase tracking-[0.14em] text-[#C8CCD2]"
                  >
                    Your Name
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={clientName}
                    onChange={(e) => {
                      setClientName(e.target.value);
                      setSubmittedUrl(null);
                    }}
                    placeholder="Enter your full name"
                    className="mt-2 w-full rounded-sm border border-white/15 bg-[#09090B] px-4 py-3 text-sm text-[#F5F5F2] placeholder:text-[#8E939D]/70 focus:border-[#C9A45C] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-category"
                    className="block text-xs font-medium uppercase tracking-[0.14em] text-[#C8CCD2]"
                  >
                    Vehicle Category
                  </label>
                  <select
                    id="inquiry-category"
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSubmittedUrl(null);
                    }}
                    className="mt-2 w-full rounded-sm border border-white/15 bg-[#09090B] px-4 py-3 text-sm text-[#F5F5F2] focus:border-[#C9A45C] focus:outline-none"
                  >
                    {VEHICLE_CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                    <option value="Custom Import Request">Custom Import Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiry-model"
                  className="block text-xs font-medium uppercase tracking-[0.14em] text-[#C8CCD2]"
                >
                  Preferred Make, Model or Year (Optional)
                </label>
                <input
                  id="inquiry-model"
                  type="text"
                  value={desiredModel}
                  onChange={(e) => {
                    setDesiredModel(e.target.value);
                    setSubmittedUrl(null);
                  }}
                  placeholder="Specify make, model, color, or fuel preference"
                  className="mt-2 w-full rounded-sm border border-white/15 bg-[#09090B] px-4 py-3 text-sm text-[#F5F5F2] placeholder:text-[#8E939D]/70 focus:border-[#C9A45C] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiry-notes"
                  className="block text-xs font-medium uppercase tracking-[0.14em] text-[#C8CCD2]"
                >
                  Additional Details (Optional)
                </label>
                <textarea
                  id="inquiry-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                    setSubmittedUrl(null);
                  }}
                  placeholder="Share timeline, preferred viewing schedule, or specification questions"
                  className="mt-2 w-full rounded-sm border border-white/15 bg-[#09090B] px-4 py-3 text-sm text-[#F5F5F2] placeholder:text-[#8E939D]/70 focus:border-[#C9A45C] focus:outline-none"
                />
              </div>

              {errorMsg && (
                <p role="alert" className="text-xs font-medium text-[#DFC07F]">
                  {errorMsg}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm bg-[#C9A45C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#09090B] transition-colors hover:bg-[#DFC07F]"
                >
                  <span>Prepare WhatsApp Message</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                {submittedUrl && (
                  <a
                    href={submittedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm border border-[#C9A45C] bg-[#09090B] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#DFC07F] transition-colors hover:bg-[#C9A45C] hover:text-[#09090B]"
                  >
                    <Check className="h-4 w-4" />
                    <span>Open WhatsApp Chat Now</span>
                  </a>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
