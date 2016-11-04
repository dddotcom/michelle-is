# Overview

This repository is for a personal website created using the Ember.js framework for web applications. The personal website is hosted on a Github project page. It is linked to a custom .is domain

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd michelle-is`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

<!-- ### Running Tests

* `ember test`
* `ember test --server` -->

<!-- ### Building

* `ember build` (development)
* `ember build --environment production` (production) -->

### Deploying

commit to the master branch of the repository
```bash
git checkout master #make sure you are on the master branch
git add .
git commit -m "<message goes here>"
git push
```

push to github pages using ember-cli-github-pages
```bash
git checkout master
ember github-pages:commit --message "<message goes here>"
```

more info on ember-cli-github-pages is [here](https://github.com/poetic/ember-cli-github-pages#usage )

# How to set up an .is custom domain with Github pages

## Prerequisites
* ownership of a .is domain registered under ISNIC
* a site hosted on github pages

##Getting a DNS provider
####Sign up with a free DNS host that is already registered with ISNIC.
* DNS hosts that are already registered with ISNIC are compliant with ISNIC's standards. I chose to sign up with [1984 hosting](https://www.1984hosting.com/). They have a few services that require payment, but using their freeDNS doesn't cost anything.

####Redelegate your domain on ISNIC to use 1984 hosting's name servers (screenshot).
  * Log into your ISNIC account, select your domain, and click `Redelegate`
  * Since 1984 is registered with ISNIC, you can easily choose them from a dropdown with will autopopulate with 1984's nameservers.

####Add your custom domain to the github pages site.
* Go to your repository and click `Settings`
* From there you will see a `Custom Domain` option. Fill in the text box with your .is domain and click `Save`
####Create the zone entry in 1984's freeDNS service (screenshot).
* Log into your 1984 account andgo to freeDNS and click `new domain`. Under the Domain text box, type the name of your .is domain. Click `create zone`
* A bunch of A, CNAME, MX, NS, and SRV records will be automatically created. Delete all the A and CNAME records, leave the rest.
  * At the bottom of the page, go to the `New DNS Entry` section and create two A records.
      * Type = `A`, host = `@`, points to =  `192.30.252.153`
      * Type = `A`, host = `@`, points to =  `192.30.252.154`
* Now you're done! sit back and relax. It can take up to a day for the DNS changes to propagate.

##Useful sites
* [Setting up an apex domain for Github pages](https://help.github.com/articles/setting-up-an-apex-domain/)
* [https://medium.com/@elnaz/how-to-set-up-an-is-domain-for-a-heroku-app-704a7bbcfd16#.cdz6sqx1f](https://medium.com/@elnaz/how-to-set-up-an-is-domain-for-a-heroku-app-704a7bbcfd16#.cdz6sqx1f)
* [http://seanchin.com/2013/08/08/how-to-register-a-is-domain-name/](http://seanchin.com/2013/08/08/how-to-register-a-is-domain-name/)
* [http://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages](http://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages)
