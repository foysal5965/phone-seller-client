import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">The</span>
                    </span>{' '}
                    basic things we need to no about Ract Application
                </h2>

            </div>
            <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
                <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">

                    <p

                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"
                        title="Nori grape silver beet broccoli kombu beet"
                    >
                        What are the different ways to manage a state in a React application?
                    </p>
                    <p className="max-w-xs mx-auto mb-2 text-gray-700">
                        In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.

                        The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.
                    </p>

                </div>
                <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">

                    <p

                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"
                        title="Well, the way they make shows is, they make one"
                    >
                        How does prototypical inheritance work?
                    </p>
                    <p className="max-w-xs mx-auto mb-2 text-gray-700">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>

                </div>
                <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">

                    </p>
                    <p

                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"
                        title="Pommy ipsum smeg head whizz morris himer due"
                    >
                        What is a unit test? Why should we write unit tests?
                    </p>
                    <p className="max-w-xs mx-auto mb-2 text-gray-700">
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;