// According to Gary Chapman, marriage counselor and the author of "The Five Love Languages" books, there are five major ways to express our love towards someone: words of affirmation, quality time, gifts, acts of service, and physical touch. These are called the love languages. Usually, everyone has a main language: the one that he/she "speaks" and understands best. In a relationship, it's important to find your partner's main love language, so that you get along better with each other.

// Your task
// Unfortunately, your relationship got worse lately... After a long discussion with your partner, you agreed to give yourself a few weeks to improve it, otherwise you split up...

// You will be given a partner instance, and n weeks. The partner has a .response method, and the responses may be: "positive" or "neutral". You can try to get a response once a day, thus you have n * 7 tries in total to find the main love language of your partner!

// The love languages are: "words", "acts", "gifts", "time", "touch" (available predefined as LOVE_LANGUAGES)

// Notes:
// Your partner will sometimes give a positive response to any love language (a "false positive"), but the main one has a much higher possibility. On the other hand, you may get a neutral response even for the correct language, but with a low possibility (a "false negative").
// There will be 50 tests. There is a slight chance (about 0.5%) to fail a test even with a proper solution, due to the randomness. So if you get 49/50, just run the tests again.
// Examples
// main love language: "words"

// partner.response("words")  -->  "positive"
// partner.response("acts")   -->  "neutral"
// partner.response("words")  -->  "positive"
// partner.response("time")   -->  "neutral"
// partner.response("acts")   -->  "positive"    # false positive
// partner.response("gifts")  -->  "neutral"
// partner.response("words")  -->  "neutral"     # false negative
// etc.

// Pass in an object and a number
// Return a string

// let loveLanguages be an array of love languages
// let score be an object that tracks a score for each language
// Loop from 0 to weeks * 7
//    Use i % 5 to iterate through each love language
//    Get a response from partner with current love language
//    If response is positive, increment that language's score by 1
//    If response is neutral, decrement that language's score by 1
// Loop through the scores and return the love lanugage with the highest score

function loveLanguage(partner, weeks) {
    const loveLanugages =  ['words', 'acts', 'gifts', 'time', 'touch'];
    const scores = {'words': 0, 'acts': 0, 'gifts': 0, 'time': 0, 'touch': 0};

    for (i = 0; i < weeks * 7; i++) {
        const language = loveLanugages[i % 5];
        const res = partner.response(language);
        if (res == 'positive') scores[language] += 1;
        if (res == 'neutral') scores[language] -= 1;
    }

    let bestScore = -Infinity;
    let bestLanguage = null;

    for (let language in scores) {
        if (scores[language] > bestScore) {
            bestScore = scores[language];
            bestLanguage = language;
        }
    }

    return bestLanguage;
}

// Refactored

function loveLanguage(partner, weeks) {
    const loves = ["words", "acts", "gifts", "time", "touch"].map(lang => ( {lang, count: 0} ));
    
    for (let day = 0; day < weeks * 7; day++) {
        const love = loves[day % 5];
        love.count += partner.response(love.lang) == 'positive' ? 1 : -1;
    }
  
    return loves.reduce((a, b) => a.count > b.count ? a : b).lang;
}
