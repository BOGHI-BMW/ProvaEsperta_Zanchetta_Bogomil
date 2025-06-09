"use client";
import Navbar from "@/components/Navbar"
import Escursione2 from "@/components/Card";
import Footer from "@/components/Footer";
import LoginForm from "@/components/Extranet";
import Extranet from "@/components/Extranet";

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
      <Escursione2
          titolo="Presentazione"
          descrizione="La nostra prima tappa, Murano, scopri perché l'isola è rinomata per le sue vetrerie con una visita a una fabbrica di vetro locale. Guarda un abile artigiano durante una dimostrazione della lavorazione del vetro. Successivamente, avrai circa un'ora sull'isola per fare shopping in uno dei tanti negozi di vetro."
          disponibilita="1 aprile 2024"
          immagine="/images/immagine1.jpg"
        />
        <Footer />
    </>
  );
}