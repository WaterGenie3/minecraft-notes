---
sidebar_position: 1
slug: /
pagination_prev: null
pagination_next: null
---

# About

Just my personal notes on the Java edition of Minecraft :)  
My main goal is to understand the mechanics/how things work.  
The topics and scopes will still be limited to what interests me personally.

This website is generated using [Docusaurus](https://docusaurus.io/) and
hosted on [GitHub](https://pages.github.com/).

## Contact

For errors, issues, questions, comments, help, etc. regarding this website or anything in it,  
feel free to post them [here](https://github.com/WaterGenie3/minecraft-notes/issues/new)
<small>(requires a GitHub account)</small> :)

For everything else or no GitHub account, contact me via any of the following:

- [Reddit](https://www.reddit.com/user/WaterGenie3/)
- [YouTube](https://www.youtube.com/@WaterGenie3)

## Philosophy

I'll try to follow these principles with anything I put on here.

### Testable

Minecraft changes a lot over time and information can become inaccurate or no longer correct.  
This also goes for anything I put in these notes.

So everything should be verifiable on any versions it applies to,
and falsifiable at any versions beyond that.

### Reproducible

Tests should be reproducible within a reasonable effort and timeframe.  
The tools used in the test should also follow this priority list:

1. Survival-compatible
2. Creative-compatible
3. Commands
4. Datapacks
5. Open-source mods

Everything above 4. can be bundled into a world download, so they are heavily preferred.  
Mods prompt more trusts from the user, so it should also be open-source so their content are also readily testable.

My main focus is also not necessarily about any particular instance of a test setup
and more about demonstrating testability and reproducibility so that mechanics can be readily:

* Verified on the versions they are applicable to, and
* Falsified on the versions they are not applicable to.

### Tracable to Code

Java Minecraft is not a blackbox and decompiled source code is an extremely valuable and absolute resource.  
I'll read and refer to them liberally,
but tracibility does not exempt them from testability.

Expect no semantic information from the original code
and that syntaxes can be re-arranged/optimised at any point between the compilation
and decompilation process. E.g.
* Magic values could've been an expression
* Odd design choices could've had a document/comment/bug report justifying them

### Simplify

- Don't over-complicate
- Know what details to leave/factor out
- Be as simple as is necessary to explain
