import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/nav-bar';
import OverviewSection from '@/components/home/overview-section';
import CallToActionSection from '@/components/home/call-to-action-section';
import HeroBanner from '@/components/home/hero-banner';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-1">
          <HeroBanner />
          <OverviewSection />
          <CallToActionSection />
        </main>
      </div>

      <Footer />
    </>
  );
}
