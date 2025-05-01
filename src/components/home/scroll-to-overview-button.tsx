'use client';

import { ChevronDown } from 'lucide-react';
import Button from '../ui/button';

export default function ScrollToOverviewButton() {
  const handleClick = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      variant="secondary"
      className="text-sm border-none rounded-full"
      onClick={handleClick}
    >
      더 알아보기
      <ChevronDown className="w-4 h-4 ml-2" />
    </Button>
  );
}
