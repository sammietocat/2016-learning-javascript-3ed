# Chapter 17. Regular Expressions

**Regular Expression** is abbreviated as **regex**, whose essential job is to match a substring within a string, and optionally replace it

## Substring Matching and Replacing

- Existence checking
- Case-insenitive matching by conversion to lowercase first
- Replacement by `String.prototype.replace`

(see `str-op.js`)

## Constructing Regular Expressions

- By `RegExp` constructor
- By **regex literals** set off with forward slashes (preferred)

```javascript
const re1 = /going/ // regex that can search for the word "going"
const re2 = new RegExp("going") // equivalent object constructor
```

## Searching with Regular Expressions

- Example: regex `/\w{3,}/ig` matches all words **three letters or longer** (**case insensitive**)

### Relevant methods

|   Method | Description                                 |
| -------: | :------------------------------------------ |
|  `match` | return an array of matching elements        |
| `search` | return the index of **1st** matched element |
|   `test` | check existence of regex                    |
|   `exec` | fetch next matched element                  |

(see `search.js`)

## Replacing with Regular Expressions

See `replace.js`

## Input Consumption

- Treat a regex as **a pattern for consuming input strings**
- The algorithm a regex employs when "consuming" a string
  - Strings are consumed from left to right
  - Consumed character are never revisited
  - If there is no match, the regex advances one character at a time attempting to find a match
  - If there is a match, the regex consumes all the characters in the match at once; matching continues with the next character

## Alternation

- The vertical bar (`|`) is a regex metacharacter that signals alternation
- `i` signifies to ignore case
- `g` signals global search. Without the `g`, only the first match would be returned

(see `alternation.js`)

## Matching HTML

- Regexes cannot parse HTML
- Limited in matching hierarchical structures

## Character Sets

- Character sets provide a compact way to represent alternation of **a single character**
- They support
  - **Range** specification
  - **Negation** by putting a caret (`^`) as the 1st character in the set

## Named Character Sets

| Character |   Equivalent   | Description                                             |
| --------: | :------------: | :------------------------------------------------------ |
|      `\d` |    `[0-9]`     |
|      `\D` |    `[^0-9]`    |
|      `\s` | `[ \t\v\n\r]`  | includes tabs, spaces, and vertical tabs.               |
|      `\S` | `[^ \t\v\n\r]` |
|      `\w` |  `[a-zA-Z_]`   | unsuitable for things like domain names and CSS classes |
|      `\W` |  `[^a-zA-Z_]`  |

- The negated character classes can be used to normalize phone numbers, etc
- `\S` to check there's data in the required fields

## Repetition

- Repetition metacharacters allow you to specify how many times something matches

| Repetition modifier | Description                                                       |
| ------------------: | :---------------------------------------------------------------- |
|               `{n}` | Exactly `n`                                                       |
|              `{n,}` | At least `n`                                                      |
|            `{n, m}` | At least `n`, at most `m`                                         |
|                 `?` | Zero or one. Equivalent to `{0,1}`                                |
|                 `*` | Zero or more (sometimes called a "Klene star" or "Klene closure") |
|                 `+` | One or more                                                       |

## The Period Metacharacter and Escaping

- The period is a special character that means "match anything" (**except newlines**)
- To escape any special regex character, simply prefix it with a backslash

(see `period-escaping.js`)

## A True Wildcard

Match any character including newlines: `[\s\S]`

## Grouping

- Grouping allows us to construct _subexpressions_, which can then be treated like a single unit
- Noncapturing groups is suitable for no need of group results
- Groups are specified by _parentheses_, and noncapturing groups look like `(?:<subexpression>)` (demo as `grouping1.js`)
- Another advantage of groups is that you can apply repetition to them (demo as `grouping2.js`)

## Lazy Matches, Greedy Matches

- Regular expressions, by default, are **greedy**, meaning they will match as much as possible before stopping
- We can make the repetition metacharacter (`*`) lazy by following it with a question mark

## Backreferences

- Each group (including subgroups) in a regex is assigned a number, from left to right, starting with 1
- Each group can be referred to with a backslash followed by a number
- Use case: match quotation marks

> All capturing groups are assigned a number starting with 1

see `backref.js`

## Replacing Groups

|                                symbol | meaning                    |
| ------------------------------------: | :------------------------- |
| **\$`** | everything before the match |
|                               **\$&** | the match itself           |
|                               **\$'** | everything after the match |
|                              **\$\$** | the literal `$`            |

see `replace-groups1.js`, `replace-groups2.js`,`replace-groups3.js`

## Function Replacements

- Pass a function `f` to `String.prototype.replace` as the replacement parameter, which allows you to take special action for each replacement, where signature of `f` goes as

| Possible name | Supplied value                                                                                                                                                                                                                                  |
| ------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       `match` | The matched substring. (Corresponds to \$& above.)                                                                                                                                                                                              |
|   `p1,p2,...` | The nth parenthesized submatch string, provided the first argument to `replace()` was a **RegExp** object. (Corresponds to `$1`, `$2`, etc. above.) For example, if `/(\a+)(\b+)/`, was given, `p1` is the match for `\a+`, and `p2` for `\b+`. |
|      `offset` | The offset of the matched substring within the whole string being examined. (For example, if the whole string was 'abcd', and the matched substring was 'bc', then this argument will be 1.)                                                    |
|      `string` | The whole string being examined.                                                                                                                                                                                                                |

- Use case: converts all `<a>` links into a very specific format: you want to preserve the class, id, and href attributes, but remove everything else. See `func-replace.js`

## Anchoring

| anchor | meaning                           |
| -----: | :-------------------------------- |
|    `^` | matches the beginning of the line |
|    `$` | matches the end of the line       |

demo as `anchor1.js`

> If you want to treat a string as **multiline** (as separated by newlines), you need to use the `m` (multiline) option (see `anchor2.js`)

## Word Boundary Matching

> A **word boundary** is defined where a `\w` match is either preceded by or followed by a `\W` (nonword) character, or the beginning or end of the string

- The word boundary is signaled by `\b`, and its inverse, `\B` _do not consume input_

(see `word-boundary.js`)

## Lookaheads

- Lookaheads won't consume input
- Lookaheads are necessary whenever there is overlapping content, and they can simplify certain types of matching
- Lookaheads in JS look like `(?=<subexpression>)`
- **Negative lookahead**: `(?!<subexpression>)` will match only things that aren't followed by the subexpression

see `lookaheads.js`

## Constructing Regexes Dynamically

`RegExp` is ok, but not regex literal (see `dyn-regex.js`)
