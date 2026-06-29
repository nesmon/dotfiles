#!/usr/bin/env bash

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

BACKUP_DIR="./config"

echo -e "${BLUE}=== Sauvegarde Chirurgicale de l'Interface KDE ===${NC}"

# Création de la structure dans tes dotfiles
mkdir -p "${BACKUP_DIR}/.config/kdedefaults"
mkdir -p "${BACKUP_DIR}/.local/share"

# 1. Sauvegarde des fichiers .config ciblés
CONFIG_FILES=(
    "plasma-org.kde.plasma.desktop-appletsrc"
    "plasmarc"
    "plasmashellrc"
    "plasmanotifyrc"
    "kdeglobals"
    "kwinrc"
    "kwinrulesrc"
    "kglobalshortcutsrc"
    "kscreenlockerrc"
    "ksmserverrc"
    "kcminputrc"
    "dolphinrc"
)

echo -e "${YELLOW}Sauvegarde des fichiers de configuration...${NC}"
for file in "${CONFIG_FILES[@]}"; do
    if [ -f "${HOME}/.config/$file" ]; then
        cp "${HOME}/.config/$file" "${BACKUP_DIR}/.config/"
    fi
done

if [ -d "${HOME}/.config/kdedefaults" ]; then
    cp -r "${HOME}/.config/kdedefaults/"* "${BACKUP_DIR}/.config/kdedefaults/" 2>/dev/null
fi

# 2. Sauvegarde des dossiers .local/share ciblés
SHARE_FOLDERS=(
    "aurorae"
    "color-schemes"
    "icons"
    "plasma"
    "wallpapers"
)

echo -e "${YELLOW}Sauvegarde des assets graphiques (thèmes, icônes, wallpapers)...${NC}"
for folder in "${SHARE_FOLDERS[@]}"; do
    if [ -d "${HOME}/.local/share/$folder" ]; then
        rm -rf "${BACKUP_DIR}/.local/share/$folder"
        cp -r "${HOME}/.local/share/$folder" "${BACKUP_DIR}/.local/share/"
    fi
done

# 3. Sauvegarde spécifique de tes curseurs dans ~/.icons
if [ -d "${HOME}/.icons" ]; then
    echo -e "${GREEN}[OK] Dossier ~/.icons détecté. Sauvegarde des curseurs...${NC}"
    rm -rf "${BACKUP_DIR}/.icons"
    cp -r "${HOME}/.icons" "${BACKUP_DIR}/"
else
    echo -e "${YELLOW}[Attention] Pas de dossier ~/.icons trouvé à la racine.${NC}"
fi

echo -e "\n${GREEN}=== Sauvegarde terminée avec succès dans : ${BACKUP_DIR} ===${NC}"