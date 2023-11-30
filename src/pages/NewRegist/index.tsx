import Link from "next/link";
import { css } from "../../../styled-system/css";
import { Box, Center, Flex } from "../../../styled-system/jsx";
import Layout from "../components/Layout";
import BtnStyle from "../components/BtnStyle";
import { useState } from "react";

export default function StartApp() {
  return (
    <>
      <div>
        <BtnStyle href="NewRegist/RegistForm" text="はじめる"></BtnStyle>

        {/* <Flex
          className={css({
            justifyContent: "center",
          })}
        >
          <p
            className={css({
              textAlign: "center",
              color: "#FAFCFF",
              fontWeight: "bold",
              bg: "#63A6F7",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              p: "8px 76px ",
              w: "fit-content",
              borderRadius: "10px",
              //positionで浮かして固定してる
              position: "fixed",
              bottom: "104px",
            })}
          >
            <button>
              <Link href="NewRegist/RegistForm">はじめる</Link>
            </button>
          </p>
        </Flex> */}
      </div>
    </>
  );
}
