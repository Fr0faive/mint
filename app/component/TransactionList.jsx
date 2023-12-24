"use client";
import axios from "axios";

const TransactionList = ({ data }) => {
  const handleEdit = (id) => {};
  const handleDelete = (id) => {
    const isConfirm = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (isConfirm) {
      axios
        .delete(`http://localhost:3000/api/transaction/${id}`)
        .then((res) => {
          console.log(res);
          alert("Catatan Berhasil Dihapus");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          window.location.reload();
        });
    }
  };
  console.log(data);
  return (
    <div>
      <ul className="flex flex-col gap-5">
        {data.map((datas) => (
          <li className="bg-gray-100 p-5 flex flex-row" key={datas._id}>
            <div className="flex flex-col gap-3">
              <p className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 w-fit">
                {datas.kategori}
              </p>
              <h4 className="text-xl font-bold">{datas.nama}</h4>
              <p className="font-medium">
                Rp
                {typeof datas.jumlah === "number"
                  ? datas.jumlah.toLocaleString("id-ID")
                  : datas.jumlah}
              </p>
            </div>
            <div className="ml-auto flex flex-col justify-start items-end gap-4">
              <p className="font-mono">Tanggal Transaksi: {datas.tanggal}</p>
              <div className="flex flex-row gap-4">
                <a
                  href={`/admin-crud/edit/${datas._id}`}
                  className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                >
                  edit
                </a>
                <button
                  className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
                  onClick={() => handleDelete(datas._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
