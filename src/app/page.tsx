import Button from '@/components/ui/button';

import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/nav-bar';
import FloatingIcons from '@/components/home/floating-icons';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-1">
          {/* 소개 섹션 */}
          <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-custom">
            <div className="z-10 px-4 py-32 mx-auto text-center">
              <div className="flex flex-col items-center text-center">
                <h1 className="z-10 mb-12 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  멈춰 있던 삶의 궤도에
                  <br />
                  다시 추진력이 되어주는 물로켓
                </h1>

                {/* <p>작은 실천이 쌓이면, 결국 로켓이 날아가요</p>
                <p>할 일을 기록하고, 실천하고, 보상 받는 경험</p>
                <p>망해도 돼요, 물로켓은 여러 번 쏠 수 있으니까요</p> */}

                <div className="z-10 flex gap-4">
                  <Button className="rounded-full">바로 시작하기</Button>
                  <Button
                    variant="secondary"
                    className="border-none rounded-full"
                  >
                    더 알아보기
                  </Button>
                </div>
              </div>

              <FloatingIcons />
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
