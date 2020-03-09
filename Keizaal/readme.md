## What is Keizaal?

A few criteria for the mods on this list:

1. **The modlist is lite and intends to maintain the Vanilla feel.** A lot of the time modlists can become ridiculously huge and bloated, but this modlist wants to be nice and lean. Less is more.
2. **Skyrim must feel consistent with current and future Beyond Skyrim projects.** The Beyond Skyrim projects are the perfect content mods to add to this list. As such I want Skyrim to feel like it’s part of the same world as Beyond Skyrim’s provinces.
3. **Immersion is paramount.** I'm a lore buff and immersion is very important to me. If a mod is not lore accurate or takes me out of the game in any way it will be excluded. Consistency also falls into this category, if a mod as a completely different aesthetic from Vanilla or any of my other mods then it will probably not be included.  
4. **Mods must have decent longevity.** This modlist wants to be somewhat relevant, in theory, forever.  
5. **Stability is the most important thing.** This rule basically supersedes all the above. If a mod introduces major stability concerns it will be quickly cut.

## Setup and Information

A premium Nexus account is required to run Wabbajack.

This modlist takes up 98GB of harddrive space and will likely take a few hours to download depending on your internet speed. It is recommended that you install it on a solid state drive for optimal performance, but a standard hard disk drive will suffice.

Install the latest version of Wabbajack from the #builds channel in the [Wabbajack Discord](https://discordapp.com/invite/wabbajack).

Create a new folder called “Wabbajack” in the root of your main drive, the default is (C:). Extract Wabbjack.exe into this folder.

![](https://lh3.googleusercontent.com/J2TSlfEol5ph4dQ1satHzWZS4B3JGHuGCTguSnDv7PBs0CI61psyN3LNZ2xVW-lslGcSbix65cU4_joIjYO5Hz0OGET8Rjlev0Oi7bxLNOzkRXdvxBDAK7d058LanhUJWb9MPG6M)

This modlist was assembled on a system running a GTX 1070 with 16GB of RAM, on this system a stable and consistent 90FPS is the norm. Your mileage may vary, but the graphics mods are kept to a minimum to ensure both good basic performance as well as a consistent aesthetic in line with the Vanilla game.

### Clean Install

Wabbajack requires a clean install of Skyrim to work properly, this step is only necessary once.

Delete the following directories:

1.  C:\Program Files (x86)\Steam\steamapps\common\Skyrim Special Edition
2.  Open Windows Search and copy/paste %LOCALAPPDATA%
3.  Delete the Skyrim Special Edition folder
4.  Navigate to Users\YOURNAME\Documents\My Games\
5.  Delete the Skyrim Special Edition folder

If you cannot find these directories you either didn’t have Skyrim installed or had it installed to a non-default location.

### Reinstalling Skyrim

Open Steam and ensure that Skyrim is uninstalled through on it.

Reinstall Skyrim in the root of your main drive, the default is (C:). It is not recommended to install Skyrim in your Program Files folder.

Run the Skyrim: Special Edition launcher through Steam and let it detect your settings, then close the launcher. This is only necessary once.

### Creation Club Updating Protection

Every time the Creation Club releases new content SKSE breaks. A versions of SKSE usually release fast, but to ensure your game isn’t broken for a few days follow these steps:

1.  Open your Steam Library
2.  Find The Elder Scrolls V: Skyrim Special Edition and open the properties
3.  Click Properties
4.  Click the Updates tab
5.  Under the Automatic Updates section, select “Only update the game when I launch it”

## Keizaal Installation

Create a new folder called “Keizaal” in the root of your main drive, the default is (C:).

Open Wabbajack.exe, it should be in the Wabbajack folder in the root of your main drive.

Select the Keizaal modlist from the Wabbajack UI.

Once the installation window opens ensure that the “Installation Location” matches the Keizaal folder you just created (default should be C:\Keizaal\). The download location should populate automatically

![](https://lh3.googleusercontent.com/-kR37sxNmIC2R1ZBeFPZLk90QqvKan68MhDvqvs_RM-OCzzX-DMudWjRGxKF4ke7-KIU2fFuQIxMl_kvNKpD7TihpTX3RKAVD-KD_FJTdwslgFDfQZVqs4Jpytrq3Cbxrw)

When you’re ready press the triangular start button.

After starting the installation a window will pop up and ask for you to authorize Wabbajack to use your Nexus account. Log into and authorize Wabbajack on Nexus and the installation will proceed. Wabbajack will now install the modlist, this will take a while so be patient. When the installation is done the left panel should say “Installation Complete '' at the button. At this time it is safe to close Wabbajack.

Navigate to your Keizaal installation folder (default is C:\Keizaal\) and find the “Game Folder Files” folder. Open it and extract everything in it to your Skyrim Special Edition directory (the folder containing SkyrimSE.exe).

### Installing the ENB (Optional)

If you have an older or less powerful machine you may skip this step.

[Click here to go to the enbdev.com.](http://enbdev.com/download_mod_tesskyrimse.htm)

Download the most recent version of ENB. Once the archive is downloaded, open it and open the “WrapperVersion” folder.

![](https://lh4.googleusercontent.com/BIEdtBd6Cbxcel6cjjUmUaPLrG3ChdB1zKnYZZmiQtKcxib6UZjljMO4YDTT6XC-G39uWoHhP9CJDZN8Y4-w5T63fU34BOLLqONvn946b7VcTBFt7f5NdPc_4dE8aKnONA)

Extract everything in “WrapperVersion” to your Skyrim Special Edition directory (the folder containing SkyrimSE.exe).

## Playing Keizaal

Now that Keizaal has been installed you will need to launch Skyrim in a slightly different way.

Navigate back to your Keizaal installation folder and run ModOrganizer.exe.

You should now be on a screen that displays all of your installed mods on the left and all of your .esp files on the right.

![](https://lh5.googleusercontent.com/YiMtbtFchI4dQhTfZu8btgagdViOzy9hphagcdyYhEYKuuKerSlJWvgTQR14jOJleywiBGHvY3kQPNwgaAhkf61fN2I-DBYXRkbvzBCnJ_jUCuufuvRFmRtSmqJv81Iv2A)

You will now have to launch Skyrim by selecting “SKSE” from the drop-down menu directly above the .esp plugins and pressing “Play”. Beneath the Play button there is a way to add a Skyrim shortcut to your desktop for added convenience.

### Toggling Open Cities

I consider Open Cities to be an important part of this modlist because it increases consistency with the Beyond Skyrim projects. Only the largest Beyond Skyrim cities will be closed (The Imperial City, Morunhold, Daggerfall, ect.) so it makes sense to make Skyrim’s cities follow the same rules as Beyond Skyrim’s. However, Open Cities has a lot of compatibility and performance concerns for many of users, so I have decided to make it optional.

Keizaal comes packaged with two profiles: Open Cities Skyrim and Closed Cities Skyrim. Simply pick which version of Keizaal you want to use from the profile dropdown at above the installed mods.

![](https://lh5.googleusercontent.com/fhEJwlH0NZCEv0LJIKhiHL1EBxDZsm3cBtggflwIhDcJGDbSO5f3XZSV8Q5X6RAl4tLL_lCrbmXCD2K0pL-uSulqPzQDBTR8eoXghMmWDrqi03s1W7PwyUwTk5dOJ6lauGqexWuV)

## Recommended Mod Configuration Menu Settings

The Mod Configuration Menu gives the player a huge amount of control over mods that support it. It is a much more elegant solution to toggling mod settings in-game compared to the config books and powers of old. You can access the MCM under the settings tab in your pause menu.

While the mod settings are ultimately subjective user-to-user there are a few settings that are recommended to achieve this modlist’s intended experience.

### Open Cities Skyrim

Toggle **Oblivion Gates**, **City Gate Attendants**, and **Outdoor Lighting System** to **OFF**. Oblivion Gates and City Gate Attendants are purely preference, but they have both lore and quality issues that result in them being recommended to be disalbed. Outdoor Lighting System has some lite incompatibilities with Cathedral Weathers and Seasons, nothing that will inherently break your game, but to avoid some weirdness just disable it.

## ![](https://lh3.googleusercontent.com/IXRQaF-jiN-k0AUHIATIqy9fpviRmXeQx9aVgc8cBGgIGkmnWb5ElFQodx98OEOfcMnTPcuZ9WnjJDoNLUC8tZMKD2GSDa5INFmN4N20M-2wWFZdDn2GM7DVIeR3ha6aK5Fkw1Hp)

### Timing is Everything

Bethesda has an infamous history of poorly integrating their expansions, Skyrim was no exception. While purely preference, it is recommended to **set Dragonborn to start at level 30 after Dragonslayer has been complete** and **set Dawngaurd to start at level 50**. This goes against the release order of Skyrim’s expansions, but it has a better “flow”. Dragonborn is inherently connected to Skyrim’s main quest and feels like a sequel to it. Dawngurad is an unconnected side story with little to no connections with the main quest.

## ![](https://lh3.googleusercontent.com/HcL9TJh9pU624-0dT26wBEqFPWcho3ZWvJDEmBbhY3cGteIdQmhDjmmNrXh_idN6PafKrZGS6J15zJ-kp-fX7D-H6Dv9htI8OXKquSSL6nttChOX5ixmpAAxbyiyj_EuvOttReUD)

Toggle **The Break of Dawn: No Vampires** to **ON**. Meridia abhors the undead, it doesn’t make sense for her to pick an undead champion.

![](https://lh3.googleusercontent.com/4gTy2QlRMT2SqRqDEH_cJ8g5ErTy6CtecFcfEJcsA_mNEEeworON0xOLP2GSs7evmeUeEeo5BP3d8Z4ZGxVzlwtM9WDo47tj2824FtL8HqCBNQ3aOKXwY54y7B-qOMQ0kNKtcsw1)

Toggle **Werewolf Encounters** and **Thalmor Squad: Quest Requirement** to **ON**. Werewolves are an interesting enemy type that was tragically underused in the base game, turning them on makes for some interesting world encounters. The Thalmor Hit Squad only triggering after Diplomatic Immunity gives some feeling of consequence to the world as it serves as a direct reaction to your actions during that quest.

![](https://lh5.googleusercontent.com/X_qW8fWJcJ5uG04GOG-AzoOkieRBqcMu7bz4cjrmiMuzhvGgKZ2RPqgcXacm4TV8aNA2o21NJskfKJVOvfg76gvZo_iXNzVt9m2hoUVf3Z1BkqB-haAUBXtGTK2UAzlVpylOGR6z)

## Troubleshooting

**Wabbajack throws an error after authorizing through Nexus.**

Download the [.Net Framework 4.8 Runtime](https://dotnet.microsoft.com/download/dotnet-framework/net48). Be sure to restart your computer afterward.

**A mod fails to download.**

One of the mods on Keizaal has probably been updated. Check the Wabbjack Discord and be patient as an update is made.

**ModOrganizer.exe throws an error when trying to launch.**

Download the x64 version of the [MSVC 2019 Runtime Library](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). Be sure to restart your computer afterward. 

Contact Pierre Despereaux on either the [Wabbajack](https://discordapp.com/invite/wabbajack) or [Keizaal](https://discord.gg/eYZJFP8) Discord server for individual help and guidance.

## Credits

**Simon Magus** for tolerating my constant badgering about my load order.

**Paleo the Parrot**, **VictorF**, and **ElectricSparx** for helping me understand xEdit.

**Shade088** for all his help getting Keizaal’s graphical suite opperational

**Total**,  **Lively**, and **Shelb** for helping me get the Wabbajack installer operational over several long nights.

**Dylan James** for helping me understand what I wanted out of this modlist.

**halgari and entire Wabbajack Team** for creating such a fantastic resource.

**The wonderful mod authors** for making this modlist possible.
