import LoginResetarForm from "@/components/login/loginResetarForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha.",
};

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({
  searchParams,
}: ResetarSearchParams) {
  console.log(searchParams);
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetarForm keyToken={searchParams.key} login={searchParams.login}/>
    </div>
  );
}
