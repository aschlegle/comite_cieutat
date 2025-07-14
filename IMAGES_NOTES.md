# Notes sur les images optimisées

## Images trop volumineuses supprimées temporairement :

1. **Concert 2023.png** (107 MB) - À optimiser avant de recommitter
2. **eglise_decoupee.png** (76 MB) - À optimiser avant de recommitter  
3. **Eglise découpée stylisée.png** (56 MB) - À optimiser avant de recommitter

## Pour optimiser les images plus tard :

```bash
# Installer des outils d'optimisation
sudo apt install imagemagick pngquant jpegoptim

# Optimiser les PNG
pngquant --quality=65-80 --output optimized.png original.png

# Optimiser avec ImageMagick (réduire qualité et taille)
convert original.png -quality 80 -resize 2048x2048> optimized.png

# Optimiser les JPEG
jpegoptim --size=5000k original.jpg
```

## Solution temporaire :
- Les images sont exclues du .gitignore
- Le site fonctionne sans ces images spécifiques
- À déployer manuellement sur le serveur après optimisation