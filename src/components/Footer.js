export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 DevLog. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              개인정보처리방침
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              이용약관
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

