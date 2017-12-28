# Dotfiles
Ce repo vas surtout me servir en cas de problème sur mon pc.
Vous pouvez comme même l'utiliser si besoin.

![Mon écrant](./screen/i3_screen.png)
![Mon écrant en dev](./screen/i3_screen_dev.png)


## Mon OS : 

J'utilise xubuntu 17.04.

## Interface graphique :

Mon interface graphique est i3wm coupler a i3-gaps pour avoir un espacement entre mais fenêtre quand il y en a plusieurs.

Tout d'abord installer i3 :
```
sudo apt-get install i3
```
Ensuite, relancez votre session et laisser comme touche votre touche Windows comme touche mod.


Ensuite, on installe i3-gaps:
Puis pour l''installer render-vous sur leur [repo](https://github.com/Airblader/i3).

Et faites les manipulations suivantes : 
*P.S. : Je les pris directement de leur repo.*
```sh
cd /path/where/you/want/the/repository

# clone the repository
git clone https://www.github.com/Airblader/i3 i3-gaps
cd i3-gaps

# compile & install
autoreconf --force --install
rm -rf build/
mkdir -p build && cd build/

# Disabling sanitizers is important for release versions!
# The prefix and sysconfdir are, obviously, dependent on the distribution.
../configure --prefix=/usr --sysconfdir=/etc --disable-sanitizers
make
sudo make install
```

Il ne reste plus que a rajouter dans votre fichier de config :
~ ./.config/i3/config 
```
for_window [class="^.*"] border pixel 5
for_window [class=".*"] title-format "   %title"
gaps inner 10
smart_border on
smart_gaps on
```

## Mais logiciel :

- Pour dev : VSCode / Atom / Intelij
- Navigateur : Vivaldi
- Discord 
- Terminal : urxvt-unicode
- Musique : Spotify
- Video : VLC ou leteur de base
- Lanceur d'app : rofi





