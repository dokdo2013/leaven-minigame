import Head from "next/head";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Game() {
  const defaultClass = "text-2xl my-2 mx-auto block btn btn-block max-w-xl";
  let [q, setQ] = useState("0");
  useEffect(() => {
    setQ(localStorage.getItem("q2"));
  }, []);

  const save = (number) => {
    setQ(number);
    localStorage.setItem("q2", number);
    Router.push("/game/3");
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
            <li className="step"></li>
            <li className="step"></li>
            <li className="step"></li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <p className="text-4xl font-bold">
            다같이 바닷가에 놀러갔는데 가려고 했던 횟집이 있는지 찾아본다.
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
              지도앱을 켜서 근처에 다른 횟집이 있는지 찾아본다.
            </button>
            <button
              className={
                q === "2" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("2");
              }}
            >
              인스타나 네이버에서 근처에 다른 맛집이 있는지 찾아본다.
            </button>
            <button
              className={
                q === "3" ? defaultClass + " btn-primary" : defaultClass
              }
              onClick={() => {
                save("3");
              }}
            >
              오히려 잘됐다면서 옆에 있는지 고깃집에 가자고 한다.
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
