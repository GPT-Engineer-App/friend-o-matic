import Link from "next/link";
import { Users, Settings } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">FriendsList</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <Link to="/" className="inline-flex items-center px-3 py-2 border-b-2 border-indigo-500 text-sm font-medium text-gray-900">
                Home
              </Link>
              <Link to="/friends" className="inline-flex items-center px-3 py-2 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                <Users className="h-4 w-4 mr-1" />
                Friends
              </Link>
            </div>
          </div>
          <div>
            <Link to="/settings" className="inline-flex items-center px-3 py-2 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              <Settings className="h-4 w-4 mr-1" />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
