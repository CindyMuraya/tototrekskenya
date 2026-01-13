import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedAdventuresCard = ( { img, title, description, link } ) => {
  return (
    <Link to={link} className="block group">
      <div className="shadow-2xl rounded-2xl bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer h-full border-4 border-transparent hover:border-golden-orange/30">
        <div className='overflow-hidden relative'>
          <img src={img} alt={title} className="w-full h-72 object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-earth-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="p-6 bg-gradient-to-b from-white to-warm-beige/30">
          <h1 className="text-2xl font-bold mb-3 text-rich-earth-brown group-hover:text-sunset-orange transition-colors duration-300">{title}</h1>
          <p className="text-burnt-umber/90 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedAdventuresCard