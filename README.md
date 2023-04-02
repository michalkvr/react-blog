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
Project is automatically deployed on https://react-blog-michalkvr.vercel.app/ with pushing to the `main` branch

### Credentials for testing

```
username: michalkvr
password: 123
```

<br>

# Notes for code review

## Introduction
This repo contains some core parts of cat application exercise. Before you look into the code, in a few paragraphs I'll explain the creation process, some setup choices I made, how would I implement missing parts of app and where are my knowledge gaps. It would need to spend much more time to complete whole exercise, although I reckon that it's not the point here. I hope, the pieces I wrote will be sufficient to get the insight into my code style, thinking and the way of developing, I will gladly explain or add some implementation parts if necessary, so please let me know.
<br>

I've added notes into some parts of the app, where some additional work would need to be done.  

## Project structure and build tool
- For a smaller apps I usually group files by purpose, but since the project should be prepared for scaling I chose <b>grouping by features</b> - which is more suitable for bigger projects.
- As a build tool I used to work with <b>CRA (Webpack)</b>, but lately I've been experimenting with <b>Vite</b> so I chose <b>Vite</b> for this project.
- As a package manager I chose <b>yarn</b>, but I usually work with <b>npm</b> aswell.

## Git and code style tools
- I use <b>prettier</b> and <b>eslint</b> alongside <b>lint-staged</b> and <b>husky</b> to prevent inconsistencies and code smells inside repository (especially when working with other developers).
- I also like to keep unified structure of commit messages and I follow approach defined at https://www.conventionalcommits.org/en/v1.0.0/.

## Mock
- For testing outside provided api server I generated mock server from your api definiton using <b>swagger</b>. https://app.swaggerhub.com/apis/michalkvr/ReactBlog/v1#/. Although deployed version communicates with provided server.

## Styling
- In the past I was using <b>Bootstrap</b> a lot, currently in the smaller projects I like to experiment with <b>Tailwind</b>, but to be honest sass is still my prefered way of styling components and I feel most comfortable with the <b>css/scss</b>. I also have kind of love/hate relationship with css in js but due to some technical/performance reasons I usually stick with scss modules. In the past I used <b>BEM</b> a lot and I really loved it. In a matter of fact I still use <b>BEM</b> in some Laravel projects.

## Other libraries
- If the app would need to be localized I would use <b>i18next</b>
- For store management I use <b>Redux</b>, especially for bigger projects. I would also consider React's <b>Context API</b> for some smaller projects.
- I would probably use SSR/SSG library like <b>Next.js</b> or <b>Gatsby.js</b> for content-driven apps like this one. 

## Testing
- For unit testing, I used a library called <b>Vitest</b> which is similar to Jest but more suitable for usage alongside Vite. I covered just a few utilities just to show how to handle tests. Although I know QA concepts from uni, I like the concept of TDD and have some experience with unit tests, testing is one of my weaker points that I want to improve in the future since I am aware of its importance in the SDLC. 
- For E2E tests I would use Cypress, which I haven't used properly yet.

## Docs
- I am advocate for self-documenting code (especially in frontend) so I usually write just a bunch of MD files.
- If I would be building an UI library for the project I would definitely use <b>storybook.js</b> although I don't have much experience with this library yet.

<br> 

# Final Notes
Please forgive unfinished styling, full api integration and other stuff. I just wanted to implement some core parts and features to showcase my current expertise, I can finish some bits if necessesary and I am available for discussion over the code anytime. I am also very confident due to the previous experience that I can pick up new things quickly and learn them in advance if necessary.

Thank you and have a great day. :-)) <br>
Michal
