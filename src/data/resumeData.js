export const resumeData = {
  // Personal Information
  personal: {
    name: "Purusothkumar S",
    title: "Data Engineer",
    location: "Bengaluru, India",
    email: "purusothkumar64@gmail.com",
    phone: "+91 9944092894",
    linkedin: "linkedin.com/in/purusothkumar-s",
    github: "github.com/Purusoth-Kumar",
    summary: "Data Engineer with 3+ years of experience designing and developing scalable batch and real-time data pipelines, CDC workflows, and cloud-based lakehouse architectures. Hands-on experience with CDC ingestion (Kafka, Flink, Debezium), Apache Iceberg and Delta Lake table formats, medallion architecture, and dimensional data modeling. Skilled in Python, SQL, Airflow, Databricks, Snowflake, Trino, and Apache Doris — processing 5M+ records daily, cutting data delivery time by 60%+, and improving pipeline efficiency through optimization and fault-tolerant streaming design."
  },

  // Work Experience
  experience: [
    {
      id: 1,
      company: "Span Technology Services Pvt Ltd",
      location: "India",
      position: "Data Engineer",
      duration: "October 2023 - Present",
      type: "Full-time",
      description: "Designed and maintained scalable, distributed batch and real-time data pipelines and lakehouse architectures for production workloads",
      achievements: [
        "Designed and maintained scalable, distributed batch and real-time data pipelines (Python, SQL, Apache Kafka, Apache Flink, PostgreSQL), processing 5M+ records per day with zero data loss",
        "Built and maintained CDC pipelines using Debezium connectors to capture changes from SQL Server, PostgreSQL, and MySQL and publish change events into Kafka",
        "Architected a real-time payment reconciliation pipeline (Kafka + Flink stateful processing, exactly-once semantics) with automated mismatch detection and Slack alerting — cutting manual reconciliation effort by 85% and duplicate payments by 60%",
        "Implemented Apache Iceberg-based Bronze/Silver/Gold lakehouse architecture for scalable storage, transformation, schema evolution, and analytical workloads",
        "Designed OLAP data models using Fact and Dimension tables for analytical and reporting workloads",
        "Cataloged and governed data assets using OpenMetadata, improving discoverability, lineage tracking, and cross-team visibility",
        "Built and orchestrated ETL/ELT workflows using Apache Airflow, reducing end-to-end data delivery time by 60%",
        "Reduced pipeline failures by 90% and improved recovery time by implementing checkpointing and savepointing in Flink",
        "Resolved 20+ critical production pipeline incidents through root-cause analysis, bug fixes, and performance tuning",
        "Optimized PySpark transformations and SQL queries, improving pipeline efficiency by 50%+ and reducing manual intervention by over 30%"
      ],
      technologies: ["Python", "SQL", "Apache Kafka", "Apache Flink", "Debezium", "Apache Iceberg", "Delta Lake", "Airflow", "PostgreSQL", "OpenMetadata", "PySpark"]
    },
    {
      id: 2,
      company: "Decision Minds Pvt Ltd",
      location: "India",
      position: "Software Engineering Trainee",
      duration: "January 2023 - September 2023",
      type: "Full-time",
      description: "Built ETL pipelines and migrated data into Snowflake, with Power BI dashboards for stakeholder reporting",
      achievements: [
        "Built scalable ETL pipelines in Python supporting incremental data loading, transformation, and warehouse materialization in Snowflake",
        "Migrated data from PostgreSQL, Oracle, and AWS S3 into Snowflake, implementing profiling, validation, transformation, and reconciliation",
        "Automated data ingestion, transformation, and loading into Snowflake, reducing manual data-processing effort by 50%",
        "Built interactive Power BI dashboards to visualize ETL results, validate data, and deliver business insights"
      ],
      technologies: ["Python", "Snowflake", "PostgreSQL", "Oracle", "AWS S3", "Power BI"]
    }
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Anna University, Chennai (Sri Balaji Chocklingam Engineering College)",
      location: "Tamil Nadu, India",
      degree: "B.E., Electronics and Communication Engineering",
      duration: "Aug 2018 - Jul 2022",
      gpa: "8.02/10.0"
    }
  ],

  // Skills
  skills: {
    languages: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 90 },
      { name: "PySpark", level: 75 },
      { name: "Bash/Linux Scripting", level: 85 }
    ],
    frameworks: [
      { name: "Apache Kafka", level: 90 },
      { name: "Apache Flink", level: 90 },
      { name: "Apache Spark", level: 55 },
      { name: "Apache Airflow", level: 85 },
      { name: "Databricks", level: 60 }
    ],
    databases: [
      { name: "Snowflake", level: 60 },
      { name: "PostgreSQL", level: 85 },
      { name: "Delta Lake", level: 50 },
      { name: "Apache Iceberg", level: 70 },
      { name: "Apache Doris", level: 85 },
      { name: "Trino", level: 75 }
    ],
    tools: [
      { name: "AWS (S3, EC2, Redshift)", level: 75 },
      { name: "Git/GitHub", level: 85 },
      { name: "Jenkins", level: 75 },
      { name: "Power BI", level: 70 },
      { name: "VS Code", level: 85 },
      { name: "Postman", level: 80 },
      { name: "DBeaver", level: 85 }
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "Retail Data Lakehouse",
      description: "Built an end-to-end retail lakehouse in Databricks using PySpark and Spark SQL, processing customer, product, order, and sales data through Bronze/Silver/Gold medallion architecture",
      role: "Data Engineer",
      duration: "2026",
      technologies: ["Databricks", "PySpark", "Delta Lake", "Spark SQL", "Unity Catalog"],
      highlights: [
        "Designed Bronze, Silver, and Gold layers using Delta Lake, implementing data cleansing, transformation, and business-ready data models.",
        "Used Delta Lake ACID transactions, schema enforcement/evolution, and time travel for reliable, auditable data management",
        "Implemented Unity Catalog for centralized data governance and access control",
        "Developed analytical datasets by integrating multiple retail domain tables to support sales, customer, and product reporting.",
        "Optimized Spark transformations with partitioning and efficient DataFrame operations"
      ]
    },
    {
      id: 2,
      title: "Product Data Platform — TaxBandits & TruckLogics",
      description: "End-to-end ownership of a real-time data platform for TaxBandits and TruckLogics — from root-causing pipeline instability to redesigning the architecture around Kafka, Flink, and Apache Doris for scalable, low-latency analytics.",
      role: "Data Engineer",
      duration: "2024",
      technologies: ["Kafka", "Flink", "MinIO Schema Registry", "Apache Doris", "MongoDB","PostgreSQL","Python","SQL"],
      highlights: [
        "Maintained legacy pipeline (SQL → Kafka → Flink → PostgreSQL) processing 2M+ records daily, resolving recurring late data arrivals, null occurrences, and dashboard slowness caused by PostgreSQL bottlenecks.",
        "Diagnosed root causes including Kafka consumer lag, Flink misconfigurations, and unindexed tables — reducing data delays by 40%",
        "Migrated to a modernized architecture (SQL → Kafka → MinIO Schema Registry → Flink → Apache Doris), eliminating late-arrival and null-value issues",
        "Consolidated MongoDB and SQL sources into Apache Doris, improving dashboard performance by ~70%",
        "Exposed REST API endpoints for low-latency dashboard consumption"
      ]
    },
    {
      id: 3,
      title: "Real-Time Payment Data Reconciliation",
      description: "Built and owned an end-to-end real-time reconciliation system that automated payment mismatch detection and alerting, cutting manual reconciliation effort by 85% and duplicate payments by 60%.",
      role: "Data Engineer",
      duration: "2025",
      technologies: ["Kafka", "Flink", "PostgreSQL", "Python", "Slack API"],
      highlights: [
        "Independently architected a real-time reconciliation pipeline ingesting application, payment gateway, and transaction data streams using Kafka topics and Flink stateful processing — ensuring exactly-once processing semantics across all payment events.",
        "Built a unified reconciliation layer consolidating multi-source payment data, implementing automated mismatch detection, duplicate payment flagging, and real-time Slack alerts for instant issue visibility.",
        "Designed REST APIs on top of the reconciliation layer, enabling downstream teams to query payment status and discrepancies with low latency.",
        "Reduced manual reconciliation effort by 85% through end-to-end automation, cutting duplicate payments by 60% and ensuring reliable, auditable payment processing at scale"
      ]
    }
  ],

  // Certifications
  certifications: [
    "Microsoft Certified: Fabric Data Engineer Associate (DP-700) – Microsoft, July 2026"
  ],

  // Awards
  awards: [
    "Super Sparkler Award, Span Technology Services Pvt Ltd – recognized for delivering critical data engineering projects on tight timelines and cross-functional collaboration"
  ],

  // Social Links (Footer)
  socialLinks: {
    linkedin: "https://linkedin.com/in/purusothkumar-s",
    github: "https://github.com/Purusoth-Kumar"
  }
};