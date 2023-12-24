import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col p-5 gap-5 bg-white/30 backdrop-blur-md rounded-3xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-xl">
        Jika ada yang ingin ditanyakan, dapat menghubungi:
      </p>
      <a
        href="https://www.facebook.com/faikarmocht"
        className="font-semibold font-mono"
      >
        &rarr; Facebook
      </a>
      <a
        href="https://www.instagram.com/fai.krr"
        className="font-semibold font-mono"
      >
        &rarr; Instagram
      </a>
      <a href="https://wa.me/" className="font-semibold font-mono">
        &rarr; Whatsapp
      </a>
      <a
        href="mailto:faikarmocht@outlook.com"
        className="font-semibold font-mono"
      >
        &rarr; Email
      </a>
    </div>
  );
};

export default ContactPage;
