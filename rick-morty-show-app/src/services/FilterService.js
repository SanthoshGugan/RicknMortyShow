const _ = require("lodash");
const filterByCategory = (item, index) => {
    return true;
}
export default class FilterService {
    getDistinctFilters(filters){
        const distinctFilters = {};
        for(let [key, filter] of Object.entries(filters)){
            distinctFilters[key] = {};
            filter.map(filterItem => {
                if(!filterItem.others)
                    distinctFilters[key][filterItem.value] = 1;
            })
        }
        return distinctFilters;
    }
    filterByCategory(filterCategory, filter, cardList, apiList) {
        let toBeAdded, updatedList;
        if (filter.status) {
            toBeAdded = apiList
                .filter((item, index) => {
                    console.log("Filters : ", item[filterCategory] === filter.value)
                    return item[filterCategory] === filter.value;
                });
            updatedList = [..._.cloneDeep(cardList), ..._.cloneDeep(toBeAdded)];
        } else {
            updatedList = cardList.filter(cardItem => cardItem[filterCategory] !== filter.value);
        }
        return updatedList;
    }

    filterByOtherCategory(filterCategory, distinctFilters, cardList, filter, apiList) {
        let toBeAdded, updatedList;
        if (filter.status) {
            toBeAdded = apiList
                .filter(item => !distinctFilters[filterCategory].hasOwnProperty(item[filterCategory]));
            updatedList = [..._.cloneDeep(cardList), ..._.cloneDeep(toBeAdded)];
        }else{
            updatedList = cardList.filter(cardItem => distinctFilters[filterCategory].hasOwnProperty(cardItem[filterCategory]));
        }
        return updatedList;
    }
}