# PrioBike Landing Page

This is a very rough and static landing page that we place under the domain [priobike.vkw.tu-dresden.de/import/*](https://priobike.vkw.tu-dresden.de/import/*). Those are the in-App sharing links that our app creates. If an user has installed our app and clicks on such a link, the app will open. If an user has not installed the app, the browser will open and show this landing page.

It gets deployed using our main Nginx (https://github.com/priobike/priobike-vkw-config/blob/main/etc/nginx/conf.d/default.conf).

## Deploy updates

To deploy updates of this landing page, access the priobike.vkw.tu-dresden.de VM via SSH and navigate to the directory `/var/www/priobike-landing-page`. There, you need to pull the newest version of the landing page. To do so you need to perform the following commands (root is required because of the `/var/www` directory):
- `sudo -E -s` (runs shell as root user while preserving the old (admin) user environment, this is required because the key is there)
- `eval $(ssh-agent)`
- `ssh-add ~/.ssh/landing-page-key`
- `git pull`
- `exit`

## Initial deployment

To deploy this landing page, access the priobike.vkw.tu-dresden.de VM via SSH and navigate to the directory `/var/www`. There, you need to clone the repository. To do so you need to perform the following commands (root is required because of the `/var/www` directory):
- `sudo -E -s` (runs shell as root user while preserving the old (admin) user environment, this is required because the key is there)
- `eval $(ssh-agent)`
- `ssh-add ~/.ssh/landing-page-key`
- `git clone git@github.com:priobike/priobike-landing-page.git`
- `exit`

Make sure that the Nginx config is valid (https://github.com/priobike/priobike-vkw-config/blob/main/etc/nginx/conf.d/default.conf).
