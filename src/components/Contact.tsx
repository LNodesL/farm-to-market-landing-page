import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 tracking-wide">
            FIND THE TRUCK
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-card p-8 rounded-xl text-center card-hover">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2 tracking-wide">LOCATION</h3>
            <p className="text-muted-foreground">
              Local farmers markets<br />& roadside stands
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl text-center card-hover">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2 tracking-wide">CALL US</h3>
            <p className="text-muted-foreground">
              Give us a ring to<br />place your order
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl text-center card-hover">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2 tracking-wide">HOURS</h3>
            <p className="text-muted-foreground">
              Weekends & select<br />weekday evenings
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
          <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4 tracking-wide">
            READY TO GET YOUR BIRDS?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Whether you're looking for quality livestock chickens for your farm or fresh eggs for your table, 
            we've got you covered. Just flag down the truck!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center justify-center gap-2 bg-cream text-charcoal font-semibold px-8 py-4 rounded-lg hover:bg-cream/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
