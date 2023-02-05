import React from "react";
import '../styles/Home.css';

function Home() {

    return (
        <div className='bodies'>
            <div className='HomeBody'>
                <h1 className="slogan">"Keep the piggy bank full!"</h1>
                <hr className="linebreak"/>
                <h1 className="welcome">Welcome! </h1>
                <p>
                    <b> Login </b> to avail the services, <br/>
                    (or) <br />
                    new users <b>Sign-up</b> to continue.
                </p> 
                <hr className="linebreak"/>
                <h2 className="aboutUs">About us </h2>
                <p>
                 "Bonjour Banque" was created by a group of 5 Wells Fargo freshers with a combined contribution of 0$ for their bootcamp project. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). 
                </p>
            </div>          
        </div>
                
           
    );
}

export default Home;
