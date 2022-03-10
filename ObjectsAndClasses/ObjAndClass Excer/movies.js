function movies(arr) {
    let movies = [];
    arr.forEach(line => {
        let tokens = line.split(' ');
        let addIndex = tokens.indexOf('addMovie');
        let directIndex = tokens.indexOf('directedBy');
        let onDateIndex = tokens.indexOf('onDate');

        if (addIndex > -1) {
            movies.push({
                name: tokens.slice(addIndex+1).join(' '),
            })
        } 
        if (directIndex > -1) {
            let name = tokens.slice(0,directIndex).join(' ')
            let director = tokens.slice(directIndex+1).join(' ');
            
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            })
            
        }
        if (onDateIndex > -1) {
            let name = tokens.slice(0,onDateIndex).join(' ')
            let date = tokens.slice(onDateIndex+1).join(' ');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }
        
    });
    movies.forEach(movie => {
            if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
                console.log(JSON.stringify(movie))
            }
        })
    
}
movies([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]
)