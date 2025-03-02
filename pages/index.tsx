import { useState, useEffect } from "react";

const chapters = [
  { id: "bab1", title: "BAB 1 - Pendahuluan" },
  { id: "bab2", title: "BAB 2 - Landasan Teori" },
  { id: "bab3", title: "BAB 3 - Metodologi" },
  { id: "bab4", title: "BAB 4 - Hasil dan Pembahasan" },
  { id: "bab5", title: "BAB 5 - Kesimpulan" },
];

export default function SkripsiOnline() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let currentChapter = chapters[0].id;
      for (let chapter of chapters) {
        const element = document.getElementById(chapter.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentChapter = chapter.id;
          }
        }
      }
      setActiveChapter(currentChapter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-blue-600 text-white p-4 text-center text-lg font-bold z-50">
        Skripsi Online
      </nav>

      {/* Sticky Heading */}
      <div className="sticky top-14 bg-white shadow-md p-2 text-center font-semibold text-lg z-40 border-b">
        {chapters.find((c) => c.id === activeChapter)?.title}
      </div>

      {/* Konten Skripsi */}
      <div className="max-w-3xl mx-auto mt-24 p-4 space-y-20">
        {chapters.map((chapter) => (
          <div key={chapter.id} id={chapter.id} className="min-h-screen">
            <h2 className="text-2xl font-bold mb-4">{chapter.title}</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              {/* Tambahkan lebih banyak teks agar halaman panjang */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
