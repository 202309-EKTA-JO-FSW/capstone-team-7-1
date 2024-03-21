import Image from "next/image";
import { Inter } from "next/font/google";
import useAuthStore from "@/Store/authStore";//add


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const logout = useAuthStore((state) => state.logout) //add
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated) //add

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     
     {  isAuthenticated ? <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={logout}>logout</button> : null}
 </main>
  );
}
