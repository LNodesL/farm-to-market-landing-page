import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full mb-6 tracking-wide">
            🐔 Farm Fresh From The Truck
          </span>
        </div>
        
        <h1 
          className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-none mb-6 animate-fade-in-up tracking-wider"
          style={{ animationDelay: "0.2s" }}
        >
          ULTIMATE<br />
          <span className="text-golden">CHICKENATOR</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-10 animate-fade-in-up font-medium"
          style={{ animationDelay: "0.4s" }}
        >
          Premium livestock chickens raised with care. Fresh eggs as a bonus. 
          Sold straight from our pickup truck to your table.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a href="#products" className="btn-primary text-lg">
            View Our Birds
          </a>
          <a href="#contact" className="btn-outline border-cream text-cream hover:bg-cream hover:text-charcoal text-lg">
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
