function CategoryBreakdown({ expenses }) {

  // Empty State
  if (expenses.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-800">
            Spending Analytics
          </h2>

          <p className="text-gray-500 mt-1 text-sm">
            Category-wise expense tracking
          </p>
        </div>

        <p className="text-gray-400 text-sm">
          No analytics available yet.
        </p>

      </div>
    );
  }

  // Total Expenses
  const total = expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  // Category Totals
  const categoryData = {};

  expenses.forEach((expense) => {
    if (categoryData[expense.category]) {
      categoryData[expense.category] += expense.amount;
    } else {
      categoryData[expense.category] = expense.amount;
    }
  });

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Spending Analytics
        </h2>

        <p className="text-gray-500 mt-1 text-sm">
          Category-wise expense tracking
        </p>
      </div>

      {/* Analytics */}
      <div className="space-y-5">

        {Object.entries(categoryData).map(([category, amount]) => {

          const percentage = ((amount / total) * 100).toFixed(1);

          return (
            <div key={category}>

              {/* Top */}
              <div className="flex items-center justify-between mb-2">

                <div>
                  <h3 className="font-medium text-gray-700">
                    {category}
                  </h3>
                </div>

                <div className="text-sm font-semibold text-gray-600">
                  ${amount} ({percentage}%)
                </div>

              </div>

              {/* Progress */}
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">

                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default CategoryBreakdown;