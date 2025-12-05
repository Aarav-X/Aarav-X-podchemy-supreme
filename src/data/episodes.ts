/**
 * Mock Episode Data - The Sonic Library
 * 
 * Each episode is not merely data, but a portal to wisdom.
 * These entries represent the curated essence of human knowledge,
 * distilled from the conversations of the world's greatest minds.
 */

export interface Episode {
    id: string;
    title: string;
    podcastName: string;
    podcastLogo: string;
    date: string;
    readTime: number;
    description: string;
    keyTakeaways: string[];
    tags: string[];
    featured?: boolean;
    views?: number;
}

export const episodes: Episode[] = [
    {
        id: "ariel-meyerowitz-art-world",
        title: "Navigating the Art World",
        podcastName: "Infinite Loops",
        podcastLogo: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=100&h=100&fit=crop",
        date: "December 4, 2024",
        readTime: 12,
        description: "Ariel Meyerowitz shares insights on building a career in the art world, from gallery representation to the evolving landscape of digital art.",
        keyTakeaways: [
            "The art market is increasingly global and digital",
            "Building relationships matters more than credentials",
            "Understanding collector psychology is crucial"
        ],
        tags: ["Art", "Business", "Culture"],
        featured: true,
        views: 15420
    },
    {
        id: "naval-ravikant-wealth-happiness",
        title: "How to Get Rich (Without Getting Lucky)",
        podcastName: "The Tim Ferriss Show",
        podcastLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
        date: "December 2, 2024",
        readTime: 18,
        description: "Naval breaks down his famous tweetstorm on wealth creation, covering leverage, specific knowledge, and building judgment.",
        keyTakeaways: [
            "Seek wealth, not money or status",
            "Arm yourself with specific knowledge",
            "Build or buy equity in a business"
        ],
        tags: ["Wealth", "Philosophy", "Startups"],
        featured: true,
        views: 42850
    },
    {
        id: "huberman-sleep-protocols",
        title: "Master Your Sleep & Be More Alert",
        podcastName: "Huberman Lab",
        podcastLogo: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=100&h=100&fit=crop",
        date: "November 29, 2024",
        readTime: 22,
        description: "Dr. Huberman reveals the science of sleep and practical protocols for optimizing your circadian rhythm and energy levels.",
        keyTakeaways: [
            "Morning sunlight exposure is critical",
            "Temperature regulation affects sleep quality",
            "Caffeine has a 8-12 hour half-life"
        ],
        tags: ["Health", "Science", "Productivity"],
        views: 38200
    },
    {
        id: "sam-altman-ai-future",
        title: "The Future of Artificial Intelligence",
        podcastName: "Lex Fridman Podcast",
        podcastLogo: "https://images.unsplash.com/photo-1675557009875-436f7a7c7f9f?w=100&h=100&fit=crop",
        date: "November 25, 2024",
        readTime: 25,
        description: "Sam Altman discusses OpenAI's mission, the path to AGI, and how humanity should prepare for the AI revolution.",
        keyTakeaways: [
            "AGI will arrive sooner than most expect",
            "Alignment research is crucial for safety",
            "AI will augment, not replace, human creativity"
        ],
        tags: ["AI", "Technology", "Future"],
        views: 89400
    },
    {
        id: "brene-brown-vulnerability",
        title: "The Power of Vulnerability",
        podcastName: "On Being with Krista Tippett",
        podcastLogo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        date: "November 22, 2024",
        readTime: 15,
        description: "Brené Brown explores how embracing vulnerability leads to courage, connection, and wholehearted living.",
        keyTakeaways: [
            "Vulnerability is the birthplace of innovation",
            "Shame resilience is a learnable skill",
            "Courage starts with showing up"
        ],
        tags: ["Psychology", "Leadership", "Self-Help"],
        views: 27600
    },
    {
        id: "patrick-collison-stripe-culture",
        title: "Building Stripe's Culture of Excellence",
        podcastName: "Invest Like the Best",
        podcastLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
        date: "November 18, 2024",
        readTime: 20,
        description: "Patrick Collison shares how Stripe builds teams, makes decisions, and maintains quality at scale.",
        keyTakeaways: [
            "Hire people who raise the average",
            "Writing culture drives clear thinking",
            "Optimize for the long-term compounding"
        ],
        tags: ["Startups", "Culture", "Leadership"],
        views: 19300
    },
    {
        id: "james-clear-atomic-habits",
        title: "Atomic Habits: Tiny Changes, Remarkable Results",
        podcastName: "The Knowledge Project",
        podcastLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        date: "November 15, 2024",
        readTime: 16,
        description: "James Clear explains the science of habit formation and shares practical strategies for building better routines.",
        keyTakeaways: [
            "1% better every day compounds massively",
            "Environment design beats willpower",
            "Make good habits obvious and attractive"
        ],
        tags: ["Habits", "Productivity", "Psychology"],
        views: 45200
    },
    {
        id: "morgan-housel-money-psychology",
        title: "The Psychology of Money",
        podcastName: "Rational Reminder",
        podcastLogo: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=100&h=100&fit=crop",
        date: "November 12, 2024",
        readTime: 14,
        description: "Morgan Housel discusses why personal finance is more about behavior than math, and how to think about money wisely.",
        keyTakeaways: [
            "Financial success is about behavior",
            "Wealth is what you don't see",
            "Saving is a hedge against life's uncertainty"
        ],
        tags: ["Finance", "Psychology", "Wealth"],
        views: 31800
    },
    {
        id: "balaji-network-state",
        title: "The Network State and Future of Governance",
        podcastName: "Bankless",
        podcastLogo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop",
        date: "November 8, 2024",
        readTime: 28,
        description: "Balaji Srinivasan presents his vision for cloud-first nations and the future of decentralized governance.",
        keyTakeaways: [
            "Geography is becoming less relevant",
            "Communities can form around shared values",
            "Technology enables new forms of coordination"
        ],
        tags: ["Crypto", "Governance", "Future"],
        views: 22100
    },
    {
        id: "rory-sutherland-behavioral",
        title: "The Hidden Logic of Irrational Behavior",
        podcastName: "The Knowledge Project",
        podcastLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        date: "November 5, 2024",
        readTime: 19,
        description: "Rory Sutherland reveals how seemingly irrational human behavior often makes sense when viewed through the right lens.",
        keyTakeaways: [
            "Logic often misses what matters to humans",
            "Perception can be changed without changing reality",
            "Details are the design"
        ],
        tags: ["Psychology", "Marketing", "Behavior"],
        views: 16700
    },
    {
        id: "derek-sivers-hell-yeah",
        title: "Hell Yeah or No: What's Worth Doing",
        podcastName: "The Tim Ferriss Show",
        podcastLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
        date: "November 1, 2024",
        readTime: 11,
        description: "Derek Sivers shares his philosophy on decision-making, focus, and living a deliberate life.",
        keyTakeaways: [
            "If it's not a hell yeah, it's a no",
            "Success comes from doing the opposite",
            "Ideas are worth nothing without execution"
        ],
        tags: ["Philosophy", "Decisions", "Life"],
        views: 24500
    },
    {
        id: "peter-thiel-contrarian",
        title: "Zero to One: Notes on Startups",
        podcastName: "How I Built This",
        podcastLogo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop",
        date: "October 28, 2024",
        readTime: 21,
        description: "Peter Thiel discusses contrarian thinking, the nature of competition, and how to build companies that create new value.",
        keyTakeaways: [
            "Competition is for losers",
            "Monopolies drive innovation",
            "The best businesses are non-obvious to others"
        ],
        tags: ["Startups", "Strategy", "Innovation"],
        views: 52400
    },
];

export const featuredEpisodes = episodes.filter(ep => ep.featured);
export const popularEpisodes = [...episodes].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 6);
export const recentEpisodes = episodes.slice(0, 8);
