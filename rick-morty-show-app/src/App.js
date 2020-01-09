import React from 'react';
import './App.css';



// Components
import { Filters } from "./components/Filters/Filters";
import { SelectedFilters } from "./components/SelectedFilters/SelectedFilters";
import { Cards } from "./components/Cards/Cards";

// Services
import FetchCharactersService from "./services/FetchCharacters";
import FilterService from "./services/FilterService";
import SortService from "./services/SortService";


const _ = require("lodash");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters:
      {
        species: [{ value: "Human", status: true, others: false }, { value: "Mytholog", status: true, others: false }, { value: "Other Species...", status: true, others: true }],
        gender: [{ value: "Male", status: true, others: false }, { value: "Female", status: true, others: false }, { value: "Others...", status: true, others: true }]
      },
      selectedFilters:
        [{ category: "species", value: "Human" }, { category: "species", value: "Mytholog" }, { category: "species", value: "Other Species..." },
        { category: "gender", value: "Male" }, { category: "gender", value: "Female" }, { category: "gender", value: "Others..." }
        ],
      cardList: [],
      isAsc: true,
      isFiltersVisible: true
    };

    this.fetchCharacterService = new FetchCharactersService();
    this.filterService = new FilterService();
    this.sortService = new SortService();

    this.apiCardList = [];
    this.distinctFilters = this.filterService.getDistinctFilters(this.state.filters);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleTagClose = this.handleTagClose.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.toggleFilterVisibilty = this.toggleFilterVisibilty.bind(this);
  }

  componentDidMount() {
    let that = this;
    this.fetchCharacterService.fetchFromApi()
      .then(apiList => {
        that.apiCardList = _.cloneDeep(apiList);
        let cardList = _.cloneDeep(that.apiCardList);
        that.setState({ cardList });
      });
  }

  updatedCardList(nextApiList) {
    if (this.apiCardList.length === nextApiList.length)
      return _.cloneDeep(this.state.cardList);
    this.apiCardList = _.cloneDeep(nextApiList);
    let newCardList = this.filterService.updateFilterByCategory(this.state.filters, this.apiCardList, this.state.cardList);
    return _.cloneDeep(newCardList);
  }

  modifyTags(category, tag, toggle) {
    let selectedFilters = _.cloneDeep(this.state.selectedFilters), index;
    if (toggle) {
      selectedFilters.push({ category, value: tag });
    } else {
      index = _.findIndex(selectedFilters, { 'value': tag });
      selectedFilters.splice(index, 1);
    }
    this.setState({ selectedFilters });
  }

  handleTagClose(category, tag) {
    let filters = _.cloneDeep(this.state.filters);
    let filterIndex = _.findIndex(filters[category], { value: tag });

    let filter = filters[category][filterIndex];
    filter.status = false;
    this.handleFilterChange(category, filter, filterIndex);
  }

  handleFilterChange(category, filter, index) {
    let cardList = this.updatedCardList(this.fetchCharacterService.getCharacterList());
    let filters = _.cloneDeep(this.state.filters);
    if (filter.others) {
      cardList = this.filterService.filterByOtherCategory(category, this.distinctFilters, cardList, filter, this.apiCardList)
    } else {
      cardList = this.filterService.filterByCategory(category, filter, cardList, this.apiCardList);
    }
    cardList = this.sortService.sortById(cardList, this.state.isAsc);
    filters[category][index] = Object.assign({}, filter);
    this.setState({ cardList, filters });
    this.modifyTags(category, filter.value, filter.status);
  }

  handleSortChange(isAsc) {
    let cardList = _.cloneDeep(this.state.cardList);
    cardList = this.sortService.sortById(cardList, isAsc);
    this.setState({ cardList, isAsc });
  }

  toggleFilterVisibilty() {
    let isFiltersVisible = !this.state.isFiltersVisible;
    this.setState({ isFiltersVisible });
  }

  render() {
    return (
      <div className="App">
        <Filters
          filters={this.state.filters}
          onFilterClick={this.handleFilterChange}
          onFilterVisibilityToggle={this.toggleFilterVisibilty}
          isFiltersVisible={this.state.isFiltersVisible}
        />
        <SelectedFilters tags={this.state.selectedFilters} onTagClose={this.handleTagClose} onSortChange={this.handleSortChange} />
        <Cards cardList={this.state.cardList} />
      </div>
    );

  }
}

