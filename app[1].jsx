import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-blue-600"
          >
            Brand
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-medium text-gray-700 transition hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {isOpen && (
          <div id="mobile-menu" className="border-t bg-white px-4 py-4 md:hidden">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to our website
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            This is a mobile-first responsive React and Tailwind layout.
          </p>
        </section>

        <section id="about" className="bg-white px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">About</h2>
          </div>
        </section>

        <section id="services" className="px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          </div>
        </section>

        <section id="contact" className="bg-white px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          </div>
        </section>
      </main>
    </div>
  );
}