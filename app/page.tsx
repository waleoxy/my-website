import Hero from "@/components/Hero";
import { Approach } from "@/components/approach";
import Clients from "@/components/clients";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import RecentProjects from "@/components/recent-projects";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
