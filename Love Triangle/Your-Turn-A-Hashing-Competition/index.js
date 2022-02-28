// This function, my_hash(), is where you should write your hash function. Like last module, input is a string, and the hash function should return an integer.

function my_hash(input) {
    hash = 0;
    if (input === "") return hash;  // checks whether the input is an empty string

    // convert each input character to its 8-bit binary representation
    input = input.split("");  // get each character of the input
    input.forEach(
        (element, index, array) =>
        array[index] = (element.charCodeAt(0)).toString(2).padStart(8, '0')
    );  // replace each character with its 8-bit binary representation
    //

    a = input.join("").match(/.{1,48}/g); // join the binary representation of the input characters and split it into 48-bit chunks, except possibly the last chunk
    a.forEach((element, index, array) => array[index] = parseInt(element, 2));  // convert the 48-bit binary string to integers

    // repeat the above operation with some slight changes
    n = input.length
    input = [input[n - 1], ...input.slice(0, n - 1)];  // move the last character to the 0th index of the array
    b = input.join("").split("").reverse().join("").match(/.{1,48}/g);  // join the binary representation of the input characters, reverse it, and split it into 48-bit chunks, except possibly the last chunk
    b.forEach((element, index, array) => array[index] = parseInt(element, 2));  // convert the 48-bit binary string to integers

    a.forEach((element) => hash ^= element);  // perform XOR operation to hash using all elements of a
    b.forEach((element) => hash ^= element);  // perform XOR operation to hash using all elements of b

    // this part is unnecessary  since the resulting hash will have at most 48 bits (< 53 bits), so |hash| < 2 ^ 53 - 1
    // if (hash > Number.MAX_SAFE_INTEGER) hash = Number.MAX_SAFE_INTEGER  // checks whether hash is > MAX_SAFE_INTEGER
    // if (hash < Number.MIN_SAFE_INTEGER) hash = Number.MIN_SAFE_INTEGER  // checks whether hash is < MIN_SAFE_INTEGER

    return hash;
}

// An example test case!
console.log(my_hash("boblover1234"));
console.log(my_hash("boblover1235"));  // check for presence of avalanche effect
console.log(my_hash(""));  // check that hashing function works with empty input
console.log(my_hash("tw,R(svGx],s!Zd%-a%MJ^qD7G5d1^,W(Uw)+ZpR*pq?[#!8SZM%oP7v+.b)RgC<ZTaZO0p=@2Z]wYXyr&@M|fu7%HX1xnSRUuSz=DM?>4+ZSgZ=L-.mW$]aY:mo$^l,y4c;YMv*eN>AHl|SXC5ZBxBNUlfo3!UqsEqv[^VzO|WjBJ*7-5eF;eYI*<%&z0cc6h's0?uQa$hKMvwKClLjcs1Kf|Q!rg(3mihtBo0pu$bRBAA4Jpd*m0N|Jmq_k-VdDsBBaRm[J3D4|9ama]Jb;U:|!:m1d]_eeBZm[M=Xk20(M?$(,;6X<bUKRjJBPm010P]OMMs!)#nen;9aZWrh.%-!s}-VMQ>4m|+k%D!#U;tkF1wU5Mv5r-RWOaCnA?q&]y|zr&evQv7(emAFH5p=tYZ8=1Ds7@<(|7^tJE$z)Ke[CETslr=kD^xnoVMp+8Hpbs.YbkwK@%8?2KQjaF*VJr@!cQYFl;lU[>V[$]C:t7.h&%IeI7N|5,u[#)m|B}<,ySsJEb]WP9F.Fz-(+P3)IWj-C1aimg+O)V?bhje+{biBKwb!bxL<L!U^@[_9&C+:L[9.1k(jn{!vu'Sc@HjEw3N]BmNPo-]Ej&i$e?z0-a8YFkroBh?(X6tU11gybb_PT^F0m-To1zpX!.lW@7Y=M=[=y}6%wu-K%d[0;4Qv?yfyES.M?;.i_:RQn:Ga@L=?Y+Bt!.HxUc*l]zps^)3n{j=7R%=jthuRy4Z9a&r4Vd4Q|(oJ+EQ>;sHDuKoW)k$}p[<SQ)&xqHU'2lg%(X0*H*uXD^DK#Yq_U>A6MLcQ;+2U5hw3Cn7OfJ]](&Q6Zq{H(wVGx4jn*eoS5;I)J(hBc$>Yj)f^r)v6HZ$]5k%^s>&K*>_7Qt(caG$9VE'0L%2!},ts&3KlWN2W4iGpoT-V4S{&[8cxdC%DBn_3cAFb5DLfHj:VuyKH3F}W@*oxfQ<gryC!Ot*=E?f1{4ps2ey<]J8,!!7$}YR(@_{t|?b-L{I8]:6F&|9qI?$?Fu,hQ4AW"));  // check that hashing function works with arbitrarily long inputs

// This is for the collision tester, and can be ignored (it passes your function onto the collision tester to test)

module.exports = { my_hash };
