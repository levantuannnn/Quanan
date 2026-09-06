import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Thông tin nhà hàng */}
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xl">
                                🍜
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    Tasty Food
                                </h2>
                                <p className="text-xs text-gray-400">
                                    Ngon mỗi ngày
                                </p>
                            </div>
                        </div>

                        <p className="text-sm leading-6 text-gray-400">
                            Mang đến những món ăn ngon, chất lượng và trải nghiệm
                            tuyệt vời cho khách hàng mỗi ngày.
                        </p>
                    </div>

                    {/* Liên kết */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">
                            Liên kết
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="#home"
                                    className="transition hover:text-orange-500"
                                >
                                    Trang chủ
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#menu"
                                    className="transition hover:text-orange-500"
                                >
                                    Thực đơn
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#promotion"
                                    className="transition hover:text-orange-500"
                                >
                                    Khuyến mãi
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="transition hover:text-orange-500"
                                >
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Thực đơn */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">
                            Thực đơn
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="#foods"
                                    className="transition hover:text-orange-500"
                                >
                                    🍜 Món ăn
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#drinks"
                                    className="transition hover:text-orange-500"
                                >
                                    🥤 Thức uống
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#desserts"
                                    className="transition hover:text-orange-500"
                                >
                                    🍰 Tráng miệng
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Thông tin liên hệ */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">
                            Liên hệ
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                📍 123 Đường ABC, Thành phố Huế
                            </li>

                            <li>
                                📞 0123 456 789
                            </li>

                            <li>
                                ✉️ tastyfood@gmail.com
                            </li>

                            <li>
                                🕐 08:00 - 22:00
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Đường kẻ */}
                <div className="my-8 border-t border-gray-700"></div>

                {/* Copyright */}
                <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 md:flex-row">
                    <p>
                        © 2026 Tasty Food. All rights reserved.
                    </p>

                    <p>
                        Thiết kế và phát triển bởi Tasty Food
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;