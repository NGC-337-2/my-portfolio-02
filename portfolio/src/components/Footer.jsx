import { siteConfig } from '../config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (

    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <span>Built with Next.js</span>
          </div>

          <div className="flex gap-6">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
