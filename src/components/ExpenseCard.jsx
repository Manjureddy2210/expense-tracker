import { FaTrash } from "react-icons/fa";

function ExpenseCard({ expense, deleteExpense }) {

  // Category Colors
  const categoryColors = {
    Food: "bg-green-100 text-green-600",
    Travel: "bg-blue-100 text-blue-600",
    Marketing: "bg-purple-100 text-purple-600",
    Utilities: "bg-yellow-100 text-yellow-700",
    Shopping: "bg-pink-100 text-pink-600",
    Entertainment: "bg-orange-100 text-orange-600",
    Health: "bg-red-100 text-red-600",
    Other: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center justify-between">

        {/* Left */}
        <div>

          <h3 className="text-lg font-semibold text-gray-800">
            {expense.title}
          </h3>

          <div className="flex items-center gap-3 mt-3">

            {/* Category */}
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                categoryColors[expense.category]
              }`}
            >
              {expense.category}
            </span>

            {/* Amount */}
            <p className="text-gray-700 font-semibold">
              ${expense.amount}
            </p>

          </div>
        </div>

        {/* Delete */}
        <button
          onClick={() => deleteExpense(expense.id)}
          className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-xl transition"
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default ExpenseCard;