function countWords(word){
    result={};
    for(i=0; i<countWords.length; i++){
        let words = words[i];
        if(!result[words]){
            result[word] =1;
        } else {
            result[word]++;
        }
    }
    return result;
}
console.log(['apple','ball','apple']);