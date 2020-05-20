# Total-Skyrim-Overhaul

- [Introduction](#Introduction)
- [Installation](#installation)
  - [Pre-Installation](#pre-installation)
    - [Installing Microsoft Visual C++ Redistributable Package](#installing-microsoft-visual-c-redistributable-package)
    - [Steam Config](#steam-config)
      - [Disable the Steam Overlay](#disable-the-steam-overlay)
    - [Change Steams Update Behavior](#change-steams-update-behavior)
    - [Set the Game language to English](#set-the-game-language-to-english)
    - [Clean Skyrim](#clean-skyrim)
    - [Start Skyrim](#start-skyrim)
  - [Using Wabbajack](#using-wabbajack)
    - [Preparations](#preparations)
    - [Downloading and Installing](#downloading-and-installing)
      - [Problems with Wabbajack](#problems-with-wabbajack)
  - [Post-Installation](#post-installation)
    - [Copy Game Folder Files](#copy-game-folder-files)
- [Updating](#updating)
- [Gameplay Guide](#gameplay-guide)
- [In-Game MCM Options](#in-game-mcm-options)
- [FAQ](#faq)
- [Tweaking Performance](#tweaking-performance)
  - [Tweaking the Game Settings](#tweaking-the-game-settings)
- [Removing the Modlist](#removing-the-modlist)
- [Credits and Thanks](#credits-and-thanks)
- [Contact](#contact)
- [Contributing](#contributing)
- [Changelog](#changelog)

# Introduction
Total Skyrim Overhaul is a requiem based modlist, this means it is difficult. If you are looking for a gameplay experience that does not require careful planning I suggest playing Keizaal, The Phoenix Flavor, or Lexy’s instead. 

I will not provide support on how to add or change any mods beyond what is already provided. Do not ask me for help if you changed things. If you do not have experience modding requiem on SSE and patching with xedit I suggest you do not even think of changing anything.

If a question is sufficiently answered in this readme I will not respond to support requests relating to it. Please read the readme, I wrote it for a reason. If your question is not in the readme I will answer it to the degree possible.

NSFW Warning: This list contains nude models for female and males. To mostly remove nudity follow this guide.
## Installation

### Pre-Installation

These steps are only needed if you install this Modlist for the first time. If you update the Modlist, jump straight to [Updating](#updating).

#### Installing Microsoft Visual C++ Redistributable Package

I doubt you need to do this since you likely already have this installed. The package is required for MO2 and you can download it from [Microsoft](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). Download the x64 version under "Visual Studio 2015, 2017 and 2019". [Direct link](https://aka.ms/vs/16/release/vc_redist.x64.exe) if you can't find it.

#### Steam Config

##### Disable the Steam Overlay

The Steam Overlay can cause issues with ENB and is recommended to be turned off.

Open the Properties window (right click the game in your Library->Properties), navigate to the _General_ tab and un-tick the _Enable the Steam Overlay while in-game_ checkbox.

#### Change Steams Update Behavior

SSE is still being updated by Bethesda (they only add Creation Club content). Whenever the game updates, the entire modding community goes silent for the next one or two weeks because some mods need to be updated to the latest game runtime version.

To ensure that Steam does not automatically updates the game for you, head over to the Properties window, navigate to the _Updates_ tab and change _Automatic updates_ to _Only update this game when I launch it_. You should also disable the Steam Cloud while you're at it.

#### Set the Game language to English

Just do it. This entire Modlist is in English and 99% of all mods you will find are also in English. I highly recommend playing the game in English and **I will not give support to people with a non-English game**.

Open the Steam Properties window, navigate to the _Language_ tab and select _English_ from the dropdown menu.

#### Clean Skyrim

I highly recommend uninstalling the game through Steam, deleting the game folder and reinstalling it. You should also clean up the `Skyrim Special Edition` folder in `Documents/My Games/`.

#### Start Skyrim

After you have done everything above and got a clean SSE installation ready, start the Launcher and open the _Options_ menu.

1. Click on _High_
2. Set the _Aspect Ratio_ and _Resolution_ to your monitor's native values
3. Set _Antialiasing_ to _Off_
4. Check _Windowed Mode_ and _Borderless_

Start the game and exit once you're in the main menu.

### Using Wabbajack

#### Preparations


Grab the latest release of Wabbajack from [here](https://github.com/wabbajack-tools/wabbajack/releases) and place the `Wabbajack.exe` file in X:\Wabbajack

#### Downloading and Installing

The download and installation process can take a very long time depending on your system specs. Wabbajack will calculate the amount of threads it will use at the start of the installation. To have the highest amount of threads and thus the fastest speed, it is advised to have the working folder on an SSD.

1. Open Wabbajack
2. Load the Modlist from Disk
3. Set TSO to install to X:\Total Skyrim Overhaul and download to X:\Total Skyrim Overhaul\Downloads. Your downloads folder can be on a separate drive to save space but wabbajack's install speed will be limited to your slowest drive. 
4. Click the Go/Begin button
5. Wait for Wabbajack to finish

##### Problems with Wabbajack

There are a lot of different scenarios where Wabbajack will produce an error. I recommend re-running Wabbajack before posting anything. Wabbajack will continue where it left off so you loose no progress.

**Could not download x**:

If a mod updated and the old files got deleted, it is impossible to download them. In this case just wait till I update the Modlist.

**Wabbajack could not find my game folder**:

Wabbajack will not work with a pirated version of the game. If you own the game on Steam, go back to the [Pre-Installation](#pre-installation) step.

### Post-Installation

#### Copy Game Folder Files

Download the latest ENB Series from [here](http://enbdev.com/download_mod_tesskyrimse.htm) and copy `d3d11.dll` and `d3dcompiler_46e.dll` to your game folder.

Copy the all of the files from the `MO2/Game Folder Files` directory into your game folder.

## Updating

If this Modlist receives an update please check the Changelog before doing anything. Always backup your saves or start a new game after updating.

**Wabbajack will delete all files that are not part of the Modlist when updating!**

This means that any additional mods you have installed on top of the Modlist will be deleted. Your downloads folder will not be touched!

Updating is like installing. You only have to make sure that you select the same path and tick the _overwrite existing Modlist_ button.

# Gameplay Guide

GAMEPLAY QUESTIONS WILL NOT BE ANSWERED IN #TSO-SUPPORT, GO TO #GAMEPLAY-SPOILERS ON THE [TSO DEV SERVER](https://discord.gg/ueJH6Jz)

## Perks

Requiem 1.9.4.1 is an extremely perk focused mod. Every skill requires the initial perk to be usable. For example, you will not be able to pick any locks without the first perk in lockpicking, if you don’t have any perks in one handed you will struggle to even swing a sword, and you will not be able to make any potions without a single perk in alchemy. Requiem grants you three perk points at level one. Choose wisely.

AZ Tweaks introduces another twist on the perk system via the treatise requirement for magic and crafting skills. At the start of the game you will get a prompt informing you of this system. The first magic or crafting perk will not require a treatise or book, but every subsequent initial perk will. If you do not choose any magic perks you will receive a scaling health bonus up to 100 hp. If you do not choose any crafting perks you will receive a 20% barter bonus.

IMPORTANT: Due to LOTD compatibility treatises had to be renamed. They still function as they would in AZ Tweaks just they are returned to their original titles as skill books for their respective magic schools. All you need to do is find a relevant skill book for that magic school and you can unlock the first perk of that school. The book does not need the word “treatise” in its title. Check this UESP page for titles.

As standard in requiem each smithing tier will require the respective book before you can spend a perk point. These books are scattered throughout the world in places where they logically belong. You will have to earn them.

## Equipment Durability

TSO features Equipment Durability System. Untempered unenchanted items will have a chance of breaking once their durability reaches 0. It might not occur immediately but it will happen quickly. Do not enter battle with nearly broken gear if you want to leave it with those items. EDS deletes the items when they are broken beyond repair. Enchanted and unique items are exempt from being breakable. 

There are three primary ways of obtaining tempered items. First, from tempering the item yourself via the smithing skill tree. Second, from paying a smith to do it for you through their dialogue added by honed metal. Third, some enemies may have tempered items. 

Requiem has an additional setting that causes wooden bows to break when melee’d. This is entirely separate from the equipment durability system and does not care if you have tempered the bow or not. If you want to be an archer the best plan is to not get hit or to quickly find a good bow.

## Spell Research

TSO uses Spell Research as the primary method of acquiring new spells. Custom patches adjusting the economy and import of spell research spells have been made. The system is time consuming and very important if you wish to have higher level spells as a mage. I suggest you read the spell research mod page in detail on how it works. 

As of TSO v2.4 the only way to access spells from Forgotten Magic Redone is via spell research. These spells are stronger than similar spells of the same tier and cost so it will be well worth your while to fish in spell research for the spells that you want.

## Food and Rest

TSO does not use any survival mods, but you will still need to eat and sleep. AZ Tweaks food comes in sizes and three categories. Main courses provide significant buffs that last for a long time, these typically are not active in combat. Snacks provide shorter term buffs that may be stronger than those found in main courses and some are active in combat. You may have one main course and one snack active at a time. If you find you’re having difficulty sustaining stamina or magicka, you probably need to eat a main course with relevant buffs.

AZ Tweaks introduces a rested experience bonus. If you want your skills to level at a reasonable rate you should remember to sleep regularly.

## Combat Mods

TSO uses The Ultimate Dodge Mod, Wildcat, Speed and Reach fixes, and Ultimate Combat to provide a completely revamped experience. Many features have been adjusted or turned off for requiem compatibility. However expect enemies to duck, weave, and generally be extremely aggressive when they would have not otherwise done so. In return your proper play will be rewarded by you not dying.

Most hits will cause some form of stagger, try not to get hit.

NPCs from the races of tamriel have a passive fortify health buff. Due to issues with UI display this will make it appear like your first hit does little or no damage. You are doing damage, just not enough.

## Religion

TSO uses SNBCJ’s excellent Immersive Divine Blessings as a core religious system as a replacement for AZ Tweak’s religious system. Daedra worship is managed by AZ Tweaks Daedric Worship. Reading both mod pages is a good idea in planning out the available buffs to your character. Consider your actions carefully as the gods shall judge you.

## Vampirism

Vampiric Thirst by MsLeeches is the vampire mod used in TSO. It has significantly different mechanics than sacrosanct or better vampires. Early vampire gameplay will be a constant struggle to remain alive. Once you have stabilized you will slowly become the terror in the night.

Remember due to immersive divine blessings you cannot use or carry any silver items. Similarly, Meridia takes an immersive view on those that must be purged. Be wary of her artifacts.

## Realm of Lorkhan

I have created a heavily modified version of the Realm of Lorkhan specifically for TSO. Scattered through containers in the realm you will find viable starting equipment and the doors provide some choices of safe starting locations. Many aspects of RoL have been intentionally removed as they were unbalanced. 

LAL will not be added as it does not allow players to pick their starting gear and has some other issues. Skyrim Unbound skips Bleak Falls Barrow, an important filter for requiem. Do not ask me about adding either of these mods I will only reply with a screenshot of this paragraph. 

## Starting Tips

My advice for starting out: grab as much as you can from RoL you’ll need it. Make sure everything you own is tempered before getting into combat unless you want to end the fight naked. Have a companion, they’re worth the expense. Remember to keep a main course buff up. Riften and whiterun are good starting areas as they have a lot of bandits. Don’t be afraid to run from a fight that you can’t win, or at least run to somewhere easier to recover your belongings from when you die. And most important of all, gitgud.


## In-Game MCM Options

Notes indicate settings to change, if not specified leave as default. 
- X = Enable 
- O = Disable
**Immediately after creating your character open your inventory and close it.**

## All Geared Up Deriv.
Misc. - Player

- Enable Misc Item Display: O

NPC
- Enable Coin Purse: O
- Enable Ingredient Satchel: O
- Potions: O
- Scroll: O
- Torch: O

## Death is Highly Overrated: Redone
- Skill Loss Notifications: X

Cure Disease Options

- Amulet of Arkay Respawn: X
- Health Potion Respawn: X
- Unassisted Respawn: X

Respawn Options
- Revive Seconds: 3
- Skills to Decrease: 6

## ESF Companions
Hit apply preset 
Joining
- Thieves Guild Members Can Join: X

Quest Tweaks
- Radiant Quest Reward Gold
- Use Default Gold Rewards: O
- Gold per Guild Rank: 100
- Gold per Player Level: 0
- Gold per Quest Difficulty Level: 100
Miscellaneous: Beast Blood
- Aela Will Offer: Unlimited

## Extended UI
Hide Legendary UI elements: X

## Follower Framework
System
- Load configuration file
Set hotkeys at your discretion

## Forgotten Magic Redone
Settings
- Spell Book Drop Chance: 0%
- Jewelery Drop Chance: 1%

## Quick Light
- Brightness: Bright

## Requiem (Wait until Requiem/AZT tells you they’re ready)
Combat
- No non-hostile Bull Rush/Trample: X
Atmosphere
- Dragon random spawn interval: 6 days
- Heartbeat threshold: 5%
- Cleared cell respawn time: 90 days

## Skyrim Unique Treasures
- Lore friendly unique items only: X

## Spell Research
Navigate to options and click import spells
Close MCM and select yes on every prompt

Options -> Experience
- Set all to 0

## The Ultimate Dodge Mod
**Rebind sneak key as you want or leave it alone**

NPC Settings: NPC dodging frequency
- Not frequent

## Thieves Guild Req.
- Select load preset

## Ultimate Combat

General
Timed Block
- Effective Time: 0s
- Blur Strength: 0

Game Balance Settings
- Speed bonus: O

Others
- Swing Effect: O

Stagger
- Enemy Poise: O
- Player Stagger: O

Locational Damage
- Headshot Message: O
- Locational Damage Sound: O
- Locational Damage Effect: O

NPC Setting
- Giant HP Multi: 1
- Dragon Priest HP Multi: 1
- Centurion HP Multi: 1

**Disable NPC Dodge**

## VT & Requiem
- Options -> Click disabled to enable the mod

## Wildcat
- Disable Penalties vs Massive Targets: X


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

How do I prevent my headgear from being unequiped out of combat?
- Modify the Dynamic Equipment Manager JSON

I think I found a bug! Here are some things that are not bugs:
- Blue swirling effect around some NPCs
- Red effect around vampires/werewolves
- Vampires/werewolves rapidly dying from nothing
- Being permanently out of stamina/magicka
- Any other persistent effect on your character
- Armors that are invisible on male characters
- Unable to allocate the first magick/crafting skill point
- Honed metal is weak
- The game yells that I fucked up when I die
- Unable to drop or deposit gold

## Tweaking Performance

My Setup:

- Ryzen 2600x
- AMD 5700
- 32GB DDR4
- Game and MO2 running on a m2 drive

### Tweaking the Game Settings

I highly recommend using [BethINI](https://www.nexusmods.com/skyrimspecialedition/mods/4875) which is included in this Modlist (can be found in `MO2/tools/BethINI`). I recommend tweaking the `Detail` section for more FPS:

- `Shadow Resolution`: Very big one. A good balance is `2048` which is the borderline between high FPS drainage and garbage looking shadows.
- `Ambient Occlusion`: Highly recommended to leave this at `None`. The ENB this Modlist comes with, uses the ENB SAO which is 10x better and performance friendly than base game SAO.
- `Detailed Draw Distance`: Maybe try `2000` instead of `2800` but you won't notice a lot of FPS gain (maybe 1-3)
- `Remove Shadows`: If you really struggle, use this. This will disable all Shadows (not recommended)

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
- Benjamin Jessat
- LanHsah


## Contact

While I'm always available on the [Wabbajack Discord](https://discord.gg/wabbajack), I would advise checking the [Issues](https://github.com/NotTotal/Total-Skyrim-Overhaul/issues) (open **and** closed ones) on GitHub first if you have any problems. **DO NOT DM ME ON DISCORD. I WILL NOT PROVIDE SUPPORT FOR YOU IN DMS**.

## Contributing

See [Contributing](CONTRIBUTING.md).

## Changelog

See [Changelog](CHANGELOG.md).
