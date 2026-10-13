import { useState } from 'react'
import Card from "./components/Card";
import casa from "./assets/casa.png";
import lupa from "./assets/lupa-negro.png";
import usuario from "./assets/usuario-negro.png";
import perfil from "./assets/foto-perfil.jpg";
import post2 from "./assets/post2.jpg";
import post from "./assets/post.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <nav className=" top-0 z-10 flex h-14 items-center justify-between  bg-pink-100 px-6">
  <h1 className="text-base font-bold text-black!">InstaChafa</h1>
  <ul className="flex items-center gap-6">
    <li>
      <a href="#" aria-label="Inicio">
        <img
          src={casa}
          alt="Inicio"
          className="h-6 w-6 transition-transform hover:scale-110"
        />
      </a>
    </li>
    <li>
      <a href="#" aria-label="Explorar">
        <img
          src={lupa}
          alt="Explorar"
          className="h-6 w-6 transition-transform hover:scale-110"
        />
      </a>
    </li>
    <li>
      <a href="#" aria-label="Perfil">
        <img
          src={usuario}
          alt="Perfil"
          className="h-6 w-6 transition-transform hover:scale-110"
        />
      </a>
    </li>
  </ul>
</nav>

      <main className="flex flex-col items-center gap-6 px-3 py-6">
        <Card
          usuario="pauux_c"
          avatar={perfil}
          imagen={post}
          descripcion="Venecia, Italia 🇮🇹"
          likes={124}
          comentarios={12}
          tiempo="Hace 2 horas"
        />

        <Card
          usuario="pauux_c"
          avatar={perfil}
          imagen={post2}
          descripcion="Paris, Francia 🇫🇷"
          likes={87}
          comentarios={5}
          tiempo="Hace 5 horas"
        />
      </main>
    </div>
  );
}

export default App;