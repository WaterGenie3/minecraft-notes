---
title: Vanilla Base Game != Vanilla Spirit of the Game
authors: [watergenie3]
tags: [misc, rant]
date: 2025-06-18T00:01
---

Why I make a distinction between the vanilla base game and the vanilla spirit of the game.
<!-- truncate -->

When playing, anyone can draw a line anywhere they want.  
For me, I rely on mechanics in the vanilla base game sometimes, but I personally want to lean more towards the vanilla spirit of the game.

This distinction also appears in speedrun categories where the main category would typically be some established ruleset over the vanilla base game while a glitchless category could be that same ruleset plus additional bans on some of the glitches. I think these glitchless categories follow the vanilla spirit of the game more closely compared to the vanilla base game.  
That said, I'm not a speedrunner in any game whatsoever, so I don't know how accurate this comparison is XD

### Bugs / "Work as Intended" (WAI)

Whether a bug is still in the game or re-added due to pressure from the community,
these are mechanics that are part of the vanilla base game.  
But just because it's in the vanilla base game doesn't mean that it follows the vanilla spirit of the game.

This category includes all the classics like sand/tnt/string/rail-duping, qc, F3+T, and the more recent fix to diagonal movement and nether portal hitbox that got reverted, etc.

All these tiny little details, among other things, sum up to the quirks and charms of minecraft,
and I think is a key part of what makes the game so unique and endearing.  
But that is besides the point of vanilla-ness T-T

In this category of mechanics, I do think that mods that change/patch them and/or introduce replacements for them follows the vanilla spirit of the game more closely than the vanilla base game itself.

For instance, there have been expressed intents on replacing sand/tnt-duping,
but the base game has the disadvantage of having to manage every other aspects of game development,
community reception, version parity, etc.
while string/rail-duping are readily patched since they are already renewable resources.  
In this example, the spirit of the game I think is in having ways for player to gather sand and tnt renewably and the vanilla base game just didn't have another option yet besides the dupe,
so I see mods that fixes them and/or introduces vanilla-like mechanics as following this vanilla spirit more closely.

### Ineffective Changes

Another class of mechanics is when changes that are being made aren't working as intended.
The result of this change could result in unforeseen / unintended side-effects,
or not even result in any observable change in in-game behaviours at all.

The only example I have of this is stray spawning that I came across accidentally.  
When powder snow was introduced in 1.17, stray spawning condition,
which would normally check if the spawning block has sky light 15, now checks the skylight at the top-most consecutive powder snow starting from 1 block above the spawning block:

```java title="StrayEntity::canSpawn"
do {
    blockPos = blockPos.up();
} while (world.getBlockState(blockPos).isOf(Blocks.POWDER_SNOW));

return canSpawnInDark(type, world, spawnReason, pos, random) && (
    SpawnReason.isAnySpawner(spawnReason) || world.isSkyVisible(blockPos.down())
);
```

This is odd because it leaves a gap at the spawning block (foot level)
and starts looking at consecutive powder snow upward starting from the head level.  
The checks also always fail because the top-most consecutive powder snow reduces skylight by 1,
so this change didn't allow spawning when there's powder snow anywhere above the spawning block.  
And without this change, it won't allow spawning anyway when there's powder snow anywhere above the spawning block. I.e. it's ineffective.

They are also modified to allow spawning inside powder snow. But this is where I think I'll try to switch to mojang mapping when reading the code from now on just to get as much intent and semantics information as I can rather than relying on interpreted mappings. I'll still be using and referring to fabric mappings because I don't really understand all the licensing implications otherwise.

But if I understood their intent correctly, we can change it to:

```java title="StrayEntity::canSpawn"
while (world.getBlockState(blockPos).isOf(Blocks.POWDER_SNOW)) {
    blockPos = blockPos.up();
}

return /*...*/ world.isSkyVisible(blockPos) /*...*/;
```

This now checks the sky light at the block above the top-most consecutive powder snow starting from the spawning block (allows spawning in and under).  
Personally, I'd only allow it spawning in just 1-deep powder snow because when taking terrain generation into account when there're already deep powder snow hazards, finding a surprise stray inside would be rather odd. The head will also still be visible if we only allow 1-deep.

In this case, the vanilla spirit of the game is simply not present at all in the vanilla base game.  
So we can follow the vanilla spirit of the game more closely with mods that addresses this category of mechanics in vanilla-like ways (up to interpretations), or wait for a future vanilla base game version.

### Coincidental Details

Suppose the intended mechanic is that *mobs can occasionally wander around randomly* (wandering mechanic).  
In implementing this, the horizontal and vertical chebyshev radii are set to 10 and 7 respectively, and the chance of starting wandering is set to 1/60, evaluated every 2 gt, working out to every 6 seconds on average.

Unless otherwise explicitly mentioned somewhere, I'd call any of these coincidental details.  
The distance could've been 12 and 8, the chance could've been 1/50. These could've been any number within a reasonable range given the logic they went for, and those logic could've been different, the distance could've been euclidean, the mob AI could've ran every gt or every 3 gt instead, etc.

When we consider any of these details, I think saying *any* of the following is not meaningful with respect to the wandering mechanic:
 - The horizontal wandering distance is intended to go 10 blocks out
 - The horizontal wandering distance is intended to go 12 blocks out
 - Any other variations of the above

and that *any* of the following is vacuous:
 - The horizontal wandering distance is not intended to go 11+ blocks out
 - The horizontal wandering distance is not intended to go 13+ blocks out
 - Any other variations of the above

There might be a designer that intentionally came up with these details at some point, and a developer must at some point intentionally put them into the code. But the design intention behind this wandering mechanic that led to the designer/coder's intention to design/code have different subjects.

> My intention to get to the airport via taxi leads to the driver's intention to drive to the airport.  
> But that doesn't mean that I intend to drive to the airport.  
> And saying I *don't* intend to drive to the airport is vacuous
> in the same way that it is vacuous to say that I don't intend to drive back home, or any other variations.

I.e. coincidental != intentional.

Going back to the original topic, my point would then be that these coincidental details are all part of the vanilla base game. But that doesn't necessarily mean that they are also an intentional part of the vanilla spirit of the game.

---

That's why I mostly consider most of gnembon's carpet mod to be closer than the vanilla spirit of the game compared to the vanilla base game.  
It is not a vanilla base game because it's a mod. But one of its goal is to address the short-comings and bugs to be more in line with the vanilla spirit of the game, and it has achieved that really well.
