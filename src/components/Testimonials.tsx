import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I lost 8 lbs in 6 weeks — and still ate dessert daily. These recipes changed everything for me.",
    author: "Sarah",
    age: 34,
    image: "👩‍🦰",
    rating: 5,
  },
  {
    quote: "My surgeon recommended these recipes post-op. Truly a game changer for my recovery journey.",
    author: "Mark",
    age: 52,
    image: "👨‍🦳",
    rating: 5,
  },
  {
    quote: "Finally, desserts I can enjoy without the sugar crash. My energy levels have never been better!",
    author: "Jessica",
    age: 41,
    image: "👩‍🦱",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Real People,{" "}
            <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who've transformed their relationship with dessert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="relative gradient-card border border-border/50 rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 gradient-cta rounded-full flex items-center justify-center shadow-glow">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-6 text-foreground/90 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-serif font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">Age {testimonial.age}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;