"use server";

import { COMMENT_POST } from "@/functions/api";
import apiError from "@/functions/apiError";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { Comment } from "./photoGet";

export default async function commentPost(state: {}, formData: FormData) {
  const token = cookies().get("token")?.value;
  const comment = formData.get("comment") as string | null;
  const id = formData.get("id") as string | null;
  try {
    if (!token || !id || !comment) throw new Error("Insira um comentário.");
    const { url } = COMMENT_POST(id);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
    if (!response.ok) throw new Error("Erro ao enviar o comentário.");
    const data = await response.json() as Comment;
    revalidateTag("comment");
    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
