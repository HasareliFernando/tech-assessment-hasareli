import { useState } from "react";

import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const navigation = [
  { name: "AEON", href: "/", current: true },
  { name: "ShowCase", href: "/", current: false },
  { name: "Docs", href: "/", current: false },
  { name: "Blog", href: "/", current: false },
  { name: "Analytics", href: "/", current: false },
  { name: "Template", href: "/", current: false },
  { name: "Enterprise", href: "/", current: false },
];

export default function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-start">
          {!navBarOpen && (
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setNavBarOpen(true)}
              >
                <Bars3Icon className="block size-6" />
              </button>
            </div>
          )}

          {navBarOpen && (
            <div className="absolute inset-y-0 left-0 w-full flex items-center sm:hidden">
              <div className="relative inline-flex w-full">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className="absolute inset-y-0 end-10 flex items-center pe-3 pointer-events-none">
                  <MagnifyingGlassIcon className="size-6 text-gray-500 dark:text-gray-400" />
                </div>
                <button
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                  onClick={() => setNavBarOpen(false)}
                >
                  <XMarkIcon className="size-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
          )}
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`${
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <input
            type="search"
            id="default-search"
            className="hidden sm:ml-6 sm:block items-end w-1/3 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search documentation..."
          />
        </div>
      </div>
      {navBarOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={`${
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block rounded-md px-3 py-2 text-base font-medium'`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
