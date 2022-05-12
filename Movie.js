class Movie {
    constructor(title, director,budget){
        this.title=title;
        this.director= director;
        this.budget= budget;
    }

    wasExpensive(){
        if(this.budget >100000000){
            console.log(true);
        }else console.log(false);
    }
}


let movie1 = new Movie('Batman', 'Matt Reeves', 35000000);
let movie2 = new Movie('Spiderman', 'John Reeves', 135000000);
console.log('Batman');
movie1.wasExpensive();
console.log('Spiderman');
movie2.wasExpensive();