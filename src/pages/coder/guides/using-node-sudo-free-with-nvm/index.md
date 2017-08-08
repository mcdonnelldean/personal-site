---
layout: draft.html
---

# Using Node.js, sudo free, with NVM

There are many ways to install Node.js, from package managers to installers; you can even download and build from source! Unfortunately, the vast majority of installations can put Node.js in a location that requires the need for elevated permissions when using either the `node` or `npm` commands. Today we will look at how to clean up and reinstall Node.js so that there is no need to use elevated permissions; as a bonus we will also gain the ability to jump between Node.js versions and even IO.js with ease.

You can tell if you need elevated permissions to run Node.js based on whether or not you need to append commands with `sudo`, which stands for Super-User DO. Any command run by prefixing it with sudo will be run with elevated permissions.

Requiring the need for sudo on Unix-like operating systems when using Node.js at the command line is not only laborious, but also likely to lead to all sorts of strange issues for certain globally installed Node.js modules.

There are 2 ways to enable the use of Node.js sudo free:

  * Download and build Node.js from source to a directory you have permissions for.
  * Use a Node.js version manager that works within your home directory.

For this post we will look at using a Node.js version manager, [NVM][002], to enable sudo free usage of any `node` or `npm` based commands. Building from source sure is a fun way to spend an afternoon and we highly encourage it! but for everyday use, a good Node.js version manager is the way to go.

__NOTE:__ _If you are a Windows user you will be pleased to know that the problem described in this article does not apply to you. Go grab a coffee, you earned it._

__IMPORTANT:__ _sudo free is not technically true. Some global modules may require sudo if they are installing or working with directories that are only available with root permission. Still, nearly always is better than never!_

## Before we begin

If you do not require the use of sudo due to changing file permissions, you should reset your permissions and follow this guide. Messing with permissions is a sure-fire way to lead to all sorts of awful problems later on. On OSX, permissions can be reset by following this [guide][001]. On Linux there is no easy way to reset permissions. In general, a reinstall is the best route to
go here.

## Preparation

If you have any global Node.js modules installed via <a title="NPM" href="https://www.npmjs.com/" target="_blank">NPM</a>, now would be a good time to delete them. We will most likely be changing the destination of the global modules folder and will have to reinstall them anyway.

We first need to check if Node.js is already installed on your system. This can be done by running each of the commands below individually at the command line:

```shell
which node
which npm
```

If there is no output, great! If there is, don’t panic! Next we are going to look at how to completely remove each one in turn. Be sure to make a note of the output of each command, we will be using these shortly.

## Remove existing Node.js installs

There are a multitude of ways to remove Node.js from your system, the exact details will depend upon how it was installed. If you have used Node.js version manager or a package manager, consult their respective documentation for details on how to remove Node.js.

If Node.js has been installed manually from the site, or from source, you will need to remove it manually. Luckily we have the instruction on how to do that just below.

__IMPORTANT:__ _The steps below for removing Node.js involve the use of the `rm -rf` command which can be read as ReMove -Recursively -Force. There is no undo for this command and you will not be warned before deletion. **Be extremely careful** of the directory name you enter. Check each directory name you enter, **twice**, before hitting return._

First up, we need to remove Node.js by using `rm -rf` on each of the directories listed in the which command.

```shell
sudo rm -rf /directory/of/node/npm
``` 

As well as the above, there are some other odds and ends that hang around. Each command will need to be ran in turn.

```shell
sudo rm -f /usr/local/share/man/man1/node.1
sudo rm -f /usr/local/lib/dtrace/node.d
sudo rm -rf ~/.npm
sudo rm -rf ~/.node-gyp
``` 

Before going any further, run each ‘which’ command again. If any directories still appear, go ahead and `rm -rf` each of those directories too.

## Install Node.js via NVM

Introduced above, NVM is a Node.js/NVM version manager that targets works with most Unix-like OSes. To install NVM used to be a bit of a manual effort, thankfully there is now a script that does the hard work for you.

```
curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash
``` 

Note that this script works for both Bash and ZSH, and will pick the correct profile automagically! NVM allows you to install many versions of Node.js. To install the latest stable version of Node.js simply run:

```shell
nvm install stable
```    

Next set stable as the default version of Node.js for any new console window created:

```shell
nvm alias default stable
```    

You can test this by creating a new console window and typing `node --version`. The version should match the stable version of Node.js.

## NVM quick look

We now have sudo free use of the `node` and `npm` commands for the stable version of Node.js and NPM; but what if we want to work with other versions, or even IO.js?

To list all versions available for install, including IO.js:

```shell
nvm ls-remote
```

To install a particular version:

```shell
nvm install 0.12
```    

To list installed versions:

```shell
nvm ls
```

To use an installed version for the current console session:

```shell
nvm use 0.12
```    

To set an installed version as the default for all sessions:

```shell
nvm alias default 0.12
```

__IMPORTANT:__ _When switching versions of Node.js it is important to run the `npm build` command directly after. This rebuilds any native addons for the target version of Node.js amongst other things._

## Conclusion

By removing old Node.js installations and installing NVM we are now able to use both `node` and `npm` commands without the need for elevated permissions in the vast majority of cases. We also have the added benefit of using NVM to manage different versions of Node.js and even IO.js using our quick look section above. NVM installs all versions of Node.js and IO.js the same way so regardless of the particular version you are using it will always work, sudo free!

[001]: https://support.apple.com/en-ie/HT201560
[002]: https://github.com/creationix/nvm