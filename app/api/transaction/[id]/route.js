// url: https://example.com/api/posts/[id]
import Transaction from "@/app/(models)/Transaction";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return NextResponse.json(
        { error: "Transaction not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(transaction);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong when fetching", error },
      { status: 500 }
    );
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const body = await req.json();
    const { id } = params;

    const updateTransaction = await Transaction.findByIdAndUpdate(
      id,
      {
        $set: body,
      },
      { new: true }
    );

    if (!updateTransaction) {
      return NextResponse.json(
        { error: "Transaction not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updateTransaction);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong when updating", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return NextResponse.json(
        { error: "Transaction not found" },
        { status: 404 }
      );
    }

    return NextResponse.json("Transaction deleted successfully");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong when deleting", error },
      { status: 500 }
    );
  }
};
