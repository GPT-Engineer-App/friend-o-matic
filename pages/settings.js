import NavBar from '@/components/NavBar';

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Settings Page</h1>
        {/* Add settings page content here */}
      </div>
    </div>
  );
}
