"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailTransactionPage = ({ params }) => {
  const { id } = params;
  const [data, setData] = useState({
    nama: "",
    harga: 0,
    kategori: "",
    tanggal: "",
    metodePembayaran: "",
    lokasi: "",
    catatanTambahan: "",
  });

  useEffect(() => {
    axios
      .get(`/api/transaction/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Detail Transaction</h1>
      <div className="border flex flex-col gap-3 border-black p-4 rounded-lg">
        <div className="flex flex-row justify-between">
          <p className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 w-fit">
            {data.kategori}
          </p>
          <p className="font-semibold font-mono">
            Tanggal Transaksi: {data.tanggal}
          </p>
        </div>
        <h4 className="text-xl font-bold">{data.nama}</h4>
        <p className="font-medium">
          Total: Rp
          {typeof data.jumlah === "number"
            ? data.jumlah.toLocaleString("id-ID")
            : data.jumlah}
        </p>
        <p className="font-medium">Metode: {data.metodePembayaran}</p>
        <p className="font-medium">Lokasi: {data.lokasi}</p>
        <p className="font-medium">Catatan: {data.catatanTambahan}</p>
      </div>
    </div>
  );
};

export default DetailTransactionPage;
