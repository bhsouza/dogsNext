"use client";

import React from "react";
import FeedIcon from "@/icons/feedIcon";
import EstatisticasIcon from "@/icons/estatisticasIcon";
import AdicionarIcon from "@/icons/adicionarIcon";
import SairIcon from "@/icons/sairIcon";
import styles from "./contaHeader.module.css";
import useMedia from "@/hooks/useMedia";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logout from "@/actions/logout";
import { useUser } from "@/context/userContext";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/estatisticas":
      return "Estatísticas";
    case "/conta/postar":
      return "Poste Sua Foto";
    default:
      return "Minha Conta";
  }
}

export default function ContaHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const {setUser} = useUser();

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <FeedIcon />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link href="/conta/estatisticas" className={pathname === "/conta/estatisticas" ? "active" : ""}>
          <EstatisticasIcon />
          {mobile && "Estatísticas"}
        </Link>
        <Link href="/conta/postar" className={pathname === "/conta/postar" ? "active" : ""}>
          <AdicionarIcon />
          {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
