import Link from "next/link";
import { css } from "../../../styled-system/css";
import { Box, Center } from "../../../styled-system/jsx";
import Layout from "../components/Layout";
import Regist02 from "../components/Regist02";
import Form01 from "../components/Reg_Form01";

export default function Reg_form01() {
  return (
    <div>
      <Regist02></Regist02>
      <Form01></Form01>
    </div>
  );
}
