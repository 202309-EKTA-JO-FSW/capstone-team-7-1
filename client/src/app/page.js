import LandingPage from "./Pages/LandingPage/FullLandingPage";
import Test from "./components/Test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <div className="z-10 max-w-5xl font-serif w-full items-center justify-between text-sm lg:flex">
        <Test />
      </div>
    </main>
  );
}
