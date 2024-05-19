import React from "react";
import Herobg from "../../assets/images/herobg.jpg";
import Work1 from "../../assets/images/work1.jpg";
import Work2 from "../../assets/images/work2.jpg";

export default function Hero() {
  return (
    <div>
      <div>
        <div>
          <div class="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
            <div class="mb-10 rounded overflow-hidden flex flex-col mx-auto">
              <p class="text-xl sm:text-5xl font-bold inline-block mb-4">
                The Understanding The Role of a Real Estate Developer in Today's
                Market
              </p>
              <span>May 17, 2024 | Blog</span>

              <div class="relative">
                <a href="#">
                  <img
                    class="w-full"
                    src={Herobg}
                    alt="Sunset in the mountains"
                  />
                </a>
                <a
                  href="#!"
                  class="hidden absolute z-10 text-xs bottom-0 left-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"
                >
                  <span class="text-lg">|</span>&nbsp;&nbsp;<span>Cooking</span>
                </a>

                <a
                  href="#!"
                  class="hidden absolute z-10 text-xs bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"
                >
                  <span class="text-lg">|</span>&nbsp;&nbsp;
                  <span>Read more</span>
                </a>
              </div>
              <p class="text-gray-700 py-5 text-base leading-8">
                A real estate developer is part of a complex business that
                involves a wide range of processes, from sourcing land to
                designing plans, obtaining permits, financing, building, and
                eventually selling or leasing a property. At the center of this
                intricate system are real estate developers – the visionary
                minds behind creating, building, and managing real estate
                projects.
              </p>
              <p className="my-2">
                In this blog post, we’ll take a deep dive into how real estate
                developers work. We’ll explore what they do, how they do it, and
                why they matter in today’s dynamic real estate industry.
              </p>
              <h2 className="my-2 text-3xl  font-family:Arial">
                The Creative Mindset
              </h2>
              <p>
                Real estate development starts with an idea – an innovative
                concept that responds to the needs, preferences, and trends of
                the local market.{" "}
                <span className="text-blue-500">
                  Real estate developers are responsible for coming up with
                  these ideas by researching and analyzing demographic data,
                  market trends, zoning laws, and other factors that impact the
                  feasibility of a project
                </span>
                . They use their creativity, instincts, and experience to come
                up with solutions that address the challenges of a particular
                site or location. This requires a deep understanding of what
                potential tenants or buyers want, as well as an ability to think
                outside the box.
              </p>
              <h2 className="my-2  text-3xl  font-family:Arial">
                The Project Management Expert
              </h2>
              <p>
                Once a developer has a vision for a project, they need to
                assemble a team of professionals who can help turn that vision
                into a reality. This includes architects, engineers,
                contractors, and other specialists who bring their expertise to
                the table.{" "}
                <span className="bg-purple-200">
                  Real estate developers are responsible for managing the
                  project from start to finish, ensuring that each stage is
                  completed on time, within budget, and according to
                  specifications. They must also ensure that the project meets
                  all regulatory requirements and obtains the necessary permits
                  and approvals
                </span>
                .
              </p>
              <hr className="my-14"></hr>
              <div className="bg-gray-100">
                <div>
                  <h2 className="text-center text-6xl font-bold text-orange-400 my-4">
                    View Our Work
                  </h2>
                </div>
                <div className="grid grid-cols-2 ">
                  <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
                    <div class="relative">
                      <img
                        class="w-full h-64 object-cover"
                        src={Work1}
                        alt="Image"
                      />
                      <div class="absolute top-0 right-0">
                        <div class="w-32 h-8 absolute top-4 -right-8">
                          <div class="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                            SALE
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-4">
                      <h3 class="text-2xl font-semibold mb-2">Product Sale</h3>
                    </div>
                  </div>
                  <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
                    <div class="relative">
                      <img
                        class="w-full h-64 object-cover"
                        src={Work2}
                        alt="Image"
                      />
                      <div class="absolute top-0 right-0">
                        <div class="w-32 h-8 absolute top-4 -right-8">
                          <div class="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                            SALE
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-4">
                      <h3 class="text-2xl font-semibold mb-2">Product Sale</h3>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <h2 className="mt-12 mb-4  text-3xl  font-family:Arial">
                The Financing Specialist
              </h2>
              <p>
                Real estate development requires significant capital, so
                developers need to have a deep understanding of financing
                options and strategies. They must be able to secure funding from
                lenders, investors, and other sources to cover the costs of the
                project. This requires a thorough knowledge of real estate
                finance, accounting, and tax laws, as well as an ability to
                negotiate favorable terms and manage risks effectively.
              </p>
              <h2 className="my-2  text-3xl  font-family:Arial">
                The Marketing and Sales Guru
              </h2>
              <p>
                A real estate project is only successful if it is marketed and
                sold effectively. Real estate developers are responsible for
                creating a strategic marketing plan that targets the right
                buyers and tenants and positions the project in the most
                appealing way possible. They must also be skilled at negotiating
                lease or sale agreements and closing deals that result in
                profitable returns on investment. This requires a strong
                understanding of real estate sales and marketing, as well as
                excellent communication and negotiation skills.
              </p>
              <h2 className="my-2  text-3xl  font-family:Arial">
                The Visionary and Planner
              </h2>
              <p>
                Finally,
                <span className="text-blue-400">real estate developers are visionaries and planners</span>
                who are committed to creating long-term value in the communities
                where they build. They must be able to anticipate future trends
                and needs, and design projects that respond to them while
                maintaining a high level of quality and sustainability. They
                must also be committed to enhancing the local community and
                creating spaces that are both functional and beautiful.
              </p>
              <div class="py-5 text-sm font-regular text-gray-900 flex">
                <span class="mr-3 flex flex-row items-center">
                  <svg
                    class="text-indigo-600"
                    fill="currentColor"
                    height="13px"
                    width="13px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enablebackground: "new 0 0 512 512:" }}
                    xmlspace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span class="ml-1">6 mins ago</span>
                </span>
                <a
                  href="#"
                  class="flex flex-row items-center hover:text-indigo-600"
                >
                  <svg
                    class="text-indigo-600"
                    fill="currentColor"
                    height="16px"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    ></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                  <span class="ml-1">AliSher Azimi</span>
                </a>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
