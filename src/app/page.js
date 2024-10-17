"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-8 font-sans bg-gray-50 dark:bg-gray-900">
      <main className="flex-grow">
        <section className="container px-16 mx-auto flex flex-col lg:flex-row items-center lg:space-x-8 pb-5">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-800 dark:text-gray-200">
              Welcome to Our <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out">
              Discover insightful articles, tips, and resources to help you <br className="hidden lg:block" /> enhance your projects and skills!
            </p>
          </div>
          <div className="flex-1 mt-8 lg:mt-0">
            <Image src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" width={500} height={500} className="mx-auto" />
          </div>
        </section>

        <section id="pricing" className="py-16 bg-gray-100 dark:bg-gray-800 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-12">
              Pricing Plans {/* Centered Heading */}
              <span className="text-sm font-medium text-center block mt-4">
                Choose the plan that suit you
              </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* <!-- Basic Plan --> */}
              <div className="pricing-tier bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-blue-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-4">
                  Basic Plan
                </h2>
                <p className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
                  $9.99
                  <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Basic Support</h3>
                      <p className="text-sm">Email support during business hours.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Limited Access</h3>
                      <p className="text-sm">Access to basic content and features.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Basic Analytics</h3>
                      <p className="text-sm">Simple analytics tools to monitor usage.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Community Access</h3>
                      <p className="text-sm">Join our community forums for peer support.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Monthly Updates</h3>
                      <p className="text-sm">Receive monthly updates and newsletters.</p>
                    </div>
                  </li>
                </ul>
                <Button className=" w-full m-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300" variant="outline" href="/">Read more</Button>
              </div>


              {/* <!-- Standard Plan --> */}
              <div className="pricing-tier bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-purple-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-4">
                  Standard Plan
                </h2>
                <p className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
                  $19.99
                  <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Standard Support</h3>
                      <p className="text-sm">
                        Access to our support team during extended business hours.
                      </p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Full Access</h3>
                      <p className="text-sm">Access to all standard content and features.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Enhanced Analytics</h3>
                      <p className="text-sm">Advanced insights and analytics tools.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Customizable Dashboard</h3>
                      <p className="text-sm">
                        Personalize your dashboard with essential features.
                      </p>
                    </div>
                  </li>
                  {/* <!-- Additional Points --> */}
                  <li className="text-gray-700 dark:text-gray-300 flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Monthly Reports</h3>
                      <p className="text-sm">
                        Receive detailed monthly performance reports.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button className=" w-full m-2 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300" variant="outline" href="/">Read more</Button>
              </div>

              {/* <!-- Premium Plan --> */}
              <div className="pricing-tier bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-red-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-red-600 dark:text-red-300 mb-4">
                  Premium Plan
                </h2>
                <p className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
                  $29.99
                  <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="text-gray-700 dark:text-gray-300 flex items-center hover:text-blue-500">
                    <svg
                      className="w-6 h-6 text-yellow-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Priority Support</h3>
                      <p className="text-sm">Get 24/7 access to our dedicated support team.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center hover:text-blue-500">
                    <svg
                      className="w-6 h-6 text-yellow-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Unlimited Access</h3>
                      <p className="text-sm">Enjoy unlimited access to all premium content.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center hover:text-blue-500">
                    <svg
                      className="w-6 h-6 text-yellow-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Advanced Analytics</h3>
                      <p className="text-sm">Gain insights with our advanced analytics tools.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center hover:text-blue-500">
                    <svg
                      className="w-6 h-6 text-yellow-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Customizable Dashboard</h3>
                      <p className="text-sm">Personalize your dashboard to suit your needs.</p>
                    </div>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 flex items-center hover:text-blue-500">
                    <svg
                      className="w-6 h-6 text-yellow-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold">Exclusive Webinars</h3>
                      <p className="text-sm">
                        Attend exclusive webinars hosted by industry experts.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button className=" w-full m-2 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300" variant="outline" href="/">Read more</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 pt-32 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-extrabold  text-gray-800 dark:text-gray-200 mb-12 text-center">Top Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img src="https://images.pexels.com/photos/16129703/pexels-photo-16129703/free-photo-of-man-coding-on-computers-sitting-at-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 1" className="w-full h-64 object-cover" />
                <div className="p-6 ">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Blog Title 1</h3>
                  <p className="text-gray-600 mb-5">A brief description of the blog content goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/">Read more</Button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img src="https://images.pexels.com/photos/16023919/pexels-photo-16023919/free-photo-of-photo-of-a-html-code.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Blog Title 2</h3>
                  <p className="text-gray-600 mb-5">A brief description of the blog content goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/">Read more</Button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img src="https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 3" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Blog Title 3</h3>
                  <p className="text-gray-600 mb-5">A brief description of the blog content goes here. It should be engaging and informative.</p>
                  <Button className="m-2" variant="outline" href="/">Read more</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        


       



        <section id="services" class="py-16 bg-gray-50 dark:bg-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl mb-4">Our Services</h2>
              <p class="max-w-2xl mx-auto text-xl text-gray-500 dark:text-white">We offer a wide range of services to meet your needs. Our team is dedicated to providing top-notch solutions for your business.</p>            </div>
            <div class="mt-10">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="service-item bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 dark:bg-indigo-900">
                  <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-yellow-300">Consulting</h3>
                  <p class="text-gray-600 dark:text-pink-300">Expert advice to help you make informed decisions and achieve your business goals.</p>
                </div>
                <div class="service-item bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 dark:bg-indigo-900">
                  <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-yellow-300">New Service</h3>
                  <p class="text-gray-600 dark:text-pink-300">Description of the new service offered.</p>
                </div>
                <div class="service-item bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 dark:bg-indigo-900">
                  <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-yellow-300">Support</h3>
                  <p class="text-gray-600 dark:text-pink-300">Reliable support to ensure your systems are running smoothly and efficiently.</p>
                </div>

              </div>
            </div>
          </div>
        </section>


      </main>
      <footer className="flex justify-center items-center py-4 bg-gray-100 dark:bg-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}