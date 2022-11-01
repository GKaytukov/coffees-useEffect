import { useState, useEffect } from 'react' 

export default function SingleCoffee({ entireObject }) {
    const [favorite, setFavorite] = useState(false)

    // return ( 
    // <div className='menu-items__item' style={;{{backgroundColor: favorite ? 'red' : 'white' }}>
    //     <img>src={entireObject.image}
    //     alt='' 
    //      />

    // </div>
    // <h3>{entireObject.name}</h3>
    // <span>Price: {entireObject.price}</span>
    // <p>{entireObject.description}</p>
    
    // /*<button onClick={() => setFavorite(true)}>Favorite</button>*/}
   //{/*<button onClick={() => setFavorite(true)}>Favorite</button>*/}

//    <button 
//    onClick={()} => {
//     favoriteTest = true
//     console.log(favoriteTest)
//    }}

//    favorite

    

    // const exampleProps = {
    //     description: 'hdhfkfkjknfkjknnnlknlkd', 
    //     name: 'Cafe Cubano', 
    //     price: "Mucho Mula", 
    // }

    // const description = exampleProps.description
    // const name = exampleProps.name 
    // const price = exampleProps.price 

    //const {description, name, price} = exampleProps //destructing is taking out the object out of the actual properties

    //console.log('props here', props)
    return (
        <div className='menu-items__item'>
            <img 
                src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG' 
                alt='' 
               />
            <div>
              <h3>{name}</h3>
              <span>Price: {price}</span>
              <p>{description}</p>
            </div>
          </div>
    )

}
