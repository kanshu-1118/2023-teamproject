import Head from "next/head";
import { css } from "../../../styled-system/css";
// import { color } from "../theme/colorTheme";
import { navArray } from "../libs/nav";
import { Box, Center, Flex } from "../../../styled-system/jsx";
import Link from "next/link";
import { link } from "fs";

export default function Regist02() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={css({
          bg: "main",
          position: "fixed",
          top: "0",
          w: "100vw",
          h: "72px",
        })}
      ></header>
    </div>
  );
}
