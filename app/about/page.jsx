import React from "react";

const Aboutpage = () => {
  return (
    <div>
      <h1 className="text-4xl">About Me</h1>
      <table className="table-auto border-spacing-4 border-separate">
        <tbody>
          <tr>
            <th className="font-bold text-start">Nama</th>
            <td>: Faikar Moch. Tajudin</td>
          </tr>
          <tr>
            <th className="font-bold text-start">NIM</th>
            <td>: 1217050052</td>
          </tr>
          <tr>
            <th className="font-bold text-start">Mata Kuliah</th>
            <td>: Praktikum Pengembangan Aplikasi Web - F</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Aboutpage;
