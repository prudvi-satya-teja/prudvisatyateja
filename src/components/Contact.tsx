import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const { toast } = useToast();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Start loader immediately

        try {
            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Message Sent!",
                    description:
                        "Thank you for reaching out. You'll receive an email confirmation shortly.",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setLoading(false); // Stop loader
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <div className="w-12 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
                        Let's connect and discuss opportunities in software development, backend
                        technologies, or competitive programming.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Left Column - Contact Information */}
                    <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                        {/* Contact Information Card */}
                        <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300">
                            <CardHeader className="p-4 sm:p-6">
                                <CardTitle className="text-lg sm:text-xl">
                                    Contact Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-sm sm:text-base font-medium text-foreground">
                                            Email
                                        </h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground font-mono break-all">
                                            prudvisatyateja1234@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm sm:text-base font-medium text-foreground">
                                            Phone
                                        </h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground">
                                            +91 9701453495
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Connect With Me Card */}
                        <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300">
                            <CardHeader className="p-4 sm:p-6">
                                <CardTitle className="text-lg sm:text-xl">
                                    Connect With Me
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 pt-0">
                                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 justify-start min-h-[44px] text-xs sm:text-sm"
                                        onClick={() =>
                                            window.open(
                                                "https://www.linkedin.com/in/prudvi-satya-teja/",
                                                "_blank"
                                            )
                                        }
                                    >
                                        <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                        LinkedIn
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 justify-start min-h-[44px] text-xs sm:text-sm"
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/prudvi-satya-teja",
                                                "_blank"
                                            )
                                        }
                                    >
                                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                        GitHub
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 justify-start min-h-[44px] text-xs sm:text-sm"
                                        onClick={() =>
                                            window.open(
                                                "https://leetcode.com/u/Dra-Carys/",
                                                "_blank"
                                            )
                                        }
                                    >
                                        LeetCode
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 justify-start min-h-[44px] text-xs sm:text-sm"
                                        onClick={() =>
                                            window.open(
                                                "https://www.codechef.com/users/dra_ca_rys",
                                                "_blank"
                                            )
                                        }
                                    >
                                        CodeChef
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 justify-start col-span-1 xs:col-span-2 min-h-[44px] text-xs sm:text-sm"
                                        onClick={() =>
                                            window.open(
                                                "https://codeforces.com/profile/Dra-Carys",
                                                "_blank"
                                            )
                                        }
                                    >
                                        CodeForces
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Contact Form */}
                    <Card className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 order-1 lg:order-2">
                        <CardHeader className="p-4 sm:p-6">
                            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                Send Me a Message
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 pt-0">
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2 block"
                                    >
                                        Your Name
                                    </label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        required
                                        className="bg-background border-border/50 focus:border-primary min-h-[44px] text-sm"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2 block"
                                    >
                                        Your Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        required
                                        className="bg-background border-border/50 focus:border-primary min-h-[44px] text-sm"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2 block"
                                    >
                                        Your Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell me about your project, opportunity, or just say hello!"
                                        value={formData.message}
                                        onChange={(e) =>
                                            handleInputChange("message", e.target.value)
                                        }
                                        required
                                        rows={5}
                                        className="bg-background border-border/50 focus:border-primary resize-none text-sm min-h-[120px]"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={loading} // disables while sending
                                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 min-h-[48px] py-3 text-sm sm:text-base flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                            Send Message
                                        </>
                                    )}
                                </Button>

                                {/* <Button
                                    type="submit"
                                    disabled={loading} // disables while sending
                                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 min-h-[48px] py-3 text-sm sm:text-base flex items-center justify-center"
                                >
                                    {loading ? (
                                        // Simple loader (you can also use a spinner icon)
                                        <span className="animate-pulse">Sending...</span>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button> */}

                                {/* <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 
                           min-h-[48px] py-3 text-sm sm:text-base"
                                >
                                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                    Send Message
                                </Button> */}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;
