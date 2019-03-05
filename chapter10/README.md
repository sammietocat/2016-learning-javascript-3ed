# Chapter 10. Maps and Sets

## Maps

- Function: map **keys** to **values**

### Why not objects

- Unintentional mapping
- No easy way to query the number of entries
- Keys must be strings or symbols
- Properties isn't ordered

### Interfaces

|          method | purpose                                                                                 |
| --------------: | :-------------------------------------------------------------------------------------- |
|     constructor | empty, or a 2D array (demo as `map/constructor.js`)                                     |
|           `set` | _chainable_, change (add/update) value for a specific key (demo as `map/set.js`)        |
|           `get` | return the value (`undefined` for missing key) for the given key (demo as `map/get.js`) |
|           `has` | check existence of keys (`map/has.js`)                                                  |
|          `size` | number of entries, is a property (demo as `map/size.js`)                                |
| `keys`/`values` | key/value set of map (demo as `map/keys-values.js`)                                     |
|       `entries` | array of `[key, value]` entries (demo as `map/entries.js`)                              |
|        `delete` | delete entry from map according to the given key (demo as `map/delete.js`)              |
|         `clear` | empty the map (demo as `map/clear.js`)                                                  |

## Weak Map

- Identical to `Map` except:
  - Keys must be objects
  - Keys can be garbage-collected
  - Non-iterable or non-clearable

(demo as `weakmap.js`)

## Set

> **DEFINITION**: A collection of data where **duplicates are not allowed**

## Interfaces

|   method | purpose                           |
| -------: | :-------------------------------- |
|    `add` | add an element                    |
|   `size` | number of elements, is a property |
| `delete` | remove an element                 |

(demo as `set.js`)

## Weak Set

- Identical to `Set` except:
  - Keys must be objects
  - Keys can be garbage-collected
  - Non-iterable or non-clearable

> The only use for weak sets is to check the existence of a given object

(demo as `weakset.js`)

## Breaking the Object Habit

Distinguish between `Map`/`Set` and object, never use object to simulate `Map`/`Set`
