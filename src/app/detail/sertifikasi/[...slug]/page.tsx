"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function DetailSertifikasi() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <section className="pt-[10vh] pb-32 background-2 flex justify-between px-[10vw] gap-10 text-white">
        <div className="flex flex-col gap-0">
          <div className="flex gap-5 w-[55vw]">
            <div className="w-[30vw] flex items-center justify-center">
              <Image
                src={"/assets/sertifikasi/sertifikasi-2.jpg"}
                alt="poster"
                width={1000}
                height={200}
                className="max-h-full max-w-full cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
            <div className="flex py-5 items-center">
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-white text-[1.8em]">
                  Batch 2 - Perancangan Kontrak Pengadaan Barang dan Jasa -
                  Pusat Sertifikasi
                </h1>
                <p className="text-xs italic">
                  Perancangan Kontrak Pengadaan Barang dan Jasa{" "}
                  <span className="not-italic">|</span> Pusat Sertifikasi
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs font-semibold text-black">* Klik gambar untuk melihat detail gambar</p>
        </div>
        <div className="flex flex-col w-[20vw] gap-2 justify-center">
          <p className="text-[14px] font-semibold text-center">
            Tanggal Ujian : 02 Februari 2025
          </p>
          <Button
            variant="secondary"
            className="hover:bg-[#113963] hover:text-white rounded ease-in duration-200 w-full font-semibold py-6"
          >
            Daftar Sekarang
          </Button>
          <p className="text-[12px] mt-2 text-end">Ketentuan Biaya:</p>
          <ul className="font-bold text-end">
            <li>
              Mahasiswa <span className="text-[#f7b500]">UIB</span> : Rp 750.000
            </li>
            <li>
              Alumni <span className="text-[#f7b500]">UIB</span> : Rp 950.000
            </li>
            <li>Umum : Rp 1.350.000</li>
          </ul>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <button
              className="absolute top-2 right-2 w-10 h-10 font-bold text-black bg-gray-200 rounded-full p-1"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <div className="relative bg-white p-4 rounded">
              <Image
                src={"/assets/sertifikasi/sertifikasi-2.jpg"}
                alt="poster"
                width={1000}
                height={200}
                className="w-[40vw] h-auto"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
