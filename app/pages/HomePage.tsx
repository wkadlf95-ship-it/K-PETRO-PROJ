import { BriefingSection } from "../components/home/BriefingSection";
import { DisclosureSection } from "../components/home/DisclosureSection";
import { HeroSection } from "../components/home/HeroSection";
import { PersonalizationSection } from "../components/home/PersonalizationSection";
import { PublicStatsSection } from "../components/home/PublicStatsSection";
import { QuickServiceGrid } from "../components/home/QuickServiceGrid";
import { ReportRewardSection } from "../components/home/ReportRewardSection";
import { SummaryCards } from "../components/home/SummaryCards";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <SummaryCards />
      <QuickServiceGrid />
      <PublicStatsSection />
      <DisclosureSection />
      <BriefingSection />
      <ReportRewardSection />
      <PersonalizationSection />
    </main>
  );
}
