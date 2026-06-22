import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import WorkSection from "./components/WorkSection";
import StudioSection from "./components/StudioSection";
import JournalSection from "./components/JournalSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <StudioSection />
      <Capabilities />
      <JournalSection />
      <ContactSection />
    </main>
  );
}
