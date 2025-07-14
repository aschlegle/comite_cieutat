#!/bin/bash

echo "🖼️  Optimisation des images pour le web..."

# Créer les dossiers de sauvegarde et optimisés
mkdir -p images_backup
mkdir -p images_optimized

# Objectifs de taille pour le web
# - Affiches/events : max 1920px, qualité 80, <2MB
# - Mascottes : max 800px, qualité 85, <500KB  
# - Logos : max 400px, qualité 90, <200KB

echo "📁 Sauvegarde des images originales..."
cp -r src/assets/images/ images_backup/

echo "🎯 Optimisation des affiches d'événements..."
# Affiches d'événements (très utilisées, mais peuvent être compressées)
for file in src/assets/images/events/*.png; do
    if [ -f "$file" ]; then
        echo "Optimizing $(basename "$file")..."
        convert "$file" -quality 75 -resize "1920x1920>" -strip "${file%.*}_optimized.jpg"
        # Convertir en JPEG pour une meilleure compression
    fi
done

for file in src/assets/images/events/*.jpg; do
    if [ -f "$file" ]; then
        echo "Optimizing $(basename "$file")..."
        convert "$file" -quality 80 -resize "1920x1920>" -strip "${file%.*}_optimized.jpg"
    fi
done

echo "🦆 Optimisation des mascottes..."
# Mascottes (utilisées en arrière-plan et dans les cartes)
for file in src/assets/images/mascots/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .png)
        echo "Optimizing $filename..."
        
        case "$filename" in
            "cute-owl"|"bruno-cycliste"|"tete-dindon")
                # Images importantes : qualité élevée mais taille réduite
                convert "$file" -quality 85 -resize "800x800>" -strip "${file%.*}_optimized.png"
                ;;
            "dindon-coureur"|"dindon-biere"|"Turkey france"|"Robot dindon")
                # Images secondaires : plus de compression
                convert "$file" -quality 75 -resize "600x600>" -strip "${file%.*}_optimized.png"
                ;;
        esac
    fi
done

echo "🏛️ Optimisation des logos et blasons..."
# Logos (petites tailles suffisantes)
for file in src/assets/images/logo/*.png; do
    if [ -f "$file" ]; then
        echo "Optimizing $(basename "$file")..."
        convert "$file" -quality 90 -resize "400x400>" -strip "${file%.*}_optimized.png"
    fi
done

for file in src/assets/images/logo/*.jpg; do
    if [ -f "$file" ]; then
        echo "Optimizing $(basename "$file")..."
        convert "$file" -quality 90 -resize "400x400>" -strip "${file%.*}_optimized.jpg"
    fi
done

echo "📊 Comparaison des tailles..."
echo "=== AVANT ==="
find src/assets/images/ -name "*.png" -o -name "*.jpg" | xargs ls -lh | awk '{sum+=$5} END {print "Total: " sum/1024/1024 " MB"}'

echo "=== APRÈS ==="
find . -name "*_optimized.*" | xargs ls -lh | awk '{sum+=$5} END {print "Total: " sum/1024/1024 " MB"}'

echo "✅ Optimisation terminée!"
echo "Les images originales sont sauvegardées dans images_backup/"
echo "Les images optimisées sont dans le même dossier avec le suffixe '_optimized'"