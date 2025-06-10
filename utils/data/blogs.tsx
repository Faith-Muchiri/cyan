export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export const blogs: BlogPost[] = [
    {
      id: "1",
      title: "Understanding Cervical Cancer: Symptoms, Prevention, and Treatment",
      excerpt: "Early detection of cervical cancer can significantly increase survival rates. Learn about the warning signs and preventative measures every woman should know.",
      date: "May 2, 2025",
      author: "Dr. Amara Nwosu",
      category: "Cervical Health",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "understanding-cervical-cancer"
    },
    {
      id: "2",
      title: "Ovarian Cysts: Myths vs. Facts",
      excerpt: "Many women experience ovarian cysts during their lifetime. We break down common misconceptions and provide evidence-based information about this condition.",
      date: "April 28, 2025",
      author: "Dr. Fatima Okonkwo",
      category: "Ovarian Health",
      imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "ovarian-cysts-myths-facts"
    },
    {
      id: "3",
      title: "My Journey Through Cervical Cancer Treatment",
      excerpt: "A personal story of hope, resilience, and recovery from a cervical cancer survivor who wants to inspire other women facing similar challenges.",
      date: "April 22, 2025",
      author: "Chioma Adeyemi",
      category: "Patient Stories",
      imageUrl: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "journey-through-cervical-cancer"
    },
    {
      id: "4",
      title: "Advancements in AI Detection of Ovarian Abnormalities",
      excerpt: "How artificial intelligence is revolutionizing the early detection of ovarian cysts and tumors, potentially saving thousands of lives.",
      date: "April 16, 2025",
      author: "Dr. Nala Mensah",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "ai-detection-ovarian-abnormalities"
    },
    {
      id: "5",
      title: "Holistic Approaches to Managing Reproductive Health",
      excerpt: "Exploring complementary therapies and lifestyle changes that can support conventional medical treatments for women's reproductive health issues.",
      date: "April 10, 2025",
      author: "Dr. Zainab Osei",
      category: "Wellness",
      imageUrl: "https://images.unsplash.com/photo-1553615738-d8e4d1c81409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "holistic-approaches-reproductive-health"
    },
    {
      id: "6",
      title: "Supporting a Loved One Through Cancer Diagnosis",
      excerpt: "Practical advice for family members and friends on how to provide emotional and practical support during a difficult time.",
      date: "April 4, 2025",
      author: "Blessing Okoro, Counselor",
      category: "Support",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      slug: "supporting-loved-one-cancer-diagnosis"
    }
  ];