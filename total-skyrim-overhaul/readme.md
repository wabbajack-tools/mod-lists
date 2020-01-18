» Disclaimers
Total Skyrim Overhaul is a requiem based modlist, this means it is difficult. If you are looking for a gameplay experience that does not require careful planning I suggest playing NOISE or Lexy’s instead. 

I will not provide support on how to add or change any mods beyond what is already provided. Do not ask me for help if you changed things. If you do not have experience modding requiem on SSE and patching with xedit I suggest you do not even think of changing anything.

If a question is sufficiently answered in this readme I will not respond to support requests relating to it. Please read the readme, I wrote it for a reason. If your question is not in the readme I will answer it to the degree possible.

NSFW Warning: This list contains nude models for female and males. Nudity will be unavoidable and there’s no simple way to get rid of it.


» Getting Started
The Autoinstaller will not give you a working game out of the box, please follow all steps in this guide before attempting to play. This process requires ~190GB of hard drive space and takes a few hours depending on your internet and computer speed. Installing on an SSD is highly recommended.


» System Specs
6GB of VRAM is the minimum to run this modlist. 8GB of VRAM is recommended. If you have less than 6GB VRAM your framerate will likely struggle to go above 40. Due to the massive changes in cities it is unlikely that any card will get much above 40fps. 


» Setting Up Skyrim
Next, open Steam, click Library at the top, find The Elder Scrolls V: Skyrim Special Edition, right click on Skyrim, click Manage, then click Uninstall. Complete any prompts that pop up as to remove Skyrim from your computer. At this point, download Skyrim again.  Install Skyrim into a location not protected by User Account Control.  The Program Files folder is not recommended and could cause issues. This may take some time depending on your internet connection. Skyrim is about 10GB.

Next we’re going to be preventing Skyrim from updating automatically to prevent issues. 

Update Proofing
Open Steam
Click Library at the top
Find The Elder Scrolls V: Skyrim Special Edition and right click it
Click Properties

Select the Updates tab

Under the Automatic Updates section, select the Only update the game when I launch it option.
Note: This may seem counterintuitive, but since we’ll be launching Skyrim through MO2 with SKSE, it’ll never actually be opened with Steam therefore update-proofing your Skyrim. After completing this installation guide, it is critically important that Skyrim is never again launched through Steam to prevent it from updating and possibly breaking your game. Only open Skyrim through steam when this guide tells you to do so.



» Installation
Download the .wabbajack file as well as the Wabbajack Installer.  Do not run the installer until told to do so. Create a new directory in the root of the drive where you want everything to be installed.  Wabbajack must be in a different folder from where the installation will occur.  For this guide, we’ll be creating a directory called C:\Wabbajack. You can create this folder on any drive. Put Wabbajack.exe and the .wabbajack file in this folder.
___________________________________________________________________________________________

Create a different folder called C:\Total Skyrim Overhaul. This is where Wabbajack will be downloading all of the files it needs to complete the installation and where it will be installing all of the files respectively. WARNING: Ensure that the “Install” folder you have created is completely empty. Wabbajack.exe and the .wabbajack file should NOT be in the folder you just created. They need to be kept in C:\Wabbajack
___________________________________________________________________________________________

We’re finally ready to start installing the modlist. Open Wabbajack at this time. On the bottom of the window, click Install a ModList. A dialogue will open. Navigate to C:\Wabbajack, select Total Skyrim Overhaul and click Open.

Set the Installation Location to C:\Total Skyrim Overhaul.  The download location does not need to be set manually.  Click Run.  Wabbajack will walk you through logging into the nexus and authorizing an api key so it can download mods. Just let it run.
___________________________________________________________________________________________

Once Wabbajack has finished the log file should say “Installation complete! You may exit the program.” If not please go to the #tso-support channel on the Wabbajack discord and ask for assistance.  Remember to upload the log file also.

If you get an error immediately after authorizing Wabbajack on the Nexus website, please download the .Net Framework 4.8 Runtime executable and install that. Restart your computer and start Wabbajack again.

If Wabbajack fails to download a particular mod, it means that the mod might have been updated which means a new release of the modlist is on the horizon. Wait for the new release. Check the pins on the Discord server. Please do not ask other people to share older files with as this is a violation of the Nexus ToS. 

If Wabbajack fails to download TSO Lods.7z, ALLGUD Meshes.7z, ALLGUD Data.7z, or mo2 hide plugins.zip please download the files from the google drive folder. Place these files in your downloads folder, delete any hashes that have been generated for them, and run wabbajack again.

Now we have to copy files over into their correct spots. Navigate to C:\Total Skyrim Overhaul\Game Folder Files. Copy all of these files into <Steam Install Location>\steamapps\common\Skyrim Special Edition\.

Next download enb binaries from http://enbdev.com/ for Skyrim SE. Place d3d11.dll and d3dcompiler_46e.dll in <Steam Install Location>\steamapps\common\Skyrim Special Edition\.
» Opening Mod Organizer 2
Now it’s time to open Mod Organizer 2. Navigate to C:\Total Skyrim Overhaul and open ModOrganizer.exe. Your Mod Organizer window should look like this (dark theme will be automatically selected):

The dialogue that pops up will ask you if you want to associate Mod Organizer with nxm links. Click Yes. This means that whenever you click download with mod manager on the nexus website the download will be sent to Mod Organizer for easy installation. Note the Active count in both the left and right panes. If yours doesn’t say 502 and 187 respectively (the numbers might be slightly different after updates), make sure you have booted in Portable Mode. Click the controller on the top left (Change Game) - Mod Organizer will ask you if you want to restart MO. Click yes. In the next window that pops up, click Portable.
» Launching The Game
Congratulations on getting this far! The hard part is over with. 

In Mod Organizer 2, select SKSE from the drop down menu next to the Run button and click Run. This is how you will launch Skyrim from now on. You can create a shortcut on your desktop if you wish using the shortcut button located right underneath the Run button. Go ahead and open Skyrim and create a new game. Loading an old save at this point will probably corrupt the save sooner rather than later due to the new and increased script usage from all the different mods you’ve just installed. After creating your new game, create the character you want to use for this playthrough, finish, and name them whatever you’d like. After you gain control of your character, stand still and do nothing. You’ll start seeing a lot of text pop up on the left hand side - this is the mods initializing and configuring themselves for your playthrough. After you see Requiem informing you that the game is ready, you can proceed on to the next steps.


» Configuring MCM
Now we’ll need to finish setting up the mods in the mod configuration menu, or MCM for short. Hit escape on your keyboard and under SYSTEM you’ll now see MOD CONFIGURATION in the left pane.  Visit the MCM Page and follow all listed steps


» Congratulations - Please Read This Section Carefully
There are some things to keep in mind when starting your new game:
I highly suggest you read through the gameplay guide if you are not very familiar with the contents of this modlist. There are many mechanical changes that are not explicitly spelled out in game.
If you recruit Lucien or Inigo as followers, don’t import them into the Nether’s Follower Framework as it will break them. This is something you’d have to manually do when talking to them (there is an option when talking to Lucien and Inigo that says “Import Into Framework (NFF)”). 
Autosaves and Quicksaves are disabled. These save options are known to cause issues with heavily scripted games. (When you load a new area, scripts are run for the area and if you save halfway through these scripts executing and reload, your game may not be able to finish the script and corrupt your save.) Enable these at your own risk. Quicksaves are automatically turned into Manual Saves. Please just be careful and remember to save often. I recommend before talking to any quest NPC, interacting with any quest object, entering a new zone, and every 15 minutes. You can always delete old saves - you can never recover lost progress from forgetting to save.
The main story and dragons are now very deadly. If you go to Bleak Falls Barrow bring silver.
Wabbajack does support updating/upgrading over an existing installation, but it will automatically delete any files that aren’t used for the modlist installation. This means if you have changed the load order in any way, Wabbajack will delete those changes. It may also delete your saves if you enabled profile specific saves. Keep backups of these files if you don’t want to lose them. If new content comes out that you wish to play, this means you must run wabbajack again.
Best practices for keeping a stable save:
Do not reload when you die. Respawn is included to prevent you from having to close to desktop and reload skyrim completely. Reloading will eventually break your save.
Do not reload in the same cell or when the game is already loaded. The issues with loading exist even if your character is alive.
NEVER save right after a loading screen. Wait 20+ seconds before saving to let scripts finish executing.
NEVER use autosaves. There is no control over when an autosave happens and it might save when a script is mid-execution, corrupting your save file.


» Help, F.A.Q., Fixes, Et Al
Why is there a lantern always attached to my character?  Why am I always casting light?
This is provided by a mod called quick light.  Holding E will toggle a light on and off to help brighten darker areas

I have an ultrawide monitor (21:9), how do I fix the aspect ratios?
Install the following mods, Experience - Widescreen Fix, Campfire and Frostfall Widescreen fix are not necessary


I have an 60+ Hz screen (100hz, 144hz). What should I do?
Download the Havok fix from Nexus Mods.
I’d like to use Creation Kit to modify (insert name here).
Follow the Introduction and Prerequisites section and Creation Kit section in Lexy’s Official Guide.

Is [insert mod name here] part of the list?
Check the modlist manifest. If there is something you want that is not in the list, I highly suggest you do not add it unless you know what you’re doing.

» Credits & Thanks

Total Skyrim Overhaul made by
Everything but graphics
Total
Graphics (note King’s full work is not in initial wabbajack release)
JustThatKing
Contributors
NotSandwich
Shelb
Nathan
Jdsmith2816
OM3N1R

Halgari & Wabbjack Team
For creating Wabbajack
Halgari’s Patreon

Special Thanks
MDC and Vaderade for the guide template
DarkLadyLexy - Her list taught me how to mod properly and many choices were taken or inspired by it.
Evertio - ENB light settings inspired by his LOTD+ guide
The Wabbajack Team - For enduring months of hearing about this list before it was released

Mod Authors
And of course, where would we be without Skyrim’s awesome mod authors? Thank you all for releasing the quality content that you guys do. PLEASE DO NOT FORGET TO ENDORSE THE AUTHORS!
