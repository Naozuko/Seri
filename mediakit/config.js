/**
 * TikTok Media Kit Configuration
 * Edit this file to update your statistics and profile information
 */

const mediaKitConfig = {
    // Profile Information
    profile: {
        name: "Seri",
        username: "@seriixo",
        bio: "I love creating fun content and sharing my life on the internet. I've built a beautiful community where I can comfortably share what I love as well as fun challenges. I love to work with brands showcasing amazing products, I pour my heart and soul into every video so you can trust me to make something people want to watch and share.",
        profileImage: "profile.jpg", // Place your profile image in the same directory
        email: "management@seriixo.com",
        socialLinks: {
            tiktok: "https://www.tiktok.com/@seriixo",
            youtube: "https://www.youtube.com/@seriixo/shorts",
            instagram: "#"
        },
        socialFollowers: {
            tiktok: "404.5K",
            youtube: "434k",
            instagram: "12.2K"
        }
    },

    // Main Statistics
    statistics: {
        followers: "286.7k",
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
            { name: "UNITED STATES", value: "23.7%", flagCode: "us" },
            { name: "PHILIPPINES", value: "11.5%", flagCode: "ph" },
            { name: "UNITED KINGDOM", value: "8.3%", flagCode: "gb" },
            { name: "AUSTRALIA", value: "7.4%", flagCode: "au" },
            { name: "SOUTH AFRICA", value: "5.6%", flagCode: "za" },
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
            title: "TikTok Dedicated",
            description: "(30s-120s)",
            price: "$2150 USD"
        },
        {
            title: "TikTok Integrated",
            description: "(15s-30s)",
            price: "$1750 USD"
        },
        {
            title: "Link in Bio",
            description: "",
            price: "$155 USD"
        },
        {
            title: "Cross-platform Posting",
            description: "(TikTok + Instagram)",
            price: "$335 USD"
        },
        {
            title: "Cross-platform Posting",
            description: "(TikTok + YouTube)",
            price: "$575 USD"
        },
        {
            title: "Usage Rights",
            description: "(1 Month)",
            price: "$270 USD"
        },
        {
            title: "Scripted",
            description: "",
            price: "$335 USD"
        }
    ],

    // Bundle pricing note
    bundleNote: "Contact for bundle price. Payments will be made in AUD."
}; 
