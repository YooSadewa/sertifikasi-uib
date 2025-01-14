import Image from "next/image";
import ContactBar from "./contact";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <ContactBar />
      <div className="sticky -top-[.5px] bg-white py-1 z-10">
        <div className="flex justify-between">
          <Link href={"https://www.uib.ac.id/"} className="flex px-5 py-3">
            <Image
              src={"/assets/logouib.png"}
              alt="logo-uib"
              width={110}
              height={100}
              className="h-fit"
            />
          </Link>
          <div className="flex items-center font-bold pe-28 text-sm gap-10">
            <div className="flex gap-6">
              <Link href={"https://www.uib.ac.id/"}>Beranda</Link>
              <Link href={"https://www.uib.ac.id/"}>Tentang UIB</Link>
              <Link href={"#"}>Sertifikasi</Link>
              <Link href={"#"}>Seminar</Link>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="font-bold btn bg-white px-6 border-[#113963] hover:bg-[#113963] hover:text-white">
                Login
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-md z-[1] w-60 p-2 shadow"
              >
                <li>
                  <Link href={"#"}>Login Sebagai Mahasiswa</Link>
                </li>
                <li>
                  <Link href={"#"}>Login Sebagai Dosen</Link>
                </li>
                <li>
                  <Link href={"#"}>Login Sebagai Umum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
