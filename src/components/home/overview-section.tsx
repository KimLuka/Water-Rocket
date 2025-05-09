import { CheckIcon, RocketIcon, ShieldIcon } from 'lucide-react';
import Image from 'next/image';

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="flex flex-col items-center w-full gap-24 py-20"
    >
      <div className="flex items-center justify-between gap-15">
        <div>
          <div className="flex items-center justify-center mb-6 rounded-full h-14 w-14 bg-custom-light-green/10">
            <CheckIcon className="h-7 w-7 text-custom-light-green" />
          </div>
          <h2 className="mb-3 font-bold sm:text-xl md:text-2xl">할 일 관리</h2>
          <p className="mb-2 leading-loose text-custom-dark-gray dark:text-custom-light-gray">
            할 일을 직접 만들고, 준비물이나 장소도 함께 기록해요.
            <br />
            작게 쪼갠 계획은 부담 없이 시작할 수 있어요.
            <br />
            완료하면 인증샷이나 메모도 남길 수 있어요.
          </p>
        </div>
        <Image
          src="/images/mockup-my-rocket.png"
          alt="내 로켓 페이지 목업"
          width={400}
          height={520}
          quality={100}
        />
      </div>

      <div className="flex items-center justify-between gap-15">
        <Image
          src="/images/mockup-mission.png"
          alt="미션 페이지 목업"
          width={400}
          height={520}
          quality={100}
        />
        <div>
          <div className="flex items-center justify-center mb-6 rounded-full h-14 w-14 bg-custom-light-green/10">
            <RocketIcon className="h-7 w-7 text-custom-light-green" />
          </div>
          <h2 className="mb-3 font-bold sm:text-xl md:text-2xl">
            로켓 업그레이드
          </h2>
          <p className="mb-2 leading-loose text-custom-dark-gray dark:text-custom-light-gray">
            할 일을 완료하면 로켓 경험치가 쌓여요.
            <br />
            경험치를 모으면 로켓이 레벨업!
            <br />
            레벨이 오르면 로켓을 발사할 수 있어요.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-15">
        <div>
          <div className="flex items-center justify-center mb-6 rounded-full h-14 w-14 bg-custom-light-green/10">
            <ShieldIcon className="h-7 w-7 text-custom-light-green" />
          </div>
          <h2 className="mb-3 font-bold sm:text-xl md:text-2xl">미션 도전</h2>
          <p className="mb-2 leading-loose text-custom-dark-gray dark:text-custom-light-gray">
            친구나 다른 유저에게 미션을 보낼 수 있어요.
            <br />
            같은 목표를 가진 사람끼리 도전하고 응원해요.
            <br />
            미션을 성공하면 보상이, 실패하면 벌칙이 기다려요.
          </p>
        </div>
        <Image
          src="/images/mockup-reward.png"
          alt="보상 페이지 목업"
          width={400}
          height={520}
          quality={100}
        />
      </div>
    </section>
  );
}
