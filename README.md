# React Blog Docs

## Local development
Install packages with

```
yarn
```
Run local development server with
```
yarn dev
```

<br>

## Deploy
Project is automatically deployed on https://react-blog-ds7ta9vqn-michalkvr.vercel.app/ with pushing to the `main` branch

<br>

# Notes for code review

## Introduction
This repo contains some core parts of cat application exercise. Before you look into the code, in a few paragraphs I'll explain the creation process, some setup choices I made, how would I implement missing parts of app and where are my knowledge gaps. It would need a lot of time (which I sadly don't and won't have in a following few weeks or so) to complete whole exercise. Although I hope, the pieces I wrote will be sufficient to get an insight into my code style, thinking and the way of developing, I will gladly explain or add some implementation parts if necessary, so please let me know.
<br>

I have added comments in some parts of the app, where some work needs to be done and in some parts I added link to my old repo, where I implemented same app (I didn't send it to you at the time) so you can see nuance of the solution but I considered rewriting it unnecessary for the purpose. Feel free to look at the old project (https://github.com/michalkvr/react-blog-legacy/tree/dev), the app is completely styled, even sorting and CRUD logic is almost fully implemented, but structure and other stuff is not ideal. The code in this repo is IMHO much cleaner.

## Project structure and build tool
- For a smaller apps I usually group files by purpose, but since you asked to prepare project for scaling I chose grouping by features - which is more suitable for bigger projects. This approach is very common so I won't be bothering you by explaining the structure.
- As a build tool I used to work with CRA, but lately I am experimenting with Vite so I chose it in this project.
- As a package manager I chose yarn, but I usually work with npm.

## Git and code style tools
- I use prettier and eslint, and because alongside lint-staged and husky to prevent inconsistencies and code smells inside repository (especially when working with other developers).
- I also like to keep unified structure of commit messages and I follow approach defined at https://www.conventionalcommits.org/en/v1.0.0/.

## Mock
- For testing outside provided api server I generated mock server from your api definiton and I am using it in the code. https://app.swaggerhub.com/apis/michalkvr/ReactBlog/v1#/.
- I am not error checking api requests which I should and then display time Toast component with message.

## Styling
- In the past I was using Bootstrap a lot, currently in the smaller projects I like to experiment with Tailwind, but to be honest sass is still my prefered way to style components and I feel most secure with the css/scss. I also have kind of love/hate relationship with styled components but due to some technical reasons I usually stick with scss modules. In the past I used BEM a lot and I really loved it. In a matter of fact I still use BEM in some Laravel projects.

## Other libraries
- If the app would need to be localized I would use i18next
- For store management I would use ContextAPI or Redux for bigger project. Currently I didn't have a time to set up Redux for this project and to be honest, I am still learning it by the evenings, since I haven't need it in my current job.

## Testing
- Testing is one of my weaker points. I really like concept of TDD, but in smaller FE projects I usually don't have the need for automated testing. Sadly, my last employer didn't give me much space and budget for testing as much as I would like (e2e tests were handled by QA team), so this is definitely the part I want to improve in the future. I know testing concepts well and have some experience with JUnit, PHPUnit and a bit of Jest.
- In this project I skipped testing part entirely.

## Docs
- I am advocate for self-documenting code (especially in frontend) so I usually write just a bunch of MD files.
- If I would be building an UI library for the project I would definitely use storybook.js for that although I don't have much experience with this library yet.

<br> 

# Final Notes
Please forgive unfinished styling, full api integration and other stuff. I can finish some core parts if necessesary or I am available for discussion over the code.

Thank you and have a great day. :-)) <br>
Michal