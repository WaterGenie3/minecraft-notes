---
sidebar_position: 3
pagination_prev: null
pagination_next: null
description: Collection of in-game data and verification.
---

# Data & Verification

## Pack Spawning Skirt

### Wither Skeleton

The setup ([world download](https://drive.google.com/file/d/1eQfkj7J5XNqkEV4LYRmQPd5PSt73jzCN/view?usp=sharing)):

- Carpet `/spawn tracking` after `tick sprint 30d` (10h)
- [Spawn forcer](https://github.com/WaterGenie3/spawn-forcer) mod with `fixedBottomY true` and `chunkBottomY 49` and `spreadJump true`
- Normal skirt has +1 to y from where they should ideally be so that the heightmap is the same when comparing with nether bricks (n-brick) that will have an extra y level on top for a spawn-proofing block

| Setup | Skirt | Spawns/hour |
| :-: | :-- | --: |
| A | 0 | 1,363 |
| B | \<=5 normal top-floor | 10,835 |
| C | \<=6+ normal top-floor | 10,771 |
| D | \<=5 n-brick top-floor | 13,821 |
| E | \<=5 n-brick all-floor | 16,760 |
| F | \<=20 n-brick all-floor | 30,117 |
| G | \<=20 n-brick all-floor, 21-25 normal top-floor | 30,385 |
| H | \<=25 n-brick all-floor | 30,384 |

- Setup B and C getting the same results show that the skirt outside of the structure/biome only maxes out at 5 blocks chebyshev in general (witch, guardians, etc.), and that the outside skirt benefit also applies to fortress.
- Setup D show an increase compared to B because it also allows inside starting point with outside first jump to still be a fortress mob instead of an outside mob.
- Setup D and E show the benefit from lining all floors.
- Setup G show an increase compared to F because wither skeleton with pack size 5 can have a starting point at 21-25, with first jump in 16-20, and still get into the farm with the remaining jumps.
- Setup H shows that this maxes out at G because any first jump at 21-25 nether brick will be too far to get into the farm.

Note that the \<=20 n-brick all-floor in setup D to H is further limited to within the full fortress bounding box.  
E.g. if on one side, \<=20 is still in the full bounding box, then the maximum would be setup G on that side. And if on another side, the full bounding box goes 14 blocks out, then the maximum would be \<=14 n-brick all-floor and 15-19 normal top-floor on that side.
