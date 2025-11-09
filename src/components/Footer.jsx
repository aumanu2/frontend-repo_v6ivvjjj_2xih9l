import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-700">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <Brain size={18} />
          </span>
          <p className="text-sm">Psychology Portfolio — crafted with care</p>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
