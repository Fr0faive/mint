"use client";

const AddTransaction = () => {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href = "/admin-crud/add";
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Tambahkan Catatan
      </button>
    </div>
  );
};

export default AddTransaction;
