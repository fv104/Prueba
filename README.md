# bigfinite
React application with drag and drop

How to run
- unzip file and navigate command window to folder
- Download packages with - npm install
- Run - npm start so webpack can create a new script bundle
- When webpack is done bundling open index.html located in the dist folder
- For unit tests run - npm test

About Project

-DRAG AND DROP

Most of my time was spent getting up to speed with the drag and drop library. The library I used for this project is called react-dnd.
This package is built on top of html 5 drag and drop ensuring compatibility with all current browsers. The library works by wrapping the root
react component in a drag and drop context and then also wrapping source components (widget) and target components (RightPanel and MainWidgetScreen)
in corresponding contexts. Whenever a widget is dropped on a target, the CanvasContain state updates and re-renders the widget.


-REACT ARCHITECTURE

The biggest decision I had to make was how to render the canvas and widget components. I debated between two approaches before deciding.
Either completely re-render the canvas and widgets every time a user switches between different screens or, Render the different screens once
and then show and hide when the user switches between them. Ultimatley I chose the second option for a couple reasons. For the limited number
of screens we would be displaying for this project I thought a simple css approach was more practical, cheaper and quicker than re-rendering. 
To re-render each time would have introduced additional complexity that did not seem neccesary, such as searching the array of screens each click.
To further ensure ie 11 compatibility, I incorporated babel-polyfill to fill any gaps of code that ie may not pick up.
Webpack and Babel were used to compile React, Sass and es6 for the browser.

-CSS and STYLES

I used Sass for my pre processor and broke the scss files into smaller modules. I also made the design responsive down to about mobile phone width.
Font Awesome icons were incorporated for the navbar and widgets. I tried to follow the design as close as possible. The buttons, other than Add,
are just there to follow the design and don't actually have functionality.

-TESTING

To demonstrate some simple react testing I used Jest as a test runner with Enzyme. The CanvasContain component was used for an example as it contains the heart of the applications additional and removal of widgets to and from the state.

Overall this project was a good challenge as I had never dealt with drag and drop before.

If there any questions please feel free to contact me.

Thank you,
Mike
