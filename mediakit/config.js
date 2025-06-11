/**
 * TikTok Media Kit Configuration
 * Edit this file to update your statistics and profile information
 */

const mediaKitConfig = {
    // Profile Information
    profile: {
        name: "Seri",
        username: "@seriixo",
        bio: "I love creating content that truly connects and builds a loyal, engaged community. With a mix of creativity, silly videos, and dedication, I will do ANYTHING to make every post go viral—including our collabs! I'd be so excited to get to know your beautiful brand and showcase it in a way my audience will genuinely love.",
        profileImage: "profile.jpg", // Place your profile image in the same directory
        email: "seriixo.mgmt@gmail.com",
        socialLinks: {
            tiktok: "https://www.tiktok.com/@seriixo",
            youtube: "https://www.youtube.com/@seriixo/shorts"
        },
        socialFollowers: {
            tiktok: "60.8k",
            youtube: "111k"
        }
    },

    // Main Statistics
    statistics: {
        followers: "60.8k",
        engagement: tiktokStats.engagementRate,
        totalPosts: tiktokStats.totalVideos,
        avgLikes: tiktokStats.avgLikes28d,
        avgReelViews: tiktokStats.avgViews28d,
        avgStoryViews: tiktokStats.avgComments28d,
        avgStoryLinkClicks: tiktokStats.totalImpression
    },

    // Demographics
    demographics: {
        gender: {
            male: 28,
            female: 71,
            other: 1
        },
        age: {
            "18-24": 38.1,
            "25-34": 27.4,
            "35-44": 21.1,
            "45-54": 6.9,
            "55+": 6.5
        }
    },

    // Geography
    geography: {
        countries: [
            { name: "AUSTRALIA", value: "12.4%", flagCode: "au" },
            { name: "PHILIPPINES", value: "11.5%", flagCode: "ph" },
            { name: "UNITED KINGDOM", value: "8.6%", flagCode: "gb" },
            { name: "SOUTH AFRICA", value: "5.6%", flagCode: "za" },
            { name: "UNITED STATES", value: "4.8%", flagCode: "us" },
            { name: "CANADA", value: "4.0%", flagCode: "ca" },
            { name: "NEW ZEALAND", value: "3.3%", flagCode: "nz" },
            { name: "UAE", value: "2.8%", flagCode: "ae" },
            { name: "GREECE", value: "2.4%", flagCode: "gr" },
            { name: "SWEDEN", value: "2.1%", flagCode: "se" }
        ]
    },

    // Featured Content - Add links to your best-performing TikTok videos
    featuredContent: [
        {
            title: "What cooking as a parent looks like",
            thumbnail: "", // Optional: Add a custom thumbnail image
            link: "https://tiktok.com/@yourtiktokhandle/video/123456789"
        },
        {
            title: "What flying past mars in slow mo looks like",
            thumbnail: "",
            link: "https://tiktok.com/@yourtiktokhandle/video/123456789"
        },
        {
            title: "Kitchen hacks everyone should know",
            thumbnail: "",
            link: "https://tiktok.com/@yourtiktokhandle/video/123456789"
        },
        {
            title: "When Sean's going to work",
            thumbnail: "",
            link: "https://tiktok.com/@yourtiktokhandle/video/123456789"
        }
    ],

    // Collaboration Rates
    rates: [
        {
            title: "Cross-platform Posting",
            description: "(TikTok + YouTube)",
            price: "$2650 USD"
        },
        {
            title: "TikTok Dedicated",
            description: "(30s-120s)",
            price: "$1945 USD"
        },
        {
            title: "TikTok Integrated",
            description: "(15s-30s)",
            price: "$1050 USD"
        },        
        {
            title: "Link in Bio",
            description: "(7-days)",
            price: "$520 USD"
        },
        {
            title: "Usage Rights",
            description: "(1 Month)",
            price: "$455 USD"
        },
        {
            title: "Scripted/Dedicated",
            description: "",
            price: "$650 USD"
        }
    ],

    // Bundle pricing note
    bundleNote: "Contact for bundle price"
}; 
