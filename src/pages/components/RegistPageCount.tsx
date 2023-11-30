import { css } from "../../../styled-system/css";
// import { color } from "../theme/colorTheme";
import { Box, Center, Circle, Flex } from "../../../styled-system/jsx";
import Link from "next/link";
import { link } from "fs";

export default function PageMoveBar() {
  return (
    <div
      className={css({
        w: "100vw",
        mb: "40px",
      })}
    >
      <div
        className={css({
          w: "250px",
          m: "0 auto",
        })}
      >
        <Flex
          className={css({
            m: "115px  auto 0 ",
            justifyContent: "space-around",
            gap: "-0.5",
            alignItems: "center",
            position: "relative",
          })}
        >
          <Circle
            className={css({
              w: "20px",
              h: "20px",
              bg: "#63A6F7",
            })}
          ></Circle>
          <Circle
            className={css({
              w: "20px",
              h: "20px",
              bg: "#63A6F7",
            })}
          ></Circle>
          <Circle
            className={css({
              w: "20px",
              h: "20px",
              bg: "#63A6F7",
            })}
          ></Circle>
        </Flex>
      </div>
    </div>
  );
}
