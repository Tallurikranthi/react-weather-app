import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <header
        class={`sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm lg:ps-[260px] ${
          location.pathname !== "/" ? "lg:ps-[260px]" : "lg:ps-[0px]"
        }`}
      >
        <div className="border border-b-1 z-[99] relative w-full">
          <div className="max-w-full  w-full px-4 sm:px-6 lg:px-8  bg-white">
            <div className="flex-1 flex items-center justify-end gap-x-3 pt-2">
              <a
                className="inline-flex justify-center items-center gap-x-2 font-medium text-[12px] text-gray-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-500"
                href="#"
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http:www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                  <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
                  <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                English (US)
              </a>

              <div className="flex flex-wrap items-center gap-x-1.5">
                <a
                  className="py-[7px] px-2.5 inline-flex items-center font-medium text-[12px] rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                  href="#"
                >
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#05292c"
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                  <span className="ms-1">More Info</span>
                </a>
                <Link
                  className="py-2 px-2.5 inline-flex items-center font-medium text-[12px] rounded-lg bg-[#05292c] text-white disabled:pointer-events-none"
                  to="/"
                >
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-door-open"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                  </svg>
                  <span className="ms-1">Login</span>
                </Link>
              </div>
            </div>
          </div>
          <nav className="relative w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8  bg-white">
            <div className="flex justify-between items-center gap-x-1">
              <a
                className="md:hidden lg:hidden font-semibold w-auto text-black focus:outline-none focus:opacity-80"
                href="#"
                aria-label="Brand"
              >
                <img
                  className="w-2/6 size-12 object-fill"
                  src="https:cloud4coolkids.com/assets/admin_image/image/20240513194409.png"
                  alt="logo"
                />
              </a>

              <button
                type="button"
                className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-header-base-collapse"
                aria-expanded="false"
                aria-controls="hs-header-base"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-header-base"
              >
                <svg
                  className="hs-collapse-open:hidden size-4"
                  xmlns="http:www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block shrink-0 hidden size-4"
                  xmlns="http:www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>

            <div
              id="hs-header-base"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
              aria-labelledby="hs-header-base-collapse"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                  <div className="grow">
                    <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                      <Link
                        className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                        to="/home"
                        aria-current="page"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                          xmlns="http:www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                        Home
                      </Link>

                      <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                        <button
                          id="hs-header-base-dropdown"
                          type="button"
                          className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          aria-label="Dropdown"
                        >
                          <svg
                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                            xmlns="http:www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m3 10 2.5-2.5L3 5" />
                            <path d="m3 19 2.5-2.5L3 14" />
                            <path d="M10 6h11" />
                            <path d="M10 12h11" />
                            <path d="M10 18h11" />
                          </svg>
                          Pages
                          <svg
                            className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
                            xmlns="http:www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="hs-header-base-dropdown"
                        >
                          <div className="py-1 md:px-1 space-y-0.5">
                            <Link
                              className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              href="/page1"
                            >
                              Page 1
                            </Link>

                            <Link
                              className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              href="/page2"
                            >
                              Page 2
                            </Link>

                            <Link
                              className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              href="/page3"
                            >
                              Page 3
                            </Link>
                          </div>
                        </div>
                      </div>

                      <Link
                        className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                        to="/contact"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                          xmlns="http:www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div class="-mt-px">
        <div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden">
          <div class="flex items-center py-2">
            <button
              type="button"
              class="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-application-sidebar"
              aria-label="Toggle navigation"
              data-hs-overlay="#hs-application-sidebar"
            >
              <span class="sr-only">Toggle Navigation</span>
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M15 3v18" />
                <path d="m8 9 3 3-3 3" />
              </svg>
            </button>

            <ol class="ms-3 flex items-center whitespace-nowrap">
              <li class="flex items-center text-sm text-gray-800">
                Application Layout
                <svg
                  class="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li
                class="text-sm font-semibold text-gray-800 truncate"
                aria-current="page"
              >
                Dashboard
              </li>
            </ol>
          </div>
        </div>
      </div>

      {location.pathname !== "/" && (
        <div
          id="hs-application-sidebar"
          class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
          role="dialog"
          tabindex="-1"
          aria-label="Sidebar"
        >
          <div class="relative flex flex-col h-full max-h-full">
            <div class="px-6 pt-4">
              <a
                class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                href="#"
                aria-label="Preline"
              >
                <img
                  className="w-3/3 size-12 object-fill"
                  src="https:cloud4coolkids.com/assets/admin_image/image/20240513194409.png"
                  alt="logo"
                />
              </a>
            </div>

            <div class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
              <nav
                class="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
                data-hs-accordion-always-open
              >
                <ul class="flex flex-col space-y-1">
                  <li class="hs-accordion" id="account-accordion">
                    <button
                      type="button"
                      class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      aria-expanded="true"
                      aria-controls="account-accordion-child"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-view-list"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
                      </svg>
                      Sales & Business
                      <svg
                        class="hs-accordion-active:block ms-auto hidden size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:hidden ms-auto block size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      id="account-accordion-child"
                      class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                      role="region"
                      aria-labelledby="account-accordion"
                    >
                      <ul class="ps-8 pt-1 space-y-1">
                        <li>
                          <Link
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            to="/institution-form"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Institution Form
                          </Link>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Form
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Business Opportunity
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Business Opportunity
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Update Server Form
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Update Server Form
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="hs-accordion" id="account-accordion">
                    <button
                      type="button"
                      class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      aria-expanded="true"
                      aria-controls="account-accordion-child"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-view-list"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
                      </svg>
                      Student & Batch
                      <svg
                        class="hs-accordion-active:block ms-auto hidden size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:hidden ms-auto block size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      id="account-accordion-child"
                      class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                      role="region"
                      aria-labelledby="account-accordion"
                    >
                      <ul class="ps-8 pt-1 space-y-1">
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Student Login
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Student Login
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Batch Login
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Batch Login
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Tutor Login
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Tutor Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="hs-accordion" id="account-accordion">
                    <button
                      type="button"
                      class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      aria-expanded="true"
                      aria-controls="account-accordion-child"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-view-list"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
                      </svg>
                      Feedback School / Degree
                      <svg
                        class="hs-accordion-active:block ms-auto hidden size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:hidden ms-auto block size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      id="account-accordion-child"
                      class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                      role="region"
                      aria-labelledby="account-accordion"
                    >
                      <ul class="ps-8 pt-1 space-y-1">
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Form Component
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Form Component
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Follow-up Form
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Follow-up Form
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Payment Form
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Payment Form
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li class="hs-accordion" id="account-accordion">
                    <button
                      type="button"
                      class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      aria-expanded="true"
                      aria-controls="account-accordion-child"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-view-list"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
                      </svg>
                      Feedback Engineering
                      <svg
                        class="hs-accordion-active:block ms-auto hidden size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:hidden ms-auto block size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      id="account-accordion-child"
                      class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                      role="region"
                      aria-labelledby="account-accordion"
                    >
                      <ul class="ps-8 pt-1 space-y-1">
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Form Component (ENG)
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Form Component (ENG)
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Follow-up Form (ENG)
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Follow-up Form (ENG)
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Payment (ENG)
                          </a>
                        </li>
                        <li>
                          <a
                            class="flex items-center gap-x-1 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                            Retrieve Payment (ENG)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
