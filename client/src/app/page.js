import Test from "./components/Test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-16">
      <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex ">
        <Test />
      </div>
    </main>
  );
}
