import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="flex items-center gap-2">
        <PersonStandingIcon size={50} className="text-blue-500" /> CodiElectro
      </h1>
      <p>
        El lugar donde puedes aprender sobre electricidad, electrónica y
        programación.
      </p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href={"/iniciar-sesion"}>Iniciar sesión</Link>
        </Button>
        <small>ó</small>
        <Button variant={"outline"} asChild>
          <Link href={"/registrarse"}>Registrarse</Link>
        </Button>
      </div>
    </div>
  );
}
