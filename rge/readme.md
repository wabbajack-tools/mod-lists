# Relics of Hyrule - GAT Edition

The goal of this modlist is to be something fun and different rather than
your 100th enai-survival-rim playthrough.
Please check your immershun at the door and embrace that c0da makes it canon!

This modlist primarily revolves around [Relics of Hyrule](https://www.nexusmods.com/skyrimspecialedition/mods/12244) and [Grand Admiral Thrawn](https://www.nexusmods.com/skyrimspecialedition/mods/24) with new monsters coming from a heavily modified version of [Rogue-Like Encounters](https://www.nexusmods.com/skyrimspecialedition/mods/23872).

Combat is mostly handled by [AGO](https://www.nexusmods.com/skyrimspecialedition/mods/24296) and [Wildcat](https://www.nexusmods.com/skyrimspecialedition/mods/1368). Enemy AI and scaling are provided by [RLE](https://www.nexusmods.com/skyrimspecialedition/mods/23872) while player and npc dodging comes from The Ultimate Dodge Mod.

    Modlist Size:  115GB
    Downloads Size: 84GB
    --------------------
    Total Size:    200GB

## Disclaimers

I will not provide support on how to add or change any mods beyond what is already provided. Do not ask me for help if you changed things. If you do not have extensive experience modding and patching with xedit I suggest you do not even think of changing anything.

If a question is sufficiently answered in this readme I will not respond to support requests relating to it. Please read the readme, I wrote it for a reason. If your question is not in the readme I will answer it to the degree possible.

## Requirements

- [Nexus Premium Account](https://forums.nexusmods.com/index.php?/store/category/1-premium-membership/)
- [TES Alliance Account](http://tesalliance.org/)
- A brain, eyes and time to read through this README

### System Specs

- CPU: >= 7th gen Intel processor OR >= AMD Ryzen 3000 series processor
- GPU: >= 1060, you need at least 6GB of VRAM
- RAM: >= DDR4 with at least 16GBs

Everything should be installed on an SSD that has at least 200GB of space available.

I run this list at 3440x1440 on a 1080TI and maintain greater than 45fps everywhere with most locations staying above 50fps.

## Installation

### Pre-Installation

These steps are only needed if you install this Modlist for the first time. If you update the Modlist, jump straight to [Updating](#updating).

#### Steam Config

##### Disable the Steam Overlay

The Steam Overlay can cause issues with ENB and is recommended to be turned off.

Open the Properties window (right click the game in your Library->Properties), navigate to the _General_ tab and un-tick the _Enable the Steam Overlay while in-game_ checkbox.

#### Change Steams Update Behavior

SSE is still being updated by Bethesda (they only add Creation Club content). Whenever the game updates, the entire modding community goes silent for the next one or two weeks because some mods need to be updated to the latest game runtime version.

To ensure that Steam does not automatically updates the game for you, head over to the Properties window, navigate to the _Updates_ tab and change _Automatic updates_ to _Only update this game when I launch it_. You should also disable the Steam Cloud while you're at it.

#### Set the Game language to English

Just do it. This entire Modlist is in English and 99% of all mods you will find are also in English. I highly recommend playing the game in English and **I will not give support to people with a non-English game**.

Open the Steam Properties window, navigate to the _Language_ tab and select _English_ from the dropdown menu.

#### Clean Skyrim

I highly recommend uninstalling the game through Steam, deleting the game folder and reinstalling it. You should also clean up the `Skyrim Special Edition` folder in `Documents/My Games/`.

#### Start Skyrim

After you have done everything above and got a clean SSE installation ready, start the Launcher and open the _Options_ menu.

1. Click on _High_
2. Set the _Aspect Ratio_ and _Resolution_ to your monitor's native values
3. Set _Antialiasing_ to _Off_
4. Check _Windowed Mode_ and _Borderless_

Start the game and exit once you're in the main menu.

### Using Wabbajack

#### Preparations

Let's get to the actual installation. Grab the latest release from [here](https://github.com/jdsmith2816/rge/releases).

Download the release to a _working folder_. This folder **must not** be in a _common folders_ like your Desktop, Downloads or Program Files folder. It's best to create a Wabbajack folder near the root level of your drive like `C:/Wabbajack`.

Grab the latest release of Wabbajack from [here](https://github.com/wabbajack-tools/wabbajack/releases) and place the `Wabbajack.exe` file in the _working folder_.

#### Downloading and Installing

The download and installation process can take a very long time depending on your system specs. Wabbajack will calculate the amount of threads it will use at the start of the installation. To have the highest amount of threads and thus the fastest speed, it is advised to have the working folder on an SSD.

1. Open Wabbajack
2. Load the Modlist from Disk
3. Adjust the download and installation paths
4. Click the Go/Begin button
5. Wait for Wabbajack to finish

##### Problems with Wabbajack

There are a lot of different scenarios where Wabbajack will produce an error. I recommend re-running Wabbajack before posting anything. Wabbajack will continue where it left off so you loose no progress.

**Could not download x**:

If a mod updated and the old files got deleted, it is impossible to download them. In this case just wait till I update the Modlist.

**Wabbajack could not find my game folder**:

Wabbajack will not work with a pirated version of the game. If you own the game on Steam, go back to the [Pre-Installation](#pre-installation) step.

### Post-Installation

#### Copy Game Folder Files

Download the latest ENB Series from [here](http://enbdev.com/download_mod_tesskyrimse.htm) and copy `d3d11.dll` and `d3dcompiler_46e.dll` to your game folder.

Copy the all of the files from the `MO2/Game Folder Files` directory to your game folder.

## Updating

If this Modlist receives an update, check the Changelog before doing anything. Always backup your saves or start a new game after updating.

**Wabbajack will delete all files that are not part of the Modlist when updating!**

This means that any additional mods you have installed on top of the Modlist will be deleted. Your downloads folder will not be touched!

Updating is like installing. You only have to make sure that you select the same path and tick the _overwrite existing Modlist_ button.

## Important Mods you should know about

This section contains information about some of the most important mods in this setup. I made this section so end-users know exactly what mods change what and can read-up on stuff they find interesting as well as give props to the mod authors.

### Combat - Melee

We use The Ultimate Dodge Mod for all of our fancy dodging needs. [Wildcat](https://www.nexusmods.com/skyrimspecialedition/mods/1368) provides interesting mechanics such as timed blocking and attacks of opportunity to make melee combat interesting and somewhat challenging.

A heavily customized version of [Rogue-like Encounters](https://www.nexusmods.com/skyrimspecialedition/mods/23872) handles NPC AI, some new combat mechanics and a curated set of new monsters.

Links:

- [Rogue-like Encounters](https://www.nexusmods.com/skyrimspecialedition/mods/23872)
- [Wildcat - Combat of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/1368) by [EnaiSiaion](#enaisiaion)

### Combat - Archery

Can't have a setup without [AGO](https://www.nexusmods.com/skyrimspecialedition/mods/24296) and [Archery Tweaks](https://www.nexusmods.com/skyrimspecialedition/mods/13782)

Links:

- [Archery Gameplay Overhaul SE](https://www.nexusmods.com/skyrimspecialedition/mods/24296) by [DServant](https://www.nexusmods.com/users/10549885)
- [Archery Tweaks](https://www.nexusmods.com/skyrimspecialedition/mods/13782) by [Argonil](https://www.nexusmods.com/skyrimspecialedition/users/3424782)

### Combat - Magic

Instead of just grabbing [Apocalypse](https://www.nexusmods.com/skyrimspecialedition/mods/1090) and calling it a day, I have opted to _not include Apocalypse_. In its stead [Forgotten Magic Redone](https://www.nexusmods.com/skyrimspecialedition/mods/12711) and [Spell Siphon](https://www.nexusmods.com/skyrimspecialedition/mods/26627) are included.

Links:

- [Forgotten Magic Redone](https://www.nexusmods.com/skyrimspecialedition/mods/12711) by 3jiou and Sward66
- [Spell Siphon](https://www.nexusmods.com/skyrimspecialedition/mods/26627) by [Arctal](https://www.nexusmods.com/skyrimspecialedition/users/70172253)

### EnaiSiaion

While I opted to not use most of the vaunted enairim collection there are still some goodies included

Mods used:

- [Wintersun - Faiths of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/22506)
- [Growl - Werebeasts of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/31245)
- [Imperious - Races of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/1315)
- [Andromeda - Unique Standing Stones of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/14910)

### Skills, Perks and More

As you may have guessed from the [EnaiSiaion](#enaisiaion) section, I used a lot of those mods. Let's break it down:

[Wintersun](https://www.nexusmods.com/skyrimspecialedition/mods/22506) was probably one of the greatest mods released last year. The mod adds religion and worship.

Perk overhauls. Same with [Magic](#combat---magic), I normally always go [Ordinator](https://www.nexusmods.com/skyrimspecialedition/mods/1137) and nothing else. For this setup I used [SPERG](https://www.nexusmods.com/skyrimspecialedition/mods/14180). This perk mod is not as huge as Ordinator but makes every single perk choice feel impactful and allows you to easily use other perk mods along with it. In the future I'm thinking about using [Path of Sorcery](https://www.nexusmods.com/skyrimspecialedition/mods/6660) for the magic trees.

[Complete Crafting Overhaul Remastered](https://www.nexusmods.com/skyrimspecialedition/mods/28608) is in this setup.

If you are are into Spellblade, Arcane Archery, or just magery in general then [Spell Siphon](https://www.nexusmods.com/skyrimspecialedition/mods/26627) is probably the best thing you've never experienced before. Be sure to watch the tutorial video... it's worth it.

Werewolves are overhauled by [Growl](https://www.nexusmods.com/skyrimspecialedition/mods/31245) and [Curse of the Vampire](https://www.nexusmods.com/skyrimspecialedition/mods/10086) takes care of our bloody night friends.

[Imperious](https://www.nexusmods.com/skyrimspecialedition/mods/1315) is a great race overhaul that makes racial choice impactful.

[Shout](https://www.nexusmods.com/skyrimspecialedition/mods/12149) improves upon all the shouts in Skyrim in a fair and balanced way by cutting down the cooldown timer effects, thus allowing the player to use a host of shouts in innovative, devastating combinations.

[Andromeda](https://www.nexusmods.com/skyrimspecialedition/mods/14910) has no real alternative for me as it's a constant in all of my playthroughs.

Links:

- [Complete Crafting Overhaul Remastered](https://www.nexusmods.com/skyrimspecialedition/mods/28608) by [kryptopyr](https://www.nexusmods.com/skyrimspecialedition/users/4291352)
- [Wintersun - Faiths of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/22506) by [EnaiSiaion](#enaisiaion)
- [SPERG](https://www.nexusmods.com/skyrimspecialedition/mods/14180) by seorin
- [Growl - Werebeasts of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/31245) by [EnaiSiaion](#enaisiaion)
- [Curse of the Vampire](https://www.nexusmods.com/skyrimspecialedition/mods/10086) by [Tx12001](https://www.nexusmods.com/skyrimspecialedition/users/6995095)
- [Imperious](https://www.nexusmods.com/skyrimspecialedition/mods/1315) by [EnaiSiaion](#enaisiaion)
- [Shout](https://www.nexusmods.com/skyrimspecialedition/mods/12149) by [EdmondNoir](https://www.nexusmods.com/skyrimspecialedition/users/36563980)
- [Andromeda - Unique Standing Stones of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/14910) by [EnaiSiaion](#enaisiaion)

### NPC Retextures

The start makes [Superior Lore-Friendly Hair](https://www.nexusmods.com/skyrim/mods/36510). It's a small but highly effective mod. I love the work of [Pandorable](https://www.nexusmods.com/skyrimspecialedition/users/41216925) and used [Pandorable's NPCs](https://www.nexusmods.com/skyrimspecialedition/mods/19012), [Pandorable's NPCs - Dragonborn](https://www.nexusmods.com/skyrimspecialedition/mods/30680) and [Pandorable's NPCs - Dawnguard](https://www.nexusmods.com/skyrimspecialedition/mods/24135) as my goto NPC retextures.

The Bijin lineup with [Bijin Wives](https://www.nexusmods.com/skyrimspecialedition/mods/11247), [Bijin NPCs](https://www.nexusmods.com/skyrimspecialedition/mods/11287) and [Bijin Warmaidens](https://www.nexusmods.com/skyrimspecialedition/mods/1825) fills the gaps that Pandorable's mods leave.

[The Men of Winter](https://www.nexusmods.com/skyrimspecialedition/mods/10902) retextures some Men in Skyrim. I handpicked NPS from [The Ordinary Women](https://www.nexusmods.com/skyrimspecialedition/mods/12376) and [Kalilies NPCs](https://www.nexusmods.com/skyrimspecialedition/mods/30247). The rest is covered by [Diversity](https://www.nexusmods.com/skyrimspecialedition/mods/5291) and [Fresh Faces](https://www.nexusmods.com/skyrimspecialedition/mods/13789). [Ethereal Elven Overhaul](https://www.nexusmods.com/skyrim/mods/24273) is the base for all elves.

The priority looks like this (similar to MO2, the ones at the bottom overwrites the ones at the top):

1. Ethereal Elven Overhaul
2. Fresh Faces
3. Diversity
4. Kalilies NPCs
5. The Ordinary Women
6. The Men of Winter
7. Bijin Wives
8. Bijin NPCs
9. Bijin Warmaidens
10. Pandorable's NPCs - Dragonborn
11. Pandorable's NPCs - Dawnguard
12. Pandorable's NPCs

[Modest Elderly](https://www.nexusmods.com/skyrimspecialedition/mods/7935) protects the elders since I hope none of us wants to see that.

Links:

- [Superior Lore-Friendly Hair - HD textures](https://www.nexusmods.com/skyrim/mods/36510) by [skyrimaguas](https://www.nexusmods.com/skyrim/users/6256260)
- [Pandorable's NPCs](https://www.nexusmods.com/skyrimspecialedition/mods/19012) by [Pandorable](https://www.nexusmods.com/users/41216925)
- [Pandorable's NPCs - Dragonborn](https://www.nexusmods.com/skyrimspecialedition/mods/30680) by [Pandorable](https://www.nexusmods.com/users/41216925)
- [Pandorable's NPCs - Dawnguard](https://www.nexusmods.com/skyrimspecialedition/mods/24135) by [Pandorable](https://www.nexusmods.com/users/41216925)
- [Bijin Wives SE](https://www.nexusmods.com/skyrimspecialedition/mods/11247) by [rxkx22](https://www.nexusmods.com/users/2650523)
- [Bijin NPCs SE](https://www.nexusmods.com/skyrimspecialedition/mods/11287) by [rxkx22](https://www.nexusmods.com/users/2650523)
- [Bijin Warmaidens SE](https://www.nexusmods.com/skyrimspecialedition/mods/1825) by [rxkx22](https://www.nexusmods.com/users/2650523)
- [The Men of Winter SSE](https://www.nexusmods.com/skyrimspecialedition/mods/10902) by [SetteLisette](https://www.nexusmods.com/users/21521784)
- [The Ordinary Women SSE](https://www.nexusmods.com/skyrimspecialedition/mods/12376) by [northtexan95](https://www.nexusmods.com/users/1622111)
- [Kalilies NPCs](https://www.nexusmods.com/skyrimspecialedition/mods/30247) by [Kalilies](https://www.nexusmods.com/users/4559665)
- [Diversity - A Character Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/5291) by [NEVERMOREPJM](https://www.nexusmods.com/users/8493929)
- [Fresh Faces](https://www.nexusmods.com/skyrimspecialedition/mods/13789) by [Plooshy](https://www.nexusmods.com/users/2469823)
- [Ethereal Elven Overhaul](https://www.nexusmods.com/skyrim/mods/24273) original by [nuska](https://www.nexusmods.com/users/675468), patched by [AngelTrump](https://www.nexusmods.com/users/39775535)
- [Modest Elderly](https://www.nexusmods.com/skyrimspecialedition/mods/7935) by [JohnnyCabb](https://www.nexusmods.com/users/9361073)

## Creating your Character

Using [RaceMenu](https://www.nexusmods.com/skyrimspecialedition/mods/19080) you can create a stunning looking character.

## In-Game MCM Options

Once you're finally in-game, have created your character and want to go play Skyrim, you first need to configure the MCM. **Wait until no new messages appear in the top left corner!**

If you get no more messages, save the game and open the MCM.

I recommend configuring ALL of your MCM menus EXCEPT Skyrim Unbound. At this point open the console by pressing the grave ( ` ) key and typing 'save configured' Assuming you haven't made load order changes that break your saves then the next time you start a new character you can, from the main menu, open the console and type 'load configured' to start a new character without having to do all your MCM choices again...

If it's not listed below then either the defaults are good enough (TUDM stamina costs for instance) or it's totally up to user preference. Work through all of the menus mentioend below while additionally customizing anything else as you see fit. Once that's done open up the 'Skyrim Unbound' MCM menu to choose your starting options...

I highly recommend against a non-dragonborn playthrough if you're wanting to experience all of the GAT + Hyrule content.

Either click 'Begin Your Adventure' or close the MCM menus and hit the 'enter' key to begin character creation.

### AGO

**Settings**:

Enable/Disable

_Persistent Arrows_ - `Disabled`

### Cathedral Weathers

- configuration spell off

### Complete Crafting

- Learning & XP
  - Alternate Experience Formula
    - Use Alternate XP Formula [X]
- Mining & Materials
  - Mining
    - Mining Presets - Faster Mining
    - Mining Makes Noise [X]
- Miscellaneous
  - Unarmed Attack Bonus
    - Fists of Steel - Light [X]

### Expanded Towns

- Settings
  - Fortification Walls
    - Dawnstar [X]
    - Falkreath [X]
    - Morthal [X]
    - Winterhold [X]

### Extended UI

- Stats Menu
  - Hide Legendary UI elements [X]
  - Show attribute modifiers [X]
  - Show skill modifiers [X]

### Follower Framework

- System

  - Load from File

  - Hotkeyed Abilities
    - Customize as you wish

### Lock Overhaul

- Activate Lock Overhaul
- Close MCM

- General

  - General Settings
    - Allow increasing skill [X]
    - Enable the sound effect [X]
    - Enable Crime [X]

- Lock Requirement

  - Activate Lock Requirements [X]

- Smash Locks

  - Activate Smash Locks [X]
  - Allowed Weapons - Two + One Handed

- Unlock with Magic
  - Enable Unlock Spell [X]

#### Lucien

- Configuration
  - Customizzation
    - Player Name
      If you choose a name from this list then Luciean will speak it aloud when addressing you in game.

### Quick Light

- Brightness - Bright

### Sky UI

- Advanced
  - SWF Version Checking
  - Map Menu [ ]

### SPERG

- General
  - Preferences
    - Enable Salvage [ ]
    - Quest Rewards - Main Quests
    - Alternate Advancement - Staff Leveling [X]

### The Ultimate Dodge Mod

- Sneak Key - Left Control
- NPC Dodging Frequency - Not Frequent

#### Wildcat

- Injuries
  - Disable Injuries
- Attacks of Opportunity
  - Disable Penalties vs Massive Targets
- Difficulty
  - Allow Wildcat to Manage Difficulty

### Ye Olde Hybrid Loot

- Disable it if you don't want it

### Skyrim Unbound

- Main

  - Dragons and Shouts
    - Dragons - Timed Delay
    - Dragon Souls - Dragonborn
  - Special

    - Additional Options

      - Notifications About Dragons [X]

## Getting Started in Game

The Relics of Hyrule content is very much explore and figure it out. There are no quests and markers to lead you on your way. Keep an eye and an ear open for glowing fairies and tinkling noises as those mark most locations of Hyrule content. You can find an initial piece of content in Riverwood near the bridge that Faendal walks over to start chopping wood.

The GAT content is woven into the main game. The imperial forces will be contesting you for everything including alot of the Hyrule content. At some point you will want to join the Chiss Resistance. While there are many ways to do this an easy one is to head towards BFB and stop at Riverwood's Folly to chat with the resistance members there about joining. I advise against doing BFB until you've joined the resistance and completed their first faction quest 'Morki's Dark Thoughts'

Once the GAT content starts in force you might want to keep a companion or two with you as it's balanced around a squad. All vanilla followers have been significantly upgraded via 'Special Edition Followers'. Additionally I've included a funny old wizard 'Benjamin Doon', a nordic battle maid 'Danika', a vampire lord 'The Pale Lord', an awesome lich 'Daanik', our favorite blue cat Inigo and last but not least Lucien. GAT itself comes with a LARGE number of followers that you can recruit into your squad as well.

As configured by default your sneak key is ctrl, your dodge key is space and your shift key is jump. If you want to change this then go into the MAIN settings then controls then set the SNEAK key to whatever you want your DODGE to be. Then setup your jump to whever it should be. Finally go into the MCM and 'The Ultimate Dodge Mod' section and set the sneak key to whatever you want to actually sneak with.

Spell Siphon is included in this modlist. It's an amazing way to play any mage/spellsword/arcane archer type character but it takes a bit of getting used to. If you want to make use of this feature then read the 'Spell Siphon' book in your inventory to kick things off. The mod page has a fairly decent tutorial video on it as well. The payoff is huuuuuge.

Have fun!

## Adding more Mods

### Textures

Textures are by far the easiest mods to install. Simply install the mod and check what other mod also changes the same textures in MO2. The only textures that could be problematic are landscape/environment textures like new mountain textures.

### Meshes

Similar to [Textures](#textures) just slap them into MO2. Just be careful that those new meshes are for outfits as those should be compatible with the character body of this setup (see [Character Mods](#character-mods)).

#### Animations

Simply install the new animations and re-run Nemesis. You might want to take a look at [Nemesis PCEA](https://www.nexusmods.com/skyrimspecialedition/mods/31667) if you want those new animations to be player exclusive.

### ENB

The weather mod used in this Modlist is [Cathedral Weathers and Seasons](https://www.nexusmods.com/skyrimspecialedition/mods/24791) and the lighting mod is [Enhanced Lights and FX](https://www.nexusmods.com/skyrimspecialedition/mods/2424). If you want to swap out the ENB, make sure that it is compatible with Cathedral Weathers and looks somewhat decent with ELFX. You could try and swap the those two mods with any other weather + lighting mod but this may disrupt the visual consistency that the entire Cathedral lineup has.

Other ENBs you can use (not tested, experience may vary):

ENBs that work with Cathedral Weathers:

- [Silent Horizon](https://www.nexusmods.com/skyrimspecialedition/mods/21543)
- [Ljoss - Semi-realistic performance preset with Nighteye and ENB Light support](https://www.nexusmods.com/skyrimspecialedition/mods/30971)

ENBs that maybe work with Cathedral Weathers:

- [Rudy ENB](https://www.nexusmods.com/skyrimspecialedition/mods/4796)
- [NVT](https://www.nexusmods.com/skyrimspecialedition/mods/11203)
- [PRT](https://www.nexusmods.com/skyrimspecialedition/mods/4743)
- [Apex](https://www.nexusmods.com/skyrimspecialedition/mods/18042)

## Tweaking Performance

My Setup:

- Ryzen 7 1700
- 1080TI 11GB
- 16GB DDR4-3200 RAM
- Game and MO2 running on an SSD

### Tweaking the ENB

This should always be the first thing you tweak. Disabling the ENB entirely can give you anything from 20 to >70 FPS. The ENB this Modlist comes with is rather performance friendly. Open the ENB GUI using `Right Shift + Enter` (`Right Shift` is under the `Enter` key). This will open up the ENB GUI where you can enable and disable certain effects in the left panel.

- `Bloom`: Can give you up to 3 FPS, will make light sources less bright
- `DepthOfField`: Can give you up to 10 FPS, disabled by default and not really suited for gameplay
- `Ambient Occlusion`: This one is a big hitter. You can get up to 20 FPS by disabling this but the effect is very noticeable
- `Distant/DetailedShadow`: Those two can really give you a lot of FPS back depending on your shader settings (game settings). They are very noticeable.
- `ComplexFire/ParticleLights`: You won't see a lot of difference at first when disabling those two, but when particles are on screen (eg using magic or near light sources such as fires), they can _burn_ through your FPS

### Tweaking the Game Settings

I highly recommend using [BethINI](https://www.nexusmods.com/skyrimspecialedition/mods/4875) which is included in this Modlist (can be found in `MO2/tools/BethINI`). I recommend tweaking the `Detail` section for more FPS:

- `Shadow Resolution`: Very big one. A good balance is `2048` which is the borderline between high FPS drainage and garbage looking shadows.
- `Ambient Occlusion`: Highly recommended to leave this at `None`. The ENB this Modlist comes with, uses the ENB SAO which is 10x better and performance friendly than base game SAO.
- `Detailed Draw Distance`: Maybe try `2000` instead of `2800` but you won't notice a lot of FPS gain (maybe 1-3)
- `Remove Shadows`: If you really struggle, use this. This will disable all Shadows (not recommended)

## Removing the Modlist

You can just remove the MO2 folder and be done with it. SKSE and ENB files will still be in your game folder so I recommend using [ENB and ReShade Manager](https://www.nexusmods.com/skyrimspecialedition/mods/4143) if you want to remove the ENB.

## Contact

I'm always available on the [Wabbajack Discord](https://discord.gg/wabbajack).
