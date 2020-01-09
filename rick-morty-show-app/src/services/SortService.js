import React from "react";
export default class SortService{
    sortById(cardList, isAsc){
        return cardList.sort((cardA,cardB) => {
            if(isAsc)
                return cardA.id - cardB.id;
            return cardB.id - cardA.id;
        })
    }
}