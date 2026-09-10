export const resumeData = {
  personal: {
    name: "Kamalakannan R",
    title: "Full Stack Developer | .NET & React.js",
    location: "Chennai, Tamil Nadu, India",
    email: "kamalakannan.rdev@gmail.com",
    phone: "+91 99429 71768",
    linkedin: "linkedin.com/in/kamalakannan-r-0a48a4409",
    github: "",
    summary: "Full Stack Developer with 3+ years of experience building and maintaining scalable web applications. I develop backend services and RESTful APIs with C#, .NET, and ASP.NET Core, and deliver modern frontend experiences with React.js and Vue.js. My work spans microservices, database optimization, AWS serverless workflows, and application modernization."
  },
  experience: [
    {
      id: 1, company: "Span Technology Services", location: "Coimbatore, Tamil Nadu", position: "Software Engineer", duration: "June 2025 – August 2026", type: "Full-time",
      description: "Sole developer for the TaxBandits ACA application module, owning delivery across backend APIs, business logic, frontend integration, and cloud workflows.",
      achievements: [
        "Independently owned the TaxBandits ACA application end to end using ASP.NET Core, C#, Vue.js, and Vuetify.",
        "Designed and maintained RESTful APIs, CRUD operations, validation, middleware, and business logic for ACA filing and form processing.",
        "Built a serverless bulk-file workflow with AWS Lambda, Step Functions, and S3 for secure document storage.",
        "Implemented day- and time-based Drip Mail logic with automated 2-day, 4-day, and pre-deadline email reminders.",
        "Optimized SQL Server queries with EF Core, LINQ, and stored procedures; applied dependency injection, repository pattern, SOLID principles, async/await, and JWT authentication.",
        "Resolved production issues and performance bottlenecks while collaborating through Agile/Scrum sprints with Git, Azure DevOps, and Jira."
      ],
      technologies: ["C#", ".NET Core", "ASP.NET Core", "Vue.js", "Vuetify", "SQL Server", "EF Core", "AWS Lambda", "AWS Step Functions", "AWS S3"]
    },
    {
      id: 2, company: "Span Technology Services", location: "Coimbatore, Tamil Nadu", position: "Junior Software Engineer", duration: "June 2023 – May 2025", type: "Full-time",
      description: "Developed, supported, and modernized features for the TaxBandits eFile platform across filing workflows, backend services, and frontend migration.",
      achievements: [
        "Developed and maintained eFile platform features with .NET Core, .NET Framework, C#, Worker Services, MongoDB, SQL Server, and Windows Services.",
        "Maintained the state and postal filing module, implementing filing logic and data-processing requirements for state-level and postal workflows.",
        "Built the TEST Simulator Tool independently under a short deadline and received a Pat on the Back Award.",
        "Created an automated eFile demo and simulation process that replicated the end-to-end user filing workflow.",
        "Implemented data-processing, validation, workflow-automation, and TXT, CSV, and XML file-generation services.",
        "Contributed to migrating frontend functionality to Vue.js, feature delivery, defect resolution, testing, and continuous modernization."
      ],
      technologies: ["C#", ".NET Core", ".NET Framework", "Worker Services", "MongoDB", "SQL Server", "Vue.js", "XML", "CSV"]
    }
  ],
  education: [{ id: 1, institution: "Velalar College of Engineering and Technology", location: "Erode, Tamil Nadu, India", degree: "Bachelor of Electronics and Communication Engineering", duration: "June 2019 – April 2023", gpa: "8.3 CGPA" }],
  // skills: {
  //   languages: [{ name: "C#", level: 90 }, { name: "JavaScript", level: 85 }, { name: "TypeScript", level: 75 }, { name: "Node.js", level: 70 }],
  //   frameworks: [{ name: ".NET Core", level: 90 }, { name: "ASP.NET Core Web API", level: 90 }, { name: "React.js", level: 80 }, { name: "Vue.js", level: 85 }, { name: "Microservices", level: 80 }],
  //   databases: [{ name: "SQL Server", level: 90 }, { name: "Entity Framework Core", level: 85 }, { name: "MongoDB", level: 80 }, { name: "PostgreSQL", level: 70 }, { name: "Redis", level: 65 }],
  //   tools: [{ name: "AWS (S3, Lambda, Step Functions)", level: 80 }, { name: "Git", level: 85 }, { name: "Azure DevOps", level: 80 }, { name: "Jenkins", level: 70 }, { name: "Swagger / OpenAPI", level: 80 }]
  // },
  skills: {
  languages: [
    { name: "C#", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Node.js", level: 70 }
  ],

  frameworks: [
    { name: ".NET Core", level: 90 },
    { name: "ASP.NET Core Web API", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Microservices", level: 80 },
    { name: "Entity Framework Core", level: 85 }
  ],

  databases: [
    { name: "SQL Server", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 70 },
    { name: "Redis", level: 65 }
  ],

  cloudDevOps: [
    { name: "AWS", level: 80 },
    { name: "Amazon S3", level: 80 },
    { name: "AWS Lambda", level: 75 },
    { name: "AWS Step Functions", level: 75 },
    { name: "AWS EKS", level: 70 },
    { name: "Kubernetes", level: 70 },
    { name: "Docker", level: 75 },
    { name: "Git", level: 85 },
    { name: "Jenkins", level: 70 },
    { name: "Portainer", level: 75 }
  ],

  devTools: [
    { name: "Swagger / OpenAPI", level: 80 },
    { name: "Postman", level: 85 },
    { name: "NoSQLBooster", level: 75 },
    { name: "DBeaver", level: 75 },
    { name: "n8n", level: 70 },
    { name: "Docker Desktop", level: 80 }
  ],

  aiTools: [
    { name: "OpenAI Codex", level: 80 },
    { name: "Claude", level: 80 },
    { name: "GitHub Copilot", level: 85 }
  ]
},
  projects: [

{
id: 1,
title: "ACA Application Module",
description:
"An enterprise ACA filing and form-processing application developed for TaxBandits, covering end-to-end filing workflows, business rules, validations, and data processing.",
role: "Software Engineer",
duration: "2025 – 2026",
technologies: [
"ASP.NET Core",
"C#",
"Vue.js",
"Vuetify",
"SQL Server",
"Dapper"
],
highlights: [
"Developed backend APIs, business logic, CRUD operations, validations, and middleware for ACA filing workflows.",
"Built and maintained Vue.js and Vuetify components for filing workflows, form processing, and user interactions.",
"Optimized database operations using Dapper, LINQ, SQL Server, and stored procedures to improve application performance.",
"Implemented JWT authentication, dependency injection, repository pattern, SOLID principles, and asynchronous programming."
]
},

{
id: 2,
title: "Span Control – Internal Operations Platform",
description:
"An internal administration and operations platform used by Span Enterprises teams in the US to manage customer support, queries, tickets, contacts, tracking workflows, and business reporting.",
role: "Software Engineer",
duration: "2025 – 2026",
technologies: [
"React.js",
"C#",
".NET Core",
"ASP.NET Core Web API",
"REST APIs",
"SQL Server",
"Dapper"
],
highlights: [
"Developed React.js modules for administration, support operations, ticket management, customer queries, and contact management.",
"Integrated React.js frontend components with ASP.NET Core REST APIs to support end-to-end business workflows.",
"Developed tracking and reporting features for monitoring requests, assignments, statuses, operational activities, and business data.",
"Implemented backend APIs, business logic, validations, and database operations using C#, ASP.NET Core, Dapper, and SQL Server."
]
},

{
id: 3,
title: "TaxBandits E-File 2.0",
description:
"A tax e-filing platform supporting filing workflows, automated data processing, validation, file generation, simulation, and state and postal filing operations.",
role: "Junior Software Engineer",
duration: "2023 – 2025",
technologies: [
".NET Core",
"C#",
"MongoDB",
"SQL Server",
"Vue.js",
"XML",
"JSON"
],
highlights: [
"Developed an automated demo and simulation process that replicated the complete TaxBandits user filing workflow.",
"Built backend services for data processing, validation, workflow automation, and filing operations.",
"Implemented TXT, CSV, XML, and JSON file-generation workflows to support filing and simulation requirements.",
"Contributed to state and postal filing modules while supporting frontend modernization using Vue.js."
]
}

],
  certifications: [],
  awards: ["Pat on the Back Award — recognized for independently delivering the TEST Simulator Tool within a short turnaround.", "Weekly Excellence Spotlight — recognized for implementing day- and time-based Drip Mail logic in the ACA application.", "Span Superstar Award — company-wide recognition for consistent, high-impact contribution."],
  socialLinks: { linkedin: "https://linkedin.com/in/kamalakannan-r-0a48a4409" }
};