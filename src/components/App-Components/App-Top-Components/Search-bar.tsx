import React, { useState, ChangeEvent } from 'react';
import style from "./search-bar.module.css";
import { ReactComponent as SearchIcon } from "../../../assets/svg/searchIcon.svg"

const SearchBar: React.FC = function () {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearchSetting = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    };
  
    return (
      <div className={style.search_bar_wrapper}>
        <SearchIcon />
        <input
          name='search'
          type='text'
          role='search'
          placeholder='Search chatter'
          className={style.search_bar_input}
          value={searchValue}
          onChange={handleSearchSetting}
        />
      </div>
    );
}

export default SearchBar;
