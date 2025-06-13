import {
  ShieldCheck,
  HeartPulse,
  ListCheck,
  User,
  UserCheck,
  Clock,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Feature = {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  details: string;
  statistic: string;
};

export const features: Feature[] = [
  {
    name: "AI-Powered Prediction",
    description:
      "Advanced AI models predict risks of cervical cancer and ovarian cysts based on symptoms and medical history.",
    icon: HeartPulse,
    color: "bg-cyan-100 text-cyan-700",
    details:
      "Our AI analyzes thousands of data points including symptoms, genetic factors, and lifestyle choices to identify patterns that may indicate health risks before symptoms develop.",
    statistic: "75% earlier detection compared to traditional methods",
  },
  {
    name: "Early Diagnosis",
    description:
      "Early detection tools that flag potential abnormalities and provide actionable next steps.",
    icon: ShieldCheck,
    color: "bg-teal-100 text-teal-700",
    details:
      "Using machine learning algorithms trained on millions of health records, we can detect subtle signs of health issues that might otherwise go unnoticed until symptoms become severe.",
    statistic: "90% accuracy in early-stage detection",
  },
  {
    name: "Personalized Treatment",
    description:
      "Customized treatment plans based on patient data, medical guidelines, and similar case outcomes.",
    icon: UserCheck,
    color: "bg-emerald-100 text-emerald-700",
    details:
      "Every woman's body is unique. Our system creates individualized care plans that consider your specific health profile, preferences, and needs.",
    statistic: "83% of patients report better outcomes with personalized plans",
  },
  {
    name: "Inventory Management",
    description:
      "Real-time tracking of hospital supplies with automated alerts and reordering systems.",
    icon: ListCheck,
    color: "bg-blue-100 text-blue-700",
    details:
      "Our platform ensures hospitals never run out of essential supplies by monitoring usage patterns and automatically placing orders when inventory runs low.",
    statistic: "Reduces supply shortages by 94%",
  },
  {
    name: "Transparent Finances",
    description:
      "Clear, itemized billing with explanations of costs and blockchain-based record keeping.",
    icon: Clock,
    color: "bg-indigo-100 text-indigo-700",
    details:
      "No more surprise bills. We provide transparent cost breakdowns and ensure all charges are properly documented and explained in plain language.",
    statistic:
      "98% of patients report better understanding of their healthcare costs",
  },
  {
    name: "Patient Education",
    description:
      "Interactive resources and community support for women's health education and empowerment.",
    icon: User,
    color: "bg-purple-100 text-purple-700",
    details:
      "Knowledge is power. Our platform offers easy-to-understand educational content about women's health topics, tailored to your specific needs and concerns.",
    statistic:
      "86% of users feel more confident discussing health concerns with providers",
  },
];
