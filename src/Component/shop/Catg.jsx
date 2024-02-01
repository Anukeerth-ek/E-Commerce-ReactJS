import React from 'react'


function Catg() {

    const data = [
      {
        cateImg : './images/shop/logo-1.png',
        cateName: "Samsung"
      },
      {
        cateImg : './images/shop/logo-2.png',
        cateName: "Pixel"
      },
      {
        cateImg : './images/shop/logo-3.png',
        cateName: "iphone"
      },
      {
        cateImg : './images/shop/logo-4.png',
        cateName: "Xiomi"
      },
      {
        cateImg : './images/shop/logo-5.png',
        cateName: "Infinix"
      },
      {
        cateImg : './images/shop/logo-6.png',
        cateName: "Vivo"
      },
      {
        cateImg : './images/shop/logo-7.png',
        cateName: "Oppo"
      },
      {
        cateImg : './images/shop/logo-8.png',
        cateName: "Huawei"
      },
      {
        cateImg : './images/shop/logo-9.png',
        cateName: "Asus"
      },
    ]

  return (
    <>
    {/* <div className='category'>
      <div className='chead d_flex'>
        <h1>Brands </h1>
        <h1>Shops </h1>
      </div>
      {data.map((value, index) => {
        return (
          <div className='box f_flex' key={index}>
            <img src={value.cateImg} alt=''className='brand' />
            <span>{value.cateName}</span>
          </div>
        )
      })}
      <div className='box box2'>
        <button>View All Brands</button>
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </div> */}
  </>
  )
}

export default Catg