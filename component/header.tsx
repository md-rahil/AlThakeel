import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-gray-700"
            >
              Al Thakeel
            </Link>
          </div>

          <nav className="flex items-center space-x-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Products
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm font-medium">Login</span>
            <span className="text-gray-600 text-sm font-medium">Register</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;