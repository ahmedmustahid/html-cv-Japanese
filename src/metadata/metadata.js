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
      title: 'Pioneer Electronics',
      written:'July 2023 - Present',
      header: 'Machine Learning Engineer'
    },
    {
      title: 'Sensyn Robotics',
      written:'May 2022 - June 2023',
      header: 'Machine Learning Engineer'
    },
    {
      title: 'HyperCube Ltd.',
      written:'April 2020 - April 2022',
      header: 'Machine Learning Engineer'
    },
    {
      title: 'Self employed',
      written:'April 2020 - Present',
      header: 'Software Engineer'
    },
  ],

  projects2: [
    {
      title: 'Implemented RAG pipeline with LLM for Qualcomm SoC',
      written: 'April 2024 - August 2024',
      badges: ['C++', 'Conan', 'git', 'faiss', 'llama.cpp'],
      contents: `
      Designed and implemented end to end RAG pipeline from scratch using faiss and llama.cpp. 
      Increased RAG accuracy by choosing the correct embedding and chunk size. 
      `
    },
    {
      title: 'Designed end to end middleware system for automotive radar',
      written: 'August 2023 - March 2024',
      badges: ['C++', 'CMake', 'git', 'CI/CD'],
      contents: `
      
      Implemented API to that obtains sensor data streams and transfers them to machine learning module to deliver inference results back into an alarm sytem.
      Implemented lock free ring buffer system that stopped data loss and enabled extremely fast inference.
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
      title: 'Analog gauge reading by computer vision',
      written: 'November 2022 - April 2023',
      badges: ['Python', 'Pytorch', 'OpenCV','onnx', 'mmcv', 'Apache TVM', 'ncnn'],
      contents: `
      
      Constructed model for accurately reading the analog gauge by determining the position of the dial, minimum and maximum values from the face of the scale after applying 
      perspective transformation. Squeezed the model into smaller size by quantization in C++ and then deployed it into jetson nano.
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
      title: 'NLP based Chatbot',
      written: 'June 2021 - October 2021',
      badges: ['AWS', 'Dart/flutter', 'Swift','Docker', 'Git'],
      contents: `

      Model deployment, system design and maintenance using AWS Amplify, AWS Api Gateway, AWS Lambda, AWS Sagemaker.
      Front and backend development using Flutter/Dart/Swift programming languages.
      `
    },
    {
      title: 'Database design and deployment',
      written: 'March 2021 – May 2021',
      badges: ['MySQL', 'Azure', 'Python', 'Git'],
      contents: `

      Designed MySQL database schema and deployed it in Azure. 
      Using web application API to connect web app with the database.
      `
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
      title: 'Designed novel algorithm for OCR of Japanese fax documents',
      written: 'Batton Ltd',
      badges: ['Python', 'Pytorch', 'torchserve','OCR', 'Docker', 'GCP'],
      contents: `
    
      Collected and labelled dataset of fax documents containing tables. Implemented novel algorithm to extract its data and obtained 97% accuracy.
      Dockerized the model and created http endpoint using torchserve. Deployed the docker container into GCP Artifact registry and created an inference endpoint.
      `
    },   
    {
      title: 'Japanese kanji generation from a specific font',
      written: 'AI Idea Lab',
      badges: ['Python', 'Image Generation'],
      contents: `
    
      Used controlnet and prompt engineering to create Kanjis from novel fonts.
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
      header: 'Masters Thesis：Machine Learning, Deep Learning, Data Analysis',
      skills: ['Python', 'OpenCV', 'PyTorch', 'C++', 'Git', 'CMake'],
      contents: `

      Simulation of particle collisions and their reaction in particle detectors using C++.
      Desiging particle detectors using C++ framework.
      Analyzing data read by particle detectors using machine learning and deep learning algorithms.
      `
    },

    { 
      header: 'Conference Presentation: Japan Physical Society Annual Meeting',
      contents: `
      Full Detector Simulation of Pair Monitor and Application of Machine Learning to Determine Determine Beam Size
      Nagoya University, Nagoya, Japan [March ’20]
      `
    },
    { 
      header: 'Conference Presentation：International Workshop on Future Linear Colliders',
      contents: `
      Search for weakly interacting dark matter in the International Linear Collider
      University of Texas, Arlington, Texas, USA. [Oct ’18]
      `
    },
  ],

  languages: [  
    {
      contents: `
      English, Business Level, TOEFL iBT 110
      Japanese: Business Level
      Bengali: Native Level
      `
    },
  ],

};
