import ExpenseCard from "./ExpenseCard";
import EmptyState from "./EmptyState";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Expense History
        </h2>

        <p className="text-gray-500 mt-1">
          View and manage all transactions
        </p>
      </div>

      {/* Empty State */}
      {expenses.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">

          {expenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default ExpenseList;