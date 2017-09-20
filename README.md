#_{Pig Latin Translator}_

####_{A translator from English to Pig Latin}, {September 20, 2017}_

####By _**{Joseph Tomlinson and Susannah Lowe}**_


_can detect and combine individual words_
  input: two words
  output: two words
_if a word starts with a vowel, add "way" to the end of it_
  example input: it
  example output: itway
_if a word starts with a consonant, shift consonant to the end of the word and add "ay" to the end_
  example input: hello
  example output: ellohay
_if the word contains a consonant cluster, move entire cluster to the end of the word, add "ay" to the end_
  example input: switch
  example output: itchsway
_if y is the second letter, y will be treated as a vowel._
  example input: my
  example output: ymay
_if the word has a consonant cluster with y at the end of it, place it at the start of the word_
  example input: rhythm
  example output: ythmrhay
_Will do all of the above to multiple words_
  example input: Hello, my name is john
_Will capitalize the first character of the pig latin version, if original was also capitalized_
  example input: Hello
  example output: Ellohay
_Will account for phrases that have a single character of punctuation; placing them at the back of the piglatin-ified words_
  example input: hello,
  example output: ellohay,
