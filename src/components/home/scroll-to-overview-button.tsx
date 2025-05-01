'use client';

import Button from '../ui/button';

export default function ScrollToOverviewButton() {
  const handleClick = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      variant="secondary"
      className="border-none rounded-full"
      onClick={handleClick}
    >
      더 알아보기
    </Button>
  );
}
