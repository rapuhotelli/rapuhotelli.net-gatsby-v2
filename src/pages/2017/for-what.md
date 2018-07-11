---
date: 2017-04-16T18:45:31+03:00
description: ""
series: ["dev", "english"]
thumbnail: ""
title: "Development for what"
---

I watched Ryan Dahl's presentation on Node.js back then. A friend linked it to me and said it was gonna be big. I understood it was going to be big, just not how big it would become. Every developer has their own take on this story and this is mine.

<!--more-->

Back in the 2000s web development was... different, but also much _much_ simpler to learn. There was a lot of hype on Ruby, which campaigned against PHP as being more hip. MVC frameworks were cool as fuck. They are still cool to me. I like OOP quite much. I'm an engineer by heart and OOP is very easy to understand and develop. Ofcourse, these days I know that for larger projects with multiple developers OOP easily becomes a giant clusterfuck, but that is a story for another time.

The whole development world and ecosystem were very academic - it was just programming. You always used the tools and libraries that were carefully crafted and stable. When it came to things that had the slightest risk of misusing something, it was always clearly emphasized how to not make an insecure thing. At best people linked to academic papers on input validation and even how to structure HTML properly in a best effort prevent browser parsing bugs or JavaScript bugs.

Frameworks did a lot of magic JavaScript. You used the framework's own classes to render things on the page and it magically rendered all kinds of baked-in form validators and all kinds of things, so you wouldn't have to. If you wanted to AJAX something yourself, that was _rad_. You'd make an endpoint using your fancy-ass framework and it might render HTML directly and your jQuery or whatever would paste that HTML onto the page. Cool as fuck. Someone crazy might have used just JSON responses and jQueried something into the page and they would be asked: "Why would you do this? Just let the _application_ render what you wanted."

I worked with people who were front-end developers. That was new. You had people who on purpose did not do "backend", but focused on colours, layout composition and even _typography_. Some even did some JavaScript. I let them do their thing, but it was the first time I encountered an interesting (today very common) phenomenon: something that was designed to present itself in a specific way was not actually very easily doable by the MVC application. You lost the academic control of the application to something abstract and took risks regarding the functionality of the application in favor of _art_. That was crazy.

But here's the thing: the so-called front-end developers were not interested in the application as such. As time passed they did more and more JavaScript, which was great. jQuery and such were amazing. Once Node.js launched, people rejoiced. A new movement arose where using some special service you could easily "deploy an app" which was written in Node.js and it rendered things and client-side you had more JavaScript which rendered more things. It was cool. But the people making these simple apps were the artists who had JavaScript knowledge. I felt a disturbance in the force.

Over the years it manifested in a peculiar way. There was great angst against PHP and other less-cool setups. Not because they were bad, but because the people now working with the cool apps had no history with them. Making things was so cool that people didn't care about re-inventing the wheel. You could say it was my first foray into the fight against populism. If I wanted to do something that had been solved potentially a decade earlier I had to write a lot of code as there was no standard library and once someone came up with a _module_ that did the thing, they became rockstars for blessing the crowd with this thing. It was very, very surreal.

It was even more surreal from the perspective of my employer, where, in production we value stability for web applications under very heavy load. There was nothing that Node.js solved. Additionally, we tried stresstesting a MongoDB database with our production data and it was bad. It just fell over. The promises of scalability were literally lies as queries took far too long and replication caused legions of new issues that were conveniently not documented really well.

I love progress and I _LOVE_ the Web 3.0 or whatever it is we now have with SPAs and whatnot, but the rabid frothing of the JavaScript community has lost all credibility. I've just been biding my time, waiting for a standard to emerge. Right now the standard seems to be Facebook's React. It seems pretty cool. Like MVC-level of cool. Yet, it hasn't cashed in on how to quickly make a thing. I've made several prototype apps but they are so small I haven't been convinced what it actually solves, but I really, really want to. As a web developer who read all the news, I understand I must learn it well and I'm very much looking forward to mastering it.

On paper I might sound bitter. No, ofcourse not. I am a professional and I do what I must. But in hindsight I do believe the people who came up with Node.js and those who were major players in the new ecosystem should have standardized a _lot_ of things. I was very disappointed in the io.js drama. Afterall, we all simply serve our customers and clients, and when starting a new project there should not be any ambiguity on how long your technology stack will survive before being deprecated in the name of pretentious progress. Maybe the enthusiasm would die down a bit if we had some way of measuring how much money is lost globally in unnecessary work caused by another broken piece in the gearworks. Long live left-pad.

Now coding, for fun:

- A tiny React app for a "Friday bottle raffle"
- A work-hours punch robot with a React interaface (an Electron-based Nightmare.js task runner)
- Figuring out how to Reactize a Wordpress blog

Now coding, for work:

- Maintaining an PHP MVC-app (Yii Framework)
- Developing a theme for a Wordpress site
