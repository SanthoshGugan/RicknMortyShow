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
                    distinctFilters[key][filterItem.value] = filterItem.status ? 1 : 0;
                return null;
            })
        }
        return distinctFilters;
    }
    checkCurrentStatus(filtersByStatus, item, filterCategory){
        if(!filtersByStatus[filterCategory].hasOwnProperty(item[filterCategory])){
            if(!filtersByStatus[filterCategory]["Others"])
                return false;
        }else{
            if(!filtersByStatus[filterCategory][item[filterCategory]])
                return false;
        }

        return true;
    }
    filterByCategory(filterCategory, filter, cardList, apiList,filters) {
        let updatedList;
        let filtersByStatus = this.getDistinctFiltersByStatus(filters);
        updatedList = apiList
            .filter(item => {
                if(!this.checkCurrentStatus(filtersByStatus, item,"species"))
                    return false;

                if(!this.checkCurrentStatus(filtersByStatus, item,"gender"))
                    return false;
                return true;
            });
        return _.cloneDeep(updatedList);
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
        let newCardList = apiCardList.filter(cardItem => {
            if(distinctFilters['species'].hasOwnProperty(cardItem['species']))
                return true;
            if(distinctFilters['gender'].hasOwnProperty(cardItem['gender']))
                return true;
            if(distinctFilters['species'].hasOwnProperty('Others') || distinctFilters['gender'].hasOwnProperty('Others'))
                return true;
            return false;
        });

        return _.cloneDeep(newCardList);
    }
}