# PrioBike Landing Page

This is a very rough and static landing page that we place under the domain [priobike.vkw.tu-dresden.de/import/*](https://priobike.vkw.tu-dresden.de/import/*). Those are the in-App sharing links that our app creates. If an user has installed our app and clicks on such a link, the app will open. If an user has not installed the app, the browser will open and show this landing page.

## Deployment

To deploy this landing page, access the priobike.vkw.tu-dresden.de VM via SSH and navigate to the directory `TODO`. There, you need to pull the newest version of the landing page. Afterward, you need to restart the nginx server to apply the changes. The nginx server is configured such that the page needs to be placed in the `page` directory of this repository.