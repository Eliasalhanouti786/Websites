import Link from "next/link";
import Carousel from "@/components/Carousel";

export default function Home() {
  const showcaseProjects = [
    {
      src: "/images/project-01-marble-kitchen.jpg",
      alt: "Modern Marble Kitchen",
      title: "Modern Marble Kitchen",
      description: "Premium kitchen with marble countertops and modern finishes"
    },
    {
      src: "/images/project-08-luxury-kitchen.jpg",
      alt: "Luxury Kitchen Design",
      title: "Luxury Kitchen Suite",
      description: "High-end kitchen with custom cabinetry and premium appliances"
    },
    {
      src: "/images/project-20-open-plan-glass.jpg",
      alt: "Open Plan Extension",
      title: "Contemporary Open Plan",
      description: "Seamless open living space with floor-to-ceiling glass doors"
    },
    {
      src: "/images/project-27-open-plan-living.jpg",
      alt: "Open Plan Living Room",
      title: "Premium Living Space",
      description: "Modern living area with natural lighting and premium finishes"
    },
    {
      src: "/images/project-11-open-plan-extension.jpg",
      alt: "Modern Extension",
      title: "Expansive Extension",
      description: "Full house extension creating seamless living areas"
    },
    {
      src: "/images/project-06-modern-extension.jpg",
      alt: "Contemporary Extension",
      title: "Modern Extension Design",
      description: "Beautifully designed extension with contemporary finishes"
    },
    {
      src: "/images/project-04-glass-doors.jpg",
      alt: "Glass Door Extension",
      title: "Glass Door Extension",
      description: "Stunning extension featuring floor-to-ceiling glass"
    },
    {
      src: "/images/project-02-entertainment-room.jpg",
      alt: "Entertainment Space",
      title: "Premium Entertainment Room",
      description: "Luxury entertainment space with integrated technology"
    },
    {
      src: "/images/project-05-solar-panels-roof.jpg",
      alt: "Solar Panel Installation",
      title: "Sustainable Solar Solution",
      description: "Professional solar panel installation for energy efficiency"
    },
    {
      src: "/images/project-22-kitchen-white.jpg",
      alt: "White Kitchen Design",
      title: "Elegant White Kitchen",
      description: "Contemporary white kitchen with marble finishes"
    },
    {
      src: "/images/project-34-kitchen-chef.jpg",
      alt: "Chef's Kitchen",
      title: "Professional Chef's Kitchen",
      description: "Premium kitchen designed for serious cooking"
    },
    {
      src: "/images/project-37-extension-interior.jpg",
      alt: "Extension Interior",
      title: "Beautiful Extension Interior",
      description: "Interior of spacious extension with premium finishes"
    },
    {
      src: "/images/project-43-solar-panels.jpg",
      alt: "Solar Panel Array",
      title: "Solar Energy Installation",
      description: "Comprehensive solar panel system on modern roof"
    },
    {
      src: "/images/project-36-open-plan.jpg",
      alt: "Contemporary Open Plan",
      title: "Spacious Open Plan",
      description: "Large open plan living space with garden access"
    },
    {
      src: "/images/project-39-modern-extension.jpg",
      alt: "Modern Extension",
      title: "Contemporary Refurbishment",
      description: "Modern design with seamless flow between spaces"
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-700 opacity-20 rounded-full blur-3xl animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 opacity-20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-red-600 opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h1 className="text-6xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                  Expert Design & Full Home Refurbishment
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed opacity-0 animate-fade-in-up max-w-xl" style={{animationDelay: '0.4s'}}>
                Transforming spaces with premium design and meticulous craftsmanship. 
                Bringing 25+ years of expertise in architecture, design, and sustainable construction.
              </p>

              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up pt-4" style={{animationDelay: '0.6s'}}>
                <Link
                  href="/portfolio"
                  className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  View All Projects
                </Link>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex gap-8 pt-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="border-l-4 border-red-700 pl-4">
                  <p className="text-2xl font-bold text-white">25+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="border-l-4 border-red-700 pl-4">
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-gray-400 text-sm">Projects Completed</p>
                </div>
              </div>
            </div>

            {/* Right Carousel Section */}
            <div className="relative opacity-0 animate-slide-in-right" style={{animationDelay: '0.5s'}}>
              <div className="relative">
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-700 to-blue-900 rounded-xl blur opacity-30 animate-glow"></div>
                
                {/* Carousel Container */}
                <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden p-6">
                  <Carousel images={showcaseProjects} />
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-red-700 rounded-lg p-4 shadow-2xl animate-float" style={{animationDelay: '1s'}}>
                <p className="text-white font-bold">Premium Quality</p>
                <p className="text-red-100 text-sm">Certified & Insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive construction and design solutions tailored to your vision</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Full House Refurbishments", desc: "Complete renovation and modernization of residential spaces", icon: "🏠" },
              { title: "Extensions & Redesigns", desc: "Expand your home with expertly designed extensions", icon: "🔨" },
              { title: "3D Visualizations", desc: "See your project before it's built with detailed floor plans", icon: "🎨" },
              { title: "Kitchen & Bathroom Design", desc: "Modern, functional kitchens and bathrooms designed for your lifestyle", icon: "🍳" },
              { title: "Planning Permissions", desc: "Expert guidance through planning applications and regulatory compliance", icon: "📋" },
              { title: "Interior Design", desc: "Space optimization and elegant design solutions", icon: "✨" },
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="group p-8 border border-gray-200 rounded-xl hover:shadow-xl hover:border-red-700 transition duration-300 transform hover:scale-105 cursor-pointer bg-white"
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-700 transition">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-700 opacity-10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get a free consultation and quote from our design team
          </p>
          <Link
            href="/contact"
            className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-2xl inline-block shadow-lg"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
