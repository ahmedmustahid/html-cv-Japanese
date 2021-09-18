module.exports = {
  name: 'ムスタヒド　アハメド',
  title: 'Mustahid Ahmed',
  facts: {
    '住所': '練馬区、東京都',
    '国籍': 'バングラデシュ',
    'Git Profile': `<a href="https://github.com/ahmedmustahid">
                  <span class="print">https://github.com/ahmedmustahid</span>
                  <span class="screen">Github</span>
                </a>`,
    'Email': '<a href="mailto:amustahid25@gmail.com">amustahid25@gmail.com</a>'
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
      badges: ['Python', 'OpenCV', 'MySQL', 'Azure', 'Docker', 'Git'],
      contents: `
      深層学習による挙動解析の研究。
      映像データから異常挙動認識のアルゴリズムの構築。
      挙動認識の結果をAzureDBに保存。
      `
    }
  ],
  additional_experience: [
    {
      header: '修士研究：機械学習・画像認識・データ解析',
      skills: ['Python', 'OpenCV', 'C++', 'Git'],
      contents: `
      C++によって、加速器での素粒子の衝突のシミュレーション・検出器のデザイン・精度の評価
      検出器からのデータを画像に写像し、深層学習によって解析。
      `
    },

  ],
  
};