[![Netlify Status](https://api.netlify.com/api/v1/badges/005d636a-472b-4771-adbb-4ae8ae243f57/deploy-status)](https://app.netlify.com/sites/babypatrol/deploys)

# Baby Patrol

This is an app to help new parents keep track of their baby's activities, such as:

* Peeing.
* Pooping.
* Sleeping.
* Feeding.

You know, the usual suspects.

## Visit https://babypatrol.netlify.app

![alt text][screenshot1]

[screenshot1]: https://i.imgur.com/CRAOvwg.png "Screenshot of Baby Patrol's Landing Page"

![alt text][screenshot2]

[screenshot2]: https://i.imgur.com/lgN6lxj.png "Screenshot of Baby Patrol's Login Page"

![alt text][screenshot3]

[screenshot3]: https://i.imgur.com/jNTCEP3.png "Screenshot of Baby Patrol's Dashboard"

## Tech
This app was created using:
* [React](https://reactjs.org): Using hooks and the context api.
* [Firebase](https://firebase.google.com): Handles the data and user authentication.
* [Netlify](https://www.netlify.com): The app is deployed here. I chose it because setting up the build process and continuous deployment was very easy. As soon as I push any changes to the github repo, Netlify automatically runs `npm run build` on my project and publishes the (newly created) `build/` folder.

