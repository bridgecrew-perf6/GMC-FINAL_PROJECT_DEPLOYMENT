import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const LOGIN_URL = 'http://localhost:4000/login';

function SignIn() {

    const {setAuth} = useContext(AuthContext)

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await axios.post( LOGIN_URL,
                JSON.stringify({email, pwd}), {
                    headers: {'Content-type':'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, pwd, roles, accessToken})
            setEmail('');
            setPwd('');
            setSuccess(true)
        } catch (err) {
            if (!err?.response) {
                setErrMsg ('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg ('Missing Email or Password');
            }else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            }else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

        
    }


    return (
        <>
            {success ? ( 
                <section style={{height:"100vh", color:"#0069ff", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h1 >Vous êtes bien connecté !</h1> 
                    <br />
                    <p>
                        <Link  to="/Home"> <i>GO TO HOME</i> </Link>
                    </p>
                </section>
            ) :(
                <section style={{height:"100vh", display:"flex"}}>
                    <p ref={errRef} className= {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                        {errMsg}
                    </p>
                        <div className="container-fluid" style={{height:"100vh", display:"flex", margin:"auto", alignItems:"center"}}>
                            <div className='left' style={{objectFit:"cover", width:"50%", backgroundColor:"#0069ff", height:"95%", borderTopLeftRadius:"15px", borderBottomLeftRadius:"15px"}}>
                                
                                <div className="svg-container" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100%"}} >
                                <h1 class="text-white no-underline" style={{marginBottom:"2rem"}} >Dev Forum</h1>
                                    <svg style={{heigth:"200", width:"300"}} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                                        <path d="M275.29,110s40-12.29,45.52,14.26-5.74,56.15-5.74,56.15H249.93Z" fill="#ffd200"></path>
                                        <path d="M222.12,97.6s-21.19-1-25.36,20.06S199.7,168,199.7,168l-31.95,8.59,1.61,3.81h45.58l14-32.8Z" fill="#f96400"></path>
                                        <path d="M222.12,97.6s-21.19-1-25.36,20.06S199.7,168,199.7,168l-31.95,8.59,1.61,3.81h45.58l14-32.8Z" fill="#fff" opacity="0.46"></path>
                                        <path d="M236.2,69.62s-.31,6.74,1,11.16a3.39,3.39,0,0,0,4.23,2.27c2.22-.69,5-2.27,5.62-5.86l1.77-6a6.06,6.06,0,0,0-2.93-6.36C242,62.28,236.18,65.51,236.2,69.62Z" fill="#f4a28c"></path>
                                        <polygon points="248.36 74.27 250.87 96.23 238.66 96.74 241.74 80.56 248.36 74.27" fill="#f4a28c"></polygon>
                                        <path d="M237.89,69.83a26.51,26.51,0,0,0,6.19-.73,5.62,5.62,0,0,0,.25,6.17,4.59,4.59,0,0,0,5.6,1.6l-.46-8.66a6.91,6.91,0,0,0-3.73-6,25.28,25.28,0,0,0-3-1.29c-2.53-.9-6.12.92-8.42-.67a1.62,1.62,0,0,0-2.53,1.17c-.29,2.65.35,6.77,4,8.06A6,6,0,0,0,237.89,69.83Z" fill="#24285b"></path>
                                        <path d="M243.6,75.1s0-2.6,1.9-2.48,2.06,3.87-.57,4.33Z" fill="#f4a28c"></path>
                                        <path d="M236.23,73.88l-1.77,2.67a1.08,1.08,0,0,0,.74,1.67l2.6.38Z" fill="#f4a28c"></path>
                                        <path d="M241.91,81.08a8,8,0,0,0,4.41-1.31s-.18,4.08-5.46,6.86Z" fill="#ce8172" opacity="0.31"></path>
                                        <path d="M222.12,97.6s47.53-9.11,63.77,0-17.83,93.86-17.83,93.86L218,189.88S174.2,106.31,222.12,97.6Z" fill="#f96400"></path>
                                        <rect x="296.79" y="44.8" width="57.83" height="39.76" fill="#ffd200"></rect>
                                        <path d="M317.93,72.48a1.31,1.31,0,0,1-.83-.29l-8.67-6.85a1.33,1.33,0,0,1,0-2.09l8.67-7a1.34,1.34,0,1,1,1.68,2.09l-7.36,5.92,7.35,5.81A1.34,1.34,0,0,1,319,72,1.31,1.31,0,0,1,317.93,72.48Z" fill="#fff"></path>
                                        <path d="M333.63,72.48a1.31,1.31,0,0,1-1.05-.51,1.34,1.34,0,0,1,.22-1.88l7.35-5.81-7.36-5.92a1.34,1.34,0,0,1,1.68-2.09l8.67,7a1.33,1.33,0,0,1,0,2.09l-8.67,6.85A1.31,1.31,0,0,1,333.63,72.48Z" fill="#fff"></path>
                                        <path d="M322.14,72.48a1.37,1.37,0,0,1-.55-.12,1.34,1.34,0,0,1-.66-1.77l6.31-13.83a1.34,1.34,0,0,1,2.44,1.11L323.36,71.7A1.33,1.33,0,0,1,322.14,72.48Z" fill="#fff"></path>
                                        <rect x="76.04" y="186.29" width="253.8" height="60.13" fill="#c9c9c9"></rect>
                                        <rect x="76.04" y="180.36" width="253.8" height="10.85" fill="#e6e6e6"></rect>
                                        <rect x="54.61" y="51.81" width="100.38" height="79.29" fill="#24285b"></rect>
                                        <rect x="83.95" y="95.86" width="32.24" height="3.61" fill="#f96400"></rect>
                                        <rect x="93.2" y="85.81" width="28.83" height="3.61" fill="#ffd200"></rect>
                                        <rect x="105.48" y="113.75" width="15.04" height="3.61" fill="#ffd200"></rect>
                                        <rect x="93.2" y="104.58" width="38.42" height="3.61" fill="#f96400"></rect>
                                        <rect x="71.99" y="104.58" width="14.45" height="3.61" fill="#fff"></rect>
                                        <rect x="86.38" y="114.06" width="14.45" height="3.61" fill="#fff"></rect>
                                        <rect x="62.74" y="95.86" width="14.45" height="3.61" fill="#fff"></rect>
                                        <circle cx="61.18" cy="57.89" r="1.7" fill="#fff"></circle>
                                        <circle cx="66.24" cy="57.89" r="1.7" fill="#f96400"></circle>
                                        <circle cx="71.01" cy="57.89" r="1.7" fill="#ffd200"></circle>
                                        <rect x="62.74" y="68.42" width="14.45" height="3.61" fill="#fff"></rect>
                                        <rect x="71.99" y="77.44" width="14.45" height="3.61" fill="#fff"></rect>
                                        <rect x="93.2" y="77.44" width="28.83" height="3.61" fill="#ffd200"></rect>
                                        <rect x="71.99" y="85.81" width="14.45" height="3.61" fill="#fff"></rect>
                                        <rect x="82.97" y="68.42" width="29.77" height="3.61" fill="#f96400"></rect>
                                        <rect x="118.96" y="68.42" width="21.13" height="3.61" fill="#f96400"></rect>
                                        <path d="M236,174.35s-21.83-6.32-19.21,6H236Z" fill="#f4a28c"></path>
                                        <rect x="188.81" y="176.97" width="41.29" height="3.39" fill="#e6e6e6"></rect>
                                        <rect x="125.82" y="94.09" width="86.86" height="65.76" fill="#e6e6e6"></rect>
                                        <path d="M264.8,101.92s-17.05,12.43-9.3,35.31c11.55,34.09-46.42,32.39-46.42,32.39L213.8,181l66.53-5.71,5.79-23Z" opacity="0.08"></path>
                                        <polygon points="161.28 135.11 151.94 180.36 198.15 180.36 198.15 174.35 175.05 172.87 173.08 135.11 161.28 135.11" fill="#c9c9c9"></polygon>
                                        <path d="M264.14,104.62a12,12,0,0,1,14.78-10.18c9.26,2.3,20.89,9.58,22.63,31.4,2.95,37-7.54,54.52-7.54,54.52H236V173l40.27-4.92S261,130.13,264.14,104.62Z" fill="#f96400"></path>
                                        <path d="M264.14,104.62a12,12,0,0,1,14.78-10.18c9.26,2.3,20.89,9.58,22.63,31.4,2.95,37-7.54,54.52-7.54,54.52H236V173l40.27-4.92S261,130.13,264.14,104.62Z" fill="#fff" opacity="0.46"></path>
                                        <path d="M98.2,170.65s-8.19-2.24-10-9.87c0,0,12.7-2.57,13.06,10.54Z" fill="#f96400" opacity="0.58"></path>
                                        <path d="M99.21,169.83s-5.73-9.05-.69-17.52c0,0,9.66,6.14,5.37,17.54Z" fill="#f96400" opacity="0.73"></path>
                                        <path d="M100.68,169.84s3-9.56,12.18-11.37c0,0,1.71,6.2-5.93,11.4Z" fill="#f96400"></path>
                                        <polygon points="94.74 169.62 96.4 180.99 106.86 181.04 108.41 169.68 94.74 169.62" fill="#24285b"></polygon>
                                    </svg>
                                </div>
                            </div>

                            <form action="" onSubmit={handleSubmit}>
                                <div className="right" style={{marginLeft:"8rem"}}>
                                    <h1 style={{color:"blue"}}>Se connecter</h1>
                                    <section>

                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                                required 
                                                value={email} 
                                                ref={emailRef} 
                                                autoComplete="off" 
                                                onChange={(e) => setEmail(e.target.value)} 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input style={{width:"450px"}} type="password" className="form-control" id="exampleInputPassword1"
                                                required 
                                                value={pwd} 
                                                ref={emailRef}
                                                onChange={(e) => setPwd(e.target.value)} 
                                            />
                                        </div>
                                            <button type="submit" className="btn btn-primary">Se connecter</button>
                                    </section>
                                    <p>Si vous n'avez pas de compte veuillez vous <Link to="/Inscription">Vous inscrire</Link> </p>
                                </div>
                            </form>

                        </div>
                </section>
            )}
        </>
    )
}

export default SignIn;