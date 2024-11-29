import ExportedImage from "next-image-export-optimizer";
import image from "../../public/images/2.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <ExportedImage
        src={image}
        alt="Background image"
        className="z-0 blur-sm"
        fill={true}
        style={{
          objectFit: "cover",
        }}
      />
      <section className="z-10 flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col m-auto items-center bg-slate-900/70 rounded-tl-3xl rounded-br-3xl p-10 text-white text-center">
          <h1 className="text-gold text-4xl font-bold mt-10">Jianan &amp; Jacob</h1>
          <h2 className="text-gold text-2xl font-bold mb-10">
            Married on 16th November 2024.
          </h2>

          <p className="max-w-[900px] text-lg lg:text-xl">
            Our wedding day has passed, but the memories will last a lifetime.
            Thank you to everyone who shared in our special moment and
            celebrated our love.
          </p>
          <Link
            href="/archive"
            className="m-10 text-lg lg:text-xl bg-burgundy rounded-xl p-5 text-white font-extrabold hover:bg-burgundy/80 hover:text-gold transition-colors duration-300">
            View Wedding Archive
          </Link>
        </div>
      </section>
    </main>
  );
}
