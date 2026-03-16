import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import { ManifestoStrip, AboutSection } from '@/components/Sections';
import { GroupsSection, ManifestoBlock, Footer } from '@/components/MoreSections';
import JoinForm from '@/components/JoinForm';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ManifestoStrip />
      <AboutSection />
      <ManifestoBlock />
      <GroupsSection />
      <JoinForm />
      <Footer />
    </main>
  );
}
