# NOIR
NOIR
## Introduction

[Wabbajack discord](https://discordapp.com/invite/Wabbajack).

[Changelog](https://github.com/giraldiego/NOIR/blob/master/CHANGELOG.md)

NOIR is a modlist for playing Requiem 3.4 that used as foundation NOISE, another modlist.
With enhanced graphics, mechanics, and immersion, the general idea is to maintain Requiem mechanics as much as possible staying true to the original vision of Requiem; kind of Requiem+.


**REQUIRES NEXUSMODS.COM PREMIUM ACCOUNT**

## Getting Started

This process requires `113`GB of hard drive space and takes a few hours depending on your internet and computer speed. Installing on an SSD is recommended.

Download `Wabbajack.exe`. This can be found in the [#builds](https://discord.gg/2ez4dAV) channel in the [Wabbajack discord](https://discordapp.com/invite/Wabbajack).

Create a folder at the root of your drive called Wabbajack. Place the Wabbajack.exe in this folder. i.e., `C:\Wabbajack\`

### Upgrading from previous versions of NOIR:

Wabbajack now supports in-place upgrades, however, anything that doesn’t match the modlist will be deleted. If you’ve added your own mods, back them up to be safe. 

Overwrite the previous NOIR.wabbajack installer with the new one and run the installer with the new one.

Overwrite the previous installation of NOIR, after you’ve ensured you’ve backed up your saves.

You do NOT have to update unless a release is found to have a critical bug.


### System Specs

With or without DynDOLOD generated, I recommend 4-6GB of VRAM for optimal performance, especially with an ENB.

### Old Files Cleanup/Steam Config

This is only necessary one time, and only if you’ve used NMM or Vortex previously. If you have other Wabbajack modlists installed, ignore these instructions, skip to the `Installation` section in this readme.

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

## Installation

Create a new directory in the root directory of the hard drive where you want everything to be installed. Do not create a directory within your Skyrim folder. For this guide, we will create an example directory in C:\ called NOIR. You can create this folder on any drive.

- Open Wabbajack.
- Select "Install From Disk"
- Select the NOIR modlist on the field "Target Modlist" in the Wabbajack UI.
- Select the Installation Location as the folder you created in the root directory of your hard drive. If you are creating these on your C:\ drive, please type in C:\NOIR in Installation Location and C:\NOIR\Downloads in the Download Location if you are using only this modlist. If you have other WJ's modlist installed, you can use the same Download folder and the installer will download only the missing files required for NOIR.
- After you have completed these steps, click Begin.


**DO NOT SET THE PATHS TO YOUR SKYRIM GAME FOLDER.**

**I REPEAT, DO NOT INSTALL MODLISTS TO YOUR SKYRIM STEAM FOLDER.**

A window will open in Wabbajack asking if you’d like to authorize Wabbajack to use your Nexus Mods account. Log in, and click authorize. Wabbajack will now install the mod list for you.
Once Wabbajack has finished all of its processes, the right pane will say Installation complete! You may exit the program. At this point it is safe to close Wabbajack.

If you don’t see Installation complete, Wabbajack has encountered an error. Inside of the NOIr folder, delete everything except the downloads folder.

If you get an error immediately after authorizing Wabbajack on the Nexus website, download and install the [.Net Framework 4.8 Runtime](https://dotnet.microsoft.com/download/dotnet-framework/net48) executable. Restart your computer and start Wabbajack again.

If Wabbajack fails to download a mod, it means that the mod may have been updated on the Nexus. Wait for a new release of my Modlist. Look around in Discord channels to see if I already mentioned that I'm going to update for this specific mod. Or check the Current Release Notes in Drive folder.

**Do not ask other people to share older files as this is a violation of the Nexus Terms of Service and Wabbajack’s server rules. This constitutes mod piracy and will result in an immediate ban.**

Expanding on server rules, **do NOT** contact outside authors such as DarkLadyLexy or Belmont Boy outside of the Wabbajack Discord for help with your Wabbajack installation.

## Installation Part 2

Now we have to copy files over into their correct spots. Navigate to `C:\NOIR\Game Folder Files\`. Copy all of these files and paste them into `C:\steamapps\common\Skyrim Special Edition\`

Follow the steps for Nvidia Profile Inspector on [Lexy's Guide](https://wiki.nexusmods.com/index.php/User:Darkladylexy/Lexys_LOTD_SE) for antialiasing and capping your FPS using your GPU driver, if not using ENB. For AMD users, use ENB or set the "Frame Rate Target Control" under "Global Settings". 

### Opening Mod Organizer 2

Navigate to `C:\NOIR\` and open `ModOrganizer.exe`

If it asks you to associate Mod Organizer 2 with nxm links, click yes.

### Launching The Game

In Mod Organizer 2, select SKSE from the drop down menu next to the Run button and click Run. This is how you will launch Skyrim from now on.

## Configuring MCM

After starting a new game, you will spawn in the LAL cell. You’ll find a key to the shelves on a table, with basic loadout necessities. Wait until the text in the top left is finished loading all of your mods, then press Esc and go to your MCM settings.

[MCM](https://drive.google.com/open?id=1arfMhKhaIZMiMB4zYvWFwJvvPxGRH_CRt2HsXSf7Zdw)


Alternate DynDOLOD Settings
---------------------------

By default, NOIR comes packed with premade LOD's. However, these LOD's are 2D and thus still have some pop in. If you would like to remove as much of this pop in as possible follow these instructions. Please note that doing this will cost you a significant chunk of performance (about 10 frames). This is not recommended if you're also using an ENB unless you have 8GB of VRAM.

1.  Deactivate the mod "NOIR - Dyndolod Output" and "NOIR - TexGen Output" in the left pane of MO2
2.  Open up your install folder and navigate to `tools\DynDOLOD\Edit Scripts\DynDOLOD\cache`
3.  If there are files other than becauseofreasons.txt delete them. Ensure that becauseofreasons.txt remains there.
4.  Go back one folder so you're in `tools\DynDOLOD\Edit Scripts\DynDOLOD`
5.  Open up DynDOLOD_SSE.ini in a text editor like notepad
6.  Scroll down to the line that says TreeLOD=1 and change it to 0
7.  Open MO2 and run TexGen and create a mod called "NOIR - TexGen Output (3D)" and activate it
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
18. Copy all of its contents and put it into a new mod called "NOIR - Dyndolod Output (3D)"
19. Overwrite when asked
20. Activate "NOIR - Dyndolod Output (3D)" and move DynDOLOD.esm just above FISS.esp

## Resources

To learn more about Mod Organizer 2, please [watch this video](https://www.youtube.com/watch?v=LwaC7gP7_JM).

## Adding an ENB:

1.  If you want to add an ENB you need d3d11.dll and d3dcompiler_46e.dll files from [ENBSeries](http://enbdev.com/) and place them in your Skyrim Special Edition Game Folder along with the ENB files. Also grab any other files that the ENB you wish to add specifies.

2.  Refer to the installation instructions that are on the ENB’s page. I recommend anything made for Obsidian Weathers. 

I use Re-Engaged for Obsidian on my personal installation, ENB is not included with NOIR.

## Adding ReShade:

-   [ReShade Guide](https://www.youtube.com/watch?v=-jQ7OJy0818)
-   [Text Guide](https://reshade.me/forum/troubleshooting/5227)


# F.A.Q

[Wabbajack Discord FAQ](https://discord.gg/qz9a2J)

## The difficulty is too hard!

That's Requiem for you, but you will get used to, check these guides:

- [Guide - How to adapt my gameplay for Requiem ?](https://www.reddit.com/r/skyrimrequiem/comments/fdsz4y/guide_how_to_adapt_my_gameplay_for_requiem/)

- [Guide - How to build your first character in Requiem - part I](https://www.reddit.com/r/skyrimrequiem/comments/fbvc1r/guide_how_to_build_your_first_character_in/)

- [Guide - How to build your first character in Requiem - part II](https://www.reddit.com/r/skyrimrequiem/comments/fchelx/guide_how_to_build_your_first_character_in/)


## The dungeons are too dark!
-   What dungeons, realistically, aren't dark? Hold "E" to turn on your lantern.

## There are empty mods with red X's!
-   Leave them alone. Do not touch. Do not touch anything in optional folders. These mods are merged. This applies to all modlists.

## Can you add/remove X mod?
-   Only if I feel like it. But at this point, the answer will probably be no. This is meant to be added on to. Add it yourself.

## The modlist updated, and you added/removed X mod?!?! Why??!?
-   Because I felt like it, or it didn't fit my original vision, or it's too much of a hassle to deal with. I have a limited time left on this planet and don't want to recompile/fix things every 5 minutes. If you enjoy the version you're on, there is no need to update with WJ. You can update mods yourself, and check for relevant updates by using the Updated tab on the [SSE Nexus](https://www.nexusmods.com/skyrimspecialedition?tab=updated)

## I want to use another body instead of the UNP that comes with Diversity.
-   This is unsupported.

Credits & Thanks
----------------

-   Shelb for letting me use her modlist as a base to build upon and all her support.
-   Total for let me use his music compilation in NOIR and tips for the build
-   lilmoefow for all the patches and support for Requiem in SSE
-   JDSmith for tips about how to patch things correctly

And the same credit for NOISE apply:

-   DarkLadyLexy for instructions on Distant Land, LOOT, Merging, and the Finishing Line.
-   Halgari for creating [Wabbajack](https://github.com/halgari/wabbajack)
-   [Halgari's Patreon](https://www.patreon.com/user?u=11907933)
-   Wabbajack Discord Mods, Devs, Golden Saints, and Tester Team
-   Phoenix for The Phoenix Flavor guide, for the Bethini section and a guide on DynDOLOD. [https://thephoenixflavour.com/](https://thephoenixflavour.com/) 
-   [Phoenix's Patreon](https://www.patreon.com/thephoenixflavour)

### Contributors of NOISE

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
