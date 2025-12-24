// src/data/content.js
import bannerOne from "../assets/picture/banner-1.svg";
import bannerTwo from "../assets/picture/banner-2.svg";
import bannerThree from "../assets/picture/banner-3.svg";

export const googleFormUrl = "https://forms.gle/placeholder-form";

export const heroSlides = [
  {
    title: "Synapse BPKIHS -2026",
    caption:
      "Three nights of adrenaline at BPKIHS. Sports stadium roars, culture dazzles, friendships spark.",
    image: bannerOne,
    link: { href: "/registration", label: "Register now" },
  },
  {
    title: "Where medicine meets music",
    caption:
      "Students, artists, and athletes converge for the ultimate campus festival in Dharan.",
    image: bannerTwo,
    link: { href: "/events", label: "Browse events" },
  },
  {
    title: "Compete. Create. Celebrate.",
    caption:
      "Literature slams, cultural showcases, and the most electric sports line-up yet.",
    image: bannerThree,
    link: { href: "/about", label: "Learn the story" },
  },
];

export const socialLinks = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/synapsebpkihs2026",
    handle: "@synapsebpkihs2026",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/synapsebpkihs2026",
    handle: "facebook.com/synapsebpkihs2026",
  },
];

export const featuredSocials = [
  {
    platform: "Instagram",
    title: "Instagram update 01",
    url: "https://www.instagram.com/synapsebpkihs2026",
    handle: "@synapsebpkihs2026",
    blurb: "Latest highlights, stories, and announcements.",
    embedUrl: "https://www.instagram.com/synapsebpkihs2026/embed",
    image:
      "https://images.unsplash.com/photo-1453745558060-956c8f51f9df?auto=format&fit=crop&w=900&q=80",
  },
  {
    platform: "Instagram",
    title: "Instagram update 02",
    url: "https://www.instagram.com/synapsebpkihs2026",
    handle: "@synapsebpkihs2026",
    blurb: "Fresh reels and crowd moments from Synapse 2026.",
    embedUrl: "https://www.instagram.com/synapsebpkihs2026/embed",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    platform: "Facebook",
    title: "Facebook update 01",
    url: "https://www.facebook.com/synapsebpkihs2026",
    handle: "facebook.com/synapsebpkihs2026",
    blurb: "Updates, schedules, and community posts.",
    embedUrl:
      "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsynapsebpkihs2026&tabs=timeline&width=500&height=320&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false",
    image:
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=900&q=80",
  },
  {
    platform: "Facebook",
    title: "Facebook update 02",
    url: "https://www.facebook.com/synapsebpkihs2026",
    handle: "facebook.com/synapsebpkihs2026",
    blurb: "More community updates and event recaps.",
    embedUrl:
      "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsynapsebpkihs2026&tabs=timeline&width=500&height=320&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80",
  },
];

/**
 * Rich category format (feature branch)
 * - Great for cards/grids with images, venue, dates
 */
export const EVENT_CATEGORIES = [
  {
    id: "literature",
    title: "Literature Events",
    highlight: false,
    events: [
      {
        name: "Quiz Competition",
        description:
          "Analytical and intellectual contest fostering campus-wide interaction.",
        date: "Schedule TBA",
        venue: "Academic Block",
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Painting Competition",
        description:
          "Creative canvas to showcase artistic skills through visual media.",
        date: "Schedule TBA",
        venue: "Art Studio",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Poem Recitation",
        description:
          "Poetry performance celebrating language, rhythm, and expression.",
        date: "Schedule TBA",
        venue: "Amphitheatre",
        image:
          "https://images.unsplash.com/photo-1520095972714-909e91b038e0?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Story Writing Competition",
        description:
          "Narrative writing showcase for storytellers and imaginative voices.",
        date: "Schedule TBA",
        venue: "Library Hall",
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Debate Competition",
        description:
          "Critical thinking and structured argumentation on center stage.",
        date: "Schedule TBA",
        venue: "Auditorium A",
        image:
          "https://images.unsplash.com/photo-1527254059249-faa130779329?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Open Mic",
        description:
          "Open platform for poetry, storytelling, music, and spoken word.",
        date: "Evening Spotlight",
        venue: "Lit Lounge",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "culture",
    title: "Cultural Events",
    highlight: false,
    events: [
      {
        name: "Inauguration Ceremony & Ramp Walk",
        description:
          "Official opening featuring a dazzling runway and live performances.",
        date: "Opening Night",
        venue: "Main Plaza",
        image:
          "https://images.unsplash.com/photo-1496747611180-206a5c8c88cd?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "DJ Night & Mask Party",
        description: "Grand finale with signature DJ sets and a mask party theme.",
        date: "Closing Night",
        venue: "Arena Deck",
        image:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Bhajan Night",
        description: "Devotional music evening at the BPKIHS Mandir.",
        date: "Twilight Session",
        venue: "BPKIHS Mandir",
        image:
          "https://images.unsplash.com/photo-1429371527702-1bfdc0eeea7d?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Unleashing Talents: Open Mic",
        description:
          "Relaxed platform with a tribute segment for heartfelt performances.",
        date: "Night Lounge",
        venue: "Cultural Dome",
        image:
          "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Inter-College Dancing & Singing",
        description:
          "Competitive performances showcasing music and choreography.",
        date: "Prime Time",
        venue: "Main Stage",
        image:
          "https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "sports",
    title: "Sports Events",
    highlight: true,
    events: [
      {
        name: "Outdoor Sports",
        description:
          "Football, Cricket, Basketball, Volleyball, and Lawn Tennis across singles and doubles formats where applicable.",
        date: "Multi-day league",
        venue: "BPKIHS Grounds",
        image:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Athletics Meet",
        description:
          "Sprints (100m, 200m), Relay (4×100m), Long Distance (5 km), Long Jump, Triple Jump, Shot Put, Javelin Throw.",
        date: "Track finals schedule TBA",
        venue: "Stadium Track",
        image:
          "https://images.unsplash.com/photo-1502810190503-8303352f6bcd?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Indoor & E-Sports Arena",
        description:
          "Table Tennis, Badminton, Chess, Carrom, and e-sports titles like PUBG Mobile, Free Fire, DOTA, FIFA, Mobile Legends.",
        date: "Arena brackets",
        venue: "Indoor Arena & Innovation Hub",
        image:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

/**
 * Compact category format (main branch)
 * - Keep this so pages/components expecting id/fee/desc do not break.
 */
export const compactEvents = [
  {
    id: "literature",
    title: "Literature",
    blurb: "Debate, poetry, stories and quizzes — bring your words to life.",
    events: [
      {
        id: "quiz",
        name: "Quiz Competition",
        fee: "NPR —",
        desc: "Test analytical and intellectual ability with teams from across colleges.",
      },
      {
        id: "painting",
        name: "Painting Competition",
        fee: "NPR —",
        desc: "Express creativity through visual storytelling.",
      },
      {
        id: "poem",
        name: "Poem Recitation",
        fee: "NPR —",
        desc: "Showcase linguistic flair and expression through poetry performance.",
      },
      {
        id: "debate",
        name: "Debate Competition",
        fee: "NPR —",
        desc: "Structured arguments, sharp thinking, and strong public speaking.",
      },
      {
        id: "story",
        name: "Story Writing Competition",
        fee: "NPR —",
        desc: "Craft compelling narratives with originality and style.",
      },
      {
        id: "openmic-lit",
        name: "Open Mic (Literary)",
        fee: "NPR —",
        desc: "A relaxed stage for poetry, spoken word, and creative expression.",
      },
    ],
  },
  {
    id: "culture",
    title: "Culture",
    blurb: "Music, dance, ramp walk — celebrate the spirit of Synapse.",
    events: [
      {
        id: "bhajan",
        name: "Bhajan Night",
        fee: "NPR —",
        desc: "An evening of devotional music at the BPKIHS Mandir.",
      },
      {
        id: "inaug",
        name: "Inauguration Ceremony & Ramp Walk",
        fee: "NPR —",
        desc: "Opening ceremony with fashion and celebration.",
      },
      {
        id: "intercollege",
        name: "Inter-College Dancing & Singing",
        fee: "NPR —",
        desc: "Competitive performances by teams from multiple institutions.",
      },
      {
        id: "openmic-cultural",
        name: "Unleashing Talents: Open Mic",
        fee: "NPR —",
        desc: "Showcase talent in a relaxed performance setting.",
      },
      {
        id: "dj",
        name: "DJ Night & Mask Party",
        fee: "NPR —",
        desc: "High-energy night to wrap the fest in style.",
      },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    blurb: "From stadium to e-sports — compete, connect, conquer.",
    events: [
      { id: "football", name: "Football (Outdoor)", fee: "NPR —", desc: "Team field event." },
      { id: "cricket", name: "Cricket (Outdoor)", fee: "NPR —", desc: "Team field event." },
      {
        id: "basketball",
        name: "Basketball (Outdoor)",
        fee: "NPR —",
        desc: "Team field event.",
      },
      {
        id: "volleyball",
        name: "Volleyball (Outdoor)",
        fee: "NPR —",
        desc: "Team field event.",
      },
      {
        id: "tennis",
        name: "Lawn Tennis (Singles/Doubles)",
        fee: "NPR —",
        desc: "Outdoor racket event in singles and doubles.",
      },
      {
        id: "badminton",
        name: "Badminton (Singles/Doubles)",
        fee: "NPR —",
        desc: "Indoor racket event in singles and doubles.",
      },
      {
        id: "tabletennis",
        name: "Table Tennis (Singles/Doubles)",
        fee: "NPR —",
        desc: "Fast indoor competition.",
      },
      { id: "chess", name: "Chess", fee: "NPR —", desc: "Brains-on-board." },
      { id: "carrom", name: "Carrom", fee: "NPR —", desc: "Indoor classic." },
    ],
  },
];

export const eventCategories = EVENT_CATEGORIES;

export const sportsCategories = [
  {
    slug: "outdoor-sports",
    title: "Outdoor Sports",
    description:
      "Full-field games and court showdowns with both singles and doubles formats where applicable.",
    items: ["Football", "Cricket", "Basketball", "Volleyball", "Lawn Tennis"],
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Tactical team play and long rallies across football pitches, cricket creases, basketball courts, volleyball nets, and tennis baselines.",
  },
  {
    slug: "athletics",
    title: "Athletics",
    description: "Track-and-field challenges that reward speed, stamina, and technique.",
    items: [
      "Sprint (100m, 200m)",
      "Relay (4×100m)",
      "Long Distance (5 km)",
      "Long Jump",
      "Triple Jump",
      "Shot Put",
      "Javelin Throw",
    ],
    image:
      "https://images.unsplash.com/photo-1502810190503-8303352f6bcd?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Race-day heats, baton exchanges, powerful throws, and precision jumps under the stadium lights.",
  },
  {
    slug: "indoor-sports",
    title: "Indoor Sports",
    description: "Fast-paced rallies and board strategy within the indoor arena.",
    items: ["Table Tennis (Singles / Doubles)", "Badminton (Singles / Doubles)", "Chess", "Carrom"],
    image:
      "https://images.unsplash.com/photo-1485395578879-6ba080eeaea5?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Close-quarters excitement with racket duels, tactical chess endgames, and friendly carrom battles.",
  },
  {
    slug: "e-sports",
    title: "E-Sports",
    description: "Digital arenas with casters, squads, and knockout brackets.",
    items: ["PUBG Mobile", "Free Fire", "DOTA", "FIFA", "Mobile Legends"],
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Multiplayer showdowns across battle royale, MOBA, football, and mobile legends categories.",
  },
  {
    slug: "special-recreational",
    title: "Special / Recreational Events",
    description: "Light-hearted showcases and exhibition matches curated during the festival.",
    items: ["Curated on-demand to keep the festival buzzing"],
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Fun-first experiences that keep the campus energized between marquee fixtures.",
  },
];

export const registrationRules = [
  {
    title: "Basic Registration (BR ID Card)",
    points: [
      "Registration is mandatory for all participants and attendees to enter the BPKIHS campus.",
      "The BR ID Card must be collected from the Central Registration Desk after completing registration.",
    ],
  },
  {
    title: "Code of Conduct",
    points: [
      "All participants and guests must maintain respectful and responsible behavior at all times.",
      "Any form of abuse, violence, harassment, or non-compliance with the organizing committee or security personnel will result in immediate eviction.",
    ],
  },
  {
    title: "Access to Events",
    points: [
      "The BR ID Card allows access to informal and free-entry events.",
      "Ticketed, competitive, or special events require separate registration or passes.",
    ],
  },
  {
    title: "Seating & Entry Policy",
    points: [
      "Entry to certain events will follow a first-come, first-served basis due to limited capacity.",
      "Attendees must cooperate with event staff and security personnel.",
    ],
  },
  {
    title: "Prohibited Activities",
    points: [
      "Alcohol consumption, smoking, substance abuse, and littering are strictly prohibited.",
      "Violations may result in disciplinary action or removal from the festival.",
    ],
  },
  {
    title: "Restricted Zones",
    points: [
      "Access to stages, performance zones, and operational areas is limited to authorized personnel only.",
      "Barricades and access-control markings must be respected.",
    ],
  },
  {
    title: "ID Compliance",
    points: [
      "The BR ID Card must be worn visibly at all times within the campus.",
      "Failure to present a valid ID may result in denial of entry.",
    ],
  },
  {
    title: "Authority of the Organizing Committee",
    points: [
      "The organizing committee reserves the right to modify rules, deny entry, or take disciplinary action in the interest of safety and smooth conduct.",
    ],
  },
  {
    title: "Note",
    points: ["Compliance with these rules ensures a safe and enjoyable Synapse 2026 experience."],
  },
];

export const idCardSections = [
  {
    title: "Purpose of the BR ID Card",
    points: [
      "Serves as the official identity of every Synapse participant and attendee",
      "Ensures security, verification, and access control",
      "Grants access to designated Synapse venues",
    ],
  },
  {
    title: "How to Obtain the BR ID Card",
    points: [
      "Online Registration: All participants must complete Basic Registration through the official Synapse 2026 registration platform.",
      "On-Campus Verification & Issuance: Participants must report to the Central Registration Desk upon arrival.",
      "Required documents: Valid College ID Card and registration confirmation (digital or printed). After verification, the BR ID Card will be issued.",
    ],
  },
  {
    title: "Disciplinary Note",
    points: [
      "Misuse, duplication, or tampering with the BR ID Card will lead to immediate disqualification and disciplinary action.",
    ],
  },
  {
    title: "Rules & Regulations Regarding ID Card",
    points: [
      "Mandatory visible wear at all times",
      "Allows spectating of most events",
      "Does not automatically register participants for competitions",
      "No replacement for lost or damaged cards",
    ],
  },
];

export const teamSections = [
  {
    title: "Organizing Committee (Synapse 2026)",
    members: [
      {
        name: "Prajwal Bikram Khand",
        role: "Organizing Chairperson",
      },
      {
        name: "Secretariat, Students’ Welfare Society",
        role: "Organizing Secretary",
      },
      {
        name: "Dr. Thaneshwor Prasad Joshi",
        role: "Organizing Treasure",
      },
    ],
  },
  {
    title: "Sub-committee: Culture",
    members: [
      {
        name: "Dr. Hrithik Raj Paswan",
        role: "Lead",
      },
      {
        name: "Rikesh Pandit",
        role: "Co-Lead",
      },
      {
        name: "Anusha Maratha",
        role: "Co-Lead",
      },
      {
        name: "Kritika Ranabhat",
        role: "Co-Lead",
      },
      {
        name: "Priya Rai",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Sub-committee: Literature",
    members: [
      {
        name: "Aarjav Sharma",
        role: "Lead",
      },
      {
        name: "Siddharth Bagale",
        role: "Co-Lead",
      },
      {
        name: "Shikha Awasthi",
        role: "Co-Lead",
      },
      {
        name: "Shashank Kashyap",
        role: "Co-Lead",
      },
      {
        name: "Iksha Khatiwada",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Sub-committee: Fooding",
    members: [
      {
        name: "Abhishek Basnet",
        role: "Lead",
      },
      {
        name: "Rahul Kr. Sah",
        role: "Co-Lead",
      },
      {
        name: "Suman Kumar Yadav",
        role: "Co-Lead",
      },
      {
        name: "Nisha Kumari Sah",
        role: "Co-Lead",
      },
      {
        name: "Abhishek Mahato",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Sub-committee: Registration",
    members: [
      {
        name: "Smita Paudel",
        role: "Lead",
      },
      {
        name: "Yaman Basnet",
        role: "Co-Lead",
      },
      {
        name: "Abinash Kr. Yadav",
        role: "Co-Lead",
      },
      {
        name: "Sani Hang Phago",
        role: "Co-Lead",
      },
      {
        name: "Susma Basnet",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Sub-committee: Logistic",
    members: [
      {
        name: "Safal Chettri",
        role: "Lead",
      },
      {
        name: "Yatendra Yadav",
        role: "Co-Lead",
      },
      {
        name: "Sajina Dahal",
        role: "Co-Lead",
      },
      {
        name: "Sumit Kumar Pandit",
        role: "Co-Lead",
      },
      {
        name: "Raman Kr. Jha",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Sub-committee: Lodging",
    members: [
      {
        name: "Abhay Shukla",
        role: "Lead",
      },
      {
        name: "Asan Yadav",
        role: "Co-Lead",
      },
      {
        name: "Aroza Khatri Chetri",
        role: "Co-Lead",
      },
      {
        name: "Suraj Kumar Das",
        role: "Co-Lead",
      },
      {
        name: "Arjun Yadav",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Sub-committee: Sponsorship",
    members: [
      {
        name: "Ishwar Tiwari",
        role: "Lead",
      },
      {
        name: "Praveen Bhattrai",
        role: "Co-Lead",
      },
      {
        name: "Binam Jung Mahat",
        role: "Co-Lead",
      },
      {
        name: "Bikram Sah",
        role: "Co-Lead",
      },
      {
        name: "Bipina Basnet",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Sub-committee: IT Team",
    members: [
      {
        name: "Dr. Karan Kumar Yadav",
        role: "Lead",
      },
      {
        name: "Dr. Suyog Jha",
        role: "Co-Lead",
      },
      {
        name: "Sweksha Niraula",
        role: "Co-Lead",
      },
      {
        name: "Manish Mehta",
        role: "Co-Lead",
      },
      {
        name: "Prabha Panthi",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Sub-committee: Sports",
    members: [
      {
        name: "Prashant Shahi",
        role: "Lead",
      },
      {
        name: "Milan Thapa",
        role: "Co-Lead",
      },
      {
        name: "Salomit Subba",
        role: "Co-Lead",
      },
      {
        name: "Nitesh Shrestha",
        role: "Co-Lead",
      },
      {
        name: "Sailendra Khatri",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Students’ Welfare Society Office Bearers (Left Panel)",
    members: [
      {
        name: "Nabraj Kumar Dev",
        role: "President",
      },
      {
        name: "Dr. Om Shanti Rajak",
        role: "IPP",
      },
      {
        name: "MD. Mahamood Nuree",
        role: "Senior Vice-President",
      },
      {
        name: "Dr. Bishal Gurung",
        role: "Vice President",
      },
      {
        name: "Sadikshya Neupane",
        role: "Vice President",
      },
      {
        name: "Kantipur Bastola",
        role: "Vice President",
      },
      {
        name: "Nagendra Yadav",
        role: "Vice President",
      },
      {
        name: "Subin Kumar Sah",
        role: "General Secretary",
        description: "Phone: 9814805523 • Phone: 9844420535",
      },
      {
        name: "Ram Udgar Yadav",
        role: "Secretary",
      },
      {
        name: "Dr. Hardik Goyal",
        role: "Treasurer",
      },
    ],
  },
  {
    title: "Students’ Welfare Society Members",
    members: [
      {
        name: "Dr. Amol Kumar Yadav",
        role: "Member",
      },
      {
        name: "Dr. Bishnu Kharel",
        role: "Member",
      },
      {
        name: "Dr. Tarannum Bano",
        role: "Member",
      },
      {
        name: "Rachana Puri",
        role: "Member",
      },
      {
        name: "Jiwan Narayan K. Chauhan",
        role: "Member",
      },
      {
        name: "MD. Asrarul Ansari",
        role: "Member",
      },
      {
        name: "Sandip B.K.",
        role: "Member",
      },
      {
        name: "Satarohan Yadav",
        role: "Member",
      },
      {
        name: "Shudib Shoni",
        role: "Member",
      },
      {
        name: "Sakrila Ghale Gurung",
        role: "Member",
      },
      {
        name: "Bhabishya Bista",
        role: "Member",
      },
      {
        name: "Bijay Kumar Yadav",
        role: "Member",
      },
      {
        name: "Gotri Nath",
        role: "Member",
      },
      {
        name: "Pratibha Yadav",
        role: "Member",
      },
      {
        name: "Praveen Bhattarai",
        role: "Member",
      },
      {
        name: "Yatendra Yadav",
        role: "Member",
      },
      {
        name: "Arjun Yadav",
        role: "Member",
      },
    ],
  },
  {
    title: "Sub-committee: IT Team",
    members: [
      {
        name: "Dr. Karan Kumar Yadav",
        role: "Lead",
      },
      {
        name: "Dr. Suyog Jha",
        role: "Co-Lead",
      },
      {
        name: "Sweksha Niraula",
        role: "Co-Lead",
      },
      {
        name: "Manish Mehta",
        role: "Co-Lead",
      },
      {
        name: "Prabha Panthi",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Sub-committee: Sports",
    members: [
      {
        name: "Prashant Shahi",
        role: "Lead",
      },
      {
        name: "Milan Thapa",
        role: "Co-Lead",
      },
      {
        name: "Salomit Subba",
        role: "Co-Lead",
      },
      {
        name: "Nitesh Shrestha",
        role: "Co-Lead",
      },
      {
        name: "Sailendra Khatri",
        role: "Co-Lead",
      },
    ],
  },
  {
    title: "Students’ Welfare Society Office Bearers (Left Panel)",
    members: [
      {
        name: "Nabraj Kumar Dev",
        role: "President",
      },
      {
        name: "Dr. Om Shanti Rajak",
        role: "IPP",
      },
      {
        name: "MD. Mahamood Nuree",
        role: "Senior Vice-President",
      },
      {
        name: "Dr. Bishal Gurung",
        role: "Vice President",
      },
      {
        name: "Sadikshya Neupane",
        role: "Vice President",
      },
      {
        name: "Kantipur Bastola",
        role: "Vice President",
      },
      {
        name: "Nagendra Yadav",
        role: "Vice President",
      },
      {
        name: "Subin Kumar Sah",
        role: "General Secretary",
        description: "Phone: 9814805523 • Phone: 9844420535",
      },
      {
        name: "Ram Udgar Yadav",
        role: "Secretary",
      },
      {
        name: "Dr. Hardik Goyal",
        role: "Treasurer",
      },
    ],
  },
  {
    title: "Students’ Welfare Society Members",
    members: [
      {
        name: "Dr. Amol Kumar Yadav",
        role: "Member",
      },
      {
        name: "Dr. Bishnu Kharel",
        role: "Member",
      },
      {
        name: "Dr. Tarannum Bano",
        role: "Member",
      },
      {
        name: "Rachana Puri",
        role: "Member",
      },
      {
        name: "Jiwan Narayan K. Chauhan",
        role: "Member",
      },
      {
        name: "MD. Asrarul Ansari",
        role: "Member",
      },
      {
        name: "Sandip B.K.",
        role: "Member",
      },
      {
        name: "Satarohan Yadav",
        role: "Member",
      },
      {
        name: "Shudib Shoni",
        role: "Member",
      },
      {
        name: "Sakrila Ghale Gurung",
        role: "Member",
      },
      {
        name: "Bhabishya Bista",
        role: "Member",
      },
      {
        name: "Bijay Kumar Yadav",
        role: "Member",
      },
      {
        name: "Gotri Nath",
        role: "Member",
      },
      {
        name: "Pratibha Yadav",
        role: "Member",
      },
      {
        name: "Praveen Bhattarai",
        role: "Member",
      },
      {
        name: "Yatendra Yadav",
        role: "Member",
      },
      {
        name: "Arjun Yadav",
        role: "Member",
      },
    ],
  },
  {
    title: "Students’ Welfare Society Members",
    members: [
      {
        name: "Dr. Amol Kumar Yadav",
        role: "Member",
      },
      {
        name: "Dr. Bishnu Kharel",
        role: "Member",
      },
      {
        name: "Dr. Tarannum Bano",
        role: "Member",
      },
      {
        name: "Rachana Puri",
        role: "Member",
      },
      {
        name: "Jiwan Narayan K. Chauhan",
        role: "Member",
      },
      {
        name: "MD. Asrarul Ansari",
        role: "Member",
      },
      {
        name: "Sandip B.K.",
        role: "Member",
      },
      {
        name: "Satarohan Yadav",
        role: "Member",
      },
      {
        name: "Shudib Shoni",
        role: "Member",
      },
      {
        name: "Sakrila Ghale Gurung",
        role: "Member",
      },
      {
        name: "Bhabishya Bista",
        role: "Member",
      },
      {
        name: "Bijay Kumar Yadav",
        role: "Member",
      },
      {
        name: "Gotri Nath",
        role: "Member",
      },
      {
        name: "Pratibha Yadav",
        role: "Member",
      },
      {
        name: "Praveen Bhattarai",
        role: "Member",
      },
      {
        name: "Yatendra Yadav",
        role: "Member",
      },
      {
        name: "Arjun Yadav",
        role: "Member",
        name: "Subin Kumar Sah",
        role: "General Secretary",
        description: "Phone: 9814805523 • Phone: 9844420535",
      },
      { name: "Ram Udgar Yadav", role: "Secretary" },
      { name: "Dr. Hardik Goyal", role: "Treasurer" },
    ],
  },
  {
    title: "Students’ Welfare Society Members",
    members: [
      { name: "Dr. Amol Kumar Yadav", role: "Member" },
      { name: "Dr. Bishnu Kharel", role: "Member" },
      { name: "Dr. Tarannum Bano", role: "Member" },
      { name: "Rachana Puri", role: "Member" },
      { name: "Jiwan Narayan K. Chauhan", role: "Member" },
      { name: "MD. Asrarul Ansari", role: "Member" },
      { name: "Sandip B.K.", role: "Member" },
      { name: "Satarohan Yadav", role: "Member" },
      { name: "Shudib Shoni", role: "Member" },
      { name: "Sakrila Ghale Gurung", role: "Member" },
      { name: "Bhabishya Bista", role: "Member" },
      { name: "Bijay Kumar Yadav", role: "Member" },
      { name: "Gotri Nath", role: "Member" },
      { name: "Pratibha Yadav", role: "Member" },
      { name: "Praveen Bhattarai", role: "Member" },
      { name: "Yatendra Yadav", role: "Member" },
      { name: "Arjun Yadav", role: "Member" },
    ],
  },
];

import bpkihsLogo from "../assets/bpkihs-logo.jpeg";
import swsLogo from "../assets/student-welfare-society.jpeg";
import synapseLogo from "../assets/synapse-2026-logo.jpeg";

export const aboutSections = [
  {
    title: "BPKIHS",
    body: "Institute powering healthcare education, research, and community service across eastern Nepal.",
    longDescription:
      "B.P. Koirala Institute of Health Sciences (BPKIHS) stands as a premier autonomous health science university in eastern Nepal. It brings together medical education, cutting-edge research, and compassionate clinical services that uplift the surrounding communities. From its campus in Dharan, BPKIHS nurtures future healthcare leaders and collaborates globally to advance public health initiatives.",
    logo: bpkihsLogo,
  },
  {
    title: "Student Welfare Society",
    body: "Student-led body that shapes campus culture, support, and memorable experiences.",
    longDescription:
      "The Student Welfare Society (SWS) is the heartbeat of campus life, championing student voices and well-being. It organizes cultural showcases, social outreach, and mentoring support so every student feels included. SWS steers collaborative initiatives with faculty and administration to keep the campus vibrant, supportive, and ready for landmark events like Synapse.",
    logo: swsLogo,
  },
  {
    title: "Synapse 2026",
    body: "Festival that fuses sports, culture, and creativity under one electric roof.",
    longDescription:
      "Synapse 2026 is the flagship festival where BPKIHS and SWS unite to celebrate talent across athletics, performing arts, and innovation. It spotlights inter-college competitions, immersive concerts, and community gatherings that draw visitors from across the region. The 2026 edition promises bold production, inclusive participation, and unforgettable nights on campus.",
    logo: synapseLogo,
  },
];
