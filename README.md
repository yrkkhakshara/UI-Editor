# Dynamic UI Editor

A React-based UI editor for customizing components in real-time with an intuitive interface.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Features

- Real-time UI customization
- Typography, button, layout, and color controls
- Export/Import JSON configurations
- Built with React + Tailwind + Vite

## Component API and Configurable Props

The UI component accepts a configuration object:

```javascript
{
  type: {
    fontFamily: 'Inter',    // Font selection
    fontWeight: 600,        // 400-700
    fontSize: 20            // 10-60px
  },
  button: {
    radius: 12,            // Border radius (0-24px)
    shadow: 'medium',      // none, small, medium, large
    align: 'flex-end',     // flex-start, center, flex-end
    bg: '#1f2937',         // Background color (HEX/RGB)
    text: '#ffffff'        // Text color (HEX/RGB)
  },
  gallery: {
    alignment: 'flex-start', // Image alignment
    spacing: 10,             // Gap between images (0-40px)
    imageRadius: 12          // Image border radius (0-24px)
  },
  general: {
    cardRadius: 16          // Card corner radius (0-40px)
  },
  layout: {
    containerPadding: 16,   // Container padding (0-40px)
    sectionBg: '#F3F4F6'    // Section background color
  },
  stroke: {
    color: '#E5E7EB',       // Border color
    weight: 1               // Border weight (0-8px)
  },
  palette: ['#784F3F', ...] // Array of custom colors
}
```

## How the Editor Works

The editor uses a controlled component pattern with React state:

1. **State Management**: UI configuration is stored in React state and passed down to both the preview and editor components
2. **Real-time Updates**: Changes to any control immediately update the state, triggering a re-render of the live preview
3. **Control Components**: Reusable input components (Slider, Select, Input, ToggleGroup) handle user interactions
4. **Derived Values**: Some properties (like shadow CSS) are computed from simple values to maintain clean API
5. **Export/Import**: Configurations can be serialized to JSON for reusability across projects

### Control Types
- **Sliders**: Continuous values (font size, spacing, radius)
- **Selects**: Predefined options (font family, shadow style)
- **Color Inputs**: Visual color picker with HEX/RGB support
- **Toggle Groups**: Exclusive selection (alignment options)

## Design Decisions & UX Improvements

### Additional Customizations
- **Color Palette System**: Added a 12-color palette grid for consistent theming across components
- **Shadow Presets**: Simplified shadow configuration with predefined levels instead of raw CSS values
- **Responsive Controls**: All controls adapt to different screen sizes for mobile editing

### UX Improvements
- **Instant Feedback**: All changes reflect immediately without lag or "apply" buttons
- **Smart Defaults**: Sensible default values that create a polished starting point
- **Organized Sections**: Controls grouped logically (Typography, Button, Gallery, etc.)
- **Visual Inputs**: Color pickers show current values visually alongside HEX codes
- **Range Hints**: Min/max labels on sliders help users understand valid ranges
- **JSON Portability**: Export/import feature enables saving and sharing configurations

### Technical Decisions
- **Vite**: Chosen for fast HMR and optimal development experience
- **Tailwind CSS**: Utility-first approach for rapid UI development and consistent styling
- **Modular Components**: Each control type is abstracted for reusability and maintainability
- **Immutable State Updates**: Using `structuredClone` ensures predictable state changes

## Tech Stack

React, Vite, Tailwind CSS
