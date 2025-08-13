export interface Review {
  id: number;
  name: string;
  location: string;
  date: string;
  rating: number;
  title: string;
  excerpt: string;
  fullReview: string;
  avatar: string;
  featured: boolean;
  source?: string;
  link?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Orowale Samuel Kolapo",
    location: "Lagos, Nigeria",
    date: "5 years ago",
    rating: 5,
    title: "Outstanding service",
    excerpt: "Fast delivery services, reliable, always ready to help out.",
    fullReview: "Fast delivery services, reliable, always ready to help out.",
    avatar: "OK",
    featured: true,
    source: "Google Reviews",
    link: "https://share.google/xG11sHOljeDIjniWI",
  },
  {
    id: 2,
    name: "Ibrahim Musa",
    location: "Abuja, Nigeria",
    date: "3 weeks ago",
    rating: 5,
    title: "Excellent customer service",
    excerpt:
      "From booking to completion, everything was perfect. Very satisfied!",
    fullReview:
      "Exceptional service from start to finish! The customer service team was responsive and helpful during the booking process. The movers arrived exactly on time and were incredibly efficient. They protected all our furniture and belongings perfectly. No damages whatsoever. Best moving experience I've ever had!",
    avatar: "CO",
    featured: true,
    source: "Google Reviews",
    link: "",
  },
  {
    id: 3,
    name: "Jennifer Eze ",
    location: "Lagos, Nigeria",
    date: "4 weeks ago",
    rating: 4,
    title: "Professional team",
    excerpt: "Well-trained staff who know exactly what they're doing.",
    fullReview:
      "The moving crew was clearly well-trained and experienced. They handled our move systematically and professionally. Only minor delay due to traffic, but they made up for lost time.",
    avatar: "JE",
    featured: false,
    link: "",
  },
  {
    id: 4,
    name: "Fatima Ibrahim",
    location: "Port Harcourt, Nigeria",
    date: "3 weeks ago",
    rating: 5,
    title: "Careful handling",
    excerpt:
      "They treated our antique furniture like their own precious items.",
    fullReview:
      "I was worried about moving my grandmother's antique furniture, but the team handled everything with such care and respect. They used special padding and took extra time to ensure everything was secure. Outstanding service!",
    avatar: "FI",
    featured: false,
    link: "",
  },
  {
    id: 5,
    name: "David Okafor",
    location: "Lagos, Nigeria",
    date: "2 months ago",
    rating: 4,
    title: "Reliable and punctual",
    excerpt: "Arrived exactly on time and finished ahead of schedule.",
    fullReview:
      "The team was very reliable and professional. They stuck to the timeline and were very organized throughout the process. Minor issue with packaging materials but overall great service.",
    avatar: "DO",
    featured: false,
    link: "",
  },
  {
    id: 6,
    name: "Grace Ebe",
    location: "Lagos, Nigeria",
    date: "1 week ago",
    rating: 5,
    title: "Amazing customer service",
    excerpt: "From booking to completion, excellent communication throughout.",
    fullReview:
      "The customer service was exceptional from start to finish. They kept us informed at every step, answered all our questions promptly, and made the entire moving process stress-free. The team was friendly and professional.",
    avatar: "GO",
    featured: false,
    link: "",
  },
  {
    id: 7,
    name: "Ahmed Hassan",
    location: "Kaduna, Nigeria",
    date: "3 weeks ago",
    rating: 5,
    title: "Value for money",
    excerpt: "Excellent service at a very reasonable price point.",
    fullReview:
      "I was impressed by the quality of service relative to the cost. They provided great value and didn't have any hidden charges. The team worked efficiently and completed everything as promised.",
    avatar: "AH",
    featured: false,
    link: "",
  },

  {
    id: 8,
    name: "Olayinka Musa",
    location: "Lagos, Nigeria",
    date: "4 years ago",
    rating: 5,
    title: "Reliable and affordable",
    excerpt: "Very good and reliable service. Also affordable.",
    fullReview: "Very good and reliable service. Also affordable.",
    avatar: "OM",
    featured: true,
    source: "Google Reviews",
    link: "https://maps.app.goo.gl/KWdv8htXrbkktHE19",
  },
  {
    id: 9,
    name: "Emeka Nwachukwu",
    location: "Enugu, Nigeria",
    date: "2 weeks ago",
    rating: 5,
    title: "Exceeded expectations",
    excerpt: "They went above and beyond what was required.",
    fullReview:
      "Not only did they handle the move perfectly, but they also helped us with some last-minute packing and even assisted with setting up furniture in our new home. Truly exceptional service that exceeded our expectations.",
    avatar: "EN",
    featured: false,
    link: "",
  },
  {
    id: 10,
    name: "Blessing Ogbonna",
    location: "Abuja, Nigeria",
    date: "5 days ago",
    rating: 5,
    title: "Smooth interstate move",
    excerpt: "Made our long-distance move incredibly smooth and organized.",
    fullReview:
      "Moving from Lagos to Abuja seemed daunting, but this team made it look easy. They coordinated everything perfectly, kept our items safe during the long journey, and delivered everything on time. Excellent interstate moving service.",
    avatar: "BO",
    featured: false,
    link: "",
  },
];
