import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import EmailIcon from '../images/email_icon.png'

const ContactForm = () => {
  return (

      <div className="bg-white min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto w-20 border-red"
              src={EmailIcon}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Leave me a message if you want to chat.</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                return to top
              </a>
            </p>
          </div>
          <form className="mt-10 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
              <label htmlFor="email-address" className="sr-only">
              Email address
              </label>
                <input
                  id="email-address"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  />
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <textarea 
                id="message"
                name="message"
                className="appearance-none rounded-none relative block
                w-full h-40 px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-t-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Write your message here">
                </textarea>
               
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
              
           
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
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

export default ContactForm