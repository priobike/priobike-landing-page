# priobike-landing-page

This is a very rough and static landing page that we place under the domain [priobike.vkw.tu-dresden.de/import/*](https://priobike.vkw.tu-dresden.de/import/*). Those are the in-App sharing links that our app creates. If an user has installed our app and clicks on such a link, the app will open. If an user has not installed the app, the browser will open and show this landing page.

[Learn more about PrioBike](https://github.com/priobike)

## Quickstart

The easiest way to run a minimal setup containing EMQX and the authenticator is to use the contained `docker-compose.yml`:
```
docker-compose up --build
```

You can find the landing page under: `http://localhost:8000/import/index.html`

## Contributing

We highly encourage you to open an issue or a pull request. You can also use our repository freely with the `MIT` license.

Every service runs through testing before it is deployed in our release setup. Read more in our [PrioBike deployment readme](https://github.com/priobike/.github/blob/main/wiki/deployment.md) to understand how specific branches/tags are deployed.

## Anything unclear?

Help us improve this documentation. If you have any problems or unclarities, feel free to open an issue.

<details>
  <summary>Deployment</summary>
  
## Deploy updates

It gets deployed using our main Nginx (https://github.com/priobike/priobike-vkw-config/blob/main/etc/nginx/conf.d/default.conf).

To deploy updates of this landing page, access the priobike.vkw.tu-dresden.de VM via SSH and navigate to the directory `/var/www/priobike-landing-page`. There, you need to pull the newest version of the landing page. To do so you need to perform the following commands (root is required because of the `/var/www` directory):
- `sudo -E -s` (runs shell as root user while preserving the old (admin) user environment, this is required because the key is there)
- `cd /var/www/priobike-landing-page`
- `eval $(ssh-agent)`
- `ssh-add ~/.ssh/landing-page-key`
- `git pull`
- `cd ../`
- `chown -R nginx priobike-landing-page/`
- `exit`

## Initial deployment

To deploy this landing page, access the priobike.vkw.tu-dresden.de VM via SSH and navigate to the directory `/var/www`. There, you need to clone the repository. To do so you need to perform the following commands (root is required because of the `/var/www` directory):
- `sudo -E -s` (runs shell as root user while preserving the old (admin) user environment, this is required because the key is there)
- `cd /var/www`
- `eval $(ssh-agent)`
- `ssh-add ~/.ssh/landing-page-key`
- `git clone git@github.com:priobike/priobike-landing-page.git`
- `chown -R nginx priobike-landing-page/`
- `exit`

Make sure that the Nginx config is valid (https://github.com/priobike/priobike-vkw-config/blob/main/etc/nginx/conf.d/default.conf).

</details>
