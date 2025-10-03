import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Download } from "lucide-react";

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80"
        >
            {/* Geometric background patterns */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 py-8 sm:py-12">
                {/* Greeting */}
                <div className="opacity-0 animate-fade-in">
                    <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                        Hello, I'm
                    </p>
                </div>

                {/* Name - Responsive typography */}
                <h1
                    className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 opacity-0 animate-fade-in text-center"
                    style={{ animationDelay: "0.2s" }}
                >
                    <span className="text-foreground block leading-tight">Prudvi Satya Teja</span>
                    <span className="text-primary block leading-tight">Bachala</span>
                </h1>

                {/* Subtitle - Better mobile text sizing */}
                <p
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed opacity-0 animate-fade-in px-2 sm:px-0"
                    style={{ animationDelay: "0.4s" }}
                >
                    Highly motivated{" "}
                    <span className="text-foreground font-medium">Computer Science student</span>{" "}
                    with strong foundations in
                    <span className="text-primary font-medium">
                        {" "}
                        Java, Backend Development,
                    </span>{" "}
                    and
                    <span className="text-primary font-medium"> Data Structures & Algorithms</span>,
                    with a keen interest in
                    <span className="text-foreground font-medium"> Full-Stack Development</span>.
                </p>

                {/* CTA Buttons - Clean mobile layout */}
                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center opacity-0 animate-fade-in px-4 sm:px-0"
                    style={{ animationDelay: "0.6s" }}
                >
                    <Button
                        onClick={() =>
                            window.open(
                                "https://drive.google.com/file/d/1S8wWGek_oUe_ZE_Ph0n9xnbPXSU9rMMe/view?usp=sharing",
                                "_blank"
                            )
                        }
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 
                     px-6 sm:px-8 py-3 min-h-[48px] text-sm sm:text-base w-full sm:w-auto"
                    >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Download Resume
                    </Button>
                    <Button
                        onClick={() => scrollToSection("contact")}
                        variant="outline"
                        size="lg"
                        className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 
                     px-6 sm:px-8 py-3 min-h-[48px] text-sm sm:text-base w-full sm:w-auto"
                    >
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Contact Me
                    </Button>
                </div>

                {/* Scroll Indicator - Below buttons with flexible spacing */}
                <div
                    className="flex justify-center mt-8 sm:mt-12 opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                >
                    <button
                        onClick={() => scrollToSection("about")}
                        className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-all duration-300 animate-bounce min-h-[48px] min-w-[48px] flex items-center justify-center"
                        aria-label="Scroll to about section"
                    >
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
