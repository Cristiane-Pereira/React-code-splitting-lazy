import React from 'react';
import './style.css';
import './main';
import { lazy, Suspense } from 'react';


const Slogan = lazy(() => import('../code-splitting/Slogan'));
const Image = lazy(() => import('../code-splitting/Image'));
const Item = lazy(() => import('../code-splitting/Item'));


const Home = () => {
    return (
      <main class="l-main">
         <section className="home" id="home">
           <div className="home_container bd-grid">
             <div className="home_data">
             
            <Suspense fallback = {
               <i><p className="code">Carregando o Site...Um momento!</p></i> }>
                 <Slogan />  
                 <Item />
                 <Image />
            </Suspense>
             </div>
          
           </div>
         </section>
      </main>
    );
 }

export default Home;