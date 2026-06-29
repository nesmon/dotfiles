#!/usr/bin/env bash

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

BACKUP_DIR="${HOME}/dotfiles/kde"
TEST_USER="test"
TEST_HOME="/home/${TEST_USER}"

echo -e "${BLUE}=== Déploiement de la Sauvegarde sur '${TEST_USER}' ===${NC}"

if [ ! -d "$BACKUP_DIR" ]; then
    echo -e "${RED}Erreur : Le dossier de sauvegarde ${BACKUP_DIR} n'existe pas.${NC}"
    exit 1
fi

sudo -v

echo -e "${YELLOW}Fermeture de la session de '${TEST_USER}' et nettoyage...${NC}"
sudo loginctl terminate-user "$TEST_USER" 2>/dev/null
sudo rm -rf "${TEST_HOME}/.config" "${TEST_HOME}/.local" "${TEST_HOME}/.cache" "${TEST_HOME}/.icons"

sudo mkdir -p "${TEST_HOME}/.config" "${TEST_HOME}/.local/share"

echo -e "${YELLOW}Déploiement des configurations et des panels...${NC}"
if [ -d "${BACKUP_DIR}/.config" ]; then
    sudo cp -r "${BACKUP_DIR}/.config/"* "${TEST_HOME}/.config/"
fi

echo -e "${YELLOW}Déploiement des thèmes, icônes et fonds d'écran...${NC}"
if [ -d "${BACKUP_DIR}/.local/share" ]; then
    sudo cp -r "${BACKUP_DIR}/.local/share/"* "${TEST_HOME}/.local/share/"
fi

# Injection des curseurs au bon endroit historique
if [ -d "${BACKUP_DIR}/.icons" ]; then
    echo -e "${GREEN}Déploiement des packs de curseurs (~/.icons)...${NC}"
    sudo cp -r "${BACKUP_DIR}/.icons" "${TEST_HOME}/"
fi

sudo chown -R "${TEST_USER}:${TEST_USER}" "$TEST_HOME"

echo -e "\n${GREEN}=== Déploiement chirurgical terminé ! ===${NC}"