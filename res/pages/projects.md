in no particular order the following is my scrap heap of abandoned work that I have started and more than likely will
never finish. almost all of these will die alone in a private repo; never to see the light of open source. if you want
to steal one of these at least let me know? i'll even give you my source and design docs if you're cool about it.

# locker

there has been a constant issue with every game project i've worked on: git is phenomenal for programmers but sucks for
artists.

locker is a project designed to replicate a lot of what actually does work for artists from other version control
solutions. locker use the locking feature of git lfs to create workspaces that artists can pull binary files into.
honestly the fact that this still doesn't really exist annoys me.

- rust
- git
- git lfs
- a working knowledge of perforce
- spite

# this website

i wanted a website, so here it is

- html
- css
- minimal js because i hate it
- yaml
- templating

# coffee

i drink a ton of coffee, espresso especially, and i wanted a way to correlate coffees with the quality output of
different preparation methods.

neo4js, react

# cards

feature creep: the game

this project started from a realization that the initiative system in d&d could be better if it was reversed. let me
explain: instead of the highest roll going first, they go last, and actions don't resolve until the turn has ended. this
system allows for a few things d&d doesn't really have: counters and combos. by having actions added to a pile to
happen "later" a player can choose to respond that turn. this can create huge moments of a player clashing to block an
attack or giving another player a buff to dramatically increase the effectiveness of an attack.

i wanted to do everything in this project but it started with playing to my strengths: a small mobile unity project with
multiplayer backed by firebase.

where the feature creep really started rolling in was one night while playing jackbox. i realized "hey I could make this
a local play version of this". and so the demo began: i actually have a working demo where i can flick a card from my
phone to a tv with a chromecast! don't even need a console or pc!

man do i want to get back to this game one day but holy fuck is stitching all of this together going to be a trip. i can
probably say a shit ton more about this project so i may periodically update this. and if anyone wants to give me a few
million to build a team to make it right my contact page is over there -->

unity, firebase, chromecast, ios, android, js (ugh)

# cdk

somewhat affectionately named the capitalism development kit, this is a suite of fullstack tools for mobile, console,
and pc which fully automates (a lot of) the boring parts of making games: analytics, ad mediation, customer service,
some live ops, etc

the crux of the cdk is that it's "zero lines of code" to get up and running. i have used an oceanful of shitty sdks
which had initial integration times countable in hours. during the year i spent at onesignal i brought down the
integration time on the unity sdk to a few minutes. with the cdk we're talking like... maybe a minute?

rust, swift, kotlin, c++, open telemetry, open api, a fuckton of code gen tooling, hatred of bad documentation

# comment

a chrome plugin that lets you leave comments on any webpage. originally this came about because i wanted a way to leave
nasty (but true) comments about previous landlords on their zillow listings.

only ever existed as a google doc