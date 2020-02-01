## Introduction

[Wabbajack discord](https://discordapp.com/invite/Wabbajack).

[Changelog](https://drive.google.com/open?id=1RIUaNs-NW7bj30T8jGPTW1nTN0u-N9C8)

**REQUIRES NEXUSMODS.COM PREMIUM ACCOUNT**

## Getting Started

This process requires `107`GB of hard drive space and takes a few hours depending on your internet and computer speed. Installing on an SSD is recommended.

Download `Wabbajack.exe`. This can be found in the [#builds](https://discord.gg/2ez4dAV) channel in the [Wabbajack discord](https://discordapp.com/invite/Wabbajack).

Create a folder at the root of your drive called Wabbajack. Place the Wabbajack.exe in this folder. i.e., `C:\Wabbajack\`

### Upgrading from previous versions of NOISE:

Wabbajack now supports in-place upgrades, however, anything that doesn’t match the modlist will be deleted. If you’ve added your own mods, back them up to be safe. 

Delete Nice Overall Improvement SE.wabbajack from the C:\Wabbajack\downloaded_mod_lists\ folder. Select NOISE from the Wabbajack UI modlist browser, and redownload. 

Overwrite the previous installation of NOISE, after you’ve ensured you’ve backed up your saves and mods that you included yourself.


### System Specs

With or without DynDOLOD generated, I recommend 4-6GB of VRAM for optimal performance, especially with an ENB. This guide requires you to generate LODs yourself, due to allowing other mods to be installed on top.

### Old Files Cleanup/Steam Config

This is only necessary one time, and only if you’ve used NMM or Vortex previously. If you have other Wabbajack modlists installed, ignore these instructions until you see **END IGNORE AT THE END OF THESE INSTRUCTIONS**

Next, delete any files you may have from old installations or previous modding adventures. Delete the following directories:

1. `C:\Program Files (x86)\Steam\steamapps\common\Skyrim Special Edition`
2. `C:\Program Files (x86)\Steam\steamapps\common\Skyrim Special Edition Mods`
    1. Note: This directory may not exist and will have been left over from previous usage of Wrye Bash.  

3. Open Windows Search and copy/paste `%LOCALAPPDATA%`
    1. Delete Skyrim Special Edition & LOOT ( If you have never run LOOT on your computer, this directory will not exist)

4. Open Windows menu and copy/paste `%APPDATA%`
    1. Delete zEdit & Mod Organizer (If you have never run zEdit or MO2 on your computer, these directories will not exist.)

5. Open Windows menu and copy/paste `%HOMEPATH%\Documents\My Games\`
    1. Delete Skyrim Special Edition

### Setting Up Skyrim

Next, open Steam, find The Elder Scrolls V: Skyrim Special Edition, right click on Skyrim, click Manage, then click Uninstall. Download and install Skyrim again.  

The Program Files folder is not recommended and could cause issues.

### Steam Overlay

1. Open Steam
2. Click Library at the top
3. Find The Elder Scrolls V: Skyrim Special Edition and right click it
4. Click properties
5. Uncheck `Enable the Steam Overlay while in-game`

### Update Proofing

1. Open Steam
2. Click Library at the top
3. Find The Elder Scrolls V: Skyrim Special Edition and right click it
4. Click Properties
5. Select the Updates tab
6. Under the Automatic Updates section, select the Only update the game when I launch it option

### Initial Skyrim Configuration

1. Open Steam
2. Launch The Elder Scrolls V: Skyrim Special Edition
3. In the launcher window that appears, click OPTIONS
4. In the menu that appears, click the Ultra button (this is irrelevant, we set up inis for you, but it's good to do anyway)
5. Set the Aspect Ratio 
6. Set the Resolution 
7. Set Antialiasing to Off
8. Make sure Windowed Mode is unchecked
9. Make sure Borderless is unchecked
10. OK to save the settings
11. Close the launcher window

### Setting Up Creation Kit

1. Download and install Bethesda.net Launcher.
2. Run the Launcher and sign in or create an account and sign in.
3. In the left pane, locate the icon for "Creation", which should look greyed-out.
4. Click on the "Creation" icon and select Install.
5. After completion of the installation, click on launch.
6. In the pop-up that appears, select YES.
7. Close the Creation Kit program.

## Installation

Create a new directory in the root directory of the hard drive where you want everything to be installed. Do not create a directory within your Skyrim folder. For this guide, we will create an example directory in C:\ called NOISE. You can create this folder on any drive.

Open Wabbajack.

Select the NOISE modlist from the Wabbajack UI.

At the bottom of the new window, the Installation Location will be the folder you created in the root directory of your hard drive. If you are creating these on your C:\ drive, please type in C:\NOISE in Installation Location and C:\NOISE\Downloads in the Download Location. After you have completed these steps, click Begin.

**DO NOT SET THE PATHS TO YOUR SKYRIM GAME FOLDER.**

**I REPEAT, DO NOT INSTALL MODLISTS TO YOUR SKYRIM STEAM FOLDER.**

A window will open in Wabbajack asking if you’d like to authorize Wabbajack to use your Nexus Mods account. Log in, and click authorize. Wabbajack will now install the mod pack for you.
Once Wabbajack has finished all of its processes, the right pane will say Installation complete! You may exit the program. At this point it is safe to close Wabbajack.

If you don’t see Installation complete, Wabbajack has encountered an error. Inside of the NOISE folder, delete everything except the downloads folder or Wabbajack.exe and the modlist file.

If you get an error immediately after authorizing Wabbajack on the Nexus website, download and install the [.Net Framework 4.8 Runtime](https://dotnet.microsoft.com/download/dotnet-framework/net48) executable. Restart your computer and start Wabbajack again.

If Wabbajack fails to download a mod, it means that the mod may have been updated on the Nexus. Wait for a new release of my Modlist. Look around in the release channel to see if I already mentioned that I'm going to update for this specific mod.

**Do not ask other people to share older files as this is a violation of the Nexus Terms of Service and Wabbajack’s server rules. This constitutes mod piracy and will result in an immediate ban.**

Expanding on server rules, **do NOT** contact outside authors such as DarkLadyLexy or Belmont Boy outside of the Wabbajack Discord for help with your Wabbajack installation.

## Installation Part 2

Now we have to copy files over into their correct spots. Navigate to `C:\NOISE\Game Folder Files\`. Copy all of these files and paste them into `C:\steamapps\common\Skyrim Special Edition\`

Follow the steps for Nvidia Profile Inspector on [Lexy's Guide](https://wiki.nexusmods.com/index.php/User:Darkladylexy/Lexys_LOTD_SE) for antialiasing and capping your FPS using your GPU driver, if not using ENB. For AMD users, use ENB or set the "Frame Rate Target Control" under "Global Settings". 

### Opening Mod Organizer 2

Navigate to `C:\NOISE\` and open `ModOrganizer.exe`

If it asks you to associate Mod Organizer 2 with nxm links, click yes.

### Launching The Game

In Mod Organizer 2, select SKSE from the drop down menu next to the Run button and click Run. This is how you will launch Skyrim from now on.

## Configuring MCM

After starting a new game, you will spawn in the LAL cell. You’ll find a key to the shelves on a table, with basic loadout necessities. When you’re ready, set up MCM settings and make a save before talking to the statue of Mara. Wait until the text in the top left is finished loading all of your mods, then press Esc and go to your MCM settings.

### Follower Framework

- Only Sandbox in Town: X
- Mounts: Riding Support Only
- Stealth: Extinguish Torches X

### Immersive Horses

- Standing Activation Action: Ride

- Sneaking Activation Action: Open Inventory

- Mounted Activation Action: Dismount

- Disable Trample Effect

### Immersive HUD

- Activation: Keypress toggles: X

### SKYUI

- Advanced: Disable all SWF Version Checking


### Violens

- Player Killmove Immunity: Enabled

Keep Advancing Killmoves to OFF. This can cause your character to become stuck in the terrain/walls/etc.


### Thieves Guild Requirements

Items Stolen: 100

Radiant jobs completed: 6, 15


### Realistic Water 2 Settings

  Kynesgrove X

  Rorikstead X

All other MCM settings can be configured as you like, or depending on extra mods you’ve installed.

**Smilodon’s and Obsidian Weathers configurations are powers. Set to your playstyle/preference.**

Alternate DynDOLOD Settings
---------------------------

By default, NOISE comes packed with premade LOD's. However, these LOD's are 2D and thus still have some pop in. If you would like to remove as much of this pop in as possible follow these instructions. Please note that doing this will cost you a significant chunk of performance (about 10 frames). This is not recommended if you're also using an ENB unless you have 8GB of VRAM.

1.  Deactivate the mod "NOISE - Dyndolod Output" in the left pane of MO2
2.  Open up your install folder and navigate to `tools\DynDOLOD\Edit Scripts\DynDOLOD\cache`
3.  If there are files other than becauseofreasons.txt delete them. Ensure that becauseofreasons.txt remains there.
4.  Go back one folder so you're in `tools\DynDOLOD\Edit Scripts\DynDOLOD`
5.  Open up DynDOLOD_SSE.ini in a text editor like notepad
6.  Scroll down to the line that says TreeLOD=1 and change it to 0
7.  Open MO2 and run TexGen
8.  Ensure that LOD Texture Size is 512
9.  Run it
10. Exit the program and run DynDOLOD
11. Click advanced on the window that pops up
12. Set the Output Directory to an empty folder somewhere
13. Set up DynDOLOD in accordance with the settings shown below, and then click the High preset at the top right.
    - In the top left selection box, check all of the boxes by right-clicking and then clicking "Select All".
    - Below the preset buttons, check the boxes marked "Candles" and "FXGlow".
    - In the options panel, tick the "Generate static LOD", "Generate DynDOLOD" "Windows", "High", "Fake lights in child worlds"
    - "Create texture atlas" checkboxes.
    - In the options panel change Max tile size to "512".
14. Ensure that all worlds are ticked on the top left
15. Click start - this process takes about 30 minutes depending on hardware
16. Once it's done make sure the log says it's complete and then hit "Save and Exit"
17. Navigate to where you set the output folder before and open it
18. Copy all of its contents and put it into the NOISE - Dyndolod Output mod
19. Overwrite when asked
20. Reactivate NOISE - Dyndolod Output and move DynDOLOD.esm just above FISS.esp

## Resources

To learn more about Mod Organizer 2, please [watch this video](https://www.youtube.com/watch?v=LwaC7gP7_JM).

All tools you install will be placed in `C:\NOISE\tools`. Then set them up as executables through MO2.

<https://forum.step-project.com/topic/13451-xlodgen-terrain-lod-beta-for-fnv-fo3-fo4-fo4vr-tes5-sse-tes5vr-enderal/>

<https://forum.step-project.com/topic/13894-dyndolod-beta-for-skyrim-special-edition-and-skyrim-vr-274/>

More resources and learning:

[How to Mod Skyrim SE](https://www.youtube.com/playlist?list=PLlN8weLk86XgJIZXTEPEcU1b6dzA_eJSB)

[MO2](https://www.youtube.com/watch?v=ruq6hQIAvB8&list=PLlN8weLk86Xh3ue76x2ibqtmMramwQmHB)

[Wrye Bash](https://www.youtube.com/watch?v=uYAEFk5QmLQ&list=PLlN8weLk86Xjiymt7aBPWD2epUftR7wss)

[Mator Smash](https://www.youtube.com/watch?v=2e-0mc8wmDs)

[xEdit](https://www.youtube.com/watch?v=wA5IlESvtCM&list=PLlN8weLk86XiGXJI4DaRa1QIq1zhDpD8V)

## Adding an ENB:

1.  If you want to add an ENB you need d3d11.dll and d3dcompiler_46e.dll files from [ENBSeries](http://enbdev.com/download\_mod\_tesskyrimse.htm) and place them in your Skyrim Game Folder along with the ENB files. Also grab any other files that the ENB you wish to add specifies.

2.  Refer to the installation instructions that are on the ENB’s page. I recommend anything made for Obsidian Weathers. Selection of ENB presets

I use NVT for Obsidian on my personal installation, ENB is not included with NOISE.

## Adding ReShade:

-   [ReShade Guide](https://www.youtube.com/watch?v=-jQ7OJy0818)

-   [Text Guide](https://reshade.me/forum/troubleshooting/5227)

## Adding mods:

1.  When adding mods it is important to be able to use modding tools.

2.  Tools commonly used include xEdit, zEdit, Wrye Bash, DynDOLOD, xLODGEN, Mator Smash, Merge Plugins Hide, and TexGen.  

3.  Add your mods into MO2 and place them in the left panel under the most appropriate separator. You can learn more about MO2 separators here: [Gamerpoets Video](https://www.youtube.com/watch?v=LwaC7gP7_JM)

4.  Check your mods for conflicts with any other mods in the list using xEdit. 

5.  Then proceed to use any tools that are necessary, converting the form id by resaving plugins in the Creation Kit, or optimizing meshes and textures with [CAO](https://www.nexusmods.com/skyrimspecialedition/mods/23316). (These are necessary for converting oldrim mods to work with SE)

## DO NOT USE LOOT TO SORT THE LOAD ORDER. DO IT MANUALLY BY CHECKING FOR CONFLICTS IN xEDIT

Rebuild the bashed patch. Refer to [Lexy's Guide](https://wiki.nexusmods.com/index.php/User:Darkladylexy/Finish_Page). Don't copy her bash tags as we have already set up custom ones. Also don't copy her settings tweaks as ours are automatically set.

Rebuild Smash Patch. Make sure to actually add the new mods to the patch and just set everything except Skyrim.esm to Smash.All

Refer to the [Method](https://www.nexusmods.com/skyrimspecialedition/mods/25522) (halfway down the page)

# F.A.Q

[Wabbajack Discord FAQ](https://discord.gg/qz9a2J)

## The difficulty is too hard/easy!

-   Use the difficulty slider in options, configure Smilodon's Power.

## The dungeons are too dark!
-   What dungeons, realistically, aren't dark? Hold "E" to turn on your lantern.

## What's in this modlist?
-   [List of Mods thanks to Fantastigasmical Alice](https://drive.google.com/open?id=17ip66aRyaohUOtE_y4FXTVA20_uJaBKk) 

## There are empty mods with red X's!
-   Leave them alone. Do not touch. Do not touch anything in optional folders. These mods are merged. This applies to all modlists.

## Can you add/remove X mod?
-   Only if I feel like it. But at this point, the answer will probably be no. This is meant to be added on to. Add it yourself.

## The modlist updated, and you added/removed X mod?!?! Why??!?
-   Because I felt like it, or it didn't fit my original vision, or it's too much of a hassle to deal with. I have a limited time left on this planet and don't want to recompile/fix things every 5 minutes. If you enjoy the version you're on, there is no need to update with WJ. You can update mods yourself, and check for relevant updates by using the Updated tab on the [SSE Nexus](https://www.nexusmods.com/skyrimspecialedition?tab=updated)

## How do I redo Smash Patch?
-   NOISE specific: Smash patch you just add everything to the patch and set everything to smash.all except for Skyrim.esm, which you don't put in the patch. We use Wrye Bash only for tweaks, due to the app storing files in various locations and causing variables on end-user/modlist dev PC's.

## I want to use another body instead of the UNP that comes with Diversity.

You have multiple options:
1.  Normal CBBE
2.  CBBE SE (don't even bother, its outdated)
3.  CBBE 3BBB Normal or Advanced version
4.  Normal UNP (already included in Diversity)
5.  BHUNP 3BBB

The most important question you need to answer is "Do you wanna see them tiddies bouncing"? If you're answer is "no" then you should go with either normal CBBE or normal UNP (already included).

If you're answer is "hell yes" then you have to decide between going CBBE 3BBB or BHUNP 3BBB. 3BBB is a new type of body which utilizes 3  breast&butt bones and are very modern and new. Since the dawn of mankind we have asked the question "CBBE or UNP"? This is something you have to decide on your own.

## CBBE 3BBB:

-   Download [CBBE](https://www.nexusmods.com/skyrimspecialedition/mods/198) (install options don't really matter)
-   Download [XPMSSE](https://www.nexusmods.com/skyrimspecialedition/mods/1988) (make sure to install the new physics skeleton)
-   Download [HDT-SMP](https://www.nexusmods.com/skyrimspecialedition/mods/30872)
-   Download [CBPC](https://www.nexusmods.com/skyrimspecialedition/mods/21224) (pick the right runtime version, the preset options don't matter since CBBE 3BBB comes with it's own config
-   Download [CBBE 3BBB](https://www.nexusmods.com/skyrimspecialedition/mods/30174) or [CBBE 3BBB Advanced](https://www.loverslab.com/topic/133779-cbbe-3bbb-advanced/)

The difference between CBBE 3BBB and CBBE 3BBB Advanced is that the latter was made with SexLab in mind and has patches for mods you only find on LL.

The most important option in the CBBE 3BBB installer is the HDT-SMP/CBPC config section: HDT-SMP is rather CPU hungry but it's physics system is simply the best. If you can sacrifice 1-2 fps, get the full HDT-SMP config.

-   Get some CBBE compatible textures

-   Delete the zPatch, remove all NPC retextures that use the UNP body and download the CBBE version of those mods.

## BHUNP 3BBB:

-   Download [XPMSSE](https://www.nexusmods.com/skyrimspecialedition/mods/1988) (make sure to install the new physics skeleton)

-   Download [HDT-SMP](https://www.nexusmods.com/skyrimspecialedition/mods/30872)

-   Download [CBPC](https://www.nexusmods.com/skyrimspecialedition/mods/21224) (pick the right runtime version, the preset options don't matter since BHUNP 3BBB comes with its own config

-   Download [BHUNP 3BBB](https://www.nexusmods.com/skyrimspecialedition/mods/31126)

The most important option in the BHUNP 3BBB installer is the HDT-SMP/CBPC config section: HDT-SMP is rather CPU hungry but it's physics system is simply the best. If you can sacrifice 1-2 fps, get the full HDT-SMP config.

No matter the type of body you choose, you still want [BodySlide and Outfit Studio](https://www.nexusmods.com/skyrimspecialedition/mods/201) to rebuild the base mesh using your own preset.

(Thanks to Erri120)

I don't offer help in this regard, because mucking about in Bodyslide is not my forte.


Credits & Thanks
----------------

-   DarkLadyLexy for instructions on Distant Land, LOOT, Merging, and the Finishing Line.
-   Halgari for creating [Wabbajack](https://github.com/halgari/wabbajack)
-   [Halgari's Patreon](https://www.patreon.com/user?u=11907933)
-   Wabbajack Discord Mods, Devs, Golden Saints, and Tester Team
-   Phoenix for The Phoenix Flavor guide, for the Bethini section and a guide on DynDOLOD. [https://thephoenixflavour.com/](https://thephoenixflavour.com/) 
-   [Phoenix's Patreon](https://www.patreon.com/thephoenixflavour)

### Contributors

-   Total for helping me pick out landscape textures, assisting me with xEdit
-   Helidoc for taking over and maintaining NOISE for DoubleDog
-   JustThatKing for assisting with conflicts and choosing textures
-   Lively for assistance, convincing me to do this, and also convincing me to join the Tester team, and contributing to NOISE
-   DinDisco for assisting in conflict resolution
-   Nathan for solving texture seam issues, and contributing to NOISE
-   Halgari for being patient with me and assisting in modlist creation
-   Skyrim prep and install instructions guidelines from Mdc211's Lexy LotD Wabbajack guide
-   All of the above for testing, providing feedback, and assisting with this guide.
-   Mod Authors: Do not forget to endorse!
