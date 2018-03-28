# Stomp Box
Manage a (rock) band 🎸.

## Goals
1. write songs
2. rehearse and jam
3. perform at bars/malls/festivals
4. record EPs and albums
5. go on tour
6. resist/prevent (too much):
    * drugs
    * alcohol
    * STD infected groupies
    * lawsuits
    * bad press
    * depression / suicidal thoughts

## Mechanics
Turn based: choose what each band member does each turn (day). Ending a turn has a chance of triggering a random event.

## Actions
A band member can:

* make money by working (early game only)
* write songs (lyrics or riffs/licks)
* practice skills
* idle/rest
* party

The band can:

* rehearse songs
* jam (to create/refine songs)
* perform a setlist
* travel (when a gig is out of town)
* record music (in a studio)
* marketing (talk to press / visit talk shows)

## Band

### Properties

* name
* funds
* time active (turns)
* cohesion (0..100) (determines how well the band plays together)

## Band members

### Properties

* name
* instrument (guitar, bass, keys, drums)
* inspiration (0..100)
* focus (0..100)
* mood (0..100)

### Attributes

* creativity (0..5) (determines quality of lyrics/riffs)
* dexterity (0..5) (max skill level (less for drums))
* rhythm (0..5) (playing on the beat)
* vocals (0..5) (determines singing skill)
* looks (0..5) (sex sells)

## Songs

### Properties

* name
* reception (0..100) (determines how much people like it)

### Attributes

* virtuosity (0..5) (simple/complex, determines required skill level and limits audience)
* originality (0..5) (not original is not necessarily bad, familiarity sells)
* variety (0..5) (dull or surprising)

## Resources

* [Glossary of Common Terms Used by Working Musicians](https://spinditty.com/industry/Glossary-of-Common-Terms-Used-by-Working-Musicians)
