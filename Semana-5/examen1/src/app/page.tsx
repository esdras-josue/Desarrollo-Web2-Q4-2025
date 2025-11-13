"use client";
import { GastoProvider } from "../app/context/GastoContext";
import Dashboard from "./pages/Dashboard";


export default function Home() {
  return (
    <GastoProvider>
      <Dashboard />
    </GastoProvider>
  );
}
