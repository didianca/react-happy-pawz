import React from 'react';
import {Link} from "react-router-dom";
import path from '../paths';

const Home = () => {
    return (
        <div className='container'>
                <div className="row">
                    <div className="col-xl" id='chooseAuth'>
                        <div className="text-center authBtn" >
                            <Link to={path.login}>
                                <button className='btn btn-outline-info'>Login</button>
                            </Link>
                        </div>
                        <div className="text-center authBtn" >
                            <a className=' underlineHover'> → or ←</a>
                        </div>
                        <div className="text-center authBtn" >
                            <Link to={path.signUp}>
                                <button className='btn btn-outline-info'>SignUp</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <diV className='row'>
                    <div className='col'>
                        <h2>About</h2>
                        <h4>Happy Pawz</h4>
                    </div>
                    <div className='col'>
                        <small style={{color: 'grey'}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed ut
                                volutpat ligula. Sed pellentesque eros sem, at congue nisi interdum id.
                                Pellentesque
                                molestie
                                sodales laoreet. Etiam lacinia, nibh eu bibendum fringilla, ex arcu vehicula
                                ipsum,
                                ut
                                ullamcorper ipsum risus non quam. Nullam feugiat tristique nisi. Proin eu
                                sagittis
                                arcu.
                                Quisque
                                iaculis felis dolor, ullamcorper fermentum erat congue ac. Integer maximus urna
                                a
                                ante
                                dictum
                                eleifend. </p>
                            <p> Nam sodales tellus dignissim pulvinar egestas.
                                Vivamus
                                vulputate fringilla scelerisque. Nam
                                sit amet consequat arcu. Nam egestas bibendum iaculis. Lorem ipsum dolor sit
                                amet,
                                consectetur
                                adipiscing elit. Ut efficitur hendrerit dignissim. Interdum et malesuada fames
                                ac ante
                                ipsum
                                primis in faucibus. Integer nibh felis, suscipit et sodales non, placerat
                                eleifend
                                turpis.
                                Nullam ac laoreet dolor, vitae bibendum erat. Proin sed nisl laoreet, dictum ex
                                eget,
                                blandit
                                arcu. In quis mauris vitae orci placerat molestie.
                            </p>
                            <p>Nullam commodo leo sit amet nulla mattis fermentum. Ut
                                feugiat
                                orci at finibus porta. Donec
                                aliquam elit posuere sem pulvinar convallis. Donec molestie sagittis enim,
                                finibus
                                mollis
                                arcu
                                porta id. Maecenas non libero sed lacus tempor sagittis at at mi. Aliquam
                                sollicitudin augue
                                mauris, quis interdum purus egestas in. Vestibulum orci tellus, ultrices nec
                                elit
                                sed,
                                tempor
                                hendrerit enim. Pellentesque dapibus vitae sapien ut tempor. Donec non iaculis
                                ligula, quis
                                ultrices mi. Sed nec volutpat lacus. Pellentesque pretium semper orci, ut auctor
                                tellus
                                interdum
                                a.
                            </p>
                            <p>Nunc cursus ut nibh ut imperdiet. Etiam varius mattis
                                nulla, ac
                                porta lorem tempor laoreet.
                                Donec id lorem vitae magna varius ornare quis vitae massa. Donec mattis ipsum
                                vitae
                                urna
                                pulvinar molestie. Vestibulum quis gravida mi. Sed id purus nunc. Curabitur at
                                laoreet
                                ligula.
                                Pellentesque semper lectus vel tristique lacinia. Interdum et malesuada fames ac
                                ante ipsum
                                primis in faucibus.
                            </p>
                            <p> Morbi lacinia lectus volutpat dictum iaculis. Cras
                                auctor
                                dapibus pulvinar. Suspendisse
                                condimentum neque sem, nec hendrerit dolor vulputate non. Vestibulum ultrices
                                tincidunt
                                nulla
                                eget vestibulum. Vestibulum in magna vehicula, sagittis neque ac, luctus lorem.
                                Donec
                                placerat
                                urna eget metus tincidunt, sit amet molestie diam vestibulum. Praesent sed
                                libero a
                                neque
                                dictum
                                fermentum. Ut orci dolor, pulvinar at orci non, ultrices tincidunt lacus.
                                Curabitur
                                auctor
                                tortor ex. Sed erat libero, dictum vel mauris id, dignissim egestas mi. In risus
                                purus,
                                gravida
                                volutpat eros non, dapibus gravida dui. Praesent laoreet sit amet ipsum vitae
                                semper. Duis
                                vitae
                                sem ac est interdum cursus. Curabitur sed urna in lorem iaculis malesuada a id
                                sem.
                            </p>
                        </small>
                    </div>
                </diV>
        </div>
    );
};
export default Home;