file="./diary/6.9.21.txt"

while IFS= read -r line
do
    ## take some action on $line
    if [[ "$line" == "I hid it"* ]]; then
        text="$line"
        msg=${text#*'it '}
    fi
done < $file

echo "Input: $msg"
i=1
while [ $i -lt 26 ]
do
    ./stupid_homework/science/cipher -d $i $msg | cat >> attempts.txt
    ((i++))
done