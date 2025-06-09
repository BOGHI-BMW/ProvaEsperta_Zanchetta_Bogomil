"use client";
import Navbar from "@/components/Navbar"

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
      <Navbar
        lingue={lingue}
        emailProfessionale={emailProfessionale}
        telefonoProfessionale={telefonoProfessionale}
        emailEscursioni={emailEscursioni}
        telefonoEscursioni={telefonoEscursioni}
        logoSrc={logoSrc}
        vociMenu={vociMenu}
      />
      
    </>
  );
}