import { Hero, ServiceExplorer, ChatDemo, About, FAQ, Contact } from '@/components/sections';

/**
 * Homepage - Asora Solutions Landing Page
 *
 * Sections:
 * 1. Hero - Animated headline with interactive demo mockup
 * 2. ServiceExplorer - Interactive tabs showcasing all services
 * 3. ChatDemo - AI conversation demonstration
 * 4. About - Company values and mission
 * 5. FAQ - Frequently asked questions
 * 6. Contact - Booking and contact information
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceExplorer />
      <ChatDemo />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
