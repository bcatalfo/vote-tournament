import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import MakeTournament from "~/components/make-tournament";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vote Tournament" },
    {
      name: "description",
      content: "Make your next decision democratically with Vote Tournament.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
