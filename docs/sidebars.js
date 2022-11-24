/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Introduction",
    },
    // {
    //   type: "doc",
    //   id: "quick-start",
    //   label: "Quick Start",
    // },
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "doc",
          id: "getting-started/installation",
          label: "Installation",
        },
        {
          type: "doc",
          id: "getting-started/supported-backends",
          label: "Supported back ends",
        },
        {
          type: "doc",
          id: "getting-started/accessing-dashboard",
          label: "Accessing the Tracetest dashboard",
        },
      ],
    },
    {
      type: "category",
      label: "Using Tracetest", // should be renamed to "Guides"
      items: [
        {
          type: "doc",
          id: "using-tracetest/create-test",
          label: "Create a test",
        },
        {
          type: "doc",
          id: "using-tracetest/test-results",
          label: "Test results",
        },
        {
          type: "doc",
          id: "using-tracetest/adding-assertions",
          label: "Adding assertions",
        },
        {
          type: "doc",
          id: "using-tracetest/versioning",
          label: "Versioning",
        },
      ],
    },
    {
      type: "category",
      label: "Command Line Interface", // should be renamed to "CLI"
      items: [
        {
          type: "doc",
          id: "cli/command-line-tool",
          label: "Command line tool",
        },
        {
          type: "doc",
          id: "cli/test-definition-file",
          label: "Test definition file",
        },
      ],
    },
    {
      type: "category",
      label: "Automating tests for CI/CD", // should be renamed to "CI/CD Automation"
      items: [
        {
          type: "doc",
          id: "ci-cd-automation/ci-cd-best-practices", // should be renamed "ci-cd-automation/best-practices"
          label: "CI/CD best practices",
        },
      ],
    },
    {
      type: "category",
      label: "Examples & Tutorials",
      items: [
        {
          type: "doc",
          id: "examples-tutorials/overview",
          label: "Examples Overview",
        },
        // {
        //   type: "doc",
        //   id: "examples-tutorials/recipes",
        //   label: "Recipes",
        // },
        {
          type: "category",
          label: "Installable Example - Pokeshop Service", // should be renamed to "Sample Microservice App - Pokeshop"
          items: [
            {
              type: "doc",
              id: "pokeshop/index",
              label: "Overview",
            },
            {
              type: "doc",
              id: "pokeshop/add-pokemon",
              label: "Add Pokemon",
            },
            {
              type: "doc",
              id: "pokeshop/import-pokemon",
              label: "Import Pokemon",
            },
            {
              type: "doc",
              id: "pokeshop/list-pokemon",
              label: "List Pokemon",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Concepts",
      items: [
        {
          type: "doc",
          id: "concepts/introduction-to-trace-based-testing",
          label: "Introduction to trace-based testing",
        },
        {
          type: "doc",
          id: "concepts/architecture",
          label: "Architecture",
        },
        {
          type: "doc",
          id: "concepts/selectors",
          label: "Selectors",
        },
        {
          type: "doc",
          id: "concepts/expressions",
          label: "Expressions",
        },
        {
          type: "doc",
          id: "concepts/environments",
          label: "Environments",
        },
        {
          type: "doc",
          id: "concepts/transactions",
          label: "Transactions",
        },
      ],
    },
    {
      type: "link",
      label: "Tracetest Open API definition",
      href: "/openapi",
    },
  ],
};

module.exports = sidebars;