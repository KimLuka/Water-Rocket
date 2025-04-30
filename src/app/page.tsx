import Button from '@/components/ui/button';
import {
  CalendarIcon,
  CheckIcon,
  GiftIcon,
  LockIcon,
  RocketIcon,
  TargetIcon,
  TrophyIcon,
} from 'lucide-react';
import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/nav-bar';

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
                  작게 시작해서{' '}
                  <span className="text-custom-light-green">진짜 발사</span>까지
                </h1>

                {/* <p>작은 실천이 쌓이면, 결국 로켓이 날아가요</p>
                <p>할 일을 기록하고, 실천하고, 보상 받는 경험</p>
                <p>망해도 돼요, 물로켓은 여러 번 쏠 수 있으니까요</p> */}

                <div className="flex gap-4">
                  <Button className="rounded-full">바로 시작하기</Button>
                  <Button
                    variant="secondary"
                    className="border-none rounded-full"
                  >
                    더 알아보기
                  </Button>
                </div>
              </div>

              {/* 3D 오브젝트들 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-6xl">
                  {/* 로켓 */}
                  <div className="absolute left-[10%] top-[30%] h-16 w-16 md:h-24 md:w-24">
                    <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
                      <RocketIcon className="w-full h-full text-custom-light-green" />
                    </div>
                  </div>

                  {/* 체크 아이콘 */}
                  <div className="absolute left-[25%] top-[60%] h-12 w-12 md:h-16 md:w-16">
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg">
                      <CheckIcon className="w-6 h-6 text-custom-light-green" />
                    </div>
                  </div>

                  {/* 선물 상자 */}
                  <div className="absolute right-[15%] top-[25%] h-20 w-20 md:h-28 md:w-28">
                    <div className="w-full h-full p-3 bg-white rounded-lg shadow-lg">
                      <GiftIcon className="w-full h-full text-custom-light-green" />
                    </div>
                  </div>

                  {/* 타겟 아이콘 */}
                  <div className="absolute right-[30%] top-[55%] h-14 w-14 md:h-20 md:w-20">
                    <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
                      <TargetIcon className="w-full h-full text-custom-light-green" />
                    </div>
                  </div>

                  {/* 달력 아이콘 */}
                  <div className="absolute left-[40%] top-[20%] h-16 w-16 md:h-24 md:w-24">
                    <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
                      <CalendarIcon className="w-full h-full text-custom-light-green" />
                    </div>
                  </div>

                  {/* 트로피 아이콘 */}
                  <div className="absolute left-[60%] top-[65%] h-12 w-12 md:h-16 md:w-16">
                    <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
                      <TrophyIcon className="w-full h-full text-custom-orange" />
                    </div>
                  </div>

                  {/* 자물쇠 아이콘 */}
                  <div className="absolute left-[20%] top-[45%] h-10 w-10 md:h-14 md:w-14">
                    <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
                      <LockIcon className="w-full h-full text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
