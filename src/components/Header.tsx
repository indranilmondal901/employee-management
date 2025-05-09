import { SignOutButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white">
      <h1 className="text-2xl font-bold">Employee Management</h1>
      <SignOutButton>
        <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition">
          Sign Out
        </button>
      </SignOutButton>
    </header>
  );
};

export default Header;