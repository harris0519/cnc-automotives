import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CarFront,
  Check,
  ChevronLeft,
  ChevronRight,
  Crown,
  Gauge,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
  Wrench,
  X,
  Zap
} from 'lucide-react';
import logo from './assets/cnc-logo.png';


const vehicles = [
  {
    name: "Toyota Innova",
    image: "/images/cnc innova.png",
    category: "Executive MPV",
    seats: "Up to 4 Guests"
  },
  {
    name: "Super Grandia Elite",
    image: "/images/cnc grandia elite.png",
    category: "Luxury Van",
    seats: "Up to 8 Guests"
  },
  {
    name: "Grandia GL Tourer",
    image: "/images/cnc tourer.png",
    category: "Premium High Roof",
    seats: "Up to 12 Guests"
  },
  {
    name: "Land Cruiser 300",
    image: "/images/cnc LC.png",
    category: "Flagship SUV",
    seats: "Up to 4 Guests"
  },
  {
    name: "Land Cruiser Prado",
    image: "/images/cnc prado.png",
    category: "Executive SUV",
    seats: "Up to 4 Guests"
  },
  {
    name: "Hilux Conquest",
    image: "/images/cnc toycon.png",
    category: "Premium Pickup",
    seats: "Up to 4 Guests"
  }
];

const testimonials = [
  { name: 'Corporate Travel Client', role: 'Monthly executive transport', quote: 'The booking process is easy, the vehicle is always clean, and the driver is consistently professional. It gives our team one less thing to worry about.', className: 'client-one', video: '/videos/testimonial-1.mp4' },
  { name: 'Family Trip Client', role: 'Provincial VIP rental', quote: 'Comfortable from pick-up to drop-off. The team was responsive throughout the trip and the Grandia felt truly premium.', className: 'client-two', video: '/videos/testimonial-2.mp4' },
  { name: 'Fleet Service Partner', role: 'Preventive maintenance support', quote: 'Their mobile service setup keeps our vehicles maintained without disrupting daily operations. Practical, dependable and transparent.', className: 'client-three', video: '/videos/testimonial-3.mp4' }
];


const logoServices = [
  { name: 'VIP Rentals', detail: 'Premium vehicles. Professional drivers.', icon: Crown },
  { name: 'Mechanical', detail: 'Expert service at your preferred location.', icon: Wrench },
  { name: 'Fleet Management', detail: 'Reliable transport and maintenance support.', icon: Truck },
  { name: 'Project Cars', detail: 'Builds, restorations and custom automotive work.', icon: Sparkles }
];

const memberships = [
  {
    name: 'Privilege',
    price: '₱20,000',
    label: 'Prepaid travel wallet',
    description: 'Built for repeat clients who want faster booking and flexible use of their rental credit.',
    benefits: ['Use your balance across eligible VIP rentals', 'Priority booking assistance', 'Member-only trip offers', 'Consolidated monthly trip summary']
  },
  {
    name: 'Executive',
    price: '₱40,000',
    label: 'Preferred client plan',
    featured: true,
    description: 'For professionals, families and businesses with regular monthly travel requirements.',
    benefits: ['Higher booking priority', 'Preferred vehicle access', 'Dedicated booking coordinator', 'Complimentary waiting-time allowance on selected trips']
  },
  {
    name: 'Corporate',
    price: 'Custom',
    label: 'Fleet mobility account',
    description: 'A structured transport and service arrangement designed around your company operations.',
    benefits: ['Vehicle and driver allocation', 'Monthly billing options', 'Trip and maintenance reporting', 'Flexible fleet support agreement']
  }
];

const FLEET_VIDEO =
  "https://assets.cdn.filesafe.space/RAy1FldhpgdvIee2xIEt/media/6a4cf9eb2d9cf80515ca67df.mp4";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [vehicleIndex, setVehicleIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(null);
  const [activeLogoService, setActiveLogoService] = useState(0);

  useEffect(() => {
    const serviceTimer = window.setInterval(() => {
      setActiveLogoService((current) => (current + 1) % logoServices.length);
    }, 2400);
    return () => window.clearInterval(serviceTimer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const featuredVehicles = useMemo(() => (
    [0, 1, 2].map((offset) => vehicles[(vehicleIndex + offset) % vehicles.length])
  ), [vehicleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const nextVehicle = (direction) => {
    setVehicleIndex((current) => (current + direction + vehicles.length) % vehicles.length);
  };

  const openFleetVideo = () => {
    setVideoOpen({
      type: 'fleet',
      src: FLEET_VIDEO,
      title: 'C&C 1023 Fleet Presentation'
    });
  };

  const openTestimonialVideo = () => {
    const testimonial = testimonials[testimonialIndex];

    setVideoOpen({
      type: 'testimonial',
      src: testimonial.video,
      title: `${testimonial.name} Testimonial`
    });
  };

  const closeVideo = () => setVideoOpen(null);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <button className="header-brand" onClick={() => scrollTo('home')} aria-label="Go to homepage">
          <img src={logo} alt="C&C 1023 Automotives" />
        </button>
<div className="header-contact">
  <a
    href="tel:+639327645297"
    className="header-contact-item hotline"
  >
    <Phone size={15} />

    <span>
      <small>Booking Hotline</small>
      <strong>+63 932 764 5297</strong>
    </span>
  </a>

  <a
    href="mailto:info@cnc1023auto.com"
    className="header-contact-item email"
  >
    <MessageCircle size={15} />

    <span>
      <small>Email Us</small>
      <strong>info@cnc1023auto.com</strong>
    </span>
  </a>
</div>
        <nav className={`desktop-nav ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('fleet')}>VIP Fleet</button>
          <button onClick={() => scrollTo('services')}>Services</button>
          <button onClick={() => scrollTo('membership')}>Membership</button>
          <button onClick={() => scrollTo('stories')}>Client Stories</button>
          <button className="nav-book" onClick={() => scrollTo('contact')}>Book Now</button>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-noise" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-copy">
            <span className="eyebrow"><Crown size={17} /> Complete premium automotive experience</span>
            <h1>Driven by service.<br /><span>Defined by trust.</span></h1>
            <p>
              VIP rentals, mobile mechanical care, corporate fleet solutions and project car services—designed around your time, your comfort and your peace of mind.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo('membership')}>Explore Membership <ArrowRight size={18} /></button>
              <button type="button" className="text-button" onClick={openFleetVideo}><span className="play-dot"><Play size={15} fill="currentColor" /></span> Watch our fleet film</button>
            </div>
            <div className="hero-proof">
              <div><strong>VIP</strong><span>Professional travel</span></div>
              <div><strong>On-site</strong><span>Mechanical service</span></div>
              <div><strong>360°</strong><span>Fleet support</span></div>
            </div>
          </div>

          <div className="logo-stage" aria-label="Animated C&C 1023 Automotives logo and services">
            <div className="logo-halo halo-one" />
            <div className="logo-halo halo-two" />
            <div className="service-orbit orbit-services-one" />
            <div className="service-orbit orbit-services-two" />

            {logoServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  type="button"
                  className={`logo-service-chip service-chip-${index + 1} ${activeLogoService === index ? 'active' : ''}`}
                  key={service.name}
                  onClick={() => setActiveLogoService(index)}
                >
                  <span><Icon size={17} /></span>
                  {service.name}
                </button>
              );
            })}

            <div className="logo-core">
              <span className="logo-scan" />
              <img src={logo} alt="C&C 1023 Automotives large logo" />
            </div>

            <div className="logo-service-display" key={logoServices[activeLogoService].name}>
              <span>Our services</span>
              <strong>{logoServices[activeLogoService].name}</strong>
              <p>{logoServices[activeLogoService].detail}</p>
              <div className="service-progress">
                {logoServices.map((service, index) => (
                  <button
                    type="button"
                    aria-label={`Show ${service.name}`}
                    className={activeLogoService === index ? 'active' : ''}
                    onClick={() => setActiveLogoService(index)}
                    key={service.name}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-marquee">
            <div>
              <span>VIP RENTALS</span><b>•</b><span>MOBILE MECHANICAL SERVICES</span><b>•</b><span>FLEET SOLUTIONS</span><b>•</b><span>PROJECT CARS</span><b>•</b>
              <span>VIP RENTALS</span><b>•</b><span>MOBILE MECHANICAL SERVICES</span><b>•</b><span>FLEET SOLUTIONS</span><b>•</b><span>PROJECT CARS</span><b>•</b>
            </div>
          </div>
        </section>

        <section className="film-section section" id="fleet-film">
          <div className="film-copy">
            <span className="section-tag">The C&C experience</span>
            <h2>See the fleet.<br />Feel the standard.</h2>
            <p>A cinematic space for your fleet presentation video—showing vehicle details, interiors, professional drivers and the experience your clients can expect.</p>
            <button
              type="button"
              className="outline-button"
              onClick={openFleetVideo}
            >
              Play fleet video
              <Play size={16} fill="currentColor" />
            </button>
          </div>
          <button
            type="button"
            className="fleet-film-card"
            onClick={openFleetVideo}
            aria-label="Play C&C 1023 fleet video"
          >
            <video
              className="fleet-preview-video"
              muted
              playsInline
              preload="metadata"
              poster="/images/fleet-video-poster.jpg"
            >
              <source src={FLEET_VIDEO} type="video/mp4" />
            </video>

            <div className="film-card-overlay" />

            <span className="film-label">
              C&C 1023 Fleet Film
            </span>

            <span className="film-play">
              <Play size={28} fill="currentColor" />
            </span>

            <small>Click to watch our fleet presentation</small>
          </button>
        </section>

        <section className="fleet-section section" id="fleet">
          <div className="section-intro light">
            <span className="section-tag">VIP fleet</span>
            <h2>A vehicle for every standard of travel.</h2>
            <p>Executive mobility, airport transfers, family journeys, company transport and special events—supported by professional drivers and trip coordination.</p>
          </div>

          <div className="vehicle-carousel">
            {featuredVehicles.map((vehicle, index) => (
              <article className={`vehicle-card ${index === 0 ? 'active' : ''}`} key={`${vehicle.name}-${index}`}>
                <div className="vehicle-art">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="vehicle-photo"
                  />

                  <div className="vehicle-overlay"></div>

                  <div className="vehicle-count">
                    {String((vehicleIndex + index) % vehicles.length + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="vehicle-details">
                  <div><small>{vehicle.category}</small><h3>{vehicle.name}</h3></div>
                  <span>{vehicle.seats}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="carousel-bar">
            <span>{String(vehicleIndex + 1).padStart(2, '0')} / {String(vehicles.length).padStart(2, '0')}</span>
            <div className="carousel-line"><i style={{ width: `${((vehicleIndex + 1) / vehicles.length) * 100}%` }} /></div>
            <div className="carousel-buttons">
              <button onClick={() => nextVehicle(-1)} aria-label="Previous vehicle"><ChevronLeft /></button>
              <button onClick={() => nextVehicle(1)} aria-label="Next vehicle"><ChevronRight /></button>
            </div>
          </div>
        </section>

        <section className="services-section section" id="services">
          <div className="section-intro">
            <span className="section-tag dark">Beyond the drive</span>
            <h2>One partner for every vehicle need.</h2>
          </div>
          <div className="premium-services">
            <article>
              <div className="service-number">01</div><CarFront />
              <h3>VIP Rentals</h3><p>Premium vehicles with professional drivers for corporate, personal and long-distance travel.</p>
              <span>Executive comfort / Door-to-door service / Trip coordination</span>
            </article>
            <article>
              <div className="service-number">02</div><Wrench />
              <h3>Mobile Mechanical Care</h3><p>Maintenance and repairs at your home, office or preferred location—without queues or wasted time.</p>
              <span>PMS / Diagnostics / Repairs / Preventive care</span>
            </article>
            <article>
              <div className="service-number">03</div><Truck />
              <h3>Corporate Fleet Solutions</h3><p>Transport support and organized vehicle maintenance that keep company operations moving.</p>
              <span>Fleet transport / Service scheduling / Vehicle records</span>
            </article>
            <article>
              <div className="service-number">04</div><Sparkles />
              <h3>Project Cars</h3><p>Restoration, upgrades and custom improvement plans for vehicles worth bringing back to life.</p>
              <span>Restoration / Refresh / Enhancement / Build planning</span>
            </article>
          </div>
        </section>

        <section className="membership-section section" id="membership">
          <div className="membership-heading">
            <div><span className="section-tag">C&C Membership</span><h2>Premium travel, ready when you are.</h2></div>
            <p>Pre-fund your upcoming trips, enjoy member privileges and simplify repeat bookings through a dedicated rental membership account.</p>
          </div>
          <div className="membership-grid">
            {memberships.map((plan) => (
              <article className={`membership-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                {plan.featured && <span className="popular-badge"><Star size={13} fill="currentColor" /> Most popular</span>}
                <small>{plan.label}</small>
                <h3>{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <p>{plan.description}</p>
                <ul>{plan.benefits.map((item) => <li key={item}><Check size={16} /> {item}</li>)}</ul>
                <button onClick={() => scrollTo('contact')}>{plan.name === 'Corporate' ? 'Request proposal' : 'Join membership'} <ArrowRight size={16} /></button>
              </article>
            ))}
          </div>
          <p className="membership-note">Membership amounts are prepaid rental credits. Final inclusions, availability and trip charges may be customized in your official terms.</p>
        </section>

        <section className="stories-section section" id="stories">
          <div className="stories-heading">
            <span className="section-tag dark">Client stories</span>
            <h2>Real journeys.<br />Real peace of mind.</h2>
            <div className="story-controls">
              <button onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}><ChevronLeft /></button>
              <button onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}><ChevronRight /></button>
            </div>
          </div>

          <div className="testimonial-feature">
            <button type="button" className={`testimonial-video ${testimonials[testimonialIndex].className}`} onClick={openTestimonialVideo}>
              <div className="testimonial-overlay" />
              <span>Video testimonial</span>
              <div className="portrait-placeholder"><Users size={70} /></div>
              <div className="video-play"><Play size={24} fill="currentColor" /></div>
              <small>Replace with client video</small>
            </button>
            <div className="testimonial-quote">
              <div className="stars">★★★★★</div>
              <blockquote>“{testimonials[testimonialIndex].quote}”</blockquote>
              <div className="client-name"><BadgeCheck /><span><strong>{testimonials[testimonialIndex].name}</strong><small>{testimonials[testimonialIndex].role}</small></span></div>
              <div className="story-progress">{testimonials.map((item, index) => <button key={item.name} className={index === testimonialIndex ? 'active' : ''} onClick={() => setTestimonialIndex(index)} />)}</div>
            </div>
          </div>
        </section>

        <section className="promise-section section">
          <div className="promise-card">
            <div className="promise-logo"><img src={logo} alt="C&C 1023 Automotives" /></div>
            <div className="promise-copy"><span className="section-tag">Our promise</span><h2>Dealer-level attention.<br />Without the dealer price.</h2><p>Clear communication, practical recommendations, reliable workmanship and service designed around the way you live and work.</p></div>
            <div className="promise-points">
              <div><ShieldCheck /><span><strong>Reliable</strong><small>Safety-first service decisions</small></span></div>
              <div><Zap /><span><strong>Convenient</strong><small>Your place, date and time</small></span></div>
              <div><Gauge /><span><strong>Reasonable</strong><small>Value without unnecessary cost</small></span></div>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="contact-copy">
            <span className="section-tag">Start your journey</span>
            <h2>Your vehicle need deserves the right partner.</h2>
            <p>Tell us whether you need a VIP rental, mobile mechanical service, fleet support, membership or a project car consultation.</p>
            <div className="contact-details">
              <a href="tel:+639327645297"><Phone /> +63 932 764 5297</a>
              <a href="mailto:info@cnc1023auto.com"><MessageCircle /> info@cnc1023auto.com</a>
              <span><MapPin /> Metro Manila and nearby service areas</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="form-grid">
              <label><span>Full name</span><input type="text" placeholder="Your name" /></label>
              <label><span>Contact number</span><input type="tel" placeholder="09XX XXX XXXX" /></label>
            </div>
            <div className="form-grid">
              <label><span>Service needed</span><select defaultValue=""><option value="" disabled>Select a service</option><option>VIP Vehicle Rental</option><option>Rental Membership</option><option>Mobile Mechanical Service</option><option>Corporate Fleet Solution</option><option>Project Car</option></select></label>
              <label><span>Preferred date</span><input type="date" /></label>
            </div>
            <label><span>Tell us what you need</span><textarea rows="5" placeholder="Trip route, vehicle concern, fleet requirement or project details..." /></label>
            <button className="primary-button" type="submit">Send inquiry <ArrowRight size={18} /></button>
            <small>Connect this form to Formspree, EmailJS or your own API before publishing.</small>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><img src={logo} alt="C&C 1023 Automotives" /><span>Complete automotive solutions for every journey.</span></div>
        <div className="footer-nav"><button onClick={() => scrollTo('fleet')}>Fleet</button><button onClick={() => scrollTo('services')}>Services</button><button onClick={() => scrollTo('membership')}>Membership</button><button onClick={() => scrollTo('contact')}>Contact</button></div>
        <p>© 2026 C&C 1023 Automotives. All Rights Reserved.</p>
      </footer>

      {videoOpen && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={videoOpen.title}
          onClick={closeVideo}
        >
          <div
            className="video-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <X />
            </button>

            <video
              key={videoOpen.src}
              className="modal-video"
              controls
              autoPlay
              playsInline
              poster="/images/cnc thumb.jpg"
              preload="metadata"
            >
              <source src={videoOpen.src} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;