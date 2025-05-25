# TikTok Media Kit Website

A simple, modern, and responsive media kit for TikTok creators that can be easily hosted on GitHub Pages for free. Perfect for sharing with brands and PR teams who might want to collaborate with you.

![TikTok Media Kit Preview](preview.jpg)

## Features

- 📊 Display your TikTok analytics in a professional way
- 📱 Fully responsive design (looks great on mobile and desktop)
- 🎨 Modern, clean UI with animated components
- 📈 Interactive charts to showcase demographics
- 🌍 Geographic distribution of your audience
- 🎬 Featured content section to highlight your best TikTok videos
- ⚙️ Easy configuration through a single config file

## How to Use

### 1. Fork or Clone this Repository

Click the "Fork" button at the top of this repository to create your own copy, or clone it to your local machine.

### 2. Configure Your Media Kit

Edit the `config.js` file to update it with your own TikTok data:

```javascript
const mediaKitConfig = {
    // Profile Information
    profile: {
        name: "Your Name",
        username: "@yourtiktokhandle",
        bio: "Your compelling bio goes here",
        // ... other profile data
    },
    
    // Statistics, demographics, geography, featured content
    // ... update with your own data
};
```

### 3. Add Your Profile Picture

Replace the `profile.jpg` file with your own profile picture.

### 4. Test Locally

Open `index.html` in your browser to see how your media kit looks. Make any adjustments to the config or styling as needed.

### 5. Deploy to GitHub Pages

1. Commit your changes and push to your repository
2. Go to your repository settings
3. Scroll down to the "GitHub Pages" section
4. Select the branch you want to deploy (usually `main` or `master`)
5. Click "Save"
6. Your media kit will be available at `https://yourusername.github.io/repository-name/`

## Customization

### Colors and Styling

You can customize the colors and styling by editing the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #fc5c65;
    /* ... other color variables */
}
```

### Adding More Sections

To add new sections or modify the layout, edit the HTML structure in `index.html` and update the corresponding styles in `styles.css`.

### Custom Analytics

If you need to add custom analytics that aren't included in the default template:

1. Add the new data to your `config.js` file
2. Update the HTML to include containers for the new data
3. Modify the `loadMediaKitData()` function in `script.js` to populate the new data

## Credits

- Charts provided by [Chart.js](https://www.chartjs.org/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Country flags from [Flag CDN](https://flagcdn.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details. 