# NewsPanda Proxy-Server
Update: check out the live app [here](https://priyanshu1-62.github.io/NewsPanda) 🚀
---

### 🧰 Tech Stack
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
- 	[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
- 	[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
- 	[![axios](https://img.shields.io/badge/axios-5A29E4?logo=axios&logoColor=white)](#)
-  [![dotenv](https://img.shields.io/badge/dotenv-464646?logo=dotenv&logoColor=white)](#)
-  [![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=black)](#)
---

### 🗺️ Overview
- This backend project serves as a Proxy Server for NewsPanda web application.
- Direct data fetch request from NewsPanda website to NewsAPI server falls under Cross-site request category. The request will hit the server but browser will block the response due to CORS(cross-origin resource sharing) protection.
- Since NewsAPI don't need corresponding user credentials from Browser profile to be tied with request body, we can bypass the CORS issue using a proxy server. 
- Request made by a server (Proxy Server on Render in our case) is seen as an interaction by a remote machine, hence Browser does not automatically ties user credentials related to NewsAPI and therefore CORS is not enforced. This allows us to successfully retrieve data from NewsAPI website.
---

### 🛠️ Architecture
- The project is alightweight Express-based Proxy server that handles client request for news data.
- Axios API is used for communicating with Newsapi server based on the dynamic query parameters received from frontend.
- CORS  middleware is configured to grant secured access to NewsPanda frontend, enabling it to communicate with the proxy server without browser-side CORS restrictions. After server receives a request, CORS middleware updates response headers such as Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, and then lets the route handler handle next.
- API keys are encapsulated using Environmental variables via dotenv for security.
- Data fetch algorithm is wrapped in an Error handling structure to account for unexpected errors.
---

### ✨ Features
- __Category Navigation:__ Users can easily switch between News categories - like Business, Entertainment, Sports, Science, Health, Technology, or a mashup, using the responsive Navbar.
- __Responsive Design:__ App layout is adaptive according to device size, ensuring readablility and suitable element scaling.
- __Infinite Scroll:__ For the selected News category, only a certain number of News articles are fetched, sufficient enough to fill the viewport. Scroll position is continuously monitored and as soon as it reaches near the bottom of the page, next batch of News articles of same catagory are fetched. This creates a seamless and continuous reading experience.
- __Top Loading bar:__ In order to show progress and signify the act of communicating with server a top loading bar is implemented from scratch, without relying on any third-party libraries. It subtly indicates data is being loaded, enhancing perceived responsiveness.
- __Spinner:__ While additional articles are being loaded, especially during infinite scolling, a spinner appears at the bottom of the page. It lets user know that content is on the way, avoiding confusion and repeated scrolling.
---

### ⚡ Performance
 - 
---

### 🌍 Deployment
- Frontend: [Github Pages](https://priyanshu1-62.github.io/NewsPanda)
- Backend: [Render](https://newspanda-proxyserver.onrender.com)
---

### 📎 Related Repositories
- Frontend: [NewsPanda Frontend](https://github.com/Priyanshu1-62/NewsPanda)
---

## 📛 Badges Credit
- [shields.io](https://shields.io) for dynamic badge generation  
- [inttter/md-badges](https://github.com/inttter/md-badges) for curated badge styles and inspirations
