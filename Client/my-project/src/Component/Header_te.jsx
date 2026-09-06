import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xl">
            🍜
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Tasty Food
            </h1>

            <p className="hidden text-xs text-gray-500 sm:block">
              Ngon mỗi ngày
            </p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            Trang chủ
          </a>

          <a
            href="#menu"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            Thực đơn
          </a>

          <a
            href="#promotion"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            Khuyến mãi
          </a>

          <a
            href="#contact"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            Liên hệ
          </a>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl transition hover:bg-orange-100"
            aria-label="Giỏ hàng"
          >
            🛒

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
              2
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-2xl md:hidden"
            aria-label="Mở menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="border-t bg-white px-4 py-4 md:hidden">

          <div className="flex flex-col gap-2">

            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              🏠 Trang chủ
            </a>

            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              🍜 Thực đơn
            </a>

            <a
              href="#promotion"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              🎁 Khuyến mãi
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              📞 Liên hệ
            </a>

          </div>

        </div>
      )}
    </header>
  );
}

export default Header;