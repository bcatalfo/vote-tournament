import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vote Tournament" },
    { name: "description", content: "Make your next decision democratically with Vote Tournament." },
  ];
}

export default function Home() {
  return <Welcome />;
}
