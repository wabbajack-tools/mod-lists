# Total-Visual-Overhaul
A visual only Wabbajack modlist for Skyrim SE

- [Preamble](#preamble)
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
- [Noteworthy Mods](#noteworthy-mods)
  - [Expanded Cities Towns and Villages](#expanded-cities-towns-and-villages)
  - [NPC Retextures](#npc-retextures)
  - [Weather](#weather)
  - [ENB Suggestions](#enb-suggestions)
  - [Listmaker](#listmaker)
- [Creating your Character](#creating-your-character)
- [FAQ](#faq)
- [Tweaking Performance](#tweaking-performance)
  - [Tweaking the Game Settings](#tweaking-the-game-settings)
- [Removing the Modlist](#removing-the-modlist)
- [Credits and Thanks](#credits-and-thanks)
- [Contact](#contact)
- [Contributing](#contributing)
- [Changelog](#changelog)

# Preamble

Total Visual Overhaul is a nearly **visual only** Wabbajack modlist. It has no additional quests, followers, items, or significant gameplay changes. In the interest of having a playable FPS on a reasonable range of computers most textures are sized to 2k, even if the mod name says 4k. 

Citys, towns, and villages have been overhauled with a combination of JK's Skyrim, Cities of the North, and Obscure's College of Winterhold. These are the only significant gameplay facing changes from vanilla skyrim. 

While this modlist is significantly easier to build upon than other Wabbajack modlists, you will still need to do it properly if you want a stable and properly functioning game. This means you will need to use xedit. A lot. **Using xEdit is the answer to every compatability question.**

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

Let's get to the actual installation. Grab the latest release of Elder Souls from [the release tab](https://github.com/jdsmith2816/eldersouls/releases).

Download the release to a _working folder_. This folder **must not** be in a _common folders_ like your Desktop, Downloads or Program Files folder. It's best to create a Wabbajack folder near the root level of your drive like `C:/Wabbajack`.

Grab the latest release of Wabbajack from [here](https://github.com/wabbajack-tools/wabbajack/releases) and place the `Wabbajack.exe` file in the _working folder_.

#### Downloading and Installing

The download and installation process can take a very long time depending on your system specs. Wabbajack will calculate the amount of threads it will use at the start of the installation. To have the highest amount of threads and thus the fastest speed, it is advised to have the working folder on an SSD.

1. Open Wabbajack
2. Load the Modlist from Disk
3. Adjust the download and installation paths
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

## Noteworthy Mods

### Expanded Cities Towns and Villages

TVO comes with JK's Skyrim, Cities of the North, and Obscures College of Winterhold. The relevant patches for TVO have been merged across the various merges. If you wish to install anything that would require a patch for any of these mods, I suggest that you unmerge all of the merges while going through the patch fomod. 

### NPC Retextures

The priority looks like this (same order as MO2, the ones at the bottom overwrites the ones at the top):

1. Ethereal Elven Overhaul
2. Men of Winter
3. Metal Sabers Beautiful Orcs of Skyrim
4. Kalilies NPCs
5. Pandorable's NPCs
6. Pandorable's NPCs - Dragonborn
7. Pandorable's NPCs - Dawnguard
8. Bijin NPCs
9. Seranaholic
10. Valericaholic

If you the load order of any of these mods in mo2 **you must change the plugin load order** as well or there will be black face bugs. If you add any additional NPC retexture mods you must add the plugin name to NPC Visual Transfer in zEdit or there will be black face bugs.


### Weather

TVO comes with three different weather mod choices, Obsidian, Cathedral, and Picturesque. Obsidian is enabled by default with all of its relevant parts and additions merged and patched for you. If you swap out Obsidian make sure to disable the entire separator in MO2 or you'll get some weird visual results.

[Obsidian Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/12125) provides sharp, ominous, and atmospheric weathers that accentuate proximal detail while obscuring distant landscapes with mysterious fogs. It has the support for the widest range of ENBs and is in my opinion the best weather mod once merged together with all of its addons. However, the horizon seam on Obsidian is not great.

[Cathedral Weathers](https://www.nexusmods.com/skyrimspecialedition/mods/24791) would be clearly the best weather mod on SE if it wasn't such a pain in the ass to make an ENB for. The enb options for Cathedral are good, it just does not have the wide range of choices that Obsidian does. Cathedral fixed the horizon seam issue that Obsidian has.

[Picturesque](https://www.nexusmods.com/skyrimspecialedition/mods/32364) is an incredibly good weather/enb combo mod. If you want an effects heavy experience similar to that found in LE this is about as close as you'll get in SE. 


### ENB Suggestions

TVO does not come with any prepackaged ENBs. Swap them around using [ENB Manager](https://www.nexusmods.com/skyrimspecialedition/mods/4143) until you find one that you like. In general you want to find a recently updated ENB due to the numerous, frequent, and significant changes Boris makes to ENB. Here are a list of ENBs I have used and would suggest:  

Obsidian
- [Rudy ENB](https://www.nexusmods.com/skyrimspecialedition/mods/4796)
- [SkyrimSE Re-Engaged ENB](https://www.nexusmods.com/skyrimspecialedition/mods/1089)
- [Natural View Tamriel](https://www.nexusmods.com/skyrimspecialedition/mods/11203)
- [The Truth](https://www.nexusmods.com/skyrimspecialedition/mods/9162)
- [Silent Horizons ENB](https://www.nexusmods.com/skyrimspecialedition/mods/21543)

Cathedral
- [Serio's ENB](https://www.nexusmods.com/skyrimspecialedition/mods/30506)
- [Silent Horizons ENB](https://www.nexusmods.com/skyrimspecialedition/mods/21543)
- [Lucid ENB](https://www.nexusmods.com/skyrimspecialedition/mods/27481)

Picturesque
- [Picturesque ENB](https://www.nexusmods.com/skyrimspecialedition/mods/32364) - you **must** use this enb with picturesque

### Listmaker

Listmaker, created by JDsmith2816, is an extremely useful UPF patcher for the mass distribution of weapons through leveled lists and NPC records. Listmaker replaces every regular unenchanted vanilla weapon record with vLitemtypematerial leveled lists in leveled lists and NPCs. This means that an NPC that previously had an iron sword will now have vLitemSwordIron in its place. These leveled lists contain the original item as a base as well as whatever you put inside of them. The source leveled lists can be found in listmakertemplate.esp

If you want to patch your weapon mods into the listmaker system the first thing you should do is normalize every weapon to an appropriate vanilla weapon. This will ensure that there are no strange power jumps, inconsistency, or significant economy problems due to the spread of new weapons. 

Once you have normalized the weapons you've added to your modlist, go into xedit and for every weapon mod you've added copy as override the base listmaker the relevant templates into a new plugin. It does not matter what you name the plugin. Place every weapon you want to have spawn in the place of the base weapon in the corresponding leveled list. If you have more than one weapon mod adding weapons to the same leveled list I suggest using mator smash **only on those listmaker plugins** to quickly merge them together. Remember to check the output of mator smash at the end to ensure there are no strange results. You can then merge the result or leave the plugins alone.

Once you're done, run the listmaker patcher. Your modded weapons should now appear all throughout the game on modded and vanilla content.

## Creating your Character

Simply step up to the statue of mara and choose a start.

## FAQ

Why are the weathers unticked at the bottom of mo2
- They're supposed to be in the separators a but a wabbajack bug puts them at the bottom of mo2. Just move them to the appropriate separator if you're using them.

Is x mod compatible with this list?
- I have no idea, check it in xEdit

Will you help me add x mod to this list?
- Not beyond the already provided materials. You're going to have to open up xEdit and figure it out.

The modlist is down, when will it be back up?
- Sometime soon most likely, check the pins in #tvo-support

Will you make a version of this for lower end machines?
- No

I think this texture/mesh/mod is better than the one used in tvo
- file a github issue with comparison screenshots and a link to the mod

## Tweaking Performance

My Setup:

- Ryzen 2600x
- AMD 5700
- 32GB DDR4-3200 RAM
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

- _YOU_ for actually reading the readme. Thanks a ton!!
- The Phoenix Flavor by Phoenix - General ideas and awesomesauce derived therefrom
- Lotus by erri120 - Repository template and NPC visuals
- JDsmith2816 - who's readme I forked from the lotus readme
- Halgari and everyone the WJ Team - Wabbajack is awesome and so are you

## Contact

While I'm always available on the [Wabbajack Discord](https://discord.gg/wabbajack) and on [My Discord](https://discord.gg/ueJH6Jz), I would advise checking the [Issues](https://github.com/NotTotal/Total-Visual-Overhaul/issues) (open **and** closed ones) on GitHub first if you have any problems. The same goes for _Enhancements_ or _Feature/Mod Requests_. **DO NOT DM ME ON DISCORD. I WILL NOT PROVIDE SUPPORT FOR YOU IN DMS**.

## Contributing

See [Contributing](CONTRIBUTING.md).

## Changelog

See [Changelog](CHANGELOG.md).
