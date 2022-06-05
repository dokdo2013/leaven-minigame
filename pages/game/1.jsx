import Head from "next/head";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Game() {
  const defaultClass =
    "text-2xl my-2 mx-auto block btn btn-block max-w-xl h-20";
  let [q, setQ] = useState("0");
  useEffect(() => {
    setQ(localStorage.getItem("q1"));
  }, []);

  const save = (number) => {
    setQ(number);
    localStorage.setItem("q1", number);
    Router.push("/game/2");
  };

  return (
    <div>
      <Head>
        <title>나와 가장 잘 맞는 레븐 멤버는?</title>
        <meta name="description" content="Leaven Minigame Season 1" />
        <link rel="icon" href="https://multi.leaven.team/leaven.png" />
      </Head>

      <main>
        <div className="text-center my-5">
          <ul className="steps text-2xl">
            <li className="step step-primary"></li>
            <li className="step"></li>
            <li className="step"></li>
            <li className="step"></li>
            <li className="step"></li>
          </ul>
        </div>
        <div className="text-center mt-10">
          <p className="text-4xl font-bold">
            식당에 갔는데 점원이 주문을 받으러 안 온다. 이 때 내가 할 행동은?
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
              크게 &quot;사장님!!&quot; 소리를 질러 점원을 부른다.
            </button>
            <button
              className={
                q === "2" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("2");
              }}
            >
              벨이 있는지 찾아보고 직접 벨을 누르고 기다린다.
            </button>
            <button
              className={
                q === "3" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("3");
              }}
            >
              &apos;친구가 불러주겠지&apos;하고 기다린다.
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
