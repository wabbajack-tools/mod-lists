## Introduction

NOISE is a light Modlist designed to be built upon by users, with enhanced graphics, mechanics, and immersion, while staying true to the original vision of Skyrim mechanics; basically, Skyrim ++.

This Modlist has high compatibility with modded player homes, quests, etc.

While Lexy’s LotD is fully featured, patched and smashed (and the best Modlist ever), there is little room to add your own mods without in-depth conflict resolution.

This Modlist allows for you to add what mods you would like (within reason), as long as you take the time to understand how modding works.

**REQUIRES NEXUSMODS.COM PREMIUM ACCOUNT**

## Getting Started

This process requires `88`GB of hard drive space and takes a few hours depending on your internet and computer speed. Installing on an SSD is recommended.

Download `Wabbajack.exe`. This can be found in the [#builds](https://discord.gg/AzS3dw2) channel in the [Wabbajack discord](https://discord.gg/AzS3dw2).

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
4. In the menu that appears, click the Ultra button
5. Set the Aspect Ratio 
6. Set the Resolution 
7. Set Antialiasing to Off
8. Make sure Windowed Mode is unchecked
9. Make sure Borderless is unchecked
10. OK to save the settings
11. Close the launcher window

**END IGNORE**

## Installation

Create a new directory in the root directory of the hard drive where you want NOISE to be installed. Do not create a directory within your Skyrim folder. For this guide, we will create an example directory in `C:\` called `NOISE`. You can create this folder on any drive.

Open Wabbajack. From here, you have two options:

1. Select the NOISE modlist from the Wabbajack UI.
2. Manual Installation: Download the `.wabbajack` file from the release channel on the Wabbajack Discord.
  
If you have opted for a manual installation, click `Install a Modlist` at the bottom of the window. Navigate to `C:\NOISE` and select `Nice Overall Improvement SE.wabbajack` and click `Open`.

At the bottom of the new window, the Installation Location will be the folder you created in the root directory of your hard drive. The Download Location will be auto-filled for you by Wabbajack after selecting install location. If you are creating these on your `C:\` drive, please type in `C:\NOISE` in Installation Location and `C:\NOISE\Downloads` in the Download Location. After you have completed these steps, click Begin.

A window will open in your browser asking if you’d like to authorize Wabbajack to use your Nexus Mods account. Click authorize. 

Once Wabbajack has finished all of its processes, it will say _Installation complete! You may exit the program._

If you don’t see _Installation complete_, Wabbajack has encountered an error. To make sure that an error does not happen again, refer to the Old Files Cleanup section and delete the listed folders again. Inside of the NOISE folder, delete everything except the downloads folder or Wabbajack.exe and the modlist file.

If you get an error immediately after authorizing Wabbajack on the Nexus website, download and install the [.Net Framework 4.8 Runtime](https://dotnet.microsoft.com/download/dotnet-framework/net48) executable. Restart your computer and start Wabbajack again.

If Wabbajack fails to download a mod, it means that the mod may have been updated on the Nexus. Wait for a new release of my Modlist. Look around in the release channel to see if I already mentioned that I'm going to update for this specific mod.

**Do not ask other people to share older files as this is a violation of the Nexus Terms of Service and Wabbajack’s server rules. This constitutes mod piracy and will result in an immediate ban.**

Expanding on server rules, **do NOT** contact outside authors such as DarkLadyLexy or Belmont Boy outside of the Wabbajack Discord for help with your Wabbajack installation.

## Installation Part 2

Now we have to copy files over into their correct spots. Navigate to `C:\NOISE\Game Folder Files\`. Copy all of these files and paste them into `C:\steamapps\common\Skyrim Special Edition\`

### BETHINI CONFIG

**You always need to close Mod Organizer 2 before launching BethIN**I

Bethini is located in `C:\NOISE\tools\BethINI`.

Click on Bethini.exe.

You will be prompted with a window asking you to choose your game.

Select Skyrim Special Edition from the drop-down menu.

Once the BethINI window has come up, go to the first tab - Setup.

Double-check that Game Path and INI Path point to the correct locations. If you need to change these, BethINI will restart.   

![](https://lh6.googleusercontent.com/6-kB7E7T0c04s1ffnoLpHkJ92r7YCejqzHav-FeBXLLU7KVzvxYuI6J8-l6g_c38mW3Yadv2u5HovtZN034yhnQ5IrI-oXL5VLF_QoWWlD4X14aI0mHWcE7j34TmA6A9ycC2j4qd)

#### Basic

BethINI Presets are toggled by default, but we’ll also select Recommended Tweaks.

Double-check whether Resolution is set to the correct value.

For high-end PC owners I would recommend the High option and everyone else might want to select Medium. If your PC is already struggling with vanilla Skyrim go for the Low option.

Disable both VSYNC and Lock Frame Rate. Havok fix caps the frame rate for us.

Set Antialiasing to NONE and disable FXAA if you don't like how FXAA blurs the screenspace. TAA is terrible in SE.

Follow the steps for Nvidia Profile Inspector on [Lexy's Guide](https://wiki.nexusmods.com/index.php/User:Darkladylexy/Lexys_LOTD_SE) for antialiasing using your GPU driver.

![](https://lh5.googleusercontent.com/R8P2C-BxTpjxd9LeDDCQttxHLmnp-4YQgl2FqvNHwKrts29dwxCvBXzrBt6up0FtZOaBPDsJSfPhUr2P-hJgJO_c3VAVnVqCo-XvElCpov-PyOyu6JBLx_uoyq5lxmtCjYnm4hpm)

#### General

Disable Intro Logos.

![](https://lh4.googleusercontent.com/6DQkEiEc_UGpzgHEpX_AUnc9PI7YpPVVK0PRG04_ZGCmQTWNpVOBLZ2r063NTlHcFTQ8YgIWBxnkwrTShryIDabVsi8gKjUvK9L5ItwoFYmMEPtx-Fp2piWc_XFHRPOLTluB3F1q)

#### Interface

I prefer my Lock Sensitivity to be high. Set this to what you need.

Dialogue Subtitles and General Subtitles are unchecked by default, toggle them on if you want them.\
You can still always toggle them in game.

![](https://lh5.googleusercontent.com/LsOUZXJVhF8rYRL0vbNzeKHRxgy6_Tfh4RiWI4oghO_eXdi1p_BRM8KE9HqVi_REaO6AFL31zXB8Cxc1FUP_mtren6OOB0jpU0RKg0iR2IIM1e6XIvgOYD8d7fXpKvFBpOp2Oy0k)

#### Detail

Continue with the sixth tab, Detail.

Godrays: Use your personal preference, although they have a large FPS hit.

Field of View: Increase this if you prefer a wider FoV.

Lens Flare: Matter of taste.

Anamorphic Lens Flare: Disabled

Ambient Occlusion: FULL (unless using ENB, then disable)

Shadow Bias: set to 0.47 (fixes ugly pyramid-shapes in snowy regions)

Improved Snow Shader: Disable

Note: Depth of field here is NOT the DOF slider in game. This is the option for blurred viewspaces underwater.\

![](https://lh6.googleusercontent.com/K3py_rUflisV9c6Z5KJRhGL1cy24rlDHd2veNaeyhtqr8CGtfMLfjkd7UqiE9Jm7H_ZHJupQFw6kwsCZUj0aXXyR9s2gm5Sx7UakF1t9dA3uW53OqwHsFp-4siJZfZUQ0Mr2sX1a)

#### View Distance

Grass Fade: 15000 — or higher
![](https://lh4.googleusercontent.com/MI9NQ0AwzLJhn_pwep2zVVg6XLmF4g_r6seXfyptiLZrg6cgE56-QkOEA8vKwu9GQbQyQDUid_WBeVha5GQR0g5EQUoW2uEXnSPtfJCbRKM1djfV4-vb-XnjpaUI3mNKVS83pZmh)

#### Go to the Custom tab

Select the following: `Section: Select Display`

Setting: Select `fGlobalContrastBoost`.

Change the value to `-0.1800`.

![](https://lh3.googleusercontent.com/iwdyzmWoe5pkXmv2cGnSzaYcHXRMtJFuiYsT8_Qj7YMePk1FtqPhih4kKWRRDKwhk8CrQF5aQzo-XiNCGy8Pm50zyo2ixpEyNymuJw9aGD2gqxC_kLq2Veq2v5MMM_up_TSDVT9n)

Click Save.

#### Section: General

Setting: Select `bModManagerMenuEnabled`

Change the value to `0`.

Click Save.

This will disable the MODS entry in the in-game pause menu.

![](https://lh6.googleusercontent.com/4id7PvrNiQ7e8JeKNAF6fyPOfPxntUGvpTi3RWX4_RGKe4PurKwesz72WLpTwSXivCnULW8V7LpRpTizXD2EE0YGb_EkVddofaiVAkpHyZAdsW-yz_RDzomdhIQA0rp2Rz3LFS4Q)

Return to the second tab, Basic, and click Save and Exit.

### Opening Mod Organizer 2

Navigate to `C:\NOISE\` and open `ModOrganizer.exe`

If it asks you to associate Mod Organizer 2 with nxm links, click yes.

### Launching The Game

In Mod Organizer 2, select SKSE from the drop down menu next to the Run button and click Run. This is how you will launch Skyrim from now on.

## Configuring MCM

After starting a new game, you will spawn in the LAL cell. You’ll find a key to the shelves on a table, with basic loadout necessities. When you’re ready, set up MCM settings and make a save before talking to the statue of Mara.

### Follower Framework

- Only Sandbox in Town: X
- Mounts: Riding Support Only

![](https://lh3.googleusercontent.com/hVYuqO09tA5s7I8EIgHf_RDUv1tpMYV4N9_qow_ieAKwXBQQ_Ihr28VxdD_kVyyaK3XObZsTWmbo4UgpMfCY9mGpUeG8GJrY4YnwnSJcImxjqUaVbyKAhi1c_-ea2HvHNPxY9K61)

### Immersive Horses

- Standing Activation Action: Ride

- Sneaking Activation Action: Open Inventory

- Mounted Activation Action: Dismount

- Disable Trample Effect

![](https://lh4.googleusercontent.com/XmE-NT7N-ts_KlORdMBCCgkZGZEiwIkL5116jMb_sXuHuinH83rVorbJsdatFgnjiETb2PyLFKTJyVxA9s7xeMr1cl5Q8lidV6ONTKaM-3BLRdVuKCejo3Zg345MNEn8a7MShgtL)

### Immersive HUD

- Activation: Keypress toggles: X

![](https://lh4.googleusercontent.com/8W7ybP7pmrDgqe0YuKOoRA8SKPK7GaNhLy71WktKSM6L6E9qA2zmmRE7MNT6nzHk9rc6Wzv6XNMRAt2j7FYozS0D2ciZZZYoNOMCgQuPxU5dMknvREtfs4ZdHISWBj9HvSGLIHf_)

![](https://lh6.googleusercontent.com/c1nrncz2sr5aPF1XXAdabkTXN1w1cprgvWLIG6Xj2MqvsDgOczQFbV3aR4mGVd-TfGLQptdK2umRRLju0SqeMKDO3aOKLLMLIBVfpr6892Ih2khFGwCgJCvR6lQIzcZ5EzvZLRf9)


### SKYUI

- Advanced: Disable all SWF Version Checking

![](https://lh4.googleusercontent.com/cnNz-Akn159pVE6nVvpEnUqVgYYARS3ojQ71fLXvx4T5ENQEac3161OCsZIRH-hB-nacGAE1AyFAJszsB-nelzs6ZLKEaGE9BA7wDHb2etDEMQgVqm2bp0nZBLE9b7UuuMffAg4V)

### Violens

- Player Killmove Immunity: Enabled

Keep Advancing Killmoves to OFF. This can cause your character to become stuck in the terrain/walls/etc.

![](https://lh6.googleusercontent.com/xBKdbc2s--NuHnNeZqGc4Sp7XD_Z1WEOsPJfzDqEZcwV50K5AsFYYUb31lnRdfmNp5b1I-zwhEqY3wJJmElNb2o4lOVUMEgYFDi4S_htwIC5GdF0dWbITBPG6YjWxjHtHTzFDM6c)

### Thieves Guild Requirements

Items Stolen: 100

Radiant jobs completed: 6, 15

![](https://lh3.googleusercontent.com/cXXP_ldRkyiY0e-f-0datOI4yqLYx6IHeeVmG8wBn_K9bv0zAUdQsNsAvuSZzVOGTh_zlsku5e4kEbSVpPbEEH4-4mf-P1ACIHuW-YshzOQ_k_RNEqdVvmP2x5qKrC99Wa7nMQA6)

### Realistic Water 2 Settings

  Kynesgrove X

  Rorikstead X
![](https://lh6.googleusercontent.com/EI4vWlofS-4ifOlFPShvYi-Pld7qnN5QY9mZNicDWXUjt3Q8923_tA-DkuWrIgVMBsTNxMPSFdSCgMzJIJVy4XZvMsnzuy3PypL8aJ_AtwVDASVdmOOjInwpJg7XpaQeJBnkve73)

All other MCM settings can be configured as you like, or depending on extra mods you’ve installed.

**Smilodon’s and Obsidian Weathers configurations are powers. Set to your playstyle/preference.**

#### Resources

To learn more about Mod Organizer 2, please [watch this video](https://www.youtube.com/watch?v=LwaC7gP7_JM).

To install Distant Land, refer to [Lexy’s guide](https://wiki.nexusmods.com/index.php/User:Darkladylexy/Finish_Page), or for a more visual approach, [here](https://thephoenixflavour.com/guide/visuals/step-14/) (use Lexy’s for xLODGEN), or watch GamerPoets video on DynDOLOD.

All tools you install will be placed in `C:\NOISE\tools`. Then set them up as executables through MO2.

[https://forum.step-project.com/topic/13451-xlodgen-terrain-lod-beta-for-fnv-fo3-fo4-fo4vr-tes5-sse-tes5vr-enderal/](https://forum.step-project.com/topic/13451-xlodgen-terrain-lod-beta-for-fnv-fo3-fo4-fo4vr-tes5-sse-tes5vr-enderal/)

[https://forum.step-project.com/topic/13894-dyndolod-beta-for-skyrim-special-edition-and-skyrim-vr-274/](https://forum.step-project.com/topic/13894-dyndolod-beta-for-skyrim-special-edition-and-skyrim-vr-274/)

#### More resources and learning:

[How to Mod Skyrim SE](https://www.youtube.com/playlist?list=PLlN8weLk86XgJIZXTEPEcU1b6dzA_eJSB)

[MO2](https://www.youtube.com/watch?v=ruq6hQIAvB8&list=PLlN8weLk86Xh3ue76x2ibqtmMramwQmHB)

[Wrye Bash](https://www.youtube.com/watch?v=uYAEFk5QmLQ&list=PLlN8weLk86Xjiymt7aBPWD2epUftR7wss)

[Mator Smash](https://www.youtube.com/watch?v=2e-0mc8wmDs)

[xEdit](https://www.youtube.com/watch?v=wA5IlESvtCM&list=PLlN8weLk86XiGXJI4DaRa1QIq1zhDpD8V)

#### Adding an ENB:

1. If you want to add an ENB you need d3d11.dll and d3dcompiler_46e.dll files from ENBSeries located [here](http://enbdev.com/mod_tesskyrimse_v0390.htm) and place them in your Steam Skyrim folder, and any other files that the ENB you want says to download.

#### Adding ReShade:

- [ReShade Guide](https://www.youtube.com/watch?v=-jQ7OJy0818)
- [Text Guide](https://reshade.me/forum/troubleshooting/5227)

#### Adding mods:
1.  When adding mods it is important to be able to use modding tools.
2.  Tools commonly used include xEdit, zEdit, Wrye Bash, DynDOLOD, xLODGEN, Mator Smash, Merge Plugins Hide, and TexGen.  
3.  Add your mods into MO2 and place them in the left panel under the most appropriate separator. You can learn more about MO2 separators here:[Gamerpoets Video](https://www.youtube.com/watch?v=LwaC7gP7_JM)
4.  Check your mods for conflicts with any other mods in the list using xEdit. 

Then proceed to use any tools that are necessary, converting the form id by resaving plugins in the Creation Kit, or optimizing meshes and textures with [CAO](https://www.nexusmods.com/skyrimspecialedition/mods/23316). (These are necessary for converting oldrim mods to work with SE)

Rebuild the bashed and smashed patches. Refer to [Lexy’s Guide](https://wiki.nexusmods.com/index.php/User:Darkladylexy/Finish_Page).

## F.A.Q.

I’d like to use an ENB with my game.

- Refer to the installation instructions that are on the ENB’s page. I recommend anything made for Obsidian Weathers.
  
  The difficulty is too hard/easy!

- Use the difficulty slider in options, configure Smilodon’s Power.
  
  The dungeons are too dark!

- What dungeons realistically, aren’t dark? Hold “E” to turn on your lantern.
  
## Credits & Thanks

- DarkLadyLexy for instructions on Distant Land, LOOT, Merging, and the Finishing Line.
- Halgari
- For creating [Wabbajack](https://github.com/halgari/wabbajack)
- [Halgari’s Patreon](https://www.patreon.com/user?u=11907933)
- Wabbajack Discord Mods, Devs, and Tester Team
- Phoenix for The Phoenix Flavor guide, for the Bethini section and a guide on DynDOLOD.
    <https://thephoenixflavour.com/>
  
### Contributors

- Total for helping me pick out landscape textures, and assisting me with xEdit
- JustThatKing for assisting with conflicts
- Lively for assistance, convincing me to do this, and also convincing me to join the Tester team
- DinDisco for assisting in conflict resolution
- Nathan for solving texture seam issues
- Halgari for being patient with me and assisting in modlist creation
- Skyrim prep and install instructions guidelines from Mdc211's guide
- All of the above for testing, providing feedback, and assisting with this guide.
- Mod Authors: Do not forget to endorse!
