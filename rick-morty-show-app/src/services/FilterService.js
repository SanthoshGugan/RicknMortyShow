const _ = require("lodash");
export default class FilterService {
    getDistinctFilters(filters) {
        const distinctFilters = {};
        for (let [key, filter] of Object.entries(filters)) {
            distinctFilters[key] = {};
            filter.map(filterItem => {
                if (!filterItem.others)
                    distinctFilters[key][filterItem.value] = 1;
                return null;
            })
        }
        return distinctFilters;
    }

    getDistinctFiltersByStatus(filters) {
        const distinctFilters = {};
        for (let [key, filter] of Object.entries(filters)) {
            distinctFilters[key] = {};
            filter.map(filterItem => {
                if (filterItem.status)
                    distinctFilters[key][filterItem.value] = 1;
                return null;
            })
        }
        return distinctFilters;
    }

    filterByCategory(filterCategory, filter, cardList, apiList) {
        let toBeAdded, updatedList;
        if (filter.status) {
            toBeAdded = apiList
                .filter((item, index) => {
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
        } else {
            updatedList = cardList.filter(cardItem => distinctFilters[filterCategory].hasOwnProperty(cardItem[filterCategory]));
        }
        return updatedList;
    }

    updateFilterByCategory(filters,apiCardList) {
        let distinctFilters = this.getDistinctFiltersByStatus(filters);
        // console.log("Distinct Filters : ", distinctFilters);
        let newCardList = apiCardList.filter(cardItem => {
            if(distinctFilters['species'].hasOwnProperty(cardItem['species']))
                return true;
            if(distinctFilters['gender'].hasOwnProperty(cardItem['gender']))
                return true;
            if(distinctFilters['species'].hasOwnProperty('Other Species...') || distinctFilters['gender'].hasOwnProperty('Others...'))
                return true;
            return false;
        });

        console.log("newCardList : ",newCardList);
        return _.cloneDeep(newCardList);
    }
}