import { basePath } from "@/shared/config/app-config";

const contactLinks = [
  {
    label: "Download Resume",
    href: `${basePath}/aditya_ramariya_frontend_developer.pdf`,
    icon: "↓",
    iconClassName: "bg-indigo-500/10 text-indigo-400",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:aditya.ramariya@gmail.com",
    icon: "@",
    iconClassName: "bg-indigo-500/10 text-indigo-400",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adityaramariya",
    icon: "in",
    iconClassName: "bg-blue-500/10 text-blue-400",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/adityaramariya",
    icon: "GH",
    iconClassName: "bg-white/10 text-white",
    external: true,
  },
];

export default contactLinks;
