module.exports = {
  name: 'ムスタヒド　アハメド',
  title: 'Mustahid Ahmed',
  facts: {
    '住所': '練馬区、東京都',
    '国籍': 'バングラデシュ',
    'ギット': `<a href="https://github.com/ahmedmustahid">
                  <span class="print">https://github.com/ahmedmustahid</span>
                  <span class="screen">Github</span>
                </a>`,
    'メール': '<a href="mailto:amustahid25@gmail.com">amustahid25@gmail.com</a>',
  },
  skills: [
    ['Python', '++++'],
    ['C++17', '++++'],
    ['C', '++++'],
    ['Dart/Flutter', '++++'],
    ['Swift', '+++'],
    ['Azure', '+++'],
    ['AWS', '++++'],
    ['統計学', '++++'],
    ['画像解析', '++++'],
    ['自然言語処理', '+++'],
    ['アルゴリズム', '++++'],
    ['データ構造', '++++'],
  ],
  projects: [
    {
      title: 'AI チャットボットアプリ',
      written: '6月 2021 - 現在',
      badges: ['AWS', 'Dart/flutter', 'Swift','Docker', 'Git'],
      contents: `

      AWS Amplify, AWS Api Gateway, AWS Lambda, AWS Sagemakerによってシステムデザインの構築。
      Flutter/Dart/Swiftによってバックエンドとフロントエンドの作成。
      `
    },
    {
      title: 'データベースデザイン・構築',
      written: '2月 2021 – 5月 2021',
      badges: ['MySQL', 'Azure', 'Python', 'Git'],
      contents: `

      MySQLデータベーススキーマデザインし、Azure上にデプロイ。
      ウエブアプリとデータベースの連携。
      `
    },
{
      title: '物流最適化',
      written: '12月 2020 - 2月 2021',
      badges: ['Python', 'C++', 'Git'],

      contents: `

      最適化問題に関する研究
      線形計画や整数計画などのような数理計画法によってGurobi PythonとC++で物流最適化。
      `
    },
    {
      title: '映像に対する異常認識',
      written: '5月 2020 - 11月 2020 ',
      badges: ['Python', 'OpenCV', 'PyTorch', 'MySQL', 'Azure', 'Docker', 'Git'],
      contents: `

      深層学習による人間活動の研究。
      映像データから異常活動認識のアルゴリズムの構築。
      活動認識の結果をAzureDBに保存。
      `
    }
  ],
  additional_experience: [
    { 
      header: '修士研究：機械学習・画像認識・データ解析',
      skills: ['Python', 'OpenCV', 'PyTorch', 'C++', 'Git', 'CMake'],
      contents: `

      C++によって、加速器での素粒子の衝突のシミュレーション・検出器のデザイン・精度の評価
      検出器からのデータを画像に写像し、深層学習によって解析。
      `
    },

    { 
      header: '学会発表：日本物理学会',
      contents: `
      Full Detector Simulation of Pair Monitor and Application of Machine Learning to Determine Determine Beam Size
      名古屋大学
      `
    },
    { 
      header: '学会発表：International Workshop on Future Linear Colliders',
      contents: `
      Search for weakly interacting dark matter in the International Linear Collider
      テキサス大学、アーリントン校
      `
    },
  ],

  languages: [  
    {
      contents: `
      英語：ビジネスレベル、TOEFL iBT 110
      日本語：ビジネスレベル
      `
    },
  ],

};
