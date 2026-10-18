import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <header className="border-b bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="text-xl font-bold text-gray-900">
          WebApp
        </a>

        <button
          type="button"
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-16 w-full border-b bg-white px-4 py-4 md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 md:p-0 md:hover:bg-transparent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}