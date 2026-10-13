import cora from "../assets/cora.png";
import comentariosIcon from "../assets/comentarios.png";
import enviar from "../assets/enviar.png";

function Card({
  usuario = "usuario",
  avatar = "",
  imagen = "",
  descripcion = "Descripción de la publicación",
  likes = 0,
  comentarios = 0,
  tiempo = "Hace 1 hora",
}) {
  return (
    <article className="w-full max-w-md overflow-hidden rounded-lg border border-gray-300 bg-white text-left">
      <header className="flex items-center justify-start gap-3 px-3 py-2.5">
        <img
          src={avatar}
          alt={usuario}
          className="h-9 w-9 shrink-0 rounded-full object-cover"
        />
        <span className="text-sm font-semibold">{usuario}</span>
        <button
          aria-label="Más opciones"
          className="ml-auto text-sm text-gray-800 hover:text-gray-500"
        >
          •••
        </button>
      </header>

      <img
        src={imagen}
        alt={descripcion}
        className="aspect-square w-full object-cover"
      />
      <div className="flex items-center justify-start gap-5 px-3.5 pt-3">
        <div className="flex items-center gap-2">
          <img src={cora} alt="Me gusta" className="h-6 w-6" />
          <span className="text-sm font-semibold">{likes}</span>
        </div>

        <div className="flex items-center gap-2">
          <img src={comentariosIcon} alt="Comentarios" className="h-6 w-6" />
          <span className="text-sm font-semibold">{comentarios}</span>
        </div>

        <img src={enviar} alt="Compartir" className="h-6 w-6" />
      </div>

      <div className="space-y-1 px-3.5 pb-4 pt-3 text-left text-sm">
        <p>
          <span className="font-semibold">{usuario}</span> {descripcion}
        </p>
        <p className="text-[11px] uppercase text-gray-500">{tiempo}</p>
      </div>
    </article>
  );
}

export default Card;