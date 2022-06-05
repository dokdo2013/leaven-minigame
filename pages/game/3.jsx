import Head from "next/head";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Game() {
  const defaultClass = "text-2xl my-2 mx-auto block btn btn-block max-w-xl";
  let [q, setQ] = useState("0");
  useEffect(() => {
    setQ(localStorage.getItem("q3"));
  }, []);

  const save = (number) => {
    setQ(number);
    localStorage.setItem("q3", number);
    Router.push("/game/4");
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
            <li className="step"></li>
            <li className="step"></li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <p className="text-4xl font-bold">
            팀운이 안 좋아서 게임을 3연패했다. 이 때 내가 할 행동은?
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
              &apos;내가 이기나 너가 이기나 보자&apos;하면서 이길 때까지 한다.
            </button>
            <button
              className={
                q === "2" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("2");
              }}
            >
              화가 나서 눈물을 훔치며 조용히 침대에 들어가 유튜브를 켠다.
            </button>
            <button
              className={
                q === "3" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("3");
              }}
            >
              욕하면서 다 신고 누르고 나만의 힐링 컨텐츠를 즐기러 간다.
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
