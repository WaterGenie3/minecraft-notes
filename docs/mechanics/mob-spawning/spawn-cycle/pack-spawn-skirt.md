---
sidebar_position: 2
pagination_prev: null
pagination_next: null
description: What a skirt is and how it works.
---

# Pack Spawning Skirt

A pack spawning skirt colloquially refers to a flat non-spawnable area outside of a mob farm built to create more starting points outside of the farm that can potentially have a pack spawning jump inside the farm to increase the spawn rates.

Since the y level of the starting point is uniformly picked between the world bottom and the heightmap + 1, a skirt lining up with the y level of the top-most spawning floor is the lowest y level for which we can have a starting point anywhere between the world bottom and the top-most spawning floor + 1.

All potential starting points should not have a "solid" block as defined in the [starting point section](/mechanics/mob-spawning/spawn-cycle#starting-point). This is typically left as air.


## Structure/Biome

For skirts that are **inside** the same type of structure/biome as the farm, the maximum skirt size is then 5 times the maximum pack size of the mob we intend to farm in that structure/biome. This distance is chebyshev.

<details>
  <summary>Examples</summary>

  For a mob with maximum pack size 4, a skirt maxes out at 20 blocks chebyshev because a starting point 20 blocks out can still make 4 5-block chebyshev jumps to get into the farm and try to spawn a mob in it.  
  A starting point 21 blocks out or more can no longer jump into the farm.
</details>

For skirts that are **outside** the structure/biome as the farm, the maximum skirt size is 5 blocks chebyshev (in general).   
This is because only the starting points that are at 5 or less chebyshev distance away can still have its first (valid) jump inside the structure/biome.  
This is not to do with the pack size of any of the mobs.

This is only related to which structure/biome mob pool the pack spawn will sample from. Whether or not the mob pool outside of the structure/biome mob pool of the farm is beneficial is a different point.  
E.g. the structure/biome can be different but still share a mob in their pools, so adding more outside first jumps can be considered.  
Or the structure/biome outside the farm contains mobs that is not desirable inside the farm, so adding more outside first jumps are undesirable.

This is also less to do with whether the farm is structure/biome-dependent, but more about whether the skirt shares the same structure/biome as the farm.

<details>
  <summary>Examples</summary>

  Skirts outside of swamp hut maxes out at 5 blocks chebyshev not because of the witch's pack size of 1, but because of the mechanic where the mob is picked at the first jump.

  Any skirts outside of the structure/biome of the farm maxes out at 5 blocks chebyshev for the same reason, e.g. for guardian even with pack size 4.

  In the above 2 cases, the skirt **inside** the structure/biome maxes out at 5 for witches due to their pack size, and 20 for guardians.

  Nether fortress also benefits from 5 blocks chebyshev for the same reason.  
  But because there's a special check to still sample the mob from a fortress pool if the first jump is inside the full fortress bounding box and is above a nether brick, more areas outside the inner bounding box can be treated as inside by lining them with nether bricks (i.e. at each floor).

  So with maximum pack size m, the minimum skirt for maximum number of first jumps with fortress pool is a 1 to 5(m-1) blocks chebyshev of nether bricks at every spawning floor, and 5(m-1)+1 to 5m blocks chebyshev of normal skirt at the top-most spawning floor.

  For blazes with maximum pack size of 3, this means 1-10 nether bricks at every floor and 11-15 normal skirt at the top floor.  
  For wither skeletons with maximum pack size of 5, this means 1-20 nether bricks at every floor and 21-25 normal skirt at the top floor.

  The 5(m-1)+1 to 5m skirt only have to allow a starting point that can then potentially have its first jump in 1 to 5(m-1) lined with nether bricks.  
  They don't have to be nether bricks themselves because any first jump landing there would not have enough remaining jump to get back into the farm.
</details>
