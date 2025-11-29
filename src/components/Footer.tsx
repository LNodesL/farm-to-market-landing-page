const Footer = () => {
  return (
    <footer className="bg-charcoal py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl text-cream tracking-wider mb-2">
            ULTIMATE <span className="text-golden">CHICKENATOR</span>
          </h2>
          <p className="text-cream/60 mb-6">
            Farm fresh poultry, straight from the truck.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Ultimate Chickenator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
