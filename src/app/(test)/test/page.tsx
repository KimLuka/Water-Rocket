import { RocketIcon } from 'lucide-react';
import Image from 'next/image';
import NavBar from '@/components/layout/nav-bar';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container relative z-10 px-4 py-32 mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              할 일의 모든 것
            </h1>
            <h1 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              로켓 투두에서 쉽고 간편하게
            </h1>

            <div className="flex justify-center gap-4 mt-8">
              <button
                type="button"
                className="text-white bg-black rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
                App Store
              </button>
              <button className="text-white bg-black rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Google Play
              </button>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-custom-light-green"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              {/* 선물 상자 */}
              <div className="absolute right-[15%] top-[25%] h-20 w-20 md:h-28 md:w-28">
                <div className="w-full h-full p-3 bg-white rounded-lg shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full text-custom-light-green"
                  >
                    <path d="M20 12v10H4V12" />
                    <path d="M2 7h20v5H2z" />
                    <path d="M12 22V7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
              </div>

              {/* 타겟 아이콘 */}
              <div className="absolute right-[30%] top-[55%] h-14 w-14 md:h-20 md:w-20">
                <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full text-custom-light-green"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
              </div>

              {/* 달력 아이콘 */}
              <div className="absolute left-[40%] top-[20%] h-16 w-16 md:h-24 md:w-24">
                <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full text-custom-light-green"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
              </div>

              {/* 트로피 아이콘 */}
              <div className="absolute left-[60%] top-[65%] h-12 w-12 md:h-16 md:w-16">
                <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full text-custom-orange"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
              </div>

              {/* 자물쇠 아이콘 */}
              <div className="absolute left-[20%] top-[45%] h-10 w-10 md:h-14 md:w-14">
                <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full text-gray-600"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 기능 소개 섹션 - 목업 이미지 추가 */}
        <section className="py-20">
          <div className="container">
            <h2 className="mb-16 text-3xl font-bold text-center">
              로켓 투두로 할 수 있는 일
            </h2>

            <div className="space-y-24">
              {/* 할 일 관리 */}
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
                <div className="max-w-md mb-10 md:mb-0 md:pr-8">
                  <div className="flex items-center justify-center mb-6 rounded-full h-14 w-14 bg-custom-light-green/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7 text-custom-light-green"
                    >
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">할 일 관리</h3>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    할 일을 직접 만들고, 준비물이나 장소도 함께 기록해요.
                  </p>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    작게 쪼갠 계획은 부담 없이 시작할 수 있어요.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    완료하면 인증샷이나 메모도 남길 수 있어요.
                  </p>
                </div>
                <div className="relative h-[500px] w-[250px] md:h-[600px] md:w-[300px]">
                  <div className="absolute inset-0 rounded-[40px] border-8 border-black bg-white shadow-xl">
                    <div className="absolute w-20 h-4 -translate-x-1/2 bg-black left-1/2 top-4 rounded-b-xl"></div>
                    <div className="h-full w-full overflow-hidden rounded-[32px] bg-gray-100 p-2">
                      <Image
                        src="/placeholder.svg?height=600&width=300"
                        alt="할 일 관리 목업"
                        width={300}
                        height={600}
                        className="h-full w-full rounded-[28px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 로켓 업그레이드 */}
              <div className="flex flex-col items-center md:flex-row-reverse md:items-center md:justify-between">
                <div className="max-w-md mb-10 md:mb-0 md:pl-8">
                  <div className="flex items-center justify-center mb-6 rounded-full h-14 w-14 bg-custom-light-green/10">
                    <RocketIcon className="h-7 w-7 text-custom-light-green" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">로켓 업그레이드</h3>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    할 일을 완료하면 로켓 경험치가 쌓여요.
                  </p>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    경험치를 모으면 로켓이 레벨업!
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    레벨이 오르면 로켓을 발사할 수 있어요.
                  </p>
                </div>
                <div className="relative h-[500px] w-[250px] md:h-[600px] md:w-[300px]">
                  <div className="absolute inset-0 rounded-[40px] border-8 border-black bg-white shadow-xl">
                    <div className="absolute w-20 h-4 -translate-x-1/2 bg-black left-1/2 top-4 rounded-b-xl"></div>
                    <div className="h-full w-full overflow-hidden rounded-[32px] bg-gray-100 p-2">
                      <Image
                        src="/placeholder.svg?height=600&width=300"
                        alt="로켓 업그레이드 목업"
                        width={300}
                        height={600}
                        className="h-full w-full rounded-[28px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 미션 도전 */}
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
                <div className="max-w-md mb-10 md:mb-0 md:pr-8">
                  <div className="flex items-center justify-center mb-6 rounded-full h-14 w-14 bg-custom-light-green/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7 text-custom-light-green"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">미션 도전</h3>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    친구나 다른 유저에게 미션을 보낼 수 있어요.
                  </p>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    같은 목표를 가진 사람끼리 도전하고 응원해요.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    미션을 성공하면 보상이, 실패하면 광고가 기다려요.
                  </p>
                </div>
                <div className="relative h-[500px] w-[250px] md:h-[600px] md:w-[300px]">
                  <div className="absolute inset-0 rounded-[40px] border-8 border-black bg-white shadow-xl">
                    <div className="absolute w-20 h-4 -translate-x-1/2 bg-black left-1/2 top-4 rounded-b-xl"></div>
                    <div className="h-full w-full overflow-hidden rounded-[32px] bg-gray-100 p-2">
                      <Image
                        src="/placeholder.svg?height=600&width=300"
                        alt="미션 도전 목업"
                        width={300}
                        height={600}
                        className="h-full w-full rounded-[28px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-20 text-white bg-custom-light-green">
          <div className="container text-center">
            <h2 className="mb-6 text-3xl font-bold">지금 바로 시작해보세요</h2>
            <p className="mb-10 text-lg">
              작은 실천으로 시작해서 로켓을 발사하는 경험을 해보세요
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="bg-white rounded-full text-custom-light-green hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
                App Store
              </button>
              <button className="bg-white rounded-full text-custom-light-green hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
