import Image from "next/image";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-80">
      <h1 className="mb-4">Ilmuan yang luar biasa</h1>
      <div className="flex space-x-4">
        <Gallery />
        <Gallery />
        <Gallery />
      </div>
    </main>
  );
}
