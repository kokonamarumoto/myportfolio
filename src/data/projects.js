import project1Image from "../assets/profilesite.png";
import project1slide from "../assets/profile-slide1.png";
import project1slide2 from "../assets/profile-slide2.png";
import project1slide3 from "../assets/profile-slide3.png";

import project2Image from "../assets/anime-record.png";
import project2edit from "../assets/anime-edit.png";
import project2dialog from "../assets/dialog.png";
import project2login from "../assets/anime-login.png";
import project2signup from "../assets/anime-signup.png";

import project3Image from "../assets/record-app.png";
import dashboardImage from "../assets/dashboard.png";
import project3diary from "../assets/diary.png";
import project3study from "../assets/record-study.png";
import project3album from "../assets/record-album.png";
import project3memo from "../assets/record-memo.png";
import project3login from "../assets/record-login.png";
import project3signup from "../assets/record-signup.png";


export const projects = [
  {
    id: 1,
    title: "自己紹介ページ",
    summary: "自分のプロフィールについてまとめたサイト",
    technologies: ["HTML", "CSS"],
    features:["プロフィール・好きなものの表示","スライダー機能"],
    reason: "学んだ技術を使って自己紹介をするため",
    difficulties: "CSSで配置を整えること",
     highlights:[{
      point:"プロフィール帳のようなデザイン",
      explain:"パッと見て分かりやすい",},
      {point:"好きなアニメを紹介する部分では、画像をスライドしたり、アニメのホームページに遷移する",
        explain:"自分の好きなものを知ってもらう機会になる"
      }],

   
    thumbnail: project1Image,
    images: [{src:project1Image,
       title:"トップページ",},
       {src:project1slide,
        title:"アニメ紹介欄１"
       },
       {src:project1slide2,
        title:"アニメ紹介欄２"
       },
       {src:project1slide3,
        title:"アニメ紹介欄３"
       },
    ],
    githubUrl: "https://github.com/kokonamarumoto/mypage",
    demoUrl: "https://kokonamarumoto.github.io/mypage/",
  },



   {
    id: 2,
    title: "アニメ記録アプリ",
    summary: "自分が好きなアニメのエピソードなどを記録するアプリ",
    technologies: ["Flask", "Python", "HTML","CSS"],
    features:["ユーザー登録/ログイン機能","アニメ名・エピソードの登録/更新/削除","登録内容の一覧表示"],
    reason: "好きなエピソードを記録しておくことで、すぐにそのエピソードを見返すことができるようにしたかったから",
    difficulties: "アニメ名を削除した際、エピソードだけが残ってしまわないように、アニメ名とエピソードの紐づけをしたこと",
    highlights:[{
      point:"アニメごとにエピソードを表示する",
      explain:"見返したい部分をすぐに探せる",},
      {point:"削除の際は、削除確認のページに遷移する",
        explain:"誤って削除することを防ぐ"
      },
    ],
    
    thumbnail: project2Image,
    images: [{src:project2Image,
       title:"トップページ",},
       {src:project2edit,
        title:"編集メニュー"
       },
       {src:project2dialog,
        title:"削除確認ページ"
       },
       {src:project2login,
        title:"ログイン画面"
       },
         {src:project2signup,
        title:"新規ユーザー登録"
       }
    ],
    githubUrl: "https://github.com/kokonamarumoto/anime-record-app/tree/main",
    demoUrl: "https://anime-record-app.onrender.com/",
  },



   {
    id: 3,
    title: "記録アプリ",
    summary: "日記記録と学習記録の両方を一括管理するアプリケーション",
    technologies: ["Django", "Python", "JavaScript","HTML","CSS"],
    features:["ユーザー登録/ログイン機能","カレンダー表示","日記と学習記録の登録/更新/削除","学習時間の集計とグラフ表示","アルバム機能","学習メモ記録"],
    reason: "Webアプリにすることで、気軽に記録を残すことができ、一括管理することで、手間を省くことができると考えたから",
    difficulties: "登録フォームの複数入力を可能にするために、学習記録のモデルを親モデルと子モデルに分けたことで、データの紐づけを行う必要があったところ",
    highlights:[{
      point:"日記と学習記録を同じページから登録できるようにしたこと",
      explain:"入力の際の手間が省ける",},

    { point:"トップページのカレンダーから登録日に印をつけた",
      explain:"継続状況がすぐに分かる"
    },
    {point:"学習時間だけでなく、学習メモも登録できるようにしたこと",
      explain:"学んだことを振り返ることができるようにしたこと",
    },
   
    { point:"日記に登録した画像をアルバム化",
      explain:"日記や学習記録だけでなく、写真アルバムを兼ねることができる"
    },
    ],
   
    thumbnail: project3Image,
    images: [{src:project3Image,
      title:"トップページ",},
      {src:project3diary,
        title:"日記一覧",}
      ,
      {src:project3study,
        title:"学習記録一覧",}
      ,
      {src:dashboardImage,
        title:"学習状況一覧",}
      ,
      {src:project3album,
        title:"アルバム一覧",}
      ,
      {src:project3memo,
        title:"学習メモ一覧",}
      ,
      {src:project3login,
        title:"ログイン画面",}
      ,
      {src:project3signup,
        title:"新規ユーザー登録",}
    ],
    githubUrl: "https://github.com/kokonamarumoto/record-app",
    demoUrl: "https://recordapp-gamma.vercel.app/",
  },
];
