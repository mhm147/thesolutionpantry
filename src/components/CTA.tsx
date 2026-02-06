import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "12 delicious keto recipes",
  "5-minute preparation time",
  "Complete nutrition info",
  "Creami tips & tricks",
];

const CTA = () => {
  return (
    <section className="py-24 md:py-32 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto gradient-card border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-card-hover text-center">
          <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full text-sm text-accent-foreground mb-8">
            <span className="text-lg">🎁</span>
            Limited Time — Completely Free
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Enjoy{" "}
            <span className="text-primary">Guilt-Free Desserts?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Download your free guide now and start making delicious, healthy treats in just 5 minutes.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <Button variant="hero" size="xl" className="group">
            Get Your Free Guide Now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Instant PDF download • No email required • 100% Free
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;