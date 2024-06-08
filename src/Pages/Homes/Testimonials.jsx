// Testimonials.jsx
export default function Testimonials() {
    return (
        <div className="testimonials--container">
            <div className="testimonials--section">
                <div className="testimonials--section__card" id="card--icon">
                    <p> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.</p>
                    <div className="testimonials--section__card--info">
                        <img src="./img/profile-1.jpg" alt="profile-1" />
                        <div className="text-container">
                            <h5>Satish Patel</h5>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
                <div className="testimonials--section__card">
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.</p>
                    <div className="testimonials--section__card--info">
                        <img src="./img/profile-2.jpg" alt="profile-2" />
                        <div className="text-container">
                            <h5>Bruce McKenzie</h5>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
                <div className="testimonials--section__card">
                    <p> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.</p>
                    <div className="testimonials--section__card--info">
                        <img src="./img/profile-3.jpg" alt="profile-3" />
                        <div className="text-container">
                            <h5>Iva Boyd</h5>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
