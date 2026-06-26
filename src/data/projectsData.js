export const projects = [
  {
    name: "Public Auction Notice Portal",
    industry: "Legal / public notice",
    role: "Full-stack",
    description:
      "A free public portal for Philippine court auction notices, turning scanned sheriff notices into searchable and filterable records by region, property type, court, and auction date.",
    architecture:
      "Uses an OCR pipeline into PostgreSQL on Aurora, a Next.js frontend, AWS Amplify Gen 2 GraphQL APIs, Prisma, Cognito accounts, and S3 document storage.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS Amplify Gen 2"],
    align: "right",
    image: "../../images/auction.webp",
    link: "https://auctionph.com/",
  },
  {
    name: "Repair and Maintenance Management System",
    industry: "Internal operations",
    role: "Full-stack Developer",
    description:
      "A cloud-based operations platform for repair tickets, preventive maintenance, technician visits, service reports, equipment, stores, users, and file upload workflows.",
    architecture:
      "Built with Next.js 16, React 19, TypeScript, shadcn/ui, Tailwind CSS, TanStack Query, AWS Amplify Gen 2, AppSync, Lambda, Cognito, RDS PostgreSQL, Prisma ORM, S3, CDK, Zod validation, and automated testing.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "AWS Amplify Gen 2",
      "AppSync",
      "Lambda",
      "Cognito",
      "PostgreSQL",
      "Prisma",
      "S3",
    ],
    align: "left",
    image: "../../images/maintenance.webp",
    link: "#",
  },
  {
    name: "Membership Management Platform",
    industry: "Membership organization",
    role: "Full-stack",
    description:
      "A platform for a membership organization with a member directory, QR-code event attendance, a member marketplace, and a CMS for publishing news and content.",
    architecture:
      "Built with a Next.js frontend, FastAPI service, Payload CMS, PostgreSQL, Sanity content, and AWS ECS Fargate with CDK-managed blue-green deployments.",
    technologies: ["Next.js", "FastAPI", "Payload CMS", "PostgreSQL", "AWS"],
    align: "right",
    image: "../../images/membership.webp",
    link: "#",
  },
  {
    name: "Inventory & Order Management System",
    industry: "Veterinary distribution",
    role: "Full-stack",
    description:
      "An inventory, ordering, and accounting system for a veterinary-products distributor, covering purchase orders, sales orders, stock batches, expiry tracking, payments, and PDF invoices across five company entities.",
    architecture:
      "A Next.js app on AWS Amplify Gen 2 with an AppSync GraphQL API over DynamoDB, company-scoped records, Cognito user groups, and browser-based PDF generation.",
    technologies: ["Next.js", "Chakra UI", "DynamoDB", "AWS Amplify Gen 2"],
    align: "left",
    image: "../../images/inventory.webp",
    link: "#",
  },
  {
    name: "Insurance Sales & Management Platform",
    industry: "Insurance",
    role: "Frontend",
    description:
      "A multi-brand insurance platform where customers buy and manage policies while agents handle sales and recruit sub-agents.",
    architecture:
      "A single Next.js and Chakra UI application with brand-aware context, theme configuration, and backend communication through a generated OpenAPI client.",
    technologies: ["Next.js", "Chakra UI", "React Hook Form"],
    align: "right",
    image: "../../images/insurance.webp",
    link: "#",
  },
  {
    name: "Youth Sports Tournament Platform",
    industry: "Sports / youth football",
    role: "Reviewer",
    description:
      "A tournament platform with team registration, schedules, tournament details, and sign-up flows for local and international youth football teams.",
    architecture:
      "A Next.js frontend backed by AWS Amplify Gen 2, Cognito role-based logins, AppSync and DynamoDB data services, and S3 uploads for registration documents.",
    technologies: ["Next.js", "AWS Amplify Gen 2"],
    align: "left",
    image: "../../images/sports.webp",
    link: "https://www.laligayouth.com/",
  },
];
