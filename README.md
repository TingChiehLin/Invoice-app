# Frontend Mentor - Invoice App

This is a learning purpose to see more [Invoice App on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl)

![Design preview for the Invoice app coding challenge](./preview.jpg)

## What skills and package I use

• TypeScript

• Tailwind CSS

• React

• Redux Tool Kit

• React Icon

• [Vitest](https://vitest.dev/)

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

## Expected Behaviour

- Creating an invoice
  - When creating a new invoice, an ID needs to be created. Each ID should be 2 random uppercased letters followed by 4 random numbers.
  - Invoices can be created either as drafts or as pending. Clicking "Save as Draft" should allow the user to leave any form field blank, but should create an ID if one doesn't exist and set the status to "draft". Clicking "Save & Send" should require all forms fields to be filled in, and should set the status to "pending".
  - Changing the Payments Terms field should set the `paymentDue` property based on the `createdAt` date plus the numbers of days set for the payment terms.
  - The `total` should be the sum of all items on the invoice.
- Editing an invoice
  - When saving changes to an invoice, all fields are required when the "Save Changes" button is clicked. If the user clicks "Cancel", any unsaved changes should be reset.
  - If the invoice being edited is a "draft", the status needs to be updated to "pending" when the "Save Changes" button is clicked. All fields are required at this stage.
- Users should be able to mark invoices as paid by clicking the "Mark as Paid" button. This should change the invoice's status to "paid".
- Users should receive a confirmation modal when trying to delete invoices.
- Feel free not to add custom styling for the date and dropdown form fields. The designs for those fields are optional extras and are mostly for illustration purposes.

# Front-End Style Guide

## Colors

### Primary

- Desaturated Dark Cyan: hsl(180, 29%, 50%)

### Neutral

- Light Grayish Cyan (Background): hsl(180, 52%, 96%)
- Light Grayish Cyan (Filter Tablets): hsl(180, 31%, 95%)
- Dark Grayish Cyan: hsl(180, 8%, 52%)
- Very Dark Grayish Cyan: hsl(180, 14%, 20%)

## Typography

### Body Copy

- Font size: 15px

### Headings

- Family: [League Spartan](https://fonts.google.com/specimen/League+Spartan)
- Weights: 500, 700

## How to Start a project

1. Install node_modules

   `yarn install` or `npm install`

2. Type command and implement package.json

   `yarn start` or `npm start`

## Start Server

[http://localhost:3000](http://localhost:3000) to view it in the browser.

## Useful resources

- [component props must be an object](https://stackoverflow.com/questions/70951815/react-typescript-property-data-does-not-exist-on-type-intrinsicattributes) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Demo

You can see [Job Seeker](https://job-listing-filter-nine.vercel.app)

## Learning with Jay Lin YouTube Channel

[Jay Lin XR](https://www.youtube.com/channel/UC1rMgKD4Rn-7aVcymjlvhfQ) tutorial
