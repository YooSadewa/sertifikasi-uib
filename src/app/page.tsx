"use client";
import Image from "next/image";
import {
  Award,
  BriefcaseBusinessIcon,
  GraduationCap,
  Users,
} from "lucide-react";
import { Calendar } from "@/components/calendar";
import ScheduleTable, {
  ScheduleDetail,
} from "@/components/schedulesertifikasi";
import ScheduleTableSeminar from "@/components/scheduleseminar";
import Link from "next/link";
import { CarouselPlugin } from "@/components/slider";
import { Testimoni } from "@/components/testimoni";
import Footer from "@/components/footer";

const highlightedDateSertif = [
  new Date(2025, 0, 15),
  new Date(2025, 0, 20),
  new Date(2025, 0, 25),
];

const highlightedDateSeminar = [
  new Date(2025, 0, 7),
  new Date(2025, 0, 12),
  new Date(2025, 0, 30),
];

const scheduleSertif: ScheduleDetail[] = [
  {
    date: new Date(2025, 0, 15),
    time: "09:00 - 10:30",
    title: "Sertifikasi A",
    location: "Ruang Meeting 1",
    price: "Rp. 1.000.000",
  },
  {
    date: new Date(2025, 0, 20),
    time: "13:00 - 14:00",
    title: "Sertifikasi B",
    location: "Online - Zoom",
    price: "Rp. 200.000",
  },
  {
    date: new Date(2025, 0, 25),
    time: "15:00 - 16:00",
    title: "Sertifikasi C",
    location: "Ruang Conference",
    price: "Rp. 0",
  },
];
const scheduleSeminar: ScheduleDetail[] = [
  {
    date: new Date(2025, 0, 7),
    time: "09:00 - 10:30",
    title: "Seminar A",
    location: "Ruang Meeting 1",
    price: "Rp. 1.000.000",
  },
  {
    date: new Date(2025, 0, 12),
    time: "13:00 - 14:00",
    title: "Seminar B",
    location: "Online - Zoom",
    price: "Rp. 200.000",
  },
  {
    date: new Date(2025, 0, 30),
    time: "15:00 - 16:00",
    title: "Seminar C",
    location: "Ruang Conference",
    price: "Rp. 0",
  },
];
export default function Homepage() {
  return (
    <>
      <>
        <section id="jumbotron" className="mt-12">
          {/* <Image
            src={"/assets/header/Webslider.webp"}
            alt="poster"
            width={1000}
            height={100}
            className="background"
            /> */}
          <CarouselPlugin />
          <section className="text-center px-20 my-14">
            <h1 className="color-navy font-bold text-[36px]">
              <span className="text-[#f7b500]">Sertifikasi</span> Universitas
              Internasional Batam
            </h1>
            <p>
              Universitas dengan standar mutu internasional yang menghasilkan
              lulusan, ilmu pengetahuan, teknologi dan seni yang mampu memenuhi
              perubahan dinamika global.
            </p>
          </section>
        </section>
        <section
          id="benefit"
          className="flex justify-around px-16 gap-16 my-16"
        >
          <div className="flex flex-col text-center items-center gap-2">
            <div className="bg-[#113963] rounded-full p-4">
              <BriefcaseBusinessIcon
                color="#FFFFFF"
                className="w-[40px] h-[40px]"
              />
            </div>
            <h1 className="font-bold">Peningkatan Karier dan Peluang Kerja</h1>
            <p>
              Meningkatkan kredibilitas di mata perusahaan dan peluang kerja
              lebih baik.
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-2">
            <div className="span bg-[#113963] rounded-full p-4">
              <GraduationCap color="#FFFFFF" className="w-[40px] h-[40px]" />
            </div>
            <h1 className="font-bold">Pengembangan Keterampilan</h1>
            <p>Mempelajari keterampilan terbaru sesuai dengan tren industri.</p>
          </div>
          <div className="flex flex-col text-center items-center gap-2">
            <div className="span bg-[#113963] rounded-full p-4">
              <Award color="#FFFFFF" className="w-[40px] h-[40px]" />
            </div>
            <h1 className="font-bold">
              Sertifikasi Berstandar Nasional/Internasional
            </h1>
            <p>
              Sertifikat resmi yang diakui secara nasional maupun internasional.
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-2">
            <div className="span bg-[#113963] rounded-full p-4">
              <Users color="#FFFFFF" className="w-[40px] h-[40px]" />
            </div>
            <h1 className="font-bold">Jaringan Profesional yang Lebih Luas</h1>
            <p>
              Membangun koneksi dengan para profesional, praktisi, dan peserta
              lainnya.
            </p>
          </div>
        </section>
        <section className="pt-5 pb-10 batik-bg">
          <h1 className="font-bold text-[32px] text-center">
            Jadwal Sertifikasi dan{" "}
            <span className="text-[#f7b500]">Seminar</span>
          </h1>
          <div className="mb-8">
            <h2 className="ps-12 pt-5 text-[24px] font-semibold">
              Sertifikasi
            </h2>
            <div className="flex ps-8 gap-8">
              <Calendar highlightedDates={highlightedDateSertif} />
              <ScheduleTable schedules={scheduleSertif} />
            </div>
          </div>
          <div>
            <h2 className="ps-12 pt-5 text-[24px] font-semibold">Seminar</h2>
            <div className="flex ps-8 gap-8">
              <Calendar highlightedDates={highlightedDateSeminar} />
              <ScheduleTableSeminar schedules={scheduleSeminar} />
            </div>
          </div>
        </section>
        <h1 className="color-navy font-bold text-[36px] text-center mt-5">
          Testimoni Dari <span className="text-[#f7b500]">Pengguna</span>
        </h1>
        <Testimoni />
        <Footer />
      </>
    </>
  );
}
