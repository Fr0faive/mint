// url: https://example.com/api/posts

import Transaction from "@/app/(models)/Transaction";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const {
      nama,
      jumlah,
      kategori,
      tanggal,
      metodePembayaran,
      lokasi,
      catatanTambahan,
    } = body;

    const newTransaction = await Transaction.create({
      nama,
      jumlah,
      kategori,
      tanggal,
      metodePembayaran,
      lokasi,
      catatanTambahan,
    });

    return NextResponse.json(newTransaction);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong when creating", error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const transactions = await Transaction.find();
    return NextResponse.json(transactions);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong", error },
      { status: 500 }
    );
  }
};
