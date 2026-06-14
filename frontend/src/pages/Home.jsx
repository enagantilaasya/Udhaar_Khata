import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="min-h-screen bg-slate-50">


      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <span
              className="
              bg-green-100
              text-green-700
              px-4
              py-2
              rounded-full"
            >
              Smart Credit Management
            </span>

            <h1
              className="
              text-6xl
              font-bold
              mt-6
              leading-tight"
            >
              Digital
              <span className="text-green-600">
                {" "}Udhaar Khata
              </span>
            </h1>

            <p
              className="
              mt-6
              text-xl
              text-slate-600"
            >
              Manage customer credit,
              transactions, rankings,
              reminders, loyalty rewards,
              PDF statements and business
              insights in one platform.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                to="/register"
                className="
                bg-green-600
                text-white
                px-8
                py-4
                rounded-2xl
                shadow-lg
                hover:bg-green-700
                transition-all"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="
                border-2
                border-green-600
                text-green-600
                px-8
                py-4
                rounded-2xl
                hover:bg-green-50
                transition-all"
              >
                Login
              </Link>

            </div>

          </div>

          <div>

            <div
              className="
              bg-gradient-to-r
              from-green-500
              via-emerald-500
              to-cyan-500
              rounded-3xl
              p-10
              text-white
              shadow-2xl"
            >

              <h2 className="text-3xl font-bold">
                Store Overview
              </h2>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-white/20 rounded-2xl p-5">
                  <p>Total Customers</p>
                  <h1 className="text-3xl font-bold">
                    125
                  </h1>
                </div>

                <div className="bg-white/20 rounded-2xl p-5">
                  <p>Pending Amount</p>
                  <h1 className="text-3xl font-bold">
                    ₹1.2L
                  </h1>
                </div>

                <div className="bg-white/20 rounded-2xl p-5">
                  <p>Collected</p>
                  <h1 className="text-3xl font-bold">
                    ₹85K
                  </h1>
                </div>

                <div className="bg-white/20 rounded-2xl p-5">
                  <p>Transactions</p>
                  <h1 className="text-3xl font-bold">
                    320
                  </h1>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 py-16">

        <h1
          className="
          text-4xl
          font-bold
          text-center
          mb-12"
        >
          Powerful Features
        </h1>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8"
        >

          {/* Customer Management */}

          <div className="group [perspective:1000px]">

            <div
              className="
              relative
              h-72
              transition-all
              duration-700
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
            >

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-green-500
                to-emerald-600
                text-white
                rounded-3xl
                p-8
                [backface-visibility:hidden]"
              >
                <h2 className="text-2xl font-bold">
                  Customer Management
                </h2>

                <p className="mt-4">
                  Add & Manage Customers
                </p>
              </div>

              <div
                className="
                absolute
                inset-0
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <p>
                  Store customer details,
                  phone numbers, addresses
                  and balances digitally.
                </p>
              </div>

            </div>

          </div>

          {/* Transactions */}

          <div className="group [perspective:1000px]">

            <div
              className="
              relative
              h-72
              transition-all
              duration-700
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
            >

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                rounded-3xl
                p-8
                [backface-visibility:hidden]"
              >
                <h2 className="text-2xl font-bold">
                  Transactions
                </h2>

                <p className="mt-4">
                  Credit & Debit Tracking
                </p>
              </div>

              <div
                className="
                absolute
                inset-0
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <p>
                  Record payments,
                  credits, debits,
                  notes and payment methods.
                </p>
              </div>

            </div>

          </div>

          {/* PDF Reports */}

          <div className="group [perspective:1000px]">

            <div
              className="
              relative
              h-72
              transition-all
              duration-700
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
            >

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-red-500
                to-orange-500
                text-white
                rounded-3xl
                p-8
                [backface-visibility:hidden]"
              >
                <h2 className="text-2xl font-bold">
                  PDF Statements
                </h2>

                <p className="mt-4">
                  Download Reports
                </p>
              </div>

              <div
                className="
                absolute
                inset-0
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <p>
                  Generate customer reports
                  and transaction statements
                  instantly as PDF files.
                </p>
              </div>

            </div>

          </div>

          {/* Reminders */}

          <div className="group [perspective:1000px]">

            <div
              className="
              relative
              h-72
              transition-all
              duration-700
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
            >

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                text-white
                rounded-3xl
                p-8
                [backface-visibility:hidden]"
              >
                <h2 className="text-2xl font-bold">
                  SMS Reminders
                </h2>

                <p className="mt-4">
                  Twilio Integration
                </p>
              </div>

              <div
                className="
                absolute
                inset-0
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <p>
                  Send payment reminders
                  directly to customers
                  through SMS.
                </p>
              </div>

            </div>

          </div>

          {/* Ranking */}

          <div className="group [perspective:1000px]">

            <div
              className="
              relative
              h-72
              transition-all
              duration-700
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
            >

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-yellow-500
                to-orange-500
                text-white
                rounded-3xl
                p-8
                [backface-visibility:hidden]"
              >
                <h2 className="text-2xl font-bold">
                  Customer Ranking
                </h2>

                <p className="mt-4">
                  Loyalty Tracking
                </p>
              </div>

              <div
                className="
                absolute
                inset-0
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <p>
                  Rank customers based on
                  balance and transaction
                  history automatically.
                </p>
              </div>

            </div>

          </div>

          {/* Loyalty Discounts */}

          <div className="group [perspective:1000px]">

            <div
              className="
              relative
              h-72
              transition-all
              duration-700
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]"
            >

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-emerald-500
                to-lime-500
                text-white
                rounded-3xl
                p-8
                [backface-visibility:hidden]"
              >
                <h2 className="text-2xl font-bold">
                  Loyalty Discounts
                </h2>

                <p className="mt-4">
                  Reward Customers
                </p>
              </div>

              <div
                className="
                absolute
                inset-0
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <p>
                  Give discounts to top
                  ranked customers and
                  increase customer loyalty.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20">

        <div
          className="
          max-w-5xl
          mx-auto
          bg-gradient-to-r
          from-green-600
          to-emerald-500
          rounded-3xl
          text-center
          text-white
          p-12"
        >

          <h1 className="text-4xl font-bold">
            Ready to Go Digital?
          </h1>

          <p className="mt-4 text-lg">
            Stop using paper khatas.
            Manage everything digitally.
          </p>

          <Link
            to="/register"
            className="
            inline-block
            mt-8
            bg-white
            text-green-600
            px-8
            py-4
            rounded-2xl
            font-semibold"
          >
            Create Free Account
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;