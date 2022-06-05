import Head from "next/head";
import Router from "next/router";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const init = () => {
    localStorage.setItem("q1", "0");
    localStorage.setItem("q2", "0");
    localStorage.setItem("q3", "0");
    localStorage.setItem("q4", "0");
    localStorage.setItem("q5", "0");

    Router.push("/game/1");
  };

  return (
    <div>
      <Head>
        <title>나와 가장 잘 맞는 레븐 멤버는?</title>
        <meta name="description" content="Leaven Minigame Season 1" />
        <link rel="icon" href="https://multi.leaven.team/leaven.png" />
      </Head>

      <main className="p-0">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <p className="text-3xl">LEAVEN MINIGAME</p>
              <h1 className="text-6xl font-bold mb-6">
                나와 가장 잘 맞는 레븐 멤버는?
              </h1>
              <button className="btn btn-primary text-2xl" onClick={init}>
                시작하기
              </button>
              <p className="mt-10 text-lg">
                문항별 점수 구성은 실제와는 다를 수 있음을 미리 알립니다. <br />
                오로지 재미로만 즐겨주세요!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
