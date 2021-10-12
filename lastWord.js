var lengthOfLastWord = function(s) {
    let lastWord = s.trim().split(' ').pop();
    console.log(lastWord.length);
};

lengthOfLastWord("Hello World");
