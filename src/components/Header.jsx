import { FaWallet } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl text-white shadow-md">
            <FaWallet size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Expense Tracker
            </h1>

            <p className="text-sm text-gray-500">
              Smart Financial Dashboard
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;