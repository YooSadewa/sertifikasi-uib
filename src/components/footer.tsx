import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#293854] pt-2 pb-10">
      <Image
        src={"/assets/footer-uib.webp"}
        alt="batik"
        width={1250}
        height={100}
        className="mx-auto mb-8"
      />
      <div className="flex gap-5 px-10 justify-between">
        <div className="flex flex-col">
          <Image
            src={"/assets/logowhite.png"}
            alt="logo-footer"
            width={300}
            height={100}
          />
          <p className="w-[300px] text-white text-[16px] mt-2">
            Baloi-Sei Ladi, Jl. Gajah Mada, Tiban Indah, Kec. Sekupang, Kota
            Batam, Kepulauan Riau 29426
          </p>
          <p className="w-[300px] text-white text-[20px]">(0778) 7437111</p>
          <div className="flex justify-between mt-5">
            <Link href={""}>
              <Image
                src={"/assets/icons/facebook.png"}
                alt="facebook"
                width={50}
                height={20}
              />
            </Link>
            <Link href={""}>
              <Image
                src={"/assets/icons/twitter.png"}
                alt="facebook"
                width={50}
                height={20}
              />
            </Link>
            <Link href={""}>
              <Image
                src={"/assets/icons/instagram.png"}
                alt="facebook"
                width={50}
                height={20}
                className="bg-white rounded-full"
              />
            </Link>
            <Link href={""}>
              <Image
                src={"/assets/icons/youtube.png"}
                alt="facebook"
                width={50}
                height={20}
              />
            </Link>
            <Link href={""}>
              <Image
                src={"/assets/icons/tiktok.png"}
                alt="facebook"
                width={50}
                height={20}
                className="bg-white rounded-full"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#f7b500] font-bold text-[24px] mb-5">
            Informasi Tentang
          </h1>
          <ul className="text-[#f7b500] font-semibold ps-3 flex flex-col gap-1">
            <li>Kehidupan Kampus</li>
            <li>Kemahasiswaan</li>
            <li>Kemitraan</li>
            <li>Unduh Dokumen</li>
            <li>SDG's</li>
            <li>Perpustakaan</li>
            <li>Penjaminan Mutu Internal</li>
            <li>Pusat Pengembangan Akademik</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#f7b500] font-bold text-[24px] mb-5">
            Telusuri
          </h1>
          <ul className="text-[#f7b500] font-semibold ps-3 flex flex-col gap-1">
            <li>Darmasiswa RI</li>
            <li>IISMA</li>
            <li>LPDP</li>
            <li>PMM</li>
          </ul>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.056687477547!2d104.00046797434754!3d1.1195430988697368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98be09646b351%3A0x36a826082690c786!2sUniversitas%20Internasional%20Batam!5e0!3m2!1sid!2sid!4v1736751357894!5m2!1sid!2sid"
            width="350"
            height="250"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
