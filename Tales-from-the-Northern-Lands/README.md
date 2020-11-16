# Tales from the Northern Lands

![total_installations](https://img.shields.io/endpoint?url=https://build.wabbajack.org/metrics/badge/TalesFromTheNorthernLands/total_installs_badge.json)

## Index

<!-- markdownlint-disable MD033 -->

<ul>
  <details><summary><a href="#tales-from-the-northern-lands">Tales from the Northern Lands</a></summary>
    <ul>
      <li><a href="#preamble">Preamble</a></li>
      <li><a href="#screenshots">Screenshots</a></li>
      <li><details><summary><a href="#installation">Installation</a></summary>
        <ul>
          <li><details><summary><a href="#pre-installation">Pre-Installation</a></summary>
            <ul>
              <li><a href="#installing-microsoft-visual-c-redistributable-package">Installing Microsoft Visual C++ Redistributable Package</a></li>
              <li><a href="#steam-config">Steam Config</a>
                <ul>
                  <li><a href="#disable-the-steam-overlay">Disable the Steam Overlay</a></li>
                </ul>
              </li>
              <li><a href="#change-steams-update-behavior">Change Steams Update Behavior</a></li>
              <li><a href="#set-the-game-language-to-english">Set the Game language to English</a></li>
              <li><a href="#clean-skyrim">Clean Skyrim</a></li>
              <li><a href="#start-skyrim">Start Skyrim</a></li>
            </ul>
          </details></li>
          <li><details><summary><a href="#using-wabbajack">Using Wabbajack</a></summary>
            <ul>
              <li><a href="#preparations">Preparations</a></li>
              <li><a href="#downloading-and-installing">Downloading and Installing</a>
                <ul>
                  <li><a href="#problems-with-wabbajack">Problems with Wabbajack</a></li>
                </ul>
              </li>
            </ul>
          </details></li>
        </ul>
      </details></li>
      <li><details><summary><a href="#post-installation">Post-Installation</a></summary>
        <ul>
          <li><a href="#copy-game-folder-files">Copy Game Folder Files</a></li>
        </ul>
      </details></li>
      <li><details><summary><a href="#mods-to-tweak-to-your-taste">Mods to tweak to your taste</a></summary>
        <ul>
          <li><a href="#customizable-ui-replacer">Customizable UI Replacer</a></li>
          <li><a href="#dear-diary---paper-skyui-menus-replacer-se">Dear Diary - Paper SkyUI Menus Replacer SE</a></li>
        </ul>
      </details></li>
      <li><a href="#how-to-start-up-tales-from-the-northern-lands">How to start up Tales from the Northern Lands</a></li>
      <li><a href="#updating">Updating</a></li>
      <li><details><summary><a href="#in-game-mcm-options">In-Game MCM Options</a></summary>
        <ul>
          <li><a href="#all-geared-up-deriv">All Geared up Deriv</a></li>
          <li><a href="#a-matter-of-time">A Matter of Time</a></li>
          <li><a href="#dual-wield-parrying">Dual Wield Parrying</a></li>
          <li><a href="#pwer">P.W.E.R.</a></li>
          <li><a href="#sperg">SPERG</a></li>
          <li><a href="#violens">VioLens</a></li>
          <li><a href="#widget-mod">Widget Mod</a></li>
          <li><a href="#xpmsse-preference">XPMSSE (Preference)</a></li>
        </ul>
      </details></li>
      <li><details><summary><a href="#other-post-installation-faq">Other Post Installation FAQ</a></summary>
        <ul>
          <li><a href="#ultrawide-options">Ultrawide Options</a></li>
          <li><a href="#tweaking-the-game-settings">Tweaking the Game Settings</a></li>
          <li><a href="#zoomed-in-display">Zoomed in Display</a></li>
          <li><a href="#removing-the-modlist">Removing the Modlist</a></li>
        </ul>
      </details></li>
      <li><a href="#credits-and-thanks">Credits and Thanks</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#changelog">Changelog</a></li>
      <li><a href="#licenses">Licenses</a></li>
    </ul>
</details></ul>
<!-- markdownlint-enable MD033 -->

## Preamble

This is a visual overhaul of Skyrim that tries to mimic the look of the "Tales of/from ..." Series, "The Wolf Among Us" and mainly "Borderlands" with their cell shaded visuals. The Visual Overhaul I used to create this list was stylized in a for my taste way to reflective way but I liked the textures them self so I have changed most of the normal maps of the textures i came around while testing this list. There are for sure textures missing that treatment but I will update this list every time I update more of the normal maps to be less reflective.

For the gameplay this list contains mods that intend to make you stronger and feel like and actually special person in Skyrim just like the Vault Hunters and the Dragonborn should be able to feel in their stories. The main mods to achieve this are SPERG, Skyrim Skill Uncapper and the True Dragonborn preset for it.

**A very new addition to this list is a Basics profile only containing the most important bugfixes and visual mods without the gameplay or additional item mods.**

## Screenshots

So I have created a page where you can share your screenshots of this list with others and I really hope you can help me out or have fun sharing screenshots since I am not the best at taking nice looking screenshots myself.
This list even has a separate profile in Mod Organizer you can use for screenshots with all UI mods disabled if you prefer this approach.
I have moved this to this [page](https://github.com/EzioTheDeadPoet/Tales-from-the-Northern-Lands/blob/master/SCREENSHOTSDISPLAY.md) since Skyrim is pretty big and has a lot of places and scenes to take screenshots of.

## Installation

### Pre-Installation

These steps are only needed if you install this Modlist for the first time. If you update the Modlist, jump straight to [Updating](#updating).

#### Installing Microsoft Visual C++ Redistributable Package

I doubt you need to do this since you likely already have this installed. The package is required for MO2 and you can download it from [Microsoft](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). Download the x64 version under "Visual Studio 2015, 2017 and 2019". [Direct link](https://aka.ms/vs/16/release/vc_redist.x64.exe) if you can't find it.

#### Steam Config

##### Disable the Steam Overlay

The Steam Overlay can cause issues with ENB and is recommended to be turned off when using and ENB, this list only uses ReShade which makes this step only necessary if you want to add an enb yourself.

Open the Properties window (right click the game in your Library->Properties), navigate to the _General_ tab and un-tick the _Enable the Steam Overlay while in-game_ checkbox.

#### Change Steams Update Behavior

SSE is still being updated by Bethesda (they only add Creation Club content). Whenever the game updates, the entire modding community goes silent for the next one or two weeks because some mods need to be updated to the latest game runtime version.

To ensure that Steam does not automatically updates the game for you, head over to the Properties window, navigate to the _Updates_ tab and change _Automatic updates_ to _Only update this game when I launch it_. You should also disable the Steam Cloud while you're at it.

#### Set the Game language to English

Just do it. This entire Modlist is in English and 99% of all mods you will find are also in English. I highly recommend playing the game in English and **I will not give support to people with a non-English game**.

Open the Steam Properties window, navigate to the _Language_ tab and select _English_ from the dropdown menu.

#### Clean Skyrim

I highly recommend uninstalling the game through Steam, deleting the game folder and reinstalling it. You should also clean up the `Skyrim Special Edition` folder in `Documents/My Games/` by deleting the contents in it.
Or use [Skyrim Shredder](https://www.nexusmods.com/skyrimspecialedition/mods/30133) to clean everything.

#### Start Skyrim

After you have done everything above and got a clean SSE installation ready, start the Launcher and and let it do the initial graphics check. Do not worry about this part as the installation will replace this graphics settings.
Start the game and exit once you're in the main menu.

[[Back to top]](#tales-from-the-northern-lands)

### Using Wabbajack

#### Preparations

Grab the latest release of Wabbajack from [here](https://github.com/wabbajack-tools/wabbajack/releases) and place the `Wabbajack.exe` file in a _working folder_. This folder **must not** be in a _common folders_ like your Desktop, Downloads or Program Files folder. It's best to create a Wabbajack folder near the root level of your drive like `C:/Wabbajack`.

#### Downloading and Installing

The download and installation process can take a very long time depending on your system specs. Wabbajack will calculate the amount of threads it will use at the start of the installation. To have the highest amount of threads and thus the fastest speed, it is advised to have the working folder on an SSD.

1. Open Wabbajack
2. Click on Browse Modlists, and download Tales from the Northern Lands from the gallery.
3. Once the download is done set the Installation folder to somewhere that is not affected by UAC (Please do not put it in Documents, Program Files, Desktop. Put it somewhere easy like `C:/Modlists/Tales from the Northern Lands`). The downloads path should automatically fill in the installation path.
4. Click the Go/Begin button
5. Wait for Wabbajack to finish
6. If you run into any issues see the next section. If the installation is successful, proceed to [Post-Installation](#post-installation).

##### Problems with Wabbajack

There are a lot of different scenarios where Wabbajack will produce an error. I recommend re-running Wabbajack before posting anything. Wabbajack will continue where it left off so you loose no progress.

**Could not download x**:

If a mod updated and the old files got deleted, it is impossible to download them. In this case just wait till I update the Modlist.

**x is not a whitelisted download**:

This can happen when I update the modlist. Check if a new update is available and wait if there is none.

**Wabbajack could not find my game folder**:

Wabbajack will not work with a pirated version of the game. If you own the game on Steam, go back to the [Pre-Installation](#pre-installation) step.

**Windows is reporting that a virus has been detected**:

Windows 10 has started to auto quarantine the usvfs_proxy_x86.exe file from the latest version of Mod Organizer 2 saying a threat was detected . This is a known false positive confirmed by the MO2 Devs. You can fix this by adding an exemption for MO2 Folder to your Antivirus. Example for windows defender can be found [here](https://www.thewindowsclub.com/exclude-a-folder-from-windows-security-scan).

[[Back to top]](#tales-from-the-northern-lands)

## Post-Installation

### Copy Game Folder Files

Copy the all of the files from the `Installation Folder/Game Folder Files` directory into your game folder.

## Mods to tweak to your taste

### Customizable UI Replacer

Customizable UI Replacer has multiple good looking presets.

- To test other presets just right-click the `Customizable UI Replacer` Mod and hit reinstall and select the preset you want.
- Once `Customizable UI Replacer` is reinstalled follow the steps for [A Matter of Time](#a-matter-of-time) and [Widget Mod](#widget-mod).

### Dear Diary - Paper SkyUI Menus Replacer SE

If you use the `Basics` profile then you **NEED** to "reinstall" this mod and selecting everything based on preference and when it comes to the Skills menu choose vanilla, or whatever mods you want to add to it. The default setting for the Skill Menu is `Experience + Extended UI` in the normal Profile.

## How to start up Tales from the Northern Lands

Head over to the installation folder and locate an executable named `ModOrganizer.exe` and launch it. Once its launched there will be a dropdown box on the top right and a big run button next to it. Ensure it is set to SKSE by selecting it in the dropdown box and then hitting the run button.

## Updating

If this Modlist receives an update please check the Changelog before doing anything. Always backup your saves or start a new game after updating.

**Wabbajack will delete all files that are not part of the Modlist when updating!**

This means that any additional mods you have installed on top of the Modlist will be deleted. Your downloads folder will not be touched!

Updating is like installing. You only have to make sure that you select the same path and tick the _overwrite existing Modlist_ button.

## In-Game MCM Options

Once the game has loaded. Wait until there are no more messages on the top left corner. Then you can hit escape and click on Mod Configuration to continue this section.
Mods or sections with (Preference) next to their name is solely preferential and do not affect the balance of the game. MCM Pages not covered here have been left on their default settings by me. You can Tweak those if you want, but if you encounter issues after doing so please revert those changes before reporting an issue.

### All Geared up Deriv

- Player (Preference)
  - Weapons - Player
    - Display Options
      - Shield stays on arm while Equipped: `Enabled`
  - Enable Misc Item Display: `Disabled`
- NPC:
  - Enable Weapons (Preference): `Enabled`
  - Enable Misc Item Display: `Disabled` (There's been numerous reports of NPCs crashing with this Enabled. Hence, it's recommended to be Disabled)

### A Matter of Time

- Presets:
  - Load user settings
  
### Dual Wield Parrying

- Block Key: `V` (set it to whatever suits you best.)

### P.W.E.R

- Settings
  - Followers enabled: `Enabled` (If you want your followers to be as powerful as you are.)

### SPERG

- General
  - Quest Rewards: Either `Questlines` or `Compatibility Mode`, Questlines should make you level faster than Compatibility Mode, but Compatibility Mode will be "more" balanced.

### VioLens

- Profile System
  - Load "TFSH-Profile"

### Widget Mod

- Maintenance
  - Load User Settings

### XPMSSE (Preference)

**Note:**
Xanza found that using these settings reduces save bloat by quite a bit.

- Styles:
  - Disable Style Cloak Spell: `Enabled`
  - Style Fitting Animations (All): `Disabled`
  - Style Fitting Dual Wield Animations (All): `Disabled`
  - Style Fitting Shield Animations (All): `Disabled`
  - Style Fitting Mixed Animations (All): `Disabled`

The rest can be set up however you like. I personally have Swords on back

[[Back to top]](#tales-from-the-northern-lands)

## Other Post Installation FAQ

### Ultrawide Options

*Please note that I do not own a widescreen setup, and thus cannot help troubleshoot this section. These instructions were provided by @Mantis#1337.*

Go to the [Complete Widescreen Fix](https://www.nexusmods.com/skyrimspecialedition/mods/1778) page.  
Download the following files:

- Complete Widescreen Fix for SkyUI 5.2 SE Alpha- 2560x1080  
- Better Dialogue Control Widescreen Fix
- Better Message Box Control Widescreen Fix
- Even Wider Rescaled MCM Menu for SkyUI - Widescreen Fix
- SkyHud High Resolution Widescreen Fix

Install the archives with Mod Organizer 2. They will be in the right window, under the Downloads section.  
Be sure to RENAME the mods during installation. You can click the dropdown box and select the appropriate filename for each as you install them.

Reinstall `DEAR DIARY` to select the widescreen options.
The default setting for the Skill Menu is `Experience + Extended UI` in the normal Profile.

### Tweaking the Game Settings

I highly recommend using [BethINI](https://www.nexusmods.com/skyrimspecialedition/mods/4875) which is included in this Modlist (can be found in `MO2/tools/BethINI`). I recommend tweaking the `Detail` section for more FPS:

- `Shadow Resolution`: Very big one. A good balance is `2048` which is the borderline between high FPS drainage and garbage looking shadows.
- `Ambient Occlusion`: Highly recommended to turn either this or your ENB version off. Do not have the game AO and an ENB AO turned on at the same time.
- `Remove Shadows`: If you really struggle, use this. This will disable all Shadows (not recommended)

### Zoomed in Display

This can be caused by Window's Display Scaling feature. This usually is set to above 100% when using very large (32 inch++) sized monitors and TVs. There are two solutions to this

- Set the display scaling back to 100% in the Screen Resolution Settings for Windows
- Edit the mod SSE Display Tweaks.
  - Under `[Render]`
    - Set Fullscreen to `True`
    - Set Borderless to `False`

### Removing the Modlist

You can just remove the MO2 folder and be done with it. SKSE and ReShade files will still be in your game folder so I recommend using [ENB and ReShade Manager](https://www.nexusmods.com/skyrimspecialedition/mods/4143) if you want to remove the ReShade.

## Credits and Thanks

- _YOU_ for actually reading the readme. Thanks a ton!!
- Xanza for writing most of this for his modlist.
- ForgottenGlory for making SME(FT) and this modlist possible due to his early support.
- Everyone giving me feedback on the artistic choices.
- the creator of ReShade with its generous [License](https://github.com/EzioTheDeadPoet/Tales-from-the-Northern-Lands/blob/master/ReShade/RESHADELICENSE.md) that allows me to include it.
- erri120 & jdsmith2816 - Repository template
- Halgari and everyone the WJ Team - Wabbajack is awesome and so are you

## Contact

While I'm always available on the [Wabbajack Discord](https://discord.gg/wabbajack), I would advise checking the [Issues](https://github.com/EzioTheDeadPoet/Tales-from-the-Northern-Lands/issues) (open **and** closed ones) on GitHub first if you have any problems. The same goes for _Enhancements_ or _Feature/Mod Requests_. **DO NOT DM ME ON DISCORD. I WILL NOT PROVIDE SUPPORT FOR YOU IN DMS AND I WILL BLOCK YOU**.

**DON'T CONTACT MOD-AUTHORS WITH ISSUES OR I WILL HAVE TO TAKE ACTIONS THAT WILL RESULT WITH YOU BEING BANNED FROM WABBAJACK.**

## Contributing

See [How to contribute](https://github.com/EzioTheDeadPoet/Tales-from-the-Northern-Lands/blob/master/HOWTOCONTRIBUTE.md).

## Changelog

See [Changelog](https://github.com/EzioTheDeadPoet/Tales-from-the-Northern-Lands/blob/master/CHANGELOG.md#changelog).

## Licenses

- [ReShade License](https://github.com/EzioTheDeadPoet/Tales-from-the-Northern-Lands/blob/v1.5.0/ReShade/RESHADELICENSE.md#reshade-license)

***

[[Back to top]](#tales-from-the-northern-lands)
