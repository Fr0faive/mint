import AddTransaction from "../component/AddTransaction";
import TransactionList from "../component/TransactionList";

async function getData() {
  const res = await fetch("http://localhost:3000/api/transaction", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const AdminPage = async () => {
  const data = await getData();
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Admin CRUD</h1>
        <AddTransaction />
      </div>
      <TransactionList data={data} />
    </div>
  );
};

export default AdminPage;
