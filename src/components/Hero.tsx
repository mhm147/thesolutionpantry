import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-desserts.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="space-y-8 opacity-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-accent-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Sugar-free • Keto-friendly • Doctor-approved
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance">
              Guilt-Free{" "}
              <span className="text-primary">Creamy Bliss.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Practical desserts and tools designed for busy lives. No sugar, no crash—just pure joy in every bite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" className="group">
                Get Free Guide
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-xl">📖</span>
                <span>12 Recipes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⏱️</span>
                <span>5-Min Prep</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✨</span>
                <span>100% Free</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative opacity-0 animate-fade-in-delay">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl blur-2xl" />
              
              <img 
                src={heroImage} 
                alt="Delicious keto-friendly ice cream desserts" 
                className="relative w-full h-auto rounded-3xl shadow-card-hover object-cover aspect-[4/3]"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card gradient-card p-4 rounded-2xl shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                  <div>
                    <div className="font-serif font-semibold">4.9/5 Rating</div>
                    <div className="text-sm text-muted-foreground">2,400+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;