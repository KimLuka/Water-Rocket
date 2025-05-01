import Button from '../ui/button';
import FloatingIcons from './floating-icons';
import ScrollToOverviewButton from './scroll-to-overview-button';

export default function HeroBanner() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-custom">
      <div className="z-10 px-4 py-32 mx-auto text-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="z-10 mb-12 text-4xl font-bold leading-normal tracking-tight sm:text-5xl md:text-6xl">
            멈춰 있던 삶의 궤도에
            <br />
            다시 추진력이 되어주는 물로켓
          </h1>

          <div className="z-10 flex gap-4">
            <Button className="text-sm rounded-full">바로 시작하기</Button>
            <ScrollToOverviewButton />
          </div>
        </div>

        <FloatingIcons />
      </div>
    </section>
  );
}
