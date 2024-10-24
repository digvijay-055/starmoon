import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city"; // Type for Document Head

export default component$(() => {
  return (
    <div>
      {/* Hero Section */}
      <section class="bg-[#E2F2FF] py-14 pb-24">
        <div class="wrapper">
          {/* Heading */}
          <h1 class="text-7xl font-bold text-primaryColor-shade-200 text-center w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            Book a consultant's Appointment in Just 10 <br /> Minutes with Starmoon.
          </h1>
          <h2 class="mt-2 text-lg font-normal text-black-tint-200 text-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
            Say goodbye to your hectic business flows and Traditional ways of
            managing the work flow. Take the first step towards the automation
            of your business.
          </h2>

          {/* SEARCH BAR  */}
          <div class="px-4 sm:px-12 md:px-24 lg:px-32 xl:px-64">
            <form
              action="/search"
              method="GET"
              autocomplete="off"
              aria-autocomplete="none"
              preventdefault:submit
              class="mobile w-full"
            >
              <div class="searchSubmit block items-center justify-between gap-0 px-0 lg:px-6 2xl:flex 2xl:gap-3">
                <div class="searchWrapper relative my-4 mt-6 w-full">
                  <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="fill-steel-blue-t01"
                      >
                        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
                      </svg>
                    </span>

                    <input
                      placeholder="Search hardware, software, Bitrix, AWS..."
                      type="search"
                      name="q"
                      required
                      aria-autocomplete="none"
                      autoComplete="off"
                      class="placeholder:text-black-tint-400 focus:ring-sky-500 block w-full rounded-full shadow-lg border-2 border-white bg-white p-4 pl-14 outline-none focus:border-2 focus:border-primaryColor-tint-100 focus:outline-none focus:ring-1 sm:text-sm"
                    />
                  </label>
                </div>
              </div>
            </form>

            <div class="flex flex-row items-center flex-wrap space-y-1 space-x-2 px-0 lg:px-6" on-document:recent_query_found="">
            <div class="text-black-tint-300 ml-2">Recent:
              </div>
              <a href="/search?q=" 
              class="px-4 py-1 rounded-full text-primaryColor-tint-100 border-primaryColor-tint-100 border-solid border-[1px] text-sm">
                Software Expert
                </a>
          </div>
          </div>

          {/* Hero Section Cards */}
          <div class="mt-10 container mx-auto flex flex-row flex-wrap justify-evenly xl:justify-between xl:flex-nowrap">
            <a href=" " data-prefetch class="home-service-card">
              <img
                decoding="async"
                loading="eager"
                data-hash="qnYFTpiZlpuAXKaKhlenOqaICHaGYGc="
                alt="Software Solution"
                sizes="(min-width: 640px) 220px, 300px"
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
                width="400"
                height="340"
              />
              <div class="flex flex-col p-4 items-center text-center">
                <div class="text-xl font-bold">Software Solution</div>
                <div class="mt-1 text-sm text-black-tint-400">
                Our software solution services empower businesses to streamline operations and enhance productivity.
                </div>
              </div>
            </a>
            <a
              href="/search?type="
              data-prefetch
              class="home-service-card"
            >
              <img
                decoding="async"
                loading="eager"
                data-hash="K1YFRpSWrDKnGdZgrrRHqVh7CIV1UFg="
                alt="Hardware Solutions"
                sizes="(min-width: 640px) 220px, 300px"
                src="https://images.pexels.com/photos/6937933/pexels-photo-6937933.jpeg?auto=compress&cs=tinysrgb&w=600"
                width="400"
                height="340"
              />
              <div class="flex flex-col p-4 items-center text-center">
                <div class="text-xl font-bold">Hardware Solutions</div>
                <div class="mt-1 text-sm text-black-tint-400">
                From design and installation to maintenance and support, we ensure your systems are efficient and up-to-date.
                </div>
              </div>
            </a>
            <a href=" "  class="home-service-card">
              <img
                decoding="async"
                loading="eager"
                data-hash="YrcJNpKWp3ePd3eUiKhlmIlnaZCVB1g="
                alt="IT Infrastructure"
                sizes="(min-width: 640px) 220px, 300px"
                src="https://images.pexels.com/photos/4523034/pexels-photo-4523034.jpeg?auto=compress&cs=tinysrgb&w=600"
                width="400"
                height="340"
              />
              <div class="flex flex-col p-4 items-center text-center">
                <div class="text-xl font-bold">IT Infrastructure</div>
                <div class="mt-1 text-sm text-black-tint-400">
                From network setup to security, we create a resilient infrastructure tailored to your business needs.
                </div>
              </div>
            </a>
            <a href=" " data-prefetch class="home-service-card">
              <img
                decoding="async"
                loading="eager"
                data-hash="qXYFPpKKl5iNhVY4mqZnh4iwJ2ZwYgY="
                alt="Digital Marketing"
                sizes="(min-width: 640px) 220px, 300px"
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
                width="400"
                height="340"
              />
              <div class="flex flex-col p-4 items-center text-center">
                <div class="text-xl font-bold">Digital Marketing</div>
                <div class="mt-1 text-sm text-black-tint-400">
                From SEO to content creation and PPC campaigns, we tailor strategies that resonate with your audience.
                </div>
              </div>
            </a>

            <a
              href="/domiciliary-services"
              data-prefetch
              class="home-service-card"
            >
              <img
                decoding="async"
                loading="eager"
                data-hash="KFYFNpKqaoV/aHdyhpl3iYiIS4C4BIg="
                alt="Website Development"
                sizes="(min-width: 640px) 220px, 300px"
                src="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=800"
                width="400"
                height="340"
              />
              <div class="flex flex-col p-4 items-center text-center">
                <div class="text-xl font-bold">Website Development</div>
                <div class="mt-1 text-sm text-black-tint-400">
                We focus on building visually stunning and highly functional websites that meet your business goals.
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Consult our top specialized experts Section */}
      <section class="expertsSection wrapper pt-8 xl:pt-12 3xl:pt-16">
        <div class="container mx-auto">
          {/* All Speacializations */}
          <div class="mb-10 grid gap-4 sm:grid-flow-col">
            {/* <!-- Heading --> */}
            <div>
              <h4 class="font-dm text-md text-xl sm:text-2xl font-bold lg:text-4xl mb-2 block text-black">
                Consult our top specialized experts
              </h4>
              <p class="font-medium text-black-tint-400">
                Our experts are ready to serve you 24/7
              </p>
            </div>
            {/* <!-- View all --> */}
            <div class="hidden sm:block">
              <div class="text-center md:text-right">
                <a
                  href="/specializations"
                  data-prefetch
                  class="w-full md:w-auto inline-block font-semibold border-2 md:border-0 border-primaryColor rounded text-base px-4 py-2 text-primary-steel-blue"
                >
                  <span class="align-middle">View all</span>
                  <span class="text-primaryColor inline-block relative top-[2px] align-text-bottom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="fill-primary-steel-blue"
                    >
                      <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Specialized Services */}
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <div class="mb-4 text-center">
              <a href="" data-prefetch class="block">
                <div class="mb-5">
                  <img
                    decoding="async"
                    loading="eager"
                    sizes="112px"
                    src="https://th.bing.com/th/id/OIP.ld_E_jOSwTopSJ6kot2iSwHaEc?w=306&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7 "
                    width="336"
                    height="336"
                    alt="Business Consultant"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Business Consultant
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  data-prefetch
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href=" " class="block">
                <div class="mb-5">
                  <img
                    sizes="112px"
                    src="https://th.bing.com/th/id/OIP.Zc3KlB2BYCpW7v1QQa-EUgHaEL?w=288&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7 "
                    width="336"
                    height="336"
                    alt="Techno Commercial Expert"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Techno Commercial Expert
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href=" " data-prefetch class="block">
                <div class="mb-5">
                  <img
                    decoding="async"
                    loading="eager"
                    sizes="112px"
                    src="data:image/jpeg;base64,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 "
                    width="336"
                    height="336"
                    alt="Website Development Expert"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Website Development Expert
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  data-prefetch
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href="" data-prefetch class="block">
                <div class="mb-5">
                  <img
                    decoding="async"
                    loading="eager"
                    sizes="112px"
                    src="data:image/jpeg;base64,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 "
                    width="336"
                    height="336"
                    alt="Software Development Expert"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Software Development Expert
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  data-prefetch
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href=" " class="block">
                <div class="mb-5">
                  <img
                    sizes="112px"
                    src="data:image/jpeg;base64,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 "
                    width="336"
                    height="336"
                    alt="Bitrix24 Expert"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Bitrix24 Expert
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href=" " data-prefetch class="block">
                <div class="mb-5">
                  <img
                    decoding="async"
                    loading="eager"
                    sizes="112px"
                    src="data:image/jpeg;base64,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 "
                    width="336"
                    height="336"
                    data-hash="soWFHQYs95aXWZ9glfeXf3/5CFh4h3CDVw"
                    alt="Digital Marketing Expert"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Digital Marketing Expert
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  data-prefetch
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
          </div>

          <div class="mt-4 block sm:hidden">
            <div class="text-center md:text-right">
              <a
                href=" "
                class="w-full md:w-auto inline-block font-semibold border-2 md:border-0 border-primaryColor rounded text-base px-4 py-2 text-primary-steel-blue"
              >
                <span class="align-middle">View all</span>
                <span class="text-primaryColor inline-block relative top-[2px] align-text-bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="fill-primary-steel-blue"
                  >
                    <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call TO Action Section --> */}
      <section class="call-to-action mt-10 bg-primaryColor-shade-200 py-8">
        <div class="wrapper flex flex-col items-start gap-8 sm:flex-row xl:items-center xl:gap-16">
          {/* Image */}
          <a href=" ">
            <div class="overflow-hidden rounded sm:max-w-[270px] xl:max-w-[395px]">
              <img
                sizes="(min-width: 1024px) calc(395px - 30px), (min-width: 768px) calc(270px - 30px), calc(100vw - 30px)"
                src="https://media.istockphoto.com/id/1365436734/photo/group-of-business-persons-talking-in-the-office.jpg?s=612x612&w=0&k=20&c=HMfrS47_CcQK8UTUegQNKlzmoenMLTPdm17uuJoNUw4= "
                width="400"
                height="250"
                alt="Need an Expert to connect with you? Dial - 09555303220"
                class="rounded"
              />
            </div>
          </a>
          {/* Text Data */}
          <div class="flex-1">
            <a href=" ">
              <h2 class="mb-3 text-4xl font-bold text-white xl:text-6xl">
                Need an Expert to connect with you? Dial - 09555303220
              </h2>
            </a>
            <p class="text-sm text-white xl:text-base">
              Starmoon Consulting Services Private Limited is engaged in
              bringing new ways of simplifying the corporate life. We help
              companies to reduce their current running cost by implementing the
              latest technology which are running in the market.
            </p>
            <a
              href=" "
              class="default-button inline-block w-auto !py-4 !px-8 !text-sm"
            >
              Request
            </a>
          </div>
        </div>
      </section>

      {/* Products Wrapper */}
      <section class="productsSection wrapper py-10 xl:py-14 3xl:py-24">
        <div class="container mx-auto">
          <div class="mb-10 grid gap-5 sm:grid-flow-col">
            <h4 class="font-dm text-md text-xl sm:text-2xl font-bold lg:text-5xl block text-black xl:font-lg">
              We are ready to help at your business automation
            </h4>
            <div class="hidden sm:block">
              <div class="text-center md:text-right">
                <a
                  href=" "
                  class="w-full md:w-auto inline-block font-semibold border-2 md:border-0 border-primaryColor rounded text-base px-4 py-2 text-primary-steel-blue"
                >
                  <span class="align-middle">View all</span>
                  <span class="text-primaryColor inline-block relative top-[2px] align-text-bottom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="fill-primary-steel-blue"
                    >
                      <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="grid gap-5 sm:grid-flow-col">
            <div class="mb-4 rounded-lg border border-primaryColor-tint-300 bg-primaryColor-tint-500 p-4 lg:p-6">
              <a href=" ">
                <div class="mb-6 text-center">
                  <img
                    sizes="(min-width: 1366px) calc(calc((1256px / 3) - 76px) - 30px), (min-width: 640px) calc(calc((100vw / 3) - 67px) - 30px), (min-width: 390px) calc(326px - 30px), calc(100vw - 64px)"
                    src="https://th.bing.com/th/id/OIP.s3OfoSJDZaz9nr_ms3t6TgHaEK?rs=1&pid=ImgDetMain "
                    width="600"
                    height="370"
                    alt="Bitrix24"
                    class="mx-auto w-full object-cover rounded"
                  />
                </div>
                <div>
                  <h6 class="mb-4 border-b border-primaryColor-tint-300 pb-4 text-center text-lg font-bold text-primaryColor">
                    Bitrix24
                  </h6>
                </div>
              </a>
              <div>
                <div class="cardList space-y-4">
                  <div class="flex items-center">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.332764 13.0653L5.98804 18.7206L7.39804 17.3006L1.74775 11.6503L0.332764 13.0653ZM22.2473 5.28136L11.648 15.8906L7.41118 11.6437L5.98118 13.0537L11.648 18.7206L23.6673 6.70136L22.2473 5.28136ZM18.0089 6.69979L16.5989 5.27979L10.228 11.6506L11.648 13.0606L18.0089 6.69979Z"
                          fill="#71BFFB"
                        ></path>
                      </svg>
                    </p>
                    <p class="ml-2 text-black-tint-200">
                      <a href=" ">Collaboration and Communication Tools</a>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.332764 13.0653L5.98804 18.7206L7.39804 17.3006L1.74775 11.6503L0.332764 13.0653ZM22.2473 5.28136L11.648 15.8906L7.41118 11.6437L5.98118 13.0537L11.648 18.7206L23.6673 6.70136L22.2473 5.28136ZM18.0089 6.69979L16.5989 5.27979L10.228 11.6506L11.648 13.0606L18.0089 6.69979Z"
                          fill="#71BFFB"
                        ></path>
                      </svg>
                    </p>
                    <p class="ml-2 text-black-tint-200">
                      <a href=" ">Project and Task Management</a>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.332764 13.0653L5.98804 18.7206L7.39804 17.3006L1.74775 11.6503L0.332764 13.0653ZM22.2473 5.28136L11.648 15.8906L7.41118 11.6437L5.98118 13.0537L11.648 18.7206L23.6673 6.70136L22.2473 5.28136ZM18.0089 6.69979L16.5989 5.27979L10.228 11.6506L11.648 13.0606L18.0089 6.69979Z"
                          fill="#71BFFB"
                        ></path>
                      </svg>
                    </p>
                    <p class="ml-2 text-black-tint-200">
                      <a href=" ">CRM and Sales Automation</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4 rounded-lg border border-primaryColor-tint-300 bg-primaryColor-tint-500 p-4 lg:p-6">
              <a href=" ">
                <div class="mb-6 text-center">
                  <img
                    sizes="(min-width: 1366px) calc(calc((1256px / 3) - 76px) - 30px), (min-width: 640px) calc(calc((100vw / 3) - 67px) - 30px), (min-width: 390px) calc(326px - 30px), calc(100vw - 64px)"
                    src="https://th.bing.com/th/id/OIP.2lNGYaa8HhnVGpKy0RutFgHaFj?w=210&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7 "
                    width="600"
                    height="370"
                    alt="AWS Servers"
                    class="mx-auto w-full object-cover rounded"
                    style="width: 65%;"
                  />
                </div>
                <div>
                  <h6 class="mb-4 border-b border-primaryColor-tint-300 pb-4 text-center text-lg font-bold text-primaryColor">
                    AWS Servers
                  </h6>
                </div>
              </a>
              <div>
                <div class="cardList space-y-4">
                  <div class="flex items-center">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.332764 13.0653L5.98804 18.7206L7.39804 17.3006L1.74775 11.6503L0.332764 13.0653ZM22.2473 5.28136L11.648 15.8906L7.41118 11.6437L5.98118 13.0537L11.648 18.7206L23.6673 6.70136L22.2473 5.28136ZM18.0089 6.69979L16.5989 5.27979L10.228 11.6506L11.648 13.0606L18.0089 6.69979Z"
                          fill="#71BFFB"
                        ></path>
                      </svg>
                    </p>
                    <p class="ml-2 text-black-tint-200">
                      <a href=" ">Scalability and Elasticity</a>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.332764 13.0653L5.98804 18.7206L7.39804 17.3006L1.74775 11.6503L0.332764 13.0653ZM22.2473 5.28136L11.648 15.8906L7.41118 11.6437L5.98118 13.0537L11.648 18.7206L23.6673 6.70136L22.2473 5.28136ZM18.0089 6.69979L16.5989 5.27979L10.228 11.6506L11.648 13.0606L18.0089 6.69979Z"
                          fill="#71BFFB"
                        ></path>
                      </svg>
                    </p>
                    <p class="ml-2 text-black-tint-200">
                      <a href=" ">Pay-as-You-Go Pricing Model</a>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.332764 13.0653L5.98804 18.7206L7.39804 17.3006L1.74775 11.6503L0.332764 13.0653ZM22.2473 5.28136L11.648 15.8906L7.41118 11.6437L5.98118 13.0537L11.648 18.7206L23.6673 6.70136L22.2473 5.28136ZM18.0089 6.69979L16.5989 5.27979L10.228 11.6506L11.648 13.0606L18.0089 6.69979Z"
                          fill="#71BFFB"
                        ></path>
                      </svg>
                    </p>
                    <p class="ml-2 text-black-tint-200">
                      <a href=" ">
                        Data Security and Compliance
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4 rounded-lg border border-primaryColor-tint-300 bg-primaryColor-tint-500 p-4 lg:p-6">
              <a href=" ">
                <div class="mb-6 text-center">
                  <img
                    sizes="(min-width: 1366px) calc(calc((1256px / 3) - 76px) - 30px), (min-width: 640px) calc(calc((100vw / 3) - 67px) - 30px), (min-width: 390px) calc(326px - 30px), calc(100vw - 64px)"
                    src="https://www.starmoon.in/upload/landing/bda/0wqcxvry3qg98p8sv0an24ytkm12zxug/WhatsApp_Image_2023-06-30_at_2.08.42_PM@1x.png "
                    width="600"
                    height="370"
                    alt="ChatApp"
                    class="mx-auto w-full object-cover rounded"
                  />
                </div>
                <div>
                  <h6 class="mb-4 border-b border-primaryColor-tint-300 pb-4 text-center text-lg font-bold text-primaryColor">
                    ChatApp
                  </h6>
                </div>
              </a>
              <div>
                <div class="cardList space-y-4">
                  <div class="flex items-center">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.332764 13.0653L5.98804 18.7206L7.39804 17.3006L1.74775 11.6503L0.332764 13.0653ZM22.2473 5.28136L11.648 15.8906L7.41118 11.6437L5.98118 13.0537L11.648 18.7206L23.6673 6.70136L22.2473 5.28136ZM18.0089 6.69979L16.5989 5.27979L10.228 11.6506L11.648 13.0606L18.0089 6.69979Z"
                          fill="#71BFFB"
                        ></path>
                      </svg>
                    </p>
                    <p class="ml-2 text-black-tint-200">
                      <a href=" ">Tech Support and Cloud Contact Center.</a>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.332764 13.0653L5.98804 18.7206L7.39804 17.3006L1.74775 11.6503L0.332764 13.0653ZM22.2473 5.28136L11.648 15.8906L7.41118 11.6437L5.98118 13.0537L11.648 18.7206L23.6673 6.70136L22.2473 5.28136ZM18.0089 6.69979L16.5989 5.27979L10.228 11.6506L11.648 13.0606L18.0089 6.69979Z"
                          fill="#71BFFB"
                        ></path>
                      </svg>
                    </p>
                    <p class="ml-2 text-black-tint-200">
                      <a href=" ">Handy payments from any country.</a>
                    </p>
                  </div>
                  <div class="flex items-center">
                    <p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.332764 13.0653L5.98804 18.7206L7.39804 17.3006L1.74775 11.6503L0.332764 13.0653ZM22.2473 5.28136L11.648 15.8906L7.41118 11.6437L5.98118 13.0537L11.648 18.7206L23.6673 6.70136L22.2473 5.28136ZM18.0089 6.69979L16.5989 5.27979L10.228 11.6506L11.648 13.0606L18.0089 6.69979Z"
                          fill="#71BFFB"
                        ></path>
                      </svg>
                    </p>
                    <p class="ml-2 text-black-tint-200">
                      <a href=" ">
                        Great features and multiple channels.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consult our top specialized experts Section */}
      <section class="testSection wrapper pb-12 xl:pb-14 3xl:pb-24">
        <div class="container mx-auto">
          {/* All Speacializations */}
          <div class="mb-10 grid gap-4 sm:grid-flow-col">
            {/* <!-- Heading --> */}
            <div>
              <h4 class="font-dm text-md text-xl sm:text-2xl font-bold lg:text-4xl mb-2 block text-black">
                Take a peek at our programs
              </h4>
              <p class="font-medium text-black-tint-400">
                Our Trainers are ready to serve you 24/7
              </p>
            </div>
            {/* <!-- View all --> */}
            <div class="hidden sm:block">
              <div class="text-center md:text-right">
                <a
                  href="/specializations"
                  data-prefetch
                  class="w-full md:w-auto inline-block font-semibold border-2 md:border-0 border-primaryColor rounded text-base px-4 py-2 text-primary-steel-blue"
                >
                  <span class="align-middle">View all</span>
                  <span class="text-primaryColor inline-block relative top-[2px] align-text-bottom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="fill-primary-steel-blue"
                    >
                      <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Specialized Services */}
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <div class="mb-4 text-center">
              <a href="" data-prefetch class="block">
                <div class="mb-5">
                  <img
                    decoding="async"
                    loading="eager"
                    sizes="112px"
                    src=" https://cdn.bitrix24.site/bitrix/images/landing/delo-bot/corporatetraining/public.jpg"
                    width="336"
                    height="336"
                    alt="Bitrix24 trainings"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Bitrix24 trainings
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  data-prefetch
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href=" " class="block">
                <div class="mb-5">
                  <img
                    sizes="112px"
                    src="https://www.starmoon.in/upload/landing/8ac/b6wzm0zix936l903ci404q0nrwewmx53/46515311-stock-vector-digital-marketing-concept-human-hand-with-a-megaphone-surrounded-by-media-icons@2x.jpg"
                    width="336"
                    height="336"
                    alt="Digital Marketing Program"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Digital Marketing Program
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href=" " data-prefetch class="block">
                <div class="mb-5">
                  <img
                    decoding="async"
                    loading="eager"
                    sizes="112px"
                    src="https://cdn.bitrix24.site/bitrix/images/landing/delo-bot/corporatetraining/talk.jpg"
                    width="336"
                    height="336"
                    alt="2d,3d cad software"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  2d,3d cad software
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  data-prefetch
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href="" data-prefetch class="block">
                <div class="mb-5">
                  <img
                    decoding="async"
                    loading="eager"
                    sizes="112px"
                    src=" https://www.starmoon.in/upload/landing/24d/d9nklyljibjxcrqk09ioj22ry8nu60rt/business-seminar-staff-training-development-consultation-coaching-mentoring-cartoon-characters-listening-report-successful-businesswoman-concept-illustration-335657-2043-338x338@2x.jpeg"
                    width="336"
                    height="336"
                    alt="Software Development"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Software Development
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  data-prefetch
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href=" " class="block">
                <div class="mb-5">
                  <img
                    sizes="112px"
                    src="data:image/jpeg;base64,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"
                    width="336"
                    height="336"
                    alt="Website Development Program"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Website Development Program
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
            <div class="mb-4 text-center">
              <a href=" " data-prefetch class="block">
                <div class="mb-5">
                  <img
                    decoding="async"
                    loading="eager"
                    sizes="112px"
                    src="https://th.bing.com/th/id/OIP.JuBXgj0LW7fn_VUvZ8x4EwHaE-?w=274&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    width="336"
                    height="336"
                    data-hash="soWFHQYs95aXWZ9glfeXf3/5CFh4h3CDVw"
                    alt="Business Automation"
                    class="mx-auto w-[112px] h-[112px] rounded"
                  />
                </div>
                <h6 class="mb-2 text-lg font-bold text-primaryColor-shade-200">
                  Business Automation
                </h6>
              </a>
              <div class="text-sm font-medium text-primaryColor-tint-100">
                <a
                  href=" "
                  data-prefetch
                  class="inline-block rounded px-6 py-2 hover:bg-primaryColor-tint-400 hover:text-primaryColor"
                >
                  Consult Now
                </a>
              </div>
            </div>
          </div>

          <div class="mt-4 block sm:hidden">
            <div class="text-center md:text-right">
              <a
                href=" "
                class="w-full md:w-auto inline-block font-semibold border-2 md:border-0 border-primaryColor rounded text-base px-4 py-2 text-primary-steel-blue"
              >
                <span class="align-middle">View all</span>
                <span class="text-primaryColor inline-block relative top-[2px] align-text-bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="fill-primary-steel-blue"
                  >
                    <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call TO Action Section --> */}
      <section class="call-to-action mb-20 bg-primaryColor-shade-200 py-14">
            <div class="wrapper  flex flex-col items-start gap-8 sm:flex-row xl:items-center xl:gap-16">
                <a href="/request-suggestion">
                    <div class="overflow-hidden rounded sm:max-w-[270px] xl:max-w-[395px]">
                        <img 
                            sizes="(min-width: 1024px) calc(395px - 30px), (min-width: 768px) calc(270px - 30px), calc(100vw - 30px)"
                            src="https://th.bing.com/th/id/OIP.xjzjDglMR--oINXqzki0jQHaE7?w=276&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
                            width="400" height="250"
                            alt="Do you need any expert suggestion for your business automation?" class="rounded"
                            />
                    </div>
                </a>
                <div class="flex-1">
                    <a href=" ">
                        <h2 class="mb-3 text-4xl font-bold text-white xl:text-6xl">
                        Do you need any expert suggestion for your business automation?
                        </h2>
                    </a>
                    <p class="text-sm text-white xl:text-base">
                        We have a dedicated team of experienced experts to give you suggestion as per you
                        business needs and help you save time and money.
                    </p>
                    <a href=" "
                    class="default-button inline-block w-auto !py-4 !px-8 !text-sm">
                        Request
                    </a>
                </div>
            </div>
        </section>

      {/* Testimonials */}
      <section class="testimonials wrapper">
        {/* Heading */}
        <div class="container mx-auto mb-11">
          <h4 class="font-dm text-md text-xl sm:text-2xl font-bold lg:text-4xl mb-2 block text-black">
            Why people love Starmoon
          </h4>
          <div>
            <h6 class="font-dm text-sm font-medium leading-6 lg:text-base block text-black-tint-400">
              We continuously improve our services based on the opinion of our
              users
            </h6>
          </div>
        </div>
        {/* Main Reviews */}
        <div class="container mx-auto">
          <div class="carousel overflow-x-scroll grid grid-flow-col gap-[24px] no-scrollbar scroll-smooth snap-x snap-mandatory items-start">
            <div class="w-[calc(100vw-30px)] xs:w-[360px] sm:w-[640px] md:w-[380px] relative rounded bg-primaryColor-tint-500 py-12 px-5 lg:px-10 xl:pl-14 xl:pr-4">
              <h6 class="block font-dm font-normal leading-6 text-black-tint-300 text-md block text-black text-black-title">
                    Starmoon Consulting has been instrumental in transforming our business processes. Their team is highly responsive and always ready to assist with any queries. The quality of their products and services is top-notch.
              </h6>
              <div class="media mt-5 flex">
                <img
                  sizes="50px"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgTjSvNsJP_ACr8PSATD5m1xThD9z5e-t59xissVHIhusSVvWD3UmpzhfBjsEGOq_dd51tSabLb-cZbu0zcY6jiaYoNk8Ztq1YyURttclfQp1qQke-RobiGUIeSu6lIFnS2SfojlI5BBgqtEGqXQ34liJrzLa6Qgkzy6f6WQhk4zQOyfN-y7j9q-sgA8VcB"
                  width="50"
                  height="50"
                  alt="Rajesh Kumar"
                  class="mr-2 image rounded"
                />
                <h6 class="font-dm text-xs font-medium leading-5 lg:text-sm  block text-primaryColor-shade-200 flex items-center">
                  Rajesh Kumar
                </h6>
                <svg
                  width="53"
                  height="49"
                  viewBox="0 0 53 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-0 top-0"
                >
                  <path
                    d="M19.5073 27.3911V48.5156H0V31.8384C0 22.8091 1.07812 16.2729 3.23438 12.23C6.06445 6.83936 10.5454 2.7627 16.6772 0L21.1245 7.0752C17.4185 8.625 14.6895 10.9497 12.9375 14.0493C11.1855 17.0815 10.2085 21.5288 10.0063 27.3911H19.5073ZM50.8403 27.3911V48.5156H31.333V31.8384C31.333 22.8091 32.4111 16.2729 34.5674 12.23C37.3975 6.83936 41.8784 2.7627 48.0103 0L52.4575 7.0752C48.7515 8.625 46.0225 10.9497 44.2705 14.0493C42.5186 17.0815 41.5415 21.5288 41.3394 27.3911H50.8403Z"
                    fill="#DBEFFE"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="w-[calc(100vw-30px)] xs:w-[360px] sm:w-[640px] md:w-[380px] relative rounded bg-primaryColor-tint-500 py-12 px-5 lg:px-10 xl:pl-14 xl:pr-4">
              <h6 class="block font-dm font-normal leading-6 text-black-tint-300 text-md block text-black text-black-title">
              We partnered with Starmoon for our digitalization needs, and the results have been outstanding. Their expertise in CAD software and cloud solutions has significantly improved our operational efficiency.
              </h6>
              <div class="media mt-5 flex">
                <img
                  decoding="async"
                  loading="lazy"
                  sizes="50px"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEhaibYwMS4cahMlN28torocutT3zS3JudJP7242f7g7dVRsaUgjMEy2ygSOkwobbdzvKZii6a3hpMODGxuZ9zMcuJDT1xlEiO_1bWhdqNDOLmNJ5UYeCpCSGoLv0CIAim1KQFU5Sabl-raX_IU0VPWuqR1t2f7uEpue91uG4EcuAGuESg0d1cPyIGTNoh7e"
                  width="50"
                  height="50"
                  alt="Anjali Mehta"
                  class="mr-2 image rounded"
                />
                <h6 class="font-dm text-xs font-medium leading-5 lg:text-sm  block text-primaryColor-shade-200 flex items-center">
                Anjali Mehta
                </h6>
                <svg
                  width="53"
                  height="49"
                  viewBox="0 0 53 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-0 top-0"
                >
                  <path
                    d="M19.5073 27.3911V48.5156H0V31.8384C0 22.8091 1.07812 16.2729 3.23438 12.23C6.06445 6.83936 10.5454 2.7627 16.6772 0L21.1245 7.0752C17.4185 8.625 14.6895 10.9497 12.9375 14.0493C11.1855 17.0815 10.2085 21.5288 10.0063 27.3911H19.5073ZM50.8403 27.3911V48.5156H31.333V31.8384C31.333 22.8091 32.4111 16.2729 34.5674 12.23C37.3975 6.83936 41.8784 2.7627 48.0103 0L52.4575 7.0752C48.7515 8.625 46.0225 10.9497 44.2705 14.0493C42.5186 17.0815 41.5415 21.5288 41.3394 27.3911H50.8403Z"
                    fill="#DBEFFE"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="w-[calc(100vw-30px)] xs:w-[360px] sm:w-[640px] md:w-[380px] relative rounded bg-primaryColor-tint-500 py-12 px-5 lg:px-10 xl:pl-14 xl:pr-4">
              <h6 class="block font-dm font-normal leading-6 text-black-tint-300 text-md block text-black text-black-title">
              Starmoon's corporate training programs are excellent. Our team has greatly benefited from their training sessions on the latest technologies. Their professional approach and reliable support make them a trusted partner.
              </h6>
              <div class="media mt-5 flex">
                <img
                  sizes="50px"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEi704kfQrhXLMZn2yFJv9rMZlu4_oWsPqhqa7mmQ9SjHoWthWTkFx_xJCdOaZ3Cq4H9feaDQDLDq8keKfldbtphE1O5n3tgzlF1GXfHcqxm1BRKRq4_BIZ5zmwX_rWXPFMHxl1N-TbYDAjDVp2q_iyGYDVE57X6uKKLPKmST2u4xpmxpSGMNNEt9mKvxh_i"
                  width="50"
                  height="50"
                  alt="Vikram Singh"
                  class="mr-2 image rounded"
                />
                <h6 class="font-dm text-xs font-medium leading-5 lg:text-sm  block text-primaryColor-shade-200 flex items-center">
                Vikram Singh
                </h6>
                <svg
                  width="53"
                  height="49"
                  viewBox="0 0 53 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-0 top-0"
                >
                  <path
                    d="M19.5073 27.3911V48.5156H0V31.8384C0 22.8091 1.07812 16.2729 3.23438 12.23C6.06445 6.83936 10.5454 2.7627 16.6772 0L21.1245 7.0752C17.4185 8.625 14.6895 10.9497 12.9375 14.0493C11.1855 17.0815 10.2085 21.5288 10.0063 27.3911H19.5073ZM50.8403 27.3911V48.5156H31.333V31.8384C31.333 22.8091 32.4111 16.2729 34.5674 12.23C37.3975 6.83936 41.8784 2.7627 48.0103 0L52.4575 7.0752C48.7515 8.625 46.0225 10.9497 44.2705 14.0493C42.5186 17.0815 41.5415 21.5288 41.3394 27.3911H50.8403Z"
                    fill="#DBEFFE"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="w-[calc(100vw-30px)] xs:w-[360px] sm:w-[640px] md:w-[380px] relative rounded bg-primaryColor-tint-500 py-12 px-5 lg:px-10 xl:pl-14 xl:pr-4">
              <h6 class="block font-dm font-normal leading-6 text-black-tint-300 text-md block text-black text-black-title">
              Starmoon offers excellent value for money. Their services are competitively priced, and the quality is never compromised. We have seen a significant reduction in our operational costs since partnering with them.
              </h6>
              <div class="media mt-5 flex">
                <img
                  sizes="50px"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEh6WbAbS34ksy0Ihpc2BMex-g04ruJ7_R-deQ9wgDor-2u4WPbLD2EAsQutTcOXzZV9R3g567Gl-lOFo4gSvjyAHCUFw5aRsLgsKTTik3z41MZLZ0tBa4g5kQdhC25MMKcnT5KQB0fM8UfXQa5zlo1BARNOxpgA4gLhdEs-cCMz66EjGhN-xCxagOwGpDaG"
                  width="50"
                  height="50"
                  alt="Arjun Patel"
                  class="mr-2 image rounded"
                />
                <h6 class="font-dm text-xs font-medium leading-5 lg:text-sm  block text-primaryColor-shade-200 flex items-center">
                Arjun Patel
                </h6>
                <svg
                  width="53"
                  height="49"
                  viewBox="0 0 53 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-0 top-0"
                >
                  <path
                    d="M19.5073 27.3911V48.5156H0V31.8384C0 22.8091 1.07812 16.2729 3.23438 12.23C6.06445 6.83936 10.5454 2.7627 16.6772 0L21.1245 7.0752C17.4185 8.625 14.6895 10.9497 12.9375 14.0493C11.1855 17.0815 10.2085 21.5288 10.0063 27.3911H19.5073ZM50.8403 27.3911V48.5156H31.333V31.8384C31.333 22.8091 32.4111 16.2729 34.5674 12.23C37.3975 6.83936 41.8784 2.7627 48.0103 0L52.4575 7.0752C48.7515 8.625 46.0225 10.9497 44.2705 14.0493C42.5186 17.0815 41.5415 21.5288 41.3394 27.3911H50.8403Z"
                    fill="#DBEFFE"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="w-[calc(100vw-30px)] xs:w-[360px] sm:w-[640px] md:w-[380px] relative rounded bg-primaryColor-tint-500 py-12 px-5 lg:px-10 xl:pl-14 xl:pr-4">
              <h6 class="block font-dm font-normal leading-6 text-black-tint-300 text-md block text-black text-black-title">
              We have been working with Starmoon for several years, and they have always been reliable and trustworthy. Their commitment to delivering high-quality services and products is truly commendable.
              </h6>
              <div class="media mt-5 flex">
                <img
                  decoding="async"
                  loading="lazy"
                  sizes="50px"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEhbLp41kmsVbNMCmfzhTdyIAjSBwBPR082x2Fp990_73UHercJMJtRyEVZlt1GCALi0IuDjSWkHPSpN_RsV5y3nDa76Vr93kpTNtNfcYbfXU-VaiAShV80iZ8lU2tQ1CbKdfvwHrf7pUwufbmxhipGkNiFZTrB3QKyjrRav6KQAzyWLjpaxYhoBCG7u4PLp"
                  width="50"
                  height="50"
                  alt="Karan Desai"
                  class="mr-2 image rounded"
                />
                <h6 class="font-dm text-xs font-medium leading-5 lg:text-sm  block text-primaryColor-shade-200 flex items-center">
                Karan Desai
                </h6>
                <svg
                  width="53"
                  height="49"
                  viewBox="0 0 53 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-0 top-0"
                >
                  <path
                    d="M19.5073 27.3911V48.5156H0V31.8384C0 22.8091 1.07812 16.2729 3.23438 12.23C6.06445 6.83936 10.5454 2.7627 16.6772 0L21.1245 7.0752C17.4185 8.625 14.6895 10.9497 12.9375 14.0493C11.1855 17.0815 10.2085 21.5288 10.0063 27.3911H19.5073ZM50.8403 27.3911V48.5156H31.333V31.8384C31.333 22.8091 32.4111 16.2729 34.5674 12.23C37.3975 6.83936 41.8784 2.7627 48.0103 0L52.4575 7.0752C48.7515 8.625 46.0225 10.9497 44.2705 14.0493C42.5186 17.0815 41.5415 21.5288 41.3394 27.3911H50.8403Z"
                    fill="#DBEFFE"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="w-[calc(100vw-30px)] xs:w-[360px] sm:w-[640px] md:w-[380px] relative rounded bg-primaryColor-tint-500 py-12 px-5 lg:px-10 xl:pl-14 xl:pr-4">
              <h6 class="block font-dm font-normal leading-6 text-black-tint-300 text-md block text-black text-black-title">
              The consultation services provided by Starmoon are top-notch. Their team of experts took the time to understand our specific needs and provided tailored solutions that have greatly benefited our business.
              </h6>
              <div class="media mt-5 flex">
                <img
                  decoding="async"
                  loading="lazy"
                  sizes="50px"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEh3QFbaacKWMJQuS6p8TtBHiJDuKZJicJ95BrnN35j3cZbW7b0-4hu937UvlpB6mmj2C6X9-Z_vJ2FtusJA-eSMUu5kC__aW8je8NCRsjunbxOhGZGPO8FUD0otcxcryyFGiEi7ZobWYM7qxiBpC815r18r1u2iHOifxyK-XyeKCqEZ2zRSbOJBg-eqzRoy"
                  width="50"
                  height="50"
                  alt="Ruksana Sharmin"
                  class="mr-2 image rounded"
                />
                <h6 class="font-dm text-xs font-medium leading-5 lg:text-sm  block text-primaryColor-shade-200 flex items-center">
                Sunita Rao
                </h6>
                <svg
                  width="53"
                  height="49"
                  viewBox="0 0 53 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-0 top-0"
                >
                  <path
                    d="M19.5073 27.3911V48.5156H0V31.8384C0 22.8091 1.07812 16.2729 3.23438 12.23C6.06445 6.83936 10.5454 2.7627 16.6772 0L21.1245 7.0752C17.4185 8.625 14.6895 10.9497 12.9375 14.0493C11.1855 17.0815 10.2085 21.5288 10.0063 27.3911H19.5073ZM50.8403 27.3911V48.5156H31.333V31.8384C31.333 22.8091 32.4111 16.2729 34.5674 12.23C37.3975 6.83936 41.8784 2.7627 48.0103 0L52.4575 7.0752C48.7515 8.625 46.0225 10.9497 44.2705 14.0493C42.5186 17.0815 41.5415 21.5288 41.3394 27.3911H50.8403Z"
                    fill="#DBEFFE"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Dots slider */}
          <div class="carousel__dot-group dotGroup">
            <button
              aria-label="slide dot"
              type="button"
              class="dot___3c3SI carousel__dot carousel__dot--selected"
            >
              <span></span>
            </button>
            <button
              aria-label="slide dot"
              type="button"
              class="dot___3c3SI carousel__dot"
            >
              <span></span>
            </button>
            <button
              aria-label="slide dot"
              type="button"
              class="dot___3c3SI carousel__dot"
            >
              <span></span>
            </button>
            <button
              aria-label="slide dot"
              type="button"
              class="dot___3c3SI carousel__dot"
            >
              <span></span>
            </button>
            <button
              aria-label="slide dot"
              type="button"
              class="dot___3c3SI carousel__dot"
            >
              <span></span>
            </button>
            <button
              aria-label="slide dot"
              type="button"
              class="dot___3c3SI carousel__dot"
            >
              <span></span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Blogs and About Event, News and Offers */}
      <section class="blogs events offers news wrapper py-12 xl:pb-14 3xl:pb-24">
            <div class="container mx-auto">
                {/* Heading */}
                <h4 class="font-dm text-md text-xl sm:text-2xl font-bold lg:text-4xl mb-2 block text-black mb-10">
                    Recent news, offers &amp;events
                </h4>
                {/* Sub-menu items Event, News and Offers*/}
                <div class="tab grid grid-cols-1">
                    <ul class="flex border-b-2 border-black-tint-1000">
                        <li class="cursor-pointer py-3 px-10 3xl:px-20 -mb-[2px] border-b-[3px] border-primaryColor-tint-200">
                            <h2 class="block font-dm text-sm font-bold  text-primaryColor  lg:text-base">
                                Event
                            </h2>
                        </li>
                        <li class="cursor-pointer py-3 px-10 3xl:px-20 border-b-[3px] border-transparent">
                            <h2 class="block font-dm text-sm font-bold  text-black-tint-500  lg:text-base">
                                News
                            </h2>
                        </li>
                        <li class="cursor-pointer py-3 px-10 3xl:px-20 border-b-[3px] border-transparent">
                            <h2 class="block font-dm text-sm font-bold  text-black-tint-500  lg:text-base">
                                Offers
                            </h2>
                        </li>
                    </ul>
                </div>
                {/* Blogs and Articles */}
                <div>
                    <div class="content mt-8 flex gap-14">
                        {/* Left hand section */}
                        <a href=" "
                            class="left h-full w-1/2 hidden sm:block">
                            <div class="relative pr-4 pb-4 2xl:pr-7 2xl:pb-7">
                                <div class="imageContainer mb-4">
                                    <img
                                        sizes="(min-width: 1366px) calc(469px - 30px), (min-width: 640px) calc(calc(50vw - 143px) - 30px), calc(100vw - 30px)"
                                        src="https://cdn.bitrix24.site/bitrix/images/landing/business/400x269/img11.jpg"
                                        width="600" height="226"
                                        alt="Time Investment" class="image z-10 rounded"/>
                                </div>
                                <img decoding="async" loading="lazy" alt="Background Pattern"
                                    src="https://blogger.googleusercontent.com/img/a/AVvXsEhn4-YolOrQflkLLnIZjxioZzBj2ilTb0nlTUnVte7OBBrqns9Mitkr83TfiO4Am5-uHzpU4-itdl4W0u70hyHvHw-QTA8cpjsbixL1Cis5Xz34cCJzP75bVXoQyg3chuYY73SM-sQLhHB1z0fP55HWhMkuL3Ma0RkcBm5H9_VjwujmYdCbjwD1zzDDE2uQ"
                                    width="426" height="236" class="absolute right-0 bottom-3  h-3/4 w-3/4"/>
                            </div>
                            <h6 class="font-dm text-lg font-bold lg:text-xl block text-black text-black-tint-100">
                                Time Investment-23 October 2024
                            </h6>
                        </a>
                        {/* Right Hand section */}
                        <div class="left relative w-full sm:w-2/3 rounded-md border border-black-tint-1000">
                            <div class="listWrapper homepageTab sm:absolute right-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth p-5 pr-3">
                                <ul>
                                    <li class="mb-5 block gap-3 sm:flex">
                                        <a href="/blogs/world-health-day-7-april-2022-15"
                                            class="block imgWrapper mb-3 w-full sm:mb-0 sm:w-[100px] md:w-[130px] lg:w-[160px]">
                                            <div class="imageContainer">
                                                <img decoding="async" loading="lazy"
                                                    sizes="(min-width: 1024px) calc(160px - 30px), (min-width: 768px) calc(130px - 30px), (min-width: 640px) calc(100px - 30px), 350px"
                                                    src="https://cdn.bitrix24.site/bitrix/images/landing/business/400x269/img11.jpg"
                                                    width="400" height="150"
                                                    alt="Time Investment-23 October 2024" class="image rounded"/>
                                            </div>
                                        </a>
                                        <div class="message flex-1">
                                            <a href="/blogs/world-health-day-7-april-2022-15"
                                                class="block">
                                                <h6 class="font-dm text-base font-bold lg:text-lg block text-black text-black-tint-100">
                                                Time Investment-23 October 2024
                                                </h6>
                                            </a>
                                            <div class="mt-2">
                                                <h6
                                                    class="block font-dm text-xs font-normal leading-5 text-black-maintext lg:text-sm">
                                                    Published at: 23 Oct, 2024</h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* View More Button */}
                    <div class="butn mt-10 flex justify-center">
                        <a href="/blogs"
                            class="inline-block rounded px-4 py-3 text-center text-base font-medium duration-300 text-white bg-secondaryColor hover:bg-primaryColor hover:text-white active:bg-primaryColor-shade-200   min-w-[200px]"
                            >
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </section>

      {/* Our Partners */}
      <section class="our-partners wrapper py-12 xl:py-14 3xl:py-24">
            <div class="container mx-auto">
                {/* Our Partners Head */}
                <div class="mb-10 grid gap-4 sm:grid-flow-col">
                    {/* Head */}
                    <div>
                        {/* Heading */}
                        <h4 class="font-dm text-md text-xl sm:text-2xl font-bold lg:text-4xl mb-2 block text-black">
                            Our partners
                        </h4>
                        {/* Statement */}
                        <p class="font-medium text-black-tint-400">We pride in ourselves for some of our partners</p>
                    </div>
                    {/* Viwe all Btn */}
                    <div class="hidden sm:block">
                        <div class="text-center md:text-right">
                            <a href=" "
                                class="w-full md:w-auto inline-block font-semibold border-2 md:border-0 border-primaryColor rounded text-base px-4 py-2 text-primary-steel-blue">
                                <span class="align-middle">View all</span>
                                <span class="text-primaryColor inline-block relative top-[2px] align-text-bottom">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="currentColor" class="fill-primary-steel-blue">
                                        <path
                                            d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
                                        </path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Partners Logo Grid */}
                 <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6" id="partners">
                    <div class="justify-items-center rounded-md border border-[#DBEFFE] px-6 py-10 text-center sm:py-12 md:py-14 lg:py-20">
                        <a href="https://www.bitrix24.in/">
                            <img
                                src="https://th.bing.com/th/id/OIP.tJ-lMFWAGgRRBH0C7fHNsAAAAA?rs=1&pid=ImgDetMain"
                                width="168" height="112"
                                alt="Bitrix24" class="mx-auto rounded"/>
                        </a>
                    </div>
                    <div class="justify-items-center rounded-md border border-[#DBEFFE] px-6 py-10 text-center sm:py-12 md:py-14 lg:py-20">
                        <a href="https://aws.amazon.com/">
                            <img
                                src="https://gadget.co.za/wp-content/uploads/2020/12/aws-logo-scaled.jpg"
                                width="168" height="112"
                                alt="Amazon AWS" class="mx-auto rounded"/>
                        </a>
                    </div>
                    <div class="justify-items-center rounded-md border border-[#DBEFFE] px-6 py-10 text-center sm:py-12 md:py-14 lg:py-20">
                        <a href="https://www.smcusa.com/">
                            <img
                                src="https://cdn.freelogovectors.net/wp-content/uploads/2020/01/smc-logo.png"
                                width="168" height="112"  
                                alt="SMC" class="mx-auto rounded"/>
                        </a>
                    </div>
                    <div class="justify-items-center rounded-md border border-[#DBEFFE] px-6 py-10 text-center sm:py-12 md:py-14 lg:py-20">
                        <a href="https://www.graebert.com/">
                            <img
                                src="https://th.bing.com/th/id/OIP.j6617_hrAMfhd23dgQ35gwHaHa?rs=1&pid=ImgDetMain"
                                width="168" height="112"  
                                alt="Graebert" class="mx-auto rounded"/>
                        </a>
                    </div>
                </div>
                <div class="mt-4 block sm:hidden">
                    <div class="text-center md:text-right">
                        <a href=" " 
                            class="w-full md:w-auto inline-block font-semibold border-2 md:border-0 border-primaryColor rounded text-base px-4 py-2 text-primary-steel-blue">
                            <span class="align-middle">View all</span>
                            <span class="text-primaryColor inline-block relative top-[2px] align-text-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="currentColor" class="fill-primary-steel-blue">
                                    <path
                                        d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z">
                                    </path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Form */}
        <section class="mb-14 bg-primaryColor-shade-200 md:bg-transparent">
            <div class="wrapper">
                <div class="container mx-auto bg-primaryColor-shade-200 md:rounded-xl">
                    <div class="gap-6 py-8 md:flex md:px-16 md:py-12">
                        {/* Left side div */}
                        <div class="mb-10 md:mb-0 lg:w-2/4">
                            <h2 class="4xl: font-dm font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-7xl block text-secondaryColor-tint-200 mb-2 5xl:text-6xl">
                                Need some advice from our experts?
                            </h2>
                            <h6 class="font-dm text-base font-normal lg:text-lg block text-black-tint-800 mb-6 md:mb-10 text-black-tint-1000">
                                Request a call back now!
                            </h6>
                            <h6 class="font-dm text-base font-normal lg:text-lg block text-white mr-0 lg:mr-16 mt-5 leading-7">
                                The quickest way to get in contact is to telephone: +91 95553 03220
                            </h6>
                        </div>
                        {/* Blank Space */}
                        <div class="md:w-0 lg:w-1/5"></div>
                        {/* Right side div */}
                        <div class="md:w-2/4 lg:w-2/5">
                            {/* Heading */}
                            <h6 class="font-dm text-xs font-medium leading-5 lg:text-sm  block text-white mb-3">
                                Please fill out this quick form and we'll get back to you within few hours!
                            </h6>
                            {/* Form */}
                            <form preventdefault:submit method="post" noValidate class="relative space-y-4">
                                {/* Enter your name */}
                                <div>
                                    <input value="" type="text" placeholder="Enter your name" name="name"
                                        class="inputFocus placeholder-slate-700 mt-1 border-[2px] block w-full rounded-sm border-2 border border-transparent border-black-tint-700 bg-white py-3 px-4 shadow-sm focus:outline-none  sm:text-sm"/>
                                    <p class="text-sm text-error mt-1 mb-0 animate__animated animate__slideInDown animate__faster hidden">
                                    </p>
                                </div>
                                {/* Enter your phonr number */}
                                <div class="inputWrapper">
                                    <div class="inputWrapper w-full">
                                        <div class="w-full flex flex-col">
                                            <div
                                                class="w-full flex flex-row items-stretch justify-items-stretch relative">
                                                {/* India Flag */}
                                                <div class="relative cursor-pointer">
                                                    <div style="border-top-left-radius:0.125rem;border-bottom-left-radius:0.125rem"
                                                        class="bg-light-sea-green-t04 h-full flex items-center justify-center px-4">
                                                        <img width="32" height="24" alt="India" src="https://www.svgrepo.com/show/405510/flag-for-flag-india.svg"/>
                                                    </div>
                                                </div>

                                                <div style="border:0px;border-radius:0.125rem"
                                                    class="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                                                </div>
                                                {/* Number */}
                                                <input value="+91" type="tel" placeholder="Enter your phone number"
                                                    name="phone"
                                                    style="border-top-left-radius:0;border-bottom-left-radius:0"
                                                    class="w-full !focus:border-0 placeholder-slate-700 border-[2px] block w-full rounded-sm border-2 border border-transparent border-black-tint-700 bg-white py-3 px-4 shadow-sm focus:outline-none  sm:text-sm"/>
                                            </div>
                                            <p class="text-sm text-error mt-1 mb-0 animate__animated animate__slideInDown animate__faster hidden">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Call me Btn */}
                                <div>
                                    <button type="submit" aria-label="submit"
                                        class="rounded p-4 text-base font-bold capitalize duration-300 bg-secondaryColor text-white hover:bg-secondaryColor-tint-100 active:bg-secondaryColor-shade-200 w-full bg-secondaryColor">
                                        Call Me Back
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Frequently Asked Questions */}
        <section class="faqs mb-20 pt-6">
            <div class="wrapper">
                {/* Heading */}
                <h4 class="text-md mb-10 block font-dm text-xl font-bold text-black sm:text-2xl lg:text-4xl">Frequently
                    asked questions</h4>
                
                {/* Questions */}
                <div class="accordion space-y-4 border-0">

                    <div class="accordion-item border-gray-200 border bg-white">
                        <input type="checkbox" id="accordion-checkbox-0mj5l2b" class="accordion-checkbox"/>
                        {/* Question or Doubt */}
                        <label for="accordion-checkbox-0mj5l2b" class="accordion-label">
                            <h2 id="accordion-header-0mj5l2b" aria-describedby="accordion-content-0mj5l2b"
                                class="accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
                                What is Starmoon?
                            </h2>
                            {/* Arrow 1*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-expand m-4">
                                <path
                                    d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                                </path>
                            </svg>
                            {/* Arrow 2 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-collapse m-4">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </label>
                        {/* Question Discription/Answer */}
                        <div id="accordion-content-0mj5l2b" aria-labelledby="accordion-header-0mj5l2b"
                            class="accordion-content">
                            <div class="accordion-body mx-5 py-4">
                                <p>Starmoon Consulting Services Private Limited is engaged in bringing new ways of simplifying the corporate life. We help companies to reduce their current running cost by implementing the latest technology which are running in the market.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-gray-200 border bg-white">
                        <input type="checkbox" id="accordion-checkbox-0mj5l2c" class="accordion-checkbox"/>
                        {/* Question or Doubt */}
                        <label for="accordion-checkbox-0mj5l2c" class="accordion-label">
                            <h2 id="accordion-header-0mj5l2c" aria-describedby="accordion-content-0mj5l2c"
                                class="accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
                                What services does Starmoon Consulting offer?
                            </h2>
                            {/* Arrow 1*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-expand m-4">
                                <path
                                    d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                                </path>
                            </svg>
                            {/* Arrow 2 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-collapse m-4">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </label>
                        {/* Question Discription/Answer */}
                        <div id="accordion-content-0mj5l2c" aria-labelledby="accordion-header-0mj5l2c"
                            class="accordion-content">
                            <div class="accordion-body mx-5 py-4">
                                <p>Starmoon Consulting provides a range of services including CAD software solutions, cloud servers, home automation, and corporate training programs to help organizations reduce costs and implement the latest technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-gray-200 border bg-white">
                        <input type="checkbox" id="accordion-checkbox-0mj5l2s" class="accordion-checkbox"/>
                        {/* Question or Doubt */}
                        <label for="accordion-checkbox-0mj5l2s" class="accordion-label">
                            <h2 id="accordion-header-0mj5l2s" aria-describedby="accordion-content-0mj5l2s"
                                class="accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
                                How can I contact Starmoon Consulting for support?
                            </h2>
                            {/* Arrow 1*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-expand m-4">
                                <path
                                    d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                                </path>
                            </svg>
                            {/* Arrow 2 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-collapse m-4">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </label>
                        {/* Question Discription/Answer */}
                        <div id="accordion-content-0mj5l2s" aria-labelledby="accordion-header-0mj5l2s"
                            class="accordion-content">
                            <div class="accordion-body mx-5 py-4">
                                <p>You can reach Starmoon Consulting by calling +91 9555303220 or emailing info@starmoon.in. They also offer a support ticket system on their website for any queries or issues.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-gray-200 border bg-white">
                        <input type="checkbox" id="accordion-checkbox-0mj5l2z" class="accordion-checkbox"/>
                        {/* Question or Doubt */}
                        <label for="accordion-checkbox-0mj5l2z" class="accordion-label">
                            <h2 id="accordion-header-0mj5l2z" aria-describedby="accordion-content-0mj5l2z"
                                class="accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
                                What is the mission of Starmoon Consulting?
                            </h2>
                            {/* Arrow 1*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-expand m-4">
                                <path
                                    d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                                </path>
                            </svg>
                            {/* Arrow 2 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-collapse m-4">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </label>
                        {/* Question Discription/Answer */}
                        <div id="accordion-content-0mj5l2z" aria-labelledby="accordion-header-0mj5l2z"
                            class="accordion-content">
                            <div class="accordion-body mx-5 py-4">
                                <p>The mission of Starmoon Consulting is to provide solutions that bring value and profitability to businesses, ensuring each client is treated as a top priority regardless of their budget or size.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-gray-200 border bg-white">
                        <input type="checkbox" id="accordion-checkbox-0mj5l2w" class="accordion-checkbox"/>
                        {/* Question or Doubt */}
                        <label for="accordion-checkbox-0mj5l2w" class="accordion-label">
                            <h2 id="accordion-header-0mj5l2w" aria-describedby="accordion-content-0mj5l2w"
                                class="accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
                                What products are available through Starmoon Consulting?
                            </h2>
                            {/* Arrow 1*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-expand m-4">
                                <path
                                    d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                                </path>
                            </svg>
                            {/* Arrow 2 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-collapse m-4">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </label>
                        {/* Question Discription/Answer */}
                        <div id="accordion-content-0mj5l2w" aria-labelledby="accordion-header-0mj5l2w"
                            class="accordion-content">
                            <div class="accordion-body mx-5 py-4">
                                <p>Starmoon Consulting offers products such as 
                                  Bitrix24
                                  CAD software (Graebert ARES®)
                                  Cloud servers
                                  Home automation devices (Exito Retrofit Devices)
                                  Hardware Solutions</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-gray-200 border bg-white">
                        <input type="checkbox" id="accordion-checkbox-0mj5l2m" class="accordion-checkbox"/>
                        {/* Question or Doubt */}
                        <label for="accordion-checkbox-0mj5l2m" class="accordion-label">
                            <h2 id="accordion-header-0mj5l2m" aria-describedby="accordion-content-0mj5l2m"
                                class="accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
                                How does Starmoon Consulting support its clients?
                            </h2>
                            {/* Arrow 1*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-expand m-4">
                                <path
                                    d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                                </path>
                            </svg>
                            {/* Arrow 2 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-collapse m-4">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </label>
                        {/* Question Discription/Answer */}
                        <div id="accordion-content-0mj5l2m" aria-labelledby="accordion-header-0mj5l2m"
                            class="accordion-content">
                            <div class="accordion-body mx-5 py-4">
                                <p>Starmoon Consulting supports its clients through dedicated account managers, regular visits, and a committed support center that provides ongoing assistance and value-added services.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-gray-200 border bg-white">
                        <input type="checkbox" id="accordion-checkbox-0mj5l2u" class="accordion-checkbox"/>
                        {/* Question or Doubt */}
                        <label for="accordion-checkbox-0mj5l2u" class="accordion-label">
                            <h2 id="accordion-header-0mj5l2u" aria-describedby="accordion-content-0mj5l2u"
                                class="accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
                                What is the process for booking a consultation with Starmoon Consulting?
                            </h2>
                            {/* Arrow 1*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-expand m-4">
                                <path
                                    d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                                </path>
                            </svg>
                            {/* Arrow 2 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-collapse m-4">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </label>
                        {/* Question Discription/Answer */}
                        <div id="accordion-content-0mj5l2u" aria-labelledby="accordion-header-0mj5l2u"
                            class="accordion-content">
                            <div class="accordion-body mx-5 py-4">
                                <p>To book a consultation, you can visit their website and use the "Book Consultation" feature, or contact them directly via phone or email.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-gray-200 border bg-white">
                        <input type="checkbox" id="accordion-checkbox-0mj5l2n" class="accordion-checkbox"/>
                        {/* Question or Doubt */}
                        <label for="accordion-checkbox-0mj5l2n" class="accordion-label">
                            <h2 id="accordion-header-0mj5l2n" aria-describedby="accordion-content-0mj5l2n"
                                class="accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
                                What kind of training programs does Starmoon Consulting offer?
                            </h2>
                            {/* Arrow 1*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-expand m-4">
                                <path
                                    d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                                </path>
                            </svg>
                            {/* Arrow 2 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-collapse m-4">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </label>
                        {/* Question Discription/Answer */}
                        <div id="accordion-content-0mj5l2n" aria-labelledby="accordion-header-0mj5l2n"
                            class="accordion-content">
                            <div class="accordion-body mx-5 py-4">
                                <p>Starmoon Consulting offers corporate training programs on various technologies to help industries train their personnel and stay updated with the latest market trends.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-gray-200 border bg-white">
                        <input type="checkbox" id="accordion-checkbox-0mj5l2a" class="accordion-checkbox"/>
                        {/* Question or Doubt */}
                        <label for="accordion-checkbox-0mj5l2a" class="accordion-label">
                            <h2 id="accordion-header-0mj5l2a" aria-describedby="accordion-content-0mj5l2a"
                                class="accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
                                How long has Starmoon Consulting been in business?
                            </h2>
                            {/* Arrow 1*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-expand m-4">
                                <path
                                    d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z">
                                </path>
                            </svg>
                            {/* Arrow 2 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-collapse m-4">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </label>
                        {/* Question Discription/Answer */}
                        <div id="accordion-content-0mj5l2a" aria-labelledby="accordion-header-0mj5l2a"
                            class="accordion-content">
                            <div class="accordion-body mx-5 py-4">
                                <p>Starmoon Consulting Services Pvt. Ltd. was founded in 2015 and has since grown to become a leading consulting company in India.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More FAQs Button */}
                <div class="butn mt-10 flex justify-center">
                    <a href=" "
                        class="inline-block rounded px-4 py-3 text-center text-base font-medium duration-300 text-white bg-primaryColor-tint-100 hover:bg-primaryColor hover:text-white active:bg-primaryColor-shade-200   min-w-[200px]">
                        More FAQs
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to STARMOON",
  meta: [
    {
      name: "description",
      content:
        "STARMOON - Empowering Businesses with Cutting-Edge Technologies",
    },
  ],
};
