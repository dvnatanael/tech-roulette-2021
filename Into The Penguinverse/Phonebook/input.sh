#!/bin/bash

PHONEBOOK_ENTRIES="bash_phonebook_entries"
filepath=./phonebook.sh

mv $PHONEBOOK_ENTRIES $PHONEBOOK_ENTRIES.old
echo $filepath new Linus Torvalds 101-110-0111
$filepath new Linus Torvalds 101-110-0111
echo $filepath list
$filepath list
echo $filepath new Tux Penguin 555-666-7777
$filepath new Tux Penguin 555-666-7777
echo $filepath new Linus Torvalds 222-222-2222
$filepath new Linus Torvalds 222-222-2222
echo $filepath list
$filepath list
echo $filepath clear
$filepath clear
echo $filepath list
$filepath list
