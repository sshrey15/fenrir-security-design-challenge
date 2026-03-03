# Color Scheme Documentation

## Primary Accent Color
- **Teal**: `#0CC8A8`
  - Used for: Active states, CTAs, links, progress indicators, focus rings
  - Hover state: `#09B898` (darker teal)
  - Active state: `#089A88` (even darker teal)

## Light Mode
- **Background**: `#FFFFFF` (White)
- **Foreground/Text**: `#0F0F0F` (Near black)
- **Card Background**: `#FFFFFF`
- **Secondary Background**: `#F5F5F5` (Light gray)
- **Border**: `#D4D4D4` (Light gray border)
- **Input Background**: `#F5F5F5` (Light gray)
- **Muted Text**: `#666666`
- **Muted Background**: `#E5E5E5`

## Dark Mode
- **Background**: `#0F0F0F` (Near black)
- **Foreground/Text**: `#FFFFFF` (White)
- **Card Background**: `#1A1A1A` (Slightly lighter black)
- **Secondary Background**: `#2A2A2A`
- **Border**: `#333333`
- **Input Background**: `#262626`
- **Muted Text**: `#999999`
- **Muted Background**: `#404040`

## Severity Colors
- **Critical**: `#EF4444` (Red) | Dark: `#FF6B6B`
- **High**: `#F97316` (Orange) | Dark: `#FFA500`
- **Medium**: `#EABB08` (Amber/Yellow) | Dark: `#FFD700`
- **Low**: `#22C55E` (Green) | Dark: `#4ADE80`

## CSS Variables
All colors are defined as CSS custom properties in `app/globals.css`:

### Light Mode (`:root`)
```css
--primary: #0CC8A8
--accent: #0CC8A8
--destructive: #EF4444
--background: #FFFFFF
--foreground: #0F0F0F
```

### Dark Mode (`.dark`)
```css
--primary: #0CC8A8
--accent: #0CC8A8
--destructive: #FF6B6B
--background: #0F0F0F
--foreground: #FFFFFF
```

## Implementation
- All accent-related UI elements use the teal color `#0CC8A8`
- Form inputs focus state uses the teal color with 20% opacity ring
- Buttons, links, and CTAs default to the teal accent
- Severity colors are used for alerts, badges, and status indicators
- Background colors automatically switch between light and dark modes via CSS custom properties
