import { Truck, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Raised With Love",
    description: "Every chicken is hand-raised on our family farm with the best feed and plenty of room to roam."
  },
  {
    icon: Truck,
    title: "Mobile Market",
    description: "We bring fresh poultry directly to you from the back of our trusty pickup. No middleman, no hassle."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Healthy, robust birds with beautiful white plumage, red combs, and strong yellow feet."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Story</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 tracking-wide">
            WHY CHICKENATOR?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card p-8 rounded-xl shadow-md card-hover text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Started from a passion for raising quality poultry, <strong className="text-foreground">Ultimate Chickenator</strong> has 
            grown into a trusted local source for farm-fresh chickens. We believe in doing things the old-fashioned way—with 
            care, dedication, and a pickup truck full of the finest birds you'll find.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
