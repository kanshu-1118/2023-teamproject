import Link from "next/link";
import { css } from "../../../styled-system/css";
import { Box, Center, Circle, Flex } from "../../../styled-system/jsx";

export default function MyrootRegister() {
  return (
    <>
      <div>
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
              <line
                className={css({
                  position: "absolute",
                  m: "0 auto",
                  p: " 0 80px ",
                  h: "3px",
                  bg: "#B9DDFF",
                  zIndex: "11",
                })}
              ></line>

              <Circle
                className={css({
                  w: "20px",
                  h: "20px",
                  bg: "#B9DDFF",
                })}
              ></Circle>
              <Circle
                className={css({
                  w: "20px",
                  h: "20px",
                  bg: "#B9DDFF",
                })}
              ></Circle>
              <Circle
                className={css({
                  w: "50px",
                  h: "50px",
                  bg: "#63a6f7",
                  zIndex: "100",
                })}
              ></Circle>
            </Flex>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}
