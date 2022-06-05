import Head from "next/head";
import Router from "next/router";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

export default function Member() {
  const message =
    "나와 가장 잘 맞는 레븐 멤버는 '구슬요'에요. 같이 플레이해볼래요? https://leaven-minigame.vercel.app";

  return (
    <div>
      <Head>
        <title>구슬요 - 나와 맞는 레븐 멤버는?</title>
        <meta name="description" content="Leaven Minigame Season 1" />
        <link rel="icon" href="https://multi.leaven.team/leaven.png" />
      </Head>

      <main>
        <ToastContainer className="text-2xl font-bold" />
        <div className="text-center my-10">
          <p className="text-2xl mb-5">나와 가장 잘 맞는 레븐 멤버는?</p>
          <div className="avatar">
            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/837e10f9-4f22-4e8f-2680-550471b1da00/500x500"
                alt="구슬요"
              />
            </div>
          </div>
          <p className="text-5xl font-bold">구슬요</p>
          <p className="text-xl mt-1 font-bold">
            원석대학교 포츈쿠키학과 미래점술전공 타로학 석사
          </p>
          <p className="text-lg mt-3">ENFP | 1분기 레븐 회장 | 서브보컬</p>
        </div>

        <div className="text-center">
          <CopyToClipboard
            text={message}
            onCopy={() => {
              toast.success("결과를 클립보드에 복사했어요!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            <button className="btn btn-primary gap-2 text-xl mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              공유하기
            </button>
          </CopyToClipboard>
          <button
            className="btn btn-secondary gap-2 text-xl"
            onClick={() => {
              Router.push("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#003A3D"
              stroke="currentColor"
              viewBox="-24 0 512 512"
            >
              <title>replay</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M232 448Q186 448 148 425 109 402 87 363 64 324 64 278L64 256 112 256 112 280Q112 331 147 366 182 400 233 400 265 400 293 384 320 367 336 340 352 313 352 281 352 230 318 195 283 160 232 160L232 232 136 136 232 40 232 112Q279 112 317 134 355 157 378 196 400 234 400 280 400 327 378 364 356 403 317 426 277 448 232 448Z"
              />
            </svg>
            다시하기
          </button>
        </div>
      </main>
    </div>
  );
}
