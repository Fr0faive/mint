import Link from "next/link";

async function getTransactions() {
  const res = await fetch(`${process.env.API_URL}/api/transaction`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.json();
}

const TransactionsPage = async () => {
  //   const Transactions = await getTransactions();
  const [transactions] = await Promise.all([getTransactions()]);

  return (
    <div className="rounded-3xl bg-white/30 backdrop-blur-md p-4 animate-fade-down animate-ease-out">
      <h1 className="text-4xl mb-4 font-bold p-4">Transaction List</h1>
      <ul className="flex flex-col gap-5">
        {transactions.map((transaction) => (
          <Link
            href={`/transaction/${transaction._id}`}
            key={transaction._id}
            className=" rounded-3xl bg-white/30 backdrop-blur-md"
          >
            <li className=" p-5 cursor-pointer flex flex-col gap-3">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <p className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 w-fit">
                    {transaction.kategori}
                  </p>
                  <p className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 w-fit">
                    {transaction.metodePembayaran}
                  </p>
                </div>
                <p className="font-semibold font-mono">
                  Tanggal Transaksi: {transaction.tanggal}
                </p>
              </div>
              <h4 className="text-xl font-bold">{transaction.nama}</h4>
              <p>
                Rp
                {typeof transaction.jumlah === "number"
                  ? transaction.jumlah.toLocaleString("id-ID")
                  : transaction.jumlah}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsPage;
