import React from "react";
import "../../../../design/component/atoms/top/index.css";
import { Product } from "./product";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import { images } from "./images";

export const Top: React.FC<any> = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__image">
                    <Carousel
                        navButtonsAlwaysVisible={false}
                        indicators={false}
                        fullHeightHover={false}
                    >
                        {images.map((image, i) => (
                            <Image key={i} image={image} />
                        ))}
                    </Carousel>
                </div>

                <div className="home__rowContainer">
                    <div className="home__row">
                        <Product
                            id="12321341"
                            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                            price={1196}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        />
                        <Product
                            id="49538094"
                            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                            price={239}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="4903850"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                            price={199}
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98}
                            rating={5}
                            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                        <Product
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product
                            id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Image: React.FC<any> = ({ image }) => {
    return (
        <Paper>
            <img src={image.src} alt="amazon banner" />
        </Paper>
    );
};
