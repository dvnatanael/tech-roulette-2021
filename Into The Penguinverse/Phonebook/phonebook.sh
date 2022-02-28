#!/bin/bash

PHONEBOOK_ENTRIES="bash_phonebook_entries"


if [ "$#" -lt 1 ]; then
    exit 1

elif [ "$1" = "new" ]; then
    shift
    echo $* >> $PHONEBOOK_ENTRIES

elif [ "$1" = "list" ]; then
    if [ ! -e $PHONEBOOK_ENTRIES ] || [ ! -s $PHONEBOOK_ENTRIES ]; then
        echo phonebook is empty
    else
        cat $PHONEBOOK_ENTRIES
    fi

elif [ "$1" = "lookup" ]; then
    shift
    name=$*
    grep "$name [0-9]" $PHONEBOOK_ENTRIES | sed "s/$name //g"

elif [ "$1" = "remove" ]; then
    shift
    name=$*
    sed "/$name [0-9]/d" $PHONEBOOK_ENTRIES > temp
    cat temp > $PHONEBOOK_ENTRIES
    rm temp

elif [ "$1" = "clear" ]; then
    > $PHONEBOOK_ENTRIES

else
     echo other edge cases
fi