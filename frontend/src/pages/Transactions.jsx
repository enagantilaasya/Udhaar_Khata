import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  useTransactionStore,
} from "../store/transactionStore";

import {
  useCustomerStore,
} from "../store/customerStore";

function Transactions() {

  const {
    transactions,
    getTransactions,
    addTransaction,
    deleteTransaction,
  } = useTransactionStore();

  const {
    customers,
    getCustomers,
  } = useCustomerStore();

  const [search, setSearch] =
    useState("");

  const [form, setForm] =
    useState({
      customerId: "",
      amount: "",
      type: "credit",
      note: "",
      paymentMethod: "cash",
    });

  useEffect(() => {

    getCustomers();
    getTransactions();

  }, []);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await addTransaction(
          form
        );

        toast.success(
          "Transaction Added"
        );

        await getTransactions();

        setForm({
          customerId: "",
          amount: "",
          type: "credit",
          note: "",
          paymentMethod:
            "cash",
        });

      } catch (err) {

        toast.error(
          "Failed To Add Transaction"
        );

      }
    };

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete Transaction?"
        );

      if (!confirmDelete)
        return;

      try {

        await deleteTransaction(
          id
        );

        toast.success(
          "Transaction Deleted"
        );

        getTransactions();

      } catch (err) {

        toast.error(
          "Delete Failed"
        );

      }
    };

  const filteredTransactions =
    transactions.filter(
      (item) =>
        item.customerId?.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-cyan-50
      to-emerald-50"
    >

      <div className="p-6">

        {/* Header */}

        <div
          className="
          bg-gradient-to-r
          from-emerald-600
          via-green-500
          to-cyan-500
          rounded-3xl
          p-8
          text-white
          mb-8"
        >
          <h1 className="text-4xl font-bold">
            Transactions
          </h1>

          <p className="mt-2 text-white/80">
            Manage Customer Payments
          </p>
        </div>

        {/* Add Transaction Form */}

        <form
          onSubmit={handleSubmit}
          className="
          bg-white
          p-6
          rounded-3xl
          shadow-sm
          mb-8"
        >

          <div
            className="
            grid
            md:grid-cols-2
            gap-4"
          >

            <select
              value={form.customerId}
              onChange={(e) =>
                setForm({
                  ...form,
                  customerId:
                    e.target.value,
                })
              }
              className="
              border
              p-3
              rounded-xl"
            >
              <option value="">
                Select Customer
              </option>

              {customers.map(
                (customer) => (
                  <option
                    key={
                      customer._id
                    }
                    value={
                      customer._id
                    }
                  >
                    {customer.name}
                  </option>
                )
              )}
            </select>

            <input
              type="number"
              placeholder="Amount"
              value={form.amount}
              onChange={(e) =>
                setForm({
                  ...form,
                  amount:
                    e.target.value,
                })
              }
              className="
              border
              p-3
              rounded-xl"
            />

            <select
              value={form.type}
              onChange={(e) =>
                setForm({
                  ...form,
                  type:
                    e.target.value,
                })
              }
              className="
              border
              p-3
              rounded-xl"
            >
              <option value="credit">
                Credit
              </option>

              <option value="debit">
                Debit
              </option>
            </select>

            <select
              value={
                form.paymentMethod
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  paymentMethod:
                    e.target.value,
                })
              }
              className="
              border
              p-3
              rounded-xl"
            >
              <option value="cash">
                Cash
              </option>

              <option value="card">
                Card
              </option>

              <option value="gpay">
                GPay
              </option>

              <option value="phonepe">
                PhonePe
              </option>

              <option value="paytm">
                Paytm
              </option>
            </select>

            <input
              placeholder="Note"
              value={form.note}
              onChange={(e) =>
                setForm({
                  ...form,
                  note:
                    e.target.value,
                })
              }
              className="
              border
              p-3
              rounded-xl
              md:col-span-2"
            />

          </div>

          <button
            className="
            mt-6
            bg-gradient-to-r
            from-emerald-600
            to-cyan-500
            text-white
            px-6
            py-3
            rounded-xl"
          >
            Add Transaction
          </button>

        </form>

        {/* Search */}

        <div className="mb-6">

          <input
            type="text"
            placeholder="Search Customer..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
            w-full
            bg-white
            border
            p-3
            rounded-xl"
          />

        </div>

        {/* Transaction List */}

        <div className="space-y-4">

          {filteredTransactions.map(
            (item) => (

              <div
                key={item._id}
                className="
                bg-white
                p-5
                rounded-3xl
                shadow-sm
                hover:shadow-lg
                transition-all"
              >

                <div className="flex justify-between">

                  <div>

                    <h3
                      className="
                      text-xl
                      font-bold"
                    >
                      {
                        item.customerId
                          ?.name
                      }
                    </h3>

                    <p
                      className={`mt-2 font-semibold ${
                        item.type ===
                        "credit"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      Amount:
                      ₹{item.amount}
                    </p>

                    <p
                      className={
                        item.type ===
                        "credit"
                          ? "text-green-600 font-semibold"
                          : "text-red-500 font-semibold"
                      }
                    >
                      {item.type}
                    </p>

                    <p>
                      Method:
                      {" "}
                      {
                        item.paymentMethod
                      }
                    </p>

                    <p>
                      Note:
                      {" "}
                      {
                        item.note ||
                        "-"
                      }
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      handleDelete(
                        item._id
                      )
                    }
                    className="
                    h-fit
                    bg-red-500
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    hover:bg-red-600"
                  >
                    Delete
                  </button>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default Transactions;