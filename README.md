# HW1 – Online Resume

**Course:** Spring 2025 CMPE131

## Project Overview

This project is an online resume that showcases my academic background, skills, and projects. It includes the following features:

- A main resume page (`resume.html`) with personal information, a still picture, and a self-introduction video.
- A navigation drop-down button (displayed as "$>\_") in the top right corner that links to project pages and the transcript page.
- A transcript page (`transcript.html`) that displays my academic transcript in a table format. This page is 'password protected'.
- Two project pages (`prj1.html` and `prj2.html`) that provide details about specific projects I have worked on.

## How to Run

1. **Open the Resume:**
   Open the `resume.html` file in your web browser. This page contains your resume information along with your photo and video.

2. **Navigation Drop-down:**
   Click on the "$>\_" button in the top right to open the drop-down menu. From here, you can navigate to:

   - `prj1.html` (Project 1)
   - `prj2.html` (Project 2)
   - `transcript.html` (Transcript page)
   - Additional links (e.g., GitHub and blog)

3. **Accessing the Transcript:**
   When you click on the transcript link:
   - You will be presented with a form to enter the password.
   - The form uses the `pattern` attribute to check the password.
   - The JavaScript function `showtranscript` (attached as the form’s `onsubmit` handler) validates the password.
   - On entering the correct password, the transcript table is revealed.

## Implementation Details

- **Password Protection:**
  The transcript page (`transcript.html`) implements a simple password protection mechanism:

  - A form is used to submit the password.
  - The password input field utilizes the HTML `pattern` attribute to enforce that only the correct password is accepted.
  - A JavaScript function (`showtranscript`) is triggered upon form submission to validate the input and, if correct, display the hidden transcript section.

- **Drop-down Navigation:**
  The drop-down navigation is implemented using the [popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) as a button with the "$>\_" text in the top right of the resume page. When activated, it displays a menu with links to:

  - `prj1.html` (Project 1)
  - `prj2.html` (Project 2)
  - `transcript.html` (Transcript page)
  - Other external links (e.g., GitHub, blog)

- **Styling and Scripts:**
  The project uses plain HTML, CSS, and vanilla JavaScript. Styling is enhanced with TailwindCSS and some icons (both referenced via a CDN), and the layout is responsive.
