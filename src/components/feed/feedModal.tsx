"use client";

import { PhotoData } from "@/actions/photoGet";
import PhotoContent from "../photo/photoContent";
import styles from "./feedModal.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes("foto")) {
    return null;
  }

  function handleOutsideClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      router.back();
    }
  }

  return (
    <div onClick={handleOutsideClick} className={styles.modal}>
      <PhotoContent data={photo} single={false} />
    </div>
  );
}
