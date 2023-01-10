import React, {useContext} from 'react'
import "./leftBar.scss";
import {AuthContext} from "../../context/AuthContext.jsx";
function LeftBar() {

    const {currentUser} = useContext(AuthContext);
    const {name,profilePicture} = currentUser;
  return (
    <div className='leftbar'>
    <div className="container">
        <div className="menu">
            <div className="user">
                <img src={profilePicture} alt='yo'/>
                <span>{name} </span>
            </div>
            <div className="item">
                <img src='https://cdn-icons-png.flaticon.com/512/6387/6387942.png' alt='span'/>
                <span>Friends</span>
            </div>
            <div className="item">
                <img src='https://cdn-icons-png.flaticon.com/512/166/166258.png' alt='span'/>
                <span>Group</span>
            </div>
            <div className="item">
                <img src='https://thumbs.dreamstime.com/b/market-icon-flat-style-illustration-vector-web-82865790.jpg' alt='span'/>
                <span>MarketPlace</span>
            </div>
            <div className="item">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseH_c9gQm-i_DGcSQV85gqaFxVG6SkqlKn4TVMJsNWLQa4dYp80KCtiumtgAkLFqEFE8&usqp=CAU' alt='span'/>
                <span>Watch</span>
            </div>
            <div className="item">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ayEUgCDdapdHgBZqt4VwbLChnHFhFl0lVw&usqp=CAU' alt='span'/>
                <span>Memories</span>
            </div>
            
        </div>

        <hr></hr>
        <div className="menu">
            <span>Your Shortcuts</span>
            <div className="item">
                <img src='https://img.freepik.com/premium-vector/calendar-deadline-event-reminder-notification-icon-flat-cartoon_101884-757.jpg?w=2000' alt='span'/>
                <span>Event</span>
            </div>
            <div className="item">
                <img src='https://img.freepik.com/premium-vector/joystick-sign-icon-comic-style-gamepad-vector-cartoon-illustration-white-isolated-background-gaming-console-controller-business-concept-splash-effect_157943-6336.jpg?w=2000' alt='span'/>
                <span>Gaming</span>
            </div>
            <div className="item">
                <img src='https://cdn-icons-png.flaticon.com/512/1375/1375106.png' alt='span'/>
                <span>Gallery</span>
            </div>
            <div className="item">
                <img src='https://cdn-icons-png.flaticon.com/512/4404/4404094.png' alt='span'/>
                <span>Video</span>
            </div>
            <div className="item">
                <img src='https://m-cdn.phonearena.com/images/articles/394349-image/micon.jpg' alt='span'/>
                <span>Message</span>
            </div>
        </div>

        <hr/>
        <div className="menu">
            <span>Others</span>
            <div className="item">
                <img src='https://cdn-icons-png.flaticon.com/512/2638/2638032.png' alt='span'/>
                <span>FundRaiser</span>
            </div>
            <div className="item">
                <img src='https://cdn-icons-png.flaticon.com/512/1454/1454840.png' alt='span'/>
                <span>Tutorial</span>
            </div>
            <div className="item">
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///8AO10ANVtLY3sAL1UAOVyOorEAJ1DI1NyVqLYANVkRRWbs8PMZRGNKbIUAOFv2+fqzwsylr7koUnAAJU/Z3uNgfpIAK1MsWHXo6u0AIE0AMFUAJ1Frf5G6xM11i54AG0uDl6ZZdosjSWfc5ejP2N6GnKxFaICpt8JYb4V5jp5BYHojVHMTSmpdeIwABUMAFUkADERfisKBAAAGyUlEQVR4nO2diZKiOhRAJZO4IG1wXKJAo+3Sre208+b/f+6xKCiQqGUSiHVPTVnTM23CMWThgjetFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDFJOwtVoNfshisFu1w4tZtdcYNp2sUMGwjediYddDbatgEyc3CZj4lCZYkiBWXRm2f+Qunbr/V0pcmVoW//K6zHd2PJVKpF0EI629rE9yOWHxCKVa0bDasSXCHbUti5+MIxh0y2NUi2GaK5XJLGtRxon4GugSjdqRU/3DTG2sTjM9U/123YLgsdMDoY47/yIGWujcJJnoFnaAoaK3fJGIhhim9rMBf6TX8Kk6DdCR1LHA33Y8Ru1QkaCOzglvsiqMMITbqSq7E3fXtixpYT3L5IpzLqrNWJNI/5PkhXxES+5fs4gV84Kp53h9Ir8hZ03NF0dgzl14+t17LrlqqkXEovaowW1UQK5DdDfi0O5VrUYK+5Nc1o5mhvo7ojmiFX3weLeVfy+1YVrq+Sb87rhSMjkHBAnnDsuLRXnrpHL59jqHlL+TX5mel2wdNa1P3p/okjY6B/pFfXV6bPdJkuOEtuaPxvCO/ukM29dK1ppDNjn9ZSJZ3luF2w3sX0l9ZG5IfTYbRdM9tQ+++Ywj7LGDT+865QdaGpK/J8MvmtSEh43sWbu7Co1GnxeSuGbwGwz7lX/qOxeee05sejwOGT0fsjVbH4/cNzxoMmSC4Jg6nzBHzEUL522n0E15+CKurwfAvLkDvNRz48YI9v3wnaWjbE79Jv+Fnu8CA3mc4x9UNL14n1GBYop0feUfUqbIlZgHaF5VukuGMdwNAGNI2yHDKnUcpFbzNGMNtvzwGEwslt+QI9b65pZtiuPPs8h0OitY+SYdUNuOtcAwxdOMphRT7YdB2B5gmM0j0d07phhiGXqJxjRdJuXt0Ol8PnNINMezmV1wn1WiiT9Yy3XSJQxAvUGeIoZtH6Gl6rpJxIrhZ22n35IaZDDFsLc7BCNo/JL8+TkbP+fq0SiVjXjDUFMNhkB6kjbatVbS26SQrtTR2HjvavG5ojGE3MaT0LV64TjvsLHjunjY3jmaKYS/9ndN4spjGr04fXVxmGD4ftmZ26oH3iUn84ozQxSKAe0fAEMNTfC56wV+nxnJml2FXfkDbEMNhfr+RpXHdSPBqBYBmnNINMdws85ggjpegzsG/WqYSbHgbtlad7Dgt/OO60aR41YR0yYsOmGLYeg/yEB0aHa4CGtEAZHHfaIxha2jlcVbbLgge+dFhcwxbk3xtev20HxGGogwybH2ff6/wrC1Bohv0Jhl2WcVjxNG/iG+Om2QY3w+oMuwI7xwbZbj7r3zLIxpmhOFSswxbO9RhjGGaXugTFP3AxgPxcZtlGK1l5s5mZyUPHKHg2N3M57fuIppmmOCsAh9hct+DG0YaRtP/av9x5zNchho+ABjqAAyfAwx1IDR0hw9R/oQabzj/yx7AO5ZKb76hZz0AKkdrmm/IeRgVDDOab/iv+ICRiLGB/dD9/RDl2H7jDZ8GDHUAhs8Bhjq452mT1fQWvLi3IYZDzxenwfAx76saphhyHi3NoYbfIQXDFzD8N76Bx4vtG2LoTG7DKd0QwycAQx2A4XM039B9jNL7G284748e4Ke8Om2+4ZI+QMXze803fP1Y2+sbeo/kFjLyLH15w6cBQx2A4XPkhvRVDbF9Ar2o4fTP7MzhNQ2bABiaDxiaDxiaDxiaDxiazw3DXU8ZbU0fqNhwzhhmjzz59QBLTfk+xYZhR1nm/RvfmNJluPBLWVukGY6bcJbGmTJVJW8nnqZkmEJDXjpXGYiThOkyfOekc5UB9xvuOg3nKneI0JY6WWTITQUqgfsybSo2dJjCLUwoNz+YQsNi9ryjr9AQi5NmqjHEn1f/E3rlrzbLg2nb8aKXG9LR5X84KjshPzuYAsOLh9bYRUd0ZxU7KMhTZPKz+PMIO3m9FxmtnIPCJrQIN6GNAibsIq1sNguHP77Kva6Izl2u4k0o8oxW7BBunE24Z5zM7ZJQsQ8Dn2N+OlKLog55IwFS2H4RmrcOCvP9LpJ0pIRW5IGUS4eXKlMN7rqQUSd5VehHfG6KPkUIUu0rAfW171GmdOYrC1qa9++KmAQaBW2rjo30dp7qsSUlGsfwWn8LxvSULrIzQWIFN/LZqOO3p3aKT0Ge3mniii5hqqd55B20bi9XxP3GmEreGPjsFm/T47ND7bdFnM81Y1jizs7ZDs+IsfWivk1zL9nuFntpu3Pn7NvbJuxfDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AD+B0EfpLkXiFvcAAAAAElFTkSuQmCC' alt='span'/>
                <span>Course</span>
            </div>

        </div>
    </div>
    
    </div>
  )
}

export default LeftBar