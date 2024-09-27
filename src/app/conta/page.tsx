import photosGet from "@/actions/photosGet";
import userGet from "@/actions/userGet";
import Feed from "@/components/feed/feed";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minha Conta | Dogs",
};

export default async function ContaPage() {
  const { data: user } = await userGet();
  const { data } = await photosGet({ user: user?.username });
  return (
    <section>
      {data?.length ? (
        <Feed photos={data} user={user?.username} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "2rem", marginBottom: "1.6rem" }}
          >
            Nenhuma foto encontrada
          </p>
          <Link href={"/conta/postar"} className="button" style={{display: "inline-block"}}>
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
}
