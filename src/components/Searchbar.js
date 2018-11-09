import React, { Component } from 'react';

class Searchbar extends Component {
    render() {
        return (
            <form action="">
  <input type="text" placeholder="Search for contests, questions & more..."/>
  <button type="submit" className="searchButton"><i className="fa fa-search"><span id="searchbtntext">Search</span></i></button>
  
</form>
        );
    }
}

export default Searchbar;