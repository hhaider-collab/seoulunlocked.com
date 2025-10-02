import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Star,
  Users,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function SeoulUnlockedPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "discover",
        "culinary",
        "nightlife",
        "skincare",
        "markets",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Hidden Gems",
      description:
        "Discover places you won't find in guidebooks or on Instagram.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "VIP Access",
      description:
        "Get reservations at impossible-to-book restaurants and exclusive venues.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local Experts",
      description:
        "Our team has lived in Seoul for decades and knows every neighborhood intimately.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      text: "Junseok got us reservations at a tiny hanwoo restaurant that wasn't in any guidebooks. The experience was absolutely magical!",
      rating: 5,
    },
    {
      name: "Michael T.",
      location: "London",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      text: "The skincare clinic Hassan recommended was incredible. My complexion has never looked better!",
      rating: 5,
    },
    {
      name: "David",
      location: "Sydney",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=200&h=200&fit=crop&crop=face",
      text: "Our guide Phil took us to the most amazing underground bars. We felt like locals instead of tourists!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Seoul Unlocked</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["discover", "culinary", "nightlife", "skincare", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-red-600 transition-colors ${
                      activeSection === item ? "text-red-600 font-semibold" : ""
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {["discover", "culinary", "nightlife", "skincare", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 capitalize hover:bg-gray-50 rounded-lg"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-red-900"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1920&h=1080&fit=crop')",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Experience Seoul
              <span className="block text-red-400">Like Never Before</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Curated adventures beyond the tourist trails. Discover the real
              Seoul with local experts.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discover the Real Seoul
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seoul is a city of contrasts - ancient palaces next to futuristic
              skyscrapers, quiet tea houses beside buzzing nightlife districts.
              We help you experience it all.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-red-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Adventures */}
      <section id="culinary" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Culinary Adventures
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Seoul's dining scene is legendary, but the best places often
                don't have English menus or online reservations. We'll get you
                in.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    Michelin-starred hanwoo restaurants that book out months in
                    advance
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    Hidden pojangmacha serving the best tteokbokki in the city
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    Private chef's table experiences at Korea's most innovative
                    restaurants
                  </p>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <span>Reserve Your Table</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <img
                src="images/korean-bbq.jpg"
                alt="Korean BBQ and traditional dishes"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600 rounded-2xl opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nightlife Section */}
      <section id="nightlife" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="images/euljiro.jpg"
                alt="Seoul nightlife district"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-600 rounded-2xl opacity-20"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nightlife Beyond Hongdae
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Skip the tourist traps and experience Seoul's legendary
                nightlife like a local.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <p className="text-gray-300">
                    Members-only speakeasies with craft cocktails
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <p className="text-gray-300">
                    Underground live music venues showcasing Korea's indie scene
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <p className="text-gray-300">
                    Private karaoke rooms with premium soju service
                  </p>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <span>Plan Your Night Out</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skincare Section */}
      <section id="skincare" className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Celebrity Skincare Secrets
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Korean skincare is world-famous, but the best clinics don't
                advertise to tourists. We'll connect you with the experts.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    Dermatologists who treat K-pop stars and actors
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    Customized skincare regimens using exclusive products
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    Non-invasive treatments with dramatic results
                  </p>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop"
                alt="Korean skincare products and treatment"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600 rounded-2xl opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section id="markets" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Authentic Market Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Go beyond the tourist markets with our expert guides and discover
              Seoul's hidden commercial gems.
            </p>
          </div>

          {/* Market Hero Image */}
          <div className="relative mb-16">
            <img
              src="images/market-food2.jpg"
              alt="Traditional Korean market food and vendors"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold mb-2">
                Local Market Treasures
              </h3>
              <p className="text-lg opacity-90">
                Discover authentic flavors and hidden gems
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-red-200">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Wholesale Fabric Markets
              </h3>
              <p className="text-gray-700 mb-4">
                Access premium fabrics used by top Korean designers at wholesale
                prices in massive underground complexes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Designer silk and hanbok materials</li>
                <li>• Custom tailoring connections</li>
                <li>• Bulk purchasing opportunities</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Antique & Vintage Markets
              </h3>
              <p className="text-gray-700 mb-4">
                Discover authentic Korean artifacts, vintage treasures, and
                unique collectibles in hidden specialist markets.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Traditional ceramics and pottery</li>
                <li>• Vintage Korean artwork</li>
                <li>• Authentic cultural artifacts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Seoul Adventure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tell us about your travel plans and we'll create a customized
              Seoul experience just for you.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Travel Dates
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white"
                  placeholder="When are you visiting?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Group Size
                </label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white">
                  <option>1-2 people</option>
                  <option>3-4 people</option>
                  <option>5-8 people</option>
                  <option>Large group (8+)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Interests
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Food & Dining",
                  "Nightlife",
                  "Skincare",
                  "Shopping",
                  "Culture",
                  "Art",
                  "Music",
                  "Markets",
                ].map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input type="checkbox" className="text-red-600" />
                    <span className="text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Tell us about your Seoul dream
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white"
                placeholder="What kind of Seoul experience are you looking for?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Submit Your Seoul Dream
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Seoul Unlocked</span>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="hover:text-red-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Seoul Unlocked. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
