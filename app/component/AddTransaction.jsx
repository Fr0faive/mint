"use client";
import { useState } from "react";
import Modal from "./Modal";

const AddTransaction = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      nama: e.target.nama.value,
      jumlah: e.target.harga.value,
      kategori: e.target.kategori.value,
      tanggal: e.target.tanggal.value,
      metodePembayaran: e.target.metodePembayaran.value,
      lokasi: e.target.lokasi.value,
      catatanTambahan: e.target.catatanTambahan.value,
    };
    const response = await fetch("/api/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    setData([...data, json]);
    setModalOpen(false);
  };
  return (
    <div>
      {/* <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Tambah Catatan
      </button> */}
      <button
        onClick={() => {
          window.location.href = "/admin-crud/add";
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Tambahkan Catatan
      </button>
      {/* <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <h1 className="text-3xl text-start w-full">Tambah Catatan</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nama"
            id="nama"
            placeholder="Masukkan Nama Transaksi"
            className="w-full p-2 my-5 rounded-lg"
          />
          <input
            type="number"
            name="jumlah"
            id="jumlah"
            placeholder="Rp. 0"
            className="w-full p-2 my-5 rounded-lg"
          />
          <input
            type="text"
            name="kategori"
            id="kategori"
            placeholder="Masukkan Kategori"
            className="w-full p-2 my-5 rounded-lg"
          />
          <input
            type="date"
            name="tanggal"
            id="tanggal"
            className="w-full p-2 my-5 rounded-lg"
          />
          <input
            type="text"
            name="metodePembayaran"
            id="metodePembayaran"
            placeholder="Masukkan Metode Pembayaran"
            className="w-full p-2 my-5 rounded-lg"
          />
          <input
            type="text"
            name="lokasi"
            id="lokasi"
            placeholder="Masukkan lokasi Transaksi"
            className="w-full p-2 my-5 rounded-lg"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 p-3 rounded-md text-white"
          >
            Simpan
          </button>
        </form>
      </Modal> */}
    </div>
  );
};

export default AddTransaction;
