import Head from "next/head";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Game() {
  useEffect(() => {
    calculator();
  }, []);

  const calculator = () => {
    // 변수 선언
    let gabi = 0;
    let guna = 0;
    let bead = 0;
    let doran = 0;
    let kbs = 0;
    let adri = 0;
    let yudar = 0;
    let harry = 0;
    let jeeya = 0;
    let podo = 0;
    const q1 = localStorage.getItem("q1");
    const q2 = localStorage.getItem("q2");
    const q3 = localStorage.getItem("q3");
    const q4 = localStorage.getItem("q4");
    const q5 = localStorage.getItem("q5");

    // 계산
    if (q1 === "1") {
      adri++;
      harry++;
      podo++;
      bead++;
      kbs--;
      jeeya--;
    } else if (q1 === "2") {
      guna++;
      yudar++;
      gabi++;
      doran++;
    } else if (q1 === "3") {
      kbs++;
      jeeya++;
    }

    if (q2 === "1") {
      adri++;
      harry++;
      jeeya++;
      yudar++;
      bead--;
      doran--;
      kbs--;
      podo--;
      guna--;
    } else if (q2 === "2") {
      bead++;
      doran++;
      kbs++;
      podo++;
      guna++;
    } else if (q2 === "3") {
      gabi++;
      gabi++;
      bead++;
      doran++;
      kbs++;
      podo++;
      guna++;
      adri--;
      harry--;
      jeeya--;
      yudar--;
    }

    if (q3 === "1") {
      gabi++;
      harry++;
      adri++;
      kbs--;
      yudar--;
    } else if (q3 === "2") {
      kbs++;
      yudar++;
      gabi--;
      harry--;
    } else if (q3 === "3") {
      jeeya++;
      bead++;
      doran++;
      podo++;
      guna++;
    }

    if (q4 === "1") {
      bead++;
      doran++;
      harry++;
      podo++;
      kbs++;
      guna++;
      yudar--;
      gabi--;
    } else if (q4 === "2") {
      adri++;
      jeeya++;
      yudar++;
      gabi++;
      harry++;
      doran++;
      bead--;
      podo--;
      kbs--;
    } else if (q4 === "3") {
      kbs++;
      podo++;
      yudar++;
      gabi++;
      doran--;
      harry--;
      guna--;
    }

    if (q5 === "1") {
      yudar++;
      yudar++;
      harry++;
      harry++;
      podo++;
      bead++;
      doran++;
      adri++;
      guna++;
      gabi--;
      kbs--;
      jeeya--;
      jeeya--;
    } else if (q5 === "2") {
      gabi++;
      guna++;
      podo++;
      bead++;
      doran++;
      adri++;
      kbs++;
      jeeya--;
      yudar--;
      harry--;
    } else if (q5 === "3") {
      gabi++;
      jeeya++;
      doran++;
      kbs++;
      podo--;
      bead--;
      adri--;
      guna--;
      yudar--;
      yudar--;
      harry--;
      harry--;
    } else if (q5 === "4") {
      jeeya++;
      yudar--;
      harry--;
      podo--;
      bead--;
      doran--;
      adri--;
      guna--;
    }

    // 최대값 도출, 최다득점자 조회
    const max = Math.max(
      gabi,
      guna,
      bead,
      doran,
      kbs,
      adri,
      yudar,
      harry,
      jeeya,
      podo
    );
    let count = 0;
    let maxMember = [];
    if (gabi === max) {
      count++;
      maxMember.push("gamjagabee");
    } else if (guna === max) {
      count++;
      maxMember.push("gunaguna");
    } else if (bead === max) {
      count++;
      maxMember.push("beadyo");
    } else if (doran === max) {
      count++;
      maxMember.push("doran");
    } else if (kbs === max) {
      count++;
      maxMember.push("kbs");
    } else if (adri === max) {
      count++;
      maxMember.push("adricham");
    } else if (yudar === max) {
      count++;
      maxMember.push("yudarlinn");
    } else if (harry === max) {
      count++;
      maxMember.push("junharry");
    } else if (jeeya === max) {
      count++;
      maxMember.push("jeeya");
    } else if (podo === max) {
      count++;
      maxMember.push("pododang");
    }
    let random = 0;
    if (count > 1) {
      random = Math.floor(Math.rondom() * count);
    }

    // 결과 도출 및 라우팅
    const member = maxMember[random];
    const url = "/result/" + member;
    setTimeout(() => {
      Router.push(url);
    }, 2000);
  };

  return (
    <div>
      <Head>
        <title>나와 가장 잘 맞는 레븐 멤버는?</title>
        <meta name="description" content="Leaven Minigame Season 1" />
        <link rel="icon" href="https://multi.leaven.team/leaven.png" />
      </Head>

      <main>
        <div className="flex items-center justify-center my-20 space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-pink-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-pink-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-pink-600"></div>
        </div>
        <p className="text-center text-4xl font-bold">결과 계산 중입니다...</p>
      </main>
    </div>
  );
}
