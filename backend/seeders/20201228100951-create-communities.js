"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("communities", [
      {
        uuid: "e0c5ba0d-eb95-42cb-953d-dda7df45bf7a",
        name: "javascript",
        description:
          "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "9790cf30-8544-4264-9dc8-d45d7a87ab5a",
        name: "html",
        description:
          "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "4d7084f5-a54a-4138-98a2-2c9d2d65d8d3",
        name: "css",
        description:
          "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "d294e49f-64ef-4c74-9e3a-6c81345964de",
        name: "dom",
        description:
          "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "41ada17e-90b8-42aa-977d-bc3ca7e33e0a",
        name: "fetch-api",
        description:
          "The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "a0887dd3-be2d-474c-949d-4ecffb78c5ac",
        name: "sass",
        description:
          "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "36bd35c8-2964-4ad4-9869-559422b4a0e3",
        name: "typescript",
        description:
          "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "51be6da6-f73a-4bae-a4ad-5df03c39a73d",
        name: "react",
        description:
          "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "8e9c61ce-9524-4d0e-abbd-987b218ac92d",
        name: "vue",
        description:
          "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "f2d71b56-86bd-4b74-98cb-1fa38ec2f20e",
        name: "angularjs",
        description:
          "AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
