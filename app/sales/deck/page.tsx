import type { Metadata } from "next";
import { Deck } from "@/components/Deck";

export const metadata: Metadata = {
  title: "Ecosystem deck",
  description: "TableWorx sales presentation.",
  robots: { index: false, follow: false },
};

export default function DeckPage() {
  return <Deck />;
}
