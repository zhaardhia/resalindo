import LayoutPage from "@/components/layout";
import TimelineSection from "@/components/pages/project/timeline-project";
import Link from "next/link";
export default function OurWorks() {
  const works = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: "Lorem Ipsum Dolor",
    date: `Jakarta, 202${1 + (i % 4)}`,
    tag: i % 2 === 0 ? "Build" : "Design",
  }));

  return (
    <LayoutPage>
      <div className="min-h-screen px-5 md:px-16 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold">Our Works</h2>
            <div className="text-left flex gap-4">
              <div>
                <div className="text-sm text-gray-500">Lorem Ipsum</div>
                <p className="text-4xl font-semibold">50+</p>
              </div>
              <div>
                <div className="text-sm text-gray-500">Lorem Ipsum</div>
                <p className="text-4xl font-semibold">50+</p>
              </div>
              <div>
                <div className="text-sm text-gray-500">Lorem Ipsum</div>
                <p className="text-4xl font-semibold">50+</p>
              </div>
              {/* <div className="text-sm text-gray-500">Lorem Ipsum</div>
              <div className="text-sm text-gray-500">Lorem Ipsum</div>
              <div className="text-3xl font-bold">50+ 50+ 50+</div> */}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {works.map((work) => (
              <Link href={'/projects/xxx'}>
                <div
                  key={work.id}
                  className="bg-gray-300 w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md"
                >
                  {/* <div className="bg-gray-300 h-48 w-full" /> */}
                  
                </div>
                <div className="p-2 flex justify-between">
                  <div>
                    <h3 className="text-md font-semibold">{work.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{work.date}</p>
                  </div>
                  <span className="flex justify-center items-center bg-gray-800 text-white text-xs font-medium w-[5rem] py-2 rounded-full h-fit">
                    {work.tag}
                  </span>
                </div>
              </Link>
              
            ))}
          </div>
        </div>
        <TimelineSection />
      </div>
    </LayoutPage>
  );
}
