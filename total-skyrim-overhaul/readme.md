# Total-Skyrim-Overhaul

- [Introduction](#Introduction)
- [Installation](#installation)
  - [Pre-Installation](#pre-installation)
    - [Installing Microsoft Visual C++ Redistributable Package](#installing-microsoft-visual-c-redistributable-package)
    - [Steam Config](#steam-config)
      - [Disable the Steam Overlay](#disable-the-steam-overlay)
    - [Change Steams Update Behavior](#change-steams-update-behavior)
  - [Using Wabbajack](#using-wabbajack)
    - [Preparations](#preparations)
    - [Downloading and Installing](#downloading-and-installing)
      - [Problems with Wabbajack](#problems-with-wabbajack)
  - [Post-Installation](#post-installation)
- [Updating](#updating)
- [Gameplay Guide](#gameplay-guide)
- [In-Game MCM Options](#in-game-mcm-options)
- [FAQ](#faq)
- [Removing the Modlist](#removing-the-modlist)
- [Credits and Thanks](#credits-and-thanks)
- [Contact](#contact)
- [Contributing](#contributing)
- [Changelog](#changelog)

# Introduction
Total Skyrim Overhaul is a requiem based modlist, this means it is difficult. If you are looking for a gameplay experience that does not require careful planning I suggest playing Keizaal, The Phoenix Flavor, or Living Skyrim instead. If you have never played requiem before I strongly reccomend you start with Serenity first.

I will not provide support on how to add or change any mods beyond what is already provided. Do not ask me for help if you changed things. If you do not have experience modding requiem on SSE and patching with xedit I suggest you do not even think of changing anything.

If a question is sufficiently answered in this readme I will not respond to support requests relating to it. Please read the readme, I wrote it for a reason. If your question is not in the readme I will answer it to the degree possible.

NSFW Warning: This list contains nude models for female and males.
## Installation

#### Installing Microsoft Visual C++ Redistributable Package

I doubt you need to do this since you likely already have this installed. The package is required for MO2 and you can download it from [Microsoft](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). Download the x64 version under "Visual Studio 2015, 2017 and 2019". [Direct link](https://aka.ms/vs/16/release/vc_redist.x64.exe) if you can't find it.

#### Steam Config

##### Disable the Steam Overlay

The Steam Overlay can cause issues with ENB and is recommended to be turned off.

Open the Properties window (right click the game in your Library->Properties), navigate to the _General_ tab and un-tick the _Enable the Steam Overlay while in-game_ checkbox.

#### Change Steams Update Behavior

SSE is still being updated by Bethesda (they only add Creation Club content). Whenever the game updates, the entire modding community goes silent for the next one or two weeks because some mods need to be updated to the latest game runtime version.

To ensure that Steam does not automatically updates the game for you, head over to the Properties window, navigate to the _Updates_ tab and change _Automatic updates_ to _Only update this game when I launch it_. You should also disable the Steam Cloud while you're at it.

### Using Wabbajack

#### Preparations

Grab the latest release of Wabbajack from [here](https://github.com/wabbajack-tools/wabbajack/releases) and place the `Wabbajack.exe` file in X:\Wabbajack

#### Downloading and Installing

The download and installation process can take a very long time depending on your system specs. Wabbajack will calculate the amount of threads it will use at the start of the installation. To have the highest amount of threads and thus the fastest speed, it is advised to have the working folder on an SSD. You can have the TSO and downloads folder be on separate drives without issue, aside from being limited by the slowest drive during wabbajack installation.

1. Open Wabbajack
2. Load the Modlist from Disk
3. Set TSO to install to X:\Total Skyrim Overhaul and download to X:\Total Skyrim Overhaul\Downloads. Your downloads folder can be on a separate drive to save space but wabbajack's install speed will be limited to your slowest drive. 
4. Click the Go/Begin button
5. Wait for Wabbajack to finish

##### Problems with Wabbajack

There are a lot of different scenarios where Wabbajack will produce an error. If you do not see an installation failed warning do not worry about it. If you feel like wabbajack is stuck or a download is hanging just restart wabbajack, it will pick up from exactly where you left off.  Please rerun wabbajack at least twice and try to manually download the file from nexus/ll first before posting about a failed download.

**Could not download x**:

If a mod updated and the old files got deleted, it is impossible to download them. In this case just wait till I update the Modlist.

**Wabbajack could not find my game folder**:

Wabbajack will not work with a pirated version of the game. If you own the game on Steam, go back to the [Pre-Installation](#pre-installation) step.

### Post-Installation

#### Starting the Game

Head over to the installation folder and locate an executable named ModOrganizer.exe and launch it. Once its launched there will be a dropdown box on the top right and a big run button next to it. Ensure it is set to SKSE by selecting it in the dropdown box and then hitting the run button.

## Updating

If this Modlist receives an update please check the Changelog before doing anything. Always backup your saves or start a new game after updating.

**Wabbajack will delete all files that are not part of the Modlist when updating!**

This means that any additional mods you have installed on top of the Modlist will be deleted. Your downloads folder will not be touched!

Updating is like installing. You only have to make sure that you select the same path and tick the _overwrite existing Modlist_ button.

# Gameplay Guide

GAMEPLAY QUESTIONS WILL NOT BE ANSWERED IN #TSO-SUPPORT, GO TO #GAMEPLAY-SPOILERS ON THE [TSO DEV SERVER](https://discord.gg/ueJH6Jz)

## 3Tweaks

TSO now features 3tweaks, a comprehensive overhaul of requiem designed to eliminate many of the meta gaming strategies people have developed over time and force you to actually play the game to progress. **The only way to gain skill levels is by potions of insight which you earn from end chests of locations or by fighting powerful enemies**. Additionally, the economy has been drastically rebalanced so you can no longer abuse alchemy or sell junk gear to vendors to become rich. 3Tweaks has many other significant changes to the ways that requiem works, which you will have to find out by playing.

## Perks

Requiem is an extremely perk focused mod. Every skill requires the initial perk to be usable. For example, you will not be able to pick any locks without the first perk in lockpicking, if you don’t have any perks in one handed you will struggle to even swing a sword, and . Requiem grants you three perk points at level one. Choose wisely.

As standard in requiem each smithing tier will require the respective book before you can spend a perk point. These books are scattered throughout the world in places where they logically belong. You will have to earn them.

## Equipment Durability

TSO features Equipment Durability. Items will degrade over time as you use them. This will be displayed with the name of the item being modified to show its degredation status. Items can be repaired by tempering

## Religion

TSO uses SNBCJ’s excellent Immersive Divine Blessings as a core religious system as a replacement for 3Tweak’s religious system. Reading the IDB mod page is a good idea in planning out the available buffs to your character. Consider your actions carefully as the gods shall judge you.

## Character Customization

TSO has two MCMs related to character customization that are easy to miss. Racemenu animated overlays will allow you to determine when overlays appear during combat. Skyrim outfit system allows you to set visual only outfits for various situations and locations. It's effectively transmog in skyrim, finally.

## In-Game MCM Options

All MCM options have been preconfigured

## FAQ

Why is there a lantern always attached to my character?  Why am I always casting light?
- This is provided by a mod called quick light.  Holding E will toggle a light on and off to help brighten darker areas

How do I update to a later version?
- All you have to do is rerun wabbajack with the new version of the installer. If you have the downloads wabbajack will hash everything, download any new mods, and make the necessary changes in your install folder. You do not need to recopy the game folder files unless they have changed.

How do I use High Poly Head?
- In racemenu search for “face part” and move the slider. HPH will work on any pre existing presets that you have, but you will need to use HPH's eyebrows.

How do I set skyrim to borderless windowed mode?
- Change the settings in the SSE Display Tweaks INI in MO2

I have an ultrawide monitor (21:9), how do I fix the aspect ratios?
- Install the following mods: Complete Widescreen Fix, Extended UI - Widescreen fix, Wider MCM menu for Skyui Widescreen Fix, SkyUI SE - Flashing Savegames fix - Widescreen Fix, Better MessageBox Controls Widescreen fix, Better Dialogue Control Widescreenfix

I have an 60+ Hz screen (100hz, 144hz). What should I do?
- Edit the SSE Display Tweaks ini to properly support your monitor.

Is [insert mod name here] part of the list?
- Check the modlist manifest. If there is something you want that is not in the list, I highly suggest you do not add it unless you know what you’re doing.

Will you add x mod to the list?
- I only take suggestions I did not ask for from people who send me a save of them legitimately killing alduin.

I think I found a bug! Here are some things that are not bugs:
- Blue swirling effect around some NPCs
- Unable to gain skill levels
- Red effect around vampires/werewolves
- Vampires/werewolves rapidly dying from nothing
- Being permanently out of stamina/magicka
- Any other persistent effect on your character
- Armors that are invisible on male characters
- Unable to allocate the first crafting skill point

## Performance

My Setup:

- Ryzen 2600x
- AMD 5700
- 32GB DDR4
- Game and MO2 running on a m2 drive

I get a consistent 55-60 fps in game. If you get bad frames I suggset swapping the enb to a lighter enb like The Truth or a performance preset of a fireamanaf enb for Obsidian. You may also want to adjust the ini settings to be lower via bethini. 

## Removing the Modlist

You can just remove the MO2 folder and be done with it. SKSE and ENB files will still be in your game folder so I recommend using [ENB and ReShade Manager](https://www.nexusmods.com/skyrimspecialedition/mods/4143) if you want to remove the ENB.

## Credits and Thanks
Total Skyrim Overhaul made by
- Total
Contributors
- JustThatKing
- NotSandwich
- Shelb
- Nathan
- Jdsmith2816
- OM3N1R
Halgari & Wabbjack Team
-For creating Wabbajack

Special Thanks
- MDC and Vaderade for the original readme template
- Erri for the base of the readme that was forked into elder souls from which this readme is forked
- DarkLadyLexy - Her list taught me how to mod properly and many choices were taken or inspired by it.
- Evertio - ENB light settings inspired by his LOTD+ guide
- The Wabbajack Team - For enduring months of hearing about this list before it was released

Mod Authors
- And of course, where would we be without Skyrim’s awesome mod authors? Thank you all for releasing the quality content that you guys do. PLEASE DO NOT FORGET TO ENDORSE THE AUTHORS!

Invisible Entity tier
- Moggi
- Dispo
            
Dremora tier

Churl Tier
- LanHsah


## Contact

While I'm always available on the [Wabbajack Discord](https://discord.gg/wabbajack), I would advise checking the [Issues](https://github.com/NotTotal/Total-Skyrim-Overhaul/issues) (open **and** closed ones) on GitHub first if you have any problems. **DO NOT DM ME ON DISCORD. I WILL NOT PROVIDE SUPPORT FOR YOU IN DMS**.

## Contributing

See [Contributing](CONTRIBUTING.md).

## Changelog

See [Changelog](CHANGELOG.md).
