"use client";
import React, { useState } from "react";
import axios from "axios";

const AddPage = () => {
  const [inputs, setInputs] = useState({
    nama: "",
    harga: 0,
    kategori: "",
    tanggal: "",
    metodePembayaran: "",
    lokasi: "",
    catatanTambahan: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    // setInputs({});
    axios
      .post("/api/transaction", inputs)
      .then((res) => {
        console.log(res);
        alert("Catatan Berhasil Ditambahkan");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        window.location.href = "/admin-crud";
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "jumlah" ? parseInt(value) : value;

    setInputs((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };
  return (
    <div className="flex flex-col p-5 gap-5 bg-white/30 backdrop-blur-md rounded-3xl">
      <h1 className="text-3xl font-bold px-4">
        <a href="/admin-crud">&larr;</a> Tambahkan Catatan
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 p-10 bg-white/30 backdrop-blur-md rounded-3xl"
      >
        <label htmlFor="nama">Nama Catatan</label>
        <input
          type="text"
          name="nama"
          placeholder="Masukkan Nama"
          className="py-2 px-4 border rounded-lg"
          value={inputs.nama || ""}
          onChange={handleChange}
        />
        <label htmlFor="jumlah">Jumlah uang</label>
        <input
          type="number"
          name="jumlah"
          placeholder="Masukkan jumlah"
          className="py-2 px-4 border rounded-lg"
          value={inputs.jumlah || ""}
          onChange={handleChange}
        />
        <label htmlFor="kategori">Kategori Catatan</label>
        <input
          type="text"
          name="kategori"
          placeholder="Masukkan kategori"
          className="py-2 px-4 border rounded-lg"
          value={inputs.kategori || ""}
          onChange={handleChange}
        />
        <label htmlFor="tanggal">Tanggal Catatan</label>
        <input
          type="date"
          name="tanggal"
          placeholder="Masukkan tanggal"
          className="py-2 px-4 border rounded-lg"
          value={inputs.tanggal || ""}
          onChange={handleChange}
        />
        <label htmlFor="metodePembayaran">Metode Pembayaran</label>
        <input
          type="text"
          name="metodePembayaran"
          placeholder="Masukkan Metode Pembayaran"
          className="py-2 px-4 border rounded-lg"
          value={inputs.metodePembayaran || ""}
          onChange={handleChange}
        />
        <label htmlFor="lokasi">Lokasi</label>
        <input
          type="text"
          name="lokasi"
          placeholder="Masukkan Metode Pembayaran"
          className="py-2 px-4 border rounded-lg"
          value={inputs.lokasi || ""}
          onChange={handleChange}
        />
        <label htmlFor="catatanTambahan">Catatan Tambahan</label>
        <input
          type="text"
          name="catatanTambahan"
          placeholder="Masukkan catatan tambahan"
          className="py-2 px-4 border rounded-lg"
          value={inputs.catatanTambahan || ""}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 p-2 text-white rounded-md w-full"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default AddPage;
