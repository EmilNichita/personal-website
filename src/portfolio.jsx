/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
};

//Home Page
const greeting = {
  title: "Hello World! ",
  title2: "Emil Nichita",
  logo_name: "emil_n()",
  nickname: "emil",
  full_name: "Emil Nichita",
  subTitle:
    ", and I'm an ML Researcher and Engineer. Feel free to browse around, and learn more about what I do!",
  resumeLink:
    "https://drive.google.com/file/d/1J-6kMaW67JG_AU9rzYwlGCZjge-Nzkhl/view?usp=sharing",
  mail: "mailto:doaremil@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/EmilNichita",
  linkedin: "https://www.linkedin.com/in/emil-nicolae-nichita/",
  gmail: "doaremil@gmail.com",
  facebook: "https://www.facebook.com/nichita.emil/",
  instagram: "https://www.instagram.com/emil.nichita/",
};

const skills = {
  data: [
    {
      title: "Machine Learning Research & Engineering",
      fileName: "MLResearchImg",
      skills: [
        "I always read and (most often!) understand the latest ML research news and papers, I like to be up to date with every innovation!",
        "I like building ML models to address real-world problems - from scratch, fine tuned, or using frameworks, careful to ensure performance and scale!",
        "I design and run large-scale experiments, leveraging high-performance computing and efficient workflows to ensure robust and reproducible results",
        "I enjoy collaboration across interdisciplinary teams to design and deploy ML solutions",
        "I architect and implement complex end-to-end learning loops, including data preprocessing, model training, evaluation, and deployment, ensuring efficiency and reliability",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "devicon:jupyter-wordmark",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos:matplotlib-icon",
          style: {
            color: "#FFFF00",
            fill: "FFFF00"
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "devicon:plotly",
        },
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "devicon:pytorch",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Lightning",
          fontAwesomeClassname: "simple-icons:lightning",
          style: {
            color: "#792EE5",
          },
        },
        {
          skillName: "Huggingface",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            color: "#FFD21E",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "vscode-icons:file-type-docker2",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "DVC",
          fontAwesomeClassname: "simple-icons:dvc",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Weights & Biases",
          fontAwesomeClassname: "simple-icons:weightsandbiases",
          style: {
            color: "#FFBE00",
          },
        },
        {
          skillName: "MLFlow",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            color: "#0194E2",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-light",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Slurm",
          fontAwesomeClassname: "carbon:ibm-cloud-hpc",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Software Engineering",
      fileName: "SoftwareEngineerImg",
      skills: [
        "I'm a proficient Python developer, including writing, building, deploying, and maintaining packages",
        "I have 5 years of AWS experience, including S3, Batch, ECR, EC2, ECS, Lambda, DynamoDB, CloudWatch",
        "I built and maintained continuous integration & deployment workflows for software and complex ML systems",
        "I often make time to learn a new software stack through projects (like this website, built using HTML/CSS/JS/React/NPM!)",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "MacOS",
          fontAwesomeClassname: "simple-icons:macos",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },

        {
          skillName: "PyPi",
          fontAwesomeClassname: "devicon:pypi",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PyTest",
          fontAwesomeClassname: "devicon:pytest-wordmark",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MyPy",
          fontAwesomeClassname: "devicon-plain:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "UV",
          fontAwesomeClassname: "simple-icons:astral",
          style: {
            color: "#FFCD00",
          },
        },
        {
          skillName: "Sphinx",
          fontAwesomeClassname: "simple-icons:sphinx",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-light",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "skill-icons:git",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "logos:bitbucket",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Seldon",
          fontAwesomeClassname: "mdi:gear",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "devicon:grafana",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "material-symbols:html",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "material-symbols:css",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "devicon:react",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Oxford",
      subtitle: "Master of Mathematics and Computer Science",
      logo_path: "university_of_oxford.png",
      logo_style: {
        transform: "scale(350%, 350%)",
      },
      alt_name: "uni_of_oxford",
      duration: "2015 - 2019",
      descriptions: [
        [0, "○ Notable coursework: Machine Learning, Algorithms and Data Structures, Probability Theory, Graph Theory, Linear Algebra, Real and Complex Analysis, Advanced Databases, Functional Programming "],
        [0, "○ Notable practical projects:"],
        [2, "○ Fully featured text editor written in Scala"], 
        [2, "○ Implementation of F-IVM in PostgreSQL based on M. Nikolic et al's paper "], 
        [2, "○ CNNs trained for image classification (MNIST, CIFAR-10)"]
      ],
      website_link: "https://www.ox.ac.uk/",
    },
    {
      title: "National College \"Mircea cel Batran\"",
      subtitle: "Math and Computer Science Profile",
      logo_path: "CNMB-logo.jpeg",
      logo_style: {
        transform: "scale(117%, 117%) translate(0px, 2px)",
      },
      alt_name: "CNMB",
      duration: "2011 - 2015",
      descriptions: [
        [0, "○ Romanian Baccalaureate (97.5%)"],
        [0, "○ 5 medals at the Romanian National Math Olympiad, including a gold one in 2013"],
        [0, "○ Second prize in the International Space Settlement Contest organised by NASA in Orlando,US"],
        [0, "○ Over 50 other prizes in national contests in Mathematics and Computer Science"],
      ],
      website_link: "https://www.cnmbct.ro/",
    },
  ],
};

const achievements = {
  achievements: [
    // {
    //   title: "M0001: MongoDB Basics",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   achievement_link:
    //     "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#47A048",
    // },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    `Feel free to browse through my former employers, summing up 
    to about 5 and a half years of software development, machine learning research and engineering!`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior AI Researcher",
          company: "Exscientia Ltd.",
          company_url: "https://www.exscientia.com/",
          logo_path: "exscientia.png",
          duration: "Jan 2022 - Nov 2024",
          location: "Oxford, United Kingdom",
          description: [
            `○ Led a cross-functional team focused on active learning, multi-parameter optimization,
              and uncertainty quantification.
              Attributes included individual contributions in code bases and research, 
              setting long term roadmaps, managing ongoing projects and communicating to users, front-end developers,
              and the board. (09/2023 - 10/2024)`,
            `○ Led a cross-functional team of researchers and engineers focused on molecular property prediction,
             both developing the required cloud infrastructure and producing state of the art results using classical
             and large scale models for chemistry on 100% of internal assays. (03/2022 - 09/2023)`,
            `○ Designed, implemented and open sourced a python framework for config driven model building,
             greatly improving the reproducibility, automation and the internal speed of development - MolFlux.
             This has been adopted in Exscientia for molecular predictive modelling.`,
            `○ Worked closely with both MLOps engineers and model customers, to successfully migrate the MLOps
             stack and user facing infrastructure to Seldon and Prefect.`,
          ],
          color: "#0071C5",
        },
        {
          title: "AI Researcher",
          company: "Exscientia Ltd.",
          company_url: "https://www.exscientia.com/",
          logo_path: "exscientia.png",
          duration: "Sep 2019 - Jan 2022",
          location: "Oxford, United Kingdom",
          description: [
            `○ Built high accuracy machine learning models for molecular property prediction, using standard
             ML and Cheminformatics libraries (RDKit, OpenEye, DeepChem, PyTorch) and implementing an 
             eﬃcient molecular Gaussian Process library.`,
            `○ Implemented a bayesian optimisation python package and supporting infrastructure for selecting
             promising molecules to synthesise and evaluate in-vitro.`,
            `○ Heavily involved in recruiting interviews, setting python software standards, CI/CD, code
             maintenance, and MLOps (continuous model training, registration, inference) using AWS Batch, Dy-
namoDB, Step, Lambda, S3 etc. as the company grew from startup to IPO.`,
          ],
          color: "#0071C5",
        },
        {
          title: "Software Engineering Intern",
          company: "Metaswitch Ltd.",
          company_url: "https://www.metaswitch.com/",
          logo_path: "metaswitch.png",
          duration: "Jun 2018 - Sep 2018",
          location: "London, United Kingdom",
          description: [
            `○ Enhanced a complex codebase (1,000+ files) by implementing and deploying an MPLS Networking
             protocol feature to improve traﬃc prioritization in production`,
            `○ Developed in C and C++ with unit tests in Python and CI/CD via Jenkins.`,
          ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Certifications",
      experiences: [
        {
          title: "Coming soon!",
          company: "Yes coming soon!",
          company_url: "Not yet!",
          logo_path: "coming_soon.png",
          duration: "Start date",
          location: "End date",
          description: [
            "The website is still in development, gimme a break!",
          ],
          color: "#FBBD18",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A list of projects I have worked on, and open sourced, coming soon!",
  avatar_image_path: "projects_image.svg",
};

// Papers Page
const papersPageData = {
  introSection: {
    title: "Papers",
    profile_image_path: "todo.jpg",
    description:
      "Below are some of the papers and posters I contributed to. Coming soon! ",
  },
};

const papers = {};

const projects = {
  data: [
    {
      id: "0",
      name: "MolFlux",
      url: "https://github.com/Exscientia/molflux",
      description:
        "Framework for config-driven model building for molecules, open sourced while working at Exscientia.",
      languages: [
        {
          name: "Python",
          iconifyClass: "devicon:python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Exscientia/molflux",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Docs",
          url: "https://exscientia.github.io/molflux/index.html",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "1",
      name: "Personal Website",
      url: "https://github.com/EmilNichita/personal-website",
      description:
        "The very website you're looking at, with an extendable and configurable source code!",
      languages: [
        
        {
          name: "HTML",
          iconifyClass: "material-symbols:html",
        },
        {
          name: "CSS",
          iconifyClass: "material-symbols:css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "React",
          iconifyClass: "devicon:react",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/EmilNichita/personal-website",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Docs",
          url: "https://exscientia.github.io/molflux/index.html",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  achievements,
  experience,
  projectsHeader,
  papersPageData,
  papers,
  projects,
};
