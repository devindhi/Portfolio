import Image from "next/image";
import { Button } from '@chakra-ui/react'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-black" style={{ padding: '2.5rem'}}  >
      <Navbar/>
      <div className="container mx-auto px-12 py-4">
      <Hero/>
      </div>
    </main>
  );
}
