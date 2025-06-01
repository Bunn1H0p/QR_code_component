import Image from 'next/image';
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-4 rounded-2xl shadow-lg max-w-xs text-center">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/image-qr-code.png"
            alt="QR code linking to Frontend Mentor"
            width={576} // or adjust based on actual size
            height={576}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="mt-4 px-2">
          <h1 className="text-xl font-bold text-black">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-sm text-black mt-2 mb-2">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
