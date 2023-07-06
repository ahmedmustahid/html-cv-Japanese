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
    ['Javascript', '+++'],
    ['Azure', '+++'],
    ['AWS', '++++'],
    ['音声認識', '++++'],
    ['画像解析', '++++'],
    ['自然言語処理', '+++'],
    ['アルゴリズム', '++++'],
    ['データ構造', '++++'],
  ],
  experiences: [
    {
      title: '個人事業主',
      written:'4月 2022 - 現在',
      header: '機械学習エンジニア'
    },
    {
      title: 'Sensyn Robotics',
      written:'5月 2022 - 6月 2023',
      header: '機械学習エンジニア'
    },
    {
      title: 'HyperCube Ltd.',
      written:'4月 2020 - 4月 2022',
      header: '機械学習エンジニア'
    },
    

  ],

  projects3: [  

    {
      title: '拡散モデルによるデザイン作成のアルゴリズムの開発',
      written: '5月 2023 - 現在',
      badges: ['Python', 'Pytorch', 'HuggingFace', '生成AI'],
      contents: `
      データセットの前処理。背景から物体を切り取りアルゴリズムの開発。
      Stable Diffusionを元にDreamboothとControlNetを使用し、推論の精度と高速化を維持しながらファインチューンを行い、Out-paintingの実装。
      `
    },
    {
      title: '架電者ボットの開発',
      written: '4月 2023 - 現在',
      badges: ['Python', 'EspNet', 'Pytorch', 'OpenAi', 'aiortc', 'node.js'],
      contents: `
      架電相手が話した内容をOpen AIのapiに投げ、プロンプトエンジニアリングによって最適な返信の作成。
      カッシングやストリーミングなどによってOpen AIの高速化。返信を音声化。
      pythonとnode.js上のピア同士の間でwebRTCで音声ストリームを転送。
     `

    },



    {
      title: '画像ドキュメントから手書き文字認識',
      written: '6月 2023 - 現在',
      badges: ['Python', 'asyncio', 'aiohttp','Pytorch', 'HuggingFace'],
      contents: `
      asyncioやaiohttpを利用して膨大のデータをAPIに送信し、Bounding Boxを得る作業の高速化。
      yolov8を使って手書きとタイプされた文字の分類化。Vision Transformer(ViT)でエンコードして、日本語Bertでデコード。
      現在パイプラインの高速化の作業を検討中。
      `
    },
    
  ],

  projects0: [
  {
      title: '火花検知のアルゴリズムに関するソフトウェア開発',
      written: '5月 2023 - 現在',
      badges: ['Python', 'OpenCV', 'Multiprocessing'],
      contents: `
      特定の時間間隔でライブストリーム 動画にアルゴリズムを適用する機能を実装。感度パラメータを変更して各フレームを並列処理で高速化。
            `
    },
    {
      title: 'タイル画像からひび割れの抽出',
      written: '2月 2023 - 現在',
      badges: ['Python', 'Pytorch', 'OpenCV', 'mmcv'],
      contents: `
      
      論文を調査するところ、医学雑誌に似たような問題の発見。論文を実装。シミュレーターによってデータの増量によって精度の向上。トランスフォーマーに基づくアーキテクチャによって行われたひび割れのセグメンテーション
      `
    },
    {
      title: '画像認識によるアナログメーターの読み取り',
      written: '11月 2022 - 現在',
      badges: ['Python', 'Pytorch', 'OpenCV','onnx', 'mmcv', 'Apache TVM', 'ncnn'],
      contents: `
      
      メーターを検出してから、針の位置と最大・最小値を正確に読み取れるアルゴリズムの構築；「量子化」によってモデル圧縮を行い、C++で「エッジ」デバイスにデプロイ。
      納品されたこのプロダクトが社内と社外で大評価。
      `
    },

    {
      title: '深層学習による手書きドキュメントからの情報を取り出す',
      written: '8月 2022 - 10月 2022',
      badges: ['Python', 'Pytorch', 'OpenCV', 'Tesseract OCR'],
      contents: `
      
      画像化された手書き書類の表や節や図からデータを区別し、読み取ってから分類化を行う, Bertに基づくアルゴリズムの開発
      `
    },
    {
      title: '360度画像からの人物検出',
      written: '5月 2022 - 7月 2022',
      badges: ['Python', 'Pytorch', 'OpenCV'],
      contents: `
      
      一般的なモデルが360度画像に適応されていないため、対応できる新しいアルゴリズムによって人検出。角度の情報を取り入れることによって精度の向上
      `
    },
  ],

  projects1: [
    
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
      活動認識の結果を保存するためにAzure SQLデータベースの構築。
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
      ユーザーのウオレットに送金できるような仕組みの構築
      マイナーによってお金の取引の仕組みの構築
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
