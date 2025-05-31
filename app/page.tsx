import CallToAction from "@/components/marketing/call-to-action";
import Features from "@/components/marketing/features-8";
import FooterSection from "@/components/marketing/footer";
import HeroSection from "@/components/marketing/hero-section";
import IntegrationsSection from "@/components/marketing/integrations-6";
import StatsSection from "@/components/marketing/stats-3";
import Testimonials from "@/components/marketing/testimonials";
import React from "react";

export default function MarketingPage() {
  return (
    <div>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <StatsSection />
      <Testimonials />
      <CallToAction />
      <FooterSection />
    </div>
  );
}
