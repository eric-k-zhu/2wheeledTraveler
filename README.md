# 2 Wheeled Traveler

Vintage motorcyclists have come to rely on cell phones more and more while riding their motorcycles. This app eliminates the need for multiple apps by combining features like speed, weather, and gas onto a single screen that overlays your standard mapping program.

## Getting started

- In order to start developing we are using expo to run our application during development. Follow the steps to install on the expo guide. 
- Our application is developed off the back of React Native and so to start development, follow the steps to install React-Native.
- We use npm to build our application and include all of our packages that we use so during installation of React-Native and Node.js make sure to include Node Packet Manager as well.
- After gaining access to our repository, to start development run `npm install` to install all packages neccessary to run our application.
- When ready to run a local server, run `npm start` this should run a script to automatically start expo. This can be verified by checking the `package.json` file.
- This start guide was written on 11/15/2019 and verified by Eric K Zhu(ekzhu703@gmail.com) on Windows 10; email me with any questions.

## Testing

For testing, we created unit tests and generated coverage reports using Jest.
- First,  Jest needs to be installed for Expo
`npm i jest-expo --save-dev`
- To run the tests, run
`npm test`

To view the coverage report, open the `index.html` file within the `/coverage/` directory. 

## Deployment ***

- Our production code is hosted on GitHub in the 2WheeledTraveler repository master branch. A new developer can view the code as it is public but must first get permision from administrator Eric Zhu (ekzhu703@gmail.com) to contribute changes.
- Our fully deployed application will be hosted on the application stores, aka App Store and Google Play for iOS and Android.
- At this point in time, continuos deployment is not enabled.

## Technologies used

- We are using Google Firebase's database to manage users and their data
- Our navigation is provided by Google Maps
- Our application is built off of the React Native infrastructure

## Contributing

- Before contributing to the application, a new contributor must first request access from current admin Eric Zhu (ericzhu@live.unc.edu). Additionally Anna Truelove handles Trello board management. Furthermore, a new developer must be added to obtain access to our firebase database
- Our team follows development best practices and should incquire with the current development team about team best practices.

Our project website is: (http://2wheeledtraveler.web.unc.edu/)

## Authors ***

[Anna Truelove](https://github.com/annatruelove)
- Project Manager
- Webmaster
- Integrated Firebase with the application
- Implemented email authentication
- Wrote tests and produced test coverage report
- Styled the Login & Registration Screens

[Eric Zhu](https://github.com/eric-k-zhu)
-UI Lead
-Styled Profile Screen
-Developed Core Navigation aspects
-Set up core application infrastructure

[Suraj Madiraju](https://github.com/madirajusuraj)

## License

MIT License

Copyright (c) 2019 Eric Zhu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgments

We would like to thank 
- Jeff Terrel, our course instructor 
- Nicholas Auger, our technology mentor
- Jim Mahaney, our client and creator of 2 Wheeled Traveler
- The UNC App Lab staff