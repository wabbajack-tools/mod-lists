### Banana Split

![alt text](https://i.imgur.com/A2fN0q8.jpg)
_by Lively_

Better graphics, tons of new weapons and armor, plenty of extra content, and improved combat mechanics that provide a challenge without being overly frustrating.

#### **_Requirements Before Installing:_**

  *Current build version of Wabbajack. This can be found on the Wabbajack Discord linked above.
  *Clean install of Fallout 4, without HD DLC.
  *Nexus Premium.
  *109 gigs of free space. Note that this number does NOT include your Fallout 4 installation.

#### **_Installation Instructions:_**

1. Download the latest version of Wabbajack (beta 4 at the time of this writing).
2. Create a new folder at the root of a drive (Example: D:\Wabbajack).
3. Place the Wabbajack.exe into this new folder.
4. Download the newest BananaSplit v2.5.wabbajack file from the Wabbajack Discord, or install directly from the Wabbajack User Interface.
5. Place the modlist file into the Wabbajack folder, next to the Wabbajack.exe file. Skip this step if installing directly from the Wabbajack User Interface.
6. Launch Wabbajack.exe. If you are installing directly from the Wabbajack User Interface, then choose the "Browse Modlists" option, download Banana Split, and skip to Step 9.
7. Select “Install a Modlist”
8. Navigate to the BananaSplit v2.5.wabbajack file you just downloaded.
9. In “Installation Location” choose a blank folder at the root of a drive (example: D:\Banana Split). **DO NOT** install your modlist to the same folder where you put Wabbajack.exe.
10. The “Download Location” will update automatically. You can change it if you want.
11. Click the "Play" arrow.
12. Make sure to accept the Nexus API request if your browser asks for it.
13. When Wabbajack completes the installation (you can check the Wabbajack.exe.log to confirm it completed successfully), you may close the program.

#### **_Post Installation Instructions:_**

Go to [BiRaitBec's Modding Guide](https://www.nexusmods.com/fallout4/mods/23556?tab=description) page.  
Manually download the WorkBase file.  
Manually download the Main Repack files (Part One, Part Two, and Part Three).  
 - *If your PC is more of a low-end system, manually download the Performance option instead.*  
 
Extract the WorkBase file with 7zip.  
Inside of the Workbase folder, create 2 folders called 'OriginalBa2' and 'PatchedBa2'.  
You should have three folders inside of Workbase: OriginalBa2, PatchedBa2, and PatchedFiles.  
Navigate to to your Fallout4/Data folder, Cut or Copy (Depending on how much space you have) these 15 files:  

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

Paste these files into your WorkBase/OriginalBa2 folder.  
Extract all three Main Repack files (or the Performance repack, if you chose that).  
Move the "Textures" folders from these extracted archives into the "PatchedFiles" folder.  
Run the installer.bat file inside of WorkBase.  
When it is done, cut and paste all of the files inside of the PatchedBa2 folder into your Fallout4/Data folder.  
After pasting those files, you may Delete the WorkBase folder.  

*Note that you CANNOT use the HD DLC for BiRaitBec’s texture optimization. You’ll see missing textures everywhere if you do.*  

As for the extra steps involved, it’s for the best. First, it enables users to easily swap between Banana Split and Fallout 4 Enhanced Edition. Second, it’s just better for your overall gaming experience.  
*If you ever need to update your Fallout 4, back up these new ba2 files before you verify/update. Otherwise you’ll have to do it all over again.*  
Anyway, now that we got that over with, let’s move on.

Navigate back to your Banana Split installation folder.  
Open “Game Folder Files”  
Copy everything in this folder.  
Paste it into your Fallout 4 directory (steam/steamapps/common/Fallout 4).  

#### FO4Config Settings:

Navigate to your Banana Split directory.  
Open the “Tools” folder, then the “Fallout 4 Configuration Tool” folder.  
Right-click “Fallout4ConfigTool.exe” and Run as Administrator.  
When FO4Config launches, navigate to the Settings tab.  
Make sure your filepaths align with where you have Banana Split installed, as shown below. Your folder names may be different.  
![alt text](https://i.imgur.com/wz3Jg42.png)  

Next, navigate to the Tweaks tab. Make your screen match the one shown below.  
You can change sensitivity options if you like. Make sure your game resolution here matches your monitor’s resolution.  
![alt text](https://i.imgur.com/QqKfkWx.png)  

Next, navigate to the Performance tab. Again, make sure the options on your screen match what’s in the image below.  
Note: If you ran FO4Config through MO2’s executables, you will need to exit out and run the exe as Administrator to enable the “High Priority” option.  
![alt text](https://i.imgur.com/LRvQQce.png)  

Navigate to the Camera tab next. Keep making the images match what you see.  
Some prefer prefer their Field of View at 80, 85, or 95. It’s up to you.  
![alt text](https://i.imgur.com/K1njp4z.png)  

Onward to the Textures tab. You know what to do.  
![alt text](https://i.imgur.com/HKYxVYG.png)  

This is entirely optional. If you want to see different colors instead of the standard green in your pipboy, click the “Disable FX” option and select a color of your choosing.  
![alt text](https://i.imgur.com/DkmPIiG.png)  

Gameplay tab! The difficulty numbers correspond with the in-game difficulties. 3 is Hard. If you want Normal, drop it to 2. The higher the number, the higher the difficulty.  
Note: I know “All NPC’s Killable” is tempting, but you will break a lot of quests and scripts if you play this way.  
![alt text](https://i.imgur.com/LEMkXcI.png)  

Now to the Main tab. Last one, I swear.  
Use the filter to search for the option listed below. Change the Current Value from “1” to “0”.  
Note: unfortunately, this will be the biggest performance hit, especially in the Downtown Boston area. Turning this option off means the engine loads buildings in individual parts instead of one solid piece. However, leaving this option enabled will render a lot of objects invisible/broken/flickering. I’m working on a more performance-friendly fix, but for now, I’m afraid this is the best I can offer. *Precombines are the scourge of my existence.*  
![alt text](https://i.imgur.com/Riv5Rkj.png)  
Click "**Save**" in the bottom left.

That’s it! Launch Mod Organizer 2 inside the Banana Split folder. From now on, launch Fallout 4 via the “F4SE” option.  
If you want to avoid the hassle of future updates from Bethesda, open Steam, right-click Fallout 4 in your Library, open Properties, go to the Updates tab, and change the Automatic Update option to “Only update this game when I launch it.” Since we’re always launching from F4SE, it will never automatically update again.  

Now, we still have a little bit of work left to do, but we’re almost done. Now we can launch the game. Once you finish character customization, you’ll have three options when you try to leave.  

**This is a dream**: You will wake up in Vault 111. Nora is not your wife. Codsworth is not your robot. You’re just a random Prewar Sanctuary citizen.  
**This is a memory, I don’t want to relive this**: You wake up in Vault 111 as Nate. Everything else is normal.  
**This is a memory, stay here a while**: Vanilla Fallout 4 intro.  

Once you reach the exit to Vault 111 and ride the elevator, we can finish setting up the game. Press the “Esc” key and select “Mod Config”. This is the last step, I swear.  

#### MCM Settings:
*_Note: Anything involving hotkeys can be set up however you like. These are simply the way I have them set up for myself._

Companion Command Hotkeys  
![alt text](https://i.imgur.com/nJKi2JB.png)  

Faster Workshop Hotkey  
![alt text](https://i.imgur.com/QOVlpjA.png)  

Vafs Focus Hotkey  
![alt text](https://i.imgur.com/4WlhCqZ.png)  

Vafs Critical Hotkey  
![alt text](https://i.imgur.com/DMIi8cD.png)  

Workshop Framework - Allow Settlements to Leave - Off  
![alt text](https://i.imgur.com/vnvLw7O.png)  

Workshop Plus Hotkeys  
![alt text](https://i.imgur.com/jpEhzuZ.png)  


**Holotape Settings:**   
Open the Beantown Interiors Holotape in your Pipboy and select the following options:  

*Customize Options  
Other Options  
Mod Compatibility  
Enable Inside Jobs*  

For a full list of mods included in Banana Split, please have a look though [this handy google doc.](https://docs.google.com/document/d/1TDtANff9fa5fB6f-jzW3JBXt07nDB2iYhz9Og9CDdEo)  

All mods are listed at the bottom of the page, categorized in the same order in which they'll be displayed in the left pane of Mod Organizer 2. Have fun!
