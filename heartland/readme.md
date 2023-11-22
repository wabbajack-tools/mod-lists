![](https://i.imgur.com/93qV1ix.png)

### Documentation and Instructions for Installer Version 2.2.6, Wabbajack 2.5.2.2+

**NOTE**: Welcome! Before we get started, a note: if you encounter issues with your installation, checkout [the Troubleshooting section](https://github.com/wabbajack-tools/mod-lists/blob/master/heartland/readme.md#troubleshooting).

## Mandatory Instructions

#### Prerequisites:
*   A **vanilla copy of Oblivion** in the **English language** with at least the Knights of the Nine and Shivering Isles DLCs, **obtained from Steam or GOG**, and **installed outside of C:\Program Files.**
*   **Default Oblivion configuration files**. To generate them, first ensure that the Documents/MyGames/Oblivion folder has been wiped, then **launch the game once in vanilla**.
*   **50GB of hard drive space** (not including Oblivion).
*   A Nexus Premium account, or a lot of time to download the mods manually!

### Using the Wabbajack Autoinstaller

1. **Download** the latest version of Wabbajack from the [Wabbajack Github](https://github.com/wabbajack-tools/wabbajack/releases/latest), and **place the Wabbajack.exe** file to a new directory called **Wabbajack**, as close to the root of your drive as possible (e.g. `C:\Wabbajack` or `C:\Modding\Wabbajack`).
2. **Create a new folder** for the modlist installation, and call it **Heartland**, placing it close to the root of your drive once again, but not within the Wabbajack folder (e.g. `C:\Heartland` or `C:\Modding\Heartland`).
Ensure you have at least 50GB of hard drive space.
3. **Launch Wabbajack.exe** from within the Wabbajack folder. Select the **Heartland** modlist, and then hit **Download and Install** to download the modlist file. Alternatively, the modlist can be downloaded manually from this page. If installing manually, place the modlist file in the Wabbajack directory, and select **Install from Disk**.
4. Under Installation Location, **select the Heartland folder** you created in step 2.
If Wabbajack hasn't done so already, set the Download Location to Heartland\downloads (e.g. `C:\Heartland\download` or `C:\Modding\Heartland\downloads`).
5. Click **Begin**.
6. Wabbajack will open a browser and ask for Nexus authorisation. Log in and then hit **Authorise.** (_If you get an error on authorisation, download and install [.Net Framework 4.8](https://dotnet.microsoft.com/download/dotnet-framework/net48) and run the installer again_)
7. Wabbajack will now download and install the mods specified in the installer. The download size is approximately 18GB so this may take a little while. The installer should keep you informed of progress.
8. After the **installation complete** message appears, close the installer.

### Game Folder Files

Within the Heartland folder, copy the contents of the **Game Folder Files** folder to your root Oblivion directory (e.g. C:\Steam\steamapps\common\Oblivion).

### Running Better Oblivion Sorting Software (BOSS) with User Rules

1. Run **ModOrganizer.exe** in the Heartland MO2 folder.
3. Select **BOSS GUI** from the **executable dropdown** in MO2 and hit **Run**. The BOSS GUI will appear over the top of MO2. Hit **Run BOSS** without changing any of the settings. It will now take some time to download the latest masterlist, if it hasn't done so already. (This occasionally fails - if this happens, first ensure 'Update Masterlist' is ticked, then try running BOSS again. Eventually, you should receive the masterlist. When you are successful, untick 'Update Masterlist'.). After the masterlist is obtained, BOSS will sort your plugins and output an HTML log when completed.
4. Download the **userlist.txt** file from [here](https://drive.google.com/open?id=1YMnIIi1illJe7TeQdkRvX64FbfzmsiwU), cut to  **tools/BOSS/bin/Release-64/oblivion** and overwrite any existing file there.
5. Repeat step 3, using BOSS to sort your load order with the newly applied user rules.

### Special Installation Steps

##### _Steam and Retail Users_

Only applicable if you have a Steam or retail copy of Oblivion. GOG users can skip this step.

* Within the Heartland MO2 folder, go to **tools/Oblivion RAM Optimization** and run **4gb patch.exe**.
* Target both the **Oblivion.exe** and **OblivionLauncher.exe** executables in your root Oblivion directory. Both executables will now have been patched to improve the memory that can be allocated to their processes.

##### _Standard GOTY Users_

Only applicable if you purchased the standard GOTY version of Oblivion. (if this is the case, you have the Knights of the Nine and Shivering Isles expansions, but not the house plugins or Horse Armor).

* Disable the following mods in the left pane:
1. **Unofficial Oblivion DLC Patches**
2. **Book Jackets for Misc. DLC**
3. **Interior Draw Distance ENB Fog Fix**
4. **Snowy Road to Bruma DLC Frostcrag Patch**
5. **Harvest [Flora] - DLCFrostcrag.esp**
6. **Harvest [Flora] - DLCVileLair.esp**
7. **Interior Draw Distance ENB Fog Fix**
8. **Grimbot's Spell Tomes Jackets**

##### _Ultrawide Users_

Only applicable for use with a monitor that has greater than a 16:9 aspect ratio.

* Open the **INI Editor in MO2** (jigsaw/puzzle icon on the top bar).
* Under **[Display]**, change **iSizeW** and **iSizeH** to match your resolution. For example, for 1440p, iSizeW=3440 and iSizeH=1440.
* Download the **Ultra Widescreen Fix for Heartland** from [here](https://drive.google.com/open?id=1dnWbrmT_zcIESIqmLWMVSzHaEdQgkCs8) and install through MO2, placing it in the **Install Specific Tweaks** section.
* Download the **Black Rectangle Ultrawide Fix** from [here](https://www.nexusmods.com/oblivion/mods/48351), and install through MO2, placing it in the **Install Specific Tweaks** section.

### Creating a Wrye Bash Bashed Patch

1. Select **Wrye Bash** from the in MO2 and hit **Run**. If prompted for a game choice, select **Oblivion**.
2. Within the Wrye Bash interface, right click the plugin right at the bottom (**Bashed Patch 0.esp**) and click **Rebuild Patch**.
3. In the following interface, make sure that the following options are enabled for the best experience (courtesy of Mexxy):
    * **Tweak Assorted -> DarNify Books** ticked so books look as intended
    * **Tweak Settings -> Arrow Speed is x2.0** for more responsive archery (right click box to change)
    * **Tweak Actors -> Irresponsible Creatures** ticked
    * **Tweak Settings -> Crime: Alarm Distance at 2000** to reduce guard crime intuition range (right click to change)
    * **Tweak Settings -> Actor: Greeting Distance at 100** for less NPC chatter (right click to change)
    * **Tweak Settings -> Warning: Exterior Distance to Hostiles at 2000** for reduced combat distance outdoors (right click to change)
4. When asked about mods to be de-activated and incorporated into the patch, simply **press OK**.
5. Hit **Build Patch**. This will take a few minutes, and produce a popup log when complete. Close Wrye Bash.
6. Back in MO2, right click the **Overwrite** panel at the bottom of the mods pane and select **Create mod**. Call it **Bashed Patch**, place it in the **Install Specific Tweaks** section, and ensure it is enabled after installation.

### Running the Game
1. If you use Steam, ensure it is running.
1. To play the game, select **Oblivion** in the MO2 **executable dropdown** and hit **Run.**
3. After playing and closing the game, create a new empty mod called OBSE Logs (Use the '...' button at the top of the left MO2 pane, then select 'Create empty mod'. Next, click on the **Overwrite** panel at the bottom of the mods pane and drag and drop the OBSE log files into the empty OBSE Logs mod. This ensures any logs generated on successive plays will be stored here and will not produce a warning.
4. You're ready to go! Check the optional steps below if you would like to further enhance your experience.

## Optional Post Installation Instructions

### Heartland Optionals

This list includes several optional configurations pre-installed, which can be swapped in and out as desired. Each configuration is denoted by an MO2 mod separator, which includes step-by-step instructions on how to enable the optional mods. To view, simply right click the seperator select Information, then select the Notes tab. You will be presented with instructions like below:

![](https://i.imgur.com/cScNH0o.png)

#### _Weather and Interiors: All Natural and Immersive Interiors_

This optional configuration disables Natural and Atmospheric Oblivion, in favour of All Natural and Immersive Interiors.

All Natural is an older weather mod with weather effects that are now dated (in my opinion) in comparison to Natural and Atmospheric Oblivion. However, All Natural provides several innovative features which cannot be found in NAO - notably Real Lights, which ensures light is actually centred on light sources, and support for Immersive Interiors, which allows the player to see the outside world from within interiors. The latter effect really draws you into the game world and makes each interior feel properly situated
within its exterior environment.

Please note that there are minor issues with foggy weather and nights being brighter than desired. This is an experimental configuration and is being actively improved.

![](https://i.imgur.com/0hZMm9s.jpg)

#### _User Interface: DarNified UI_

This optional configuration disables NorthernUI in favour of DarNified UI.

DarNified UI is a more traditional take on a UI overhaul for Oblivion. All manner of menus have been improved, including the journal, inventory, map, wait/sleep screens, level up screens and more. Unlike NorthernUI though, these changes preserve the vanilla style - perfect for players who want a lighter brush stroke to improve the user interface.

Also included in this configuration is a compatible loading screens replacer, but instructions are available to switch to vanilla loading screens for those that prefer them.

![](https://i.imgur.com/Q1PjkZC.png)

#### _Music: GOSH, Oblivion Symphonic Variations Suite, Silent Tracks Expanded_

This optional configuration overhauls sound and music in Oblivion with new sound effects and music tracks. Additionally, silent music tracks have been added to provide randomised pauses between music tracks so that the player is not oversaturarated during gameplay.

This won't be to everyone's tastes (particularly the pauses), but I encourage you to give it a try as you may just prefer it!

### Mod Suggestions, Gameplay Profiles, and Installing Additional Mods

The base Heartland modlist overhauls visuals and stability, leaving the gameplay systems (questing, levelling, level scaling, combat) in a vanilla state. Given this, you may want to consider adding additional mods to enhance Oblivion's gameplay. Below are some general steps to follow in order to add mods on top of the list. Please note though, we cannot provide support for list modifications, so you are more than welcome to play around, but do so at your own risk!

#### General Steps

1. **Download the mods you wish to add.** Make sure to read the documentation to ensure that they do not have any compatibility issues with any of the mods already included in the Heartland list. If on Nexus, use ‘mod manager download’ where possible with MO2 open to have the archive appear directly in your MO2/download folder. If only manual download is available, cut and paste the archive to the downloads folder.
2. **Install the mods in MO2** by double clicking the archive in the Downloads tab of the plugins pane. Click the **manual installation** option and verify that the structure is as it should be (you can tell from the green ‘Looks good’ text). If it is not, right click and set the data directory on the folders as appropriate. Remember to checkmark the mod in the mods pane after it has been installed.
3. Select **BOSS** from the executable dropdown in MO2 and hit **Run**. The BOSS GUI will appear over the top of MO2. Hit **Run BOSS**. It will sort your plugins and output an HTML log when completed. Close BOSS. Back in MO2, the ESPs from your new mod(s) will now be in their correct load order positions in the plugins pane.
4. In the mods pane, find the **Bashed Patch** mod for your currently enabled profile and **remove it**.
5. Ensure that there are **no files in your MO2/overwrite folder** (move any OBSE logs that may be there to the OBSE Logs mod).
6. Select **Wrye Bash** from the in MO2 and hit **Run**. If prompted for a game choice, select **Oblivion**.
7. Within the Wrye Bash interface, right click the plugin right at the bottom (**Bashed Patch 0.esp**) and click **Rebuild Patch**.
8. In the following interface, make sure that the following options are ticked (they should have carried over from before):
    * **Tweak Assorted -> DarNify Books** ticked so books look as intended
    * **Tweak Settings -> Arrow Speed is x2.0** for more responsive archery (right click box to change)
    * **Tweak Actors -> Irresponsible Creatures** ticked
    * **Tweak Settings -> Crime: Alarm Distance at 2000** to reduce guard crime intuition range (right click to change)
    * **Tweak Settings -> Greeting Distance at 100** for less NPC chatter (right click to change)
    * **Tweak Settings -> Warning: Exterior Distance to Hostiles at 2000** for reduced combat distance outdoors (right click to change)
9. Then hit **Build Patch**. This will take a few minutes, and produce a popup log when complete. Close Wrye Bash.
10. Back in MO2, right click the **Overwrite** panel at the bottom of the mods pane and select **Create mod**. Call it **Bashed Patch**, and ensure it is enabled after installation.
11. Done! Run the game as usual by selecting and running Oblivion from the dropdown menu.

### Setting Core Affinity to improve performance (courtesy of Aerialvas)

**NOTE: Depending on your CPU architecture, this may cause more performance problems than it solves.** If you wish to give it a try, it is worth measuring FPS and testing stability both before and after making these changes to determine if you will obtain a benefit.

Oblivion is only designed to run on the first two cores of a PC, but by default, the operating system will attempt to use all cores. By manually setting Oblivion to use just the first two cores, you can achieve a significant performance boost in game.

1. Download and install the **Process Lasso** tool from [https://bitsum.com](https://bitsum.com). Note that if you don’t select it to start at startup, ensure that the tool is running prior to playing Oblivion.
2. In MO2, select the **INI Editor** on the top bar. In the **[General]** section, paste in this line: **iNumHWThreads = 2**.
3. Launch Oblivion with MO2, after following the mandatory installation steps above.
4. ALT-Tab to Process Lasso and right-click the Oblivion.exe process. Choose **CPU Affinity -> Always -> Select CPU affinity**, and then **tick only CPU 0 and CPU 1**.
5. Restart Oblivion!

![](https://i.imgur.com/eAxxcKs.png)

### Decompressing Vanilla Game BSAs
Courtesy of Zilav:

_"Back when Oblivion was released in 2006 for old generation consoles the overall size occupied by the game mattered so vanilla BSA archives use zlib compression to reduce overall assets size on the disk. However assets need to be decompressed by the game on the go which takes extra time leading to longer loading times and additional stutter when moving in exterior worldspaces while cells being loaded in background._

_BSA Decompressor recreates BSA archives without zlib compression so the game is limited only by your hardware disk system performance. All vanilla assets remain in uncompressed BSA archives."_

1. In MO2, find the **Unofficial Shivering Isles Patch** in the mods pane, and right click **Open in Explorer**. Cut **DLCShiveringIsles - Faces.bsa** to the Data folder in your Oblivion game directory.
2. Close MO2 and go to Heartland/tools/Oblivion BSA Decompressor. **Run Oblivion BSA Decompressor.exe**.
3. Select **Decompress**, then close the tool once it has finished. Your vanilla BSA files will now be decompressed.
4. Cut **DLCShiveringIsles - Faces.bsa** back to Heartland/mods/Unofficial Shivering Isles Patch.

![](https://i.imgur.com/Nhfq9jN.png)

## Extra Notes

*   Due to the way MO2 loads Oblivion and OBSE, the Steam overlay and screenshot functionality cannot be used. Use F11 to take screenshots using Oblivion Reloaded.

## Troubleshooting

1. _Wabbajack says download X failed, what now?_
   - Depending on the files, download them from the following instructions and place the downloaded files in Heartland\downloads.
   - _Unable to download **HackdirtAliveFix.zip**_
     - Download the file from https://drive.google.com/file/d/1koW6d7doH3gZzio2Xgy38LH8Et97oSNu/view.
   - _Unable to download **VKVII_Oblivion_Cyrodiil_Map.7z**_
     - Download the file from https://www.moddb.com/downloads/start/218291.
   - Any other files, restart Wabbajack (or your PC) and try installing the modlist again.
   - If it still fails, check in with the [Heartland Modlist Support] server.
2. _I receive a blank / black screen on start up._
    * Replace the Oblivion.ini file in Documents/MyGames/Oblivion and [MO2 Install]/profiles/Heartland with [this version](https://drive.google.com/file/d/1nby-4x-eFlEC4nvIlERilWVstzHztRck/view?usp=sharing).
3. _I can’t run the Oblivion executable from MO2 - I get an application error._
    * If you bought the game through Steam, it needs to be running in the background for you to play the game. Boot up Steam and give it another try.
4. _When I run Oblivion, a new window opens and I can hear the main menu audio, but all I get is a blank/black screen._
   * MO2 is failing to load the OBSE libraries when running Oblivion leading to issues with the mods installed. To correct, click the executable dropdown in MO2, select Edit, and then check the Oblivion.exe entry. Ensure that Force Load Libraries is ticked, and click Configure Libraries. Ensure that Oblivion.exe is set to load the library obse_1_2_416.dll in your Oblivion game directory.
5. _Following the above instructions, there is no obse_1_2_416.dll._
   * Make sure you have copied the contents of Game Folder Files to your Oblivion game directory. The OBSE files should be present in this folder.

## Credits

* **Bevilex** for their fantastic visual overhaul and guide
* **Halgari** for the innovative Wabbajack tool
* **Foxman** for this handy readme template and their help with testing
* **Aerialvas**, **Peria**, and **Mr.Vanato** for their useful optimisation tips and troubleshooting assistance in the heartland-support channel
* **jdsmith2816** for their help integrating the OUT and SIUT mods in to the installer, and their optimisation of vanilla meshes and textures
* All the testers and users who have taken time to provide feedback: **Seear**, **Aronax**, **epixxor**, **Duriel**, **Foxman**, **Aerialvas**, **Peria**, **ShadowFyre**, **Mr.Vanato**, **Nazo**, **Stormline**, **MrG**, **carl**, **KatieLW19**,  **KarmasLives22**, **ELDYLO**, **Severance**, **Zierry**, **Gatonegro**, **Bartun**, **b e e g y o s h i**, **Epic**, **NaterOfTheWired** and more!

[Heartland Modlist Support]: https://discord.gg/xQmzNASbz5
