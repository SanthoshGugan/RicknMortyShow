const _ = require("lodash");
export default class FetchCharactersService {
    constructor(){
        this.characterList = [];
    }

    fetchFromApi(url){
        return new Promise((resolve, reject) => {
            fetch('https://rickandmortyapi.com/api/character/')
                .then(res => res.json())
                .then(resJSON => {
                    console.log("Response JSON : ", resJSON);
                    this.characterList = _.cloneDeep(resJSON.results);
                    return resolve(this.characterList);
                })
        });
    }

    getCharacterList(){
        return this.characterList;
    }
}