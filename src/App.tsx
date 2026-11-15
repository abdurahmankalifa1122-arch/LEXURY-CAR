import {ArrowRight, ArrowUpRight, CarFront} from 'lucide-react';
import {motion} from 'motion/react';
import {useMemo, useState} from 'react';
import {Footer} from './components/Footer';
import {Navbar} from './components/Navbar';
import {
  AboutSection,
  ContactSection,
  FaqSection,
  ProcessSection,
  WhyChooseSection,
} from './components/ShowcaseSections';
import {VehicleCard} from './components/VehicleCard';
import {VehicleModal} from './components/VehicleModal';
import {
  BRAND_CONTACT,
  HERO_MEDIA,
  VEHICLE_CATEGORIES,
  VEHICLE_INVENTORY,
  buildWhatsAppInquiryUrl,
  type VehicleCategory,
  type VehicleListing,
} from './data/inventory';

type CategoryFilter = 'All' | VehicleCategory;

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [modalState, setModalState] = useState<{
    vehicle: VehicleListing | null;
    photoIndex: number;
  }>({
    vehicle: null,
    photoIndex: 0,
  });

  const featuredVehicles = useMemo(
    () => VEHICLE_INVENTORY.filter((v) => v.featured),
    []
  );

  const filteredVehicles = useMemo(() => {
    if (selectedCategory === 'All') {
      return VEHICLE_INVENTORY;
    }
    return VEHICLE_INVENTORY.filter((v) => v.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenVehicle = (vehicle: VehicleListing, initialPhotoIndex = 0) => {
    setModalState({vehicle, photoIndex: initialPhotoIndex});
  };

  return (
    <div id="top" className="min-h-screen bg-[#09090B] text-[#F5F5F2]">
      <Navbar />

      <main>
        {/* Cinematic Hero Experience */}
        <section className="relative flex min-h-[82vh] items-end overflow-hidden bg-[#09090B] pb-16 pt-24 sm:min-h-[88vh] sm:items-center sm:py-24">
          <div className="absolute inset-0">
            {!heroImgFailed ? (
              <img
                src={HERO_MEDIA.image}
                alt={HERO_MEDIA.alt}
                referrerPolicy="no-referrer"
                onError={() => setHeroImgFailed(true)}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#16181D] via-[#09090B] to-[#09090B]">
                <CarFront className="h-24 w-24 text-[#C9A45C]/30" strokeWidth={1} />
              </div>
            )}
            {/* Measured multi-directional contrast scrims */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#09090B]/95 via-[#09090B]/65 to-[#09090B]/20"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/40"
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-8">
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
              className="max-w-3xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#C9A45C]">
                {BRAND_CONTACT.brandName} · {BRAND_CONTACT.country}
              </p>

              <h1
                className="mt-4 font-display font-semibold leading-[1.04] tracking-tight text-[#F5F5F2]"
                style={{
                  fontSize: 'clamp(2.35rem, 4.6vw, 4.35rem)',
                  textWrap: 'balance',
                }}
              >
                EXCEPTIONAL CARS. EXTRAORDINARY EXPERIENCES.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#C8CCD2] sm:text-lg">
                Discover premium vehicles and find your next dream car with LEXURY CAR in Ethiopia.
              </p>

              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#collection"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-sm bg-[#C9A45C] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#09090B] transition-colors duration-200 hover:bg-[#DFC07F] whitespace-nowrap"
                >
                  <span>DISCOVER OUR COLLECTION</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/25 bg-[#09090B]/60 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F5F2] backdrop-blur-sm transition-colors duration-200 hover:border-[#C9A45C] hover:text-[#DFC07F] whitespace-nowrap"
                >
                  CONTACT OUR TEAM
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About LEXURY CAR */}
        <AboutSection />

        {/* Featured Vehicles Spotlight */}
        <section
          id="featured"
          className="border-t border-white/10 bg-[#121316] py-20 sm:py-28"
        >
          <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C9A45C]">
                  Showroom Highlights
                </p>
                <h2
                  className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F5F2] sm:text-5xl"
                  style={{textWrap: 'balance'}}
                >
                  Featured Vehicles
                </h2>
              </div>
              <a
                href="#collection"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#DFC07F] transition-colors hover:text-[#F5F5F2] whitespace-nowrap shrink-0"
              >
                <span>Explore Full Collection</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {featuredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  onSelect={handleOpenVehicle}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Full Vehicle Collection with Category Filters */}
        <section
          id="collection"
          className="border-t border-white/10 bg-[#09090B] py-20 sm:py-28"
        >
          <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C9A45C]">
                  Curated Automotive Gallery
                </p>
                <h2
                  className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F5F2] sm:text-5xl"
                  style={{textWrap: 'balance'}}
                >
                  Full Vehicle Collection
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#8E939D]">
                Browse by vehicle category, inspect multi-angle photographs, and request live
                pricing in ETB or bespoke vehicle sourcing via WhatsApp.
              </p>
            </div>

            {/* Interactive Category Filter Controls */}
            <div
              role="tablist"
              aria-label="Filter vehicles by category"
              className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-6"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'All'}
                onClick={() => setSelectedCategory('All')}
                className={`min-h-[42px] rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === 'All'
                    ? 'bg-[#C9A45C] text-[#09090B]'
                    : 'border border-white/12 bg-[#121316] text-[#C8CCD2] hover:border-[#C9A45C]/50 hover:text-[#F5F5F2]'
                }`}
              >
                All Categories
              </button>

              {VEHICLE_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[42px] rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === category
                      ? 'bg-[#C9A45C] text-[#09090B]'
                      : 'border border-white/12 bg-[#121316] text-[#C8CCD2] hover:border-[#C9A45C]/50 hover:text-[#F5F5F2]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Vehicle Grid */}
            <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  onSelect={handleOpenVehicle}
                />
              ))}
            </div>

            {/* Custom Vehicle Sourcing Callout */}
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-sm border border-[#C9A45C]/30 bg-[#121316] p-7 sm:flex-row sm:items-center sm:p-9">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A45C]">
                  Bespoke Import Sourcing
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#F5F5F2] sm:text-3xl">
                  Looking for a Specific Make, Model, or Trim?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C8CCD2]">
                  Share your exact specification preferences with our team and receive live sourcing
                  availability and transparent ETB pricing directly on WhatsApp.
                </p>
              </div>
              <a
                href={buildWhatsAppInquiryUrl(
                  `Hello ${BRAND_CONTACT.brandName} Team, I would like to request bespoke vehicle sourcing in Ethiopia.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-sm bg-[#C9A45C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#09090B] transition-colors hover:bg-[#DFC07F] whitespace-nowrap"
              >
                <span>Request Custom Import</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose LEXURY CAR */}
        <WhyChooseSection />

        {/* Our Importing Process */}
        <ProcessSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact Information & Direct WhatsApp Concierge */}
        <ContactSection />
      </main>

      <Footer />

      <VehicleModal
        vehicle={modalState.vehicle}
        initialPhotoIndex={modalState.photoIndex}
        onClose={() => setModalState({vehicle: null, photoIndex: 0})}
      />
    </div>
  );
}
