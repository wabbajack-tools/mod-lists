# Nice-Overall-Improvement-SE
A light Modlist designed to be built upon by users, with enhanced graphics, mechanics, and immersion, while staying true to the original vision of Skyrim mechanics.
 Nice Overall Improvement SE

Introduction

  

NOISE is a light Modlist designed to be built upon by users, with enhanced graphics, mechanics, and immersion, while staying true to the original vision of Skyrim mechanics; basically, Skyrim ++.

This Modlist has high compatibility with modded player homes, quests, etc.

  

While Lexy’s LotD is fully featured, patched and smashed (and the best Modlist ever), there is little room to add your own mods without in-depth conflict resolution. 

  

This Modlist allows for you to add what mods you would like (within reason), as long as you take the time to understand how modding works.

  

REQUIRES NEXUSMODS.COM PREMIUM ACCOUNT

  
  

Getting Started

This process requires 81GB of hard drive space and takes a few hours depending on your internet and computer speed. Installing on an SSD is recommended.

Download Wabbajack.exe. This can be found in the [#builds](https://discord.gg/AzS3dw2) channel in the [Wabbajack discord](https://discord.gg/AzS3dw2). 

  

System Specs

With or without DynDOLOD generated, I recommend 4-6GB of VRAM for optimal performance, especially with an ENB. This guide requires you to generate LODs yourself, due to allowing other mods to be installed on top.

  

Old Files Cleanup/Steam Config

  

This is only necessary one time, and only if you’ve used NMM or Vortex previously. If you have other Wabbajack modlists installed, ignore these instructions until you see END IGNORE AT THE END OF THESE INSTRUCTIONS

  

Next, delete any files you may have from old installations or previous modding adventures. Delete the following directories:

1. C:\Program Files (x86)\Steam\steamapps\common\Skyrim Special Edition 
2. C:\Program Files (x86)\Steam\steamapps\common\Skyrim Special Edition Mods 
    1. Note: This directory may not exist and will have been left over from previous usage of Wrye Bash.  

3. Open Windows Search and copy/paste %LOCALAPPDATA% 
    1. Delete Skyrim Special Edition & LOOT ( If you have never run LOOT on your computer, this directory will not exist) 

4. Open Windows menu and copy/paste %APPDATA% 
    1. Delete zEdit & Mod Organizer (If you have never run zEdit or MO2 on your computer, these directories will not exist. 

5. Open Windows menu and copy/paste %HOMEPATH%\Documents\My Games\ 
    1. Delete Skyrim Special Edition 

  
  

Setting Up Skyrim

Next, open Steam, click Library at the top, find The Elder Scrolls V: Skyrim Special Edition, right click on Skyrim, click Manage, then click Uninstall. Download Skyrim again.  Install Skyrim into a location not protected by User Account Control.  

The Program Files folder is not recommended and could cause issues. Skyrim is about 10GB.

  

Steam Overlay 

Open Steam

Click Library at the top

Find The Elder Scrolls V: Skyrim Special Edition and right click it

Click properties

Uncheck Enable the Steam Overlay while in-game

  

Update Proofing

Open Steam

Click Library at the top

Find The Elder Scrolls V: Skyrim Special Edition and right click it

Click Properties

Select the Updates tab

Under the Automatic Updates section, select the Only update the game when I launch it option

  

Initial Skyrim Configuration

Open Steam

Launch The Elder Scrolls V: Skyrim Special Edition

In the launcher window that appears, click OPTIONS

In the menu that appears, click the Ultra button

Set the Aspect Ratio (should be auto-selected to your screen’s native aspect ratio)

Set the Resolution (set it to your screen’s resolution)

Set Antialiasing to Off (Best performance)

Make sure Windowed Mode is unchecked

Make sure Borderless is unchecked

OK to save the settings

Close the launcher window

END IGNORE

  

Installation

Create a new directory in the root directory of the hard drive where you want everything to be installed. Do not create a directory within your Skyrim folder. For this guide, we will create an example directory in C:\ called NOISE. You can create this folder on any drive.

  

Open Wabbajack. From here, you have two options:

1. Select the NOISE modlist from the Wabbajack UI. 
2. Download the .wabbajack file from the release channel on the Wabbajack Discord. 
  

If you have opted for a manual installation, click “Install a Modlist” at the bottom of the window. Navigate to C:\NOISE and select Nice Overall Improvement SE.wabbajack and click Open.

  
  

At the bottom left of the new window, the Installation Location will be the folder you created in the root directory of your hard drive. The Download Location will be the Downloads folder you created inside of the main folder. If you are creating these on your C:\ drive, please type in C:\NOISE in Installation Location and C:\NOISE\Downloads in the Download Location. After you have completed these steps, click Begin.

 

A window will open in your browser asking if you’d like to authorize Wabbajack to use your Nexus Mods account. Click authorize. Wabbajack will now install the mod pack for you.

  

Once Wabbajack has finished all of its processes, the left pane will say “Installation complete! You may exit the program.” At this point it is safe to close Wabbajack.

  

If you don’t see “Installation complete”, Wabbajack has probably encountered an error and must be restarted. To help make sure that an error does not happen again, please refer to the Setting Up Your System section and delete the listed folders again. Inside of the NOISE folder, delete everything except the downloads folder or Wabbajack.exe and the modlist file.

  

If you get an error immediately after authorizing Wabbajack on the Nexus website, please download the [.Net Framework 4.8 Runtime](https://dotnet.microsoft.com/download/dotnet-framework/net48) executable and install that. Restart your computer and start Wabbajack again.

  

If Wabbajack fails to download a particular mod, it means that the mod might have been updated. Wait for the new release. Look around in the release channel to see if I already mentioned that I’m going to update for this specific mod.

  

Do not ask other people to share older files as this is a violation of the Nexus Terms of Service and Wabbajack’s server rules. This constitutes mod piracy and will result in an immediate ban.

  

Expanding on server rules, do NOT contact outside authors such as DarkLadyLexy or Belmont Boy outside of the Wabbajack Discord for help with your Wabbajack installation.

  
  

Installation Part 2

Now we have to copy files over into their correct spots. Navigate to C:\NOISE\Game Folder Files\. Copy all of these files and paste them into C:\steamapps\common\Skyrim Special Edition\

  
  

  BETHINI CONFIG

        

You always need to close Mod Organizer 2 before launching BethINI

Bethini is located in C:\NOISE\tools\BethINI.

Click on Bethini.exe.

You will be prompted with a window asking you to choose your game.

Select Skyrim Special Edition from the drop-down menu.

Once the BethINI window has come up, go to the first tab – Setup.

Double-check that Game Path and INI Path point to the correct locations. If you need to change these, BethINI will restart.            

                

  
  

Continue with the second tab, Basic.

BethINI Presets are toggled by default, but we’ll also select Recommended Tweaks.

Double-check whether Resolution is set to the correct value.

Unless you’re going for a screen-archery setup, you should not select the Ultra preset. For high-end PC owners I would recommend the High option and everyone else might want to select Medium. If your PC is already struggling with vanilla Skyrim go for the Low option.

Disable both VSYNC and Lock Frame Rate. Havok fix caps the frame rate for us.

Set Antialiasing to NONE and disable FXAA if you don’t like how FXAA blurs the screenspace. TAA is terrible in SE.

        

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

Continue with the third tab, General.

  

Disable Intro Logos.

  

Continue with the fifth tab, Interface.

I prefer my Lock Sensitivity to be high, but this will come down to personal taste / your mouse config/dpi.

Dialogue Subtitles and General Subtitles are unchecked by default, toggle them on if you want them.You can still always toggle them in game.

Continue with the sixth tab, Detail.

Godrays: Use your personal preference, although they have a large FPS hit.

Field of View: Increase this if you prefer a wider FoV.

Lens Flare: Matter of taste.

Anamorphic Lens Flare: Disabled

Ambient Occlusion: FULL (unless using ENB, then disable)

Shadow Bias: set to 0.47 (fixes ugly pyramid-shapes in snowy regions)

Improved Snow Shader: Disable

  

Note: Depth of field here is NOT the DOF slider in game. This is the option for blurred viewspaces underwater.

  
  
  
  

Continue with the seventh tab, View Distance.

Grass Fade: 15000 — or higher

  

Go to the Custom tab.

Select the following:    Section: Select Display.

Setting: Select fGlobalContrastBoost.

Change the value to -0.1800.

Click Save.

  

Section: General

Setting: Select bModManagerMenuEnabled

Change the value to 0.

Click Save.

This will disable the MODS entry in the in-game pause menu. 

  
  
  
  
  
  
  
  
  
  
  
  
  

Return to the second tab, Basic, and click Save and Exit.

                

                

Opening Mod Organizer 2

  

Navigate to C:\NOISE\ and open ModOrganizer.exe

  

If it asks you to associate Mod Organizer 2 with nxm links, click yes. 

  

Launching The Game

In Mod Organizer 2, select SKSE from the drop down menu next to the Run button and click Run. This is how you will launch Skyrim from now on.

  

Configuring MCM

After starting a new game, you will spawn in the Realm of Lorkhan, an open ended roleplaying alternate start. Feel free to wander about, and don’t worry, falling will not kill you. When you’re ready, set up MCM settings and make a save before touching one of the floating pink gems to be teleported to Tamriel. The main quest can be started by talking to Jarl Balgruuf.

  
  

Follower Framework

- Only Sandbox in Town: X 
- Mounts: Riding Support Only X 
  

    

  
  
  
  

Immersive HUD

 -  Activation: Keypress toggles: X

                        

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

 SKYUI

- Advanced: Disable all SWF Version Checking

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

    Violens

- Player Killmove Immunity: Enabled

Keep Advancing Killmoves to OFF. This can cause your character to become stuck in the terrain/walls/etc.

  

Smilodon’s configuration is a power. Set to your playstyle.

  
  
  
  
  

Quick Light

  
  

Set Brightness to “Bright”

Recommended Obsidian Weathers settings - Power in spellbook

   Filters: Bleak

  
  
  
  
  
  
  

Seasons FX On

  

All other MCM settings can be configured as you like, or depending on extra mods you’ve installed.

  
  

   Resources

To learn more about Mod Organizer 2, please [watch this video](https://www.youtube.com/watch?v=LwaC7gP7_JM).

  

To install Distant Land, refer to [Lexy’s guide](https://wiki.nexusmods.com/index.php/User:Darkladylexy/Finish_Page), or for a more visual approach, [here](https://thephoenixflavour.com/guide/visuals/step-14/) (use Lexy’s for xLODGEN), or watch GamerPoets video on DynDOLOD. 

  

All tools you install will be placed in C:\NOISE\tools. Then set them up as executables through MO2.

  

[https://forum.step-project.com/topic/13451-xlodgen-terrain-lod-beta-for-fnv-fo3-fo4-fo4vr-tes5-sse-tes5vr-enderal/](https://forum.step-project.com/topic/13451-xlodgen-terrain-lod-beta-for-fnv-fo3-fo4-fo4vr-tes5-sse-tes5vr-enderal/)

[https://forum.step-project.com/topic/13894-dyndolod-beta-for-skyrim-special-edition-and-skyrim-vr-274/](https://forum.step-project.com/topic/13894-dyndolod-beta-for-skyrim-special-edition-and-skyrim-vr-274/)

  

   More resources and learning:

  

[How to Mod Skyrim SE](https://www.youtube.com/playlist?list=PLlN8weLk86XgJIZXTEPEcU1b6dzA_eJSB)

  

[MO2](https://www.youtube.com/watch?v=ruq6hQIAvB8&list=PLlN8weLk86Xh3ue76x2ibqtmMramwQmHB)

[Wrye Bash](https://www.youtube.com/watch?v=uYAEFk5QmLQ&list=PLlN8weLk86Xjiymt7aBPWD2epUftR7wss)

[Mator Smash](https://www.youtube.com/watch?v=2e-0mc8wmDs)

[xEdit](https://www.youtube.com/watch?v=wA5IlESvtCM&list=PLlN8weLk86XiGXJI4DaRa1QIq1zhDpD8V)

  

   

   Adding an ENB:

  

1. If you want to add an ENB you need d3d11.dll and d3dcompiler_46e.dll files from ENBSeries located [here](http://enbdev.com/mod_tesskyrimse_v0390.htm) and place them in your Skyrim Game Folder along with the ENB files.  Also grab any other files that the ENB you wish to add specifies.  
2. If the ENB requires ENB Helper you can install it anywhere within the left panel of MO2.  
  

Adding ReShade:

  

    [ReShade Guide](https://www.youtube.com/watch?v=-jQ7OJy0818)[Text Guide](https://reshade.me/forum/troubleshooting/5227)

  

Adding mods:

    1. When adding mods it is important to be able to use modding tools effectively and understand their purpose. Tools commonly used include xEdit, zEdit, Wrye Bash, DynDOLOD, xLODGEN, Mator Smash, Merge Plugins Hide, and TexGen.   
    2. Begin by adding your chosen mods into MO2 and place them in the left panel under the most appropriate separator. You can learn more about MO2 separators here: [Gamerpoets Video](https://www.youtube.com/watch?v=LwaC7gP7_JM) 
    3. Check your added mods for conflicts with any other mods in the list using xEdit. Then proceed to use any tools that are necessary, like form conversion with the Creation Kit, mesh and texture optimization with Cathedral Assets Optimizer, etc.   

  

Rebuild the bashed patch. Refer to [Lexy’s Guide](https://wiki.nexusmods.com/index.php/User:Darkladylexy/Finish_Page).

  

 F.A.Q.

  

I’d like to use an ENB with my game.

- Refer to the installation instructions that are on the ENB’s page. I recommend anything made for Obsidian Weathers. 
  

  The difficulty is too hard/easy!

- Use the difficulty slider in options, configure Smilodon’s Power. 
  

  The dungeons are too dark!

- What dungeons realistically, aren’t dark? Hold “E” to turn on your lantern. 
  
  
  
  
  
  

Credits & Thanks

- DarkLadyLexy for instructions on Distant Land, LOOT, Merging, and the Finishing Line. 
- Halgari 
- For creating [Wabbajack](https://github.com/halgari/wabbajack) 
- [Halgari’s Patreon](https://www.patreon.com/user?u=11907933) 
- Wabbajack Discord Mod Dev and Tester Team 
  

Contributors

- Total for helping me pick out landscape textures, and Realm of Lorkhan assistance 
- JustThatKing for assisting with conflicts 
- Lively for assistance, convincing me to do this, and join the Tester team 
- DinDisco for assisting in conflict resolution 
- Halgari for being patient with me and assisting in modlist creation 
- All of the above for testing, providing feedback, and assisting with this guide. 
- Mod Authors: Do not forget to endorse! 

   
