import React from 'react'



function Categories() {
    const data = [
        {
          cateImg: "./images/category/category-1.png",
          cateName: "fashion",
        },
        {
          cateImg: "./images/category/category-2.png",
          cateName: "Electronics",
        },
        {
          cateImg: "./images/category/category-3.png",
          cateName: "Cars",
        },
        {
          cateImg: "./images/category/category-4.png",
          cateName: "Home & Gardens",
        },
        {
          cateImg: "./images/category/category-5.png",
          cateName: "Gifts",
        },
        {
          cateImg: "./images/category/category-6.png",
          cateName: "Music",
        },
        {
          cateImg: "./images/category/category-7.png",
          cateName: "Health & Beauty",
        },
        {
          cateImg: "./images/category/category-8.png",
          cateName: "Pets",
        },
        {
          cateImg: "./images/category/category-9.png",
          cateName: "Baby toys",
        },
        {
          cateImg: "./images/category/category-10.png",
          cateName: "Groceries",
        },
        {
          cateImg: "./images/category/category-11.png",
          cateName: "Books",
        },
    ]
  return (
    <>
       <div className="category">
          {/* {
            data.map((value, index)=> {
                           
              return(
                <div className='box f_flex' key={index}>
                  <img src={value.cateImg}/>
                  <span>{value.cateName} </span>
                </div>
              )
            })
          } */}

          <img src="./images/sliderCard/bat.png" className='left-side-photo'/>
          <div className='padd'>

          <span className='head-span'>Ceat first class tennis bat</span>
          <div className='div-categ'>
          <h2 >₹1499</h2>
          <h3 className='he3'>₹2799</h3>
            
          </div>
          <span className='tax'>(Inclusive of all taxes)</span>
          <div className='stars'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                    <button><i class='fa-solid fa-cart-shopping' ></i> Add to cart</button>
          </div>
       </div>
    </>
  )
}

export default Categories;