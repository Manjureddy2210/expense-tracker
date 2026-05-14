import { useState } from "react";
import { categories } from "../data/categories";

import toast from "react-hot-toast";

function ExpenseForm({ addExpense }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!title || !amount) {
            setError("Please fill all fields");
            return;
        }

        if (Number(amount) <= 0) {
            setError("Amount must be greater than 0");
            return;
        }

        // Add expense
        addExpense({
            title,
            amount: Number(amount),
            category,
        });

        toast.success("Expense added successfully");

        // Reset
        setTitle("");
        setAmount("");
        setCategory("Food");
        setError("");
    };

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Add Expense
                </h2>

                <p className="text-gray-500 mt-1">
                    Track your daily spending efficiently
                </p>
            </div>

            {/* Error */}
            {error && (
                <div className="bg-red-100 text-red-600 p-3 rounded-xl mb-4 text-sm">
                    {error}
                </div>
            )}

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >

                {/* Title */}
                <input
                    type="text"
                    placeholder="Expense Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                />

                {/* Amount */}
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                />

                {/* Category */}
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                >
                    {categories.map((item) => (
                        <option key={item}>
                            {item}
                        </option>
                    ))}
                </select>

                {/* Button */}
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-4 py-3 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                    Add Expense
                </button>

            </form>
        </div>
    );
}

export default ExpenseForm;