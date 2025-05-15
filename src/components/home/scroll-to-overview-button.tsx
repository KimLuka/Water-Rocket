'use client';

import { ChevronDown } from 'lucide-react';
import Button from '../common/button';

export default function ScrollToOverviewButton() {
  const handleClick = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      className="border-none rounded-full button-secondary button-sm w-28.75"
      onClick={handleClick}
    >
      더 알아보기
      <ChevronDown className="w-4 h-4 ml-2" />
    </Button>
  );
}
