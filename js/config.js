/**
 * Portfolio Configuration Data
 * ----------------------------------------------------
 * Easily customize all personal details, education, skills,
 * experience, projects, and contact info in this single file.
 */

const PORTFOLIO_CONFIG = {
    // 1. Personal & Hero Information
    personal: {
        name: "Alex Rivera",
        nickname: "Alex",
        role: "B.Tech Computer Science Student & Aspiring Software Engineer",
        rolesList: [
            "B.Tech CSE Student",
            "Full-Stack Developer",
            "Cloud & DevOps Enthusiast",
            "Problem Solver & Tech Explorer"
        ],
        shortIntro: "Hi, I'm Alex Rivera, a passionate B.Tech student and aspiring Software Developer / Cloud Engineer. I love building creative, scalable, and user-friendly solutions that solve real-world problems.",
        tagline: "Bridging creative design and scalable software engineering with modern web technologies and cloud architectures.",
        status: {
            available: true,
            text: "Open for Internships & Entry-Level SDE Roles"
        },
        profileImage: "assets/images/profile.jpg",
        resumePath: "resume/Alex_Rivera_Resume.pdf",
        location: "Bengaluru, India (Open to Remote / Relocation)",
        email: "alex.rivera.dev@gmail.com",
        phone: "+91 98765 43210",
        aboutBio: "I am currently in my final year of B.Tech in Computer Science and Engineering. With a strong foundation in Data Structures, Algorithms, and Object-Oriented Design, I specialize in full-stack web development and cloud-native computing. My goal is to build resilient, accessible, and high-performance software systems.",
        careerInterests: [
            "Full-Stack Web Development (React, Node.js, Next.js)",
            "Cloud Engineering & Microservices (AWS, Docker, Kubernetes)",
            "Distributed Systems & Database Optimization",
            "API Architecture & System Design"
        ],
        personality: "A curious learner who thrives in fast-paced collaborative environments. I believe in clean code, automated testing, and building intuitive user experiences with empathy and precision."
    },

    // 2. Quick Counter Statistics
    stats: [
        {
            value: 4,
            suffix: "th",
            label: "Year B.Tech CSE",
            icon: "graduation-cap",
            highlight: "Top 5% of Batch"
        },
        {
            value: 15,
            suffix: "+",
            label: "Projects Completed",
            icon: "folder-git",
            highlight: "Full-Stack & Cloud"
        },
        {
            value: 20,
            suffix: "+",
            label: "Technologies Mastered",
            icon: "cpu",
            highlight: "Languages & Tools"
        },
        {
            value: 2,
            suffix: "+",
            label: "Internships / Roles",
            icon: "briefcase",
            highlight: "Hands-on Experience"
        }
    ],

    // 3. Social Media Links
    socials: {
        github: "https://github.com/alexrivera-dev",
        linkedin: "https://linkedin.com/in/alexrivera-dev",
        email: "mailto:alex.rivera.dev@gmail.com",
        twitter: "https://twitter.com/alexrivera_dev",
        leetcode: "https://leetcode.com/alexrivera"
    },

    // 4. Education Timeline
    education: [
        {
            level: "Bachelor of Technology (B.Tech)",
            degree: "Computer Science & Engineering",
            institution: "National Institute of Technology (NIT), Karnataka",
            boardUniversity: "Autonomous / Central University",
            score: "9.24 CGPA",
            year: "2023 - 2027",
            status: "Pursuing (Final Year)",
            highlights: [
                "Dean's Honor Roll for academic excellence in semesters 3, 4, and 5.",
                "Core Coursework: Data Structures & Algorithms, OS, DBMS, Computer Networks, Software Engineering, Cloud Computing.",
                "Lead Organizer of TechFest Hackathon with 500+ participants."
            ]
        },
        {
            level: "Higher Secondary Certificate (12th Grade)",
            degree: "Senior Secondary School (Science - PCM with CS)",
            institution: "Delhi Public School (DPS), R.K. Puram",
            boardUniversity: "CBSE Board",
            score: "95.6%",
            year: "2021 - 2023",
            status: "Completed",
            highlights: [
                "Secured 98/100 in Computer Science and 96/100 in Mathematics.",
                "President of School Coding & Robotics Club.",
                "Represented school in National Science Olympiad."
            ]
        },
        {
            level: "Secondary School Examination (10th Grade)",
            degree: "Secondary Education",
            institution: "St. Xavier's High School",
            boardUniversity: "CBSE Board",
            score: "96.2%",
            year: "2020 - 2021",
            status: "Completed",
            highlights: [
                "School Topper in Science & Information Technology.",
                "Winner of Inter-School Mathematics Olympiad.",
                "Active member of the Debate and Eco Clubs."
            ]
        }
    ],

    // 5. Categorized Skills
    skills: {
        technical: [
            {
                category: "Programming Languages",
                icon: "code",
                items: [
                    { name: "Java", level: "Advanced", icon: "devicon-java-plain" },
                    { name: "Python", level: "Advanced", icon: "devicon-python-plain" },
                    { name: "C / C++", level: "Intermediate", icon: "devicon-cplusplus-plain" },
                    { name: "JavaScript (ES6+)", level: "Advanced", icon: "devicon-javascript-plain" },
                    { name: "TypeScript", level: "Intermediate", icon: "devicon-typescript-plain" },
                    { name: "SQL", level: "Advanced", icon: "devicon-mysql-plain" }
                ]
            },
            {
                category: "Web & Frontend Technologies",
                icon: "layout",
                items: [
                    { name: "React.js", level: "Advanced", icon: "devicon-react-original" },
                    { name: "HTML5 & Semantic CSS3", level: "Expert", icon: "devicon-html5-plain" },
                    { name: "Next.js", level: "Intermediate", icon: "devicon-nextjs-original" },
                    { name: "Node.js & Express", level: "Advanced", icon: "devicon-nodejs-plain" },
                    { name: "Tailwind / CSS Grid", level: "Advanced", icon: "devicon-tailwindcss-plain" },
                    { name: "RESTful & GraphQL APIs", level: "Advanced", icon: "devicon-graphql-plain" }
                ]
            },
            {
                category: "Cloud, DevOps & Systems",
                icon: "cloud",
                items: [
                    { name: "Amazon Web Services (AWS)", level: "Intermediate", icon: "devicon-amazonwebservices-original" },
                    { name: "Docker & Containers", level: "Intermediate", icon: "devicon-docker-plain" },
                    { name: "Kubernetes Basics", level: "Familiar", icon: "devicon-kubernetes-plain" },
                    { name: "CI/CD (GitHub Actions)", level: "Intermediate", icon: "devicon-githubactions-plain" },
                    { name: "Linux / Shell Scripting", level: "Advanced", icon: "devicon-linux-plain" }
                ]
            },
            {
                category: "Databases & Storage",
                icon: "database",
                items: [
                    { name: "PostgreSQL", level: "Advanced", icon: "devicon-postgresql-plain" },
                    { name: "MongoDB", level: "Advanced", icon: "devicon-mongodb-plain" },
                    { name: "MySQL", level: "Advanced", icon: "devicon-mysql-plain" },
                    { name: "Redis Caching", level: "Intermediate", icon: "devicon-redis-plain" },
                    { name: "Firebase", level: "Intermediate", icon: "devicon-firebase-plain" }
                ]
            },
            {
                category: "Developer Tools & Workflow",
                icon: "tool",
                items: [
                    { name: "Git & GitHub", level: "Expert", icon: "devicon-git-plain" },
                    { name: "VS Code / IntelliJ", level: "Expert", icon: "devicon-vscode-plain" },
                    { name: "Postman", level: "Advanced", icon: "devicon-postman-plain" },
                    { name: "Figma (UI/UX)", level: "Intermediate", icon: "devicon-figma-plain" },
                    { name: "Webpack / Vite", level: "Intermediate", icon: "devicon-vite-plain" }
                ]
            }
        ],
        soft: [
            {
                title: "Problem Solving",
                desc: "Strong algorithmic thinking with 350+ solved problems across LeetCode and competitive platforms.",
                icon: "brain-circuit"
            },
            {
                title: "Effective Communication",
                desc: "Able to articulate complex technical ideas clearly in engineering discussions, documentation, and presentations.",
                icon: "messages-square"
            },
            {
                title: "Team Collaboration",
                desc: "Experienced with agile sprint cycles, pull-request reviews, and cross-functional hackathon teams.",
                icon: "users"
            },
            {
                title: "Leadership & Initiative",
                desc: "Mentored 40+ junior students in web development bootcamps and led college club technical projects.",
                icon: "sparkles"
            },
            {
                title: "Time Management",
                desc: "Proven track record of balancing rigorous academic coursework, open-source work, and internships.",
                icon: "clock"
            },
            {
                title: "Adaptability & Fast Learner",
                desc: "Quickly learns emerging frameworks, SDKs, and engineering toolchains under tight deadlines.",
                icon: "zap"
            }
        ]
    },

    // 6. Experience & Internships
    experience: [
        {
            company: "CloudScale Technologies",
            role: "Software Engineering Intern",
            duration: "May 2025 - Jul 2025",
            type: "Full-Time Internship",
            location: "Bengaluru, India (Hybrid)",
            responsibilities: [
                "Developed and maintained microservices using Node.js, Express, and PostgreSQL handling 50k+ daily requests.",
                "Automated CI/CD deployment pipelines on AWS ECS using GitHub Actions, reducing deployment cycle times by 35%.",
                "Implemented Redis caching layers for heavy queries, improving endpoint response latency from 420ms to 95ms.",
                "Collaborated with senior engineers on code reviews, API documentation with OpenAPI/Swagger, and unit test suites with Jest."
            ],
            technologies: ["Node.js", "Express", "PostgreSQL", "AWS (ECS, S3)", "Docker", "Redis", "Jest"]
        },
        {
            company: "TechNova Solutions",
            role: "Frontend Developer Intern",
            duration: "Dec 2024 - Feb 2025",
            type: "Internship",
            location: "Remote",
            responsibilities: [
                "Built accessible, responsive web application interfaces using React.js, TypeScript, and modern CSS modules.",
                "Refactored state management using Zustand, eliminating redundant component re-renders across dynamic data tables.",
                "Integrated secure OAuth2 authentication flow and third-party REST API payment gateways.",
                "Improved Lighthouse accessibility and performance scores across key web pages from 74 to 98."
            ],
            technologies: ["React.js", "TypeScript", "Tailwind CSS", "Zustand", "REST APIs", "Git"]
        }
    ],

    // 7. Featured Projects
    projects: [
        {
            id: "nexus-cloud-dashboard",
            title: "NexusPlatform - Cloud Infrastructure & Metrics Dashboard",
            category: "Cloud & Full Stack",
            tag: "Featured Project",
            image: "assets/images/project1.jpg",
            description: "A real-time DevOps observability platform designed to monitor microservices health, container clusters, and API throughput.",
            problemSolved: "Developers lacked a lightweight, unified dashboard to visualize Kubernetes pod statuses and inspect high-latency API bottlenecks in real-time.",
            features: [
                "Real-time WebSocket streaming metrics for CPU, RAM, and Disk I/O",
                "Kubernetes cluster visualizer with automated health alerts",
                "Customizable telemetry dashboards with dark mode support",
                "Interactive time-series charts and query filter engine"
            ],
            technologies: ["React", "TypeScript", "Node.js", "Docker", "AWS", "Socket.io", "Chart.js"],
            github: "https://github.com/alexrivera-dev/nexus-platform",
            liveDemo: "https://nexus-platform-demo.vercel.app"
        },
        {
            id: "neuracode-ai-assistant",
            title: "NeuraCode - AI-Powered Code Reviewer & Assistant",
            category: "AI & Web App",
            tag: "AI Powered",
            image: "assets/images/project2.jpg",
            description: "An intelligent web-based developer assistant providing automated code refactoring, security vulnerability scans, and git diff analysis.",
            problemSolved: "Junior developers and teams spent excessive time locating syntax vulnerabilities and performance anti-patterns before pull request submissions.",
            features: [
                "Context-aware code analysis with AST parser and LLM integration",
                "Side-by-side interactive Git Diff viewer with one-click patches",
                "Security vulnerability & memory leak vulnerability detection",
                "Customizable team coding guidelines and automated test generation"
            ],
            technologies: ["Next.js", "Python FastAPI", "OpenAI API", "Monaco Editor", "PostgreSQL", "TailwindCSS"],
            github: "https://github.com/alexrivera-dev/neuracode-ai",
            liveDemo: "https://neuracode-ai.vercel.app"
        },
        {
            id: "campusflow-collab-hub",
            title: "CampusFlow - Collaborative Student Learning Hub",
            category: "Full Stack & Real-time",
            tag: "Student Platform",
            image: "assets/images/project3.jpg",
            description: "A collaborative virtual study platform uniting students for real-time peer coding, interactive kanban task management, and group study rooms.",
            problemSolved: "College students struggled with disjointed communication tools when managing collaborative group projects and sharing synchronized code.",
            features: [
                "Multiplayer collaborative code editor with syntax highlighting",
                "Interactive WebRTC peer-to-peer audio/video study rooms",
                "Kanban task board with drag-and-drop status management",
                "Integrated resource repository with peer upvoting system"
            ],
            technologies: ["React.js", "WebRTC", "Socket.io", "Express.js", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/alexrivera-dev/campusflow-hub",
            liveDemo: "https://campusflow.vercel.app"
        }
    ],

    // 8. Personal Hobbies & Interests
    hobbies: [
        {
            title: "Competitive Programming",
            desc: "Active problem solver on LeetCode and CodeForces; exploring algorithmic patterns, graphs, and dynamic programming.",
            icon: "binary",
            tag: "350+ Solved"
        },
        {
            title: "Open-Source Exploration",
            desc: "Contributing bug fixes, documentation, and features to open-source developer tooling and developer ecosystems.",
            icon: "git-pull-request",
            tag: "GitHub Contributor"
        },
        {
            title: "UI/UX & Design Systems",
            desc: "Passionate about crafting intuitive micro-interactions, responsive typography, and glassmorphic user interfaces in Figma.",
            icon: "palette",
            tag: "Figma & CSS"
        },
        {
            title: "Photography & Visual Arts",
            desc: "Capturing architecture, urban street geometry, and nature landscapes through a 35mm lens.",
            icon: "camera",
            tag: "Urban & Nature"
        },
        {
            title: "Tech Blogging & Mentorship",
            desc: "Writing technical tutorials on web fundamentals, cloud hosting, and mentoring junior engineering students.",
            icon: "book-open",
            tag: "Articles & Guides"
        },
        {
            title: "Travelling & Trekking",
            desc: "Enthusiastic about exploring mountain trails, discovering diverse cultures, and rejuvenating in the outdoors.",
            icon: "compass",
            tag: "Backpacking"
        }
    ],

    // 9. Contact Info & Location
    contact: {
        email: "alex.rivera.dev@gmail.com",
        phone: "+91 98765 43210",
        location: "Bengaluru, Karnataka, India",
        timezone: "IST (UTC +5:30)",
        socialHandles: {
            linkedin: "linkedin.com/in/alexrivera-dev",
            github: "github.com/alexrivera-dev",
            twitter: "@alexrivera_dev"
        }
    }
};

// Export for module systems or global availability
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}
