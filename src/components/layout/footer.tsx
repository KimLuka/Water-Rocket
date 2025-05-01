import { RocketIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-custom-light-gray">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <RocketIcon className="w-5 h-5 text-custom-light-green" />
          <span className="font-semibold">물로켓</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 물로켓. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
