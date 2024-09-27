import ContaPhotoPost from "@/components/conta/contaPhotoPost";
import { Metadata } from "next";

// export const runtime = "edge"; Caso no node esteja ficando enviando infinito

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
};

export default async function PostarPage() {
  return (
    <ContaPhotoPost />
  );
}
