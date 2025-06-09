"use client";
import Navbar from "@/components/Navbar"
import Escursione2 from "@/components/Card";
import Footer from "@/components/Footer";
import LoginForm from "@/components/Extranet";
import Extranet from "@/components/Extranet";
import Intranet from "@/components/Intranet";
import VisionMission from "@/components/VISION_MISSION";
import AlboPretorio from "@/components/albo";

export default function Home() {
  const lingue = ["IT /", "EN /", "DE /", "FR /", "ES"];
  const emailProfessionale = "info@dogedivenezia.it";
  const telefonoProfessionale = "+39 041 530 23 63";
  const emailEscursioni = "api@dogedivenezia.it";
  const telefonoEscursioni = "+39 041 315 63 02";
  const logoSrc =
    "https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75";
  const vociMenu = [
    { nome: "Home Page", href: "#", attivo: true },
    { nome: "Escursioni Giornaliere", href: "#" },
    { nome: "Servizi Professionali", href: "#" },
    { nome: "Chi Siamo", href: "#" },
    { nome: "La Flotta", href: "#" },
    { nome: "News", href: "#" },
  ];
  return (
    <>
        <AlboPretorio />
    </>
  );
}
