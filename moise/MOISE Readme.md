Morrowind Overall Improvement Suite Enhanced
By ForgottenGlory
176 mods, 64 ESMs/ESPs

Morrowind Overall Improvement Suite Enhanced (MOISE) is a basic, primarily graphical overhaul for Morrowind GOTY edition. It includes all of the necessities required to begin a Morrowind modding adventure.

## WARNINGS & DISCLAIMERS
Wabbajack no longer requires that you have Nexus Premium to install the modlist, however, having Nexus Premium will cut your install time to a fraction of what it would be instead of downloading each mod individually (and save you a thousand clicks or so).

This modlist requires approximately 13GB of storage space on top of the 1.4GB for Morrowind Game of the Year Edition. As usual, installing to an SSD is recommended, but c'mon, this is Morrowind. An HDD will be fine.

Download and installation times vary based on your computer and internet speeds but expect them to take at least one hour with 20-30 minutes of after-Wabbajack work. Note that Morrowind requires a bit more work after WJ is done than other modlists due to the amount of extra executables involved.

I will do my best to provide support for adding mods to this list, but I make no promises. If you break it, it's on you to fix it.

## SYSTEM SPECIFICATIONS
Let's be real. Morrowind could run on a toaster at this point. However, there are a few options selected that may make particularly old/slow hardware struggle. Below are my system specifications. I have zero issues with stutter, loading times, or anything else.

CPU: Intel i5-8600K Overclocked to 4.2GHz
RAM: 16GB (16299MB actual)
GPU: nVidia GTX 1070 8GB (8192MB actual)
Monitor: Dell S2716DGR 2560x1440 @ 144hz

In general, I would recommend at least 4GB of VRAM and 8GB of RAM just to be on the safe side.

## MORROWIND SETUP
With Morrowind it is REQUIRED that you start with a clean, unmodified installation of the game. To get your Morrowind to this state, follow these steps:

1. In Steam, uninstall Morrowind (Right-click > Manage > Uninstall). 
2. If there are any files leftover in the Morrowind game folder (Right-click > Properties… > Local Files > Browse Local Files…), delete them.
3. Install Morrowind.
4. In Steam, set Morrowind to update only when opened. (Right-click > Properties… > Updates > Automatic updates > Only update this game when I launch it)
5. Run the Morrowind Launcher to create any INI or registry entries the game needs. Immediately exit after this. The INIs will be overwritten by the ones included in the Wabbajack installer.


## INSTALLATION SETUP
1. Download the Modlist File as well as the Wabbajack Installer. Do not run anything until instructed to do so.
2. Create a new folder in the root of the drive where you want Wabbajack to be installed. (C:\ will be used as an example, but it can be placed in any drive.) Name this folder “Wabbajack”. Important: Wabbajack must be placed in a separate folder from where the installation will occur.
3. Create a second folder called C:\MOISE. This folder is where everything will be installed.
4. Ensure that C:\MOISE is completely empty.
5. Ensure that Wabbajack.exe and the .wabbajack file are in C:\Wabbajack.

## WABBAJACK INSTALLATION
1. Run Wabbajack.exe. At the bottom of the window, click Install from Disk. A file picker window will appear. 
2. Navigate to C:\Wabbajack and select MOISE.
3. Click Open.
4. Set the Installation Location to C:\MOISE. The download location does not need to be set manually unless you have drive space limitations. Downloading to a separate folder is fine (for example, on a HDD), but as before it is recommended that the actual install be placed on a SSD.
5. Click Run.
6. Wabbajack will walk you through logging into the Nexus and authorizing an API key so it can download mods if you have not done so previously.

### With Nexus Premium
7. Wabbajack will walk you through logging into the Nexus and authorizing an API key so it can download mods if you have not done so previously.
8. Let Wabbajack do its thing. This will take a little while (usually 1-2 hours at most), so go get a snack and read a book for a bit. If you have good enough internet, YouTube is also your friend here.

### Without Nexus Premium
6. Wabbajack will prompt you to click all the needed buttons to download the modlist. Be prepared for this to take a really long time, possibly more than one day. Also be aware that due to the amount of time required when installing this list manually, the list may update during the time it takes to install and you may need to start over if that happens. Put on some music or a TV show and make a day of it.

Once complete, Wabbajack will say “Installation complete! You may exit the program.” If it does not, visit the Wabbajack Discord server for assistance. Don’t forget to upload your log file!

If Wabbajack fails to download a particular mod, it means that the mod has likely been updated. This also means that an update to MOISE is imminent. Be patient and wait for the new release. Do not ask other people to share older files as this is a violation of the Nexus ToS.

## POST-WABBAJACK INSTALL

### Game Folder Files
Now you have to copy some files to their correct locations. 
1. Navigate to C:\MOISE\Game Folder Files. 
2. Copy all of these files into <Steam Install Location>\steamapps\common\Morrowind\ and Overwrite if prompted.

### Morrowind Code Patch
Unfortunately, MCP doesn't come pre-configured because that would require redistributing a copy of the Morrowind.exe which is 100% illegal. So, we have to do it manually.

1. Run the Morrowind Code Patch.exe file from inside your Morrowind install folder. Important!: If you receive an error regarding a missing DLL, you need to download and install the x86 version of the Microsoft Visual C++ 2010 Service Pack 1 Redistributable Package MFC Security Update.
2. The only required options in MCP for MOISE are as follows:
	- Mod specific:
		- Scripted music uninterruptible
		- Separate axe inventory sounds
		- Hi-def cutscene support
		- Improved animation support
3. After selecting the required options, configure MCP to your liking.
4. Click "Apply chosen patches".

### Mod Organizer 2
1. Navigate to C:\MOISE and open ModOrganizer.exe. Your Mod Organizer window will have the Wabbajack theme already selected. If it doesn’t, something has gone wrong and you’ll likely need to do the Wabbajack installation again.
2. A dialogue will appear and ask if you want to associate Mod Organizer with nxm links. Click Yes.'

### MGEXEgui
MGEXEgui also needs to be manually configured so that certain graphics options are enabled. Select "MGEXEgui" in the dropdown menu next to the Run button in MO2 and then click Run. Configure it as follows.

- Graphics tab
	- Click select screen resolution and pick your screen's resolution.
	- Windowed mode: Enabled
	- Borderless window: Enabled
	- Enable Shaders: Enabled
- Distant Land tab
	- Use Distant Land: Enabled
	- Draw Distance: 10 cells (recommended)
	- Dynamic ripples: Enabled
	- Per-pixel lighting shader: Enabled
- In-Game tab
	- Allow yes to all load errors: Enabled
	- Allow screenshots: Enabled

## Launching the Game
In Mod Organizer 2, select Morrowind from the drop-down menu next to the Run button and click Run. This is how MOISE should always be launched. You can create a shortcut on your desktop if you wish using the Shortcut button under the Run button.

## Troubleshooting
Morrowind is a very temperamental game. Here are some common fixes for issues you may encounter.

- My game crashes immediately!
MGE XE can sometimes be corrupt upon installation. Go to the folder where WJ downloaded all the mods and open the MGE XE Manual Install-41102-0-11-6-1560626592.7z file. Copy all of the files here into your Morrowind install folder and overwrite when prompted. You will not have to configure MGE XE again when doing this.

- The game is saying there are missing mods!
Morrowind is wrong. This, to put it simply, happens when the mods installed changed since the last time you launched Morrowind. This warning can be safely ignored. Saving your game should remove the error.

## CREDITS & THANKS
### MOISE created by ForgottenGlory

### Halgari & Wabbajack Team
Thank you for creating Wabbajack, you’re amazing!
Halgari’s Patreon: https://www.patreon.com/user?u=11907933

### Mod Authors
None of this would be possible without the people who make the quality content we’ve grown to know and love. Please endorse the authors’ works.

