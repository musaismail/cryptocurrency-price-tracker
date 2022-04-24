import React from 'react'

 const Search = ({handleChange}) => {
  return (
    <div>
      <h1 className='coin-text'>Search a currency</h1> 
     <form>
         <input type="text" className="coin-input" placeholder="search for coin prices" onChange={handleChange} />
     </form>
    </div>
  )
}

export default Search;
