### Documentation and Instructions for Installer Version 2.2.1, Wabbajack 2.5.2.2+

**NOTE**: As with all Wabbajack installers, a Nexus premium account is required in order to use the premium API for downloads. Additionally, since this is an unofficial attempt to automate the Bevilex guide, PLEASE only direct support queries to the unofficial bevilex modlist development channel in the [Wabbajack discord](https://discord.gg/WnyMdj). To view the channel, go to **#welcome** and follow the instructions, selecting Oblivion as a game choice.

Before we get started, there is just a couple of things to note:

*   A number of files used in the guide are uploaded on sites which Wabbajack cannot currently access (e.g. due to registration walls). I have opted not to include these mods as I do not have the right to re-upload them. However, if you wish to install them, instructions are provided in the optional section of this document to download and add them manually yourself.
*   This is not a one click installation - there are some minor post installation steps that must be followed in order for your modded setup to work. If you follow all the instructions here, you will be set.

## Mandatory Instructions

#### Prerequisites:
*   A **vanilla copy of Oblivion**, with at least the Knights of the Nine and Shivering Isles DLCs, **installed outside of C:\Program Files.** The guide has been tested so far with the Steam version, but GOG and retail versions should be supported. Ensure the Documents/MyGames/Oblivion folder has been wiped, then **launch the game once in vanilla** to generate a fresh INI. Backup any save games you with to keep.
*   Ensure that any MO2 installations on your system are configured in ‘portable’ mode.
*   **51GB of hard drive space** (not including Oblivion), reduced to 33GB if the MO2/downloads folder is deleted after installation.
*   A Nexus Premium account

### Using the Wabbajack Autoinstaller

1. **Download** the latest version of Wabbajack from the [Wabbajack Github](https://github.com/wabbajack-tools/wabbajack/releases/), and **extract the Wabbajack.exe** file to a new directory called **Wabbajack**, as close to the root of your drive as possible (e.g. C:\Wabbajack).
2. **Create a new folder** for the new installation, and call it **Bevilex** - again place it close to the root of your drive, but not within the Wabbajack folder (this can cause errors). Ensure you have at least 51GB of hard drive space. (Deleting the downloads after installation will reduce the setup size to 33GB).
3. **Launch Wabbajack.exe** from within the Wabbajack folder. Select the **Unofficial Bevilex** modlist, and then hit **Download and Install** to download the modlist file. Alternatively, the modlist can be downloaded manually from this page. If installing manually, place the modlist file in the Wabbajack directory, and select **Install from Disk**.
4. Under Installation Location, **select the Bevilex folder** you created in step 2. Set the Download Location to Bevilex\downloads. Click **Begin**.
5. Wabbajack will open a browser and ask for Nexus authorisation. Log in if necessary and then hit **Authorise.** (_If you get an error on authorisation, download and install [.Net Framework 4.8](https://dotnet.microsoft.com/download/dotnet-framework/net48) and run the installer again_)
6. Wabbajack will now download and install the mods specified in the installer. The download size is approximately 18GB so this may take a little while. The installer should keep you informed of progress.
7. After the **installation complete** message appears, close the installer.

### Running Better Oblivion Sorting Software (BOSS) with User Rules
1. Within the Bevilex folder, copy the contents of the **Game Folder Files** folder to your root Oblivion directory (e.g. C:\Steam\steamapps\common\Oblivion for Steam installs).
2. Run **ModOrganizer.exe** in the Bevilex MO2 folder.
3. Select **BOSS** from the **executable dropdown** in MO2 and hit **Run**. The BOSS GUI will appear over the top of MO2. Hit **Run BOSS** without changing any of the settings. It will now take some time to download the latest masterlist, if it hasn't done so already. (This occasionally fails - if this happens, first ensure 'Update Masterlist' is ticked, then try running BOSS again. Eventually, you should receive the masterlist. When you are successful, untick 'Update Masterlist'.). After the masterlist is obtained, BOSS will sort your plugins and output an HTML log when completed.
4. Download the **userlist.txt** file from [here](https://drive.google.com/open?id=1YMnIIi1illJe7TeQdkRvX64FbfzmsiwU), cut to  **tools/BOSS/bin/Release-64/oblivion** and overwrite any existing file there.
5. Repeat step 3, using BOSS to sort your load order with the newly applied user rules.

### Special Installation Steps

##### _Steam and Retail Users_

Only applicable if you have a Steam or retail copy of Oblivion. GOG users can skip this step.

* Within the Bevilex MO2 folder, go to **tools/Oblivion RAM Optimization** and run **4gb patch.exe**.
* Target both the **Oblivion.exe** and **OblivionLauncher.exe** executables in your root Oblivion directory. Both executables will now have been patched to improve the memory that can be allocated to their processes.

##### _Standard GOTY Users_

Only applicable if you purchased the standard GOTY version of Oblivion. (if this is the case, you have the Knights of the Nine and Shivering Isles expansions, but not the house plugins or Horse Armor).

* Disable the following mods in the left pane:
1. **Unofficial Oblivion DLC Patches**
2. **Book Jackets for Misc. DLC**
3. **Interior Draw Distance ENB Fog Fix**
4. **Snowy Road to Bruma DLC Frostcrag Patch**
5. **Harvest [Flora] - DLCFrostcrag.esp**

##### _Ultra Widescreen Users_

Only applicable if you use a monitor with resolution greater than 1920x1080.

* Open the **INI Editor in MO2** (jigsaw/puzzle icon on the top bar).
* Under **[Display]**, change **iSizeW** and **iSizeH** to match your resolution. For example, for 1440p, iSizeW=3440 and iSizeH=1440.
* Download the **Ultra Widescreen Fix for Bevilex** from [here](https://drive.google.com/open?id=1dnWbrmT_zcIESIqmLWMVSzHaEdQgkCs8) and install through MO2, placing it in the **Install Specific Tweaks** section.
* Download the **Black Rectangle Ultrawide Fix** from [here](https://www.nexusmods.com/oblivion/mods/48351), and install through MO2, placing it in the **Install Specific Tweaks** section.

### Creating a Wrye Bash Bashed Patch

1. Select **Wrye Bash** from the in MO2 and hit **Run**. If prompted for a game choice, select **Oblivion**.
2. Within the Wrye Bash interface, right click the plugin right at the bottom (**Bashed Patch 0.esp**) and click **Rebuild Patch**.
3. In the following interface, make sure that the following options are enabled for the best experience (courtesy of Mexxy):
    * **Tweak Assorted -> DarNify Books** ticked so books look as intended
    * **Tweak Settings -> Arrow Speed is x2.0** for more responsive archery (right click box to change)
    * **Tweak Actors -> Irresponsible Creatures** ticked
    * **Tweak Settings -> Crime: Alarm Distance at 2000** to reduce guard crime intuition range (right click to change)
    * **Tweak Settings -> Greeting Distance at 100** for less NPC chatter (right click to change)
    * **Tweak Settings -> Warning: Exterior Distance to Hostiles at 2000** for reduced combat distance outdoors (right click to change)
4. Hit **Build Patch**. This will take a few minutes, and produce a popup log when complete. Close Wrye Bash.
5. Back in MO2, right click the **Overwrite** panel at the bottom of the mods pane and select **Create mod**. Call it **Bashed Patch**, place it in the **Install Specific Tweaks** section, and ensure it is enabled after installation.

### Running the Game

1. To play the game, select **Oblivion** in the MO2 **executable** **dropdown** and hit **Run.** If you encounter an application error and use Steam, make sure Steam is running in the background and try again.
3. After playing and closing the game, create a new empty mod called OBSE Logs (Use the '...' button at the top of the left MO2 pane, then select 'Create empty mod'. Next, click on the **Overwrite** panel at the bottom of the mods pane and drag and drop the OBSE log files into the empty OBSE Logs mod. This ensures any logs generated on successive plays will be stored here and will not produce a warning.
4. You're ready to go! Check the optional steps below if you would like to further enhance your experience.

## Optional Post Installation Instructions

### Bevilex Extended : Optionals

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

### Installing Missing Mods

As mentioned earlier, a number of texture mods are installed on websites that Wabbajack cannot currently access. This section covers the manual installation of these mods to provide a complete Bevilex installation, and requires users to have some knowledge of MO2 mod installation. 

Note that this section is optional - the textures covered are great additions but may not be to everyone's tastes. I would recommend looking at some screenshots of the work KatKat produces before making a decision on their inclusion. I myself use a handful of the textures, but not all. The game is fully playable without them.

1. **Register for the TESALL modding community.** I would recommend using a browser that autotranslates pages, such as Google Chrome, because the site is Russian. I would also recommend using a spam email and password that you do not use for other services, as the site does not use HTTPS. The registration page can be found at the following address: [http://tesall.ru/index.php?app=core&module=global&section=register](http://tesall.ru/index.php?app=core&module=global&section=register). Note that only fields marked with * are required, so no need to enter any Discord, Skype, Facebook etc. information. **At the bottom of the form there is a security question to prove you are human.** Below I will keep an updated list of possible questions and answers.
    1.  Question: _“What is the name of Ivan?”,_ Answer: Иван.
2. Once registered, **log in** (there is no need to wait for the verification email)
3. **Download the mods from each of these links.** Place each archive in the MO2/downloads directory created by the Wabbajack installer. You may also want to copy each file to a backup directory so that you don't have to rely on TESALL in the future.
    * [Ayleid Ruin Replacer](http://tesall.ru/files/file/9151-ayleydskie-ruiny-hd/)
    * [Anvil Retexture](http://tesall.ru/files/download/6245-obvetshalyy-anvil/)
    * [Vilverin Flora Replacer](http://tesall.ru/files/download/9525-flora-vilverina-ot-katkat74/)
    * [Cypress Knee Flora](http://tesall.ru/files/download/8035-pnevmatofory/)
    * [Improved Skingrad](http://tesall.ru/files/download/2460-oblivion-improved-skingrad/)
    * [Cloud Ruler Temple Overhaul](http://tesall.ru/files/download/9193-hram-quot-povelitelya-oblakov-quot-hd-ot-katkat74/)
    * [Wayshrines](http://tesall.ru/files/download/7982-dorojnye-svyatilischa-ot-katkat74/)
    * [Basements HD](http://tesall.ru/files/download/7202-podvaly-hd/)
    * [Ships HD](http://tesall.ru/files/download/8107-repleys-korabley-ot-katkat74/)
    * [Tombstones HD](http://tesall.ru/files/download/6963-alternativnye-nadgrobiya-ot-tes-diesel/)
    * [Oblivion Realm Landscape Retexture](http://tesall.ru/files/download/6235-retekstur-landshafta-obliviona/)
    * [Oblivion Realm Trees Retexture](http://tesall.ru/files/download/7359-derevya-obliviona/)
    * [Smoking Candles](http://tesall.ru/files/download/9510-koptyaschie-svechi-ot-katkat74/)
    * [Boars](http://tesall.ru/files/download/8797-raskabanevshie-kabany/)
    * [Sheep](http://tesall.ru/files/download/8770-baranistye-barany/)
    * [Cougars](http://tesall.ru/files/download/8760-pumy-ot-katkat74/)
    * [Wolves](http://tesall.ru/files/download/8693-volki-cdpr/)
    * [Crabs](http://tesall.ru/files/download/9242-krabovye-kraby/)
    * [Slaughterfish](http://tesall.ru/files/download/9073-ryba-ubiyca-sk/)
    * [Bears](http://tesall.ru/files/download/9025-medvedi-cdpr/)
    * [Deer](http://tesall.ru/files/download/8658-olenistye-oleni/)
    * [Dogs](http://tesall.ru/files/download/8672-sobakus-vulgaris/)
    * [Bones](http://tesall.ru/files/download/9537-kostyanye-kosti/)
    * [Necromancer, Vampire and Bandit Clutter](http://tesall.ru/files/download/9538-predmety-byta-vampirov-nekromantov-i-banditov/)
    * [Crystal Balls](http://tesall.ru/files/download/6930-magicheskie-hrustalnye-shary/)
    * [Vineyard Clutter](http://tesall.ru/files/download/8659-oborudovanie-dlya-vinodeliya/)
    * [Blacksmith Clutter](http://tesall.ru/files/download/7442-kuznechnyy-instrument/)
    * [Farm Clutter](http://tesall.ru/files/download/7437-fermerskiy-instrument/)
    * [Lower Class Clutter](http://tesall.ru/files/download/5547-replejser-obstanovki-bednyatckogo-klassa-ot-tes-diesel/)
    * [Middle Class Clutter](http://tesall.ru/files/download/5548-retekstur-obstanovki-srednego-klassa-ot-tes-diesel/)
    * [High Class Clutter](http://tesall.ru/files/download/5861-retekstur-obstanovki-vysshego-klassa/)
    * [Rugs and Carpets](http://tesall.ru/files/download/9409-kovry-i-shkury-ot-katkat74/)
    * [Paintings Replacer](http://tesall.ru/files/download/9410-zamena-kartin-na-ohotnichi-trofei-ot-katkat74/)
4. In MO2, right click in the mods pane (left hand side) and select **Create new separator**. Name it **Manually Installed Textures**.
5. On the right plugins pane, select the Downloads tab and **install each archive that you downloaded**. For each install, click the ‘manual installation’ option and verify that the structure is as it should be (you can tell from the green ‘Looks good’ text). If it is not, right click and set the data directory on the folders as appropriate.
6. Once you have installed the mods, you’re all set!

### Mod Suggestions, Gameplay Profiles, and Installing Additional Mods

The Bevilex guide only overhauls visuals and stability, leaving the gameplay systems (questing, levelling, level scaling, combat) in a vanilla state. Given this, you may want to consider adding additional mods to enhance Oblivion's gameplay.

Included below are some general steps for installing additional mods on top of the Bevilex install. For inspiration, the Bevilex guide has a number of gameplay enhancing suggestions that you can incorporate on top of the guide which have been tried and tested - see the bottom of [this page](https://www.nexusmods.com/oblivion/mods/47591) for more details.

#### General Steps

1. **Download the mods you wish to add.** Make sure to read the documentation to ensure that they do not have any compatibility issues with any of the mods from the Bevilex guide. If on Nexus, use ‘mod manager download’ where possible with MO2 open to have the archive appear directly in your MO2/download folder. If only manual download is available, cut and paste the archive to the downloads folder.
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
2. Close MO2 and go to Bevilex/tools/Oblivion BSA Decompressor. **Run Oblivion BSA Decompressor.exe**.
3. Select **Decompress**, then close the tool once it has finished. Your vanilla BSA files will now be decompressed.
4. Cut **DLCShiveringIsles - Faces.bsa** back to Bevilex/mods/Unofficial Shivering Isles Patch. 

![](https://i.imgur.com/Nhfq9jN.png)

## Extra Notes

*   Due to the way MO2 loads Oblivion and OBSE, the Steam overlay and screenshot functionality cannot be used. Use F11 to take screenshots using Oblivion Reloaded.

## Troubleshooting

1. _I receive a blank / black screen on start up._
    * Replace the Oblivion.ini file in Documents/MyGames/Oblivion and [MO2 Install]/profiles/Bevilex Extended with [this version](https://drive.google.com/file/d/1nby-4x-eFlEC4nvIlERilWVstzHztRck/view?usp=sharing).
2. _I am unable to download [X] mod during the Wabbajack install process, and from the Nexus page I can see that it was updated within the past week._
    * The mod in question has been updated and the mod author has not kept the previous version accessible on the Nexus. As such, the current modlist cannot be installed and must be updated. If you encounter this and it has not been mentioned in the #bevilex-support channel on Discord, please ping me (@Sam) so that I am aware of the issue and can update the modlist as soon as possible. 
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
* **Aerialvas**, **Peria**, and **Mr.Vanato** for their useful optimisation tips and troubleshooting assistance in the bevilex-support channel
* **jdsmith2816** for their help integrating the OUT and SIUT mods in to the installer, and their optimisation of vanilla meshes and textures
* All the testers and users who have taken time to provide feedback: **Seear**, **Aronax**, **epixxor**, **Duriel**, **Foxman**, **Aerialvas**, **Peria**, **ShadowFyre**, **Mr.Vanato**, **Nazo**, **Stormline**, **MrG**, **carl**, **KatieLW19**,  **KarmasLives22**, **ELDYLO**, **Severance**, **Zierry**, **Gatonegro**, **Bartun**, **b e e g y o s h i**, **Epic**, **NaterOfTheWired** and more!
