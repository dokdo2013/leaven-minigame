import Head from "next/head";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Game() {
  const defaultClass = "text-2xl my-2 mx-auto block btn btn-block max-w-xl";
  let [q, setQ] = useState("0");
  useEffect(() => {
    setQ(localStorage.getItem("q4"));
  }, []);

  const save = (number) => {
    setQ(number);
    localStorage.setItem("q4", number);
    Router.push("/game/5");
  };

  return (
    <div>
      <Head>
        <title>나와 맞는 레븐 멤버는?</title>
        <meta name="description" content="Leaven Minigame Season 1" />
        <link rel="icon" href="https://multi.leaven.team/leaven.png" />
      </Head>

      <main>
        <div className="text-center my-5">
          <ul className="steps text-2xl">
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            <li className="step"></li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <p className="text-4xl font-bold">
            친구가 귓속말로 "야 ㅋㅋ 저기 니 남친 지나간다 ㅋㅋ"라고 놀렸는데
            마침 진짜 남자친구였을 때 내가 할 행동은?
          </p>
          <div className="mt-12">
            <button
              className={
                q === "1" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("1");
              }}
            >
              박장대소하면서 남자친구를 불러서 친구가 뭐라고 했는지 이른다.
            </button>
            <button
              className={
                q === "2" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("2");
              }}
            >
              조용히 진실의 방으로 불러 참교육을 시전한다.
            </button>
            <button
              className={
                q === "3" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("3");
              }}
            >
              정색하면서 "남자친구 맞는데? 왜?" 라고 한다.
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
