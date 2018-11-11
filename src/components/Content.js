import React, { Component } from 'react';
import './Content.css'
import Joinbtn from './Joinbtn.js'
// Just testing the content part 
class Content extends Component {
    render() {
        return (
            <div id="content">
                
                <h1 id="">Contests</h1>
                <span id="">Overview</span>
                {/* {
                    new Array(35).fill(0).map((_,i)=>(
                        <p key={i}>Will add contests here</p>
                    ))
                } */}
                <div className="contestCards">
                <div id="1">
                    <h3>All Woman Hackathon</h3>
                    <h4>Booking.com</h4>
                    {/* 480 characters */}
                    <p>Booking.com prides itself on their diversity and are now taking ‘Girl Power’ to a whole new level. Our all women hackathon is now in its second edition. On top of bragging rights, the best of the best win a trip to Amsterdam and spend three days hacking with us. There will be 5 system-graded questions coded and scored on HackerRank. Once completed, you will be eligible to win a prize, one of which is a trip to Amsterdam in October 2018 to participate in our 3-day hackathon.</p>
                    <Joinbtn/>
                </div>

                    <div id="joined">
                    <h3>101 Hack 55</h3>
                    <h4>HackerRank</h4>
                    {/* 480 characters */}
                    <p>Sign up for 101 Hack 55, an algorithm contest that’s all about speed, accuracy and efficiency. You’ll have 3 hours to solve 5-6 challenges. Top 10 coders win HackerRank T-shirts, and could also land a job at HackerRank!

We are on the look out for great people to join our team of content engineers. You can find out more about the role on our careers page. See you on the leaderboard!</p>
                    
                    </div>
                    <div>
                    <h3>All Woman Hackathon</h3>
                    <h4>Booking.com</h4>
                    {/* 480 characters */}
                    <p>Booking.com prides itself on their diversity and are now taking ‘Girl Power’ to a whole new level. Our all women hackathon is now in its second edition. On top of bragging rights, the best of the best win a trip to Amsterdam and spend three days hacking with us. There will be 5 system-graded questions coded and scored on HackerRank. Once completed, you will be eligible to win a prize, one of which is a trip to Amsterdam in October 2018 to participate in our 3-day hackathon.</p>
                    
                    </div>
                    <div>
                    <h3>All Woman Hackathon</h3>
                    <h4>Booking.com</h4>
                    {/* 480 characters */}
                    <p>Booking.com prides itself on their diversity and are now taking ‘Girl Power’ to a whole new level. Our all women hackathon is now in its second edition. On top of bragging rights, the best of the best win a trip to Amsterdam and spend three days hacking with us. There will be 5 system-graded questions coded and scored on HackerRank. Once completed, you will be eligible to win a prize, one of which is a trip to Amsterdam in October 2018 to participate in our 3-day hackathon.</p>
                    
                    </div>
                </div>
                

            </div>
        );
    }
}

export default Content;
