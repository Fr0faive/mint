import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-7 bg-white/30 backdrop-blur-md p-10 rounded-3xl">
      <h1 className="text-4xl font-semibold text-center">
        Hallo, Selamat Datang!
      </h1>
      <p className="text-xl text-justify">
        Web ini adalah Catatan Keuangan Pribadi. Web ini bertujuan untuk
        memenuhi penilaian UAS praktikum pengembangan aplikasi web.
      </p>
    </div>
  );
};

export default Homepage;
