import Navbar from "../components/Navbar";
import FullScreenNav from "../components/FullScreenNav";

const Home = () => {
  return (
    <>
      <Navbar />
      <FullScreenNav />

      <main className="min-h-screen bg-primary text-white">
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <button className="rounded-md bg-white px-8 py-4 font-semibold text-primary transition hover:bg-white/90">
                  Get Started
                </button>

                <button className="rounded-md border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative mx-auto mt-16 max-w-5xl">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-sm">
                <div className="flex aspect-[16/9] items-center justify-center bg-white/5">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white/20" />
                    <p className="text-lg font-medium text-white/80">
                      Hero image placeholder
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
