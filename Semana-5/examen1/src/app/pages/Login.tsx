import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (usuario === "admin" && clave === "admin123") {
      router.push("/dashboard");
    } else {
      alert("usuario o password incorrectas");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Login</h1>
      <input
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      ></input>
      <input
        placeholder="Password"
        type="password"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
      ></input>
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}
