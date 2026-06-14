import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";
import CustomerCard
from "../components/CustomerCard";

import {
  useCustomerStore,
} from "../store/customerStore";
import CustomerDetails from "./CustomerDetails";
function Customers() {

  const {
    customers,
    getCustomers,
    addCustomer,
    deleteCustomer,
  } = useCustomerStore();

  const [form, setForm] =
    useState({
      name: "",
      phone: "",
      address: "",
    });

  useEffect(() => {
    getCustomers();
  }, []);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      await addCustomer(
        form
      );

      toast.success(
        "Customer Added"
      );

      getCustomers();

      setForm({
        name: "",
        phone: "",
        address: "",
      });
    };

  const handleDelete =
    async (id) => {

      await deleteCustomer(
        id
      );

      toast.success(
        "Customer Deleted"
      );

      getCustomers();
    };

  return (
    <div
      className="
      min-h-screen
      bg-slate-100"
    >


      <div
        className="
        p-6"
      >

        <h1
          className="
          text-3xl
          font-bold
          mb-6"
        >
          Customers
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
          className="
          bg-white
          p-6
          rounded-2xl
          shadow-md
          mb-8"
        >

          <div
            className="
            grid
            md:grid-cols-3
            gap-4"
          >

            <input
              placeholder="Name"
              className="
              border
              p-3
              rounded-lg"
              value={
                form.name
              }
              onChange={(e)=>
                setForm({
                  ...form,
                  name:
                    e.target.value,
                })
              }
            />

            <input
              placeholder="Phone"
              className="
              border
              p-3
              rounded-lg"
              value={
                form.phone
              }
              onChange={(e)=>
                setForm({
                  ...form,
                  phone:
                    e.target.value,
                })
              }
            />

            <input
              placeholder="Address"
              className="
              border
              p-3
              rounded-lg"
              value={
                form.address
              }
              onChange={(e)=>
                setForm({
                  ...form,
                  address:
                    e.target.value,
                })
              }
            />

          </div>

          <button
            className="
            mt-4
            bg-green-600
            text-white
            px-6
            py-3
            rounded-lg"
          >
            Add Customer
          </button>

        </form>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6"
        >

          {customers.map(
            (customer) => (
              <CustomerCard
                key={
                  customer._id
                }
                customer={
                  customer
                }
                onDelete={
                  handleDelete
                }
              />
            )
          )}
        </div>

      </div>
    </div>
  );
}

export default Customers;