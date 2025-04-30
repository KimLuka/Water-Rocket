import Link from 'next/link';
import Button from '@/components/ui/button';
import { RocketIcon, CheckIcon, ZapIcon, TargetIcon } from 'lucide-react';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {/* 소개 섹션 */}
          <section className="py-24 bg-gradient-custom">
            <div className="container flex flex-col items-center text-center">
              <RocketIcon className="w-20 h-20 text-custom-light-green" />
              <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                작게 시작해서{' '}
                <span className="text-custom-light-green">진짜 발사</span>까지
              </h1>
              <div className="max-w-3xl mt-6 space-y-2 text-lg">
                <p>작은 실천이 쌓이면, 결국 로켓이 날아가요</p>
                <p>할 일을 기록하고, 실천하고, 보상 받는 경험</p>
                <p>망해도 돼요, 물로켓은 여러 번 쏠 수 있으니까요</p>
              </div>
              <div className="flex flex-col gap-4 mt-10 sm:flex-row">
                <Link href="/signup">
                  <Button
                    type="button"
                    buttonLabel="시작하기"
                    className="px-8 text-white bg-custom-light-green h-11 hover:bg-custom-dark-green"
                  />
                </Link>
                <Link href="/about">
                  <Button
                    type="button"
                    buttonLabel="더 알아보기"
                    className="px-8 border border-custom-gray h-11"
                  />
                </Link>
              </div>
            </div>
          </section>

          {/* 주요 기능 섹션 */}
          <section className="py-20">
            <div className="container">
              <div className="grid gap-16 md:gap-24">
                {/* 할 일 관리 */}
                <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-24">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center gap-2 text-custom-light-green">
                      <CheckIcon className="w-6 h-6" />
                      <h2 className="text-xl font-bold md:text-2xl">
                        할 일 정하고 실천해요
                      </h2>
                    </div>
                    <div className="mt-4 space-y-3">
                      <p>
                        할 일을 직접 만들고, 준비물이나 장소도 함께 기록해요
                      </p>
                      <p>작게 쪼갠 계획은 부담 없이 시작할 수 있어요</p>
                      <p>완료하면 인증샷이나 메모도 남길 수 있어요</p>
                    </div>
                  </div>
                  <div className="flex justify-center order-1 md:order-2">
                    <div className="relative flex items-center justify-center w-64 h-64 p-6 rounded-xl bg-custom-light-green-10">
                      <CheckIcon className="w-24 h-24 text-custom-light-green opacity-40" />
                    </div>
                  </div>
                </div>

                {/* 로켓 업그레이드 */}
                <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-24">
                  <div className="flex justify-center md:order-1">
                    <div className="relative flex items-center justify-center w-64 h-64 p-6 rounded-xl bg-custom-light-green-10">
                      <ZapIcon className="w-24 h-24 text-custom-light-green opacity-40" />
                    </div>
                  </div>
                  <div className="md:order-2">
                    <div className="flex items-center gap-2 text-custom-light-green">
                      <ZapIcon className="w-6 h-6" />
                      <h2 className="text-xl font-bold md:text-2xl">
                        실천할 때마다 업그레이드 되는 로켓
                      </h2>
                    </div>
                    <div className="mt-4 space-y-3">
                      <p>할 일을 완료하면 로켓 경험치가 쌓여요</p>
                      <p>경험치를 모으면 로켓이 레벨업!</p>
                      <p>레벨이 오르면 로켓을 발사할 수 있어요</p>
                    </div>
                  </div>
                </div>

                {/* 미션 */}
                <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-24">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center gap-2 text-custom-light-green">
                      <TargetIcon className="w-6 h-6" />
                      <h2 className="text-xl font-bold md:text-2xl">
                        친구에게 미션을 보내봐요
                      </h2>
                    </div>
                    <div className="mt-4 space-y-3">
                      <p>친구나 다른 유저에게 미션을 보낼 수 있어요</p>
                      <p>같은 목표를 가진 사람끼리 도전하고 응원해요</p>
                      <p>미션을 성공하면 보상이, 실패하면 광고가 기다려요</p>
                    </div>
                  </div>
                  <div className="flex justify-center order-1 md:order-2">
                    <div className="relative flex items-center justify-center w-64 h-64 p-6 rounded-xl bg-custom-light-green-10">
                      <TargetIcon className="w-24 h-24 text-custom-light-green opacity-40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA 섹션 */}
          <section className="py-16 bg-gradient-custom-reverse">
            <div className="container text-center">
              <h2 className="text-3xl font-bold">지금 바로 시작해보세요</h2>
              <p className="mt-4 text-lg">
                작은 실천으로 시작해서 로켓을 발사하는 경험을 해보세요
              </p>
              <div className="mt-8">
                <Link href="/signup">
                  <Button
                    type="button"
                    buttonLabel="내 로켓 만들어보기"
                    className="text-white bg-custom-light-green hover:bg-custom-dark-green"
                  />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
