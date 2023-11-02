"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Island_Moments } from "next/font/google";

const inter = Island_Moments({ subsets: ["latin"], weight: "400" });

const navigation = [
  { name: "Home", href: "/" },
  { name: "Philiosophie", href: "#" },
  { name: "Company", href: "/" },

  { name: "Philppsburg", href: "#" },
  { name: "Walldorf", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center lg:justify-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden justify-between w-full">
          <h1 className={"text-5xl font-bold text-red-700 " + inter.className}>
            Headline
          </h1>

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-20">
          {navigation.map((item) => (
            <>
              {item.name === "Company" ? (
                <div className="flex-shrink-0">
                  <Link href="#" className="flex">
                    <span className="sr-only">Workflow</span>
                    <h1
                      className={
                        "text-8xl font-bold text-red-700 " + inter.className
                      }
                    >
                      Headline
                    </h1>
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl font-semibold leading-6 text-white hover:text-red-300 hover:scale-105 hover:underline hover:transition-all duration-500"
                >
                  {item.name}
                </Link>
              )}
            </>
          ))}
        </div>
      </nav>
      <Mobile isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </header>
  );
}

function Mobile({
  isOpen: mobileMenuOpen,
  setIsOpen: setMobileMenuOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/25">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
