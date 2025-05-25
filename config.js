/**
 * TikTok Media Kit Configuration
 * Edit this file to update your statistics and profile information
 */

const mediaKitConfig = {
    // Profile Information
    profile: {
        name: "Seri",
        username: "@seriixo",
        bio: "Your compelling bio goes here - describe your content style and niche",
        profileImage: "profile.jpg", // Place your profile image in the same directory
        email: "seriixo.mgmt@gmail.com",
        socialLinks: {
            tiktok: "https://www.tiktok.com/@seriixo",
            youtube: "https://www.youtube.com/@seriixo"
        },
        socialFollowers: {
            tiktok: "51.6k",
            youtube: "81.2k"
        }
    },

    // Main Statistics
    statistics: {
        followers: tiktokStats.followers,
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
    ]
}; 