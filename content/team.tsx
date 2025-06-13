export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    bio: "Board-certified OB/GYN with over 15 years of clinical experience and a passion for women's health technology.",
  },
  {
    name: "Michael Thompson",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "AI specialist with a background in healthcare technology and a focus on creating ethical, impactful health solutions.",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Head of Research",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    bio: "Researcher specializing in women's health disparities and AI applications in reproductive health.",
  },
];