import React from 'react';
import './Contact.css';


class Contact extends React.Component{

        constructor(props){
            super(props);

            this.state={
                name: '',
                email : '',
                mobile: '',
                message: ''
            }
        }
        nc(event){
            this.setState({name:event.target.value});
        }
        ec(event){
            this.setState({email:event.target.value});
        }
        mc(event){
            this.setState({mobile:event.target.value});
        }   
        mec(event){
            this.setState({message:event.target.value});
        }
        savedata(){
            fetch('http://localhost:4000/user/ins',{
                method : 'POST',
                headers:{
                    'Content -Type': 'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
            })
        }

  render() {
    return(
        <>
          <section class="bg-contact bg-section" id="contact">
                <div class="container-fluid">
                <h3 className="text-center"><strong>Contact Us</strong></h3><br></br>
                <br></br>
                    <div class="row slideanim">
                        <div class="col-md-6 col-sm-6 contact-left">
                            <div class="left-box">
                                <address class="contact">
                                <div className="box">
                                <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                                <div className="text">
                                  <h3><strong>Address</strong></h3>
                                 <p> #S1 Siddhartha Castle New Nallakunta<br></br> Hyderabad 500-045</p>
                                 </div>
                                 </div>
                                 <div className="box">
                                 <div className="icon"><i class="fa fa-phone" aria-hidden="true"><h3><strong>Mobile</strong></h3></i></div>
                                 <div className="text">
                                <p>7799291899 , 7799137899</p>
                                </div>
                                 </div>
                                <div className="box">
                                <div className="icon"><i class="fa fa-envelope" aria-hidden="true"><h3><strong>Email</strong></h3></i></div>
                                <div className="text">
                                <p>lsdairyproductspvtltd@gmail.com</p>
                                </div>
                                </div>
                                </address>
                            </div>
                        </div>

                <div class="col-md-6 col-sm-6 contact-right" >
                            
                <div className="contactForm">
                        <form>
                            <h3><strong>Send Message</strong></h3>
                            <div className="inputBox">
                            <span>Name</span><br></br>
                            <input type="text" name =""value={this.state.name} onChange = {this.nc.bind(this)}  requried="requried" />
                            </div>
                             <div className="inputBox">
                             <span>Email</span><br></br>
                            <input type="text"  name ="" value={this.state.email} onChange = {this.ec.bind(this)} requried="requried" />
                            </div>
                            <div className="inputBox">
                             <span>Mobile</span><br></br>
                            <input type="text"  name ="" value={this.state.mobile} onChange = {this.mc.bind(this)}  name="" requried="requried" />
                            </div>
                             <div className="inputBox">
                             <span>Your Message</span> <br></br>
                            <input type="text"  name ="" value={this.state.message} onChange = {this.mec.bind(this)} name="" requried="requried" />
                            </div>
                             <div className="inputBox">
                            <input type="button"  value="Send" onClick={this.savedata.bind(this)} />
                             </div>
                        </form>
                  
                </div>
                </div>
                </div>
            </div>
            
            </section>
        </>
    );
    };
};

export default Contact;