
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SearchWrapper = ({children}) => {

    const location = useLocation()
    const [showSearchComponent, setShowSearchComponent] = useState(false)

    useEffect(()=> {

       if(location.pathname === '/') {
        setShowSearchComponent(true)
       } else {
        setShowSearchComponent(false)
       }

    }, [location])

  return (
    <div className='search-wrapper'>
        {showSearchComponent && children}
    </div>
  )
}

export default SearchWrapper