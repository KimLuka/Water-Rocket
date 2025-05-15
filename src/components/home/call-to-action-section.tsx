import { AppleIcon, MonitorIcon, PlayIcon } from 'lucide-react';
import Button from '../common/button';

export default function CallToActionSection() {
  return (
    <section className="flex flex-col items-center py-20 text-white bg-custom-light-green">
      <h2 className="mb-6 text-3xl font-bold">지금 바로 시작해보세요</h2>
      <p className="mb-10 text-lg font-semibold">
        망해도 돼요, 물로켓은 여러 번 쏠 수 있으니까요
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="rounded-full button-secondary button-md">
          <AppleIcon className="w-4 h-4 mr-2" />
          <span className="font-extrabold">App Store</span>
        </Button>
        <Button className="rounded-full button-secondary button-md">
          <PlayIcon className="w-4 h-4 mr-2" />
          <span className="font-extrabold">Google Play</span>
        </Button>
        <Button className="rounded-full button-secondary button-md">
          <MonitorIcon className="w-4 h-4 mr-2" />
          <span className="font-extrabold">PC 버전 이용하기</span>
        </Button>
      </div>
    </section>
  );
}
