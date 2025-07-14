# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website for the festival committee ("comité des fêtes") of Cieutat, a small village in the Bigorre region of France. The website showcases the annual Saint-Barthélemy festival (August 23-26, 2024) and provides information about the 4-day celebration.

## Development Setup

```bash
# Install dependencies
npm install

# Development server
ng serve

# Build the project
ng build

# Build for production
ng build --configuration production

# Run unit tests
ng test
```

## Project Architecture

### Core Components
- `src/app/header/` - Navigation header with responsive menu
- `src/app/home/` - Main homepage with festival overview and program preview
- `src/app/programme/` - Detailed program for all 4 days
- `src/app/chants/` - Traditional songs section with downloadable songbooks
- `src/app/galerie/` - Gallery for festival visuals
- `src/app/footer/` - Site footer with contact information

### Services and Models
- `src/app/services/festival.ts` - Service managing festival data and events
- `src/app/models/event.model.ts` - TypeScript interfaces for events, songs, and program data

### Styling and Theme
- Custom Angular Material theme with festival colors (red, yellow, green, orange)
- Responsive design optimized for mobile devices
- Festive southwestern France color scheme

### Assets Structure
- `public/assets/livrets/` - PDF songbooks for traditional songs
- `public/assets/images/` - Festival images organized by category:
  - `affiches/` - Posters from different years
  - `concerts/` - Friday evening concert visuals
  - `mascottes/` - Village mascots (owl and turkey)
  - `monuments/` - Village monuments
  - `tshirts/` - T-shirt designs by year
  - `groupes/` - Invited groups photos

## Festival Program Structure

The website displays a 4-day festival program:

**Friday (Vendredi):**
- 19h00: Polyphonic songs in the church
- 21h00: Songs at the community hall

**Saturday (Samedi):**
- 14h00: Pétanque tournament
- 15h00: Various activities
- 19h30: Dinner with bandas
- 22h00: Dance

**Sunday (Dimanche):**
- 11h00: Mayor's aperitif
- 13h00: "Aubade" (young villagers singing house to house)
- 21h00: Orchestra performance

**Monday (Lundi):**
- 10h00: Children's games
- 19h00: Frites-saucisse dinner
- 21h00: Final dance

## Key Features

- **Responsive Design**: Mobile-first approach with Material Design
- **HelloAsso Integration**: Direct link to ticket reservations
- **Downloadable Songbooks**: PDF access to traditional Bigourdan songs
- **Cultural Context**: Emphasizes local traditions and community spirit
- **Accessibility**: Clear navigation and readable content structure

## Important Notes

- **Language**: All content is in French
- **Cultural Context**: Bigourdan village traditions and southwestern French culture
- **Colors**: Festive, bright colors that change yearly but maintain southern French festival spirit
- **Community Focus**: Designed for both villagers and visitors
- **Mobile Priority**: Festival-goers need smartphone access to information

## Integration Points

- **HelloAsso**: https://www.helloasso.com/associations/comite-des-jeunes-de-cieutat
- **Visual Assets**: Reference existing `Visuels_interressants` folder content
- **Annual Updates**: Structure supports yearly theme and color changes