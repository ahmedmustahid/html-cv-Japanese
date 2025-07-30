module.exports = {
  name: "Mustahid Ahmed",
  title: "",
  facts: {
    居住地: "東京、日本",
    国籍: "バングラデシュ",
    Gitプロフィール:
      '<a href="https://github.com/ahmedmustahid"><span class="print">https://github.com/ahmedmustahid</span><span class="screen">Github</span></a>',
    メールアドレス:
      '<a href="mailto:amustahid25@gmail.com">amustahid25@gmail.com</a>',
    ウェブサイト:
      '<a href="https://ahmedmustahid.netlify.app/">ahmedmustahid.netlify.app</a>',
  },
  skills: [
    ["Python", "++++"],
    ["C++20", "++++"],
    ["C", "++++"],
    ["Dart/Flutter", "++++"],
    ["Swift", "+++"],
    ["Javscript", "+++"],
    ["AWS", "++++"],
    ["統計学", "++++"],
    ["画像処理", "++++"],
    ["自然言語処理", "++++"],
    ["アルゴリズム", "++++"],
    ["データ構造", "++++"],
  ],
  experiences: [
    {
      title: "IBM システムエンジニアリング",
      written: "2025年3月 - 現在",
      header: "AIエンジニア",
    },
    {
      title: "パイオニア株式会社",
      written: "2023年7月 - 2025年2月",
      header: "機械学習エンジニア",
    },
    {
      title: "株式会社センシンロボティクス",
      written: "2022年5月 - 2023年6月",
      header: "機械学習エンジニア",
    },
    {
      title: "HyperCube株式会社",
      written: "2020年4月 - 2022年4月",
      header: "機械学習エンジニア",
    },
    {
      title: "Batton株式会社",
      written: "2023年8月 - 2023年12月",
      header: "機械学習エンジニア (フリーランス)",
    },
    {
      title: "AI Idea Lab株式会社",
      written: "2023年4月 - 2023年12月",
      header: "機械学習エンジニア (フリーランス)",
    },
    {
      title: "オープンソースコントリビューター",
      written: "2020年4月 - 現在",
      header: "ソフトウェアエンジニア",
    },
  ],
  projects3: [
    {
      title: "金融AIマルチエージェントシステム",
      written: "2025年4月 - 現在",
      badges: [
        "Python",
        "FastAPI",
        "LangChain",
        "LangGraph",
        "OpenAI API",
        "PostgreSQL",
        "Pandas",
        "Matplotlib",
        "Docker",
      ],
      contents:
        "LangGraphオーケストレーションフレームワークを使用して、金融データ分析と文書処理のための高度なマルチエージェントAIシステムを開発。SQLクエリ実行、PDF文書検索、データ可視化、インテリジェントなリクエストルーティングのための専門AIエージェントを統合したスケーラブルなFastAPIバックエンドを構築。金融文書分析のために、多言語（英語/日本語）対応のAgentic システムを実装。\n\n**主な貢献:**\n\n* LangGraphを使用した状態ベースのエージェントワークフローシステムを設計し、AIエージェント間の協調的な対話を実現\n* ウェブアプリケーション統合のためのセッション管理とCORSサポートを備えたRESTful APIエンドポイントを構築\n* Matplotlibを使用した金融データの自動可視化とチャート生成を実装\n* 金融文書を抽出・分析するためのPDF処理パイプラインを開発\n* コード品質ツール（Ruff, Basedpyright）を備えた包括的な開発環境をセットアップ",
    },
  ],
  projects3_1: [
    {
      title: "PostgreSQL MCPサーバー：デュアルトランスポートとデータベース統合",
      written: "2025年1月",
      badges: [
        "Python",
        "PostgreSQL",
        "MCPプロトコル",
        "HTTP",
        "Stdio",
        "Docker",
        "FastAPI",
      ],
      github: "https://github.com/ahmedmustahid/postgres-mcp-server/",
      contents:
        "デュアルトランスポートサポート（HTTPおよびStdio）を備えた、本番環境対応のPostgreSQL MCP（Model Context Protocol）サーバーを開発。\n\n**主な貢献**\n\n* **デュアルトランスポートシステム**（HTTP & Stdio）を設計し、**FastAPI**を使用して**RESTful API**を構築。自動**OpenAPIドキュメンテーション**も完備。\n* **コネクションプーリング**、ステートフルな**セッション管理**、SQLインジェクションを防ぐためのセキュアな**パラメータ化クエリ**を特徴とする堅牢な**PostgreSQL統合**を設計。\n* デプロイの適応性を高めるため、**環境変数**と**コマンドライン引数**を使用した柔軟な**設定システム**を開発。\n* 本番環境対応の**Dockerコンテナ**と**Docker Compose**設定を作成し、デプロイを効率化。\n* システムの信頼性と安定性を確保するため、包括的な**エラーハンドリング**、正常な**シャットダウンロジック**、および完全な**テストスイート**を実装。",
    },
    {
      title: "xiyan_mcp_server: Azure OpenAI, llama-cpp-python, & SQLite統合",
      written: "2025年1月",
      badges: [
        "Python",
        "Azure OpenAI",
        "llama-cpp-python",
        "SQLite",
        "ストリーマブルHTTP",
        "MCPプロトコル",
      ],
      github: "https://github.com/ahmedmustahid/xiyan_mcp_server",
      contents:
        "xiyan mcp serverプロジェクトに貢献し、包括的なAzure OpenAI統合を実装し、llama-cpp-pythonを通じてローカルモデルのサポートを強化。ストリーマブルHTTPトランスポートプロトコルを有効にし、SQLiteデータベースサポートを統合。\n\n**主な貢献:**\n\n- 設定可能なモデルエンドポイントとAPIバージョンを持つAzure OpenAI SDK統合を実装\n- 設定可能なホスト/ポートパラメータを持つストリーマブルHTTPトランスポートサポートを追加\n- ローカルでモデルを実行するためのllama-cpp-pythonローカルモデルサポートを有効化\n- 設定可能なダイアレクトとデータベースパスを持つSQLiteデータベースバックエンドを統合\n- 包括的なYAMLベースのセットアップで設定システムを強化\n- 包括的なエラーハンドリングとロギング機能を追加\n- すべての新機能について詳細なドキュメントと使用例を作成",
    },
    {
      title: "basedpyrightによる静的エラー修正のためのmcpサーバーを実装",
      written: "2025年5月 - 現在",
      badges: ["Python", "ストリーマブルHTTP", "MCPプロトコル"],
      github: "https://github.com/ahmedmustahid/quack-mcp-server",
      contents:
        "quack-mcp-serverプロジェクトに貢献し、既存のmypy統合と並行してMCPツールとしてBasedPyright静的解析サポートを追加。BasedPyrightは、標準のpyrightと比較して強化された機能を備えた高速な型チェックを提供。\n\n**主な貢献:**\n\n- basedpyrightの自動インストールと設定検出を実装\n- 診断出力のための重要度フィルタリングとトップN制限機能を追加\n- エッジケースとエラーハンドリングを完全にカバーする包括的なテストスイートを作成\n- 既存の診断フィルタリングユーティリティと統合し、一貫した出力形式を実現",
    },
  ],
  projects2: [
    {
      title: "Qualcomm SoC向けにLLMを用いたRAGパイプラインを実装",
      written: "2024年4月 - 2024年8月",
      badges: ["C++", "Conan", "git", "faiss", "llama.cpp"],
      contents:
        "**faiss**と**llama.cpp**を使用して、エンドツーエンドのRAGパイプラインをゼロから設計・実装。\n\n- llama.cppからllamaとembeddingsを派生させた後、RAG用の別ライブラリを作成\n- **Conan**を使用したビルドシステムを実装\n- **GitHub Actions**を使用したCI/CDをセットアップ",
    },
    {
      title: "自動車レーダー用エンドツーエンドミドルウェアシステムを設計",
      written: "2023年8月 - 2024年3月",
      badges: ["C++", "CMake", "git", "CI/CD"],
      contents:
        "センサーデータストリームを取得し、それを機械学習モジュールに転送して、推論結果を警報システムに返すAPIを実装。\n\n- データ損失を防ぎ、超高速推論を可能にする**ロックフリーリングバッファシステム**を実装\n- 包括的な単体テストとCI/CDパイプラインを採用\n- 警報システムにリアルタイムの推論結果を提供",
    },
  ],
  projects1: [
    {
      title: "タイルからのひび割れセグメンテーション",
      written: "2023年2月 - 2023年4月",
      badges: ["Python", "Pytorch", "OpenCV", "mmcv"],
      contents:
        "医学文献の網膜血管セグメンテーションから着想を得た、新しい**トランスフォーマーベースのセグメンテーションアーキテクチャ**を用いて、ひび割れセグメンテーションのモデルを実装。\n\n- ラベリング→トレーニングサイクルに基づく**継続的学習システム**を実装\n- **0.9の高い適合率**と**0.8の再現率**を達成\n- 最先端の医用画像技術を土木工学問題に応用",
    },
    {
      title: "コンピュータビジョンによるアナログゲージの読み取り",
      written: "2022年11月 - 2023年4月",
      badges: [
        "Python",
        "Pytorch",
        "OpenCV",
        "onnx",
        "mmcv",
        "Apache TVM",
        "ncnn",
      ],
      contents:
        "透視変換を適用した後、スケール面からダイヤルの位置、最小値、最大値を特定することにより、アナログゲージを正確に読み取るモデルを構築。\n\n- 期待誤差率を**0.15%**に最小化\n- **C++でTVMを使用して量子化**することによりモデルサイズを圧縮\n- エッジデバイス（**NVIDIA Jetson Nano**）へのデプロイに成功\n- 正確な測定のために高度なコンピュータビジョン技術を応用",
    },
    {
      title: "魚眼画像からの人物検出",
      written: "2022年5月 - 2022年7月",
      badges: ["Python", "Pytorch", "OpenCV", "AWS"],
      contents:
        "一般的に使用されるアルゴリズムがこのような歪んだ視点には適していないため、魚眼画像での人物検出のための新しいアルゴリズムを開発。\n\n- 検出精度を向上させるために、**傾斜したバウンディングボックスの角度値**を組み込む\n- **CoCo Annotator**と**AWS S3**を使用して、**ラベリングからクラウドストレージまで**のエンドツーエンドパイプラインを実装\n- 最先端のYOLOアルゴリズムに匹敵する**高いmAPスコア**を達成\n- 魚眼レンズの歪みによって生じる特有の課題を解決",
    },
  ],
  projects0: [
    {
      title: "NLPベースのチャットボット",
      written: "2021年6月 - 2021年10月",
      badges: ["AWS", "Dart/flutter", "Swift", "Docker", "Git"],
      github: "https://github.com/ahmedmustahid/flutterMessageApp",
      contents:
        "フルスタック開発：Flutter/Dart/Swiftを使用したフロントエンドおよびバックエンド開発。AWSサービスを使用したモデルのデプロイ、システム設計、およびメンテナンス：\n\n- AWS Amplifyによるフロントエンドホスティング\n- AWS API GatewayによるAPI管理\n- AWS Lambdaによるサーバーレス関数\n- AWS SageMakerによるMLモデルのデプロイ\n- Flutter/Dart/Swiftを使用したフロントエンドおよびバックエンド開発",
    },
    {
      title: "データベースの設計とデプロイ",
      written: "2021年3月 – 2021年5月",
      badges: ["MySQL", "Azure", "Python", "Git"],
      contents:
        "MySQLデータベーススキーマを設計し、Azureにデプロイ。\n\n- 包括的なデータベーススキーマ設計を作成\n- Azureクラウドプラットフォームにデータベースをデプロイ\n- データベース接続用のWebアプリケーションAPIを開発\n- 安全なデータアクセスパターンを実装",
    },
  ],
  projects01: [
    {
      title: "日本のFAX文書OCRのための新規アルゴリズムを設計",
      written: "2023年8月 - 2023年12月",
      badges: ["Python", "Pytorch", "torchserve", "OCR", "Docker", "GCP"],
      contents:
        "表を含むFAX文書のデータセットを収集し、ラベル付け。そのデータを抽出するための新規アルゴリズムを実装し、97%の精度を達成。\n\n- 表を含むFAX文書のデータセットを収集し、ラベル付け\n- 表データ抽出のための新規OCRアルゴリズムを開発\n- テストデータセットで97%の精度を達成\n- デプロイのためにMLモデルをDocker化\n- TorchServeを使用してHTTPエンドポイントを作成\n- GCP Artifact Registryにデプロイ\n- Vertex AIを介して推論エンドポイントを作成",
    },
  ],
  projects02: [
    {
      title: "特定のフォントからの日本語漢字生成",
      written: "2023年4月 - 2023年9月",
      badges: ["Python", "画像生成", "FastApi", "Gradio"],
      contents:
        "ControlNetとプロンプトエンジニアリングを使用して、新しいフォントから漢字を作成。\n\n- 日本の漢字生成にControlNetを適用\n- フォント固有の文字作成にプロンプトエンジニアリングを使用\n- Gradioを使用してインタラクティブなフロントエンドを構築\n- FastAPIバックエンドエンドポイントを開発\n- GradioフロントエンドをFastAPIバックエンドと統合",
    },
    {
      title: "GPTベースのAIコーラーボット",
      written: "2023年10月 - 2023年12月",
      badges: ["Python", "Node.js", "WebRTC"],
      contents:
        "発信者の音声をテキストに変換し、プロンプトエンジニアリングを使用してOpenAI APIから最適な出力を取得。\n\n- 音声認識を使用して発信者の音声をテキストに変換\n- 最適なOpenAI API応答を得るためにプロンプトエンジニアリングを適用\n- テキスト読み上げを使用してAPI応答を音声に変換\n- PythonとNode.jsの間にWebRTCブリッジを作成\n- 現在、会社のアプリケーションにシステムをデプロイ中",
    },
  ],
  projects00: [
    {
      title: "Memorize：記憶力を鍛えるゲーム",
      written: "2021年6月 - 2021年9月",
      badges: ["Swift", "Git", "CI/CD"],
      github: "https://github.com/ahmedmustahid/Memorize",
      contents:
        "魅力的なユーザーインターフェースを持つ記憶力トレーニングゲームを設計。\n\n- Swiftプログラミング言語を使用してフロントエンドを設計\n- 記憶力トレーニングの仕組みのためのゲームロジックを実装\n- 認知エクササイズのための直感的なユーザーエクスペリエンスを作成",
    },
    {
      title: "amusta-chain：分散型ピアツーピアブロックチェーン",
      written: "2021年6月 - 2021年9月",
      badges: ["javascript", "Express", "Node.js", "Git", "CI/CD"],
      github: "https://github.com/ahmedmustahid/amusta-chain",
      contents:
        "包括的なテストを備えた分散型ピアツーピアブロックチェーンシステムを開発。\n\n- エンドツーエンドのテスト駆動開発（TDD）を採用\n- ピアツーピアのマイニング機能を実装\n- ユーザーウォレットへの安全な通貨転送システムを作成\n- マイナーによるトランザクション検証を開発\n- 分散型コンセンサスメカニズムを構築",
    },
  ],
  additional_experience: [
    {
      header: "修士論文：機械学習、深層学習、データ分析",
      skills: ["Python", "OpenCV", "PyTorch", "C++", "Git", "CMake"],
      contents:
        "C++を用いた粒子衝突とその粒子検出器における反応のシミュレーション。\n\n- C++を使用して粒子衝突と検出器の反応をシミュレーション\n- C++フレームワークを使用して粒子検出器を設計\n- 機械学習と深層学習アルゴリズムを使用して検出器データを分析\n- 素粒子物理学研究のための高度な統計手法を適用",
    },
    {
      header: "学会発表：日本物理学会年次大会",
      contents:
        "対モニターのフル検出器シミュレーションとビームサイズ決定への機械学習の応用\n名古屋大学、名古屋、日本 [2020年3月]",
    },
    {
      header: "学会発表：将来の線形衝突型加速器に関する国際ワークショップ",
      contents:
        "国際リニアコライダーにおける弱く相互作用する暗黒物質の探索\nテキサス大学アーリントン校、アーリントン、テキサス、アメリカ [2018年10月]",
    },
  ],
  languages: [
    {
      contents: `
      英語：ビジネスレベル、TOEFL iBT 110

      日本語：ビジネスレベル

      ベンガル語：ネイティブレベル`,
    },
  ],
};
