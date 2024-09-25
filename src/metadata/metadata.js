module.exports = {
  name: 'ムスタヒド　アハメド',
  title: '',
  facts: {
    '住所': 'Tokyo, Japan',
    '国籍': 'Bangladesh',
    'ギット': `<a href="https://github.com/ahmedmustahid">
                  <span class="print">https://github.com/ahmedmustahid</span>
                  <span class="screen">Github</span>
                </a>`,
    'メール': '<a href="mailto:amustahid25@gmail.com">amustahid25@gmail.com</a>',
  },
  skills: [
    ['Python', '++++'],
    ['C++20', '++++'],
    ['C', '++++'],
    ['Dart/Flutter', '++++'],
    ['Swift', '+++'],
    ['Javscript', '+++'],
    ['AWS', '++++'],
    ['Statistics', '++++'],
    ['Image Processing', '++++'],
    ['NLP', '++++'],
    ['Algorithms', '++++'],
    ['Data Structure', '++++'],
  ],

  experiences: [
    {
      title: '株式会社 パイオニア',
      written:'July 2023 - Present',
      header: '機械学習エンジニア'
    },
    {
      title: '株式会社 センシン　ロボティクス',
      written:'May 2022 - June 2023',
      header: '機械学習エンジニア'
    },
    {
      title: '株式会社　HyperCube',
      written:'April 2020 - April 2022',
      header: '機械学習エンジニア'
    },
    {
      title: '個人事業主',
      written:'April 2020 - Present',
      header: 'ソフトウェアエンジニア'
    },
  ],

  projects2: [
    {
      title: 'Qualcomm SoCにおいてLLMとRAGのデプロイメント',
      written: 'April 2024 - August 2024',
      badges: ['C++', 'Conan', 'git', 'faiss', 'llama.cpp'],
      contents: `
      スクラッチからfaissとllama.cppを用いてRAGパイプラインの構築とクロスコンパイル。llama.cppの大規模なコードからモデルとembeddingを引用してRAG用に自ら編集。
      Conanによってビルドシステムの構築。Unit testとCI CDの実装。
      `
    },
    {
      title: '車載レーダー用のミドルウェアをE2Eまで構築',
      written: 'August 2023 - March 2024',
      badges: ['C++', 'CMake', 'git', 'CI/CD'],
      contents: `
      センサーデータストリームを機械学習モジュールに受け渡す用のシステムの構築。
      ロックなしリングバッファの導入によって高速化。CI CDパイプラインの構築。
      `
    },
  ],

  projects1: [
    // {
    //   title: 'Crack segmentation from tiles',
    //   written: 'Feb 2023 - Present',
    //   badges: ['Python', 'Pytorch', 'OpenCV', 'mmcv'],
    //   contents: `
      
    //   Implementing model for crack segmentation using novel transformer based segmentation architecture inspired from retinal vessel segmentation 
    //   in medicine literature
    //   `
    // },
    {
      title: '画像認識によるアナログメーターの読み取り',
      written: 'November 2022 - April 2023',
      badges: ['Python', 'Pytorch', 'OpenCV','onnx', 'mmcv', 'Apache TVM', 'ncnn'],
      contents: `
     
      メーターを検出してから、針の位置と最大・最小値を正確に読み取れるアルゴリズムの構築；「量子化」によってモデル圧縮を行い、C++で「エッジ」デバイスにデプロイ。
      納品されたこのプロダクトが社内と社外で大評価。
      `
    },
    // {
    //   title: 'Extraction of information from hand written documents using deep learning methods',
    //   written: 'August 2022 - October 2022',
    //   badges: ['Python', 'Pytorch', 'OpenCV', 'Tesseract OCR'],
    //   contents: `
      
    //   Extracting data from tables, paragraphs, drawings etc in images of handwritten documents and serializing them into respective formats by 
    //   means of a Bert based model
    //   `
    // },
    // {
    //   title: 'People detection from fish eye images',
    //   written: 'May 2022 - July 2022',
    //   badges: ['Python', 'Pytorch', 'OpenCV'],
    //   contents: `
      
    //   Because commonly used algorithms are not suitable for fish eye images, implemented new algorithm that can detect people in such images by including 
    //   information of angular values of slanted bounding boxes.
    //   `
    // },
  ],

  projects0: [

    {
      title: 'AI チャットボットアプリ',
      written: 'June 2021 - October 2021',
      badges: ['AWS', 'Dart/flutter', 'Swift','Docker', 'Git', 'CI/CD'],
      contents: `

      AWS Amplify, AWS Api Gateway, AWS Lambda及びAWS Sagemakerを用いたシステムデザインの構築。
      Flutter/Dart/Swiftを用いたバックエンドとフロントエンドの作成。
      `
    },
    {
      title: 'データベースデザイン・構築',
      written: 'March 2021 – May 2021',
      badges: ['MySQL', 'Azure', 'Python', 'Git'],
      contents: `

      MySQLデータベーススキーマデザインを行い、Azure上にデプロイ。
      ウエブアプリとデータベース間の連携。`
    },
// {
//       title: 'Supply Chain Optimization',
//       written: 'December 2020 - February 2021',
//       badges: ['Python', 'C++', 'Git'],

//       contents: `

//       Research on optimization problems. 
//       Using linear programming and integer programming methodologies in Gurobi Python and C++ for supply chain optimization.      `
//     },
    // {
    //   title: 'Video Anomaly Detection',
    //   written: 'May 2020 - November 2020 ',
    //   badges: ['Python', 'OpenCV', 'PyTorch', 'MySQL', 'Azure', 'Docker', 'Git'],
    //   contents: `

    //   Research on deep learning based activity detection algorithms.
    //   Constructing and deploying algorithm to detect anomalous events in video.
    //   Transferring the analysis data to Azure DB deployed in cloud.      `
    // }
  ],
projects00: [
    {
      title: 'Fax画像ドキュメントから手書き文字認識',
      written: 'Batton Ltd',
      badges: ['Python', 'Pytorch', 'torchserve','OCR', 'Docker', 'GCP'],
      contents: `
   
      asyncioやaiohttpを利用して膨大のデータをAPIに送信し、Bounding Boxを得る作業の高速化。
      yolov8を使って手書きとタイプされた文字の分類化。Vision Transformer(ViT)エンコーダー、日本語Bertデコーダーベースのモデルを構築し、ファインチューンを行う。
      GCPのArtifact Registry用にDocker上でモデルを渡すhttpサーバーを立ち上げる。このサーバーをVertex AI endpointとしてデプロイ。
      `
    },   
    {
      title: '与えられたフォントから日本語漢字の生成',
      written: 'AI Idea Lab',
      badges: ['Python', 'Image Generation'],
      contents: `
    
      新しいフォントから日本語漢字を生成するようにControlNetの学習とプロンプトエンジニアリンの学習とプロンプトエンジニアリンググ。
      `
    },
    {
      title: '架電者ボットの開発',
      written: 'AI Idea Lab',
      badges: ['Python', 'EspNet', 'Pytorch', 'OpenAi', 'aiortc', 'node.js'],
      contents: `
      架電相手が話した内容をOpen AIのapiに投げ、プロンプトエンジニアリングによって最適な返信の作成。
      カッシングやストリーミングなどによってOpen AIの高速化。返信を音声化。
      pythonとnode.js上のピア同士の間でwebRTCで音声ストリームを転送。
     `

    },
        {
      title: 'Memorize: 脳トレーニング用のゲーム',
      written: '',
      badges: ['Swift', 'Git', 'CI/CD'],
      contents: `

      Swift言語を用いてフロントエンドの作成。
      ゲームロジックの構築。
      `
    },
    {
      title: 'amusta-chain: 分散的なp2pブロックチェーン',
      written: '',
      badges: ['Javascript','Express', 'Node.js', 'Git', 'CI/CD'],
      contents: `
      TDDの完全導入。
      p2pダイナミックマイニングの構築。ユーザーのウオレットに送金できるような仕組みの構築。
      マイナーによってお金の取引の仕組みの構築
      `
    },

    // {
    //   title: 'Memorize: A game for training memory',
    //   written: 'June 2021 - Sep 2021',
    //   badges: ['Swift', 'Git'],
    //   contents: `
    
    //   Designing front end and game logic in Swift programming language.
    //   `
    // },
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
      Nagoya University, Nagoya, Japan [March ’20]
      `
    },
    { 
      header: '学会発表：International Workshop on Future Linear Colliders',
      contents: `
      Search for weakly interacting dark matter in the International Linear Collider
      University of Texas, Arlington, Texas, USA. [Oct ’18]
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
