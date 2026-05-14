import useLocalStorage from "./hooks/useLocalStorage";

import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import CategoryBreakdown from "./components/CategoryBreakdown";
import CurrencyConverter from "./components/CurrencyConverter";

import toast from "react-hot-toast";

function App() {
  const [expenses, setExpenses] =
  useLocalStorage("expenses", []);

  // Add Expense
  const addExpense = (expense) => {
    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...expense,
      },
    ]);
  };

  const deleteExpense = (id) => {
    toast.success("Expense deleted successfully");
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7fb] to-[#eef2ff]">

      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">

        {/* Summary */}
        <SummaryCards expenses={expenses} />

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          {/* Left */}
          <div className="lg:col-span-2 space-y-6">

            <ExpenseForm addExpense={addExpense} />

            <ExpenseList
              expenses={expenses}
              deleteExpense={deleteExpense}
            />  

          </div>

          {/* Right */}
          <div className="space-y-6">

            <CurrencyConverter expenses={expenses} />

            <CategoryBreakdown expenses={expenses} />

          </div>

        </div>

      </main>
    </div>
  );
}

export default App;