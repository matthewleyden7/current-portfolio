import React from 'react';
import emailjs from "emailjs-com";
import EmailIcon from '../images/email_icon.png'


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_paj1lv8', 'template_lmkmn46', e.target, 'nx77vyBIoBHdX-ljt')
        .then((result) => {
            console.log(result.text);
            alert("success!")
        }, (error) => {
            console.log(error.text);
            alert("failure")
        });
        e.target.reset()
    }

    return(
       
            <div className="container">

            <div className="max-w-md w-full space-y-8">
            <div>
            <img
              className="mx-auto w-20 border-red"
              src={EmailIcon}
              alt="Workflow"
            />
            <h2 className="mt-4 text-center text-2xl font-extrabold text-slate-900">Leave me a message if you want to chat.</h2>
            <p className=" text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                return to top
              </a>
            </p>
          </div>

            <form onSubmit={sendEmail}>
                    <div className="row mx-auto border-1 border-slate-700 space-y-2">
                        
                        <div className="col-8 form-group mx-auto  border-4 border-slate-700 
                        w-full rounded-xl pb-1">

                        <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        required
                        className="form-control appearance-none rounded-none relative block
                        w-full px-3 py-2 
                        placeholder-gray-500 text-slate-900 rounded-t-md
                        focus:outline-none focus:ring-indigo-500 pl-4
                        focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Name"
                        />

                        </div>
                        <div className="col-8 form-group pt-2 mx-auto  border-4 border-slate-700 rounded-xl
                         pb-1">

                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="form-control appearance-none pl-4 rounded-none relative block
                        w-full px-3 py-2 
                        placeholder-gray-500 text-slate-900 rounded-t-md
                        focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                      />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto  border-4 border-slate-700  rounded-xl
                         pb-1 focus:outline-none">
                            <input type="text" className="form-control appearance-none pl-4 rounded-none relative block
                            w-full px-3 py-2 
                            placeholder-gray-500 text-slate-900 rounded-t-md
                            focus:outline-none focus:ring-indigo-500
                            focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto  border-4 border-slate-700 rounded-xl
                         pb-1 focus:outline-none">
                        <textarea 
                        id="message"
                        name="message"
                        className="form-control appearance-none rounded-none relative block
                        w-full h-32 px-3 py-2 pl-4
                        placeholder-gray-500 text-slate-900 rounded-t-md
                        focus:outline-none 
                         focus:z-10 sm:text-sm"
                        placeholder="Write your message here">
                        </textarea>
                        </div>

                            <button
                    type="submit"
                    value="Send Email"
                    className="btn btn-info relative w-full flex justify-center
                    py-2 px-4 border border-transparent text-sm font-medium
                    rounded-md text-white bg-slate-800 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-indigo-500"
                >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              
                </span>
                Submit
              </button>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}