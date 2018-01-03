# Chapter 10. Maps and Sets  

## Maps  
Function: map keys to values  

### Why not objects  
+ unintentional mapping  
+ no easy query of number of entries  
+ keys must be strings or symbols  
+ properties isn't ordered  

### Interfaces  

method | purpose
------:|:-------
constructor | empty, or a 2D array
`set`  | *chainable*, change (add/update) value for a specific key
`has`  | check existence of keys
`size` | number of entries, is a property
`keys` | key set of map
`values` | value set of map
`entries` | array of `(key,value)` entries
`delete` | delete entry from map according to the given key
`clear`  | empty the map

## Weak Map  
+ identical to `Map` except:
  - keys must be objects  
  - keys can be garbage-collected  
  - non-iterable or non-clearable  

## Set  
> **Definition**: A set is a collection of data where duplicates are not allowed  

## Interfaces  

method | purpose
------:|:-------
`add`  | add an element
`size` | number of elements, is a property
`delete` | remove an element

## Weak Set  
+ identical to `Set` except:
  - keys must be objects  
  - keys can be garbage-collected  
  - non-iterable or non-clearable  

> the only use for weak sets is to check the existence  of a given object  

## Breaking the Object Habit  
