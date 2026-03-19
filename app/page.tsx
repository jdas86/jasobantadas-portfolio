import { AppShell } from "@/components/app-shell";
import { BottomNav } from "@/components/bottom-nav";
import { IntroSplash } from "@/components/intro-splash";
import { ScrollProgress } from "@/components/scroll-progress";
import { LiveCodeBackground } from "@/components/background/live-code-background";
import { HeroSection } from "@/components/sections/hero";
import { TopImpactStrip } from "@/components/sections/top-impact";
import { ExpertiseSection } from "@/components/sections/expertise";
import { ExperienceStorySection } from "@/components/sections/experience-story";
import { AchievementsSection } from "@/components/sections/achievements";
import { ClientsSection } from "@/components/sections/clients";
import { ExtraSection } from "@/components/sections/extra-section";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <LiveCodeBackground />
      <ScrollProgress />
      <IntroSplash />
      <AppShell>
        <main className="relative z-10">
          <HeroSection />
          <TopImpactStrip />
          <ExpertiseSection />
          <ExperienceStorySection />
          <AchievementsSection />
          <ClientsSection />
          <ExtraSection />
          <ContactSection />
        </main>
      </AppShell>
      <BottomNav />
    </>
  );
}
