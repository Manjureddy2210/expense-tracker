import { FaReceipt } from "react-icons/fa";

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center">

      <div className="bg-blue-100 text-blue-600 p-5 rounded-full mb-4">
        <FaReceipt size={30} />
      </div>

      <h3 className="text-xl font-semibold text-gray-700">
        No Expenses Yet
      </h3>

      <p className="text-gray-500 mt-2 max-w-sm">
        Start adding your expenses to track your spending
        analytics and financial overview.
      </p>

    </div>
  );
}

export default EmptyState;