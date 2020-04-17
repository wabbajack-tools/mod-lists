[Back to Main Documentation](https://github.com/wabbajack-tools/mod-lists/blob/master/rge/readme.md#Customization)

## Customization

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
