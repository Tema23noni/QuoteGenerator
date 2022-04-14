
    document.querySelector("#generate").addEventListener("click", () => {
        generate();
      });
      
      generate = () => {
        var quotes = {
            ' - Наполеон Хилл, журналист и писатель':'Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
            ' - Марина Цветаева': 'Любовь побеждает все, кроме бедности и зубной боли.',
            ' - Альберт Эйнштейн': 'Стремитесь не к успеху, а к ценностям, которые он дает',
            ' - Флоренс Найтингейл': 'Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
            ' - Майкл Джордан': 'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.',
            ' - Амелия Эрхарт' : "Сложнее всего начать действовать, все остальное зависит только от упорства."
     
        };
    var authors = Object.keys(quotes);
    // grab a random key (author) and store it in author
    var author = authors[Math.floor(Math.random() * authors.length)];
    // grab the value(quote) that belongs to that key
    var quote = quotes[author]
  
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
    
}