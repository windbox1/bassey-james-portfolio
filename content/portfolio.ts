// EDIT THIS FILE to change the words, links, projects and contact details.
// To add a picture: put it in public/images, then write its path below.
// Example: profileImage: "/images/my-photo.jpg"

export const portfolio = {
  name: "Bassey James",
  initials: "BJ",
  role: "Software Developer",
  location: "Nigeria",
  company: "Zenix Technological Lab",

  headline: "I build digital products that work.",

  intro:
    "Web apps, mobile solutions, backend systems and API integrations built for businesses with ambitious ideas.",

  availability: "Available for freelance projects",

  profileImage: "/images/James.png",

  about: [
    "I’m Bassey James, a software developer focused on practical, scalable and user-friendly digital solutions.",
    "I work with businesses, entrepreneurs and startups that need more than a website — they need technology that performs.",
  ],

  email: "Jamesbassey2013@gmail.com",

  github: "https://github.com/Windbox1",

  linkedin: "https://www.linkedin.com/in/james-bassey-262601431/",

  whatsapp: "https://wa.me/2348076679176",

  technologies: [
    {
      title: "Frontend",
      list: "React · React Native · JavaScript · Tailwind CSS",
    },
    {
      title: "Backend",
      list: "Node.js · Express · PHP · Python",
    },
    {
      title: "Data",
      list: "PostgreSQL · MySQL",
    },
    {
      title: "Integration",
      list: "REST APIs · Paystack · Git · GitHub",
    },
  ],

  services: [
    {
      number: "01",
      title: "Web applications",
      description:
        "Responsive platforms, dashboards and business tools built to feel fast on every screen.",
    },
    {
      number: "02",
      title: "Mobile solutions",
      description:
        "Clean, dependable mobile experiences built with React Native to keep your services close to your customers.",
    },
    {
      number: "03",
      title: "Backend systems",
      description:
        "Secure authentication, databases, transaction processing and business logic designed to scale.",
    },
    {
      number: "04",
      title: "API integration",
      description:
        "Payments, financial services and third-party platforms connected into one reliable product.",
    },
  ],

  projects: [
    {
      number: "01",
      title: "SwiftMint",
      type: "Fintech platform",
      description:
        "A digital wallet platform for Naira and cryptocurrency wallets, transfers, conversions, bills and account management.",
      tags: ["React Native", "JavaScript", "REST API", "FinTech"],
      tone: "lime",
      stat: "Live",
      statLabel: "website preview",

      images: [
        "/images/projects/swiftmint-website.png",
      ],

      link: "https://swiftmint-app.onrender.com/",
    },

    {
      number: "02",
      title: "Beauty & Wellness by Tumzy",
      type: "Wellness & beauty website",
      description:
        "A polished digital home for the Beauty & Wellness by Tumzy brand, designed to present its services clearly and help clients connect with the business.",
      tags: ["Web Design", "Responsive UI", "Frontend Development"],
      tone: "violet",
      stat: "Live",
      statLabel: "website preview",

      images: [
        "/images/projects/tumzy-website.png",
      ],

      link: "https://beauty-wellness-by-tumzy.vercel.app/",
    },
  ],

  process: [
    {
      number: "01",
      title: "Discover",
      description: "Understand the idea, users and business problem.",
    },
    {
      number: "02",
      title: "Plan",
      description: "Define features, structure and a clear roadmap.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Develop progressively with focus on usability, performance and security.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Test, deploy and support the product in the real world.",
    },
  ],
} as const;