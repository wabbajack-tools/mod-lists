![](https://lh5.googleusercontent.com/qg1yiTiIK8-eiPjZw1Fe50LJ4oe2FUNfvLZAeczNKNBsTJtm9SsPr6ERvVSHBn0F3XOYPo7xRZoSY_L17N5AKLs51SU8XjFZLWzbF7wPCgGr1zS48Ap30ULjp_6rqwMmif5-oh78)  
# What is Keizaal?

Keizaal is a small Vanilla+ modlist that is meant to enhance and expand on the base game without compromising Bethesda’s original vision. It also aims to maintain a level of consistency and integration between the Beyond Skyrim projects in order to make Tamriel feel like one cohesive whole.

A few criteria for the mods on this list:

1. This list is "Vanilla+" meaning that it intends to maintain the Vanilla feel. This is highly subjective and some of the mods listed here may not line up with your personal interpretation of "Vanilla+."  
2. The modlist is lite. A lot of the time modlists can become ridiculously huge and bloated, but this modlist wants to be nice and lean. Less is more.  
3. Immersion is paramount. I'm a lore buff and immersion is very important to me. If a mod is not lore accurate or takes me out of the game in any way it will be excluded. Consistency also falls into this category, if a mod as a completely different aesthetic from Vanilla or any of my other mods then it will probably not be included.  
4. Mods must have decent longevity. This modlist wants to be somewhat relevant, in theory, forever.  
5. Stability is the most important thing. This rule basically supersedes all the above. If a mod introduces major stability concerns it will be quickly cut.

You can see a brief description of all the mods included on my [Modpicker page](https://modpicker.com/skyrimse/mod-lists/5547/details).

## Setup and Information

A premium Nexus account is required to run Wabbajack.

This modlist takes up 37GB of harddrive space and will take an hour or so depending on your internet speed. It is recommended that you install it on a solid state drive for optimal performance, but a standard hard disk drive will suffice.

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

![](https://lh4.googleusercontent.com/P7t5u3IoiDj4ERKY-KInr3n5eBEgJqiqgBk4wJgpI4nqCL6OX1OhcDhW_7VGfnpNwN3wVwLwPYTGNAuybSh6Mx08ImAs6LXayiwInRbbrH3Y4-hVDE0lPql49Qm7LCLQGbKfZs4a)
When you’re ready press the triangular start button.

After starting the installation a window will pop up and ask for you to authorize Wabbajack to use your Nexus account. Log into and authorize Wabbajack on Nexus and the installation will proceed.

Wabbajack will now install the modlist, this will take a while so be patient. When the install is done the left panel should say “Installation Complete” at the button. At this time it is safe to close Wabbajack.

### Playing Keizaal

Navigate to your Keizaal installation folder (default is C:\Keizaal\) and find the “Game Data Files” folder. Open it and extract everything in it to your Skyrim Special Edition directory (the folder containing SkyrimSE.exe).

Now that Keizaal has been installed you will need to launch Skyrim in a slightly different way.

Navigate back to your Keizaal installation folder and run ModOrganizer.exe.

You should now be on a screen that displays all of your installed mods on the left and all of your .esp files on the right.

![](https://lh4.googleusercontent.com/PJDWOwb8sfb_gBqHcLvTbdAkL51TLNOwtW10RReo8z-bSHqQ8jFRSdoMj7IJUU_QXkKFDtAL3Oi_Bmkxa-_qlNk9ba_ixRUyCTeshg1uEkQvB_G65tJcwRebHs5SXW1my-p8J-BO)
You will now have to launch Skyrim by selecting “SKSE” from the drop-down menu directly above the .esp plugins and pressing “Play”. Beneath the Play button there is a way to add a Skyrim shortcut to your desktop for added convenience.

## Troubleshooting

Wabbajack throws an error after authorizing through Nexus.

Download the [.Net Framework 4.8 Runtime](https://dotnet.microsoft.com/download/dotnet-framework/net48). Be sure to restart your computer afterward.

A mod fails to download.

One of the mods on Keizaal has probably been updated. Check the Wabbjack Discord and be patient as an update is made.

Mod Organizer is white and displays no mods or .esps.

Contact Pierre Despereaux on the [Wabbajack Discord](https://discordapp.com/invite/wabbajack) for individual help and guidance.

## Credits

**Simon Magus**
for tolerating my constant badgering about my load order

**Paleo the Parrot**, **VictorF**, and **ElectricSparx**
for helping me understand xEdit

**Total**,  **Lively**, and **Shelb**
for helping me get the Wabbajack installer operational over several long nights

**Dylan James**
for helping me see what “Vanilla+” actually meant

**halgari and entire Wabbajack Team**
for creating such a fantastic resource

**The wonderful mod authors**
for making this modlist possible
