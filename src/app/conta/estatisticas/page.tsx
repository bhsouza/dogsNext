import statsGet from "@/actions/statsGet";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContaEstatisticas = dynamic(() => import("@/components/conta/contaEstatisticas"), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

export const metadata: Metadata = {
  title: "Estatísticas | Minha Conta",
};

export default async function EstatisticasPage() {
  const { data } = await statsGet();
  if (!data) return null;
  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}
