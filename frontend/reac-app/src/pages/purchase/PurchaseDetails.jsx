import { useEffect, useState } from "react";
import { fetchAllItems } from "../../services/purchase/purchsesDetails";
import Layout from "../../components/Layout"; // Layout with Navbar + Sidebar

const HomeContent = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchAllItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);

  if (loading) return <p className="p-4">Loading items...</p>;

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4 text-emerald-900">Purchase Dashboard</h1>

      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-emerald-900 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Purchase ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-4 py-4 text-sm text-gray-800">{item.id}</td>
                  <td className="px-4 py-4 text-sm text-gray-800">{item.amount}</td>
                  <td className="px-4 py-4 text-sm text-gray-800">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
};

export default Home;