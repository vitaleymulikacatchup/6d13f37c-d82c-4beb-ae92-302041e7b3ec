"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Zap, Gauge, ThermometerSun, Fuel, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="largeSizeMediumTitles"
      background="noiseGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="F1 Motors"
          navItems={[
            { name: "Cars", id: "cars" },
            { name: "Performance", id: "performance" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Test Drive",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="F1 MOTORS"
          description="Experience the future of high-performance automotive engineering. Our latest generation of race-inspired vehicles combines cutting-edge technology with unparalleled driving dynamics. Witness innovation at every turn."
          buttons={[
            { text: "Explore Models", href: "#cars" },
            { text: "Schedule Drive", href: "#contact" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765285858077-qo44lqzc.jpg"
          imageAlt="Premium F1 racing car showcase"
          frameStyle="browser"
        />
      </div>

      <div id="cars" data-section="cars">
        <ProductCardFive
          title="Our Latest Collection"
          description="Introducing the newest generation of F1-inspired vehicles engineered for maximum performance and style"
          tag="New Models"
          tagIcon={Zap}
          textboxLayout="default"
          products={[
            {
              id: "car-1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765285859623-wqwdo8j7.jpg",
              imageAlt: "High-performance sports car model",
              button: { text: "View Details" },
              isFavorited: false
            },
            {
              id: "car-2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765285860811-lauv36y2.jpg",
              imageAlt: "Luxury performance vehicle",
              button: { text: "View Details" },
              isFavorited: false
            },
            {
              id: "car-3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765285861926-cclppy16.jpg",
              imageAlt: "Exotic racing vehicle showcase",
              button: { text: "View Details" },
              isFavorited: false
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="performance" data-section="performance">
        <MetricCardThree
          title="Performance Specifications"
          description="Industry-leading performance metrics that define next-generation automotive excellence"
          tag="Engineering"
          tagIcon={Zap}
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: Gauge,
              title: "Top Speed",
              value: "320+ mph"
            },
            {
              id: "2",
              icon: Zap,
              title: "Acceleration",
              value: "0-60 in 2.3s"
            },
            {
              id: "3",
              icon: ThermometerSun,
              title: "Power Output",
              value: "1050 HP"
            },
            {
              id: "4",
              icon: Fuel,
              title: "Engine Type",
              value: "V12 Hybrid"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Drivers Are Saying"
          description="Experience the passion and pride from those who drive our vehicles"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Lewis Hamilton",
              handle: "@LewisHamilton",
              testimonial: "The engineering precision is phenomenal. Every drive feels like pushing the limits of possibility. This is the future of motorsports.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765285863037-pspptl21.jpg",
              imageAlt: "Lewis Hamilton portrait"
            },
            {
              id: "2",
              name: "Sebastian Vettel",
              handle: "@SebVettel",
              testimonial: "Incredible handling dynamics combined with raw power. This machine truly understands the driver's intent.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765285864094-h6zq4b6r.jpg",
              imageAlt: "Sebastian Vettel portrait"
            },
            {
              id: "3",
              name: "Max Verstappen",
              handle: "@MaxVerstappen",
              testimonial: "Unmatched responsiveness and acceleration. Every feature is designed with the driver in mind. Absolutely incredible.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765285865496-jsr5ayk9.jpg",
              imageAlt: "Max Verstappen portrait"
            },
            {
              id: "4",
              name: "Fernando Alonso",
              handle: "@FernandoAlonso",
              testimonial: "A masterpiece of automotive engineering. The blend of performance and refinement is unparalleled in the industry.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765285866730-frkvr3wv.jpg",
              imageAlt: "Fernando Alonso portrait"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our F1-inspired vehicles and the experience they provide."
          textPosition="left"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "What makes these vehicles different from traditional sports cars?",
              content: "Our vehicles incorporate Formula 1 racing technology including active aerodynamics, hybrid power systems, and advanced telemetry. Every component is optimized for performance and driver engagement, delivering a motorsport experience on public roads."
            },
            {
              id: "2",
              title: "What is the warranty coverage?",
              content: "We provide a comprehensive 5-year warranty covering all major components including the engine, transmission, and hybrid system. Extended coverage options are available for peace of mind."
            },
            {
              id: "3",
              title: "How often does the vehicle require maintenance?",
              content: "Regular maintenance is required every 10,000 miles. Specialized F1-grade servicing is available at our network of authorized centers worldwide, ensuring your vehicle maintains peak performance."
            },
            {
              id: "4",
              title: "Can these vehicles be customized?",
              content: "Yes, we offer extensive customization options including bespoke paint finishes, interior configurations, and performance tuning packages. Our design team works directly with each client to create a unique vehicle."
            },
            {
              id: "5",
              title: "What is the fuel efficiency rating?",
              content: "With our hybrid system, vehicles achieve approximately 28 MPG in standard conditions. The regenerative braking system and hybrid engine work together to optimize fuel consumption without compromising performance."
            },
            {
              id: "6",
              title: "How do I schedule a test drive?",
              content: "Use our online booking system or contact our team directly. Test drives are personalized experiences lasting approximately 2 hours, including a safety briefing and guidance on all vehicle features."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Behind the Wheel"
          description="Schedule your exclusive test drive or inquire about our latest F1-inspired vehicles. Our team is ready to answer all your questions."
          buttonText="Schedule Drive"
          useInvertedBackground="noInvert"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "model",
              type: "text",
              placeholder: "Preferred Model",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your interests or questions regarding our vehicles",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="F1 MOTORS"
          logoAlt="F1 Motors brand logo"
        />
      </div>
    </ThemeProvider>
  );
}