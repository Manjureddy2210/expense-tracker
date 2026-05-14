import {
  FaDollarSign,
  FaCreditCard,
  FaLayerGroup,
  FaGlobe,
} from "react-icons/fa";

function SummaryCards({ expenses }) {

  const totalExpenses = expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const totalCategories = new Set(
    expenses.map((item) => item.category)
  ).size;

  const cards = [
    {
      title: "Total Expenses",
      value: `$${totalExpenses}`,
      icon: <FaDollarSign />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Transactions",
      value: expenses.length,
      icon: <FaCreditCard />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Categories",
      value: totalCategories,
      icon: <FaLayerGroup />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Currency",
      value: "USD",
      icon: <FaGlobe />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-3 text-gray-800">
                {card.value}
              </h2>
            </div>

            <div
              className={`bg-gradient-to-r ${card.color} p-4 rounded-2xl text-white text-xl shadow-md`}
            >
              {card.icon}
            </div>

          </div>
        </div>
      ))}

    </div>
  );
}

export default SummaryCards;