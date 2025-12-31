// src/data/content.js
import bannerOne from "../assets/picture/banner-1.svg";
import bannerTwo from "../assets/picture/banner-2.svg";
import bannerThree from "../assets/picture/banner-3.svg";

export const googleFormUrl = null;

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

export const socialSpotlightPosts = [
  {
    platform: "Instagram",
    title: "Synapse highlight: Opening week",
    description: "A first look at the energy building across campus.",
    url: "https://www.instagram.com/p/DSpNvuXitw1/",
    embedUrl: "https://www.instagram.com/p/DSpNvuXitw1/embed",
    previewImage: "https://www.instagram.com/p/DSpNvuXitw1/media/?size=l",
  },
  {
    platform: "Instagram",
    title: "Synapse spotlight: Crowd moments",
    description: "Cheers, colors, and the festival buzz in motion.",
    url: "https://www.instagram.com/p/DRRX2DBAAwf/",
    embedUrl: "https://www.instagram.com/p/DRRX2DBAAwf/embed",
    previewImage: "https://www.instagram.com/p/DRRX2DBAAwf/media/?size=l",
  },
  {
    platform: "Instagram",
    title: "Synapse spotlight: Sports nights",
    description: "A preview of the matchups and late-night rallies ahead.",
    url: "https://www.instagram.com/p/DRFLRPNiiXs/",
    embedUrl: "https://www.instagram.com/p/DRFLRPNiiXs/embed",
    previewImage: "https://www.instagram.com/p/DRFLRPNiiXs/media/?size=l",
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
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Race-day heats, baton exchanges, powerful throws, and precision jumps under the stadium lights.",
  },
  {
    slug: "indoor-sports",
    title: "Indoor Sports",
    description: "Fast-paced rallies and board strategy within the indoor arena.",
    items: ["Table Tennis (Singles / Doubles)", "Badminton (Singles / Doubles)", "Chess", "Carrom"],
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
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

export const synapseOverview = {
  title: "Synapse 2026",
  host: "B. P. Koirala Institute of Health Sciences (BPKIHS)",
  location: "Dharan, Nepal",
  dates: "January 30 to February 7, 2026",
  tagline:
    "Nepal’s largest inter-medical college meet celebrating sports, intellect, creativity, and culture.",
  summary:
    "Synapse unites medical students nationwide for a week of healthy competition, leadership, teamwork, and cultural harmony across sports, arts, and social responsibility.",
};

export const keyDates = {
  openingCeremony: "January 30, 2026",
  closingCeremony: "February 7, 2026",
  registrationDeadline: null,
};

export const registrationInfo = {
  eligibility:
    "Open to medical and allied health science students. Valid college ID is mandatory for participation.",
  steps: [
    "Complete online registration via the official Google Form.",
    "Confirm participation by informing the organizers after registration.",
  ],
  confirmationNumbers: [],
};

export const feeCategories = [
  {
    category: "A",
    events: ["Football", "Cricket", "Basketball", "Volleyball"],
    baseFee: "2500/-",
    sameCategoryFee: "+500/-",
    differentCategoryFee: "+1000/-",
  },
  {
    category: "B",
    events: ["Futsal", "Cricksal"],
    baseFee: "2000/-",
    sameCategoryFee: "+500/-",
    differentCategoryFee: "+500/-",
  },
  {
    category: "C",
    events: [
      "Badminton",
      "Table Tennis",
      "Lawn Tennis",
      "Athletics (Sprint, Relay, Long Jump, Triple Jump, Shot Put, Javelin Throw)",
      "Gym Sports",
    ],
    baseFee: "2000/-",
    sameCategoryFee: "+500/-",
    differentCategoryFee: "+500/-",
  },
  {
    category: "D",
    events: ["Chess", "Carrom", "E-sports (Free Fire, PUBG Mobile)", "Indoor Games"],
    baseFee: "1500/-",
    sameCategoryFee: "+250/-",
    differentCategoryFee: "+250/-",
  },
  {
    category: "E",
    events: [
      "Literature Events",
      "Cultural Events (registration required only for dance and singing)",
    ],
    baseFee: "1500/-",
    sameCategoryFee: "+250/-",
    differentCategoryFee: "+250/-",
  },
];

export const feeNotes = [
  "Each category has a base (individual) registration fee.",
  "Base registration is determined by the highest category selected (A > B > C > D > E).",
  "If you choose one more event from the same category, pay the same-category additional fee.",
  "If you choose one more event from a different category, pay the different-category additional fee.",
  "Participation in the Fashion Show Night (Day 1 Cultural Event) is mandatory for all participants.",
  "All participants must bring traditional/cultural attire for Bhajan Night (Day 2 Cultural Event).",
];

export const paymentInfo = {
  methods: ["Cash payment", "Bank transfer"],
  accountName: null,
  accountNumber: null,
  securityDeposit:
    "Each college should deposit Rs. 10,000/- as a security deposit, refundable after clearance.",
};

export const logisticsInfo = {
  accommodation: [
    "Accommodation details will be communicated in due course.",
    "A list of available lodging options will be provided by the organizing committee.",
    "For accommodation assistance, contact Abhay Shukla (986-3079433).",
  ],
  transportation: [
    "Transportation will be arranged from committee-organized accommodations to the event venue.",
  ],
  food: [
    "Participants will bear their own food expenses.",
    "A canteen facility providing lunch and dinner will be available on campus.",
    "Additional food outlets are available within the college premises and nearby.",
  ],
};

export const sportsRules = [
  {
    name: "Football",
    category: "Male",
    sections: [
      {
        title: "Rules",
        items: [
          "Maximum of 2 teams per college.",
          "Each team consists of 18 players (11 starting + 7 substitutes).",
          "Tournament format will include group stages and/or knockout rounds depending on total teams and weather.",
          "Teams must arrive at the venue at least 45 minutes before scheduled kick-off.",
          "Matches follow FIFA laws; referee’s decision is final and binding.",
          "Every team must wear its own jersey with visible jersey numbers.",
          "Added or stoppage time will be determined and announced by the referee.",
          "Knockout ties will be decided by penalty shootout or extra time as per referee.",
          "Fines: Rs. 100 per yellow card and Rs. 200 per red card.",
          "Match venues, schedules, and additional rules will be shared with registered teams.",
        ],
      },
    ],
  },
  {
    name: "Futsal",
    category: "Male, Female",
    sections: [
      {
        title: "Rules",
        items: [
          "Each team consists of 10 players (7 + 3 substitutes).",
          "Matches are knockout under standard futsal/FIFA rules unless notified otherwise.",
          "Teams must report at least 45 minutes prior to scheduled kick-off.",
          "Decisions by match officials and organizers are final and binding.",
        ],
      },
    ],
  },
  {
    name: "Cricket",
    category: "Boys",
    sections: [
      {
        title: "Rules",
        items: [
          "Each team consists of 16 players (11 playing + 5 extras).",
          "Each team must have jerseys with player numbers.",
          "Competition will be league or knockout depending on team count.",
          "Initial games: 12–14 overs; semifinals: 16 overs; final: 20 overs.",
          "Played with a leather (dues) ball.",
          "Innings break is 10 minutes.",
          "Medical support will be provided.",
          "Fixtures announced after team registration closes.",
          "Teams must be present at least 30 minutes before the allotted time or risk disqualification.",
          "Matches follow ICC rules; umpire’s decision is final.",
        ],
      },
    ],
  },
  {
    name: "Cricksal",
    category: "Girls",
    sections: [
      {
        title: "Rules",
        items: [
          "One team per college.",
          "Each team consists of 8 players (6 + 2).",
          "Played with a tennis ball.",
          "Format will be league or knockout depending on team count.",
          "Innings break is 5 minutes.",
          "All games except the final (8 overs) are 6 overs.",
          "Matches follow ICC rules; organizers’ decision is final.",
        ],
      },
    ],
  },
  {
    name: "Basketball",
    category: "Male, Female",
    sections: [
      {
        title: "Rules",
        items: [
          "Each team consists of 10 players (5 playing + 5 substitutes).",
          "League or knockout format depending on team count.",
          "Four quarters of 7 minutes in league matches; 10 minutes from semifinals onward.",
          "Extra time of 5 minutes if tied until a winner is decided.",
          "Officials include referees, scorer, and timekeeper.",
          "Each team must have jerseys with numbers.",
          "Match timings will be informed prior to the match.",
          "Substitutions allowed during stoppage with referee permission.",
          "Teams must be present before the allotted time or risk disqualification.",
          "Matches follow FIBA rules; officials’ decision is final.",
        ],
      },
    ],
  },
  {
    name: "Badminton",
    category: "Boys, Girls",
    sections: [
      {
        title: "Events",
        items: [
          "Singles: Maximum 2 participants per college (boys) and 2 participants (girls).",
          "Doubles: Maximum 2 teams per college (boys) and 2 teams (girls).",
        ],
      },
      {
        title: "Rules",
        items: [
          "Matches follow Badminton World Federation rules; referee’s decision is final.",
          "Format: group stage and knockouts or as decided by the organizers.",
          "Venue: BPKIHS court or as decided by organizers.",
          "Played with MAVI 350 shuttles.",
        ],
      },
    ],
  },
  {
    name: "Volleyball",
    category: "Male, Female",
    sections: [
      {
        title: "Rules",
        items: [
          "Each team consists of 9 players (6 playing + 3 substitutes).",
          "Best of 3 sets; finals are best of 5 sets.",
          "League or knockout format depending on team count.",
          "Each team must have jerseys with numbers.",
          "Match timings will be informed prior to the match.",
          "Teams must be present before the allotted time or risk disqualification.",
          "Players rotate clockwise when winning the right to serve.",
          "Officials include first referee, second referee, scorer, and line judges.",
          "Matches follow national volleyball rules; officials’ decision is final.",
        ],
      },
    ],
  },
  {
    name: "Table Tennis",
    category: "Male, Female",
    sections: [
      {
        title: "Events",
        items: [
          "Singles: Maximum 8 participants per college (4 male + 4 female).",
          "Doubles: 2 female teams + 2 male teams per college.",
          "Mixed Doubles: 1 pair per college.",
        ],
      },
      {
        title: "Rules",
        items: [
          "Players may bring their own bats; bats will also be provided by organizers.",
          "Organizing committee’s decision is final in case of disputes.",
        ],
      },
    ],
  },
  {
    name: "Lawn Tennis",
    category: "Open",
    sections: [
      {
        title: "Rules",
        items: [
          "Open to medical and allied health science students aged 18–30 years.",
          "Valid college ID mandatory; participants must be medically fit.",
          "Individual registration per event; multiple events allowed.",
          "Registration fee is non-refundable; on-spot entry subject to availability.",
          "Proper sports attire compulsory; supportive gear allowed.",
          "All events follow strict form and judging standards.",
          "No alcohol, drugs, or unsportsmanlike behavior; judges’ decision final.",
          "Spotters and medical support provided; organizers may modify rules.",
        ],
      },
    ],
  },
  {
    name: "Carrom Board",
    category: "Male, Female",
    sections: [
      {
        title: "Rules",
        items: [
          "No limit on participants per college.",
          "Winner of the toss breaks and chooses a color.",
          "First shot must cross the baseline; striker must be placed on the baseline.",
          "Pocketing your own piece continues your turn.",
          "Pocketing opponent’s piece returns it to center.",
          "Pocketing the striker is a foul and returns one of your pieces to center.",
          "Player wins by pocketing all pieces after covering the queen.",
          "Matches are played to 25 points or within a fixed time limit (e.g., 30 minutes).",
          "Organizing committee’s decision is final in case of disputes.",
        ],
      },
    ],
  },
  {
    name: "Chess",
    category: "Male, Female",
    sections: [
      {
        title: "Rules",
        items: [
          "Maximum 5 participants per college.",
          "Games are time-bounded and played on a knockout basis.",
          "Touch-move rule applies.",
          "In case of a draw, decision is made jointly by players and the organizing committee.",
          "Organizing committee’s decision is final in case of disputes.",
        ],
      },
    ],
  },
  {
    name: "Athletics",
    category: "Open",
    sections: [
      {
        title: "General Rules",
        items: [
          "Participants must report at least 30 minutes before their scheduled event.",
          "Athletes must wear proper sports uniform and bib numbers as allotted.",
          "Participants may compete only in events for which they are registered.",
          "Performance-enhancing drugs or unfair means are strictly prohibited.",
          "Athletes must follow instructions given by officials, referees, and judges.",
          "Unsportsmanlike behavior will result in disqualification.",
        ],
      },
      {
        title: "Sprint Events (100 m & 200 m)",
        items: [
          "Athletes must stay within their assigned lanes.",
          "A false start leads to immediate disqualification.",
          "The race starts only on the starter’s signal.",
        ],
      },
      {
        title: "Relay Event (4 × 100 m)",
        items: [
          "The baton must be passed within the exchange zone.",
          "Dropped batons must be retrieved without obstructing others.",
          "Each team must consist of exactly four athletes.",
        ],
      },
      {
        title: "Jumping Events (Long Jump, High Jump, Triple Jump)",
        items: [
          "A take-off is valid only when the athlete jumps before the take-off line.",
          "Distance is measured from the nearest mark made in the sand.",
          "In high jump, the bar must be cleared without knocking it off.",
          "Each athlete is allowed a fixed number of attempts as decided by organizers.",
        ],
      },
      {
        title: "Throwing Events (Shot Put, Javelin Throw)",
        items: [
          "Throws must be made from within the designated throwing area only.",
          "Athletes must not cross or touch the boundary line until the implement lands.",
          "Only official equipment approved by organizers may be used.",
          "Throws are measured from the first point of contact with the ground.",
        ],
      },
      {
        title: "Final Note",
        items: [
          "Officials’ and judges’ decisions are final and binding.",
          "Any rule not covered will be governed by standard athletics regulations.",
        ],
      },
    ],
  },
  {
    name: "Gym Sports",
    category: "Open",
    sections: [
      {
        title: "Rules",
        items: [
          "Open to medical and allied health science students aged 18–30 years.",
          "Valid college ID mandatory; participants must be medically fit.",
          "Individual registration per event; multiple events allowed.",
          "Registration fee is non-refundable; on-spot entry subject to availability.",
          "Proper gym attire compulsory; supportive gear allowed.",
          "All events follow strict form and judging standards.",
          "No alcohol, drugs, or unsportsmanlike behavior; judges’ decision final.",
          "Spotters and medical support provided; organizers may modify rules.",
        ],
      },
    ],
  },
];

export const esportsRules = [
  {
    name: "Free Fire",
    sections: [
      {
        title: "Rules",
        items: [
          "Only students of registered medical colleges may participate; valid college ID required.",
          "One player → one team → one college → one Free Fire account.",
          "Only official Garena Free Fire / Free Fire MAX (latest version) is allowed.",
          "Mobile phones only; emulators, PC, tablets, controllers, triggers, hacks, or mods are prohibited.",
          "Matches will be played in custom rooms organized by the committee.",
          "Scoring: Placement points + 1 point per kill.",
          "Champion Rush in Grand Finals (80 points + next Booyah wins).",
          "Official maps only; map selection by organizers.",
          "Cheating, misconduct, or rule violation leads to immediate disqualification.",
          "Organizers’ decisions are final and binding; schedule/rules may be modified.",
        ],
      },
    ],
  },
  {
    name: "PUBG Mobile",
    sections: [
      {
        title: "General Rules & Eligibility",
        items: [
          "Valid college ID card is mandatory for participation.",
          "Game version: PUBG Mobile (latest official global version).",
          "Squad format: 4 players + 1 substitute (optional).",
          "No player may represent more than one team.",
          "Players must use their own PUBG Mobile accounts.",
          "Guest accounts are not allowed.",
        ],
      },
      {
        title: "Tie-Breaker Rule",
        items: [
          "If two or more teams have equal total points, rank is decided by total kill points.",
          "Team with higher cumulative kills is placed higher in the standings.",
          "If the tie persists, organizers’ decision is final.",
        ],
      },
      {
        title: "Match Settings",
        items: ["Mode: Squad and TDM.", "Perspective: TPP.", "Maps: Erangel, Miramar, Sanhok."],
      },
      {
        title: "Organizer Rights",
        items: [
          "Organizers may modify rules if necessary.",
          "Organizers make final decisions in disputes.",
          "Schedules may change due to unforeseen circumstances.",
        ],
      },
    ],
  },
];

export const literatureEventsDetailed = [
  {
    title: "Short Story Writing (English & Nepali)",
    details: [
      "Theme given on the spot.",
      "Separate English and Nepali events.",
      "Time limit: 1 hour.",
      "No word limit.",
      "Participants may join both languages.",
      "No limit per college.",
    ],
  },
  {
    title: "Poetry Competition (English & Nepali)",
    details: [
      "Any topic.",
      "Submit 2 hard copies (1 hour prior).",
      "Participants may join both languages.",
      "No limit per college.",
    ],
  },
  {
    title: "Debate Competition (English & Nepali)",
    details: [
      "Topic given at venue; prep time provided.",
      "Parliamentary format; teams decided by lottery.",
      "1 team per college per language.",
      "Participants may join both languages.",
      "Offensive/slang or community-targeted words prohibited.",
    ],
  },
  {
    title: "Extempore Speech",
    details: [
      "Topic given on stage.",
      "Total time: 5 minutes.",
      "Language: English or Nepali.",
      "Offensive/slang or community-targeted words prohibited.",
      "No limit per college.",
    ],
  },
  {
    title: "Quiz",
    details: [
      "Team of 3 participants.",
      "Multiple teams allowed per college.",
      "Top 4 teams qualify for finals.",
      "Rounds include: medical, general, current affairs, audio-visual, and rapid fire.",
    ],
  },
  {
    title: "Spell Bee",
    details: [
      "Team of 3 participants.",
      "Multiple teams allowed per college.",
      "Top 4 teams qualify for finals.",
    ],
  },
  {
    title: "Photography",
    details: [
      "Theme announced later.",
      "1 photo per participant.",
      "Basic edits allowed; no filters, borders, or watermarks.",
      "Judging: 60% judges + 40% social media likes.",
      "Photos to be emailed with ID.",
      "No limit per college.",
    ],
  },
  {
    title: "Painting & Sketching",
    details: [
      "Theme given on the spot (nature/real life).",
      "Participants bring own materials.",
      "Judging: 60% judges + 40% social media response.",
      "No limit per college.",
    ],
  },
];

export const culturalSchedule = [
  {
    day: "Day 1",
    title: "हाम्रो संस्कृति, हाम्रो अभिमान – A Ramp Walk Show",
    details: [
      "Fashion show based on a theme chosen by participants.",
      "Participants must arrange costumes, makeup, and accessories.",
      "Participation open to solo performers or groups (maximum 6 participants per group).",
      "Participation is compulsory for all colleges participating in Synapse 2026.",
    ],
  },
  {
    day: "Day 2",
    title: "आराधना – A Spiritual Evening",
    details: [
      "Acoustic Bhajan session in the premises of Mandir.",
      "Interested participants can submit names for performance.",
    ],
  },
  {
    day: "Day 3 & Day 4",
    title: "ताल-ताण्डव – A Portrait of Inner Voice",
    details: [
      "Two-day talent showcase for singing and dancing performances.",
      "Solo singing performances; bands may participate with prior equipment notice.",
      "Solo and group dance performances (maximum 12 in a group).",
    ],
  },
  {
    day: "Day 5",
    title: "आकाशवाणी – A Flying Lantern Show",
    details: [
      "Group sky lantern release.",
      "Wishes and messages on lanterns.",
      "Vibrant and festive atmosphere.",
    ],
  },
  {
    day: "Day 6 & Day 7",
    title: "बैठक – Bonfire and Melodies",
    details: [
      "Open Mic session for singing, dancing, poetry, stand-up comedy, and more.",
      "On-spot registration for performances.",
    ],
  },
  {
    day: "Day 8",
    title: "Mask Party and DJ Night",
    details: [
      "High-energy celebration with music, dance, and a masked vibe.",
      "DJ music and dance floor.",
      "Mask party with creative costumes.",
    ],
  },
  {
    day: "Day 9",
    title: "D Night – The Ultimate Concert",
    details: [
      "Grand musical evening featuring live performances by talented artists.",
    ],
  },
];

export const culturalJudgingNote =
  "A panel of professional judges outside the college will be assigned. All decisions by the judges are final.";

export const contactDetails = [
  { name: "Prajwal Bikram Khand", role: "Organizing Chairperson", phone: "984-0043578" },
  { name: "Dr. Thaneswor Joshi", role: "Organizing Treasurer", phone: "986-8713273" },
  { name: "Prashant Shahi", role: "Sports Lead", phone: "986-8316550" },
  { name: "Dr. Hritik Raj Paswan", role: "Cultural Lead", phone: "984-0301506" },
  { name: "Aarjav Sharma", role: "Literature Lead", phone: "980-2794740" },
  { name: "Smita Paudel", role: "Registration Lead", phone: "980-8157011" },
  { name: "Abhay Shukla", role: "Lodging Lead", phone: "986-3079433" },
  { name: "Abhishek Basnet", role: "Fooding Lead", phone: "986-0917500" },
];

export const aboutDharan = {
  summary:
    "Dharan is a vibrant eastern Nepal city at the foothills of the Himalaya, known for its clean streets, welcoming communities, and pilgrimage sites.",
  sections: [
    {
      title: "Dharan Town",
      body:
        "Bhedetar hill and Charles Point offer sweeping views of Dharan, Itahari, and Biratnagar. The Tamor and Saptakoshi rivers nearby are popular with rafting enthusiasts.",
    },
    {
      title: "Famous For",
      body:
        "Dharan is home to BPKIHS, more than 25 temples, and scenic gateways to Nepal’s tea-growing region of Dhankuta.",
    },
    {
      title: "How to Reach",
      body:
        "Dharan is about 20 minutes by bus from Itahari, which is well connected to major cities including Kathmandu and Pokhara.",
    },
    {
      title: "Places to Visit",
      body:
        "Highlights include Dantakali, Budhasubba, Pindeshwori, Panchakanya temples, Bhedetar, Skywalk, Nameste Jharana, Namje Village, Dhankuta/Hile, Raja Rani Hill, Koshitapu, and Ilam.",
    },
  ],
};

export const literatureHighlights = [
  {
    title: "Short Story Writing",
    description: "English & Nepali categories with on-the-spot themes and a 1-hour limit.",
  },
  {
    title: "Poetry Competition",
    description: "Any topic, with hard-copy submissions and bilingual participation.",
  },
  {
    title: "Debate Competition",
    description: "Parliamentary format with topics shared at the venue.",
  },
  {
    title: "Extempore Speech",
    description: "Five-minute speeches in English or Nepali on a surprise topic.",
  },
  {
    title: "Quiz & Spell Bee",
    description: "Team-based knowledge rounds with finals for top qualifiers.",
  },
  {
    title: "Photography & Sketching",
    description: "Creative showcases with judging and social media engagement.",
  },
];

export const culturalHighlights = [
  {
    title: "Ramp Walk Show",
    description: "Day 1 cultural kickoff celebrating heritage and creativity.",
  },
  {
    title: "Bhajan Night",
    description: "Day 2 acoustic Bhajan session at the Mandir.",
  },
  {
    title: "Tal-Tandav Showcase",
    description: "Day 3 & 4 singing and dancing performances.",
  },
  {
    title: "Flying Lantern Show",
    description: "Day 5 sky lantern celebration.",
  },
  {
    title: "Bonfire & Melodies",
    description: "Day 6 & 7 open mic sessions and performances.",
  },
  {
    title: "Mask Party & DJ Night",
    description: "Day 8 masked celebration with DJ sets.",
  },
  {
    title: "D Night Concert",
    description: "Day 9 grand concert finale.",
  },
];
