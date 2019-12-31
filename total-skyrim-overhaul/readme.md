» Disclaimers

Total Skyrim Overhaul is a requiem based modlist, this means it is difficult. If you are looking for a gameplay experience that does not require careful planning I suggest playing NOISE or Lexy's instead. 


I will not provide support on how to add or change any mods beyond what is already provided. Do not ask me for help if you changed things. If you do not have experience modding requiem on SSE and patching with xedit I suggest you do not even think of changing anything.\
NSFW Warning: This list contains nude models for female and males. Nudity will be unavoidable and there's no simple way to get rid of it.

* * * * *

» Getting Started

The Autoinstaller will not give you a working game out of the box, please follow all steps in this guide before attempting to play. This process requires ~160GB of hard drive space and takes a few hours depending on your internet and computer speed. Installing on an SSD is highly recommended.

* * * * *

» System Specs

4GB of VRAM is the minimum to run this modlist. 8GB of VRAM is recommended. The textures are a mix of 2k and 4k so 4gb will be the lower limit of acceptable VRAM. You can change to another Cathedral Weathers compatible ENB to save some FPS, but this will not fix any VRAM issues if you are below 4gb. If your GPU is struggling it may be time to upgrade.

* * * * *

» Setting Up Skyrim

Next, open Steam, click Library at the top, find The Elder Scrolls V: Skyrim Special Edition, right click on Skyrim, click Manage, then click Uninstall. Complete any prompts that pop up as to remove Skyrim from your computer. At this point, download Skyrim again.  Install Skyrim into a location not protected by User Account Control. The Program Files folder is not recommended and could cause issues. This may take some time depending on your internet connection. Skyrim is about 10GB.![](https://lh3.googleusercontent.com/-dXjB0LvOm9vBUidpq52ezVGnRTOE-W5hWopTc0VzVgqM3QQErqEPC8N9VDJGzKP_Wl5a0aB-zn9Lnw-IKAztCC-lH9fphUjbj55lqvUM37klMK1ro_EkmF9iAGQUlKAmY9GHwWr)

Next we're going to be preventing Skyrim from updating automatically to prevent issues.

Update Proofing

1.  Open Steam

2.  Click Library at the top

3.  Find The Elder Scrolls V: Skyrim Special Edition and right click it

4.  Click Properties

![](https://lh6.googleusercontent.com/36ymGTXCGAjiyvXnz4hGBVsC6esHvt4KwthMv3tDV9aN712eZe3L1nQuZOYH98LWar-I4UcETcjhySOy8V8E6ZKtm7n77e-7-8fdPo1l5y9ERPghrh6FkmQqZMHlYmgOyz6BdeNO)

1.  Select the Updates tab

![](https://lh3.googleusercontent.com/XtrrYi_WY-pIllk93F4UMxgJ0og8E_AnDsfqIJb-wpaMYcjJUXvfHxx_mRHxEv_-zmHX9mLm2H87RLKIfd5zC7BZ94D_8mYQsTxv7pC03Ea0ZjYwJfocZa4tKzlk29rmp-QpFp8c)

1.  Under the Automatic Updates section, select the Only update the game when I launch it option.

1.  Note: This may seem counterintuitive, but since we'll be launching Skyrim through MO2 with SKSE, it'll never actually be opened with Steam therefore update-proofing your Skyrim. After completing this installation guide, it is critically important that Skyrim is never again launched through Steam to prevent it from updating and possibly breaking your game. Only open Skyrim through steam when this guide tells you to do so.

![](https://lh5.googleusercontent.com/fMAu7BNF80n4hL5VAqv_17LeXSaLeFeNjFCDE2fh5ksphMsubOWH57vBnIqSWiUOudvN7lw1QGQsoE60h8jWJKLI9pKYJgxbvDu_srXP4HT1QGqGCXMBg8h98kczEJ5MB4dC_4Pk)

* * * * *

» Installation

Download the [Modlist File](https://drive.google.com/open?id=1zL2yTHbhDl7dSL9K5RowU1gqkv7NWTpg) as well as the [Wabbajack Installer](https://github.com/wabbajack-tools/wabbajack/releases).  Do not run the installer until told to do so. Create a new directory in the root of the drive where you want everything to be installed.  Wabbajack must be in a different folder from where the installation will occur. For this guide, we'll be creating a directory called C:\Wabbajack. You can create this folder on any drive. Put Wabbajack.exe and the .wabbajack file in this folder.

___________________________________________________________________________________________

Create a different folder called C:\Total Skyrim Overhaul. This is where Wabbajack will be downloading all of the files it needs to complete the installation and where it will be installing all of the files respectively. WARNING: Ensure that the "Install" folder you have created is completely empty. Wabbajack.exe and the .wabbajack file should NOT be in the folder you just created. They need to be kept in C:\Wabbajack

___________________________________________________________________________________________![](https://lh6.googleusercontent.com/ymVmP2E6oXzGWhXPCcxaintTE1ANaJIdNEJYOdbtoW-0KUvVccfGJqWa_BxiGbGW4lRL7dEyFZapWDAayCyp_g2o_SMp9jU_BU5M2i_3bc82vHY0AS01rzzalnBNQlYiDp82gw8W)

We're finally ready to start installing the modlist. Open Wabbajack at this time. On the bottom of the window, click Install a ModList. A dialogue will open. Navigate to C:\Wabbajack, select Total Skyrim Overhaul and click Open.

Set the Installation Location to C:\Total Skyrim Overhaul.  The download location does not need to be set manually. Click Run.  Wabbajack will walk you through logging into the nexus and authorizing an api key so it can download mods. Just let it run.

___________________________________________________________________________________________

Once Wabbajack has finished the log file should say "Installation complete! You may exit the program." If not please go to the <channel name TBD> on the[ Wabbajack discord](https://discord.gg/wabbajack) and ask for assistance.  Remember to upload the log file also.

If you get an error immediately after authorizing Wabbajack on the Nexus website, please download the [.Net Framework 4.8 Runtime](https://dotnet.microsoft.com/download/dotnet-framework/net48) executable and install that. Restart your computer and start Wabbajack again.

If Wabbajack fails to download a particular mod, it means that the mod might have been updated which means a new release of the modlist is on the horizon. Wait for the new release. Check the pins on the [Discord server.](https://discord.gg/wabbajack) Please do not ask other people to share older files with as this is a violation of the Nexus ToS.

Now we have to copy files over into their correct spots. Navigate to C:\Total Skyrim Overhaul\Game Folder Files. Copy all of these files into <Steam Install Location>\steamapps\common\Skyrim Special Edition\.

» Opening Mod Organizer 2

Now it's time to open Mod Organizer 2. Navigate to C:\Total Skyrim Overhaul and open ModOrganizer.exe. Your Mod Organizer window should look like this (dark theme will be automatically selected):

![](https://lh3.googleusercontent.com/uAFG3g3TyXev4xJEoqoutErGgiJ1Gjvxxx_a3AIEmvbfvFlvTnTk3CLOntP3AbfjghZpRAM3DoDCwax8t_rXQDFJYEEaupiF2r5YjfPYlc-qfPgYqZUViWJe1Kmx-PDPjqN1wLaJ)

The dialogue that pops up will ask you if you want to associate Mod Organizer with nxm links. Click Yes. This means that whenever you click download with mod manager on the nexus website the download will be sent to Mod Organizer for easy installation. Note the Active count in both the left and right panes. If yours doesn't say 416 and 160 respectively (the numbers might be slightly different after updates), make sure you have booted in Portable Mode. Click the controller on the top left (Change Game) - Mod Organizer will ask you if you want to restart MO. Click yes. In the next window that pops up, click Portable.

» Launching The Game![](https://lh4.googleusercontent.com/Bi-VsFLiEXAqWq9Hrw3p7BuOAEi_ekYNGee_3V2emhacR3ZEWWzYzcbx5NLmDqXYpQ4SiA_mIi-sC_JnEwwDXjZgrjlM-ZJXg235R3-EX2pWZJr2kj4UlvF-5AQKUJb9KM8Ta9CJ)

Congratulations on getting this far! The hard part is over with.

In Mod Organizer 2, select SKSE from the drop down menu next to the Run button and click Run. This is how you will launch Skyrim from now on. You can create a shortcut on your desktop if you wish using the shortcut button located right underneath the Run button. Go ahead and open Skyrim and create a new game. Loading an old save at this point will probably corrupt the save sooner rather than later due to the new and increased script usage from all the different mods you've just installed. After creating your new game, create the character you want to use for this playthrough, finish, and name them whatever you'd like. After you gain control of your character, stand still and do nothing. You'll start seeing a lot of text pop up on the left hand side - this is the mods initializing and configuring themselves for your playthrough. After you see Requiem informing you that the game is ready, you can proceed on to the next steps.

* * * * *

» Configuring MCM

Now we'll need to finish setting up the mods in the mod configuration menu, or MCM for short. Hit escape on your keyboard and under SYSTEM you'll now see MOD CONFIGURATION in the left pane. Visit [the MCM Page](https://drive.google.com/open?id=1JHpv3hXreLy89oZuAUd5QrtI0B34cjG0_HZPlnDFQN0) and follow all listed steps

* * * * *

» Congratulations - Please Read This Section Carefully

There are some things to keep in mind when starting your new game:

-   I highly suggest you read through the [gameplay guide ](https://docs.google.com/document/d/1YREfPB1nOppZdrKCEgVcvkCCASk39ne3cSwgJgofz7I/)if you are not very familiar with the contents of this modlist. There are many mechanical changes that are not explicitly spelled out in game.

-   If you recruit Lucien or Inigo as followers, don't import them into the Nether's Follower Framework as it will break them. This is something you'd have to manually do when talking to them (there is an option when talking to Lucien and Inigo that says "Import Into Framework (NFF)").

-   Autosaves and Quicksaves are disabled. These save options are known to cause issues with heavily scripted games. (When you load a new area, scripts are run for the area and if you save halfway through these scripts executing and reload, your game may not be able to finish the script and corrupt your save.) Enable these at your own risk. Quicksaves are automatically turned into Manual Saves. Please just be careful and remember to save often. I recommend before talking to any quest NPC, interacting with any quest object, entering a new zone, and every 15 minutes. You can always delete old saves - you can never recover lost progress from forgetting to save.

-   The main story and dragons are now very deadly. If you go to Bleak Falls Barrow bring silver.

-   Wabbajack does support updating/upgrading over an existing installation, but it will automatically delete any files that aren't used for the modlist installation. This means if you have changed the load order in any way, Wabbajack will delete those changes. It may also delete your saves if you enabled profile specific saves. Keep backups of these files if you don't want to lose them. If new content comes out that you wish to play, this means you must run wabbajack again.

-   Best practices for keeping a stable save:

-   Close Skyrim and restart it after every death. Do NOT let it reload from an old save.

-   Do not reload in the same cell or when the game is already loaded. The issues with loading exist even if your character is alive.

-   NEVER save right after a loading screen. Wait 20+ seconds before saving to let scripts finish executing.

-   NEVER use autosaves. There is no control over when an autosave happens and it might save when a script is mid-execution, corrupting your save file.

You're all done! Prepare to die!

* * * * *

» Help, F.A.Q., Fixes, Et Al

-   Why is there a lantern always attached to my character?  Why am I always casting light?

-   This is provided by a mod called quick light.  Holding E will toggle a light on and off to help brighten darker areas

-   I have an ultrawide monitor (21:9), how do I fix the aspect ratios?

-   Install the following mods, Experience - Widescreen Fix, Campfire and Frostfall Widescreen fix are not necessary

![](https://lh6.googleusercontent.com/Tsn927XkhvfNrmNsAE3yXnjKWckAQ7CHcFnflJ_bJVna5a6GYGzKb27HCdRkL5C6YL9itvzp43icIAqpBjdwvXieECAs2pysyf2bwmb_LJY6wZOhrzbyRwfmslSHY-YDdcH0ACLV)

-   I have an 60+ Hz screen (100hz, 144hz). What should I do?

-   Download the [Havok fix from Nexus Mods](https://www.nexusmods.com/skyrimspecialedition/mods/18160).

-   I'd like to use Creation Kit to modify (insert name here).

-   Follow the [Introduction and Prerequisites](https://wiki.nexusmods.com/index.php/User:Darkladylexy/Lexys_LOTD_SE) section and Creation Kit section in Lexy's Official Guide.

-   Is [insert mod name here] part of the list?

-   Check the modlist manifest. If there is something you want that is not in the list, I highly suggest you do not add it unless you know what you're doing.

» Credits & Thanks

-   Total Skyrim Overhaul made by

-   Everything but graphics

-   Total

-   Graphics (note King's full work is not in initial wabbajack release)

-   JustThatKing

-   Contributors

-   NotSandwich

-   Shelb

-   Nathan

-   Halgari & Wabbjack Team

-   For creating [Wabbajack](https://github.com/halgari/wabbajack)

-   [Halgari's Patreon](https://www.patreon.com/user?u=11907933)

-   Special Thanks

-   MDC and Vaderade for the guide template

-   DarkLadyLexy - Her list taught me how to mod properly and many choices were taken or inspired by it.

-   The Wabbajack Team - For enduring months of hearing about this list before it was released

-   Mod Authors

-   And of course, where would we be without Skyrim's awesome mod authors? Thank you all for releasing the quality content that you guys do. PLEASE DO NOT FORGET TO ENDORSE THE AUTHORS!
