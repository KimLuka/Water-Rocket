import {
  CalendarIcon,
  CheckIcon,
  GiftIcon,
  LockIcon,
  RocketIcon,
  TargetIcon,
  TrophyIcon,
} from 'lucide-react';

export default function FloatingIcons() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-6xl">
          {/* 로켓 */}
          <div className="absolute left-[15%] top-[20%] h-16 w-16 md:h-24 md:w-24 animate-float">
            <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
              <RocketIcon className="w-full h-full text-custom-light-green" />
            </div>
          </div>

          {/* 체크 아이콘 */}
          <div className="absolute left-[30%] top-[65%] h-12 w-12 md:h-16 md:w-16 animate-float">
            <div className="flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg">
              <CheckIcon className="w-6 h-6 text-custom-light-green" />
            </div>
          </div>

          {/* 선물 상자 */}
          <div className="absolute right-[15%] top-[25%] h-20 w-20 md:h-28 md:w-28 animate-float">
            <div className="w-full h-full p-3 bg-white rounded-lg shadow-lg">
              <GiftIcon className="w-full h-full text-custom-light-green" />
            </div>
          </div>

          {/* 타겟 아이콘 */}
          <div className="absolute right-[20%] top-[55%] h-14 w-14 md:h-20 md:w-20 animate-float">
            <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
              <TargetIcon className="w-full h-full text-custom-light-green" />
            </div>
          </div>

          {/* 달력 아이콘 */}
          <div className="absolute left-[40%] top-[10%] h-16 w-16 md:h-24 md:w-24 animate-float">
            <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
              <CalendarIcon className="w-full h-full text-custom-light-green" />
            </div>
          </div>

          {/* 트로피 아이콘 */}
          <div className="absolute left-[60%] top-[70%] h-12 w-12 md:h-16 md:w-16 animate-float">
            <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
              <TrophyIcon className="w-full h-full text-custom-orange" />
            </div>
          </div>

          {/* 자물쇠 아이콘 */}
          <div className="absolute left-[20%] top-[55%] h-10 w-10 md:h-14 md:w-14 animate-float">
            <div className="w-full h-full p-2 bg-white rounded-lg shadow-lg">
              <LockIcon className="w-full h-full text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
