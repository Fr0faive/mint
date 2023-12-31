import AddTransaction from "../component/ButtonAdd";
import TransactionList from "../component/TransactionList";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/transaction`, {
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
    <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md p-4 rounded-3xl animate-fade-down animate-ease-out">
      <div className="my-5 flex flex-col gap-4 px-4">
        <h1 className="text-3xl font-bold">Kelola Catatan</h1>
        <AddTransaction />
      </div>
      <TransactionList data={data} />
    </div>
  );
};

export default AdminPage;
