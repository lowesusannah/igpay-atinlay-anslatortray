
_can detect individual words_
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
_if the word has a consonant cluster with y at the end of it, treat y as a vowel, placing it at the start of the word_
  example input: rhythm
  example output: rhythm
