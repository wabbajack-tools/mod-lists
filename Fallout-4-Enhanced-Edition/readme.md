## What this modlist does:

Your game will be much less recognizable and very tough, especially at early levels; you have been warned. Along with being more difficult, this modlist makes Fallout 4 look better, play better, adds new guns, new ways to build settlements, new strategies and ways to roleplay your character. It even adds new content to explore all over the map. New NPCs, new quests, new adventures, and new enemies to fight, all fitting into the world and making it that much more enjoyable. Fallout 4 always seemed a little empty, so now you have more things to play around with to fill the world yourself, as well as new things that already fill some of the empty void! Roleplay to your heart's content, or find a way to become the strongest being in the Commonwealth; it's all up to you! Oh, and the annoying voice of the main character is gone, so you can sound like yourself for once! You are not shoehorned into being whoever the game tells you to. You are you. Play this game how YOU want to, not like how Bethesda wants you to.

### The main differences in 1.2.1:

* Almost all enemies have been re-balanced by hand
* Lots of bugfixes
* BethINI has replaced FO4 Config
* See patchnotes [here](https://github.com/AUGSpeed/F4EE-Patch-Notes) for more details

## Requirements:

* All Fallout 4 DLCs (Except for the HD DLC) - No, this is not negotiable
* A CLEAN Fallout 4 Installation - meaning without any previous mods in any way.
* About 100 GB of free disk space on top of your Fallout installation, so about 130 GBs total (this will go down after installation is finished, but this much is required during the install process).

## Installing with Wabbajack:

### Step 0:

Run Fallout 4 once from Steam. You can close the launcher when it detects your video settings. After this, create a new folder named `F4EEInstall` (Or any other name, that's just what I will refer to it as) anywhere outside of Program Files. I HIGHLY recoomend installing on an SSD! Then, in Wabbajack, click the `...` next to `Installation Location` and select the `F4EEInstall` folder you just made. Feel free to keep the `Download Location` anywhere you like, or leave it at the default.

### Step 1:

After it finishes, go to your install folder, and open up the `Game Folder Files` folder and Copy these all into your Fallout 4 Directory.

### Step 2:

Download the latest ENB binaries from [the ENB website](http://enbdev.com/download_mod_fallout4.htm). Open the archive you downloaded, and go into the `WrapperVersion` folder. Extract ONLY the two files `d3d11.dll` and `d3dcompiler_46e.dll` into your Fallout 4 Directory.

### Step 3:

Launch BethINI from the exe found in your `F4EEInstall/tools/BethINI Standalone` folder.

### Step 4:

These instructions will be listed by Tabs in BethINI, please follow them in order, or things will not work.

* **Setup**:   
Make sure `Game` is set to `Fallout 4`.
`Game Path` should be set to whatever directory your game is in, ending with `Steam/steamapps/common/Fallout 4`.
`Mod Organizer` should be set to your `F4EEInstall` directory, wherever that is.
`INI Path` should be set to `ModOrganizer > F4EE 1.2.1`.
* **Basic**:  
Here, set your screen's resolution is set properly, and also set your graphical preset. I recommend using BethINI's High preset (I used to recommend Ultra, but it really just hurts performance).
Ensure that `FPS` is set to `60`. Don't worry, we can get more in game, it just needs to be that way in the INIs.
Be sure to check the `Recommended Tweaks` Box as well!
* **General**:  
Check the `Intro Logo` checkbox. It needs to be checked, otherwise custom main menu audio doesn't work. No idea why.
You can also choose to disable tutorial messages here.
* **Interface**:  
You can check here if you want subtitles or not.
* **Custom**:  
If you want your PipBoy Flashlight to be colored a flat white rather than whatever color your PipBoy is, then do this:
Under `Section`, select `Pipboy`.
Under `Setting`, select `bPipboyEffectColorOnLight`.
In the text box below, change the `1` to a `0`, and then click `Save`.
* **Basic**:  
Now, hit `Save and Exit` in the bottom right.

### Step 5:

Launch ModOrganizer from the exe found in your `F4EEInstall` folder.

NOTE: If you are on Windows 11, update the MO2 Installation using the Update button (It looks like a globe) in the top right of MO2.

### Step 5.5 (Optional):

**NOTE FOR STREAMERS**: Disable the mod 'Musical Lore - Wasteland Edition', because the author has a tendency to DMCA claim YouTube videos. Sorry about that!

Now, you have a few choices before starting your game. You can follow the simple instructions at the bottom of the left pane of MO2 to decide if you want your Protagonist to talk or not. By default, it will not.

You can also choose to install Pack Attack NPC, which is an AI mod that was removed from the Nexus. You might be able to grab it from the author's discord server [here](https://discord.gg/Kacy6Z5BFM), but there are NO guarantees. Then, place the archive in your downloads folder, and install it like you would any other mod in MO2. If you don't know how to do that, then see [Lively's Learn To Mod](https://github.com/LivelyDismay/Learn-To-Mod/tree/main/lessons). Now, simply place this mod above `F4EE PANPC Patch` in the left pane, and enable both, and you will be good to go, with smarter enemies enabled.

### Step 6:

Now, launch your game from `F4SE` in the top left of your MO2! 

If this does not work, please update your MO2 installation. I will fix this in the next update.

After creating your character, be sure to first set the difficulty to `Survival`, as this list is built entirely for that difficulty. Then, configure the MCM menus found at the top of your pause menu. Follow these steps and you will be good!

* **HoloTime**:   
For `Toggle HoloTime Display`, set it to the `?/` key. Then, click on `Widget Position`, and move the widget to the very top middle of your screen, with `Y` being close to 1, and `X` being close to half of your monitor's resolution width. Then, ensure that scale is `0.5`.
* **FallUI**:   
Text Style: 
  - `Font`should be set to `Roboto Condenced Bold`.
  - `Font Size for Pipboy` should be set to `24`
  - `Font Size for Barter and container` should be set to `20`.
Lists:
  - `Default Sort Order` should be set to `Item tag sorting (tag order in xml)`
  - `Draw Column Divider` should be set to `ON`.
Pipboy
  - `Selected Item Style` should be set to `Simple(Shear)`.
  - `Go back by pipboy/cancel key` should be set to `ON`.
* **VAFS Redux**:  
Focus: For `Hotkey: Toggle Focus`, put `Q`. If you cannot, rebind VATS in your regular settings menu.
Attack: For `Hotkey Use Critical`, put `L Alt`.
* **Workshop Framework**:  
Options: Set `Auto Assign Beds`, `Auto Assign Defenses`, and `Auto Assign Food` to `OFF`.
* **Beat The Vault**:  
After setting these options, go to the door of the bathroom and click the only applicable button, `Accept`, and then `Wake Up`. 
**Now, play through the vault until you get outside.**
* **Immersive HUD**:  
Now, before you configure this menu, **MAKE SURE** that your HoloTime widget as well as your compass are visible. If they are, then great, you can start configuring! If not, ensure that you use that hotkey you set earlier to enable HoloTime.   
After that, Set `Immersive HUD Enabled` to `ON`. 
Then, set `Settings Holotape` and `AID Toggle Items` to `OFF`. 
Set your `Hotkey to Toggle HUD` to `X`.   
Under `Crosshair`, set `Weapon` and `Hit Marker` to `Always`.   
In `Health`, set `Health below (%)` to `0.5`. 
Under `AP`, set `AP below (%)` to `0.5`.   
Under `Other Settings`, set `Active Effects` to `Always`.
* **Beantown Interiors**:  
Now, open your PipBoy, go to `Misc`, and `Settings`, and open the `Beantown Interiors` Holotape. Go to `Customize Options -> Other Options` and `Enable Hardcore Clutter`. Then, go to `Mod Compatibility` and `Enable Insidejobs Compatibility`.
* **True Storms Configuration**:  
Now, open the Holotape `True Storms Configuration` and enable `True Storms Effects`. If you want the game to be extra hard, keep `Constant Rads (Rad Rain)` Enabled, and also Enable `Ghoul Horde Chance`.

### Step 7 (Optional):

For an additional little tweak for those of you who can run this at 60+ FPS, you will use the ENB Menu to limit your FPS (Which I HIGHLY recommend). 
To open the menu, hit `Shift+Enter` anytime in game, and in the top left, a menu will pop up. 
Navigate to `FPS` and change the value to whatever you desire. 
I recommend using a factor of whatever your screen's refresh rate is at. So, for a 120hz screen, use 60, 120, or 240. 
To prevent screen tears, use your GPU's inbuilt profile selctor for Fallout 4 to use Fast V-Sync.

---

You're done! Have fun, and feel free to join my [Discord](https://discord.gg/g4r3pcP) or the Wabbajack Discord server to see what I am working on next or if you have suggestions or anything! I will also be doing my best to support users on this Nexus page, so you can contact me there too! I hope you enjoy your experience!
