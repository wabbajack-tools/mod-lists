### Magnum Opus ![build-status](https://img.shields.io/endpoint?label=%20&url=https%3A%2F%2Fbuild.wabbajack.org%2Flists%2Fstatus%2Fmagnum_opus%2Fbadge.json)
**Do not contact mod authors directly for support.**  
All support must be directed to the relevant discussion channel on the [Wabbajack Discord](https://discord.gg/wabbajack).  
Pirated games and mods are not supported.  

Feel free to [buy me a pizza or something](https://www.patreon.com/nicholasjae).

**Modlist Summary:**  
An incredibly clean and stable list featuring tons of new quests & locations, vastly expanded settlement systems, a massively interconnected collection of NPC overhauls, and of course hundreds of new outfits, armors, & weapons.

#### **_Requirements Before Installing:_**

  *Current build version of [Wabbajack](https://www.wabbajack.org/#/).  
  *Clean install of Fallout 4, **without the official Hi Def DLC**.  
  *A Nexusmods account. Nexus Premium is highly recommended for automatic download support.  
  *70 gigs of free space. Note that this number does NOT include your Fallout 4 installation.  
  *  *That’s 26 GB for downloads, 41 GB for installation, and a little extra wiggle room to be safe.*  
  
  Once Fallout 4 is installed, *run it once through Steam.* This will establish registry keys and allow Wabbajack to locate the game on your PC. 

### **_Installation Instructions:_**

1. Download the latest version of Wabbajack.
2. Create a new folder at the root of a drive (Example: D:\Wabbajack).
3. Place the Wabbajack.exe into this new folder.
4. Launch Wabbajack.exe. Download the MagnumOpus.wabbajack file from the Wabbajack Modlist Gallery.
5. In “Installation Location” choose a blank folder at the root of a drive (example: D:\Magnum Opus). **DO NOT** install your modlist to the same folder where you put Wabbajack.exe.  **DO NOT** install into your Steam game path.
6. The “Download Location” will update automatically. You can change it if you want.
7. Click the "Play" arrow.
8. Make sure to accept the Nexus API request if your browser asks for it.
9. When Wabbajack completes the installation (you can check the Wabbajack.current.log to confirm it completed successfully), you may close the program.

#### **_Post Installation Instructions:_**

Navigate back to your Magnum Opus installation folder.  
Open “Game Folder Files”  
Copy everything in this folder.  
Paste it into your Fallout 4 directory (steam/steamapps/common/Fallout 4).  
  *  Just to be really clear about this: do not copy/paste the entire folder. Only the **contents** of Game Folder Files. It's only five individual little files totaling under 2 MB.

#### This section is **optional but highly recommended**. It can be done at any time before or after installation.

Go to [BiRaitBec’s Modding Guide](https://www.nexusmods.com/fallout4/mods/23556?tab=description).  
Manually download the **WorkBase** file.  
Manually download the **Main Repack** files (Part One, Part Two, and Part Three).  
  *  You can use Performance/Quality repacks as well if you like. I only use Main. Entirely up to you.  
  
Extract the WorkBase file with 7zip.  
You should have three folders inside of Workbase: OriginalBa2, PatchedBa2, and PatchedFiles.  
Navigate to your Fallout4/Data folder and **copy** these 15 files:  

'Fallout4 - Textures1.ba2'  
'Fallout4 - Textures2.ba2'  
'Fallout4 - Textures3.ba2'  
'Fallout4 - Textures4.ba2'  
'Fallout4 - Textures5.ba2'  
'Fallout4 - Textures6.ba2'  
'Fallout4 - Textures7.ba2'  
'Fallout4 - Textures8.ba2'  
'Fallout4 - Textures9.ba2'  
'DLCworkshop01 - Textures.ba2'  
'DLCworkshop02 - Textures.ba2'  
'DLCworkshop03 - Textures.ba2'  
'DLCRobot - Textures.ba2'  
'DLCCoast - Textures.ba2'  
'DLCNukaWorld - Textures.ba2'  

**Paste** these files into your **WorkBase/OriginalBa2** folder.
**Extract** Main Repack Part One into a new folder.
Inside the new folder, you should see another folder called “**textures**”. **Cut** this textures folder and **paste** it into **Workbase/PatchedFiles**.
**Repeat the previous two steps** for Part Two and Part Three of the Main Repack archives.
Run the **installer.bat** file inside of WorkBase.
When it is done, copy and paste all of the files inside of the PatchedBa2 folder into your Fallout4/Data folder AFTER WABBAJACK IS FINISHED INSTALLING.
  *  Alternatively, you can make a new folder inside Magnum Opus/mods and paste the archives into there, then activate the new mod in Mod Organizer 2. This will keep your Fallout 4 installation completely clean.  
  
After all of these steps are complete, you may delete the WorkBase folder. If you have the space, I advise making a backup of both the vanilla ba2 files as well as the patched ba2 files. It will save you the trouble of having to redownload them again later.

*Note that you CANNOT use the HD DLC for BiRaitBec’s texture optimization. You’ll see missing textures everywhere if you do.*

**Optional:** If you want to avoid the hassle of future updates from Bethesda:
  *  Open Steam  
  *  Right-click Fallout 4 in your Library  
  *  Click Properties  
  *  Go to the Updates tab, and change the Automatic Update option to “Only update this game when I launch it.”  
*Since we’re always launching from F4SE, it will never automatically update again.*  

#### That’s it! Launch Mod Organizer 2 inside the Magnum Opus folder. From now on, you must launch Fallout 4 via the “F4SE” option in Mod Organizer 2.  

Now, we still have a little bit of work left to do, but we’re almost done. Before you go any further, you should cap your FPS at 60. You can do this through your gpu driver settings, enabling vsync, or setting an fps limiter in your enb settings (if you choose to add one). 
If you choose to enable vsync, you need to open the ini editor in Mod Organizer 2 and look for the line **iPresetInterval=** under the **[Display]** heading and change it to a **1**, so the end result is **iPresetInterval=1**.  

Now we can launch the game. Once you finish character customization, you’ll have two options when you try to leave. Take note that this modlist uses **Start Me Up - Basic Version**.  

**DO NOT PRESS C DURING CHARACTER CREATION.** This is a known bug with LooksMenu. The Clothes option WILL LOCK YOUR GAME.

**This is a memory, I don’t want to relive this**: You wake up in Vault 111 as Nate. Everything else is normal.  
**This is a memory, stay here a while**: Vanilla Fallout 4 intro.  

Once you reach the exit to Vault 111 and ride the elevator, we can finish setting up the game. Press the “Esc” key and select “Mod Config”. This is the last step, I swear.  

#### MCM Settings:
*_Note: Anything involving hotkeys can be set up however you like. These are simply the way I have them set up for myself._

Companion Command Hotkeys  
![alt text](https://i.imgur.com/zdWBj7f.png)  

Faster Workshop Hotkey  
![alt text](https://i.imgur.com/tEU1HFi.png)  

More AGOMBz - More attacks - Swap the first two categories.  
![alt text](https://i.imgur.com/j1yfx47.png)

More AGOMBz - More...Disable - Disable Radstags.
![alt text](https://i.imgur.com/niLT1kH.png)

Workshop Framework - Turn off Allow Settlements to Leave (optional) and Shelter Mechanic (optional)  
![alt text](https://i.imgur.com/NDfG7LO.png)  

Workshop Plus - Options - Disable Clear Weather.  
![alt text](https://i.imgur.com/M3Fl1sJ.png)  

Workshop Plus - Hotkeys
![alt text](https://i.imgur.com/Y3FvKmU.png)

**Holotape Settings:**   
Open the Beantown Interiors Holotape in your Pipboy and select the following options:  

  *  Customize Options  
  *  Other Options  
  *  Mod Compatibility  
  *  Enable Inside Jobs

That's it! Have fun!  

#### For 21:9/Ultrawide Users:  
*Note that I did not write this. I don’t have ultrawide so I can’t help troubleshoot it. Another user left this here for others to possibly learn from.*

1) Install [TRUBY9](https://www.nexusmods.com/fallout4/mods/24630). Choose XDI when asked about Patches. Select nothing else.

2) Install [TRUBY9 DEF_UI Fix](https://www.nexusmods.com/fallout4/mods/43275)

2) Install [TRUBY9 DEF_INV Compatibility Fix](https://www.nexusmods.com/fallout4/mods/43278)

3) Install [DEF_UI HUDMenuSet Ultrawidescreen](https://www.nexusmods.com/fallout4/mods/43277)

Get a standalone Adobe Flash Player from Adobe and install in the same location as HUDMenuSet.swf  
Execute the standalone Adobe Flash Player and load HUDMenuSet.swf (from here it will work as the DEF_UI HUDMenuSet.exe)  
Move the UI elements to your liking (or leave as is).  Once satisfied hit Ctrl+S  
  *  Note that Magnum Opus already has a custom Def UI preset, aptly titled Lively's HUD Preset. Disable this mod in MO2 if you want to make your own.  
  
Create a new folder DEF_CONF in the same location as HUDMenuSet.swf and save the new XML file inside the new folder  

#### Crashlogs:  

Look, I'm not perfect. If your game CTDs, upload the most recent crashlog from \Documents\My Games\Fallout4\F4SE\ into the #magnum-opus-support channel on the Wabbajack Discord. I'm going to start trying to keep an open record here of issues I've seen with potential solutions.

  *  MSVCR110.dll  
    *  Try reinstalling/repairing VC Redistributable from Visual Studio 2019.  
  *  nvwgf2umx.dll  
    *  This is an issue with video drivers. Here are some potential solutions:  
      *  Roll back to an older version of your gpu drivers.  
      *  Open your MO2 ini editor and make the following changes under the Display header:  
        *  bMaximizeWindow=1  
        *  bBorderless=1  
        *  bFull Screen=0   
  *  hknpCompressedMeshShape or flexRelease_x64.dll  
    * Open your MO2 ini editor, go to Fallout4Prefs.ini, and scroll to the bottom to see the NVFlex header. Make sure it says bNVFlexEnable=0.  

I'll keep trying to update this as I learn more. Please bear in mind, Fallout 4 crashlogs are *very* new, and many of us are still figuring out how to read them properly. The more I read, the more patterns I can find, which means more potential solutions. Thanks for your time.
