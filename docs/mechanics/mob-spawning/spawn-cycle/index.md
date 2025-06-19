---
pagination_prev: null
pagination_next: null
---
import DocCardList from '@theme/DocCardList';

# Spawn Cycle

## Spawning Chunks

Each tick, if the `doMobSpawning` gamerule is on,
chunks that meet the following condition will start the spawning process:

- Entity ticking, and
- Fully contained inside the world border, and
- Centre (chunk coordinate (8,8)) is less than 128 horizontal euclidean distance away from a player

I'll call these "spawning chunks".

## Mob Groups

In each spawning chunk, the spawning process will run for each mob group that are:

- Below their mobcap at the respective chunk, and
- Creature group if the current time is a multiple of 400

I'll call these "spawning groups".

## Starting Point

In each spawning chunk and for each spawning group, pick a coordinate where:

- x and z are uniformly distributed between 0 and 15 chunk coordinates
- y is uniformly distributed between the bottom of the world and (the highest block at the chosen x and z coordinate) + 1
  - The bottom of the world is -64 for the overworld and 0 for the nether and end.
  - The highest block is also referred to as the "heightmap".

I'll call this the "starting point".

If the starting point is a "solid block", the spawning process for this group in this chunk ends.  
"Solid" here means the block at the starting point has a full cube collision shape, except:

- Glass, all stained glasses, tinted glass, all leaves, normal and frosted ice, powder snow, glowstone, sea lantern, beacon, copper grate, copper bulb, piston, tnt, redstone block, and observer
  - These blocks have full cube collision shape, but **don't count** as "solid" within this context.
- Soul sand and mud
  - These blocks don't have full cube collision shape, but **count** as "solid" within this context.

From the starting point, 3 pack spawning attempts will be made.  
The spawning process for this group in this chunk will end after all 3 pack spawn attempts end, or the number of mobs spawned across all 3 attempts (regardless of which chunks they end up in or which mob types they are) is equal to or greater than 4.

## Pack Spawns

In each pack spawn from a starting point, pick an initial number of "jumps" uniformly between 1 and 4.  
A jump is defined by adding a triangularly distributed number between -5 and 5 to the previous x and z coordinates, starting from the starting point.  

The first jump that lands in a position that meet the following conditions will start picking a mob type:

- The position is greater than 24 euclidean distance away from the closest player, and
- The position shifted to the middle centre bottom is greater than or equal to 24 euclidean distance away from the world spawn point, and
- The position is in the same chunk as the starting point or (the position is in an entity ticking chunk that is fully contained inside the world border)
  - This does not have to have its centre less than 128 horizontal euclidean distance like the spawning chunks the starting point is in.

I'll call this a "valid" jump.

If none of the initial jumps are valid, the pack spawn attempt ends.  
If a jump is valid, a mob is sampled from the spawning pool of the structure/biome at that position, and a pack size is picked uniformly between the minimum and maximum pack size for that mob in that structure/biome.  
However, if the first valid jump is inside the full fortress bounding box and the block below is a nether brick, the mob will also be sampled from the fortress spawning pool.

After picking a mob and pack size, it will check the spawning conditions for that mob at that position and try to spawn there, then continue to jump for the remaining chosen pack size to spawn that mob for the rest of the pack, counting the number of initial jumps it took to get here.

The jumps continue until the pack size regardless of whether or not any of the previous jumps succeeded in actually spawning the mob.

<details>
  <summary>Examples</summary>

  **1:**  
  It picked 2 initial jumps, and all 2 jumps from the starting position are not valid. The pack spawn ends.

  **2:**  
  It randomly picked 3 initial jumps, the 2nd jump is the first valid jump, and it picked a mob with minimum and maximum pack size 2-4. Then it picked pack size 3, tries to spawn the mob at the 2nd jump, and only jump 1 more time because 2 jumps has already been made.

  **3:**  
  Like example 2, but the 1st jump is valid. Then after trying to spawn the mob at the 1st jump, it will jump 2 more times.
</details>

I.e. in each pack spawn, the structure/biome at the first valid jump determines the mob and pack size for that pack.  
From each starting point, there could be up to 3 different mob types if all 3 pack spawn attempts sampled different mobs at their respective first valid jumps.

<DocCardList />
