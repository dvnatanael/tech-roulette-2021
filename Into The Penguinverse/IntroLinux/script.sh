# This is a comment
echo "Hello World!"  # This is a comment, too!

#! /bin/bash

my_name="David"
echo $my_name

FOO=1
expr $FOO + 1

echo "
Naming conventions of variables
1. All caps and underscores for exported variables and constants, when they are shared across multiple scripts. Ex: JOB_ID, PROCESS_NAME

2. All lowercase and underscores for all variables that are scoped to a single script. Ex: max_amount, i.

3. Use leading underscore for private variables and functions; can be used where functions share the same variables without clashing with similarly named variables in the code. Ex: _debug

4. When you are declaring variables, make sure there are no spaces before and after =. (a=12 is correct; a = 12 throws an error.)
"

read -p "send: " FOO
# send: [enter "hi"]
echo "sent: $FOO" # sent: hi
echo

# # Plain if blocks
# if [ "$1" -eq 69 ];
# then
#     echo "nice"
# fi

# # If-Else blocks
# if [ "$1" -eq 69 ];
# then
#     echo "nice"
# else
#     echo "darn"
# fi

# If-Elif-Else blocks
if [ "$1" -eq 69 ];
then
    echo "nice"
elif [ "$1" -eq 42 ];
then
    echo "the answer!"
else
    echo "darn"
fi
echo

# For Loops
NAMES="a b c d"
for NAME in $NAMES
do
    echo "Hello $NAME"
done
echo

# # While Loops
# while true # runs indefinitely
# do
#     echo "Hello $NAME"
# done

function greet() {
    echo "hey there $1
    "
}

greet "Steak" # hey there Steak

echo "hello" > file # saved "hello" to a file named "file"
echo "world" >> file # APPENDED "world" to a file named "file"

# Pipes
# Syntax: command1 | command2

# For example... 
sort record.txt | uniq 
# This will sort the given file (record.txt) 
# and print the unique values in that file only.