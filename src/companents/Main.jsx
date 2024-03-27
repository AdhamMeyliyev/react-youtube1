import React, { useEffect, useState } from 'react'
const URL = "http://localhost:3000/product";


const Main = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () =>{
            const response = await fetch(URL);
            const data = await response.json();

            setData(data);
        }

        getData();
    }, [])
    
    
  return (
    
    
    
    <div>
        
      <main class="main">
      <section class="main--section">
        <div class="container">
          <div class="main--section--left">
            <ol class="main--section--left__list">
              <li class="main--section--left__list1"><a href="#">Home</a></li>
              <li class="main--section--left__list2"><a href="#">Trends</a></li>
              <li class="main--section--left__list3">
                <a href="#">Subscriptions</a>
              </li>
              <li class="main--section--left__list4">
                <a href="#">Originals</a>
              </li>
            </ol>
            <div class="main--section--left__hr"></div>
            <ol class="main--section--left__list">
              <li
                class="main--section--left__list1 main--section--left__list1_1"
              >
                <a href="#">Library</a>
              </li>
              <li
                class="main--section--left__list2 main--section--left__list2_2"
              >
                <a href="#">History</a>
              </li>
              <li
                class="main--section--left__list3 main--section--left__list3_3"
              >
                <a href="#">Your videos</a>
              </li>
              <li
                class="main--section--left__list4 main--section--left__list4_4"
              >
                <a href="#">Watch later</a>
              </li>
              <li class="main--section--left__list4 main--section--left__list5">
                <a href="#">Originals</a>
              </li>
              <select class="main--section--left__select">
                <option class="main--section--left__select__option" value="0">
                  Show more
                </option>
                <option class="main--section--left__select__option" value="1">
                  Show more2
                </option>
                <option class="main--section--left__select__option" value="2">
                  Show more3
                </option>
                <option class="main--section--left__select__option" value="3">
                  Show more4
                </option>
                <option class="main--section--left__select__option" value="4">
                  Show more5
                </option>
                <option class="main--section--left__select__option" value="5">
                  Show more6
                </option>
                <option class="main--section--left__select__option" value="6">
                  Show more7
                </option>
              </select>
            </ol>
            <div class="main--section--left__hr"></div>
            <ol
              class="main--section--left__list main--section--left__list--end"
            >
              <h2 class="main--section--left__list__h2">SUBRCRIPTIONS</h2>
              <li
                class="main--section--left__list1 main--section--left__list1_3"
              >
                <a href="#">Adem Ilter</a>
                <div class="subr__div"></div>
              </li>
              <li
                class="main--section--left__list2 main--section--left__list2_3"
              >
                <a href="#">Coşkun Aral Anlatıy...</a>
                <div class="subr__div"></div>
              </li>
              <li
                class="main--section--left__list3 main--section--left__list3__3"
              >
                <a href="#">Yiğit Can İÇ</a>
                <div class="subr__div"></div>
              </li>
              <li
                class="main--section--left__list4 main--section--left__list4_3"
              >
                <a href="#">AQUAHOLIC</a>
                <div class="subr__div4"></div>
              </li>
              <li
                class="main--section--left__list4 main--section--left__list5_3"
              >
                <a href="#">yener ustun</a>
                <div class="subr__div5"></div>
              </li>
              <li
                class="main--section--left__list4 main--section--left__list6_3"
              >
                <a href="#">SparkFun Electroni...</a>
                <div class="subr__div"></div>
              </li>
              <select class="main--section--left__select">
                <option class="main--section--left__select__option" value="0">
                  Show more
                </option>
                <option class="main--section--left__select__option" value="1">
                  Show more2
                </option>
                <option class="main--section--left__select__option" value="2">
                  Show more3
                </option>
                <option class="main--section--left__select__option" value="3">
                  Show more4
                </option>
                <option class="main--section--left__select__option" value="4">
                  Show more5
                </option>
                <option class="main--section--left__select__option" value="5">
                  Show more6
                </option>
                <option class="main--section--left__select__option" value="6">
                  Show more7
                </option>
              </select>
            </ol>
            <div class="main--section--left__hr"></div>
          </div>
          <div class="main--section--right">
            <div class="main--section--right__header">
              <ol class="main--section--right__header__list">
                <li class="main--section--right__header__list__item">
                  <a href="#">All</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Yatchs</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Boats</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">RVs</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Electrical Engineering</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Photocopier</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Cookery</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Apple</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">CSS</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Figma</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Astronomy </a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">React routers </a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Motorcycles</a>
                </li>
                <li class="main--section--right__header__list__item">
                  <a href="#">Motorcycles</a>
                </li>
                <img
                  class="next__icon"
                  src="../assets/icon/right-arrow.svg"
                  alt="icon"
                />
              </ol>
            </div>
            <div class="main--section--right__main">
           <div className="main-map">
           {data.map((item)=>{
            return(
                <ol class="main--section--right__main__list">
                <li class="main--section--right__main__list__item">
                  <img
                    class="main--section--right__main__list__item"
                    src={item.img}
                    alt="rasm"
                  />
                  <div class="cards__profil">
                    <img
                      class="cards--profil__img"
                      src={item.profile_img}
                      alt="profil"
                    />
                    <h3 class="cards--profil__h3">{item.name}
                    </h3>
                  </div>
                  <p class="cards--profil__desc1">{item.Description1}</p>
                  <p class="cards--profil__desc2">{item.Description2}</p>
                </li>
                
              </ol>
            )
        })}
           </div>

              
            </div>
          </div>
        </div>
      </section>
    </main>

    </div>
  )
}

export default Main
