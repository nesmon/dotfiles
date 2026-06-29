var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1440x960": "",
                    "ItemGeometries-1490x993": "",
                    "ItemGeometries-2160x1440": "",
                    "ItemGeometries-993x1490": "",
                    "ItemGeometriesHorizontal": "",
                    "ItemGeometriesVertical": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "630",
                    "DialogWidth": "810"
                },
                "/General": {
                    "changedPositions": "{}",
                    "lastResolution": "1440x960",
                    "positions": "{\"1440x960\":[\"1\",\"13\"]}",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/lily/Pictures/wallpaper/IvyTitle.webp",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "hideInEditModeEnabled": "true"
                        }
                    },
                    "plugin": "org.kde.panel.transparency.toggle"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "launchers": "preferred://filemanager,preferred://browser,applications:Alacritty.desktop,applications:obsidian.desktop,applications:vesktop.desktop,applications:systemsettings.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.6666666666666667,
            "hiding": "autohide",
            "lengthMode": "fit",
            "location": "bottom",
            "maximumLength": 80,
            "minimumLength": 80,
            "offset": 0,
            "opacity": "translucent"
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/Appearance": {
                            "widgetButtonsAnimation": "99",
                            "widgetElements": "windowTitle",
                            "widgetHorizontalAlignment": "4",
                            "widgetToolTipMode": "Disabled",
                            "windowTitleSource": "AppName",
                            "windowTitleUndefined": "LilyBook"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/TitleReplacements": {
                            "titleReplacementsPatterns": "^ *$",
                            "titleReplacementsTemplates": "LilyBook",
                            "titleReplacementsTypes": "1"
                        }
                    },
                    "plugin": "com.github.antroids.application-title-bar"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.4444444444444444,
            "hiding": "normal",
            "lengthMode": "fit",
            "location": "top",
            "maximumLength": 16.833333333333332,
            "minimumLength": 10.333333333333334,
            "offset": 0,
            "opacity": "translucent"
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "hideInEditModeEnabled": "true"
                        }
                    },
                    "plugin": "org.kde.panel.transparency.toggle"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "customButtonImage": "/home/lily/Pictures/wallpaper/Empty.png",
                            "favoritesPortedToKAstats": "true",
                            "forceDarkMode": "false",
                            "useCustomButtonImage": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.388888888888889,
            "hiding": "normal",
            "lengthMode": "fill",
            "location": "top",
            "maximumLength": 80,
            "minimumLength": 80,
            "offset": 0,
            "opacity": "adaptive"
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "actionsOrder": "lockScreen,switchUser,requestShutDown,requestReboot,requestLogout,requestLogoutScreen,suspendToRam,suspendToDisk",
                            "show_lockScreen": "false",
                            "show_requestLogoutScreen": "false",
                            "show_requestShutDown": "true",
                            "show_suspendToRam": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "3"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "67",
                            "popupWidth": "162"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.textonly",
                            "showTitle": "true"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/SensorColors": {
                            "cpu/cpu0/name": "89,144,165",
                            "power/(?!all).*/chargePercentage": "165,89,145",
                            "power/1160845828/chargePercentage": "220,130,255"
                        },
                        "/SensorLabels": {
                            "power/1160845828/chargePercentage": "Battery"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"power/1160845828/chargePercentage\"]",
                            "lowPrioritySensorIds": "[\"disk/all/free\",\"cpu/all/averageFrequency\",\"cpu/all/averageTemperature\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "361",
                            "popupWidth": "360"
                        }
                    },
                    "plugin": "org.kde.plasma.mediacontroller"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.4444444444444444,
            "hiding": "normal",
            "lengthMode": "fit",
            "location": "top",
            "maximumLength": 80,
            "minimumLength": 80,
            "offset": 0,
            "opacity": "translucent"
        },
        {
            "alignment": "right",
            "applets": [
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "10"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "451",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "showDate": "false",
                            "use24hFormat": "0"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.4444444444444444,
            "hiding": "normal",
            "lengthMode": "fit",
            "location": "top",
            "maximumLength": 80,
            "minimumLength": 80,
            "offset": 0,
            "opacity": "translucent"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
