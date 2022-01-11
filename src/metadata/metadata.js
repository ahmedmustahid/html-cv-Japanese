module.exports = {
  name: 'ムスタヒド　アハメド',
  title: 'Mustahid Ahmed',
  facts: {
    '住所': '東京都',
    '国籍': 'バングラデシュ',
    'Git': `<a href="https://github.com/ahmedmustahid">
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
  experiences: [
    {
      title: 'HyperCube Ltd.',
      written:'4月 2020 - 現在',
      header: '機械学習エンジニア'
    },
    

  ],

  projects1: [
{
      title: '画像処理によってアトピー肌の認識',
      written: '1月 2022 - 現在',
      badges: ['python', 'OpenCV'],
      contents: `

      SIFTアルゴリズムによって特徴抽出して、アトピー肌画像の間にマッチングを行う
      `
    },
    {
      title: 'AI チャットボットアプリ',
      written: '6月 2021 - 12月 2021',
      badges: ['AWS', 'Dart/flutter', 'Swift','Docker', 'Git'],
      contents: `

      AWS Amplify, AWS Api Gateway, AWS Lambda及びAWS Sagemakerを用いたシステムデザインの構築。
      Flutter/Dart/Swiftを用いたバックエンドとフロントエンドの作成。
      `
    },
    {
      title: 'データベースデザイン・構築',
      written: '3月 2021 – 5月 2021',
      badges: ['MySQL', 'Azure', 'Python', 'Git'],
      contents: `

      MySQLデータベーススキーマデザインを行い、Azure上にデプロイ。
      ウエブアプリとデータベース間の連携。
      `
    },
    {
        title: '物流最適化',
        written: '12月 2020 - 2月 2021',
        badges: ['Python', 'C++', 'Git'],

        contents: `

        最適化問題に関する研究
        Gurobi PythonとC++を用いた、線形計画や整数計画等の数理計画法による物流最適化。
        `
    },
    {
      title: '映像データを用いた異常認識',
      written: '5月 2020 - 11月 2020 ',
      badges: ['Python', 'OpenCV', 'PyTorch', 'MySQL', 'Azure', 'Docker', 'Git'],
      contents: `

      深層学習による人間活動の研究。
      映像データから異常活動を認識するアルゴリズムの構築。
      活動認識の結果をAzureDBに保存。
      `
    }
  ],
  
  projects2: [
    {
      title: 'Memorize: 脳トレーニング用のゲーム',
      written: '6月 2021 - 現在',
      badges: ['Swift', 'Git'],
      contents: `

      Swift言語を用いてフロントエンドの作成。
      ゲームロジックの構築。
      `
    },
    {
      title: 'amusta-chain: 分散的なp2pブロックチェーン',
      written: '6月 2021 - 現在',
      badges: ['Javascript', 'Git'],
      contents: `
      p2pダイナミックマイニングの構築
      現在ワレットのフロントエンドを構築中
      `
    },
  ],
  additional_experience: [
    { 
      header: '修士研究：機械学習・画像認識・データ解析',
      skills: ['Python', 'OpenCV', 'PyTorch', 'C++', 'Git', 'CMake'],
      contents: `
      C++を用いた、加速器での素粒子の衝突シミュレーション・検出器のデザイン。
      検出器からのデータを映像化し、深層学習によって解析。
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
      ベンガル語：ネーティブレベル
      `
    },
  ],

};
