import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gradient-to-l from-[#13fd13] to-[#52f75f] grid grid-cols-4 justify-between">
        <Link href="#">
          <button className="justify-center min-w-full h-full p-4 hover:bg-[#ffff]">Sholat</button>
        </Link>
        <Link href="#">
          <button className="justify-center w-full h-full p-4 hover:bg-[#ffff]">Quran</button>
        </Link>
        <Link href="#">
          <button className="justify-center min-w-full h-full p-4 hover:bg-[#ffff]">Berita</button>
        </Link>
        <Link href="#">
          <button className="justify-center min-w-full h-full p-4 hover:bg-[#ffff]">Kalender</button>
        </Link>
    </div>
  );
};
export default Footer;
