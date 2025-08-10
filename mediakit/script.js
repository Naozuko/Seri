document.addEventListener('DOMContentLoaded', function() {
    // Load data from config
    loadMediaKitData();

    // Initialize gender chart
    const genderCtx = document.getElementById('gender-chart').getContext('2d');
    const genderChart = new Chart(genderCtx, {
        type: 'doughnut',
        data: {
            labels: ['Male', 'Female', 'Other'],
            datasets: [{
                data: [
                    mediaKitConfig.demographics.gender.male, 
                    mediaKitConfig.demographics.gender.female,
                    mediaKitConfig.demographics.gender.other
                ],
                backgroundColor: [
                    getComputedStyle(document.documentElement).getPropertyValue('--male-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--female-color'),
                    getComputedStyle(document.documentElement).getPropertyValue('--other-color')
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Initialize age bar chart widths
    const ageData = mediaKitConfig.demographics.age;
    Object.entries(ageData).forEach(([ageGroup, percentage]) => {
        const element = document.getElementById(`age-${ageGroup}`);
        if (element) {
            element.style.width = `${percentage}%`;
        }
    });

    // Make video placeholders clickable
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    videoPlaceholders.forEach((placeholder, index) => {
        const contentData = mediaKitConfig.featuredContent[index];
        if (contentData && contentData.link) {
            placeholder.addEventListener('click', function() {
                window.open(contentData.link, '_blank');
            });
        }
    });

    // Function to load all data from config
    function loadMediaKitData() {
        // Load profile data
        document.getElementById('creator-name').textContent = mediaKitConfig.profile.name;
        document.getElementById('creator-bio').textContent = mediaKitConfig.profile.bio;
        document.getElementById('profile-image').src = mediaKitConfig.profile.profileImage;
        document.getElementById('contact-email').textContent = mediaKitConfig.profile.email;
        
        // Load social links
        document.getElementById('tiktok-link').href = mediaKitConfig.profile.socialLinks.tiktok;
        document.getElementById('youtube-link').href = mediaKitConfig.profile.socialLinks.youtube;
        
        // Load social follower counts
        const tiktokFollowerCount = document.querySelector('#tiktok-link .follower-count');
        const youtubeFollowerCount = document.querySelector('#youtube-link .follower-count');
        
        if (tiktokFollowerCount) {
            tiktokFollowerCount.textContent = mediaKitConfig.profile.socialFollowers.tiktok;
        }
        
        if (youtubeFollowerCount) {
            youtubeFollowerCount.textContent = mediaKitConfig.profile.socialFollowers.youtube;
        }
        
        // Calculate and display total followers
        const totalFollowersElement = document.querySelector('.total-followers h2');
        if (totalFollowersElement) {
            // Calculate total from TikTok + YouTube
            const parseAbbrev = (value) => {
                if (!value) return 0;
                const s = String(value).toLowerCase().replace(/,/g, '').trim();
                const match = s.match(/^([0-9]+(?:\.[0-9]+)?)\s*([km]?)$/);
                if (!match) return 0;
                const num = parseFloat(match[1]);
                const unit = match[2];
                if (unit === 'm') return Math.round(num * 1_000_000);
                if (unit === 'k') return Math.round(num * 1_000);
                return Math.round(num);
            };

            const formatAbbrev = (n) => {
                if (n >= 1_000_000) {
                    const v = n / 1_000_000;
                    return (Number.isInteger(v) ? v.toFixed(0) : v.toFixed(1)) + 'M';
                }
                if (n >= 1_000) {
                    const v = n / 1_000;
                    return (Number.isInteger(v) ? v.toFixed(0) : v.toFixed(1)) + 'k';
                }
                return String(n);
            };

            const tiktokTotal = parseAbbrev(mediaKitConfig.profile.socialFollowers.tiktok);
            const youtubeTotal = parseAbbrev(mediaKitConfig.profile.socialFollowers.youtube);
            const total = tiktokTotal + youtubeTotal;
            totalFollowersElement.textContent = formatAbbrev(total);
        }
        
        // Load statistics
        document.getElementById('followers').textContent = mediaKitConfig.statistics.followers;
        document.getElementById('engagement').textContent = mediaKitConfig.statistics.engagement;
        document.getElementById('posts').textContent = mediaKitConfig.statistics.totalPosts;
        document.getElementById('likes').textContent = mediaKitConfig.statistics.avgLikes;
        document.getElementById('reel-views').textContent = mediaKitConfig.statistics.avgReelViews;
        document.getElementById('story-views').textContent = mediaKitConfig.statistics.avgStoryViews;
        document.getElementById('story-clicks').textContent = mediaKitConfig.statistics.avgStoryLinkClicks;
        
        // Load gender data
        document.getElementById('male-percent').textContent = `${mediaKitConfig.demographics.gender.male}%`;
        document.getElementById('female-percent').textContent = `${mediaKitConfig.demographics.gender.female}%`;
        document.getElementById('other-percent').textContent = `${mediaKitConfig.demographics.gender.other}%`;
        
        // Load geography data - countries
        const countriesList = document.getElementById('countries-list');
        countriesList.innerHTML = ''; // Clear existing items
        
        mediaKitConfig.geography.countries.forEach(country => {
            const countryItem = document.createElement('div');
            countryItem.className = 'geo-item';
            countryItem.innerHTML = `
                <div class="flag-container">
                    <img src="https://flagcdn.com/w20/${country.flagCode}.png" alt="${country.name}" class="flag">
                </div>
                <span class="country-name">${country.name}</span>
                <span class="country-value">${country.value}</span>
            `;
            countriesList.appendChild(countryItem);
        });

        // Load rates data
        const ratesList = document.querySelector('.rates-list');
        const bundleNote = document.querySelector('.bundle-note');
        
        if (ratesList && mediaKitConfig.rates) {
            ratesList.innerHTML = ''; // Clear existing items
            
            mediaKitConfig.rates.forEach(rate => {
                const rateItem = document.createElement('div');
                rateItem.className = 'rate-item';
                rateItem.innerHTML = `
                    <div class="rate-info">
                        <h3>${rate.title}</h3>
                        ${rate.description ? `<p class="duration">${rate.description}</p>` : ''}
                    </div>
                    <div class="price">
                        <span class="usd">${rate.price}</span>
                    </div>
                `;
                ratesList.appendChild(rateItem);
            });
        }
        
        if (bundleNote && mediaKitConfig.bundleNote) {
            bundleNote.textContent = mediaKitConfig.bundleNote;
        }
    }

    // Editable content functionality
    // This allows for editing of the profile information if the user is logged in as the owner
    
    // Example of how to update data:
    function updateMediaKitData(data) {
        // Update stats
        if (data.followers) document.getElementById('followers').textContent = data.followers;
        if (data.engagement) document.getElementById('engagement').textContent = data.engagement;
        if (data.posts) document.getElementById('posts').textContent = data.posts;
        if (data.likes) document.getElementById('likes').textContent = data.likes;
        if (data.reelViews) document.getElementById('reel-views').textContent = data.reelViews;
        if (data.storyViews) document.getElementById('story-views').textContent = data.storyViews;
        if (data.storyClicks) document.getElementById('story-clicks').textContent = data.storyClicks;
        
        // Update profile
        if (data.name) document.getElementById('creator-name').textContent = data.name;
        if (data.bio) document.getElementById('creator-bio').textContent = data.bio;
        if (data.profileImage) document.getElementById('profile-image').src = data.profileImage;
        
        // Update gender data
        if (data.genderData) {
            document.getElementById('male-percent').textContent = `${data.genderData.male}%`;
            document.getElementById('female-percent').textContent = `${data.genderData.female}%`;
            document.getElementById('other-percent').textContent = `${data.genderData.other}%`;
            
            // Update chart
            genderChart.data.datasets[0].data = [data.genderData.male, data.genderData.female, data.genderData.other];
            genderChart.update();
        }
        
        // Update age data
        if (data.ageData) {
            Object.entries(data.ageData).forEach(([ageGroup, percentage]) => {
                const element = document.getElementById(`age-${ageGroup}`);
                if (element) {
                    element.style.width = `${percentage}%`;
                    element.textContent = `${percentage}%`;
                }
            });
        }
    }

    // Example data format - this would typically come from a backend
    const sampleData = {
        name: 'Your Name',
        bio: 'Content creator specializing in lifestyle and cooking videos',
        profileImage: 'profile.jpg',
        followers: '133.0k',
        engagement: '66.3%',
        posts: '222',
        likes: '87.3k',
        reelViews: '899.3k',
        storyViews: '2.5k',
        storyClicks: '-',
        genderData: {
            male: 26,
            female: 74,
            other: 0
        },
        ageData: {
            '13-17': 4.3,
            '18-24': 14.6,
            '25-34': 42.4,
            '35-44': 30.4,
            '45-54': 5.0
        }
    };

    // Uncomment to test updating data
    // updateMediaKitData(sampleData);

    // Add edit mode capability for the site owner
    const isOwner = false; // This would be determined by authentication
    
    if (isOwner) {
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit Media Kit';
        editButton.classList.add('edit-button');
        document.querySelector('.container').prepend(editButton);
        
        editButton.addEventListener('click', function() {
            // This would open an edit interface
            console.log('Edit mode activated');
            toggleEditMode();
        });
    }
    
    // Function to toggle edit mode
    function toggleEditMode() {
        // This function would enable or disable editing of content
        // It could make stats editable, allow image uploads, etc.
        // In a real implementation, this would save changes to a database or config file
        
        alert('Edit mode feature would be implemented here. In this demo, update your config.js file directly.');
    }
}); 
