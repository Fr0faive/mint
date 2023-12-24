import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise;

const TransactionSchema = new Schema(
  {
    nama: String,
    jumlah: Number,
    kategori: String,
    tanggal: String,
    metodePembayaran: String,
    lokasi: String,
    catatanTambahan: String,
  },
  { timestamps: true }
);

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", TransactionSchema);

export default Transaction;
