import chickenImg from "@/assets/chicken.png";
import eggsImg from "@/assets/eggs.png";

const products = [
  {
    name: "Premium Livestock Chickens",
    description:
      "Beautiful white chickens with vibrant red combs and yellow feet. Perfect for your farm, homestead, or dinner table.",
    image: chickenImg,
    tag: "Our Specialty",
    details: ["Healthy & Robust", "Hand-Raised", "White Plumage", "Transport Crates Included"],
  },
  {
    name: "Farm Fresh Eggs",
    description:
      "As a bonus, we also offer fresh eggs from our free-range hens. Rich, golden yolks and unbeatable taste.",
    image: eggsImg,
    tag: "Bonus Item",
    details: ["Free-Range", "Farm Fresh", "Natural Diet", "When Available"],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">What We Offer</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 tracking-wide">OUR PRODUCTS</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={product.name} className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover group">
              <div className="relative h-72 overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  {product.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl text-foreground mb-3 tracking-wide">{product.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.details.map((detail) => (
                    <span
                      key={detail}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transport Crates Info */}
        <div className="mt-16 bg-charcoal rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full mb-6">
            <span className="text-primary-foreground font-semibold">Transport Included</span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-cream mb-4 tracking-wide">FARM TO MARKET</h3>
          <p className="text-cream/80 max-w-2xl mx-auto">
            Pick from our live chickens on the spot, at the market, or buy in bulk directly from the owner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
