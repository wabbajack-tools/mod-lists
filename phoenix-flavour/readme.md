![build-status](https://img.shields.io/endpoint?label=%20&url=https%3A%2F%2Fbuild.wabbajack.org%2Flists%2Fstatus%2Ftpf%2Fbadge.json)

01 // INTRODUCTION
------------------

## 1.1 What Is The Phoenix Flavour?

First published in 2017, [The Phoenix Flavour](https://thephoenixflavour.com/skyrim-se/introduction/) is a veteran among Skyrim SE guides. Over the past years, it has slowly evolved into a full-grown guide and made a name for itself as being easy to follow and thorough all around. It transitioned from a modular guide with too many ideas into a more streamlined approach. Thanks to the contributions of some incredibly talented and helpful people, we now feature more than 600 mods that work flawlessly together!

Please join [The Phoenix Flavour Discord](https://discord.gg/BpwXX5f) server for information in regards to the guide itself, or to simply show some appreciation to the TPF team.

The Wabbajack version has an alternate profile inside Mod Organizer 2 for an LotD version of the guide. **Please do not contact Phoenix or Umgak for support with this. This is Lively's pet project and he shall suffer the consequences of his actions.**  

## 1.2 Requirements Before Installing

* Current build version of Wabbajack. This can be found on the [Wabbajack website](https://www.wabbajack.org/).  
* Clean install of Skyrim Special Edition - note that your game should be installed OUTSIDE of any Windows-protected folder such as Program Files.  
* 95 gigs of free space. Note that this number does NOT include your Skyrim SE installation.  
* You will also need a few extra gigs if Wabbajack is running on the same drive as your installation location, as the program needs space for VFS Staging (the folder in which Wabbajack runs its processes to complete its job).

A Nexus Premium account is highly recommended for automatic download support.

Pirated games and mods are NOT supported.

Once Skyrim is installed, **make sure you run it once**. (Get to the Skyrim splash screen and exit).

## 1.3 Installation Instructions

* Download the latest version of Wabbajack.  
* Create a new folder at the root of a drive (Example: D:\Wabbajack).  
* Place the Wabbajack.exe into this new folder.  
* Launch Wabbajack.exe and choose the "Browse Modlists" option.  
* Select "The Phoenix Flavour" from the list of available modlists on the Wabbajack UI.  
* Click "Download and Install."  
* In "Installation Location" choose a blank folder at the root of a drive (example: D:\Phoenix Flavour).  
  * This location CANNOT be where you have the Wabbajack.exe located.  
  * This location CANNOT be where you have the TPF.wabbajack file saved.  
  * This location CANNOT be inside of a Windows-protected folder, such as Program Files.  
  * This location CANNOT be your Skyrim folder in Steam.  
* The "Download Location" will update automatically. You can change it if you wish.  
* Click the "Play" arrow.  
* Make sure to accept the Nexus API request if your browser asks for it.  
* When Wabbajack completes the installation (you can check the Wabbajack.current.log to confirm it completed successfully), you may close the program.

## 1.4 Post-Installation Instructions - Do Not Skip This Step!

* Navigate back to your Phoenix Flavour installation folder.  
* Open "Game Folder Files"  
* Copy everything inside the Game Folder Files folder.  
* Paste it into your Skyrim SE directory (steam\steamapps\common\Skyrim Special Edition).  
  * Just to be really clear about this, since there has been some confusion: there is a folder installed by Wabbajack called "Game Folder Files." The contents of this folder are what you need to copy into your Skyrim folder. Not the folder itself, and definitely not everything that Wabbajack installed on your PC. It's just a few .dll files, skse_loader, things like that. It's only about 12 MB of files.

## 1.5 First Launch

Congratulations on making it this far. It's been a real rollercoaster. We're almost done....almost....

* Open your Installation folder for Phoenix Flavour and launch ModOrganizer.exe.  
* Make sure the dropdown says SKSE and click Run.  
* Start a New Game. You'll start in the Live Another Life prison cell. Create your character, then wait for all of the mods to finish configuring.  
* When the text prompts stop appearing in the upper left corner, it's time for everyone's favorite part: MCM configuration!  

Let's get started.

Press **Esc**

* **Settings**  
  * **Display**  
    * **Depth of Field** - Move the slider all the way down to 0  
      * Tab out of this menu until you're back in the game.  

Press **Esc** and select **MCM**.

### **A Matter of Time**

* Presets  
  * User Settings  
    * Load User Settings  

### **All Geared Up Deriv.**

* NPC  
  * Enable Weapons - Enable  

### **Cathedral Weather**

* Settings  
  * Configuration Spell - Disable  

### **Complete Crafting**

* Recipe Display  
  * Crafting Menu Filters  
    * Crafting Categories - Disable  
    * Item Type Filters - Disable  
  * Crafting Options  
    * Additional Items  
      * More Jewelry - Disable  
    * Equipment Breakdown  
      * At Smelter - Disable  
      * At Tanning Rack - Disable  
  * Miscellaneous  
    * Leveled Items  
      * Upgrade via Crafting - Disable  

### **Diverse Dragons Collection**

* Open MCM and close it. Yes, that's all.  

### **Follower Framework**

* Activity  
  * Sandboxing  
    * Ignore Special Furniture - Enable  
    * Stop During Player Dialogue - Enable  
    * Only Sandbox in Town - Enable  
* Gameplay  
  * Regard System  
    * Allow Regard - Off  
* System  
  * Player Casted Abilities  
    * Command Followers - Disable  
  * Core  
    * Enable ConsoleUtil - Enable  

### **GIST Soul Trap**

* Leveling  
  * Customize as you wish, or leave it disabled.  

### **Growl Werebeasts**

* Features  
  * Invulnerable During Transformation - Enable  

### **Immersive HUD**

* Activation  
  * Compass Activation  
    * Key Press Toggles - Enable  
  * SkyUI Active Effects  
    * Link ALL SkyUI Widgets - Enable  

### **moreHUD**

* Enemy's Level  
  * Enemy Meters  
    * Show Magicka Meter - Disable  
    * Show Stamina Meter - Disable  

### **RDO**

* Other Options  
  * Toggle NPCs  
    * Allow RDO Added Followers - Disable  
    * Allow Terek - Disable  

### **Realistic Water Two**

* Mod Options  
  * Blacksmith Forge Water  
    * Kynesgrove - Enable  
    * Rorikstead - Enable  

### **Timing is Everything**

* Extra Options  
  * Presets  
    * Load Preset  
*(Note: This preset was made by me for no reason whatsoever and is not officially endorsed by Phoenix.)*  

### **Wonders of Weather**

* Options  
  * Rain Splashes  
    * Level - Disabled  

### **Lively's Picks**  
*(aka, not part of the official guide, but I like these settings)*

### **Quick Light**

* Type of Light Source - Magic  

### **SSoB**

* Quest Markers  
  * Quest Markers on Stones of Barenziah - Enable  

### **Storm Lightning**

* Presets  
  * Load Preset  
    * Realistic  

If you're happy with the guide, please consider [donating to Phoenix on her Patreon](https://www.patreon.com/thephoenixflavour). None of this is possible without her and her team.

If you need any support (or just want to hang out with us), feel free to join the [Wabbajack Discord server.](https://discord.gg/wabbajack)

## 1.6 Frequently Asked Questions

**Q:** Hey Lively, why are all these mods disabled on the LotD profile?  
**A:** Let's break it down.

* Book Covers Skyrim is included in LotD by default. This mod is redundant in the LotD Profile.
  * No, don't turn it back on.
* Unique Uniques is included in LotD by default. This mod is redundant in the LotD Profile.
  * No, don't turn it back on.
* I don't like Classic Sprinting Redone.
  * Yes, you can turn it back on if you want.
* I don't like Undiscovered Means Unknown.
  * Yes, you can turn it back on if you want.
* I don't like Subtle But Classless.
  * Yes, you can turn it back on if you want.
* All of the AllGUD and Dyndolod Outputs have two versions. Half will be disabled, half will be enabled. Which half depends on which profile you are using.
  * No, you shouldn't touch these.
* The Conflict Resolution Patch also has two versions. Which one is enabled is dependent on which profile you are using.
  * No, you shouldn't touch these.

**Q:** Where is my HUD? Why is my compass gone?  
**A:** It's hidden by iHud. Press X to toggle it (assuming you followed the MCM instructions above).

**Q:** How do I start LotD?  
**A:** Option A (my preference) is to choose the Arrived by Boat - Solitude option in the Live Another Life cell. Option B is to just...go to Solitude whenever you want. You'll get the safehouse key delivered by the courier after reaching 50 displays with Option B. Sometimes he takes a while to show up. Be patient.

**Q:** Why don't you have any MCM configurations for the LotD profile?  
**A:** Two reasons:

* I made it for myself and don't want it to swallow up the core TPF guide, which is the real installer as far as I'm concerned.
* It's mostly up to personal preference. Do whatever suits you.

## 1.7 Widescreen Support
*(Please note that I do not own a widescreen setup, and thus cannot help troubleshoot this section. These instructions were provided by @Mantis#1337.)*

Go to the [Complete Widescreen Fix](https://www.nexusmods.com/skyrimspecialedition/mods/1778) page.  
Download the following files:

* Complete Widescreen Fix for SkyUI 5.2 SE Alpha- 2560x1080  
* Better Dialogue Control Widescreen Fix 
* Better Message Box Control Widescreen Fix
* Even Wider Rescaled MCM Menu for SkyUI - Widescreen Fix
* SkyHud High Resolution Widescreen Fix

Install the archives with Mod Organizer 2. They will be in the right window, under the Downloads section.  
Be sure to RENAME the mods during installation. You can click the dropdown box and select the appropriate filename for each as you install them.  
