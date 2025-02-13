# Interactive Valentine's Day Card

A charming and interactive Valentine's Day card built with Next.js, React, and Tailwind CSS. This web application features animated hearts, expressive GIFs, and playful interaction that makes it impossible to say "no"!


## Features
- 💖 Animated floating hearts with random positioning and rotations
- 😊 Dynamic expression GIFs that change based on user interaction
- 🎨 Responsive design with dark mode support
- ✨ Interactive buttons with fun scaling animations
- 💝 Playful "No" button that becomes smaller while "Yes" grows larger
- 🌈 Smooth color transitions and gradient backgrounds
- 🎭 Multiple states: hopeful, happy, and sad with corresponding visual feedback


## Technical Details

### Components
- Uses Next.js 'use client' component
- Implements React hooks (useState, useEffect)
- Utilizes Lucide icons for heart animations
- Features Next.js Image component for optimized image loading

### Styling
- Tailwind CSS for utility-first styling
- Custom CSS variables for theme colors
- CSS keyframe animations for floating hearts
- Backdrop blur effects for card visibility
- Responsive design with mobile-first approach

### Interactions
- Dynamic button scaling based on user interactions
- Rotating "No" button text responses
- Heart animation states (outline vs. filled)
- Smooth transitions between emotional states

## Setup Requirements

1. Place the following GIFs in your public folder:
   - `happy.gif` - Displayed when user clicks "Yes"
   - `sad.gif` - Displayed when user clicks "No"
   - `hopeful.gif` - Initial state

2. Ensure you have the following dependencies:
   ```json
   {
     "dependencies": {
       "next": "^13.0.0",
       "react": "^18.0.0",
       "lucide-react": "latest",
       "tailwindcss": "^3.0.0"
     }
   }
   ```


## Customization

You can customize the appearance by modifying:
- Color variables in the global CSS
- Heart animation parameters
- Button text responses in the `noTexts` array
- Animation timings and scales
- GIF expressions


## Usage

1. Import the component into your Next.js application
2. Add the global CSS to your project
3. Deploy and share with your Valentine!


## Dark Mode Support

The application automatically adapts to the user's system preferences with custom dark mode styling for:
- Background gradients
- Card transparency
- Text colors
- Heart animations

Perfect for creating a romantic atmosphere at any time of day! 💕
