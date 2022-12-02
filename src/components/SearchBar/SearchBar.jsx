import React from "react";

export default function SearchBar(props) {
   const [searchValue, setSearchValue ] = React.useState('');
   const {onSearch} = props;

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

   return (
      <div>
         <input type="search" value={searchValue} onChange={onSearchValueChange}/>
         <button 
         onClick={()=> {onSearch(searchValue)}}
         >Agregar</button>
      </div>
   );
}
