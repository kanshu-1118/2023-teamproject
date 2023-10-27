import Link from "next/link";
import { css } from "../../../styled-system/css";
import { Box, Center } from "../../../styled-system/jsx";
import Layout from "../components/Layout";
import NewRegist from "../components/NewRegist";

export default function Register() {
  return (
    <>
      <div>
        <NewRegist text={"新規登録"} />
      </div>
    </>
  );
}
