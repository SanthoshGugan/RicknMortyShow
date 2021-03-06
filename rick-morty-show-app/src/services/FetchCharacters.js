const _ = require("lodash");
export default class FetchCharactersService {
    constructor(){
        this.characterList = [];
        this.nextUrl=""
    }

    fetchFromApi(url){
        return new Promise((resolve, reject) => {
            fetch('https://rickandmortyapi.com/api/character/')
                .then(res => res.json())
                .then(resJSON => {
                    this.characterList = _.cloneDeep(resJSON.results);
                    this.nextUrl = resJSON.info.next;
                    setTimeout(()=>{
                        this.backgroundFetch();
                    },1000);
                    return resolve(this.characterList);
                })
                .catch(err => {
                    console.log("Erorr in api fetch : ",err);
                })
        });
    }

    backgroundFetch(){
        if(!this.nextUrl)
            return;
        fetch(this.nextUrl)
            .then(res => res.json())
            .then(resJSON => {
                this.characterList = [...this.characterList, ...resJSON.results];
                this.nextUrl = resJSON.info.next;
                setTimeout(()=> {
                    this.backgroundFetch();
                },5000)
            })
            .catch(err => {
                console.log("Erorr in api fetch : ",err);
            })
    }
    getCharacterList(){
        return this.characterList;
    }
}