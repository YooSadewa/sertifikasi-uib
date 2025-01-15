"use client";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function DetailSertifikasi() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <section className="pt-[10vh] pb-32 background-2 px-[7vw]">
        <div className="flex justify-between p-10 rounded-xl backdrop-blur-sm bg-white/60 w-full">
          <div className="flex items-center w-2/12">
            <Image
              src={"/assets/sertifikasi/sertifikasi-2.jpg"}
              alt="poster"
              width={1000}
              height={100}
              className="h-fit"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <div className="w-7/12 flex flex-col ms-5 justify-center">
            <h1 className="font-bold text-[1.8em] text-black break-words pe-10">
              Batch 2 - Perancangan Kontrak Pengadaan Barang dan Jasa - Pusat
              Sertifikasi
            </h1>
            <p className="text-xs italic">
              Perancangan Kontrak Pengadaan Barang dan Jasa{" "}
              <span className="not-italic">|</span> Pusat Sertifikasi
            </p>
            <p className="text-[12px] text-red-600 mt-2">
              * Klik gambar untuk melihat lebih jelas
            </p>
          </div>
          <div className="flex flex-col w-3/12 gap-2 justify-center">
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
                Mahasiswa <span className="text-[#d49b00]">UIB</span> : Rp
                750.000
              </li>
              <li>
                Alumni <span className="text-[#d49b00]">UIB</span> : Rp 950.000
              </li>
              <li>Umum : Rp 1.350.000</li>
            </ul>
          </div>
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
      <section className="px-[7vw] flex w-full gap-4 -mt-24 mb-16">
        <div className="flex flex-col w-8/12 gap-4">
          <div className="bg-white drop-shadow-2xl p-12 rounded h-fit">
            <div className="flex w-fit flex-col">
              <h1 className="font-bold text-2xl text-black">
                Tentang Sertifikasi
              </h1>
              <div className="flex gap-[2px] mt-1">
                <span className="h-1 w-2/12 bg-[#113963]"></span>
                <span className="h-1 w-6/12 bg-[#f7b500]"></span>
              </div>
            </div>
            <p className="mt-6">
              Sertifikasi Perancangan Kontrak Pengadaan Barang dan Jasa Batch 2
              telah dibuka hanya untuk Mahasiswa Aktif UIB Program Studi Ilmu
              Hukum Semester 3-7 yang belum memiliki sertifikasi kompetensi.
              Sertifikasi Perancangan Kontrak Pengadaan Barang dan Jasa juga
              dibuka bagi Alumni UIB dan Peserta UMUM. Pelatihan ini fokus pada
              perancangan kontrak untuk pengadaan barang dan jasa. Peserta akan
              memahami aspek hukum, teknis, dan administratif dalam menyusun
              kontrak pengadaan, termasuk peraturan pengadaan publik yang
              berlaku.
            </p>
          </div>
          <div className="bg-white drop-shadow-2xl p-12 rounded h-full">
            <div className="flex w-fit flex-col">
              <h1 className="font-bold text-2xl text-black">Pembayaran</h1>
              <div className="flex gap-[2px] mt-1">
                <span className="h-1 w-2/12 bg-[#113963]"></span>
                <span className="h-1 w-6/12 bg-[#f7b500]"></span>
              </div>
            </div>
            <p className="mt-6">
              Bagi mahasiswa Aktif Sarjana (S1) UIB di bawah &lt; angkatan 2021
              dan mahasiswa yang sudah menggunakan 3 Voucher sertifikasi, maka
              perlu melakukan pembayaran sesuai dengan biaya yang tertera dengan
              TRANSFER KE VIRTUAL ACCOUNT anda masing-masing yang digunakan
              untuk pembayaran kuliah.
            </p>
            <p className="mt-5">
              Catatan Tambahan terkait Biaya Sertifikasi teruntuk Mahasiswa
              Aktif Sarjana (S1) UIB, Mohon dibaca terkait ketentuan biaya :
              Mulai dari mahasiswa angkatan 2021, 2022, 2023 dan 2024
              mendapatkan *3 VOUCHER GRATIS* untuk mengikuti sertifikasi di UIB.
              Jika lebih dari 3 sertifikasi yang diikuti maka wajib membayar
              sesuai dengan biaya yang tertera. Lampiran bukti bayar, silahkan
              Screenshot di detail tagihan mahasiswa yang ada di MyPortal.
              Teruntuk mahasiswa prodi TI hanya memperoleh 2 voucher gratis.
              Kemudian terkhusus prodi SI, syarat kelulusan diwajibkan 4
              sertifikasi, maka sisa 1 sertifikasinya diwajibkan membayar
              Voucher sertifikasi tidak termasuk biaya retake/remedial dan biaya
              susulan Jika Anda berhalangan untuk mengikuti ujian sertifikasi
              sesuai jadwal yang ditentukan dan ingin melakukan ujian susulan
              maka akan dikenai biaya Rp200.000.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-4/12 gap-4">
          <div className="bg-white drop-shadow-2xl p-12 rounded h-fit">
            <div className="flex w-fit flex-col">
              <h1 className="font-bold text-xl text-black">
                Jadwal Pelatihan & Ujian
              </h1>
              <div className="flex gap-[2px] mt-1">
                <span className="h-1 w-2/12 bg-[#113963]"></span>
                <span className="h-1 w-6/12 bg-[#f7b500]"></span>
              </div>
            </div>
            <div className="">
              <h5 className="mt-6 font-semibold">Jadwal Pelatihan :</h5>
              <ul className="list-disc ps-4 mt-1">
                <li>25 Januari 2025 (09.00-15.00)</li>
                <li>26 Januari 2025 (09.00-15.00)</li>
                <li>01 Februari 2025 (09.00-15.00)</li>
              </ul>
            </div>
            <div className="">
              <h5 className="mt-6 font-semibold">Jadwal Ujian :</h5>
              <ul className="list-disc ps-4 mt-1">
                <li>
                  <h5 className="font-semibold">Tanggal Ujian : </h5>
                  <p>02 Februari 2025</p>
                </li>
                <li>
                  <h5 className="font-semibold">Waktu Ujian : </h5>
                  <p>10:00:00 - 12:00:00</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1 text-sm mt-3 text-red-600">
              <p>
                * Pelatihan & Ujian sertifikasi dilaksanakan secara 'ONLINE'
                melalui Microsoft Teams
              </p>
              <p>** Jadwal waktu pelatihan sewaktu-waktu dapat berubah</p>
            </div>
          </div>
          <div className="bg-white drop-shadow-2xl p-12 rounded h-full">
            <div className="flex w-fit flex-col">
              <h1 className="font-bold text-xl text-black">
                Pembayaran Peserta Umum
              </h1>
              <div className="flex gap-[2px] mt-1">
                <span className="h-1 w-2/12 bg-[#113963]"></span>
                <span className="h-1 w-6/12 bg-[#f7b500]"></span>
              </div>
            </div>
            <div className="flex mt-4">
              <h5 className="font-semibold">Nama Bank :</h5>
              <p className="ps-3">OCBC NISP</p>
            </div>
            <div className="flex">
              <h5 className="font-semibold">No. Rekening :</h5>
              <p className="ps-3">094800007802</p>
            </div>
            <div className="flex flex-col">
              <h5 className="font-semibold">Atas Nama :</h5>
              <p>YMTI - UNIVERSITAS INTERNASIONAL BATAM</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}