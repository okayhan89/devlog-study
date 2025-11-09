import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Dev<span className="text-blue-600 dark:text-blue-400">Log</span>
            </span>
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              홈
            </Link>
            <Link 
              href="/posts" 
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              포스트
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              소개
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              연락
            </Link>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden p-2 text-gray-700 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

