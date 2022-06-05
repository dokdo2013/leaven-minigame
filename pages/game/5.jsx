import Head from "next/head";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Game() {
  const defaultClass = "text-2xl my-2 mx-auto block btn btn-block max-w-xl";
  let [q, setQ] = useState("0");
  useEffect(() => {
    setQ(localStorage.getItem("q5"));
  }, []);

  const save = (number) => {
    setQ(number);
    localStorage.setItem("q5", number);
    Router.push("/calculating");
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
            <li className="step step-primary"></li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <p className="text-4xl font-bold">
            어색한 친구가 술자리에서 19금드립을 쳤을 때 나의 반응은?
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
              같이 19금 드립을 치며 찐친이 된다.
            </button>
            <button
              className={
                q === "2" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("2");
              }}
            >
              받아쳐주고는 싶지만 어색해서 같이 웃기만 해준다.
            </button>
            <button
              className={
                q === "3" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("3");
              }}
            >
              정색하다가 옆에 친구가 웃으면 같이 웃어준다.
            </button>
            <button
              className={
                q === "4" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("4");
              }}
            >
              애초에 어색한 친구가 있는 술자리에 안 갔다.
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
