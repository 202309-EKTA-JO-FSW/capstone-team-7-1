import Image from "next/image";
import { Inter } from "next/font/google";
import useAuthStore from "@/Store/authStore";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const logout = useAuthStore((state) => state.logout)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
{  isAuthenticated ? <button onClick={logout}>logout</button> : null}   
 </main>
  );
}
